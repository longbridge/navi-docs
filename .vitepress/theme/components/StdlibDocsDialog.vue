<script setup lang="ts">
import { ref, computed, watch, watchEffect, nextTick, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { DialogRoot, DialogTitle, DialogDescription, VisuallyHidden } from 'radix-vue'
import { Search, ChevronRight, ChevronDown, BookOpen, Code, Hash, Box, Library, ArrowLeft, ArrowRight } from 'lucide-vue-next'
import snarkdown from 'snarkdown'
import DialogContent from './ui/DialogContent.vue'
import type {
  StdlibDocs,
  FunctionEntry,
  TypeDefEntry,
  Overload,
  TypeRef,
} from '../types/stdlib-docs'

const props = defineProps<{
  open: boolean
  stdlibDocs: StdlibDocs | null
  initialModule?: string
  initialName?: string
}>()

const emit = defineEmits<{ close: [] }>()

const { t } = useI18n()

const search = ref('')
const selectedKey = ref<string | null>(null)
const expandedModules = ref<Set<string>>(new Set())
const expandedTypes = ref<Set<string>>(new Set())
const listEl = ref<HTMLElement | null>(null)
const searchEl = ref<HTMLInputElement | null>(null)

// ─── Data helpers ───────────────────────────────────────────────────────────

interface ListItem {
  key: string
  label: string
  module: string
  kind: 'function' | 'property' | 'type' | 'method' | 'staticmethod' | 'staticproperty'
  entry: FunctionEntry | TypeDefEntry
  parentType?: string  // set for type member items (method/staticmethod/staticproperty)
}

type SelectionKind = ListItem['kind']

function splitSelectionKey(key: string): { baseKey: string; kind?: SelectionKind } {
  if (key.endsWith('#type')) return { baseKey: key.slice(0, -5), kind: 'type' }
  if (key.endsWith('#function')) return { baseKey: key.slice(0, -9), kind: 'function' }
  if (key.endsWith('#property')) return { baseKey: key.slice(0, -9), kind: 'property' }
  return { baseKey: key }
}

function findItemBySelectionKey(key: string): ListItem | null {
  const { baseKey, kind } = splitSelectionKey(key)
  return allItems.value.find(i => i.key === baseKey && (!kind || i.kind === kind)) ?? null
}

const allItems = computed<ListItem[]>(() => {
  if (!props.stdlibDocs) return []
  const items: ListItem[] = []
  for (const [mod, doc] of Object.entries(props.stdlibDocs.modules)) {
    for (const fn of doc.functions) {
      const firstOverload = fn.overloads[0]
      const kind = firstOverload?.kind === 'property' ? 'property' as const : 'function' as const
      const label = mod === 'prelude' ? fn.name : `${mod}.${fn.name}`
      items.push({ key: `${mod}::${fn.name}`, label, module: mod, kind, entry: fn })
    }
    for (const td of doc.types) {
      const genericSuffix = td.genericParams?.length ? `<${td.genericParams.join(', ')}>` : ''
      const baseName = td.name + genericSuffix
      const typeLabel = mod === 'prelude' ? baseName : `${mod}.${baseName}`
      items.push({ key: `${mod}::${td.name}`, label: typeLabel, module: mod, kind: 'type', entry: td })
      // Add type members so they are searchable and selectable.
      // Order: staticmethod → staticproperty → method
      const members = [
        ...(td.staticMethods ?? []),
        ...(td.staticProperties ?? []),
        ...(td.methods ?? []),
      ]
      for (const f of members) {
        const firstOv = f.overloads[0]
        const memberKind = (firstOv?.kind ?? 'method') as 'method' | 'staticmethod' | 'staticproperty'
        const memberLabel = mod === 'prelude' ? `${baseName}.${f.name}` : `${mod}.${baseName}.${f.name}`
        items.push({
          key: `${mod}::${td.name}.${f.name}`,
          label: memberLabel,
          module: mod,
          kind: memberKind,
          entry: f,
          parentType: td.name,
        })
      }
    }
  }
  items.sort((a, b) => a.label.localeCompare(b.label))
  return items
})

const filteredItems = computed(() => {
  const q = search.value.toLowerCase()
  if (!q) return allItems.value
  return allItems.value.filter(i => i.label.toLowerCase().includes(q))
})

const moduleNames = computed(() => {
  if (!props.stdlibDocs) return []
  return Object.keys(props.stdlibDocs.modules)
    .filter(m => m !== 'prelude')
    .sort()
})

// Group items for the sidebar.
// When not searching: Types/Functions/Properties show prelude-only (top-level) items.
// When searching: all matching items are shown regardless of module.
const topTypes = computed(() => {
  const base = filteredItems.value.filter(i => i.kind === 'type')
  return search.value ? base : base.filter(i => i.module === 'prelude')
})
const topFunctions = computed(() => {
  if (search.value)
    return filteredItems.value.filter(i =>
      i.kind === 'function' || i.kind === 'method' || i.kind === 'staticmethod',
    )
  return filteredItems.value.filter(i => i.kind === 'function' && i.module === 'prelude')
})
const topProperties = computed(() => {
  if (search.value)
    return filteredItems.value.filter(i =>
      i.kind === 'property' || i.kind === 'staticproperty',
    )
  return filteredItems.value.filter(i => i.kind === 'property' && i.module === 'prelude')
})

const KIND_ORDER: Record<string, number> = {
  staticmethod: 0,
  staticproperty: 1,
  method: 2,
  property: 3,
}

// Returns type-member items sorted by kind (staticmethod → staticproperty → method → property),
// then alphabetically within each kind.
function typeMemberItems(typeKey: string): ListItem[] {
  const colonIdx = typeKey.indexOf('::')
  if (colonIdx === -1) return []
  const mod = typeKey.slice(0, colonIdx)
  const typeName = typeKey.slice(colonIdx + 2)
  return filteredItems.value
    .filter(i => i.module === mod && i.parentType === typeName)
    .sort((a, b) => {
      const ka = KIND_ORDER[a.kind] ?? 99
      const kb = KIND_ORDER[b.kind] ?? 99
      if (ka !== kb) return ka - kb
      return a.entry.name.localeCompare(b.entry.name)
    })
}

// Module items exclude type members (shown only when type is expanded).
function moduleItems(mod: string) {
  return filteredItems.value.filter(i => i.module === mod && !i.parentType)
}

function toggleType(key: string) {
  const next = new Set(expandedTypes.value)
  if (next.has(key)) next.delete(key)
  else next.add(key)
  expandedTypes.value = next
}

const selectedItem = computed(() => {
  if (!selectedKey.value) return null
  return findItemBySelectionKey(selectedKey.value)
})

const filteredCount = computed(() => filteredItems.value.length)

const selectedOverloadIdx = ref(0)
const displayedOverloads = computed<Overload[]>(() => {
  if (!selectedItem.value || !isFunctionEntry(selectedItem.value.entry)) return []
  return (selectedItem.value.entry as FunctionEntry).overloads
})

// Reset overload index when selected item changes
watch(selectedKey, () => {
  selectedOverloadIdx.value = 0
})

// ─── Selection and navigation ───────────────────────────────────────────────

// Navigation history
const navHistory = ref<string[]>([])
const navIndex = ref(-1)

const canGoBack = computed(() => navIndex.value > 0)
const canGoForward = computed(() => navIndex.value < navHistory.value.length - 1)

function pushHistory(key: string) {
  // Truncate any forward history, then append (skip if same as current)
  const next = navHistory.value.slice(0, navIndex.value + 1)
  if (next[next.length - 1] === key) return
  next.push(key)
  navHistory.value = next
  navIndex.value = next.length - 1
}

function applyKey(key: string, expandAndScroll = false) {
  selectedKey.value = key
  if (expandAndScroll) {
    const item = findItemBySelectionKey(key)
    if (item?.module && item.module !== 'prelude')
      expandedModules.value = new Set([...expandedModules.value, item.module])
    // If navigating to a type member, expand its parent type in the sidebar
    if (item?.parentType) {
      const typeKey = `${item.module}::${item.parentType}`
      expandedTypes.value = new Set([...expandedTypes.value, typeKey])
    }
    nextTick(() => scrollToSelected())
  }
}

function select(key: string) {
  pushHistory(key)
  applyKey(key)
}

function toggleModule(mod: string) {
  const next = new Set(expandedModules.value)
  if (next.has(mod)) next.delete(mod)
  else next.add(mod)
  expandedModules.value = next
}

function goBack() {
  if (!canGoBack.value) return
  navIndex.value--
  applyKey(navHistory.value[navIndex.value], true)
}

function goForward() {
  if (!canGoForward.value) return
  navIndex.value++
  applyKey(navHistory.value[navIndex.value], true)
}

// Alt+Left / Alt+Right keyboard shortcuts for back/forward
function onKeydown(e: KeyboardEvent) {
  if (!props.open) return
  if (e.altKey && e.key === 'ArrowLeft') { e.preventDefault(); goBack() }
  if (e.altKey && e.key === 'ArrowRight') { e.preventDefault(); goForward() }
}
if (typeof window !== 'undefined') window.addEventListener('keydown', onKeydown)
onUnmounted(() => { if (typeof window !== 'undefined') window.removeEventListener('keydown', onKeydown) })

// When opened, reset history and navigate to the initial symbol
watch(() => props.open, async (isOpen) => {
  if (!isOpen) return
  navHistory.value = []
  navIndex.value = -1
  search.value = ''
  if (props.initialModule && props.initialName) {
    let key = `${props.initialModule}::${props.initialName}`
    if (!allItems.value.find(i => i.key === key)) {
      // Module name mismatch (LSP returns e.g. 'format_enums', docs index under
      // 'prelude'): fall back to searching by name only.
      const found = allItems.value.find(i => i.entry.name === props.initialName)
      if (found) key = found.key
    }
    pushHistory(key)
    selectedKey.value = key
    if (props.initialModule !== 'prelude') {
      expandedModules.value = new Set([props.initialModule])
    }
    // If the item is a type member, also expand its parent type
    const found = allItems.value.find(i => i.key === key)
    if (found?.parentType) {
      const typeKey = `${found.module}::${found.parentType}`
      expandedTypes.value = new Set([typeKey])
    }
    await nextTick()
    scrollToSelected()
  } else {
    const key = allItems.value[0]?.key ?? null
    if (key) { pushHistory(key); selectedKey.value = key }
  }
  // Auto-focus search field
  await nextTick()
  searchEl.value?.focus()
})

function scrollToSelected() {
  if (!listEl.value || !selectedKey.value) return
  const { baseKey } = splitSelectionKey(selectedKey.value)
  const el = listEl.value.querySelector(`[data-key="${CSS.escape(baseKey)}"]`)
  el?.scrollIntoView({ block: 'center' })
}

function jumpToSection(section: string) {
  if (!listEl.value) return
  const anchor = listEl.value.querySelector<HTMLElement>(`[data-section="${section}"]`)
  if (!anchor) return
  // Use getBoundingClientRect delta rather than scrollIntoView, because sticky
  // headers already at the top are considered "visible" and scrollIntoView does nothing.
  const delta = anchor.getBoundingClientRect().top - listEl.value.getBoundingClientRect().top
  listEl.value.scrollBy({ top: delta, behavior: 'smooth' })
}

const visibleSectionCount = computed(() =>
  (topTypes.value.length > 0 ? 1 : 0) +
  (topFunctions.value.length > 0 ? 1 : 0) +
  (topProperties.value.length > 0 ? 1 : 0) +
  (!search.value && moduleNames.value.length > 0 ? 1 : 0)
)

// ─── Formatting helpers ─────────────────────────────────────────────────────

function formatTypeRef(t: TypeRef | undefined): string {
  if (!t) return ''
  const vt = t.valueType
  let name = vt.module ? `${vt.module}.${vt.name}` : vt.name
  if (vt.genericArgs?.length) {
    name += `<${vt.genericArgs.map(formatTypeRef).join(', ')}>`
  }
  return t.qualifier ? `${t.qualifier} ${name}` : name
}

function formatParam(p: Overload['params'][number]): string {
  // Navi style: `name: type` (with qualifier if present)
  let s = p.name
  if (p.type) {
    const typeStr = formatTypeRef(p.type)
    s += `: ${typeStr}`
  }
  if (p.isVariadic) s += '...'
  if (p.defaultExpr) s += ` = ${p.defaultExpr}`
  else if (p.defaultValue !== undefined && p.defaultValue !== null) s += ` = ${JSON.stringify(p.defaultValue)}`
  return s
}

/**
 * The display name to pass to formatSignature. Methods and static members
 * already include the receiver type as prefix, so we use only the bare name;
 * for module-level functions we keep the module-qualified label.
 */
function signatureLabel(item: ListItem, overload: Overload): string {
  if (['method', 'staticmethod', 'staticproperty'].includes(overload.kind))
    return item.entry.name
  return item.label
}

/** Compact single-line signature for overload selector buttons. */
function formatSignature(name: string, overload: Overload): string {
  if (overload.kind === 'property' || overload.kind === 'staticproperty') {
    const receiver = overload.receiverType ? `${formatTypeRef(overload.receiverType)}.` : ''
    const ret = overload.returnType ? `: ${formatTypeRef(overload.returnType)}` : ''
    return `${receiver}${name}${ret}`
  }
  const receiver = (overload.kind === 'method' || overload.kind === 'staticmethod') && overload.receiverType
    ? `${formatTypeRef(overload.receiverType)}.`
    : ''
  const params = overload.params.map(formatParam).join(', ')
  const ret = overload.returnType ? `: ${formatTypeRef(overload.returnType)}` : ''
  const prefix = overload.kind === 'method' ? 'method ' : ''
  return `${prefix}${receiver}${name}(${params})${ret}`
}

/** Multi-line signature for the Syntax block (one param per line when > 2). */
function formatSignatureBlock(name: string, overload: Overload): string {
  if (overload.kind === 'property' || overload.kind === 'staticproperty') {
    const receiver = overload.receiverType ? `${formatTypeRef(overload.receiverType)}.` : ''
    const ret = overload.returnType ? `: ${formatTypeRef(overload.returnType)}` : ''
    return `${receiver}${name}${ret}`
  }
  const receiver = (overload.kind === 'method' || overload.kind === 'staticmethod') && overload.receiverType
    ? `${formatTypeRef(overload.receiverType)}.`
    : ''
  const ret = overload.returnType ? `: ${formatTypeRef(overload.returnType)}` : ''
  const prefix = overload.kind === 'method' ? 'method ' : ''
  if (overload.params.length > 2) {
    const params = overload.params.map(formatParam).join(',\n    ')
    return `${prefix}${receiver}${name}(\n    ${params}\n  )${ret}`
  }
  const params = overload.params.map(formatParam).join(', ')
  return `${prefix}${receiver}${name}(${params})${ret}`
}

function isFunctionEntry(entry: FunctionEntry | TypeDefEntry): entry is FunctionEntry {
  return 'overloads' in entry
}

/** Render a TypeRef as HTML, making the core type name a clickable .doc-ref button when resolvable. */
function formatTypeRefHtml(t: TypeRef | undefined): string {
  if (!t) return ''
  const vt = t.valueType

  let key: string | null = null
  let displayName: string
  if (vt.module) {
    displayName = `${vt.module}.${vt.name}`
    const k = `${vt.module}::${vt.name}`
    key = allItems.value.find(i => i.key === k && i.kind === 'type') ? `${k}#type` : null
  } else {
    displayName = vt.name
    const prelKey = `prelude::${vt.name}`
    if (allItems.value.find(i => i.key === prelKey && i.kind === 'type')) {
      key = `${prelKey}#type`
    } else {
      const match = allItems.value.find(i => i.entry.name === vt.name && i.kind === 'type')
      key = match ? `${match.key}#type` : null
    }
  }

  let nameHtml = key
    ? `<button class="doc-ref" data-key="${key}">${displayName}</button>`
    : displayName
  if (vt.genericArgs?.length) {
    nameHtml += `&lt;${vt.genericArgs.map(formatTypeRefHtml).join(', ')}&gt;`
  }
  return t.qualifier ? `${t.qualifier} ${nameHtml}` : nameHtml
}

/**
 * Resolve a cross-reference text to a list-item key.
 * Supports optional qualifier prefix: "func:plot", "type:hline", "enum:foo",
 * dotted module paths: "plot.style_line", and bare names: "fill".
 */
function resolveDocRef(ref: string, currentModule?: string): string | null {
  // Parse optional qualifier prefix (func / type / enum)
  let qualifier: string | undefined
  let name = ref
  if (ref.includes(':')) {
    const ci = ref.indexOf(':')
    qualifier = ref.slice(0, ci)
    name = ref.slice(ci + 1)
  }

  function matchesQualifier(item: ListItem): boolean {
    if (!qualifier) return true
    if (qualifier === 'func') return item.kind === 'function' || item.kind === 'property'
    if (qualifier === 'type') return item.kind === 'type'
    if (qualifier === 'enum') return item.kind === 'type' && (item.entry as TypeDefEntry).kind === 'enum'
    return true
  }

  if (name.includes('.')) {
    const di = name.indexOf('.')
    const mod = name.slice(0, di)
    const sym = name.slice(di + 1)
    // `variant:TypeName.VariantName` — explicit enum variant qualifier.
    if (qualifier === 'variant') {
      const variantMatch = allItems.value.find(
        i => i.entry.name === mod && i.kind === 'type' && (i.entry as TypeDefEntry).kind === 'enum' &&
          (i.entry as TypeDefEntry).variants?.some(v => v.name === sym)
      )
      return variantMatch ? `${variantMatch.key}#type` : null
    }
    // First try as a module member (e.g. "barmerge.gaps_off").
    const key = `${mod}::${sym}`
    const match = allItems.value.find(i => i.key === key && matchesQualifier(i))
    if (match) return qualifier === 'type' || qualifier === 'enum' ? `${key}#type` : key
    // Fall back: check if `mod` is an enum type name and `sym` is one of its variants.
    // Resolve to the enum type itself.
    const enumTypeMatch = allItems.value.find(
      i => i.entry.name === mod && i.kind === 'type' && (i.entry as TypeDefEntry).kind === 'enum' &&
        (i.entry as TypeDefEntry).variants?.some(v => v.name === sym)
    )
    if (enumTypeMatch) return `${enumTypeMatch.key}#type`
    return null
  }
  // Bare name: prefer current module → prelude → global search
  if (currentModule) {
    const curKey = `${currentModule}::${name}`
    const match = allItems.value.find(i => i.key === curKey && matchesQualifier(i))
    if (match) return qualifier === 'type' || qualifier === 'enum' ? `${curKey}#type` : curKey
  }
  const prelKey = `prelude::${name}`
  const preludeMatch = allItems.value.find(i => i.key === prelKey && matchesQualifier(i))
  if (preludeMatch) return qualifier === 'type' || qualifier === 'enum' ? `${prelKey}#type` : prelKey
  const globalMatch = allItems.value.find(i => i.entry.name === name && matchesQualifier(i))
  if (!globalMatch) return null
  return qualifier === 'type' || qualifier === 'enum' ? `${globalMatch.key}#type` : globalMatch.key
}

/** Navigate to the symbol identified by key, pushing it onto the history stack. */
function navigateTo(key: string) {
  pushHistory(key)
  applyKey(key, true)
}

/** Click event delegate for the right detail panel — handles .doc-ref button clicks. */
function handleDetailPanelClick(e: MouseEvent) {
  const btn = (e.target as Element).closest<HTMLElement>('.doc-ref')
  if (!btn?.dataset.key) return
  navigateTo(btn.dataset.key)
}

/**
 * Render inline Markdown to HTML via snarkdown, with cross-reference link support.
 * Cross-references [`name`] / [`qualifier:name`] / [`module.name`] are resolved
 * BEFORE snarkdown runs, because snarkdown treats [...] as link anchors and would
 * produce broken <a href="undefined"> elements otherwise.
 * currentModule is used for bare-name resolution (current module takes priority).
 */
function md(text: string | undefined | null, currentModule?: string): string {
  if (!text) return ''
  const normalized = text.replace(/\r\n?/g, '\n')
  const replacements: string[] = []
  // Replace cross-references with stable placeholders first so snarkdown
  // doesn't reinterpret underscores inside identifiers or data-key values.
  const preprocessed = normalized.replace(/\[`((?:\w+:)?[\w.]+)`\]/g, (_, ref) => {
    const displayText = ref.includes(':') ? ref.slice(ref.indexOf(':') + 1) : ref
    const key = resolveDocRef(ref, currentModule)
    const html = key
      ? `<button class="doc-ref" data-key="${key}"><code>${displayText}</code></button>`
      : `<code>${displayText}</code>`
    const token = `@@DOCREF${replacements.length}@@`
    replacements.push(html)
    return token
  })
  let rendered = snarkdown(preprocessed)
  replacements.forEach((html, idx) => {
    rendered = rendered.replaceAll(`@@DOCREF${idx}@@`, html)
  })
  return rendered
}

// ─── Syntax highlighting via Monaco colorize ────────────────────────────────

/** Cache: raw signature text → highlighted HTML. */
const colorizeCache = new Map<string, string>()
/** Reactive highlighted HTML for compact signatures (overload selector). */
const highlightedSignatures = ref<Record<number, string>>({})
/** Reactive highlighted HTML for block signatures (Syntax section). */
const highlightedSignatureBlocks = ref<Record<number, string>>({})
/** Reactive highlighted HTML for example code blocks, keyed by overload index then example index. */
const highlightedExamples = ref<Record<number, string[]>>({})
/** Reactive highlighted HTML for type example blocks. */
const highlightedTypeExamples = ref<string[]>([])

let monacoModule: typeof import('monaco-editor') | null = null

async function getMonaco() {
  if (!monacoModule) {
    monacoModule = await import('monaco-editor')
    const { registerNaviLanguage } = await import('../monarch')
    registerNaviLanguage(monacoModule)
  }
  return monacoModule
}

async function colorizeSignature(text: string): Promise<string> {
  const cached = colorizeCache.get(text)
  if (cached) return cached
  const monaco = await getMonaco()
  // Colorize using Navi syntax highlighting (primary language).
  const html = await monaco.editor.colorize(text, 'navi', { tabSize: 2 })
  colorizeCache.set(text, html)
  return html
}

// Re-colorize whenever the selected item changes.
watchEffect(async () => {
  if (!selectedItem.value) {
    highlightedSignatures.value = {}
    highlightedSignatureBlocks.value = {}
    highlightedExamples.value = {}
    highlightedTypeExamples.value = []
    return
  }
  const item = selectedItem.value

  if (isFunctionEntry(item.entry)) {
    const entry = item.entry as FunctionEntry
    const compact: Record<number, string> = {}
    const blocks: Record<number, string> = {}
    const examples: Record<number, string[]> = {}
    await Promise.all(
      entry.overloads.map(async (overload, idx) => {
        const name = signatureLabel(item, overload)
        const [c, b] = await Promise.all([
          colorizeSignature(formatSignature(name, overload)),
          colorizeSignature(formatSignatureBlock(name, overload)),
        ])
        compact[idx] = c
        blocks[idx] = b
        if (overload.examples?.length) {
          examples[idx] = await Promise.all(overload.examples.map(ex => colorizeSignature(ex)))
        }
      }),
    )
    if (selectedItem.value?.key === item.key) {
      highlightedSignatures.value = compact
      highlightedSignatureBlocks.value = blocks
      highlightedExamples.value = examples
    }
  } else {
    highlightedSignatures.value = {}
    highlightedSignatureBlocks.value = {}
    highlightedExamples.value = {}
    const typeEntry = item.entry as TypeDefEntry
    if (typeEntry.examples?.length) {
      const colorized = await Promise.all(typeEntry.examples.map(ex => colorizeSignature(ex)))
      if (selectedItem.value?.key === item.key) {
        highlightedTypeExamples.value = colorized
      }
    } else {
      highlightedTypeExamples.value = []
    }
  }
})

</script>

<template>
  <DialogRoot :open="open" @update:open="(v: boolean) => { if (!v) emit('close') }">
    <DialogContent
      class="!max-w-5xl !w-[90vw] !h-[80vh] !p-0 flex flex-col !gap-0 overflow-hidden"
    >
      <!-- Header -->
      <div class="flex items-center gap-2.5 pl-5 pr-10 py-3.5 border-b bg-muted/30 shrink-0">
        <BookOpen class="h-5 w-5 text-primary shrink-0" />
        <DialogTitle as-child>
          <h2 class="text-base font-semibold leading-tight">{{ t('stdlibDialog.title') }}</h2>
        </DialogTitle>
        <VisuallyHidden as-child>
          <DialogDescription>Navi standard library API reference</DialogDescription>
        </VisuallyHidden>
        <div class="w-px h-4 bg-border shrink-0 mx-0.5" />
        <div class="flex items-center gap-0.5">
          <button
            @click="goBack"
            :disabled="!canGoBack"
            class="h-7 w-7 flex items-center justify-center rounded transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:bg-accent cursor-pointer"
            title="Back (Alt+←)"
          >
            <ArrowLeft class="h-4 w-4" />
          </button>
          <button
            @click="goForward"
            :disabled="!canGoForward"
            class="h-7 w-7 flex items-center justify-center rounded transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:bg-accent cursor-pointer"
            title="Forward (Alt+→)"
          >
            <ArrowRight class="h-4 w-4" />
          </button>
        </div>
      </div>

      <div class="flex flex-1 min-h-0 overflow-hidden">
        <!-- Left sidebar -->
        <div class="w-60 shrink-0 border-r flex flex-col min-h-0 bg-muted/20">
          <!-- Search -->
          <div class="p-2.5 border-b">
            <div class="relative">
              <Search class="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
              <input
                ref="searchEl"
                v-model="search"
                type="text"
                :placeholder="t('stdlibDialog.filterSymbols')"
                class="w-full h-8 pl-8 pr-2 text-sm rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/40 focus:border-primary/50 transition-shadow placeholder:text-muted-foreground/60"
              />
            </div>
            <p v-if="search" class="text-[10px] text-muted-foreground mt-1.5 px-0.5">
              {{ filteredCount === 1 ? t('stdlibDialog.resultCountOne') : t('stdlibDialog.resultCount', { count: filteredCount }) }}
            </p>
          </div>

          <!-- Section quick-jump bar -->
          <div v-if="visibleSectionCount > 1" class="flex border-b shrink-0">
            <button v-if="topTypes.length" @click="jumpToSection('types')"
              class="flex-1 flex items-center justify-center gap-1 py-1.5 text-[10px] text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors cursor-pointer">
              <Box class="h-3 w-3 shrink-0" />{{ t('stdlibDialog.types') }}
            </button>
            <button v-if="topFunctions.length" @click="jumpToSection('functions')"
              class="flex-1 flex items-center justify-center gap-1 py-1.5 text-[10px] text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors cursor-pointer">
              <Code class="h-3 w-3 shrink-0" />{{ t('stdlibDialog.functions') }}
            </button>
            <button v-if="topProperties.length" @click="jumpToSection('properties')"
              class="flex-1 flex items-center justify-center gap-1 py-1.5 text-[10px] text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors cursor-pointer">
              <Hash class="h-3 w-3 shrink-0" />{{ t('stdlibDialog.properties') }}
            </button>
            <button v-if="!search && moduleNames.length" @click="jumpToSection('modules')"
              class="flex-1 flex items-center justify-center gap-1 py-1.5 text-[10px] text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors cursor-pointer">
              <Library class="h-3 w-3 shrink-0" />{{ t('stdlibDialog.modules') }}
            </button>
          </div>

          <!-- List -->
          <div ref="listEl" class="flex-1 overflow-y-auto text-[13px] leading-relaxed">
            <!-- Types -->
            <template v-if="topTypes.length">
              <div data-section="types" />
              <div class="flex items-center gap-1.5 px-3 pt-3 pb-1 text-[10px] font-semibold text-muted-foreground uppercase tracking-widest select-none sticky top-0 bg-muted/20 backdrop-blur-sm z-10">
                <Box class="h-3 w-3" />
                {{ t('stdlibDialog.types') }}
              </div>
              <div v-for="item in topTypes" :key="item.key">
                <!-- Type row: chevron (expand) + name (select) -->
                <div class="flex items-center">
                  <button
                    class="shrink-0 h-[27px] w-6 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                    :class="!typeMemberItems(item.key).length && 'opacity-0 pointer-events-none'"
                    @click.stop="toggleType(item.key)"
                  >
                    <ChevronRight class="h-3 w-3 transition-transform duration-150" :class="expandedTypes.has(item.key) && 'rotate-90'" />
                  </button>
                  <button
                    :data-key="item.key"
                    class="flex-1 min-w-0 text-left pr-2 py-[5px] truncate transition-colors cursor-pointer border-l-2"
                    :class="selectedKey === item.key
                      ? 'bg-primary/10 text-primary font-medium border-primary'
                      : 'hover:bg-accent/50 border-transparent'"
                    @click="select(item.key)"
                  >
                    {{ item.label }}
                  </button>
                </div>
                <!-- Type members (methods / static methods / static properties) -->
                <div class="grid transition-[grid-template-rows] duration-150 ease-out" :class="expandedTypes.has(item.key) ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'">
                  <div class="overflow-hidden">
                    <button
                      v-for="member in typeMemberItems(item.key)"
                      :key="member.key"
                      :data-key="member.key"
                      class="w-full text-left pl-8 pr-2 py-[4px] truncate transition-colors cursor-pointer flex items-center gap-1.5 border-l-2"
                      :class="selectedKey === member.key
                        ? 'bg-primary/10 text-primary font-medium border-primary'
                        : 'hover:bg-accent/50 border-transparent text-muted-foreground hover:text-foreground'"
                      @click="select(member.key)"
                    >
                      <span class="truncate text-[12px]">{{ member.entry.name }}</span>
                      <span class="shrink-0 text-[9px] uppercase tracking-wider opacity-50">{{ member.kind === 'staticproperty' ? 'prop' : member.kind === 'staticmethod' ? 'static' : '' }}</span>
                    </button>
                  </div>
                </div>
              </div>
            </template>

            <!-- Functions -->
            <template v-if="topFunctions.length">
              <div data-section="functions" />
              <div class="flex items-center gap-1.5 px-3 pt-3 pb-1 text-[10px] font-semibold text-muted-foreground uppercase tracking-widest select-none sticky top-0 bg-muted/20 backdrop-blur-sm z-10">
                <Code class="h-3 w-3" />
                {{ t('stdlibDialog.functions') }}
              </div>
              <button
                v-for="item in topFunctions"
                :key="item.key"
                :data-key="item.key"
                class="group w-full text-left px-3 py-[5px] truncate transition-colors cursor-pointer"
                :class="selectedKey === item.key
                  ? 'bg-primary/10 text-primary font-medium border-l-2 border-primary'
                  : 'hover:bg-accent/50 border-l-2 border-transparent'"
                @click="select(item.key)"
              >
                {{ item.label }}
              </button>
            </template>

            <!-- Properties -->
            <template v-if="topProperties.length">
              <div data-section="properties" />
              <div class="flex items-center gap-1.5 px-3 pt-3 pb-1 text-[10px] font-semibold text-muted-foreground uppercase tracking-widest select-none sticky top-0 bg-muted/20 backdrop-blur-sm z-10">
                <Hash class="h-3 w-3" />
                {{ t('stdlibDialog.properties') }}
              </div>
              <button
                v-for="item in topProperties"
                :key="item.key"
                :data-key="item.key"
                class="group w-full text-left px-3 py-[5px] truncate transition-colors cursor-pointer"
                :class="selectedKey === item.key
                  ? 'bg-primary/10 text-primary font-medium border-l-2 border-primary'
                  : 'hover:bg-accent/50 border-l-2 border-transparent'"
                @click="select(item.key)"
              >
                {{ item.label }}
              </button>
            </template>

            <!-- Modules (collapsed tree, only when not searching) -->
            <template v-if="!search">
              <div data-section="modules" />
              <div class="flex items-center gap-1.5 px-3 pt-3 pb-1 text-[10px] font-semibold text-muted-foreground uppercase tracking-widest select-none sticky top-0 bg-muted/20 backdrop-blur-sm z-10">
                <Library class="h-3 w-3" />
                {{ t('stdlibDialog.modules') }}
              </div>
              <div v-for="mod in moduleNames" :key="mod">
                <button
                  class="w-full text-left px-3 py-[5px] flex items-center gap-1.5 hover:bg-accent/50 transition-colors font-medium cursor-pointer border-l-2 border-transparent"
                  @click="toggleModule(mod)"
                >
                  <ChevronRight class="h-3 w-3 shrink-0 text-muted-foreground transition-transform duration-150" :class="expandedModules.has(mod) && 'rotate-90'" />
                  {{ mod }}
                </button>
                <div class="grid transition-[grid-template-rows] duration-150 ease-out" :class="expandedModules.has(mod) ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'">
                  <div class="overflow-hidden">
                    <template v-for="item in moduleItems(mod)" :key="item.key">
                      <!-- Type item: expandable if it has members -->
                      <template v-if="item.kind === 'type'">
                        <div class="flex items-center pl-4">
                          <button
                            class="shrink-0 h-[27px] w-5 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                            :class="!typeMemberItems(item.key).length && 'opacity-0 pointer-events-none'"
                            @click.stop="toggleType(item.key)"
                          >
                            <ChevronRight class="h-3 w-3 transition-transform duration-150" :class="expandedTypes.has(item.key) && 'rotate-90'" />
                          </button>
                          <button
                            :data-key="item.key"
                            class="flex-1 min-w-0 text-left pr-2 py-[5px] truncate transition-colors cursor-pointer border-l-2"
                            :class="selectedKey === item.key
                              ? 'bg-primary/10 text-primary font-medium border-primary'
                              : 'hover:bg-accent/50 border-transparent'"
                            @click="select(item.key)"
                          >
                            {{ item.entry.name }}
                          </button>
                        </div>
                        <!-- Type members within module -->
                        <div class="grid transition-[grid-template-rows] duration-150 ease-out" :class="expandedTypes.has(item.key) ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'">
                          <div class="overflow-hidden">
                            <button
                              v-for="member in typeMemberItems(item.key)"
                              :key="member.key"
                              :data-key="member.key"
                              class="w-full text-left pl-12 pr-2 py-[4px] truncate transition-colors cursor-pointer flex items-center gap-1.5 border-l-2"
                              :class="selectedKey === member.key
                                ? 'bg-primary/10 text-primary font-medium border-primary'
                                : 'hover:bg-accent/50 border-transparent text-muted-foreground hover:text-foreground'"
                              @click="select(member.key)"
                            >
                              <span class="truncate text-[12px]">{{ member.entry.name }}</span>
                              <span class="shrink-0 text-[9px] uppercase tracking-wider opacity-50">{{ member.kind === 'staticproperty' ? 'prop' : member.kind === 'staticmethod' ? 'static' : '' }}</span>
                            </button>
                          </div>
                        </div>
                      </template>
                      <!-- Non-type item: simple button -->
                      <button
                        v-else
                        :data-key="item.key"
                        class="w-full text-left pl-8 pr-3 py-[5px] truncate transition-colors cursor-pointer border-l-2"
                        :class="selectedKey === item.key
                          ? 'bg-primary/10 text-primary font-medium border-primary'
                          : 'hover:bg-accent/50 border-transparent'"
                        @click="select(item.key)"
                      >
                        {{ item.entry.name }}
                      </button>
                    </template>
                  </div>
                </div>
              </div>
            </template>

            <!-- Empty state -->
            <div v-if="search && filteredCount === 0" class="px-3 py-6 text-center text-sm text-muted-foreground">
              {{ t('stdlibDialog.noMatch', { query: search }) }}
            </div>
          </div>
        </div>

        <!-- Right detail panel -->
        <div class="flex-1 overflow-y-auto min-w-0" @click="handleDetailPanelClick">
          <!-- Function / Property detail -->
          <template v-if="selectedItem && isFunctionEntry(selectedItem.entry)">
            <!-- Title bar -->
            <div class="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b px-5 py-3">
              <div class="flex items-center gap-2.5">
                <h2 class="text-lg font-semibold font-mono tracking-tight">{{ selectedItem.label }}</h2>
                <span class="text-[10px] font-medium uppercase tracking-wider px-1.5 py-0.5 rounded-full"
                  :class="selectedItem.kind === 'property'
                    ? 'bg-amber-500/15 text-amber-700 dark:text-amber-400'
                    : 'bg-blue-500/15 text-blue-700 dark:text-blue-400'"
                >
                  {{ (selectedItem.entry as FunctionEntry).overloads[selectedOverloadIdx]?.kind ?? (selectedItem.entry as FunctionEntry).overloads[0]?.kind }}
                </span>
                <span v-if="selectedItem.module !== 'prelude'" class="text-[10px] font-medium uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-muted text-muted-foreground">
                  {{ selectedItem.module }}
                </span>
              </div>
            </div>

            <!-- Overload selector (only when multiple overloads) -->
            <div v-if="(selectedItem.entry as FunctionEntry).overloads.length > 1" class="px-5 pt-4">
              <div class="flex flex-col gap-0.5 border rounded-lg p-1.5 bg-muted/30">
                <button
                  v-for="(overload, idx) in (selectedItem.entry as FunctionEntry).overloads"
                  :key="idx"
                  class="w-full text-left px-2.5 py-1.5 rounded-md text-[12px] font-mono leading-relaxed transition-all cursor-pointer break-all border"
                  :class="selectedOverloadIdx === idx
                    ? 'bg-background border-primary text-foreground shadow-sm ring-1 ring-primary/20'
                    : 'border-border/50 text-muted-foreground hover:bg-muted/60 hover:text-foreground'"
                  @click="selectedOverloadIdx = idx"
                >
                  <span v-if="highlightedSignatures[idx]" v-html="highlightedSignatures[idx]" />
                  <span v-else>{{ formatSignature(signatureLabel(selectedItem, overload), overload) }}</span>
                </button>
              </div>
            </div>

            <!-- Selected overload content -->
            <div
              v-for="(overload, idx) in displayedOverloads"
              :key="idx"
              v-show="selectedOverloadIdx === idx"
            >
              <div class="px-5 py-4 space-y-5">
                <!-- Description -->
                <div
                  v-if="overload.description"
                  class="text-sm leading-relaxed text-foreground/90 [&_p]:m-0 [&_p+p]:mt-4"
                  v-html="md(overload.description, selectedItem.module)"
                />

                <!-- Syntax (only when single overload — selector already shows signatures) -->
                <div v-if="(selectedItem.entry as FunctionEntry).overloads.length === 1">
                  <h3 class="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">{{ t('stdlibDialog.syntax') }}</h3>
                  <pre
                    v-if="highlightedSignatureBlocks[idx]"
                    class="bg-muted/60 border rounded-lg p-3.5 text-[13px] font-mono leading-relaxed whitespace-pre-wrap"
                    v-html="highlightedSignatureBlocks[idx]"
                  />
                  <pre v-else class="bg-muted/60 border rounded-lg p-3.5 text-[13px] font-mono leading-relaxed whitespace-pre-wrap text-foreground/90">{{ formatSignatureBlock(signatureLabel(selectedItem, overload), overload) }}</pre>
                </div>

                <!-- Parameters -->
                <div v-if="overload.params.length && overload.kind !== 'property'">
                  <h3 class="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">{{ t('stdlibDialog.parametersSection') }}</h3>
                  <div class="border rounded-lg overflow-hidden">
                    <table class="w-full text-sm">
                      <thead>
                        <tr class="bg-muted/40 border-b">
                          <th class="text-left py-2 px-3 text-xs font-semibold text-muted-foreground w-[120px]">{{ t('stdlibDialog.name') }}</th>
                          <th class="text-left py-2 px-3 text-xs font-semibold text-muted-foreground w-[180px]">{{ t('stdlibDialog.type') }}</th>
                          <th class="text-left py-2 px-3 text-xs font-semibold text-muted-foreground">{{ t('stdlibDialog.description') }}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="p in overload.params" :key="p.name" class="border-b last:border-0 hover:bg-muted/30 transition-colors">
                          <td class="py-2 px-3 font-mono text-xs text-primary/90 whitespace-nowrap align-top">
                            {{ p.name }}<span v-if="p.isVariadic" class="text-muted-foreground">...</span>
                          </td>
                          <td class="py-2 px-3 font-mono text-xs text-muted-foreground whitespace-nowrap align-top" v-html="formatTypeRefHtml(p.type)" />
                          <td class="py-2 px-3 text-xs leading-relaxed align-top">
                            <div
                              v-if="p.description"
                              class="[&_p]:m-0 [&_p+p]:mt-2"
                              v-html="md(p.description, selectedItem.module)"
                            />
                            <span
                              v-if="p.defaultExpr || (p.defaultValue !== undefined && p.defaultValue !== null)"
                              class="inline-flex items-center ml-1"
                            >
                              <code class="text-[11px] px-1 py-0.5 rounded bg-muted font-mono">
                                = {{ p.defaultExpr ?? JSON.stringify(p.defaultValue) }}
                              </code>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- Returns -->
                <div v-if="overload.returnType">
                  <h3 class="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">{{ t('stdlibDialog.returnsSection') }}</h3>
                  <div class="flex items-start gap-2">
                    <code class="text-xs font-mono px-2 py-1 rounded-md bg-muted border" v-html="formatTypeRefHtml(overload.returnType)" />
                    <div
                      v-if="overload.returnsDescription"
                      class="min-w-0 text-sm text-muted-foreground [&_p]:m-0 [&_p+p]:mt-3"
                      v-html="md(overload.returnsDescription, selectedItem.module)"
                    />
                  </div>
                </div>

                <!-- Examples -->
                <div v-if="overload.examples?.length">
                  <h3 class="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">{{ t('stdlibDialog.examplesSection') }}</h3>
                  <div class="space-y-2">
                    <pre
                      v-for="(ex, exIdx) in overload.examples"
                      :key="exIdx"
                      class="bg-muted/60 border rounded-lg p-3.5 text-[13px] font-mono leading-relaxed whitespace-pre-wrap overflow-x-auto"
                    ><span v-if="highlightedExamples[idx]?.[exIdx]" v-html="highlightedExamples[idx][exIdx]" /><span v-else class="text-foreground/90">{{ ex }}</span></pre>
                  </div>
                </div>
              </div>
            </div>
          </template>

          <!-- Type detail -->
          <template v-else-if="selectedItem && !isFunctionEntry(selectedItem.entry)">
            <!-- Title bar -->
            <div class="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b px-5 py-3">
              <div class="flex items-center gap-2.5">
                <h2 class="text-lg font-semibold font-mono tracking-tight">{{ selectedItem.label }}</h2>
                <span class="text-[10px] font-medium uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-violet-500/15 text-violet-700 dark:text-violet-400">
                  {{ (selectedItem.entry as TypeDefEntry).kind }}
                </span>
                <span v-if="selectedItem.module !== 'prelude'" class="text-[10px] font-medium uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-muted text-muted-foreground">
                  {{ selectedItem.module }}
                </span>
              </div>
            </div>

            <div class="px-5 py-4 space-y-5">
              <!-- Description -->
              <div
                v-if="(selectedItem.entry as TypeDefEntry).description"
                class="text-sm leading-relaxed text-foreground/90 [&_p]:m-0 [&_p+p]:mt-4"
                v-html="md((selectedItem.entry as TypeDefEntry).description, selectedItem.module)"
              />

              <!-- Underlying type (newtype) -->
              <div v-if="(selectedItem.entry as TypeDefEntry).underlyingType">
                <h3 class="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">{{ t('stdlibDialog.underlyingType') }}</h3>
                <code class="text-xs font-mono px-2 py-1 rounded-md bg-muted border">
                  {{ formatTypeRef((selectedItem.entry as TypeDefEntry).underlyingType) }}
                </code>
              </div>

              <!-- Fields (object) -->
              <div v-if="(selectedItem.entry as TypeDefEntry).fields?.length">
                <h3 class="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">{{ t('stdlibDialog.fieldsSection') }}</h3>
                <div class="border rounded-lg overflow-hidden">
                  <table class="w-full text-sm">
                    <thead>
                      <tr class="bg-muted/40 border-b">
                        <th class="text-left py-2 px-3 text-xs font-semibold text-muted-foreground w-[120px]">{{ t('stdlibDialog.name') }}</th>
                        <th class="text-left py-2 px-3 text-xs font-semibold text-muted-foreground w-[180px]">{{ t('stdlibDialog.type') }}</th>
                        <th class="text-left py-2 px-3 text-xs font-semibold text-muted-foreground">{{ t('stdlibDialog.description') }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="f in (selectedItem.entry as TypeDefEntry).fields" :key="f.name" class="border-b last:border-0 hover:bg-muted/30 transition-colors">
                        <td class="py-2 px-3 font-mono text-xs text-primary/90 whitespace-nowrap align-top">{{ f.name }}</td>
                        <td class="py-2 px-3 font-mono text-xs text-muted-foreground whitespace-nowrap align-top" v-html="formatTypeRefHtml(f.type)" />
                        <td class="py-2 px-3 text-xs leading-relaxed align-top">
                          <div
                            v-if="f.description"
                            class="[&_p]:m-0 [&_p+p]:mt-2"
                            v-html="md(f.description, selectedItem.module)"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- Variants (enum) -->
              <div v-if="(selectedItem.entry as TypeDefEntry).variants?.length">
                <h3 class="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">{{ t('stdlibDialog.variantsSection') }}</h3>
                <div class="border rounded-lg overflow-hidden">
                  <table class="w-full text-sm">
                    <thead>
                      <tr class="bg-muted/40 border-b">
                        <th class="text-left py-2 px-3 text-xs font-semibold text-muted-foreground w-[160px]">{{ t('stdlibDialog.name') }}</th>
                        <th class="text-left py-2 px-3 text-xs font-semibold text-muted-foreground">{{ t('stdlibDialog.description') }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="v in (selectedItem.entry as TypeDefEntry).variants" :key="v.name" class="border-b last:border-0 hover:bg-muted/30 transition-colors">
                        <td class="py-2 px-3 font-mono text-xs text-primary/90 whitespace-nowrap align-top">{{ v.name }}</td>
                        <td class="py-2 px-3 text-xs leading-relaxed align-top">
                          <span v-if="v.title" class="font-medium">{{ v.title }}</span>
                          <template v-if="v.title && v.description"> &mdash; </template>
                          <div
                            v-if="v.description"
                            class="inline-block [&_p]:m-0 [&_p+p]:mt-2"
                            v-html="md(v.description, selectedItem.module)"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- Examples -->
              <div v-if="(selectedItem.entry as TypeDefEntry).examples?.length">
                <h3 class="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">{{ t('stdlibDialog.examplesSection') }}</h3>
                <div class="space-y-2">
                  <pre
                    v-for="(ex, exIdx) in (selectedItem.entry as TypeDefEntry).examples"
                    :key="exIdx"
                    class="bg-muted/60 border rounded-lg p-3.5 text-[13px] font-mono leading-relaxed whitespace-pre-wrap overflow-x-auto"
                  ><span v-if="highlightedTypeExamples[exIdx]" v-html="highlightedTypeExamples[exIdx]" /><span v-else class="text-foreground/90">{{ ex }}</span></pre>
                </div>
              </div>

            </div>
          </template>

          <!-- Empty state -->
          <div v-else class="flex flex-col items-center justify-center h-full text-muted-foreground gap-3">
            <BookOpen class="h-10 w-10 opacity-30" />
            <p class="text-sm">{{ t('stdlibDialog.selectSymbol') }}</p>
          </div>
        </div>
      </div>
    </DialogContent>
  </DialogRoot>
</template>

<style>
.doc-ref {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  cursor: pointer;
  background: none;
  border: 0;
  border-bottom: 1px solid currentColor;
  border-radius: 0;
  padding: 0;
  font: inherit;
  display: inline;
  vertical-align: baseline;
}
.doc-ref:hover {
  color: var(--vp-c-brand-2);
  border-bottom-color: currentColor;
}
.doc-ref code {
  color: inherit;
  text-decoration: none;
}
</style>
