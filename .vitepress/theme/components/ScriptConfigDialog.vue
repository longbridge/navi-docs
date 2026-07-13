<script setup lang="ts">
import { ref, computed, watch, provide } from 'vue'
import { useI18n } from 'vue-i18n'
import { DialogRoot, SelectRoot, SelectValue } from 'radix-vue'
import { RotateCcw, Settings2 } from 'lucide-vue-next'
import DialogContent from './ui/DialogContent.vue'
import DialogDescription from './ui/DialogDescription.vue'
import DialogHeader from './ui/DialogHeader.vue'
import DialogTitle from './ui/DialogTitle.vue'
import DialogFooter from './ui/DialogFooter.vue'
import Button from './ui/Button.vue'
import Input from './ui/Input.vue'
import Label from './ui/Label.vue'
import Switch from './ui/Switch.vue'
import Checkbox from './ui/Checkbox.vue'
import SelectTrigger from './ui/SelectTrigger.vue'
import SelectContent from './ui/SelectContent.vue'
import SelectItem from './ui/SelectItem.vue'
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from 'radix-vue'
import LineStylePopover from './LineStylePopover.vue'
import ColorPickerPopover from './ColorPickerPopover.vue'

// ── Types mirroring Rust SeriesGraphConfig / SeriesGraphOverride / InputInfo ──
// SeriesGraphConfig uses external tagging (default serde), so each variant is
// an object with a single key matching the variant name (camelCase).
// e.g. { "plot": { title, colors, ... } }

type SeriesGraphPayload =
  | { title: string | null; colors: (string | null)[]; lineWidth: number; style: string; lineStyle: string }  // plot
  | { title: string | null; colors: (string | null)[]; charValue: string; location: string; size: string }    // plotChar
  | { title: string | null; colors: (string | null)[]; style: string; location: string; size: string }        // plotShape
  | { title: string | null; upColors: (string | null)[]; downColors: (string | null)[] }                      // plotArrow
  | { title: string | null; colors: (string | null)[]; wickColors: (string | null)[]; borderColors: (string | null)[] } // plotCandle

type SeriesGraphConfig = Record<string, SeriesGraphPayload>
  | { type: 'plotBar'; title: string | null; colors: (string | null)[] }
  | { type: 'backgroundColor'; title: string | null; colors: (string | null)[] }
  | { type: 'fill'; title: string | null; colors: (string | null)[] }

interface SeriesGraphOverride {
  colorOverrides: (string | null)[]
  lineWidth?: number | null
  style?: string | null
  lineStyle?: string | null
  lineWidthOverrides?: (number | null)[]
  lineStyleOverrides?: (string | null)[]
  charValue?: string | null
  shape?: string | null
  location?: string | null
  size?: string | null
  visible?: boolean
}

interface InputInfo {
  idx: number
  title: string | null
  tooltip: string | null
  group: string | null
  kind: Record<string, any>
  defaultValue?: any
}

export interface ConfigureScriptEvent {
  tag: string
  id: string
  inputs: InputInfo[]
}

// ── Props / Emits ────────────────────────────────────────────────────────────

const props = defineProps<{
  data: ConfigureScriptEvent | null
  engine: { chart: { scriptOverrides(tag: string): any; graphConfigs(tag: string): any; setScriptConfig(tag: string, config: unknown): Promise<void> } } | null
}>()

const emit = defineEmits<{
  close: []
}>()

const { t } = useI18n()

const openPopoverCount = ref(0)
provide('openPopoverCount', openPopoverCount)

// ── Helpers: WASM array-of-{key,value} ↔ Map conversion ────────────────────

function arrToMap<V>(arr: { key: number; value: V }[] | null | undefined): Map<number, V> {
  if (!arr) return new Map()
  return new Map(arr.map(({ key, value }) => [key, value]))
}

function mapToArr<V>(map: Map<number, V>): { key: number; value: V }[] {
  return Array.from(map.entries()).map(([key, value]) => ({ key, value }))
}

// ── Local editable state ────────────────────────────────────────────────────

const localOverrides = ref<Map<number, SeriesGraphOverride>>(new Map())
const localInputValues = ref<Map<number, unknown>>(new Map())
/** Configs fetched from ChartView for the Visuals tab. */
const visualConfigs = ref<Map<number, SeriesGraphConfig>>(new Map())

const isOpen = computed(() => props.data !== null)

const hasInputs = computed(() => (props.data?.inputs.length ?? 0) > 0)
const hasVisuals = computed(() => visualConfigs.value.size > 0)
const defaultTab = computed(() => hasInputs.value ? 'inputs' : 'visuals')

/** Computed array of [sgId, cfg] pairs for v-for in the template. */
const visualConfigEntries = computed(() => Array.from(visualConfigs.value.entries()))

watch(() => props.data, (d) => {
  if (!d) return
  // Load current overrides from ChartView
  if (props.engine) {
    localOverrides.value = arrToMap(props.engine.chart.scriptOverrides(d.tag))
  }
  // Build input values from current effective values
  const iv = new Map<number, unknown>()
  for (const input of d.inputs) {
    const kind = input.kind
    const variant = getInputVariant(kind)
    const payload = getInputPayload(kind)
    if (payload !== null && typeof payload === 'object' && 'value' in payload) {
      let v = (payload as any).value
      // VM uses "" for "chart timeframe"; map to UI sentinel.
      if (variant === 'timeFrame' && v === '') v = TF_CHART_SENTINEL
      iv.set(input.idx, v)
    }
  }
  localInputValues.value = iv
  // Fetch initial visual configs
  fetchVisualConfigs()
})

/** Fetch the latest graph configs and overrides from ChartView. */
function fetchVisualConfigs() {
  if (!props.data || !props.engine) return
  visualConfigs.value = arrToMap(props.engine.chart.graphConfigs(props.data.tag))
  localOverrides.value = arrToMap(props.engine.chart.scriptOverrides(props.data.tag))
}

/** Build the full ScriptConfig and push it to the chart immediately. */
async function syncToChart() {
  if (!props.data || !props.engine) return
  const config = {
    seriesOverrides: mapToArr(localOverrides.value),
    inputValues: mapToArr(buildInputValues()),
  }
  await props.engine.chart.setScriptConfig(props.data.tag, config as any)
  // After re-execution (if inputs changed), refresh visual configs
  fetchVisualConfigs()
}

/** Build input_values for ScriptConfig from localInputValues. */
function buildInputValues(): Map<number, unknown> {
  const result = new Map<number, unknown>()
  if (!props.data) return result
  for (const [key, val] of localInputValues.value) {
    result.set(key, toVmValue(key, val))
  }
  return result
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function getConfigVariant(cfg: SeriesGraphConfig): string {
  // External tagging: the variant name is the single key of the object.
  return Object.keys(cfg)[0] ?? ''
}

function getConfigPayload(cfg: SeriesGraphConfig): any {
  // External tagging: the payload is the value under the variant key.
  return Object.values(cfg)[0] ?? {}
}

const VARIANT_DEFAULT_TITLE_KEY: Record<string, string> = {
  plot: 'dialog.defaultTitle.plot',
  plotArrow: 'dialog.defaultTitle.plotArrow',
  plotCandle: 'dialog.defaultTitle.plotCandle',
  plotBar: 'dialog.defaultTitle.plotBar',
  plotChar: 'dialog.defaultTitle.plotChar',
  plotShape: 'dialog.defaultTitle.plotShape',
  backgroundColor: 'dialog.defaultTitle.bgColor',
  fill: 'dialog.defaultTitle.fill',
}

function getTitle(cfg: SeriesGraphConfig): string {
  const p = getConfigPayload(cfg)
  if (p.title) return p.title
  const variant = getConfigVariant(cfg)
  const key = VARIANT_DEFAULT_TITLE_KEY[variant]
  return key ? t(key) : variant
}

/** Get all color slot segments for a config (for the colour editor rows). */
function getColorSegments(cfg: SeriesGraphConfig): { label: string; colors: (string | null)[]; offset: number }[] {
  const variant = getConfigVariant(cfg)
  const payload = getConfigPayload(cfg)
  if (variant === 'plotArrow') {
    return [
      { label: t('dialog.upColor'), colors: payload.upColors, offset: 0 },
      { label: t('dialog.downColor'), colors: payload.downColors, offset: (payload.upColors ?? []).length },
    ]
  }
  if (variant === 'plotCandle') {
    return [
      { label: t('dialog.bodyColor'), colors: payload.colors, offset: 0 },
      { label: t('dialog.wickColor'), colors: payload.wickColors, offset: (payload.colors ?? []).length },
      { label: t('dialog.borderColor'), colors: payload.borderColors, offset: (payload.colors ?? []).length + (payload.wickColors ?? []).length },
    ]
  }
  return [{ label: t('dialog.plotColor'), colors: payload.colors ?? [], offset: 0 }]
}

/** Extract #RRGGBB hex and alpha (0–255) from a packed u32 Color (RGBA layout). */
function colorToHex(c: string | null): string {
  if (!c) return '#808080'
  // Rust Color packs as u32: (R << 24) | (G << 16) | (B << 8) | A
  const n = typeof c === 'number' ? c : parseInt(c, 10)
  if (isNaN(n)) return c // already a hex string
  const r = (n >>> 24) & 0xff
  const g = (n >>> 16) & 0xff
  const b = (n >>> 8) & 0xff
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
}

/** Extract the alpha channel (0–255) from a packed u32 Color. */
function colorAlpha(c: string | null): number {
  if (!c) return 255
  const n = typeof c === 'number' ? c : parseInt(c, 10)
  if (isNaN(n)) return 255
  return n & 0xff
}

/** Pack #RRGGBB hex + alpha (0–255) into u32 Color (RGBA layout). */
function hexToU32(hex: string, alpha = 255): number {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  // Use unsigned right-shift trick to keep it a positive u32
  return ((r << 24) | (g << 16) | (b << 8) | alpha) >>> 0
}

// ── Color override editing ───────────────────────────────────────────────────

function getColorOverride(sgId: number, index: number): string | null {
  return localOverrides.value.get(sgId)?.colorOverrides?.[index] ?? null
}

function setColorOverride(sgId: number, index: number, hex: string, alpha?: number) {
  if (!localOverrides.value.has(sgId)) {
    const cfg = visualConfigs.value.get(sgId)
    const len = cfg ? totalColorSlots(cfg) : index + 1
    localOverrides.value.set(sgId, { colorOverrides: new Array(len).fill(null) })
  }
  const ovr = localOverrides.value.get(sgId)!
  while (ovr.colorOverrides.length <= index) ovr.colorOverrides.push(null)
  const a = alpha ?? getEffectiveAlpha(sgId, index)
  ovr.colorOverrides[index] = hexToU32(hex, a) as any
  syncToChart()
}

/** Set only the alpha channel for a color override, preserving RGB. */
function setColorAlpha(sgId: number, index: number, origColor: string | null, alpha: number) {
  const hex = effectiveColor(sgId, index, origColor)
  setColorOverride(sgId, index, hex, alpha)
  // syncToChart already called by setColorOverride
}

/** Get the effective alpha for a color slot (override if set, else original). */
function getEffectiveAlpha(sgId: number, index: number): number {
  const ovr = getColorOverride(sgId, index)
  if (ovr != null) return colorAlpha(ovr)
  // Fallback to original color's alpha from config
  const cfg = visualConfigs.value.get(sgId)
  if (!cfg) return 255
  const segments = getColorSegments(cfg)
  for (const seg of segments) {
    const localIdx = index - seg.offset
    if (localIdx >= 0 && localIdx < seg.colors.length) {
      return colorAlpha(seg.colors[localIdx])
    }
  }
  return 255
}

function clearColorOverride(sgId: number, index: number) {
  const ovr = localOverrides.value.get(sgId)
  if (!ovr) return
  ovr.colorOverrides[index] = null
}

/** Get the effective display color as #RRGGBB hex (ignores alpha). */
function effectiveColor(sgId: number, index: number, origColor: string | null): string {
  const ovr = getColorOverride(sgId, index)
  if (ovr != null) return colorToHex(ovr)
  return origColor != null ? colorToHex(origColor) : '#808080'
}

/** Get the effective CSS color with alpha for display (rgba). */
function effectiveColorCss(sgId: number, index: number, origColor: string | null): string {
  const hex = effectiveColor(sgId, index, origColor)
  const a = getEffectiveAlpha(sgId, index)
  if (a === 255) return hex
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r},${g},${b},${(a / 255).toFixed(2)})`
}

function totalColorSlots(cfg: SeriesGraphConfig): number {
  const v = getConfigVariant(cfg)
  const p = getConfigPayload(cfg)
  if (v === 'plotArrow') return p.upColors.length + p.downColors.length
  if (v === 'plotCandle') return p.colors.length + p.wickColors.length + p.borderColors.length
  return (p.colors ?? []).length
}

// ── Property override editing ────────────────────────────────────────────────

// Source name ↔ VM integer discriminant.  The chart crate serialises
// SourceType as lowercase strings, but the VM reads i64 discriminants.
const SOURCE_OPTIONS = ['open', 'high', 'low', 'close', 'hl2', 'hlc3', 'ohlc4', 'hlcc4'] as const
const SOURCE_TO_INT: Record<string, number> = Object.fromEntries(SOURCE_OPTIONS.map((s, i) => [s, i]))
const INT_TO_SOURCE: Record<number, string> = Object.fromEntries(SOURCE_OPTIONS.map((s, i) => [i, s]))

const PLOT_STYLES = ['line', 'stepLine', 'diamond', 'histogram', 'cross', 'area', 'columns', 'circles', 'lineBr', 'areaBr', 'stepLineBr'] as const
const LINE_STYLES = ['solid', 'dashed', 'dotted'] as const
const SHAPES = ['XCross', 'Cross', 'Circle', 'Diamond', 'Square', 'TriangleUp', 'TriangleDown', 'ArrowUp', 'ArrowDown', 'Flag', 'LabelUp', 'LabelDown'] as const
const SIZES = ['Auto', 'Tiny', 'Small', 'Normal', 'Large', 'Huge'] as const
const LOCATIONS = ['AboveBar', 'BelowBar', 'Absolute', 'Top', 'Bottom'] as const

function isVisible(sgId: number): boolean {
  return localOverrides.value.get(sgId)?.visible !== false
}

function setVisibility(sgId: number, visible: boolean) {
  const ovr = ensureOverride(sgId)
  ovr.visible = visible
  syncToChart()
}

function ensureOverride(sgId: number): SeriesGraphOverride {
  if (!localOverrides.value.has(sgId)) {
    const cfg = visualConfigs.value.get(sgId)
    const len = cfg ? totalColorSlots(cfg) : 0
    localOverrides.value.set(sgId, { colorOverrides: new Array(len).fill(null) })
  }
  return localOverrides.value.get(sgId)!
}

function getPropertyOverride(sgId: number, prop: keyof SeriesGraphOverride): any {
  return localOverrides.value.get(sgId)?.[prop] ?? null
}

function setPropertyOverride(sgId: number, prop: keyof SeriesGraphOverride, value: any) {
  const ovr = ensureOverride(sgId)
  ;(ovr as any)[prop] = value
  syncToChart()
}

function clearPropertyOverride(sgId: number, prop: keyof SeriesGraphOverride) {
  const ovr = localOverrides.value.get(sgId)
  if (!ovr) return
  ;(ovr as any)[prop] = null
}

/** Get the effective value for a property: override if set, else config default. */
function effectiveProperty(sgId: number, prop: keyof SeriesGraphOverride, cfg: SeriesGraphConfig): any {
  const ovr = getPropertyOverride(sgId, prop)
  if (ovr != null) return ovr
  const payload = getConfigPayload(cfg)
  // Map override property names to config payload field names
  if (prop === 'style' && 'style' in payload) return payload.style
  if (prop === 'lineStyle' && 'lineStyle' in payload) return payload.lineStyle
  if (prop === 'lineWidth' && 'lineWidth' in payload) return payload.lineWidth
  if (prop === 'charValue' && 'charValue' in payload) return payload.charValue
  if (prop === 'shape' && 'style' in payload) return payload.style // PlotShape uses 'style' for shape
  if (prop === 'size' && 'size' in payload) return payload.size
  if (prop === 'location' && 'location' in payload) return payload.location
  return null
}

// ── Per-slot line style / width ─────────────────────────────────────────────

function getSlotLineWidth(sgId: number, slotIdx: number): number | null {
  return localOverrides.value.get(sgId)?.lineWidthOverrides?.[slotIdx] ?? null
}

function getSlotLineStyle(sgId: number, slotIdx: number): string | null {
  return localOverrides.value.get(sgId)?.lineStyleOverrides?.[slotIdx] ?? null
}

function effectiveSlotLineWidth(sgId: number, slotIdx: number, cfg: SeriesGraphConfig): number {
  return getSlotLineWidth(sgId, slotIdx) ?? effectiveProperty(sgId, 'lineWidth', cfg) ?? 1
}

function effectiveSlotLineStyle(sgId: number, slotIdx: number, cfg: SeriesGraphConfig): string {
  return getSlotLineStyle(sgId, slotIdx) ?? effectiveProperty(sgId, 'lineStyle', cfg) ?? 'solid'
}

function setSlotLineWidth(sgId: number, slotIdx: number, w: number) {
  const ovr = ensureOverride(sgId)
  if (!ovr.lineWidthOverrides) ovr.lineWidthOverrides = []
  while (ovr.lineWidthOverrides.length <= slotIdx) ovr.lineWidthOverrides.push(null)
  ovr.lineWidthOverrides[slotIdx] = w
  syncToChart()
}

/** Return the effective slot colour as a packed u32 (for LineStylePopover). */
function effectiveSlotColorU32(sgId: number, slotIdx: number, origColor: string | null): number {
  return hexToU32(effectiveColor(sgId, slotIdx, origColor), getEffectiveAlpha(sgId, slotIdx))
}

/** Accept a u32 from LineStylePopover and store it via setColorOverride. */
function setSlotColorFromU32(sgId: number, slotIdx: number, u32: number) {
  const r = (u32 >>> 24) & 0xff
  const g = (u32 >>> 16) & 0xff
  const b = (u32 >>> 8) & 0xff
  const a = u32 & 0xff
  const hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
  setColorOverride(sgId, slotIdx, hex, a)
}

function setSlotLineStyle(sgId: number, slotIdx: number, s: string) {
  const ovr = ensureOverride(sgId)
  if (!ovr.lineStyleOverrides) ovr.lineStyleOverrides = []
  while (ovr.lineStyleOverrides.length <= slotIdx) ovr.lineStyleOverrides.push(null)
  ovr.lineStyleOverrides[slotIdx] = s
  syncToChart()
}

// ── Input color helper ──────────────────────────────────────────────────────

function inputColorU32(idx: number): number {
  const val = String(localInputValues.value.get(idx) ?? '')
  return hexToU32(colorToHex(val), colorAlpha(val))
}

// ── SVG preview helpers ──────────────────────────────────────────────────────

/** stroke-dasharray for line style preview. */
function lineStyleDash(style: string): string {
  if (style === 'dashed') return '6 3'
  if (style === 'dotted') return '2 2'
  return 'none'
}

/** SVG path data for each plot style icon (viewBox 0 0 28 16). */
const PLOT_STYLE_PATHS: Record<string, { type: 'path' | 'circles' | 'crosses' | 'diamonds' | 'columns' | 'area' | 'histogram'; d?: string }> = {
  line:       { type: 'path', d: 'M2 12 L8 4 L16 10 L26 3' },
  stepLine:   { type: 'path', d: 'M2 12 H8 V4 H16 V10 H26' },
  lineBr:     { type: 'path', d: 'M2 12 L8 4 M12 8 L16 10 L26 3' },
  stepLineBr: { type: 'path', d: 'M2 12 H8 V4 M12 4 H16 V10 H26' },
  area:       { type: 'area', d: 'M2 12 L8 4 L16 10 L26 3 V14 H2 Z' },
  areaBr:     { type: 'area', d: 'M2 12 L8 4 L12 7 V14 H2 Z M14 8 L16 10 L26 3 V14 H14 Z' },
  circles:    { type: 'circles' },
  cross:      { type: 'crosses' },
  diamond:    { type: 'diamonds' },
  columns:    { type: 'columns' },
  histogram:  { type: 'histogram' },
}

/** SVG content for each shape icon (viewBox 0 0 16 16, centered at 8,8). */
const SHAPE_SVGS: Record<string, string> = {
  XCross:       '<g stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="4" x2="12" y2="12"/><line x1="12" y1="4" x2="4" y2="12"/></g>',
  Cross:        '<g stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="8" y1="3" x2="8" y2="13"/><line x1="3" y1="8" x2="13" y2="8"/></g>',
  Circle:       '<circle cx="8" cy="8" r="5" fill="currentColor"/>',
  Diamond:      '<polygon points="8,2 13,8 8,14 3,8" fill="currentColor"/>',
  Square:       '<rect x="3" y="3" width="10" height="10" fill="currentColor"/>',
  TriangleUp:   '<polygon points="8,2 14,13 2,13" fill="currentColor"/>',
  TriangleDown: '<polygon points="8,14 14,3 2,3" fill="currentColor"/>',
  ArrowUp:      '<g stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="14" x2="8" y2="3"/><polyline points="4,7 8,3 12,7"/></g>',
  ArrowDown:    '<g stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="2" x2="8" y2="13"/><polyline points="4,9 8,13 12,9"/></g>',
  Flag:         '<g fill="currentColor"><rect x="3" y="2" width="1.5" height="12"/><polygon points="4.5,2 13,2 11,5.5 13,9 4.5,9"/></g>',
  LabelUp:      '<path d="M8,2 L10,5 H13 V13 H3 V5 H6 Z" fill="currentColor"/>',
  LabelDown:    '<path d="M8,14 L10,11 H13 V3 H3 V11 H6 Z" fill="currentColor"/>',
}

// ── Input editing ────────────────────────────────────────────────────────────

/** Normalise a source value (might be a string name or an integer) to a display name. */
function sourceDisplayValue(val: unknown): string {
  if (typeof val === 'number') return INT_TO_SOURCE[val] ?? 'close'
  if (typeof val === 'string' && SOURCE_OPTIONS.includes(val as any)) return val
  return 'close'
}

function getInputVariant(kind: Record<string, any>): string {
  return Object.keys(kind)[0] ?? ''
}

function getInputPayload(kind: Record<string, any>): any {
  const key = Object.keys(kind)[0]
  return key ? kind[key] : null
}

/**
 * UI sentinel for "use chart timeframe".  Radix Vue's SelectItem forbids
 * empty-string values, so we use this internally and convert to/from `""`
 * at the VM boundary.
 */
const TF_CHART_SENTINEL = '__chart__'

/** All supported timeframe option values for the TimeFrame input dropdown. */
const TIMEFRAME_OPTION_KEYS = [
  TF_CHART_SENTINEL, '1', '2', '3', '5', '10', '15', '20', '30', '45',
  '60', '120', '180', '240', 'D', 'W', 'M', '3M', '12M',
]

/** Timeframe options with translated labels. */
const TIMEFRAME_OPTIONS = computed(() =>
  TIMEFRAME_OPTION_KEYS.map(key => ({
    value: key,
    label: t(`dialog.timeframes.${key === TF_CHART_SENTINEL ? 'chart' : key}`),
  })),
)

// ── Actions ──────────────────────────────────────────────────────────────────

/** Convert a local input value to the format expected by the VM. */
function toVmValue(key: number, val: unknown): unknown {
  const input = props.data?.inputs.find(i => i.idx === key)
  // Source inputs: VM expects a numeric index (0=open, 1=high, …).
  if (input && getInputVariant(input.kind) === 'source') {
    if (typeof val === 'string' && val in SOURCE_TO_INT) return SOURCE_TO_INT[val]
    return val
  }
  // Convert UI sentinel back to empty string for the VM.
  if (val === TF_CHART_SENTINEL) return ''
  return val
}

/** Called when any input value changes — sync immediately to chart. */
function onInputChange(idx: number, val: unknown) {
  localInputValues.value.set(idx, val)
  syncToChart()
}

function onResetDefaults() {
  localOverrides.value = new Map()
  localInputValues.value = new Map()
  if (props.data) {
    for (const input of props.data.inputs) {
      if (input.defaultValue != null) {
        let v = input.defaultValue
        // VM uses "" for "chart timeframe"; map to UI sentinel.
        if (getInputVariant(input.kind) === 'timeFrame' && v === '') v = TF_CHART_SENTINEL
        localInputValues.value.set(input.idx, v)
      }
    }
  }
  syncToChart()
}

function onOpenChange(open: boolean) {
  if (!open) emit('close')
}

// ── Input tooltip ────────────────────────────────────────────────────────────

interface TooltipState { text: string; x: number; y: number }
const inputTooltip = ref<TooltipState | null>(null)
const hoveredInputIdx = ref<number | null>(null)

function onInputInfoEnter(e: MouseEvent, text: string) {
  const r = (e.currentTarget as HTMLElement).getBoundingClientRect()
  const TW = 240
  const pad = 8
  const cx = r.left + r.width / 2
  const x = Math.max(TW / 2 + pad, Math.min(cx, window.innerWidth - TW / 2 - pad))
  inputTooltip.value = { text, x, y: r.top }
}

function onInputInfoLeave() {
  inputTooltip.value = null
}
</script>

<template>
  <DialogRoot :open="isOpen" @update:open="onOpenChange">
    <DialogContent
      class="max-w-[500px] !gap-0 p-0 overflow-clip"
      @open-auto-focus="(e: Event) => e.preventDefault()"
      @pointer-down-outside="(e: Event) => { if (openPopoverCount > 0) e.preventDefault() }"
    >
      <div class="flex items-center gap-2.5 px-5 py-3.5 border-b bg-muted/30 shrink-0">
        <Settings2 class="h-5 w-5 text-primary shrink-0" />
        <DialogHeader class="!gap-0">
          <DialogTitle class="text-base font-semibold leading-tight tracking-tight">{{ t('dialog.configure') }}</DialogTitle>
          <DialogDescription class="sr-only">{{ t('dialog.configure') }}</DialogDescription>
        </DialogHeader>
      </div>

      <TabsRoot v-if="data" :default-value="defaultTab" class="flex flex-col" @update:model-value="(v: string) => { if (v === 'visuals') fetchVisualConfigs() }">
        <div class="cfg-tabs">
          <TabsList class="cfg-tabs__list">
            <TabsTrigger v-if="hasInputs" value="inputs" class="cfg-tab">{{ t('dialog.inputs') }}</TabsTrigger>
            <TabsTrigger v-if="hasVisuals" value="visuals" class="cfg-tab">{{ t('dialog.visuals') }}</TabsTrigger>
          </TabsList>
        </div>

        <!-- ─── Inputs tab ──────────────────────────────────────────────── -->
        <TabsContent v-if="hasInputs" value="inputs" class="max-h-[50vh] overflow-y-auto mt-0">
          <div class="cfg-inputs-grid">
            <template v-for="(input, i) in data.inputs" :key="input.idx">

              <!-- Label cell -->
              <div
                class="cfg-inputs-label"
                :class="{ 'bg-muted/30': hoveredInputIdx === i, 'border-t border-border/50': i > 0 }"
                @mouseenter="hoveredInputIdx = i"
                @mouseleave="hoveredInputIdx = null"
              >
                <Label class="truncate text-[13px] font-medium text-foreground/80">
                  {{ input.title || `Input ${input.idx}` }}
                </Label>
                <span
                  v-if="input.tooltip"
                  class="cfg-info"
                  @mouseenter="onInputInfoEnter($event, input.tooltip!)"
                  @mouseleave="onInputInfoLeave"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                </span>
              </div>

              <!-- Control cell -->
              <div
                class="cfg-inputs-control"
                :class="{ 'bg-muted/30': hoveredInputIdx === i, 'border-t border-border/50': i > 0 }"
                @mouseenter="hoveredInputIdx = i"
                @mouseleave="hoveredInputIdx = null"
              >
                <!-- Bool → Switch -->
                <div v-if="getInputVariant(input.kind) === 'bool'" class="flex items-center">
                  <Switch
                    :checked="localInputValues.get(input.idx) as boolean"
                    @update:checked="onInputChange(input.idx, $event)"
                  />
                </div>

                <!-- Color -->
                <div v-else-if="getInputVariant(input.kind) === 'color'" class="flex items-center gap-2">
                  <ColorPickerPopover
                    :model-value="inputColorU32(input.idx)"
                    side="bottom"
                    align="end"
                    @update:model-value="onInputChange(input.idx, $event)"
                  >
                    <template #trigger>
                      <button
                        class="h-8 w-8 rounded-md border-2 border-black/10 dark:border-white/15 shadow-sm cursor-pointer hover:scale-105 hover:shadow-md transition-all"
                        :style="{ background: colorToHex(String(localInputValues.get(input.idx) ?? '')) }"
                      />
                    </template>
                  </ColorPickerPopover>
                  <span class="text-xs text-muted-foreground font-mono">
                    {{ colorToHex(String(localInputValues.get(input.idx) ?? '')) }}
                  </span>
                </div>

                <!-- Int -->
                <Input
                  v-else-if="getInputVariant(input.kind) === 'int'"
                  type="number"
                  :model-value="String(localInputValues.get(input.idx) ?? '')"
                  :min="getInputPayload(input.kind).min"
                  :max="getInputPayload(input.kind).max"
                  :step="getInputPayload(input.kind).step ?? 1"
                  @change="onInputChange(input.idx, parseInt(($event.target as HTMLInputElement).value))"
                />

                <!-- Float -->
                <Input
                  v-else-if="getInputVariant(input.kind) === 'float'"
                  type="number"
                  :model-value="String(localInputValues.get(input.idx) ?? '')"
                  :min="getInputPayload(input.kind).min"
                  :max="getInputPayload(input.kind).max"
                  :step="getInputPayload(input.kind).step ?? 0.1"
                  @change="onInputChange(input.idx, parseFloat(($event.target as HTMLInputElement).value))"
                />

                <!-- Source (dropdown) -->
                <SelectRoot
                  v-else-if="getInputVariant(input.kind) === 'source'"
                  :model-value="sourceDisplayValue(localInputValues.get(input.idx))"
                  @update:model-value="onInputChange(input.idx, $event)"
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem v-for="opt in SOURCE_OPTIONS" :key="opt" :value="opt">
                      {{ opt }}
                    </SelectItem>
                  </SelectContent>
                </SelectRoot>

                <!-- Enum (dropdown) -->
                <SelectRoot
                  v-else-if="getInputVariant(input.kind) === 'enum'"
                  :model-value="String(localInputValues.get(input.idx) ?? '')"
                  @update:model-value="onInputChange(input.idx, parseInt($event))"
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem v-for="[val, label] in getInputPayload(input.kind).options" :key="val" :value="String(val)">
                      {{ label }}
                    </SelectItem>
                  </SelectContent>
                </SelectRoot>

                <!-- Str with options -->
                <SelectRoot
                  v-else-if="getInputVariant(input.kind) === 'str' && getInputPayload(input.kind).options?.length"
                  :model-value="String(localInputValues.get(input.idx) ?? '')"
                  @update:model-value="onInputChange(input.idx, $event)"
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem v-for="opt in getInputPayload(input.kind).options" :key="opt" :value="opt">
                      {{ opt }}
                    </SelectItem>
                  </SelectContent>
                </SelectRoot>

                <!-- TextArea -->
                <textarea
                  v-else-if="getInputVariant(input.kind) === 'textArea'"
                  :value="String(localInputValues.get(input.idx) ?? '')"
                  @change="onInputChange(input.idx, ($event.target as HTMLTextAreaElement).value)"
                  class="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring resize-y"
                />

                <!-- Time: value is "YYYY-MM-DD HH:mm:ss" exchange local time -->
                <input
                  v-else-if="getInputVariant(input.kind) === 'time'"
                  type="datetime-local"
                  step="1"
                  :value="String(localInputValues.get(input.idx) ?? '').replace(' ', 'T')"
                  class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  @change="onInputChange(input.idx, ($event.target as HTMLInputElement).value.replace('T', ' '))"
                />

                <!-- TimeFrame → fixed dropdown -->
                <SelectRoot
                  v-else-if="getInputVariant(input.kind) === 'timeFrame'"
                  :model-value="String(localInputValues.get(input.idx) ?? '')"
                  @update:model-value="onInputChange(input.idx, $event)"
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem v-for="tf in TIMEFRAME_OPTIONS" :key="tf.value" :value="tf.value">
                      {{ tf.label }}
                    </SelectItem>
                  </SelectContent>
                </SelectRoot>

                <!-- Default: text input -->
                <Input
                  v-else
                  :model-value="String(localInputValues.get(input.idx) ?? '')"
                  @change="onInputChange(input.idx, ($event.target as HTMLInputElement).value)"
                />
              </div>

            </template>
          </div>
        </TabsContent>

        <!-- ─── Visuals tab ─────────────────────────────────────────────── -->
        <TabsContent v-if="hasVisuals" value="visuals" class="max-h-[50vh] overflow-y-auto mt-0">
          <div class="divide-y divide-border/50">
            <template v-for="([sgId, cfg]) in visualConfigEntries" :key="sgId">

              <!-- ════ Plot ════ -->
              <div v-if="getConfigVariant(cfg) === 'plot'" class="flex items-start gap-3 px-5 py-3 hover:bg-muted/30 transition-colors" :class="{ 'sg-disabled': !isVisible(sgId) }">
                <Checkbox class="mt-1" :checked="isVisible(sgId)" @update:checked="setVisibility(sgId, $event)" />
                <span class="text-sm truncate min-w-0 flex-1 mt-0.5">{{ getTitle(cfg) }}</span>

                <!-- Per-slot line preview buttons + plot style -->
                <div class="flex items-start gap-2 shrink-0">
                  <!-- Per-slot: combined colour + line-style + line-width popover -->
                  <div class="flex flex-col gap-1">
                    <LineStylePopover
                      v-for="(origColor, slotIdx) in getConfigPayload(cfg).colors ?? []"
                      :key="slotIdx"
                      :color="effectiveSlotColorU32(sgId, slotIdx, origColor)"
                      :line-style="effectiveSlotLineStyle(sgId, slotIdx, cfg)"
                      :line-width="effectiveSlotLineWidth(sgId, slotIdx, cfg)"
                      :line-style-options="[...LINE_STYLES]"
                      @update:color="setSlotColorFromU32(sgId, slotIdx, $event)"
                      @update:line-style="setSlotLineStyle(sgId, slotIdx, $event)"
                      @update:line-width="setSlotLineWidth(sgId, slotIdx, $event)"
                    />
                  </div>

                  <!-- Plot style select with SVG previews -->
                  <SelectRoot
                    :model-value="effectiveProperty(sgId, 'style', cfg) ?? 'line'"
                    @update:model-value="setPropertyOverride(sgId, 'style', $event)"

                  >
                    <SelectTrigger class="w-28 text-xs shrink-0 bg-muted/50 border-border hover:bg-muted">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem v-for="s in PLOT_STYLES" :key="s" :value="s">
                        <div class="flex items-center gap-2">
                          <svg viewBox="0 0 28 16" class="w-6 h-4 shrink-0">
                            <template v-if="PLOT_STYLE_PATHS[s]?.type === 'path'">
                              <path :d="PLOT_STYLE_PATHS[s]?.d" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </template>
                            <template v-else-if="PLOT_STYLE_PATHS[s]?.type === 'area'">
                              <path :d="PLOT_STYLE_PATHS[s]?.d" fill="currentColor" opacity="0.3" stroke="currentColor" stroke-width="1" />
                            </template>
                            <template v-else-if="PLOT_STYLE_PATHS[s]?.type === 'circles'">
                              <circle cx="5" cy="10" r="2" fill="currentColor" /><circle cx="11" cy="4" r="2" fill="currentColor" /><circle cx="17" cy="8" r="2" fill="currentColor" /><circle cx="23" cy="5" r="2" fill="currentColor" />
                            </template>
                            <template v-else-if="PLOT_STYLE_PATHS[s]?.type === 'crosses'">
                              <g stroke="currentColor" stroke-width="1.5"><line x1="3" y1="8" x2="7" y2="12" /><line x1="7" y1="8" x2="3" y2="12" /><line x1="11" y1="3" x2="15" y2="7" /><line x1="15" y1="3" x2="11" y2="7" /><line x1="20" y1="6" x2="24" y2="10" /><line x1="24" y1="6" x2="20" y2="10" /></g>
                            </template>
                            <template v-else-if="PLOT_STYLE_PATHS[s]?.type === 'diamonds'">
                              <polygon points="5,6 8,10 5,14 2,10" fill="currentColor" /><polygon points="14,2 17,6 14,10 11,6" fill="currentColor" /><polygon points="23,4 26,8 23,12 20,8" fill="currentColor" />
                            </template>
                            <template v-else-if="PLOT_STYLE_PATHS[s]?.type === 'columns'">
                              <rect x="1" y="6" width="5" height="8" rx="0.5" fill="currentColor" /><rect x="8" y="2" width="5" height="12" rx="0.5" fill="currentColor" /><rect x="15" y="5" width="5" height="9" rx="0.5" fill="currentColor" /><rect x="22" y="3" width="5" height="11" rx="0.5" fill="currentColor" />
                            </template>
                            <template v-else>
                              <rect x="2" y="6" width="3" height="8" fill="currentColor" /><rect x="7" y="2" width="3" height="12" fill="currentColor" /><rect x="12" y="5" width="3" height="9" fill="currentColor" /><rect x="17" y="3" width="3" height="11" fill="currentColor" /><rect x="22" y="7" width="3" height="7" fill="currentColor" />
                            </template>
                          </svg>
                          <span>{{ s }}</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </SelectRoot>
                </div>
              </div>

              <!-- ════ PlotChar ════ -->
              <div v-else-if="getConfigVariant(cfg) === 'plotChar'" class="flex items-center gap-3 px-5 py-3 hover:bg-muted/30 transition-colors" :class="{ 'sg-disabled': !isVisible(sgId) }">
                <Checkbox :checked="isVisible(sgId)" @update:checked="setVisibility(sgId, $event)" />
                <span class="text-sm truncate min-w-0 flex-1">{{ getTitle(cfg) }}</span>
                <!-- Color popover swatches -->
                <div class="flex gap-1 shrink-0">
                  <ColorPickerPopover
                    v-for="(origColor, i) in getConfigPayload(cfg).colors ?? []"
                    :key="i"
                    :model-value="effectiveSlotColorU32(sgId, i, origColor)"
                    side="bottom"
                    align="end"
                    @update:model-value="setSlotColorFromU32(sgId, i, $event)"
                  >
                    <template #trigger>
                      <button class="h-7 w-7 rounded-md border-2 border-black/10 dark:border-white/15 shadow-sm cursor-pointer hover:scale-105 hover:shadow-md hover:border-black/20 dark:hover:border-white/25 transition-all" :style="{ background: effectiveColorCss(sgId, i, origColor) }" />
                    </template>
                  </ColorPickerPopover>
                </div>
                <Input :model-value="effectiveProperty(sgId, 'charValue', cfg) ?? ''" class="h-8 w-10 text-xs text-center px-1 shrink-0" @update:model-value="setPropertyOverride(sgId, 'charValue', $event)" />
                <SelectRoot :model-value="effectiveProperty(sgId, 'location', cfg) ?? 'AboveBar'" @update:model-value="setPropertyOverride(sgId, 'location', $event)">
                  <SelectTrigger class="h-8 w-24 text-xs shrink-0 bg-muted/50 border-border hover:bg-muted"><SelectValue /></SelectTrigger>
                  <SelectContent><SelectItem v-for="s in LOCATIONS" :key="s" :value="s">{{ t('dialog.location.' + s) }}</SelectItem></SelectContent>
                </SelectRoot>
                <SelectRoot :model-value="effectiveProperty(sgId, 'size', cfg) ?? 'Auto'" @update:model-value="setPropertyOverride(sgId, 'size', $event)">
                  <SelectTrigger class="h-8 w-20 text-xs shrink-0 bg-muted/50 border-border hover:bg-muted"><SelectValue /></SelectTrigger>
                  <SelectContent><SelectItem v-for="s in SIZES" :key="s" :value="s">{{ t('dialog.size.' + s) }}</SelectItem></SelectContent>
                </SelectRoot>
              </div>

              <!-- ════ PlotShape ════ -->
              <div v-else-if="getConfigVariant(cfg) === 'plotShape'" class="flex items-center gap-3 px-5 py-3 hover:bg-muted/30 transition-colors" :class="{ 'sg-disabled': !isVisible(sgId) }">
                <Checkbox :checked="isVisible(sgId)" @update:checked="setVisibility(sgId, $event)" />
                <span class="text-sm truncate min-w-0 flex-1">{{ getTitle(cfg) }}</span>
                <div class="flex gap-1 shrink-0">
                  <ColorPickerPopover
                    v-for="(origColor, i) in getConfigPayload(cfg).colors ?? []"
                    :key="i"
                    :model-value="effectiveSlotColorU32(sgId, i, origColor)"
                    side="bottom"
                    align="end"
                    @update:model-value="setSlotColorFromU32(sgId, i, $event)"
                  >
                    <template #trigger>
                      <button class="h-7 w-7 rounded-md border-2 border-black/10 dark:border-white/15 shadow-sm cursor-pointer hover:scale-105 hover:shadow-md hover:border-black/20 dark:hover:border-white/25 transition-all" :style="{ background: effectiveColorCss(sgId, i, origColor) }" />
                    </template>
                  </ColorPickerPopover>
                </div>
                <SelectRoot :model-value="effectiveProperty(sgId, 'shape', cfg) ?? 'XCross'" @update:model-value="setPropertyOverride(sgId, 'shape', $event)">
                  <SelectTrigger class="h-8 w-32 text-xs shrink-0 bg-muted/50 border-border hover:bg-muted"><SelectValue /></SelectTrigger>
                  <SelectContent class="max-h-60">
                    <SelectItem v-for="s in SHAPES" :key="s" :value="s">
                      <div class="flex items-center gap-2">
                        <svg viewBox="0 0 16 16" class="w-4 h-4 shrink-0" v-html="SHAPE_SVGS[s]" />
                        <span>{{ t('dialog.shape.' + s) }}</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </SelectRoot>
                <SelectRoot :model-value="effectiveProperty(sgId, 'location', cfg) ?? 'AboveBar'" @update:model-value="setPropertyOverride(sgId, 'location', $event)">
                  <SelectTrigger class="h-8 w-24 text-xs shrink-0 bg-muted/50 border-border hover:bg-muted"><SelectValue /></SelectTrigger>
                  <SelectContent><SelectItem v-for="s in LOCATIONS" :key="s" :value="s">{{ t('dialog.location.' + s) }}</SelectItem></SelectContent>
                </SelectRoot>
              </div>

              <!-- ════ PlotArrow (up/down colors) ════ -->
              <div v-else-if="getConfigVariant(cfg) === 'plotArrow'" class="flex items-center gap-3 px-5 py-3 hover:bg-muted/30 transition-colors" :class="{ 'sg-disabled': !isVisible(sgId) }">
                <Checkbox :checked="isVisible(sgId)" @update:checked="setVisibility(sgId, $event)" />
                <span class="text-sm truncate min-w-0 flex-1">{{ getTitle(cfg) }}</span>
                <div class="flex items-center gap-2 shrink-0">
                  <template v-for="seg in getColorSegments(cfg)" :key="seg.label">
                    <span class="text-[11px] text-muted-foreground">{{ seg.label }}</span>
                    <div class="flex gap-1">
                      <ColorPickerPopover
                        v-for="(origColor, i) in seg.colors"
                        :key="i"
                        :model-value="effectiveSlotColorU32(sgId, seg.offset + i, origColor)"
                        side="bottom"
                        align="end"
                        @update:model-value="setSlotColorFromU32(sgId, seg.offset + i, $event)"
                      >
                        <template #trigger>
                          <button class="h-7 w-7 rounded-md border-2 border-black/10 dark:border-white/15 shadow-sm cursor-pointer hover:scale-105 hover:shadow-md hover:border-black/20 dark:hover:border-white/25 transition-all" :style="{ background: effectiveColorCss(sgId, seg.offset + i, origColor) }" />
                        </template>
                      </ColorPickerPopover>
                    </div>
                  </template>
                </div>
              </div>

              <!-- ════ PlotCandle (body/wick/border colors) ════ -->
              <div v-else-if="getConfigVariant(cfg) === 'plotCandle'" class="px-5 py-3 space-y-3" :class="{ 'sg-disabled-candle': !isVisible(sgId) }"
              >
                <div class="flex items-center gap-3">
                  <Checkbox :checked="isVisible(sgId)" @update:checked="setVisibility(sgId, $event)" />
                  <span class="text-sm">{{ getTitle(cfg) }}</span>
                </div>
                <div v-for="seg in getColorSegments(cfg)" :key="seg.label" class="flex items-center gap-2 pl-8">
                  <span class="text-sm w-16 text-right shrink-0">{{ seg.label }}</span>
                  <div class="flex gap-1">
                    <ColorPickerPopover
                      v-for="(origColor, i) in seg.colors"
                      :key="i"
                      :model-value="effectiveSlotColorU32(sgId, seg.offset + i, origColor)"
                      side="bottom"
                      align="end"
                      @update:model-value="setSlotColorFromU32(sgId, seg.offset + i, $event)"
                    >
                      <template #trigger>
                        <button class="h-7 w-7 rounded-md border-2 border-black/10 dark:border-white/15 shadow-sm cursor-pointer hover:scale-105 hover:shadow-md hover:border-black/20 dark:hover:border-white/25 transition-all" :style="{ background: effectiveColorCss(sgId, seg.offset + i, origColor) }" />
                      </template>
                    </ColorPickerPopover>
                  </div>
                </div>
              </div>

              <!-- ════ PlotBar / BackgroundColor / Fill — simple color row ════ -->
              <div v-else class="flex items-center gap-3 px-5 py-3 hover:bg-muted/30 transition-colors" :class="{ 'sg-disabled': !isVisible(sgId) }">
                <Checkbox :checked="isVisible(sgId)" @update:checked="setVisibility(sgId, $event)" />
                <span class="text-sm truncate min-w-0 flex-1">{{ getTitle(cfg) }}</span>
                <div class="flex flex-wrap gap-1 shrink-0">
                  <template v-for="seg in getColorSegments(cfg)" :key="seg.label">
                    <ColorPickerPopover
                      v-for="(origColor, i) in seg.colors"
                      :key="i"
                      :model-value="effectiveSlotColorU32(sgId, seg.offset + i, origColor)"
                      side="bottom"
                      align="end"
                      @update:model-value="setSlotColorFromU32(sgId, seg.offset + i, $event)"
                    >
                      <template #trigger>
                        <button class="h-7 w-7 rounded-md border-2 border-black/10 dark:border-white/15 shadow-sm cursor-pointer hover:scale-105 hover:shadow-md hover:border-black/20 dark:hover:border-white/25 transition-all" :style="{ background: effectiveColorCss(sgId, seg.offset + i, origColor) }" />
                      </template>
                    </ColorPickerPopover>
                  </template>
                </div>
              </div>

            </template>
          </div>
        </TabsContent>
      </TabsRoot>

      <DialogFooter class="border-t border-border/40 px-5 py-3 bg-muted/15">
        <Button variant="ghost" size="sm" class="text-muted-foreground hover:text-foreground gap-1.5" @click="onResetDefaults">
          <RotateCcw class="h-3.5 w-3.5" />
          {{ t('dialog.resetDefaults') }}
        </Button>
        <div class="flex-1" />
        <Button size="sm" @click="emit('close')">{{ t('dialog.ok') }}</Button>
      </DialogFooter>
    </DialogContent>
  </DialogRoot>

  <teleport to="body">
    <div
      v-if="inputTooltip"
      class="cfg-tooltip-portal"
      :style="{ left: `${inputTooltip.x}px`, top: `${inputTooltip.y}px` }"
    >{{ inputTooltip.text }}</div>
  </teleport>
</template>

<style scoped>

.cfg-tabs {
  border-bottom: 1px solid var(--vp-c-divider, rgba(0,0,0,0.1));
}
.cfg-tabs__list {
  display: flex;
  gap: 0;
  background: transparent;
}
.cfg-tab {
  padding: 6px 16px;
  font-size: 13px;
  font-weight: 500;
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;
  outline: none;
}
.cfg-tab:hover {
  color: var(--vp-c-text-1);
}
.cfg-tab[data-state=active] {
  color: var(--vp-c-brand-1, #89b4fa);
  border-bottom-color: var(--vp-c-brand-1, #89b4fa);
}

/* Disabled series graph row: grey out and disable everything after the checkbox */
.sg-disabled > *:not(:first-child) {
  opacity: 0.4;
  pointer-events: none;
}
.sg-disabled-candle > *:not(:first-child) {
  opacity: 0.4;
  pointer-events: none;
}

/* Inputs grid — label column auto-sizes to widest label, min 110px */
.cfg-inputs-grid {
  display: grid;
  grid-template-columns: minmax(110px, auto) 1fr;
  column-gap: 12px;
}
.cfg-inputs-label {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 12px 0 12px 20px;
  min-width: 0;
  transition: background-color 0.15s;
}
.cfg-inputs-control {
  display: flex;
  align-items: center;
  padding: 12px 20px 12px 0;
  min-width: 0;
  transition: background-color 0.15s;
}

/* Input tooltip icon */
.cfg-info {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  color: hsl(var(--muted-foreground));
  cursor: help;
  line-height: 1;
  user-select: none;
}
.cfg-info svg {
  width: 12px;
  height: 12px;
}
.cfg-info:hover { color: hsl(var(--foreground)); }
</style>

<style>
/* Tooltip portal — outside scoped, rendered via Teleport to body */
.cfg-tooltip-portal {
  position: fixed;
  transform: translate(-50%, calc(-100% - 8px));
  z-index: 9999;
  max-width: 240px;
  padding: 7px 10px;
  background: hsl(var(--popover, 0 0% 100%));
  color: hsl(var(--popover-foreground, 0 0% 10%));
  border: 1px solid hsl(var(--border, 0 0% 80%));
  border-radius: 5px;
  font-size: 11px;
  font-family: system-ui, -apple-system, sans-serif;
  line-height: 1.45;
  white-space: normal;
  pointer-events: none;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);
}
</style>
