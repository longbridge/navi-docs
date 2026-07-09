<script setup lang="ts">
import { ref, shallowRef, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import { useData } from 'vitepress'
import { registerNaviLanguage, NAVI_LANG_ID } from '../monarch'
import type { PlaygroundEngine } from '../composables/playground-engine'

const props = defineProps<{
  source: string
  engine: PlaygroundEngine | null
  readonly?: boolean
}>()

const emit = defineEmits<{
  change: [source: string]
  'show-docs': [info: { module: string; name: string } | null]
}>()

const { isDark } = useData()
const { t } = useI18n()

const container = ref<HTMLDivElement | null>(null)
const editorRef = shallowRef<import('monaco-editor').editor.IStandaloneCodeEditor | null>(null)
const monacoRef = shallowRef<typeof import('monaco-editor') | null>(null)
const disposables: import('monaco-editor').IDisposable[] = []

// Track whether we're programmatically setting editor value
let isSettingValue = false

// Track the last source text synced to the analyzer so that LSP providers
// can detect when the model text has diverged and re-analyze before querying.
let lastSyncedSource: string | null = null
const sourceApplyWaiters: Array<{ source: string; resolve: () => void }> = []

// Always cache the latest diagnostics so they can be re-applied after
// setValue (which replaces the model content) or when Monaco becomes ready.
type DiagnosticData = Array<{
  severity: string
  message: string
  // Flat format (used internally)
  startLine: number
  startCharacter: number
  endLine: number
  endCharacter: number
  fileId?: number
  filePath?: string
  // LSP range format (accepted as fallback when flat fields are missing)
  range?: { start: { line: number; character: number }; end: { line: number; character: number } }
}>
let lastDiagnostics: DiagnosticData = []

// Owner string used with monaco.editor.setModelMarkers so we can clear
// only our own markers without interfering with other providers.
const MARKER_OWNER = 'navi'
const RUNTIME_MARKER_OWNER = 'navi-runtime'

onMounted(async () => {
  if (!container.value) return

  const monaco = await import('monaco-editor')
  monacoRef.value = monaco

  // Guard: component may have unmounted during the async import
  if (!container.value) return

  // Setup Monaco environment for workers
  self.MonacoEnvironment = {
    getWorker(_: string, _label: string) {
      return new Worker(
        new URL('monaco-editor/esm/vs/editor/editor.worker.js', import.meta.url),
        { type: 'module' },
      )
    },
  }

  registerNaviLanguage(monaco)

  // Create editor
  const editor = monaco.editor.create(container.value, {
    value: props.source,
    language: NAVI_LANG_ID,
    theme: isDark.value ? 'vs-dark' : 'vs',
    minimap: { enabled: false },
    wordWrap: 'on',
    fontSize: 13,
    lineNumbers: 'on',
    scrollBeyondLastLine: false,
    automaticLayout: true,
    fixedOverflowWidgets: true,
    tabSize: 4,
    insertSpaces: true,
    readOnly: props.readonly ?? false,
    renderValidationDecorations: 'on',
    renderLineHighlight: 'line',
    padding: { top: 8 },
  })
  editorRef.value = editor

  // Listen to content changes
  disposables.push(
    editor.onDidChangeModelContent(() => {
      if (isSettingValue) return
      emit('change', editor.getValue())
    }),
  )

  // Register LSP providers when playground is ready
  registerLspProviders(monaco)

  // Apply any diagnostics that arrived before Monaco was ready
  applyMarkers()
  flushSourceApplyWaiters()
})

// Inject hover line-height override AFTER Monaco's runtime CSS has been loaded.
// Monaco injects its own <style> during editor.create(), so a <style> appended
// afterwards wins by source order without needing !important.
const hoverStyle = document.createElement('style')
hoverStyle.textContent = '.monaco-hover .hover-contents, .monaco-hover .hover-contents p, .monaco-hover .hover-contents pre, .monaco-hover .hover-contents code { line-height: 2; }'
document.head.appendChild(hoverStyle)

onUnmounted(() => {
  hoverStyle.remove()
  disposables.forEach(d => d.dispose())
  editorRef.value?.dispose()
  sourceApplyWaiters.splice(0).forEach(({ resolve }) => resolve())
})

// Update theme when dark mode changes
watch(isDark, (dark) => {
  monacoRef.value?.editor.setTheme(dark ? 'vs-dark' : 'vs')
})

// Update editor content when source changes externally (script load).
// Use flush:'sync' so the editor value is updated in the same tick as the
// source change, before the parent's analyzeAndRun() calls setDiagnostics().
// This prevents a race where setDiagnostics applies markers, and then an
// async watcher fires setValue which clears them.
watch(() => props.source, (newSource) => {
  const editor = editorRef.value
  if (!editor) return
  if (editor.getValue() !== newSource) {
    isSettingValue = true
    editor.setValue(newSource)
    isSettingValue = false
    // Re-apply cached diagnostics after a microtask to let any pending
    // setDiagnostics() update the cache first.
    nextTick(applyMarkers)
  }
  nextTick(flushSourceApplyWaiters)
}, { flush: 'sync' })

function flushSourceApplyWaiters() {
  const editor = editorRef.value
  if (!editor) return

  const currentSource = editor.getValue()
  for (let i = sourceApplyWaiters.length - 1; i >= 0; i -= 1) {
    if (sourceApplyWaiters[i].source === currentSource) {
      const [{ resolve }] = sourceApplyWaiters.splice(i, 1)
      resolve()
    }
  }
}

function whenSourceApplied(source: string): Promise<void> {
  const editor = editorRef.value
  if (editor && editor.getValue() === source) {
    return Promise.resolve()
  }

  return new Promise((resolve) => {
    sourceApplyWaiters.push({ source, resolve })
  })
}

// Update readonly when prop changes
watch(() => props.readonly, (ro) => {
  editorRef.value?.updateOptions({ readOnly: ro ?? false })
})

/**
 * Ensure the analyzer has the latest source text before an LSP query.
 *
 * The parent debounces `analyze()` at 300ms for performance, but LSP
 * providers (completions, hover, etc.) need up-to-date analysis *now*.
 * This helper calls `analyze()` only when the model text has actually
 * diverged from the last sync, avoiding redundant work.
 */
function ensureSourceSynced(engine: PlaygroundEngine, model: import('monaco-editor').editor.ITextModel) {
  const currentText = model.getValue()
  if (currentText !== lastSyncedSource) {
    engine.analyzer.analyze('script.nv', currentText)
    lastSyncedSource = currentText
  }
}

function registerLspProviders(monaco: typeof import('monaco-editor')) {
  // Fallback placeholder for navi:// URIs whose content cannot be loaded.
  // Prevents Monaco's createModelReference() from throwing "Model not found".
  const stdlibFallbackUri = monaco.Uri.parse('navi:///stdlib')
  const stdlibFallbackModel = monaco.editor.createModel('', NAVI_LANG_ID, stdlibFallbackUri)

  // Track dynamically created per-file stdlib models so they can be disposed.
  const createdStdlibModels: import('monaco-editor').editor.ITextModel[] = []

  disposables.push({
    dispose: () => {
      stdlibFallbackModel.dispose()
      createdStdlibModels.forEach(m => m.dispose())
    },
  })

  // Completion provider
  disposables.push(
    monaco.languages.registerCompletionItemProvider(NAVI_LANG_ID, {
      triggerCharacters: ['.'],
      provideCompletionItems(model, position) {
        const eng = props.engine
        if (!eng) return { suggestions: [] }

        ensureSourceSynced(eng, model)

        const result = eng.analyzer.completionsAt(
          position.lineNumber - 1,
          position.column - 1,
        ) as Array<{
          label: string
          kind: string
          detail?: string
          insertText?: string
          sortText?: string
          filterText?: string
        }> | null

        if (!result || !Array.isArray(result)) return { suggestions: [] }

        const word = model.getWordUntilPosition(position)
        const range = {
          startLineNumber: position.lineNumber,
          startColumn: word.startColumn,
          endLineNumber: position.lineNumber,
          endColumn: word.endColumn,
        }

        const suggestions = result.map((item) => ({
          label: item.label,
          kind: mapCompletionKind(monaco, item.kind),
          detail: item.detail ?? '',
          insertText: item.insertText ?? item.label,
          sortText: item.sortText,
          filterText: item.filterText,
          range,
        }))

        return { suggestions }
      },
    }),
  )

  // Hover provider
  disposables.push(
    monaco.languages.registerHoverProvider(NAVI_LANG_ID, {
      provideHover(model, position) {
        const eng = props.engine
        if (!eng) return null

        ensureSourceSynced(eng, model)

        const result = eng.analyzer.hoverAt(
          position.lineNumber - 1,
          position.column - 1,
          t('hover.ctrlClickDetails'),
        ) as { contents: string; range?: { start: { line: number; character: number }; end: { line: number; character: number } } } | null

        if (!result) return null

        return {
          contents: [
            {
              value: result.contents,
              isTrusted: true,
            },
          ],
          range: result.range
            ? {
                startLineNumber: result.range.start.line + 1,
                startColumn: result.range.start.character + 1,
                endLineNumber: result.range.end.line + 1,
                endColumn: result.range.end.character + 1,
              }
            : undefined,
        }
      },
    }),
  )

  // Definition provider
  disposables.push(
    monaco.languages.registerDefinitionProvider(NAVI_LANG_ID, {
      provideDefinition(model, position) {
        const eng = props.engine
        if (!eng) return null

        ensureSourceSynced(eng, model)

        const result = eng.analyzer.definitionAt(
          position.lineNumber - 1,
          position.column - 1,
        ) as { uri: string; range: { start: { line: number; character: number }; end: { line: number; character: number } } } | null

        if (!result) return null

        // When the definition points back to the cursor position itself
        // (e.g. hovering over `abc` in `abc() => 1`), return null so
        // Monaco doesn't show a misleading Ctrl+Click underline.
        if (result.uri === 'script.nv') {
          const r = result.range
          const line0 = position.lineNumber - 1
          const col0 = position.column - 1
          if (r.start.line <= line0 && r.end.line >= line0
            && (r.start.line < line0 || r.start.character <= col0)
            && (r.end.line > line0 || r.end.character >= col0)) {
            return null
          }
        }

        // For same-file definitions, use the current model's URI directly.
        // For stdlib/prelude definitions, create (or reuse) a named Monaco
        // model populated with the actual builtin source so that peek
        // definition shows real content.
        let targetUri: import('monaco-editor').Uri
        if (result.uri === 'script.nv') {
          targetUri = model.uri
        } else {
          const naviUri = monaco.Uri.parse(result.uri)
          if (!monaco.editor.getModel(naviUri)) {
            const content = eng.analyzer.getFileContent(result.uri) as string | null
            if (content !== null) {
              createdStdlibModels.push(
                monaco.editor.createModel(content, NAVI_LANG_ID, naviUri),
              )
              targetUri = naviUri
            } else {
              targetUri = stdlibFallbackUri
            }
          } else {
            targetUri = naviUri
          }
        }

        return {
          uri: targetUri,
          range: {
            startLineNumber: result.range.start.line + 1,
            startColumn: result.range.start.character + 1,
            endLineNumber: result.range.end.line + 1,
            endColumn: result.range.end.character + 1,
          },
        }
      },
    }),
  )

  // Intercept Ctrl+Click / F12 navigation to navi:/// URIs (stdlib/prelude).
  // Instead of opening a separate editor tab (which would navigate away from
  // the user's script), show peek definition inline so the user can read the
  // Intercept Ctrl+Click on stdlib/prelude symbols: open the stdlib docs
  // dialog instead of navigating away from the user's script.
  disposables.push(
    monaco.editor.registerEditorOpener({
      openCodeEditor(_source, resource) {
        if (resource.scheme !== 'navi') return false
        const eng = props.engine
        if (!eng) return true
        const editor = editorRef.value
        if (!editor) return true
        const pos = editor.getPosition()
        if (!pos) return true
        const model = editor.getModel()
        if (model) ensureSourceSynced(eng, model)
        const resolved = eng.analyzer.resolveSymbolAt(
          pos.lineNumber - 1,
          pos.column - 1,
        ) as { name: string; kind: string; module?: string; parent?: string } | null
        const docsKinds = new Set([
          'function', 'property', 'method', 'staticMethod',
          'object', 'enum', 'enumVariant',
        ])
        if (resolved?.module && docsKinds.has(resolved.kind)) {
          const name =
            resolved.kind === 'enumVariant' && resolved.parent
              ? resolved.parent
              : resolved.name
          emit('show-docs', { module: resolved.module, name })
        }
        return true // handled — prevent Monaco from navigating away
      },
    }),
  )

  // Stdlib docs action (Ctrl+Shift+D)
  disposables.push(
    monaco.editor.addEditorAction({
      id: 'navi.showStdlibDocs',
      label: 'Show Stdlib Docs',
      keybindings: [
        monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KeyD,
      ],
      run(editor) {
        const eng = props.engine
        if (!eng) return
        const pos = editor.getPosition()
        if (!pos) {
          emit('show-docs', null)
          return
        }
        const model = editor.getModel()
        if (model) ensureSourceSynced(eng, model)
        const resolved = eng.analyzer.resolveSymbolAt(
          pos.lineNumber - 1,
          pos.column - 1,
        ) as { name: string; kind: string; module?: string } | null
        if (resolved?.module) {
          emit('show-docs', { module: resolved.module, name: resolved.name })
        } else {
          emit('show-docs', null)
        }
      },
    }),
  )

  // Document color provider
  disposables.push(
    monaco.languages.registerColorProvider(NAVI_LANG_ID, {
      provideDocumentColors(model) {
        const eng = props.engine
        if (!eng) return []

        ensureSourceSynced(eng, model)

        const result = eng.analyzer.documentColors() as Array<{
          color: { red: number; green: number; blue: number; alpha: number }
          range: { start: { line: number; character: number }; end: { line: number; character: number } }
        }> | null

        if (!result) return []

        return result.map((item) => ({
          color: {
            red: item.color.red,
            green: item.color.green,
            blue: item.color.blue,
            alpha: item.color.alpha,
          },
          range: {
            startLineNumber: item.range.start.line + 1,
            startColumn: item.range.start.character + 1,
            endLineNumber: item.range.end.line + 1,
            endColumn: item.range.end.character + 1,
          },
        }))
      },

      provideColorPresentations(_model, colorInfo) {
        const eng = props.engine
        if (!eng) return []

        const { red, green, blue, alpha } = colorInfo.color
        const result = eng.analyzer.colorPresentations(red, green, blue, alpha) as string[] | null

        if (!result) return []

        return result.map((label) => ({ label }))
      },
    }),
  )

  // Signature help provider
  disposables.push(
    monaco.languages.registerSignatureHelpProvider(NAVI_LANG_ID, {
      signatureHelpTriggerCharacters: ['(', ','],
      provideSignatureHelp(model, position) {
        const eng = props.engine
        if (!eng) return null

        ensureSourceSynced(eng, model)

        const result = eng.analyzer.signatureHelpAt(
          position.lineNumber - 1,
          position.column - 1,
        ) as Array<{
          label: string
          parameters: Array<{
            label: string
            documentation?: string
            labelOffsets?: [number, number]
          }>
          activeParameter: number
          documentation?: string
        }> | null

        if (!result || result.length === 0) return null

        return {
          value: {
            signatures: result.map((sig) => ({
              label: sig.label,
              documentation: sig.documentation
                ? { value: sig.documentation }
                : undefined,
              parameters: sig.parameters.map((p) => ({
                label: p.labelOffsets
                  ? ([p.labelOffsets[0], p.labelOffsets[1]] as [number, number])
                  : p.label,
                documentation: p.documentation
                  ? { value: p.documentation }
                  : undefined,
              })),
            })),
            activeSignature: 0,
            activeParameter: result[0].activeParameter,
          },
          dispose() {},
        }
      },
    }),
  )

}

/** Cache diagnostics and apply them as model markers.
 *
 *  Called by the parent after `update_source()`. We also record the current
 *  editor text as the last synced source so `ensureSourceSynced()` can skip
 *  a redundant `update_source()` if the text hasn't changed since. */
function setDiagnostics(diagnostics: DiagnosticData) {
  lastDiagnostics = diagnostics
  lastSyncedSource = editorRef.value?.getValue() ?? null
  applyMarkers()
}

/** Set (or clear) a single runtime diagnostic marker with its own owner key.
 *
 *  Pass null to clear the runtime marker.  If the diagnostic originates
 *  from an external file (not "playground.nv"), no Monaco marker is set
 *  because the line/column would be meaningless in the main editor. */
function setRuntimeDiagnostic(diag: DiagnosticData[0] | null) {
  const monaco = monacoRef.value
  const editor = editorRef.value
  if (!monaco || !editor) return
  const model = editor.getModel()
  if (!model) return

  if (!diag) {
    monaco.editor.setModelMarkers(model, RUNTIME_MARKER_OWNER, [])
    return
  }

  // Skip marker for external-file diagnostics (positions don't match the editor).
  if (diag.filePath && diag.filePath !== 'script.nv') {
    monaco.editor.setModelMarkers(model, RUNTIME_MARKER_OWNER, [])
    return
  }

  const sl2 = diag.startLine ?? (diag as any).range?.start?.line ?? 0
  const sc2 = diag.startCharacter ?? (diag as any).range?.start?.character ?? 0
  const el2 = diag.endLine ?? (diag as any).range?.end?.line ?? sl2
  const ec2 = diag.endCharacter ?? (diag as any).range?.end?.character ?? sc2
  let startLineNumber = sl2 + 1
  let startColumn = sc2 + 1
  let endLineNumber = el2 + 1
  let endColumn = ec2 + 1

  if (startLineNumber === endLineNumber && startColumn === endColumn) {
    const word = model.getWordAtPosition({ lineNumber: startLineNumber, column: startColumn })
    if (word) {
      startColumn = word.startColumn
      endColumn = word.endColumn
    } else {
      const lineLength = model.getLineLength(startLineNumber)
      endColumn = lineLength + 1
    }
  }

  monaco.editor.setModelMarkers(model, RUNTIME_MARKER_OWNER, [{
    severity: monaco.MarkerSeverity.Error,
    message: diag.message,
    startLineNumber,
    startColumn,
    endLineNumber,
    endColumn,
  }])
}

/** Apply cached diagnostics via Monaco's native setModelMarkers API.
 *
 *  Only diagnostics from the main file ("playground.nv") are applied as
 *  Monaco markers.  Diagnostics from imported/external files are skipped
 *  because their line/column numbers refer to a different source text. */
function applyMarkers() {
  const monaco = monacoRef.value
  const editor = editorRef.value
  if (!monaco || !editor) return

  const model = editor.getModel()
  if (!model) return

  // Only create markers for main-file diagnostics (those without an external filePath).
  const mainFileDiags = lastDiagnostics.filter(
    d => !d.filePath || d.filePath === 'script.nv',
  )

  const markers: import('monaco-editor').editor.IMarkerData[] = mainFileDiags.map((d) => {
    // Support both flat format (startLine) and LSP range format (range.start.line)
    const sl = d.startLine ?? d.range?.start?.line ?? 0
    const sc = d.startCharacter ?? d.range?.start?.character ?? 0
    const el = d.endLine ?? d.range?.end?.line ?? sl
    const ec = d.endCharacter ?? d.range?.end?.character ?? sc
    let startLineNumber = sl + 1
    let startColumn = sc + 1
    let endLineNumber = el + 1
    let endColumn = ec + 1

    // When start == end (zero-width range), expand to cover the word at
    // the position, or the rest of the line.
    if (startLineNumber === endLineNumber && startColumn === endColumn) {
      const word = model.getWordAtPosition({ lineNumber: startLineNumber, column: startColumn })
      if (word) {
        startColumn = word.startColumn
        endColumn = word.endColumn
      } else {
        const lineLength = model.getLineLength(startLineNumber)
        if (startColumn <= lineLength) {
          endColumn = lineLength + 1
        } else {
          startColumn = 1
          endColumn = lineLength + 1
        }
      }
    }

    const severity = d.severity === 'error'
      ? monaco.MarkerSeverity.Error
      : d.severity === 'warning'
        ? monaco.MarkerSeverity.Warning
        : monaco.MarkerSeverity.Info

    return {
      severity,
      message: d.message,
      startLineNumber,
      startColumn,
      endLineNumber,
      endColumn,
    }
  })

  monaco.editor.setModelMarkers(model, MARKER_OWNER, markers)
}

/** Reveal a position and focus the editor. */
function revealPosition(lineNumber: number, column: number) {
  const editor = editorRef.value
  if (!editor) return
  editor.revealLineInCenter(lineNumber)
  editor.setPosition({ lineNumber, column })
  editor.focus()
}

/** Reveal and select a span in the editor. */
function revealAndSelect(startLine: number, startCol: number, endLine: number, endCol: number) {
  const editor = editorRef.value
  if (!editor) return
  const selection = {
    startLineNumber: startLine,
    startColumn: startCol,
    endLineNumber: endLine,
    endColumn: endCol,
  }
  editor.setSelection(selection)
  editor.revealRangeInCenter(selection)
  editor.focus()
}

defineExpose({ setDiagnostics, setRuntimeDiagnostic, revealPosition, revealAndSelect, whenSourceApplied })

function mapCompletionKind(
  monaco: typeof import('monaco-editor'),
  kind: string,
): import('monaco-editor').languages.CompletionItemKind {
  const map: Record<string, import('monaco-editor').languages.CompletionItemKind> = {
    function: monaco.languages.CompletionItemKind.Function,
    method: monaco.languages.CompletionItemKind.Method,
    variable: monaco.languages.CompletionItemKind.Variable,
    field: monaco.languages.CompletionItemKind.Field,
    property: monaco.languages.CompletionItemKind.Property,
    constant: monaco.languages.CompletionItemKind.Constant,
    module: monaco.languages.CompletionItemKind.Module,
    keyword: monaco.languages.CompletionItemKind.Keyword,
    snippet: monaco.languages.CompletionItemKind.Snippet,
    enum: monaco.languages.CompletionItemKind.Enum,
    enumMember: monaco.languages.CompletionItemKind.EnumMember,
    struct: monaco.languages.CompletionItemKind.Struct,
  }
  return map[kind] ?? monaco.languages.CompletionItemKind.Text
}
</script>

<template>
  <div ref="container" style="width: 100%; height: 100%;" @keydown.stop />
</template>
