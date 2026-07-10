<script setup lang="ts">
/**
 * Floating toolbar shown above a selected annotation. Descriptor-driven —
 * reads `PropertyDescriptor[]` from `pg.selected_annotation_properties()`
 * and renders stroke / fill controls based on which property kinds exist.
 *
 * Grouping rules:
 * - `color` descriptors whose name contains "fill" → fill color group
 * - `color` descriptors without "fill" in the name → stroke color group
 * - `lineWidth` descriptors → stroke width group
 * - `lineStyle` descriptors → stroke style group
 *
 * Mixed-state detection and fan-out writes happen here in the frontend:
 * when the user edits a group value, the toolbar writes to every descriptor
 * in that group. If the descriptors in a group hold differing values, the
 * button renders a "mixed" preview.
 */

import { computed, ref, watch, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import ColorPickerPopover from './ColorPickerPopover.vue'
import LineStylePopover from './LineStylePopover.vue'
import {
  type PropertyDescriptor,
  type PropertyValue,
  type PropertyValueResult,
  type PercentWithStrokeBundle,
  type EnableablePercentWithStrokeBundle,
  type GroupItemValue,
} from '../composables/use-wasm'

interface BoundsRect {
  x: number
  y: number
  width: number
  height: number
}

interface Props {
  /** True when the panel should render. */
  visible: boolean
  /** Canvas-relative bounds of the selected annotation. */
  bounds: BoundsRect | null
  /** Property descriptors for the selected annotation (already localised). */
  descriptors: PropertyDescriptor[]
  /** Current property values, keyed by `descriptor.name`. */
  values: Record<string, PropertyValueResult>
  /** True when the selected annotation is locked. */
  locked: boolean
  /** Pixel offset of the canvas container relative to the viewport. */
  canvasOriginX: number
  canvasOriginY: number
  /** ID of the currently selected annotation — toolbar resets its drag offset only when this changes. */
  annId: number | null
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'propertyChange', name: string, value: PropertyValue): void
  (e: 'toggleLock'): void
  (e: 'delete'): void
  (e: 'openProperties'): void
}>()

const { t } = useI18n()

// ── Descriptor grouping ────────────────────────────────────────────────────

/** Categorise all descriptors into toolbar groups. Bundle descriptors
 * (kind=stroke / kind=textStyle) participate in multiple slot groups
 * because they each drive several sub-widgets. */
const grouped = computed(() => {
  const strokeColors: PropertyDescriptor[] = []
  const fillColors: PropertyDescriptor[] = []
  const textColors: PropertyDescriptor[] = []
  const lineWidths: PropertyDescriptor[] = []
  const lineStyles: PropertyDescriptor[] = []
  const fontSizes: PropertyDescriptor[] = []
  const bolds: PropertyDescriptor[] = []
  const italics: PropertyDescriptor[] = []

  for (const d of props.descriptors) {
    const k = d.kind
    if (k === 'fill') {
      fillColors.push(d)
    } else if (typeof k === 'object') {
      if ('stroke' in k) {
        // Stroke bundle: color + width + style sub-widgets read/write through
        // the same descriptor but pick different fields of the bundle value.
        strokeColors.push(d)
        lineWidths.push(d)
        lineStyles.push(d)
      } else if ('percentWithStroke' in k || 'enableablePercentWithStroke' in k) {
        strokeColors.push(d)
        lineWidths.push(d)
        lineStyles.push(d)
      } else if ('group' in k) {
        // Group with stroke items: expose color/width/style controls that
        // apply to ALL items in the group at once.
        if (k.group.items.length > 0 && typeof k.group.items[0].kind === 'object' && 'stroke' in k.group.items[0].kind) {
          strokeColors.push(d)
          lineWidths.push(d)
          lineStyles.push(d)
        }
      } else if ('textStyle' in k) {
        // Text-style bundle: text colour + font size + bold + italic.
        textColors.push(d)
        fontSizes.push(d)
        bolds.push(d)
        italics.push(d)
      }
    }
  }

  return { strokeColors, fillColors, textColors, lineWidths, lineStyles, fontSizes, bolds, italics }
})

// ── Bundle field accessors ─────────────────────────────────────────────────
// Given a descriptor + the current PropertyValueResult, extract a specific
// sub-field. Returns null when the value isn't readable (missing / wrong
// shape).

type StrokeField = 'color' | 'width' | 'style'
type TextStyleField = 'color' | 'fontSize' | 'bold' | 'italic'

function readStrokeField(
  d: PropertyDescriptor,
  field: StrokeField,
): number | 'solid' | 'dashed' | 'dotted' | null {
  const r = props.values[d.name]
  if (!r || typeof r === 'string') return null
  const v = r.value
  if (typeof d.kind === 'object' && 'stroke' in d.kind && 'stroke' in v) {
    if (field === 'color') return v.stroke.color
    if (field === 'width') return v.stroke.width
    return v.stroke.style
  }
  if (typeof d.kind === 'object' && 'percentWithStroke' in d.kind && 'percentWithStroke' in v) {
    if (field === 'color') return v.percentWithStroke.stroke.color
    if (field === 'width') return v.percentWithStroke.stroke.width
    return v.percentWithStroke.stroke.style
  }
  if (typeof d.kind === 'object' && 'enableablePercentWithStroke' in d.kind && 'enableablePercentWithStroke' in v) {
    if (field === 'color') return v.enableablePercentWithStroke.value.stroke.color
    if (field === 'width') return v.enableablePercentWithStroke.value.stroke.width
    return v.enableablePercentWithStroke.value.stroke.style
  }
  if (typeof d.kind === 'object' && 'group' in d.kind && 'groupItems' in v) {
    // Read from the first enabled item that carries a stroke value.
    const item = v.groupItems.find((it) => it.enabled !== false && 'stroke' in it.value)
    if (!item || !('stroke' in item.value)) return null
    if (field === 'color') return item.value.stroke.color
    if (field === 'width') return item.value.stroke.width
    return item.value.stroke.style
  }
  // Scalar fallback.
  if (field === 'color' && 'color' in v) return v.color
  if (field === 'width' && 'float' in v) return v.float
  if (field === 'style' && 'lineStyle' in v) return v.lineStyle
  return null
}

function readTextStyleField(
  d: PropertyDescriptor,
  field: TextStyleField,
): number | boolean | null {
  const r = props.values[d.name]
  if (!r || typeof r === 'string') return null
  const v = r.value
  if (typeof d.kind === 'object' && 'textStyle' in d.kind && 'textStyle' in v) {
    if (field === 'color') return v.textStyle.color
    if (field === 'fontSize') return v.textStyle.fontSize
    if (field === 'bold') return v.textStyle.bold
    return v.textStyle.italic
  }
  return null
}

const DEFAULT_STROKE = { color: 0x000000ff, width: 1, style: 'solid' as const }
const DEFAULT_PERCENT_WITH_STROKE: PercentWithStrokeBundle = { percent: 0, stroke: { ...DEFAULT_STROKE } }

function writeStrokeField(d: PropertyDescriptor, field: StrokeField, raw: unknown) {
  if (typeof d.kind === 'object' && 'stroke' in d.kind) {
    // Bundle write: read current value, mutate one field, send back.
    const r = props.values[d.name]
    const base =
      r && typeof r !== 'string' && 'stroke' in r.value
        ? r.value.stroke
        : { ...DEFAULT_STROKE }
    const next = { ...base }
    if (field === 'color') next.color = raw as number
    else if (field === 'width') next.width = raw as number
    else next.style = raw as 'solid' | 'dashed' | 'dotted'
    emit('propertyChange', d.name, { stroke: next })
    return
  }
  if (typeof d.kind === 'object' && 'percentWithStroke' in d.kind) {
    const r = props.values[d.name]
    const base: PercentWithStrokeBundle =
      r && typeof r !== 'string' && 'percentWithStroke' in r.value
        ? r.value.percentWithStroke
        : { ...DEFAULT_PERCENT_WITH_STROKE }
    const next: PercentWithStrokeBundle = { ...base, stroke: { ...base.stroke } }
    if (field === 'color') next.stroke.color = raw as number
    else if (field === 'width') next.stroke.width = raw as number
    else next.stroke.style = raw as 'solid' | 'dashed' | 'dotted'
    emit('propertyChange', d.name, { percentWithStroke: next })
    return
  }
  if (typeof d.kind === 'object' && 'enableablePercentWithStroke' in d.kind) {
    const r = props.values[d.name]
    const base: EnableablePercentWithStrokeBundle =
      r && typeof r !== 'string' && 'enableablePercentWithStroke' in r.value
        ? r.value.enableablePercentWithStroke
        : { enabled: true, value: { ...DEFAULT_PERCENT_WITH_STROKE } }
    const next: EnableablePercentWithStrokeBundle = {
      ...base,
      value: { ...base.value, stroke: { ...base.value.stroke } },
    }
    if (field === 'color') next.value.stroke.color = raw as number
    else if (field === 'width') next.value.stroke.width = raw as number
    else next.value.stroke.style = raw as 'solid' | 'dashed' | 'dotted'
    emit('propertyChange', d.name, { enableablePercentWithStroke: next })
    return
  }
  if (typeof d.kind === 'object' && 'group' in d.kind) {
    // Apply color/width/style to every stroke item in the group.
    const r = props.values[d.name]
    const items: GroupItemValue[] =
      r && typeof r !== 'string' && 'groupItems' in r.value ? r.value.groupItems : []
    const updated = items.map((item) => {
      if (!('stroke' in item.value)) return item
      const stroke = { ...item.value.stroke }
      if (field === 'color') stroke.color = raw as number
      else if (field === 'width') stroke.width = raw as number
      else stroke.style = raw as 'solid' | 'dashed' | 'dotted'
      return { ...item, value: { stroke } }
    })
    emit('propertyChange', d.name, { groupItems: updated })
    return
  }
  // Scalar dispatch.
  if (field === 'color') emit('propertyChange', d.name, { color: raw as number })
  else if (field === 'width') emit('propertyChange', d.name, { float: raw as number })
  else
    emit('propertyChange', d.name, {
      lineStyle: raw as 'solid' | 'dashed' | 'dotted',
    })
}

function writeTextStyleField(d: PropertyDescriptor, field: TextStyleField, raw: unknown) {
  if (typeof d.kind !== 'object' || !('textStyle' in d.kind)) return
  const r = props.values[d.name]
  const base =
    r && typeof r !== 'string' && 'textStyle' in r.value
      ? r.value.textStyle
      : { color: 0x000000ff, fontSize: 12, bold: false, italic: false }
  const next = { ...base }
  if (field === 'color') next.color = raw as number
  else if (field === 'fontSize') next.fontSize = raw as number
  else if (field === 'bold') next.bold = raw as boolean
  else next.italic = raw as boolean
  emit('propertyChange', d.name, { textStyle: next })
}

// ── Value extraction + mixed-state helpers ─────────────────────────────────

function readGroupColor(group: PropertyDescriptor[]): { value: number; mixed: boolean } | null {
  if (group.length === 0) return null
  const first = group[0]
  const initial =
    typeof first.kind === 'object' && 'textStyle' in first.kind
      ? (readTextStyleField(first, 'color') as number | null)
      : (readStrokeField(first, 'color') as number | null)
  if (initial == null) return null
  for (let i = 1; i < group.length; i++) {
    const d = group[i]
    const v =
      typeof d.kind === 'object' && 'textStyle' in d.kind
        ? (readTextStyleField(d, 'color') as number | null)
        : (readStrokeField(d, 'color') as number | null)
    if (v == null || v !== initial) return { value: 0x808080ff, mixed: true }
  }
  return { value: initial, mixed: false }
}

function readGroupWidth(group: PropertyDescriptor[]): { value: number; mixed: boolean } | null {
  if (group.length === 0) return null
  const first = readStrokeField(group[0], 'width')
  if (typeof first !== 'number') return null
  for (let i = 1; i < group.length; i++) {
    const v = readStrokeField(group[i], 'width')
    if (typeof v !== 'number' || v !== first) return { value: 1, mixed: true }
  }
  return { value: first, mixed: false }
}

function readGroupLineStyle(
  group: PropertyDescriptor[],
): { value: 'solid' | 'dashed' | 'dotted'; mixed: boolean } | null {
  if (group.length === 0) return null
  const first = readStrokeField(group[0], 'style')
  if (typeof first !== 'string') return null
  for (let i = 1; i < group.length; i++) {
    const v = readStrokeField(group[i], 'style')
    if (typeof v !== 'string' || v !== first) return { value: 'solid', mixed: true }
  }
  return { value: first, mixed: false }
}

// ── Fan-out write helpers ──────────────────────────────────────────────────

function writeGroupColor(group: PropertyDescriptor[], rgba: number) {
  for (const d of group) {
    if (typeof d.kind === 'object' && 'textStyle' in d.kind) writeTextStyleField(d, 'color', rgba)
    else writeStrokeField(d, 'color', rgba)
  }
}
function writeGroupWidth(group: PropertyDescriptor[], w: number) {
  for (const d of group) writeStrokeField(d, 'width', w)
}
function writeGroupLineStyle(group: PropertyDescriptor[], s: 'solid' | 'dashed' | 'dotted') {
  for (const d of group) writeStrokeField(d, 'style', s)
}

/** Quick-pick widths from the first lineWidth descriptor (bundle or scalar). */
const lineWidthOptions = computed<number[]>(() => {
  const d = grouped.value.lineWidths[0]
  if (!d) return [1, 2, 3, 4]
  if (typeof d.kind === 'object') {
    if ('stroke' in d.kind) return d.kind.stroke.lineWidthOptions ?? [1, 2, 3, 4]
    if ('percentWithStroke' in d.kind) return d.kind.percentWithStroke.lineWidthOptions ?? [1, 2, 3, 4]
    if ('enableablePercentWithStroke' in d.kind) return d.kind.enableablePercentWithStroke.lineWidthOptions ?? [1, 2, 3, 4]
  }
  return [1, 2, 3, 4]
})

// ── Position (unchanged) ───────────────────────────────────────────────────

const FLIP_THRESHOLD = 60
const ABOVE_GAP = 56
const BELOW_GAP = 56

const dragPos = ref<{ left: number; top: number } | null>(null)
let _dragActive = false
let _dragStartCursor = { x: 0, y: 0 }
let _dragStartPos = { left: 0, top: 0 }

function onGripMousedown(e: MouseEvent) {
  e.preventDefault()
  e.stopPropagation()
  const el = (e.currentTarget as HTMLElement).closest('.sel-toolbar') as HTMLElement | null
  if (!el) return
  const rect = el.getBoundingClientRect()
  _dragActive = true
  _dragStartCursor = { x: e.clientX, y: e.clientY }
  _dragStartPos = { left: rect.left, top: rect.top }
  window.addEventListener('mousemove', onDragMove)
  window.addEventListener('mouseup', onDragEnd, { once: true })
}

function onDragMove(e: MouseEvent) {
  if (!_dragActive) return
  dragPos.value = {
    left: _dragStartPos.left + (e.clientX - _dragStartCursor.x),
    top: _dragStartPos.top + (e.clientY - _dragStartCursor.y),
  }
}

function onDragEnd() {
  _dragActive = false
  window.removeEventListener('mousemove', onDragMove)
}

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onDragMove)
  window.removeEventListener('mouseup', onDragEnd)
})

watch(() => props.annId, () => { dragPos.value = null })

const positionStyle = computed(() => {
  if (dragPos.value) {
    return {
      position: 'fixed' as const,
      left: `${dragPos.value.left}px`,
      top: `${dragPos.value.top}px`,
    }
  }
  if (!props.bounds) return { display: 'none' }
  const { x, y, width, height } = props.bounds
  const left = props.canvasOriginX + x
  const placeBelow = props.canvasOriginY + y < FLIP_THRESHOLD
  const top = placeBelow
    ? props.canvasOriginY + y + height + BELOW_GAP
    : props.canvasOriginY + y - ABOVE_GAP
  return {
    position: 'fixed' as const,
    left: `${left}px`,
    top: `${top}px`,
    transform: placeBelow ? 'translateY(0)' : 'translateY(-100%)',
  }
})
</script>

<template>
  <div
    v-if="visible && bounds"
    class="sel-toolbar"
    :style="positionStyle"
    @mousedown.stop
    @contextmenu.stop.prevent
  >
    <!-- Drag handle -->
    <span class="sel-toolbar__grip" aria-hidden="true" @mousedown="onGripMousedown">⋮⋮</span>

    <!-- Stroke color -->
    <ColorPickerPopover
      v-if="grouped.strokeColors.length > 0"
      :model-value="readGroupColor(grouped.strokeColors)?.value ?? 0x808080ff"
      :title="t('playground.selectionToolbar.color')"

      @update:model-value="(c: number) => writeGroupColor(grouped.strokeColors, c)"
    >
      <template #trigger="{ swatchCss }">
        <button type="button" class="sel-toolbar__icon-btn" :title="t('playground.selectionToolbar.color')">
          <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
            <path d="M1 8.5 L6 3 L8.5 5.5 L3.5 11 Z" fill="none" stroke="currentColor" stroke-width="1" stroke-linejoin="round"/>
            <path d="M6 3 L7.5 1.5 L10 4 L8.5 5.5 Z" fill="none" stroke="currentColor" stroke-width="1" stroke-linejoin="round"/>
            <path d="M1 8.5 L3.5 11 L0.5 11.5 Z" fill="currentColor"/>
            <template v-if="readGroupColor(grouped.strokeColors)?.mixed">
              <rect x="10"   y="10"   width="2.5" height="2.5" fill="#e53935"/>
              <rect x="12.7" y="10"   width="2.5" height="2.5" fill="#43a047"/>
              <rect x="10"   y="12.7" width="2.5" height="2.5" fill="#1e88e5"/>
              <rect x="12.7" y="12.7" width="2.5" height="2.5" fill="#fdd835"/>
            </template>
            <rect v-else x="10" y="10" width="5.5" height="5.5" :fill="swatchCss" rx="0.5"/>
          </svg>
        </button>
      </template>
    </ColorPickerPopover>

    <!-- Stroke style -->
    <LineStylePopover
      v-if="grouped.lineStyles.length > 0"
      :line-style="readGroupLineStyle(grouped.lineStyles)?.value ?? 'solid'"
      :line-width="1"
      :show-color="false"
      :show-line-style="true"
      :show-line-width="false"
      side="bottom"
      align="start"

      @update:line-style="(s: string) => writeGroupLineStyle(grouped.lineStyles, s as 'solid' | 'dashed' | 'dotted')"
    >
      <template #trigger="{ dash }">
        <button
          type="button"
          class="h-7 w-7 shrink-0 rounded flex items-center justify-center cursor-pointer bg-[var(--vp-c-bg-soft)] border border-[var(--vp-c-divider,rgba(0,0,0,0.2))] hover:bg-[var(--vp-c-default-soft,rgba(0,0,0,0.06))] transition-colors"
          :title="t('playground.selectionToolbar.lineStyle')"
        >
          <svg v-if="readGroupLineStyle(grouped.lineStyles)?.mixed" viewBox="0 0 16 16" width="20" height="20" aria-hidden="true">
            <line x1="2" y1="4.5"  x2="14" y2="4.5"  stroke="currentColor" stroke-width="1" stroke-linecap="butt"/>
            <line x1="2" y1="8"    x2="14" y2="8"    stroke="currentColor" stroke-width="1" stroke-dasharray="3 2" stroke-linecap="butt"/>
            <line x1="2" y1="11.5" x2="14" y2="11.5" stroke="currentColor" stroke-width="1" stroke-dasharray="1.2 2" stroke-linecap="round"/>
          </svg>
          <svg v-else viewBox="0 0 16 16" width="20" height="20" aria-hidden="true">
            <line x1="2" y1="8" x2="14" y2="8" stroke="currentColor" stroke-width="1" :stroke-dasharray="dash" stroke-linecap="butt"/>
          </svg>
        </button>
      </template>
    </LineStylePopover>

    <!-- Stroke width -->
    <LineStylePopover
      v-if="grouped.lineWidths.length > 0"
      :line-style="'solid'"
      :line-width="readGroupWidth(grouped.lineWidths)?.value ?? 1"
      :line-width-options="lineWidthOptions"
      :show-color="false"
      :show-line-style="false"
      :show-line-width="true"
      side="bottom"
      align="start"

      @update:line-width="(w: number) => writeGroupWidth(grouped.lineWidths, w)"
    >
      <template #trigger="{ strokeWidth }">
        <button
          type="button"
          class="h-7 shrink-0 rounded flex items-center gap-1 px-1.5 cursor-pointer bg-[var(--vp-c-bg-soft)] border border-[var(--vp-c-divider,rgba(0,0,0,0.2))] hover:bg-[var(--vp-c-default-soft,rgba(0,0,0,0.06))] transition-colors"
          :title="t('playground.selectionToolbar.lineWidth')"
        >
          <svg v-if="readGroupWidth(grouped.lineWidths)?.mixed" viewBox="0 0 16 16" width="20" height="20" aria-hidden="true">
            <line x1="2" y1="4.5"  x2="14" y2="4.5"  stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/>
            <line x1="2" y1="8"    x2="14" y2="8"    stroke="currentColor" stroke-width="1.1" stroke-linecap="butt"/>
            <line x1="2" y1="11.5" x2="14" y2="11.5" stroke="currentColor" stroke-width="0.5" stroke-linecap="butt"/>
          </svg>
          <svg v-else viewBox="0 0 16 16" width="20" height="20" aria-hidden="true">
            <line x1="2" y1="8" x2="14" y2="8" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="butt"/>
          </svg>
          <span class="sel-toolbar__width-label">
            {{ readGroupWidth(grouped.lineWidths)?.mixed ? '—' : `${readGroupWidth(grouped.lineWidths)?.value ?? 1}px` }}
          </span>
        </button>
      </template>
    </LineStylePopover>

    <!-- Fill colour -->
    <ColorPickerPopover
      v-if="grouped.fillColors.length > 0"
      :model-value="readGroupColor(grouped.fillColors)?.value ?? 0x00000080"
      swatch-class="sel-toolbar__swatch--fill"
      :title="t('playground.selectionToolbar.fillColor')"

      @update:model-value="(c: number) => writeGroupColor(grouped.fillColors, c)"
    >
      <template #trigger="{ swatchCss }">
        <button type="button" class="sel-toolbar__icon-btn" :title="t('playground.selectionToolbar.fillColor')">
          <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
            <path d="M1.5 4 C1.5 0.5 8 0.5 8 4" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
            <path d="M1.5 4 L2 9.5 L7.5 9.5 L8 4" fill="none" stroke="currentColor" stroke-width="1" stroke-linejoin="round" stroke-linecap="round"/>
            <path d="M4.75 9.5 C3.2 11 3.2 13 4.75 13 C6.3 13 6.3 11 4.75 9.5 Z" fill="currentColor"/>
            <template v-if="readGroupColor(grouped.fillColors)?.mixed">
              <rect x="10"   y="10"   width="2.5" height="2.5" fill="#e53935"/>
              <rect x="12.7" y="10"   width="2.5" height="2.5" fill="#43a047"/>
              <rect x="10"   y="12.7" width="2.5" height="2.5" fill="#1e88e5"/>
              <rect x="12.7" y="12.7" width="2.5" height="2.5" fill="#fdd835"/>
            </template>
            <rect v-else x="10" y="10" width="5.5" height="5.5" :fill="swatchCss" rx="0.5"/>
          </svg>
        </button>
      </template>
    </ColorPickerPopover>

    <!-- Text colour -->
    <ColorPickerPopover
      v-if="grouped.textColors.length > 0"
      :model-value="readGroupColor(grouped.textColors)?.value ?? 0x007affff"
      :title="t('playground.selectionToolbar.textColor')"

      @update:model-value="(c: number) => writeGroupColor(grouped.textColors, c)"
    >
      <template #trigger="{ swatchCss }">
        <button type="button" class="sel-toolbar__icon-btn" :title="t('playground.selectionToolbar.textColor')">
          <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
            <line x1="1.5" y1="2.5" x2="8.5" y2="2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="5"   y1="2.5" x2="5"   y2="10"  stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <template v-if="readGroupColor(grouped.textColors)?.mixed">
              <rect x="10"   y="10"   width="2.5" height="2.5" fill="#e53935"/>
              <rect x="12.7" y="10"   width="2.5" height="2.5" fill="#43a047"/>
              <rect x="10"   y="12.7" width="2.5" height="2.5" fill="#1e88e5"/>
              <rect x="12.7" y="12.7" width="2.5" height="2.5" fill="#fdd835"/>
            </template>
            <rect v-else x="10" y="10" width="5.5" height="5.5" :fill="swatchCss" rx="0.5"/>
          </svg>
        </button>
      </template>
    </ColorPickerPopover>

    <span class="sel-toolbar__sep" />

    <button
      type="button"
      class="sel-toolbar__btn"
      :title="t('playground.contextMenu.properties')"
      @click="emit('openProperties')"
    >
      <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
        <line x1="2" y1="4" x2="14" y2="4" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
        <line x1="2" y1="8" x2="14" y2="8" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
        <line x1="2" y1="12" x2="14" y2="12" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
        <circle cx="5" cy="4" r="1.8" fill="var(--vp-c-bg, white)" stroke="currentColor" stroke-width="1"/>
        <circle cx="10" cy="8" r="1.8" fill="var(--vp-c-bg, white)" stroke="currentColor" stroke-width="1"/>
        <circle cx="6" cy="12" r="1.8" fill="var(--vp-c-bg, white)" stroke="currentColor" stroke-width="1"/>
      </svg>
    </button>

    <button
      type="button"
      class="sel-toolbar__btn"
      :title="locked ? t('playground.contextMenu.unlock') : t('playground.contextMenu.lock')"
      :class="{ 'sel-toolbar__btn--active': locked }"
      @click="emit('toggleLock')"
    >
      <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
        <path
          d="M5 8 V5 a3 3 0 0 1 6 0 V8"
          fill="none"
          stroke="currentColor"
          stroke-width="1.1"
        />
        <rect x="3.5" y="8" width="9" height="6" rx="1.5" fill="currentColor" />
      </svg>
    </button>

    <button
      type="button"
      class="sel-toolbar__btn sel-toolbar__btn--danger"
      :title="t('playground.contextMenu.delete')"
      @click="emit('delete')"
    >
      <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
        <path
          d="M5 4 H11 V13 a1 1 0 0 1 -1 1 H6 a1 1 0 0 1 -1 -1 Z M3.5 4 H12.5 M6.5 4 V3 a1 1 0 0 1 1 -1 h1 a1 1 0 0 1 1 1 V4"
          fill="none"
          stroke="currentColor"
          stroke-width="1"
        />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.sel-toolbar {
  z-index: 90;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 6px;
  background: var(--vp-c-bg-elv, #fff);
  border: 1px solid var(--vp-c-divider, rgba(0, 0, 0, 0.12));
  border-radius: 6px;
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.06);
  font-size: 12px;
  color: var(--vp-c-text-1, #1f2937);
  user-select: none;
}

:global(.dark) .sel-toolbar {
  background: var(--vp-c-bg-elv, #1f2329);
  border-color: rgba(255, 255, 255, 0.08);
}

.sel-toolbar__grip {
  color: var(--vp-c-text-2, #999);
  cursor: grab;
  font-size: 14px;
  letter-spacing: -1px;
  padding: 0 2px;
  user-select: none;
}

.sel-toolbar__grip:active {
  cursor: grabbing;
}

.sel-toolbar__icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  width: 28px;
  background: transparent;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.15s;
  color: var(--vp-c-text-1);
}
.sel-toolbar__icon-btn:hover {
  background: var(--vp-c-default-soft, rgba(0, 0, 0, 0.06));
}

.sel-toolbar__btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  min-width: 24px;
  padding: 0 4px;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 4px;
  color: inherit;
  cursor: pointer;
}

.sel-toolbar__btn:hover {
  background: var(--vp-c-default-soft, rgba(0, 0, 0, 0.06));
}

.sel-toolbar__btn--active {
  background: var(--vp-c-brand-soft, rgba(137, 180, 250, 0.16));
  border-color: var(--vp-c-brand-2, #74c7ec);
  color: var(--vp-c-brand-1, #89b4fa);
}

.sel-toolbar__btn--danger:hover {
  color: #ef4444;
}

.sel-toolbar__width-label {
  font-size: 10px;
  line-height: 1;
  color: var(--vp-c-text-2, #666);
  white-space: nowrap;
}

/* Dashed border on fill-colour swatch to visually distinguish it */
:deep(.sel-toolbar__swatch--fill) {
  border-style: dashed !important;
}

.sel-toolbar__sep {
  width: 1px;
  height: 18px;
  margin: 0 2px;
  background: var(--vp-c-divider, rgba(0, 0, 0, 0.12));
}

</style>
