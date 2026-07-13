<script setup lang="ts">
import { ref, computed, shallowRef, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useData } from 'vitepress'
import { useI18n } from 'vue-i18n'
import { ChevronsLeft, ChevronsRight, Lock } from 'lucide-vue-next'
import { useWasm, type StockDef } from '../composables/use-wasm'
import { useScripts } from '../composables/use-scripts'
import { builtinIndicators, isBuiltinId, getBuiltinScript } from '../composables/builtin-scripts'
import PlaygroundEditor from './PlaygroundEditor.vue'
import EditorToolbar from './EditorToolbar.vue'
import EditorStatusBar from './EditorStatusBar.vue'
import ChartToolbar from './ChartToolbar.vue'
import DrawingToolbar from './DrawingToolbar.vue'
import EmojiPicker from './EmojiPicker.vue'
import AnnotationContextMenu from './AnnotationContextMenu.vue'
import SelectionToolbar from './SelectionToolbar.vue'
import AnnotationPropertiesDialog from './AnnotationPropertiesDialog.vue'
import CandlestickPropertiesDialog from './CandlestickPropertiesDialog.vue'
import PlaygroundDialogs from './PlaygroundDialogs.vue'
import StrategyTester from './StrategyTester.vue'
import ScriptConfigDialog from './ScriptConfigDialog.vue'
import StdlibDocsDialog from './StdlibDocsDialog.vue'
import type { ConfigureScriptEvent } from './ScriptConfigDialog.vue'
import type { StrategyReport } from '../types/strategy-report'
import type { StdlibDocs } from '../types/stdlib-docs'
import type { CandlestickStyleKey } from '../constants/candlestick-styles'
import ResizablePanelGroup from './ui/ResizablePanelGroup.vue'
import ResizablePanel from './ui/ResizablePanel.vue'
import ResizableHandle from './ui/ResizableHandle.vue'

const { t, locale } = useI18n()

const { engine, loading: wasmLoading, error: wasmError, activeStock, currentTimeframe, init: initWasm, changeStock, changeTimeframe, setTheme: setChartTheme } = useWasm()
const { isDark, lang } = useData()

const chartCanvas = ref<HTMLCanvasElement | null>(null)
const chartContainer = ref<HTMLDivElement | null>(null)
const imeBridge = ref<HTMLInputElement | null>(null)
const editorComponent = shallowRef<InstanceType<typeof PlaygroundEditor> | null>(null)

const { scripts, refresh: refreshScripts, createScript, updateScript, deleteScript } = useScripts()

const LS_SCRIPT = 'navi-playground-script'
const LS_ACTIVE_ID = 'navi-playground-active-id'
const LS_PANEL = 'navi-playground-panel-ratio'
const LS_COLLAPSED = 'navi-playground-editor-collapsed'
const LS_STRATEGY_HEIGHT = 'navi-playground-strategy-height'
const LS_CHART_SNAPSHOT = 'navi-playground-chart-snapshot'

const defaultScript = builtinIndicators[0]?.source ?? '// Write Navi here\n'

const currentSource = ref(localStorage.getItem(LS_SCRIPT) || defaultScript)
const activeScriptId = ref<string | null>(localStorage.getItem(LS_ACTIVE_ID) || null)
const dirty = ref(false)
/** Script IDs (tags) currently added to the chart. */
const savedSnapshotJson: string | null = localStorage.getItem(LS_CHART_SNAPSHOT)
const savedSnapshot: any = savedSnapshotJson ? JSON.parse(savedSnapshotJson) : null
const savedScriptsOnChart: string[] = savedSnapshot?.scripts?.map((s: any) => s.tag) ?? []
const scriptsOnChart = ref<Set<string>>(new Set(savedScriptsOnChart))
/** Tag used when the active script has no saved ID. */
const UNSAVED_TAG = '__unsaved__'
/** Return the chart tag for the current script. */
function currentTag(): string {
  return activeScriptId.value ?? UNSAVED_TAG
}
/** Reactive version of currentTag() for template bindings. */
const currentTagComputed = computed(() => activeScriptId.value ?? UNSAVED_TAG)

const firstDiagnostic = ref<{ severity: string; message: string; line: number; column: number; filePath?: string } | null>(null)
const strategyReport = ref<StrategyReport | null>(null)

// Currently-active drawing tool (mirrors `chart::tools::names` constants).
// Driven by the `ToolChanged` ChartEvent + the DrawingToolbar's `select`
// event.
const activeTool = ref<string>('pointer')

function onToolSelect(name: string) {
  const chart = engine.value?.chart
  if (!chart) return
  if (chart.setTool(name)) {
    activeTool.value = name
  }
}

// ── Emoji picker ────────────────────────────────────────────────────────
//
// Visible whenever the Emoji drawing tool is active. The chosen glyph is
// stored on the controller (Rust) so each subsequent click places that
// emoji.  Defaults to "⭐" until the user picks something.
const emojiGlyph = ref<string>('⭐')
const emojiPickerOpen = computed(() => activeTool.value === 'emoji')
function onEmojiSelect(g: string) {
  emojiGlyph.value = g
  engine.value?.chart.setDefaultEmojiGlyph(g)
}

// Magnet snap-to-OHLC mode. Mirrors the WASM `MagnetMode` enum. Persists
// globally (not per-symbol) under `LS_MAGNET`. The DrawingToolbar shows a
// horseshoe-magnet button that pops up a menu (Weak / Strong / Snap to
// indicators).
type MagnetMode = 'off' | 'weak' | 'strong'
interface MagnetState {
  mode: MagnetMode
  snapToIndicators: boolean
}
const LS_MAGNET = 'navi.magnet'
const magnetMode = ref<MagnetMode>('off')
const magnetSnapToIndicators = ref(false)

function applyMagnet(next: MagnetState) {
  magnetMode.value = next.mode
  magnetSnapToIndicators.value = next.snapToIndicators
  engine.value?.chart.setMagnet({
    mode: next.mode,
    snapToIndicators: next.snapToIndicators,
  } as any)
  localStorage.setItem(LS_MAGNET, JSON.stringify(next))
}
function onMagnetMode(next: MagnetMode) {
  applyMagnet({ mode: next, snapToIndicators: magnetSnapToIndicators.value })
}
function onMagnetSnapToIndicators(value: boolean) {
  applyMagnet({ mode: magnetMode.value, snapToIndicators: value })
}

// "Sticky drawing": drawing tools stay active across finalises so the
// user can place several in a row. Persisted globally.
const LS_STICKY = 'navi.stickyTool'
const stickyTool = ref(localStorage.getItem(LS_STICKY) === '1')
function onStickyTool(value: boolean) {
  stickyTool.value = value
  engine.value?.chart.setStickyTool(value)
  localStorage.setItem(LS_STICKY, value ? '1' : '0')
}
// Candlestick style. Persisted globally.
const LS_CANDLESTICK_STYLE = 'navi.candlestickStyle'
const candlestickStyle = ref<CandlestickStyleKey>(
  (localStorage.getItem(LS_CANDLESTICK_STYLE) as CandlestickStyleKey | null) ?? 'candlestick',
)
const candlestickPropertiesDialogOpen = ref(false)

function onCandlestickStyleChange(key: CandlestickStyleKey) {
  engine.value?.chart.setCandlestickStyle(key as any)
  candlestickStyle.value = key
  localStorage.setItem(LS_CANDLESTICK_STYLE, key)
}

// Last price line toggle. Persisted globally.
const LS_LAST_PRICE_LINE = 'navi.lastPriceLine'
const showLastPriceLine = ref<boolean>(localStorage.getItem(LS_LAST_PRICE_LINE) !== '0')

function onLastPriceLineChange(value: boolean) {
  engine.value?.chart.setLastPriceLineVisible(value)
  showLastPriceLine.value = value
  localStorage.setItem(LS_LAST_PRICE_LINE, value ? '1' : '0')
}

// Chip distribution (CYQ) toggle. Persisted globally; off by default.
const LS_CYQ = 'navi.cyq'
const showCyq = ref<boolean>(localStorage.getItem(LS_CYQ) === '1')

function onCyqChange(value: boolean) {
  engine.value?.chart.setCyqVisible(value)
  showCyq.value = value
  localStorage.setItem(LS_CYQ, value ? '1' : '0')
}

function loadMagnetFromStorage() {
  const stored = localStorage.getItem(LS_MAGNET)
  if (!stored) return
  // Old format (string mode only) is still around from the cycle-button
  // version; accept both.
  if (stored === 'weak' || stored === 'strong' || stored === 'off') {
    applyMagnet({ mode: stored, snapToIndicators: false })
    return
  }
  try {
    const parsed = JSON.parse(stored) as Partial<MagnetState>
    const mode = parsed.mode === 'weak' || parsed.mode === 'strong' ? parsed.mode : 'off'
    applyMagnet({ mode, snapToIndicators: !!parsed.snapToIndicators })
  } catch {
    /* ignore malformed entries */
  }
}

function onCanvasKeyDown(e: KeyboardEvent) {
  const chart = engine.value?.chart
  if (!chart) return
  // While editing text, the IME bridge owns keyboard input — never let
  // canvas-level Delete / Backspace shortcuts delete the annotation we're
  // typing into.
  if (activeTool.value === 'text-editing') return
  if (e.key === 'Escape') {
    chart.cancelDrawing()
    e.preventDefault()
    return
  }
  if (e.key === 'Delete' || e.key === 'Backspace') {
    chart.deleteSelectedAnnotation()
    e.preventDefault()
    return
  }
  // Annotation-level Ctrl/Cmd + C / V / D / Z / Y shortcuts — kept off the
  // IME path because the text-editor handles its own copy/paste.
  if ((e.ctrlKey || e.metaKey) && !e.altKey) {
    const k = e.key.toLowerCase()
    if (!e.shiftKey && k === 'c') {
      chart.copySelectedAnnotation()
      e.preventDefault()
    } else if (!e.shiftKey && k === 'x') {
      chart.cutSelectedAnnotation()
      e.preventDefault()
    } else if (!e.shiftKey && k === 'v') {
      chart.pasteAnnotation()
      e.preventDefault()
    } else if (!e.shiftKey && k === 'd') {
      chart.copySelectedAnnotation()
      chart.pasteAnnotation()
      e.preventDefault()
    } else if (!e.shiftKey && k === 'z') {
      chart.undo()
      e.preventDefault()
    } else if ((e.shiftKey && k === 'z') || (!e.shiftKey && k === 'y')) {
      // Ctrl+Y on Windows; Ctrl+Shift+Z on Mac and Linux conventions.
      chart.redo()
      e.preventDefault()
    }
  }
}

/** State for the annotation right-click context menu. */
const ctxMenuOpen = ref(false)
const ctxMenuX = ref(0)
const ctxMenuY = ref(0)
const ctxMenuItems = ref<
  Array<{ type: 'action'; actionId: string; enabled: boolean } | { type: 'separator' }>
>([])

function onContextMenu(e: MouseEvent) {
  e.preventDefault()
  const chart = engine.value?.chart
  const canvas = chartCanvas.value
  if (!chart || !canvas) return
  const rect = canvas.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  // Synchronously fetch menu items; returns null if nothing hittable at (x, y).
  // Side effect: the element is selected internally; poll events as usual.
  type RawItem = 'separator' | { action: { actionId: string; enabled: boolean } }
  const raw = chart.contextMenuItems(x, y) as RawItem[] | null
  if (!raw) return
  ctxMenuItems.value = raw.map(item =>
    item === 'separator'
      ? { type: 'separator' as const }
      : { type: 'action' as const, actionId: item.action.actionId, enabled: item.action.enabled }
  )
  ctxMenuX.value = rect.left + x
  ctxMenuY.value = rect.top + y
  ctxMenuOpen.value = true
}

function onContextMenuSelect(actionId: string) {
  engine.value?.chart.dispatchContextMenuAction(actionId)
}

// === SelectionToolbar state ===
//
// Descriptor-driven: the toolbar takes a list of `PropertyDescriptor`s
// (queried from the WASM `selected_annotation_properties` API) plus a
// `values` map containing each descriptor's current `PropertyValueResult`
// (queried via `get_annotation_property`). On change it emits a
// `propertyChange` event with the property name + new `PropertyValue`,
// which we forward to `set_annotation_property` — the Rust layer handles
// virtual-property fan-out for multi-stroke kinds.

interface SelBounds {
  x: number
  y: number
  width: number
  height: number
}
import type { PropertyDescriptor, PropertyValue, PropertyValueResult } from '../composables/use-wasm'

const selToolbarVisible = ref(false)
const selToolbarBounds = ref<SelBounds | null>(null)
const selToolbarDescriptors = ref<PropertyDescriptor[]>([])
const selToolbarValues = ref<Record<string, PropertyValueResult>>({})
const selToolbarLocked = ref(false)
const selToolbarCanvasOriginX = ref(0)
const selToolbarCanvasOriginY = ref(0)
const selToolbarAnnId = ref<number | null>(null)

/** Refresh the floating toolbar from the chart's current selection. */
function refreshSelectionToolbar() {
  const chart = engine.value?.chart
  const canvas = chartCanvas.value
  if (!chart || !canvas) {
    selToolbarVisible.value = false
    return
  }
  const sel = chart.selection() as unknown
  const rawId = sel && typeof sel === 'object' && 'annotation' in sel ? (sel as Record<string, unknown>).annotation : undefined
  if (rawId === undefined) {
    selToolbarVisible.value = false
    return
  }
  const id = toAnnId(rawId)
  // selectedAnnotationBounds() returns euclid Rect: {origin:[x,y], size:[w,h]}.
  // Normalise to the flat {x,y,width,height} shape SelectionToolbar expects.
  const rawBounds = chart.selectedAnnotationBounds() as { origin: [number, number]; size: [number, number] } | null
  const bounds = rawBounds ? { x: rawBounds.origin[0], y: rawBounds.origin[1], width: rawBounds.size[0], height: rawBounds.size[1] } : null
  const descriptors = chart.annotationProperties(id)
  if (!bounds || !descriptors) {
    selToolbarVisible.value = false
    return
  }
  // Look up the locked flag from the spec JSON.
  const ann = chart.getAnnotation(id) as { spec: { locked: boolean } } | null
  const locked = ann?.spec?.locked ?? false
  // Read the current value for every descriptor up-front.
  const values: Record<string, PropertyValueResult> = {}
  for (const d of descriptors) {
    const v = chart.getAnnotationProperty(id, d.name)
    if (v) values[d.name] = v
  }
  const rect = canvas.getBoundingClientRect()
  selToolbarCanvasOriginX.value = rect.left
  selToolbarCanvasOriginY.value = rect.top
  selToolbarBounds.value = bounds
  selToolbarDescriptors.value = descriptors
  selToolbarValues.value = values
  selToolbarLocked.value = locked
  selToolbarAnnId.value = Number(id)
  selToolbarVisible.value = true
}

function onSelToolbarPropertyChange(name: string, value: PropertyValue) {
  const chart = engine.value?.chart
  if (!chart) return
  const sel = chart.selection() as unknown
  const rawId = sel && typeof sel === 'object' && 'annotation' in sel ? (sel as Record<string, unknown>).annotation : undefined
  if (rawId === undefined) return
  const id = toAnnId(rawId)
  // `setAnnotationProperty` triggers an `annotationUpdated` event; the poll
  // loop will re-call `refreshSelectionToolbar` so no explicit refresh needed.
  chart.setAnnotationProperty(id, name, value as any)
}

// === AnnotationPropertiesDialog state ===
//
// Double-clicking an annotation on the chart emits an
// `annotationDoubleClick` event from the WASM layer (see
// `engine/src/lib.rs`). We open the dialog populated with all non-virtual
// descriptors. Writes route through the same `set_annotation_property`
// path as the floating toolbar; the dialog re-reads its `values` on every
// `annotationUpdated` event so concurrent toolbar edits stay in sync.

const annPropsDialogOpen = ref(false)
const annPropsDialogAnnId = ref<string | null>(null)
const annPropsDescriptors = ref<PropertyDescriptor[]>([])
const annPropsValues = ref<Record<string, PropertyValueResult>>({})
const annPropsPoints = ref<Array<{ barIndex: number; price: number; flags?: number }>>([])

/** Convert a ControlPoint (time in ms) to {barIndex, price, flags} for the UI. */
function pointsToUi(
  chart: NonNullable<typeof engine.value>['chart'],
  annId: string,
  points: { time: number; price: number }[],
): { barIndex: number; price: number; flags?: number }[] {
  const flagsArr = chart.annotationControlPointFlags(annId) as number[] | null
  return points.map((p, i) => ({
    barIndex: (chart.timeToBarIndex(p.time) as number | null) ?? 0,
    price: p.price,
    flags: flagsArr?.[i],
  }))
}

function openAnnotationPropertiesDialog(id: unknown) {
  const annId = toAnnId(id)
  const chart = engine.value?.chart
  if (!chart) return
  const descriptors = chart.annotationProperties(annId)
  if (!descriptors) return
  annPropsDialogAnnId.value = annId
  annPropsDescriptors.value = descriptors
  annPropsValues.value = readPropertyValues(chart, annId, descriptors)
  const ann = chart.getAnnotation(annId) as { spec: { points: { time: number; price: number }[] } } | null
  annPropsPoints.value = ann ? pointsToUi(chart, annId, ann.spec.points) : []
  annPropsDialogOpen.value = true
}

function refreshAnnotationPropertiesDialog() {
  const chart = engine.value?.chart
  const id = annPropsDialogAnnId.value
  if (!chart || id === null) return
  // The annotation may have been deleted in the meantime; the descriptor
  // list comes back null in that case and we close the dialog.
  const descriptors = chart.annotationProperties(id)
  if (!descriptors) {
    annPropsDialogOpen.value = false
    return
  }
  annPropsDescriptors.value = descriptors
  annPropsValues.value = readPropertyValues(chart, id, descriptors)
  const ann = chart.getAnnotation(id) as { spec: { points: { time: number; price: number }[] } } | null
  annPropsPoints.value = ann ? pointsToUi(chart, id, ann.spec.points) : []
}

function readPropertyValues(
  chart: NonNullable<typeof engine.value>['chart'],
  id: string,
  descriptors: PropertyDescriptor[],
): Record<string, PropertyValueResult> {
  const out: Record<string, PropertyValueResult> = {}
  for (const d of descriptors) {
    const v = chart.getAnnotationProperty(id, d.name)
    if (v) out[d.name] = v
  }
  return out
}

function onAnnPropsChange(name: string, value: PropertyValue) {
  const chart = engine.value?.chart
  const id = annPropsDialogAnnId.value
  if (!chart || id === null) return
  chart.setAnnotationProperty(id, name, value as any)
  annPropsValues.value = readPropertyValues(chart, id, annPropsDescriptors.value)
}

function onAnnPropsPointChange(idx: number, barIndex: number, price: number) {
  const chart = engine.value?.chart
  const id = annPropsDialogAnnId.value
  if (!chart || id === null) return
  const ann = chart.getAnnotation(id) as { spec: { points: { time: number; price: number }[] } } | null
  if (!ann) return
  const timeMs = (chart.barIndexToTime(barIndex) as number | null) ?? ann.spec.points[idx]?.time ?? 0
  const points = [...ann.spec.points]
  points[idx] = { time: timeMs, price }
  chart.updateAnnotation(id, { ...ann.spec, points })
  const updated = chart.getAnnotation(id) as { spec: { points: { time: number; price: number }[] } } | null
  annPropsPoints.value = updated ? pointsToUi(chart, updated.spec.points) : []
}

function onAnnPropsResetToDefault() {
  const chart = engine.value?.chart
  const id = annPropsDialogAnnId.value
  if (!chart || id === null) return
  chart.resetAnnotationToDefault(id)
  // dialog refreshes via the annotationUpdated event handler
}

function onSelToolbarToggleLock() {
  engine.value?.chart.toggleSelectedAnnotationLock()
}
function onSelToolbarDelete() {
  engine.value?.chart.deleteSelectedAnnotation()
}

/**
 * Pack a `KeyboardEvent`'s modifier state into the bit-format expected by
 * `Playground::on_key_down` (1=ctrl/⌘, 2=shift, 4=alt, 8=meta).
 */
function imeModifierBits(e: KeyboardEvent): number {
  let bits = 0
  if (e.ctrlKey) bits |= 1
  if (e.shiftKey) bits |= 2
  if (e.altKey) bits |= 4
  if (e.metaKey) bits |= 8
  return bits
}

/** Recognised key names — others are dropped at the WASM layer. */
const IME_FORWARD_KEYS = new Set([
  'Backspace',
  'Delete',
  'Enter',
  'Escape',
  'ArrowLeft',
  'ArrowRight',
  'ArrowUp',
  'ArrowDown',
  'Home',
  'End',
])

function onImeKeyDown(e: KeyboardEvent) {
  const chart = engine.value?.chart
  if (!chart) return
  // Don't intercept keys during composition — the IME owns them.
  if (e.isComposing) return
  if (!IME_FORWARD_KEYS.has(e.key)) return
  chart.keyDown(e.key, imeModifierBits(e))
  e.preventDefault()
}

function onImeInput(e: Event) {
  const chart = engine.value?.chart
  if (!chart) return
  const input = e.target as HTMLInputElement
  // Composition events deliver their own text; skip the `input` event that
  // accompanies them so we don't double-insert.
  if ((e as InputEvent).isComposing) return
  const text = input.value
  if (text) chart.textInput(text)
  // Reset so the next input fires cleanly.
  input.value = ''
}

function onImeCompositionStart() {
  engine.value?.chart.compositionStart()
}

function onImeCompositionUpdate(e: CompositionEvent) {
  engine.value?.chart.compositionUpdate(e.data ?? '', (e.data ?? '').length)
}

function onImeCompositionEnd(e: CompositionEvent) {
  const chart = engine.value?.chart
  if (!chart) return
  chart.compositionEnd(e.data ?? '')
  // Browsers fire an `input` event right after `compositionend` with the
  // committed text. We've already consumed it via `compositionEnd`, so
  // clear the buffer to avoid the `input` handler re-inserting it.
  const input = e.target as HTMLInputElement
  input.value = ''
}

function onImeBlur() {
  // Only treat blur as commit when we were actually capturing keyboard;
  // otherwise the focus change isn't tied to text editing.
  if (activeTool.value === 'text-editing') {
    engine.value?.chart.focusLost()
  }
}

function onImeCopy(e: ClipboardEvent) {
  if (activeTool.value !== 'text-editing') return
  const text = engine.value?.chart.textEditorSelection()
  if (text && e.clipboardData) {
    e.clipboardData.setData('text/plain', text)
    e.preventDefault()
  }
}

function onImeCut(e: ClipboardEvent) {
  if (activeTool.value !== 'text-editing') return
  const text = engine.value?.chart.textEditorCut()
  if (text && e.clipboardData) {
    e.clipboardData.setData('text/plain', text)
    e.preventDefault()
  }
}

function onImePaste(e: ClipboardEvent) {
  const chart = engine.value?.chart
  if (!chart) return
  // Read directly from clipboardData to preserve newlines — <input type="text">
  // strips \n from its value property before the input event fires.
  const text = e.clipboardData?.getData('text/plain')
  if (text) {
    chart.textInput(text)
    e.preventDefault()
    // Clear the input so the browser's own paste (into input.value) doesn't
    // re-fire via the input event.
    const input = e.target as HTMLInputElement
    input.value = ''
  }
}

/**
 * Focus / blur the IME bridge based on whether the active tool wants to
 * capture keyboard. Called from the `toolChanged` event handler.
 */
function syncImeFocus() {
  const chart = engine.value?.chart
  const input = imeBridge.value
  if (!chart || !input) return
  if (chart.capturesKeyboard()) {
    input.focus({ preventScroll: true })
  } else if (document.activeElement === input) {
    input.blur()
  }
}

const STRATEGY_DEFAULT_RATIO = 65
const savedStrategyRatio = parseFloat(localStorage.getItem(LS_STRATEGY_HEIGHT) || '')
const strategyChartSize = ref(isNaN(savedStrategyRatio) ? STRATEGY_DEFAULT_RATIO : Math.max(20, Math.min(savedStrategyRatio, 85)))
const strategyPanel = shallowRef<InstanceType<typeof ResizablePanel> | null>(null)

function onChartPanelResize(sizes: number[]) {
  // Only persist when the strategy panel is expanded (non-zero size).
  // When it is collapsed the chart takes 100% — ignore that event so
  // the saved ratio is not overwritten.
  if (sizes.length > 1 && sizes[1] > 0 && sizes[0] !== undefined) {
    strategyChartSize.value = sizes[0]
    localStorage.setItem(LS_STRATEGY_HEIGHT, String(sizes[0]))
  }
  nextTick(resizeCanvas)
}

const CHART_MIN = 20
const EDITOR_MIN = 20
const savedRatio = parseFloat(localStorage.getItem(LS_PANEL) || '60')
// Clamp so neither panel falls below its min-size on restore.  Floating-
// point drift in the saved value can push the editor below min-size,
// causing SplitterGroup to collapse it on load.
const defaultPanelSize = isNaN(savedRatio) ? 60 : Math.max(CHART_MIN, Math.min(savedRatio, 100 - EDITOR_MIN))
const editorPanel = shallowRef<InstanceType<typeof ResizablePanel> | null>(null)
// Capture the saved collapsed state before SplitterPanel mounts. Radix-vue's
// SplitterPanel fires `onExpand` during its own onMounted (child mounts before
// parent), which would clear the ref and localStorage before we can restore.
const savedEditorCollapsed = localStorage.getItem(LS_COLLAPSED) === 'true'
const editorCollapsed = ref(savedEditorCollapsed)
// Only enable collapsible when the panel is already collapsed (so expand()
// works) or when the button actively triggers a collapse.  When false,
// dragging below min-size won't snap the panel to zero.
const editorCollapsible = ref(savedEditorCollapsed)
// Don't persist collapse/expand events until initial restoration is done.
let collapseEventsReady = false

const configDialogData = ref<ConfigureScriptEvent | null>(null)
const dialogMode = ref<'none' | 'saveAs' | 'rename' | 'delete' | 'scriptError' | 'runtimeError'>('none')
const scriptErrorDetail = ref<{
  message: string
  scriptTag: string
  locations: { message: string; filePath: string; line: number; column: number; endLine: number; endColumn: number }[]
} | null>(null)
const runtimeErrorDetail = ref<{
  message: string
  scriptTag: string
  backtrace: { funcName: string | null; filePath: string; line: number; column: number; endLine: number; endColumn: number; moduleKind: string }[]
} | null>(null)

const stdlibDocsCache = shallowRef<StdlibDocs | null>(null)
const stdlibDocsCacheLocale = ref<string | null>(null)
const stdlibDocsOpen = ref(false)
const stdlibDocsInitial = ref<{ module: string; name: string } | null>(null)

function refreshStdlibDocs(localeCode: string) {
  if (!engine.value) return
  // stdlib_docs is a free function exported from the lsp wasm module.
  // It is imported lazily since the module loads asynchronously.
  import('../../../wasm-pkg/lsp/navi_lsp_wasm.js').then((m) => {
    stdlibDocsCache.value = m.stdlib_docs(localeCode) as StdlibDocs
    stdlibDocsCacheLocale.value = localeCode
  })
}

function onShowStdlibDocs(info: { module: string; name: string } | null) {
  const currentLocale = lang.value || 'en'
  if (!stdlibDocsCache.value || stdlibDocsCacheLocale.value !== currentLocale)
    refreshStdlibDocs(currentLocale)
  stdlibDocsInitial.value = info
  stdlibDocsOpen.value = true
}

let debounceTimer: ReturnType<typeof setTimeout> | null = null

interface Diagnostic {
  severity: string
  message: string
  range: {
    start: { line: number; character: number }
    end: { line: number; character: number }
  }
  fileId?: number
  filePath?: string
}

function analyze(source: string) {
  const analyzer = engine.value?.analyzer
  if (!analyzer) return

  analyzer.analyze('script.nv', source)
  const diags = (analyzer.diagnostics() as Diagnostic[] | null) ?? []

  // Pick the first error, or first warning if no errors
  const first = diags.find(d => d.severity === 'error') ?? diags.find(d => d.severity === 'warning') ?? null
  firstDiagnostic.value = first
    ? { severity: first.severity, message: first.message, line: first.range.start.line + 1, column: first.range.start.character + 1, filePath: first.filePath }
    : null

  // Convert LSP Diagnostic format (range.start.line) to DiagnosticData
  // format (startLine) expected by PlaygroundEditor.
  // In the playground there is only one user-editable file ("script.nv").
  // The WASM analyzer assigns a fileId to every file including the main script,
  // so we cannot use fileId to distinguish main vs stdlib. Instead we pass all
  // diagnostics and let PlaygroundEditor show them; stdlib files are correct and
  // should never produce diagnostics in practice.
  const diagData = diags.map(d => ({
    severity: d.severity,
    message: d.message,
    startLine: d.range.start.line,
    startCharacter: d.range.start.character,
    endLine: d.range.end.line,
    endCharacter: d.range.end.character,
  }))

  editorComponent.value?.setDiagnostics(diagData)
  // Clear any stale runtime diagnostic when source changes
  editorComponent.value?.setRuntimeDiagnostic(null)
}

/** Refresh the strategy report for the currently active script. */
function refreshStrategyReport() {
  const chart = engine.value?.chart
  strategyReport.value = chart
    ? (chart.strategyReport(currentTag()) as StrategyReport) ?? null
    : null
}

async function waitForEditorSourceSync(source: string) {
  await nextTick()
  await editorComponent.value?.whenSourceApplied(source)
}

async function restoreSnapshot(snapshot: string) {
  const chart = engine.value?.chart
  if (!chart) return
  await chart.loadSnapshotAsync(JSON.parse(snapshot))
}

/** Run the script identified by `tag` (defaults to `currentTag()`).
 *  Returns `true` if the run succeeded. */
async function doRun(tag?: string): Promise<boolean> {
  const eng = engine.value
  if (!eng) return false
  const scriptTag = tag ?? currentTag()
  const source = getSourceForTag(scriptTag) ?? currentSource.value

  try {
    await eng.chart.addScript(source, scriptTag)
  } catch {
    // addScript rejects with a ScriptError on compile failure.
  }

  const scriptErr = eng.chart.scriptError(scriptTag) as {
    compile?: { diagnostics: { severity: string; message: string; startLine: number; startCharacter: number; filePath?: string }[]; sourceFiles: Record<string, unknown> }
    exception?: { message: string; spans: unknown[]; backtrace: { funcName: string | null; filePath: string; line: number; column: number; endLine: number; endColumn: number; moduleKind: string }[] }
  } | null

  if (!scriptErr) {
    editorComponent.value?.setRuntimeDiagnostic(null)
    refreshStrategyReport()
    nextTick(resizeCanvas)
    saveChartSnapshot()
    return true
  }

  if ('exception' in scriptErr && scriptErr.exception) {
    const { message, backtrace } = scriptErr.exception
    // Show runtime error in editor gutter and return the runtime diagnostic.
    const runtimeDiag: Diagnostic | null = backtrace.length > 0
      ? {
          severity: 'error',
          message,
          startLine: backtrace[0].line - 1,
          startCharacter: backtrace[0].column - 1,
          endLine: backtrace[0].endLine - 1,
          endCharacter: backtrace[0].endColumn - 1,
          filePath: backtrace[0].filePath,
        }
      : null
    editorComponent.value?.setRuntimeDiagnostic(runtimeDiag)
  }

  refreshStrategyReport()
  nextTick(resizeCanvas)
  saveChartSnapshot()
  return false
}

/** Add the current script to the chart using `tag` as its identifier. */
function addToChart(tag: string) {
  // Static analysis gates the add — only compile-time errors block.
  analyze(currentSource.value)
  if (firstDiagnostic.value?.severity === 'error') {
    scriptErrorDetail.value = {
      message: firstDiagnostic.value.message,
      scriptTag: tag,
      locations: [{
        message: firstDiagnostic.value.message,
        filePath: firstDiagnostic.value.filePath ?? 'playground.nv',
        line: firstDiagnostic.value.line,
        column: firstDiagnostic.value.column,
        endLine: firstDiagnostic.value.line,
        endColumn: firstDiagnostic.value.column,
      }],
    }
    dialogMode.value = 'scriptError'
    return
  }
  // Register on chart immediately, then kick off execution asynchronously.
  // Runtime errors (e.g. runtime.error()) will appear as a ⚠ icon on
  // the indicator label rather than blocking the add.
  const next = new Set([...scriptsOnChart.value, tag])
  scriptsOnChart.value = next
  void doRun(tag)
}

/** Remove the script identified by `tag` from the chart. */
function removeFromChart(tag: string) {
  engine.value?.chart.removeScript(tag)
  const next = new Set(scriptsOnChart.value)
  next.delete(tag)
  scriptsOnChart.value = next
  saveChartSnapshot()
  refreshStrategyReport()
}

function onConfigClose() {
  configDialogData.value = null
  saveChartSnapshot()
}

/** Persist the full chart state (scripts, configs, viewport, pane ratios). */
function saveChartSnapshot() {
  const chart = engine.value?.chart
  if (!chart) return
  try {
    const snapshot = chart.saveSnapshot()
    if (snapshot) localStorage.setItem(LS_CHART_SNAPSHOT, JSON.stringify(snapshot))
  } catch {
    // ignore serialization errors
  }
}

function onSourceChange(source: string) {
  currentSource.value = source
  dirty.value = true
  localStorage.setItem(LS_SCRIPT, source)

  // Debounce both analyze (parser + type-check) and run to avoid blocking
  // the main thread on every keystroke. LSP providers (completions, hover)
  // may briefly use stale data during fast typing — this is an acceptable
  // tradeoff for smooth editing.
  if (debounceTimer) clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => {
    analyze(source)
  }, 300)
}

async function loadScript(id: string) {
  // If switching away from an unsaved script, remove it from chart.
  if (scriptsOnChart.value.has(UNSAVED_TAG)) {
    removeFromChart(UNSAVED_TAG)
  }
  const builtin = getBuiltinScript(id)
  if (builtin) {
    currentSource.value = builtin.source
    activeScriptId.value = id
    dirty.value = false
  } else {
    const s = scripts.value.find(x => x.id === id)
    if (s) {
      currentSource.value = s.source
      activeScriptId.value = id
      dirty.value = false
    }
  }
  localStorage.setItem(LS_SCRIPT, currentSource.value)
  localStorage.setItem(LS_ACTIVE_ID, activeScriptId.value ?? '')
  // Always run analyze for diagnostics. Loading a script only switches
  // the editor view — re-running is an explicit user action.
  analyze(currentSource.value)
  await waitForEditorSourceSync(currentSource.value)
}

function newScript() {
  currentSource.value = 'indicator("My Script", overlay: false)\nplot(close)\n'
  activeScriptId.value = null
  dirty.value = true
  localStorage.setItem(LS_SCRIPT, currentSource.value)
  localStorage.removeItem(LS_ACTIVE_ID)
  analyze(currentSource.value)
}

function saveScript() {
  if (!activeScriptId.value || isBuiltinId(activeScriptId.value)) {
    dialogMode.value = 'saveAs'
    return
  }
  updateScript(activeScriptId.value, { source: currentSource.value })
  dirty.value = false
  // Re-run if the script is already on the chart.
  const tag = currentTag()
  if (scriptsOnChart.value.has(tag)) {
    doRun(tag)
  }
}

function closeDialog() {
  dialogMode.value = 'none'
  scriptErrorDetail.value = null
  runtimeErrorDetail.value = null
}

/** Handle "Add to Chart": auto-save user scripts first if they have unsaved changes. */
function onAddToChart() {
  // Auto-save user scripts (not builtins, not unsaved) before adding to chart.
  if (dirty.value && activeScriptId.value && !isBuiltinId(activeScriptId.value)) {
    updateScript(activeScriptId.value, { source: currentSource.value })
    dirty.value = false
  }
  addToChart(currentTag())
}

function handleSaveAs(name: string) {
  const wasUnsaved = scriptsOnChart.value.has(UNSAVED_TAG)
  if (wasUnsaved) {
    removeFromChart(UNSAVED_TAG)
  }
  const item = createScript(name, currentSource.value)
  activeScriptId.value = item.id
  dirty.value = false
  localStorage.setItem(LS_ACTIVE_ID, item.id)
  dialogMode.value = 'none'
  // Re-add to chart with the new tag (saved script ID).
  if (wasUnsaved) {
    addToChart(item.id)
  }
}

function handleRename(name: string) {
  if (activeScriptId.value && !isBuiltinId(activeScriptId.value)) {
    updateScript(activeScriptId.value, { name })
  }
  dialogMode.value = 'none'
}

function handleDelete() {
  if (activeScriptId.value && !isBuiltinId(activeScriptId.value)) {
    deleteScript(activeScriptId.value)
    newScript()
  }
  dialogMode.value = 'none'
}

/** Resolve the Navi source for a given chart tag. */
function getSourceForTag(tag: string): string | undefined {
  if (tag === UNSAVED_TAG) return currentSource.value
  if (isBuiltinId(tag)) return getBuiltinScript(tag)?.source
  return scripts.value.find(x => x.id === tag)?.source
}

/**
 * Re-run every script currently on the chart, each with its own source.
 * Must be called after stock/timeframe changes that clear all scripts.
 */
async function rerunAllOnChart() {
  const chart = engine.value?.chart
  if (!chart) return
  for (const tag of scriptsOnChart.value) {
    const source = getSourceForTag(tag)
    if (!source) continue
    try {
      await chart.addScript(source, tag)
    } catch {
      // continue on error
    }
  }
  // Restore diagnostics for the currently-open editor source.
  analyze(currentSource.value)
  refreshStrategyReport()
}

// localStorage key per stock symbol — annotations are scoped to the
// security being inspected (annotations on AAPL don't carry over to MSFT).
const ANNOTATIONS_KEY = (symbol: string) => `navi.annotations.${symbol}`
// localStorage key for per-tool property defaults (shared across all stocks).
const TOOL_DEFAULTS_KEY = 'navi.tool-defaults'

function saveAnnotationsForCurrentStock() {
  const chart = engine.value?.chart
  if (!chart) return
  try {
    const anns = chart.getAnnotations()
    if (anns) localStorage.setItem(ANNOTATIONS_KEY(activeStock.value.symbol), JSON.stringify(anns))
  } catch (e) {
    console.warn('[playground] failed to save annotations', e)
  }
}

function loadAnnotationsForStock(symbol: string) {
  const chart = engine.value?.chart
  if (!chart) return
  chart.clearAnnotations()
  try {
    const stored = localStorage.getItem(ANNOTATIONS_KEY(symbol))
    if (stored) {
      const anns = JSON.parse(stored) as Array<{ spec: unknown }>
      for (const ann of anns) {
        chart.addAnnotation(ann.spec)
      }
    }
  } catch (e) {
    console.warn('[playground] failed to load annotations', e)
  }
  restoreToolDefaults()
}

function restoreToolDefaults() {
  const chart = engine.value?.chart
  if (!chart) return
  try {
    const all = JSON.parse(localStorage.getItem(TOOL_DEFAULTS_KEY) ?? '{}') as Record<
      string,
      string
    >
    for (const [toolId, kindJson] of Object.entries(all)) {
      chart.setAnnotationDefault(toolId, kindJson)
    }
  } catch {
    // Silently ignore corrupt localStorage entries.
  }
}

let annotationsSaveTimer: number | null = null
function scheduleAnnotationsSave() {
  if (annotationsSaveTimer !== null) {
    window.clearTimeout(annotationsSaveTimer)
  }
  annotationsSaveTimer = window.setTimeout(() => {
    saveAnnotationsForCurrentStock()
    annotationsSaveTimer = null
  }, 500)
}

function flushPersistedChartState() {
  if (annotationsSaveTimer !== null) {
    window.clearTimeout(annotationsSaveTimer)
    annotationsSaveTimer = null
  }
  saveAnnotationsForCurrentStock()
  saveChartSnapshot()
}

function onStockChange(stock: StockDef) {
  // Save the outgoing stock's annotations before the symbol switches.
  saveAnnotationsForCurrentStock()
  changeStock(stock)
  // After WASM has loaded the new candlesticks, restore the new stock's
  // annotations.
  loadAnnotationsForStock(stock.symbol)
}

function onTimeframeChange(tf: import('../composables/use-wasm').SecurityTimeframe) {
  // Annotations are anchored by absolute time, so changing timeframe does
  // not require a save / reload — they continue to render at the same bars.
  // set_timeframe on the Rust side preserves and restarts all scripts on the
  // new timeframe automatically; calling rerunAllOnChart here would duplicate them.
  changeTimeframe(tf)
}

let resizeObserver: ResizeObserver | null = null

function resizeCanvas() {
  const container = chartContainer.value
  const chart = engine.value?.chart
  const canvas = chartCanvas.value
  if (!container || !chart || !canvas) return
  const w = container.clientWidth
  const h = container.clientHeight
  const dpr = window.devicePixelRatio || 1
  const pw = Math.round(w * dpr)
  const ph = Math.round(h * dpr)
  // Only reassign physical dimensions when they actually change — assigning
  // canvas.width/height always clears the 2D context, even if the value is
  // identical, which would erase a just-rendered frame.
  if (canvas.width !== pw || canvas.height !== ph) {
    canvas.width = pw
    canvas.height = ph
    const ctx2d = canvas.getContext('2d')
    if (ctx2d) ctx2d.setTransform(dpr, 0, 0, dpr, 0, 0)
  }
  chart.onResize(w, h)
}


// -- Pointer input --

// User-configurable zoom sensitivity (1.0 = default), persisted to localStorage.
const ZOOM_SENSITIVITY_KEY = 'navi.chart.zoomSensitivity'
const zoomSensitivity = ref(
  parseFloat(localStorage.getItem(ZOOM_SENSITIVITY_KEY) ?? '1') || 1,
)
// macOS trackpad pinch arrives as ctrlKey+wheel with a small deltaY; this
// factor converts that delta into a multiplicative zoom-scale ratio.
const PINCH_SCALE_K = 0.01

// Persistent animation-frame tick loop. Started once after chart init and
// kept alive for the chart's lifetime — on_tick is a no-op when there is
// no active inertia, so the idle cost is negligible.
function startTickLoop() {
  function tick() {
    const chart = engine.value?.chart
    if (!chart) return // chart destroyed — exit loop naturally
    chart.onTick()
    refreshSelectionToolbar()
    requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

function onWheel(e: WheelEvent) {
  e.preventDefault()
  const chart = engine.value?.chart
  if (!chart) return
  const rect = (e.target as HTMLCanvasElement).getBoundingClientRect()
  // Normalise delta to pixels regardless of browser / device.
  //   deltaMode 0 = pixel (trackpad / most mice), 1 = line, 2 = page
  let dx = e.deltaX
  let dy = e.deltaY
  if (e.deltaMode === 1) {
    dx *= 16
    dy *= 16
  } else if (e.deltaMode === 2) {
    dx *= 100
    dy *= 100
  }
  const cx = e.clientX - rect.left
  const sens = zoomSensitivity.value
  if (e.ctrlKey) {
    // Trackpad pinch (OS-recognized) → scale-based zoom about the cursor.
    chart.onPinch(Math.exp(-dy * PINCH_SCALE_K * sens), cx, e.clientY - rect.top)
  } else if (Math.abs(dx) > Math.abs(dy)) {
    // Horizontal two-finger scroll → pan (no Rust inertia; OS has momentum).
    chart.onScroll(dx, dy)
  } else {
    // Vertical wheel / scroll → zoom (inertial, accumulated in Rust on_tick).
    chart.onWheel(dy * sens, cx)
  }
}

/** Pack a `MouseEvent`/`PointerEvent`'s modifier state into the bit-format
 *  expected by the WASM bridge (1=Ctrl/⌘, 2=Shift, 4=Alt, 8=Meta), matching
 *  `imeModifierBits` for keyboard events. */
function mouseModifierBits(e: MouseEvent): number {
  let bits = 0
  if (e.ctrlKey) bits |= 1
  if (e.shiftKey) bits |= 2
  if (e.altKey) bits |= 4
  if (e.metaKey) bits |= 8
  return bits
}

/** Map `PointerEvent.pointerType` to the Rust kind code (0=Mouse,1=Touch,2=Pen). */
function pointerKindCode(e: PointerEvent): number {
  return e.pointerType === 'touch' ? 1 : e.pointerType === 'pen' ? 2 : 0
}

/** Map `PointerEvent.button` to the Rust button code; pen eraser → 5. */
function pointerButtonCode(e: PointerEvent): number {
  if (e.pointerType === 'pen' && (e.buttons & 32) !== 0) return 5
  return e.button < 0 ? 0 : e.button
}

function onPointerDown(e: PointerEvent) {
  const canvas = chartCanvas.value
  const chart = engine.value?.chart
  if (!canvas || !chart) return
  const rect = canvas.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  // NOTE: pointer capture is deliberately NOT taken here. Capturing on every
  // press and releasing it on the matching pointerup makes the browser
  // re-dispatch boundary events — Chromium fires a spurious `pointerleave` on
  // release even though the pointer never left the canvas, which would (e.g.)
  // fling a drawing's rubber-band preview off-screen. We instead capture
  // lazily in onPointerMove once an actual drag begins, so a plain click never
  // captures and never triggers that release-time leave.
  const consumed = chart.onPointerDown(
    e.pointerId,
    pointerKindCode(e),
    pointerButtonCode(e),
    x,
    y,
    mouseModifierBits(e),
  )
  // If the chart consumed the press while in text-editing mode, suppress the
  // browser's default focus shift so the IME bridge `<input>` keeps focus
  // (otherwise onImeBlur treats it as an implicit commit and exits editing).
  if (consumed && chart.capturesKeyboard()) {
    e.preventDefault()
  }
}

function onPointerMove(e: PointerEvent) {
  const chart = engine.value?.chart
  const canvas = chartCanvas.value
  if (!chart || !canvas) return
  const rect = canvas.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  // Lazily capture once a real drag is underway (primary button held) so move
  // + up keep arriving even when the drag leaves the canvas. Capturing here
  // rather than on pointerdown means a plain click never captures, so the
  // browser never fires the spurious release-time pointerleave.
  if ((e.buttons & 1) !== 0 && !canvas.hasPointerCapture(e.pointerId)) {
    try {
      canvas.setPointerCapture(e.pointerId)
    } catch {
      // ignore — capture is best-effort
    }
  }
  canvas.style.cursor = chart.cursorAt(x, y)
  chart.onPointerMove(e.pointerId, x, y, mouseModifierBits(e))
  refreshSelectionToolbar()
}

function onPointerUp(e: PointerEvent) {
  const chart = engine.value?.chart
  const canvas = chartCanvas.value
  if (!chart || !canvas) return
  const rect = canvas.getBoundingClientRect()
  chart.onPointerUp(e.pointerId, e.clientX - rect.left, e.clientY - rect.top)
  saveChartSnapshot()
}

function onPointerCancel(e: PointerEvent) {
  engine.value?.chart?.onPointerCancel(e.pointerId)
}

function onPointerEnter() {
  engine.value?.chart?.onPointerEnter()
}

function onPointerLeave() {
  engine.value?.chart?.onPointerLeave()
}

function onPanelResize(sizes: number[]) {
  // Don't persist when the editor panel is collapsed
  if (!editorCollapsed.value && sizes[0] !== undefined) {
    localStorage.setItem(LS_PANEL, String(sizes[0]))
  }
  // Trigger canvas resize after panel changes
  nextTick(resizeCanvas)
}

// Track pointer-down position so we can distinguish a genuine click
// (minimal movement) from a resize-handle drag that ends over the button.
let toggleDownPos: { x: number; y: number } | null = null

function onToggleBtnClick(e: MouseEvent) {
  if (!toggleDownPos) return
  const dx = e.clientX - toggleDownPos.x
  const dy = e.clientY - toggleDownPos.y
  toggleDownPos = null
  if (dx * dx + dy * dy > 9) return // moved > 3px → was a drag
  toggleEditor()
}

async function toggleEditor() {
  if (editorCollapsed.value) {
    // Already collapsed (collapsible is true) → expand
    editorPanel.value?.expand()
  } else {
    // Enable collapsible so collapse() works, then trigger it
    editorCollapsible.value = true
    await nextTick()
    editorPanel.value?.collapse()
  }
}

function onEditorCollapse() {
  editorCollapsed.value = true
  // Keep collapsible true while collapsed so expand() can work
  if (collapseEventsReady) {
    localStorage.setItem(LS_COLLAPSED, 'true')
  }
  nextTick(resizeCanvas)
}

function onEditorExpand() {
  editorCollapsed.value = false
  // Disable collapsible so dragging below min-size won't snap to zero
  editorCollapsible.value = false
  if (collapseEventsReady) {
    localStorage.removeItem(LS_COLLAPSED)
  }
  nextTick(resizeCanvas)
}

let scrollAnimRaf = 0
let chartEventRaf = 0

function syncImePosition() {
  const chart = engine.value?.chart
  const input = imeBridge.value
  if (!chart || !input) return
  const pos = chart.caretPixel() as [number, number] | null
  if (pos) {
    input.style.left = `${pos[0]}px`
    input.style.top = `${pos[1]}px`
  } else {
    input.style.left = '-9999px'
    input.style.top = '-9999px'
  }
}

function pollChartEvents() {
  const chart = engine.value?.chart
  if (chart) {
    let ev: unknown
    while ((ev = chart.pollEvent()) !== null) handleChartEvent(ev)
    syncImePosition()
  }
  chartEventRaf = requestAnimationFrame(pollChartEvents)
}

function scrollToBar(barIndex: number) {
  const chart = engine.value?.chart
  if (!chart) return

  // Cancel any in-flight scroll animation
  if (scrollAnimRaf) {
    cancelAnimationFrame(scrollAnimRaf)
    scrollAnimRaf = 0
  }

  // Compute target offset (centre the bar)
  const visibleBars = chart.barCount()
  const totalBars = chart.totalBars()
  const maxOffset = Math.max(0, totalBars - visibleBars)
  const target = Math.max(0, Math.min(barIndex - visibleBars / 2, maxOffset))

  const startOffset = chart.scrollOffset()
  const distance = target - startOffset

  // If very close, just jump
  if (Math.abs(distance) < 0.5) {
    chart.scrollToBar(barIndex)
    return
  }

  const duration = 400 // ms
  const startTime = performance.now()

  function tick(now: number) {
    const elapsed = now - startTime
    const t = Math.min(elapsed / duration, 1)
    // ease-out cubic: 1 - (1 - t)^3
    const ease = 1 - (1 - t) * (1 - t) * (1 - t)
    const current = startOffset + distance * ease

    chart.setScrollOffset(current)

    if (t < 1) {
      scrollAnimRaf = requestAnimationFrame(tick)
    } else {
      scrollAnimRaf = 0
    }
  }

  scrollAnimRaf = requestAnimationFrame(tick)
}

async function gotoFrame(line: number, col: number, endLine: number, endCol: number, scriptTag: string) {
  if (scriptTag !== currentTag() && scriptTag !== UNSAVED_TAG) {
    await loadScript(scriptTag)
  } else {
    await waitForEditorSourceSync(currentSource.value)
  }
  editorComponent.value?.revealAndSelect(line, col, endLine, endCol)
}

function gotoDiagnostic() {
  const diag = firstDiagnostic.value
  if (!diag) return
  // Only jump to the position when the diagnostic is from the main file.
  // External-file positions don't correspond to the editor content.
  if (!diag.filePath || diag.filePath === 'playground.nv') {
    editorComponent.value?.revealPosition(diag.line, diag.column)
  }
}

function onKeyDown(e: KeyboardEvent) {
  const mod = e.ctrlKey || e.metaKey
  if (mod && e.shiftKey && e.key === 'S') {
    e.preventDefault()
    dialogMode.value = 'saveAs'
  } else if (mod && e.key === 's') {
    e.preventDefault()
    saveScript()
  }
}

/**
 * Convert a serde_wasm_bindgen-serialized annotation ID to BigInt.
*/
function toAnnId(id: unknown): string {
  return String(id)
}

/** Handle a single ChartEvent polled from `chart.pollEvent()`. */
function handleChartEvent(event: unknown) {
  const ev = event as Record<string, unknown>
  const chart = engine.value?.chart

  const tagForId = (id: unknown): string | null =>
    chart?.tagFor(String(id)) as string | null

  if ('editScript' in ev) {
    const tag = tagForId(ev.editScript)
    if (tag) void loadScript(tag)
  }
  if ('removeScript' in ev) {
    const tag = tagForId(ev.removeScript)
    if (tag) removeFromChart(tag)
  }

  if ('showError' in ev) {
    const tag = tagForId(ev.showError)
    if (!tag) return
    const err = chart?.scriptError(tag) as {
      compile?: { diagnostics: { severity: string; message: string; startLine: number; startCharacter: number; endLine: number; endCharacter: number; filePath?: string }[]; sourceFiles: Record<string, { source: string }> }
      exception?: { message: string; spans: unknown[]; backtrace: { funcName: string | null; filePath: string; line: number; column: number; endLine: number; endColumn: number; moduleKind: string }[] }
    } | null
    if (err && 'compile' in err && err.compile) {
      const diags = err.compile.diagnostics
      const sources = err.compile.sourceFiles
      scriptErrorDetail.value = {
        message: diags[0]?.message ?? 'Compile error',
        scriptTag: tag,
        locations: diags.map(d => ({
          message: d.message,
          filePath: d.filePath ?? 'script.nv',
          line: d.startLine + 1,
          column: d.startCharacter + 1,
          endLine: d.endLine + 1,
          endColumn: d.endCharacter + 1,
          source: d.filePath ? (sources[d.filePath]?.source ?? '') : '',
        })),
      }
      dialogMode.value = 'scriptError'
    } else if (err && 'exception' in err && err.exception) {
      const { message, backtrace } = err.exception
      runtimeErrorDetail.value = {
        message,
        scriptTag: tag,
        backtrace: backtrace.map(f => ({
          funcName: f.funcName,
          filePath: f.filePath,
          line: f.line,
          column: f.column,
          endLine: f.endLine,
          endColumn: f.endColumn,
          moduleKind: f.moduleKind,
        })),
      }
      dialogMode.value = 'runtimeError'
    }
  }

  if ('configureScript' in ev) {
    const tag = tagForId(ev.configureScript)
    if (!tag) return
    const inputs = chart?.scriptInputsEffective(tag) as unknown[] | null
    configDialogData.value = {
      tag,
      id: tag,
      inputs: inputs ?? [],
    }
  }

  if ('toolChanged' in ev) {
    const toolEv = ev.toolChanged as { name: string }
    activeTool.value = toolEv.name ?? 'pointer'
    syncImeFocus()
  }

  const isAnnotationLifecycle = 'annotationCreated' in ev || 'annotationUpdated' in ev || 'annotationDeleted' in ev
  if (isAnnotationLifecycle) {
    scheduleAnnotationsSave()
    refreshSelectionToolbar()
    if (annPropsDialogOpen.value) refreshAnnotationPropertiesDialog()
  }

  if ('annotationUpdated' in ev && chart) {
    const id = toAnnId(ev.annotationUpdated)
    const ann = chart.getAnnotation(id) as { spec?: { kind?: Record<string, unknown> } } | null
    const kind = ann?.spec?.kind
    const toolId = kind?.drawToolId
    if (typeof toolId === 'string' && kind) {
      try {
        const all = JSON.parse(localStorage.getItem(TOOL_DEFAULTS_KEY) ?? '{}') as Record<string, string>
        all[toolId] = JSON.stringify(kind)
        localStorage.setItem(TOOL_DEFAULTS_KEY, JSON.stringify(all))
      } catch { /* ignore */ }
    }
  }

  if ('doubleClick' in ev) {
    const el = ev.doubleClick
    if (el === 'bar') {
      candlestickPropertiesDialogOpen.value = true
    } else if (el && typeof el === 'object' && 'annotation' in el) {
      openAnnotationPropertiesDialog((el as Record<string, unknown>).annotation)
    } else if (el && typeof el === 'object' && 'series' in el) {
      const series = (el as Record<string, unknown>).series as Record<string, unknown>
      const tag = tagForId(series.scriptId)
      if (tag) {
        const inputs = chart?.scriptInputsEffective(tag) as unknown[] | null
        configDialogData.value = { tag, id: tag, inputs: inputs ?? [] }
      }
    }
  }

  if ('selectionChanged' in ev) {
    const sel = ev.selectionChanged
    if (sel && typeof sel === 'object' && 'annotation' in sel) {
      refreshSelectionToolbar()
    } else {
      selToolbarVisible.value = false
    }
  }

}

onMounted(async () => {
  window.addEventListener('keydown', onKeyDown)

  // Wait one tick so SplitterGroup computes the initial panel layout.
  // Without this, collapse() throws "Panel size not found".
  await nextTick()

  // Restore editor collapsed state. Use savedEditorCollapsed (not the ref)
  // because the ref was already overwritten by SplitterPanel's initial
  // onExpand event during child mount.
  if (savedEditorCollapsed) {
    editorPanel.value?.collapse()
  }
  // Strategy panel starts collapsed; the watcher on strategyReport
  // will expand it when the first run produces a strategy report.
  strategyPanel.value?.collapse()
  collapseEventsReady = true

  const canvas = chartCanvas.value
  if (!canvas) return

  await initWasm(canvas)

  if (engine.value) {
    // Dev hook for ad-hoc DevTools inspection.
    ;(window as unknown as { __navi: unknown }).__navi = engine.value
    // Sync initial theme before first render
    setChartTheme(isDark.value)

    // Start pollEvent loop — replaces set_chart_event_callback.
    chartEventRaf = requestAnimationFrame(pollChartEvents)

    // Start persistent inertia tick loop (no-op when no velocity).
    startTickLoop()

    // Restore magnet config (global, not per-symbol).
    loadMagnetFromStorage()
    // Restore sticky-drawing toggle.
    if (stickyTool.value) {
      engine.value.chart.setStickyTool(true)
    }
    // Apply stored candlestick style.
    engine.value.chart.setCandlestickStyle(candlestickStyle.value as any)
    // Apply stored last price line visibility.
    if (!showLastPriceLine.value) {
      engine.value.chart.setLastPriceLineVisible(false)
    }
    // Apply stored chip-distribution visibility.
    if (showCyq.value) {
      engine.value.chart.setCyqVisible(true)
    }

    // Setup ResizeObserver
    resizeObserver = new ResizeObserver(() => {
      resizeCanvas()
      refreshSelectionToolbar()
    })
    if (chartContainer.value) {
      resizeObserver.observe(chartContainer.value)
    }

    // Initial resize
    resizeCanvas()

    // Run initial analysis so the status bar shows diagnostics.
    analyze(currentSource.value)

    // Restore chart snapshot (scripts + configs + viewport + pane ratios).
    if (savedSnapshotJson) {
      await restoreSnapshot(savedSnapshotJson)
      scriptsOnChart.value = new Set(savedScriptsOnChart)

      // Re-analyze the current editor source so diagnostics are correct.
      analyze(currentSource.value)
      refreshStrategyReport()

      // Trigger a resize so pane ratios take effect visually.
      resizeCanvas()
    }

    // Restore annotations after the chart snapshot so sub-pane layouts already exist.
    loadAnnotationsForStock(activeStock.value.symbol)

    window.addEventListener('pagehide', flushPersistedChartState)
  }
})

watch([lang, engine], ([nextLang, eng]) => {
  const currentLocale = nextLang || 'en'
  locale.value = currentLocale
  if (!eng) return
  eng.chart.setLocale(currentLocale)
  eng.analyzer.setLocale(currentLocale)
  if (stdlibDocsOpen.value || stdlibDocsCacheLocale.value !== currentLocale)
    refreshStdlibDocs(currentLocale)
}, { immediate: true })

onUnmounted(() => {
  window.removeEventListener('pagehide', flushPersistedChartState)
  window.removeEventListener('keydown', onKeyDown)
  if (debounceTimer) clearTimeout(debounceTimer)
  if (scrollAnimRaf) cancelAnimationFrame(scrollAnimRaf)
  if (chartEventRaf) cancelAnimationFrame(chartEventRaf)
  if (resizeObserver) resizeObserver.disconnect()
  flushPersistedChartState()
  engine.value?.chart.free()
  engine.value?.analyzer.free()
})

// Persist source and activeId changes; refresh strategy report when active
// script changes so the panel tracks the currently open script.
watch(activeScriptId, (id) => {
  if (id) localStorage.setItem(LS_ACTIVE_ID, id)
  else localStorage.removeItem(LS_ACTIVE_ID)
  refreshStrategyReport()
})

// Sync chart theme with VitePress dark mode
watch(isDark, (dark) => {
  setChartTheme(dark)
}, { immediate: true })

// Collapse / expand the strategy panel when the report changes.
watch(strategyReport, async (report) => {
  await nextTick()
  if (report) {
    strategyPanel.value?.expand()
  } else {
    strategyPanel.value?.collapse()
  }
})


</script>

<template>
  <div class="playground-page" style="height: calc(100vh - var(--vp-nav-height, 64px)); display: flex; flex-direction: column; overflow: hidden;">
    <!-- Error fallback -->
    <div v-if="wasmError" style="padding: 2rem; color: var(--vp-c-danger-1);">
      <strong>{{ t('playground.wasm.failed') }}</strong> {{ wasmError }}
    </div>

    <!-- Main content -->
    <ResizablePanelGroup
      id="playground-panels"
      direction="horizontal"
      class="flex-1 min-h-0"
      @layout="onPanelResize"
    >
      <!-- Chart panel -->
      <ResizablePanel :default-size="defaultPanelSize" :min-size="CHART_MIN">
        <ResizablePanelGroup
          id="chart-strategy-panels"
          direction="vertical"
          style="height: 100%;"
          @layout="onChartPanelResize"
        >
          <ResizablePanel :default-size="strategyChartSize" :min-size="20">
            <div style="display: flex; flex-direction: column; height: 100%;">
              <ChartToolbar
                :active-stock="activeStock"
                :current-timeframe="currentTimeframe"
                :candlestick-style="candlestickStyle"
                :show-last-price-line="showLastPriceLine"
                :show-cyq="showCyq"
                @stock-change="onStockChange"
                @timeframe-change="onTimeframeChange"
                @candlestick-style-change="onCandlestickStyleChange"
                @last-price-line-change="onLastPriceLineChange"
                @cyq-change="onCyqChange"
              />
              <div
                :style="{ flex: '1', minHeight: '0', display: 'flex', overflow: 'hidden' }"
              >
              <div style="position: relative;">
                <DrawingToolbar
                  :active-tool="activeTool"
                  :magnet-mode="magnetMode"
                  :snap-to-indicators="magnetSnapToIndicators"
                  :sticky-tool="stickyTool"
                  @select="onToolSelect"
                  @magnet="onMagnetMode"
                  @snap-to-indicators="onMagnetSnapToIndicators"
                  @sticky-tool="onStickyTool"
                />
                <EmojiPicker
                  :open="emojiPickerOpen"
                  :selected="emojiGlyph"
                  @update:open="(v) => { if (!v && activeTool === 'emoji') onToolSelect('pointer') }"
                  @select="onEmojiSelect"
                />
              </div>
              <div
                ref="chartContainer"
                :style="{ flex: '1', minHeight: '0', position: 'relative', background: isDark ? '#1e1e2e' : '#ffffff', overflow: 'hidden' }"
              >
              <canvas
                ref="chartCanvas"
                tabindex="0"
                style="display: block; width: 100%; height: 100%; outline: none; touch-action: none;"
                @wheel.prevent="onWheel"
                @pointerdown="onPointerDown"
                @pointermove="onPointerMove"
                @pointerup="onPointerUp"
                @pointercancel="onPointerCancel"
                @pointerenter="onPointerEnter"
                @pointerleave="onPointerLeave"
                @keydown="onCanvasKeyDown"
                @contextmenu="onContextMenu"
              />
              <!--
                Hidden IME bridge input. The browser only fires
                `compositionstart` / `compositionupdate` / `compositionend`
                events on focusable text controls (canvas can't receive
                them), so we keep this offscreen `<input>` and focus it
                whenever the active tool's `captures_keyboard` returns
                true (i.e. while in the text-editing tool). All keydown /
                composition / input / blur events get forwarded to the
                WASM editor via the bindings on `playground`.
              -->
              <input
                ref="imeBridge"
                type="text"
                autocomplete="off"
                autocorrect="off"
                autocapitalize="off"
                spellcheck="false"
                tabindex="-1"
                aria-hidden="true"
                style="position: absolute; left: -9999px; top: -9999px; width: 1px; height: 1px; opacity: 0; pointer-events: none;"
                @keydown="onImeKeyDown"
                @input="onImeInput"
                @compositionstart="onImeCompositionStart"
                @compositionupdate="onImeCompositionUpdate"
                @compositionend="onImeCompositionEnd"
                @copy="onImeCopy"
                @cut="onImeCut"
                @paste="onImePaste"
                @blur="onImeBlur"
              />
              <div
                v-if="wasmLoading"
                style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; color: #6c7086; font-family: monospace;"
              >
                {{ t('playground.wasm.loading') }}
              </div>

              </div>
              </div>
            </div>
            <AnnotationContextMenu
              :open="ctxMenuOpen"
              :x="ctxMenuX"
              :y="ctxMenuY"
              :items="ctxMenuItems"
              @update:open="(v) => (ctxMenuOpen = v)"
              @select="onContextMenuSelect"
            />
            <SelectionToolbar
              :visible="selToolbarVisible && !annPropsDialogOpen"
              :bounds="selToolbarBounds"
              :descriptors="selToolbarDescriptors"
              :values="selToolbarValues"
              :locked="selToolbarLocked"
              :canvas-origin-x="selToolbarCanvasOriginX"
              :canvas-origin-y="selToolbarCanvasOriginY"
              :ann-id="selToolbarAnnId"
              @property-change="onSelToolbarPropertyChange"
              @toggle-lock="onSelToolbarToggleLock"
              @delete="onSelToolbarDelete"
              @open-properties="selToolbarAnnId != null && openAnnotationPropertiesDialog(BigInt(selToolbarAnnId))"
            />
            <AnnotationPropertiesDialog
              :open="annPropsDialogOpen"
              :descriptors="annPropsDescriptors"
              :values="annPropsValues"
              :points="annPropsPoints"
              @update:open="annPropsDialogOpen = $event"
              @property-change="onAnnPropsChange"
              @point-change="onAnnPropsPointChange"
              @reset-to-default="onAnnPropsResetToDefault"
            />
          </ResizablePanel>
          <ResizableHandle v-if="strategyReport" />
          <ResizablePanel
            ref="strategyPanel"
            :default-size="100 - strategyChartSize"
            :min-size="15"
            collapsible
            :collapsed-size="0"
          >
            <StrategyTester v-if="strategyReport" :report="strategyReport" @scroll-to-bar="scrollToBar" />
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>

      <ResizableHandle>
        <button
          class="z-10 flex h-6 w-3.5 !cursor-pointer items-center justify-center rounded-sm border bg-border text-muted-foreground hover:bg-accent"
          :title="editorCollapsed ? t('playground.editor.show') : t('playground.editor.hide')"
          @mousedown.stop
          @pointerdown="toggleDownPos = { x: $event.clientX, y: $event.clientY }"
          @click="onToggleBtnClick"
        >
          <ChevronsLeft v-if="editorCollapsed" class="h-2.5 w-2.5 pointer-events-none" />
          <ChevronsRight v-else class="h-2.5 w-2.5 pointer-events-none" />
        </button>
      </ResizableHandle>

      <!-- Editor panel -->
      <ResizablePanel
        ref="editorPanel"
        :default-size="100 - defaultPanelSize"
        :min-size="EDITOR_MIN"
        :collapsible="editorCollapsible"
        :collapsed-size="0"
        @collapse="onEditorCollapse"
        @expand="onEditorExpand"
      >
        <div style="display: flex; flex-direction: column; height: 100%; background: var(--vp-c-bg);">
          <EditorToolbar
            :active-script-id="activeScriptId"
            :script-tag="currentTagComputed"
            :dirty="dirty"
            :scripts="scripts"
            :scripts-on-chart="scriptsOnChart"
            @load="loadScript"
            @new="newScript"
            @save="saveScript"
            @save-as="dialogMode = 'saveAs'"
            @rename="dialogMode = 'rename'"
            @delete="dialogMode = 'delete'"
            @add-to-chart="onAddToChart"
          />

          <div
            v-if="activeScriptId && isBuiltinId(activeScriptId)"
            class="flex items-center gap-2 px-3 py-1.5 text-xs font-medium border-b shrink-0 bg-amber-500/15 dark:bg-amber-500/20 border-l-4 border-l-amber-500 text-amber-900 dark:text-amber-100"
          >
            <Lock :size="14" class="shrink-0 text-amber-600 dark:text-amber-400" />
            <span>{{ t('toolbar.readonlyHint') }}</span>
            <button
              class="underline underline-offset-2 hover:text-amber-700 dark:hover:text-amber-200 transition-colors font-semibold"
              @click="dialogMode = 'saveAs'"
            >{{ t('toolbar.saveAs').split(' (')[0] }}</button>
          </div>

          <PlaygroundEditor
            ref="editorComponent"
            :source="currentSource"
            :engine="engine"
            :readonly="!!activeScriptId && isBuiltinId(activeScriptId)"
            style="flex: 1; min-height: 0;"
            @change="onSourceChange"
            @show-docs="onShowStdlibDocs"
          />

          <EditorStatusBar
            :first-diagnostic="firstDiagnostic"
            @goto="gotoDiagnostic"
          />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>

    <!-- Dialogs -->
      <PlaygroundDialogs
      :mode="dialogMode"
      :active-script-id="activeScriptId"
      :scripts="scripts"
      :error-message="scriptErrorDetail?.message ?? firstDiagnostic?.message ?? ''"
      :script-error="scriptErrorDetail"
      :runtime-error="runtimeErrorDetail"
      @close="closeDialog"
      @save-as="handleSaveAs"
      @rename="handleRename"
      @delete="handleDelete"
      @goto="gotoFrame"
    />

    <!-- Candlestick style + properties dialog (opened by bar double-click) -->
    <CandlestickPropertiesDialog
      v-model:open="candlestickPropertiesDialogOpen"
      :engine="engine"
      :candlestick-style="candlestickStyle"
      @style-change="onCandlestickStyleChange"
    />

    <!-- Script configuration dialog -->
    <ScriptConfigDialog
      :data="configDialogData"
      :engine="engine"
      @close="onConfigClose"
    />

    <!-- Stdlib docs browser -->
    <StdlibDocsDialog
      :open="stdlibDocsOpen"
      :stdlib-docs="stdlibDocsCache"
      :initial-module="stdlibDocsInitial?.module"
      :initial-name="stdlibDocsInitial?.name"
      @close="stdlibDocsOpen = false"
    />
  </div>
</template>
