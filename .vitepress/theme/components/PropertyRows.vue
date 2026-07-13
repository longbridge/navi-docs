<script setup lang="ts">
/**
 * Renders a flat list of editable property rows from `PropertyDescriptor[]`.
 *
 * Handles all PropertyKind variants: fill, stroke (bundle), textStyle (bundle),
 * group (bundle), bool, enum, textVAlign, textAlign, text, alpha, number, flags.
 *
 * Used by AnnotationPropertiesDialog and CandlestickPropertiesDialog.
 */

import { ref, inject, watch, computed, type Ref } from 'vue'
import { PopoverRoot, PopoverTrigger, PopoverPortal, PopoverContent, SelectRoot, SelectValue } from 'radix-vue'
import Input from './ui/Input.vue'
import SelectTrigger from './ui/SelectTrigger.vue'
import SelectContent from './ui/SelectContent.vue'
import SelectItem from './ui/SelectItem.vue'
import AlphaSlider from './AlphaSlider.vue'
import ColorPickerPopover from './ColorPickerPopover.vue'
import LineStylePopover from './LineStylePopover.vue'
import type {
  PropertyDescriptor,
  PropertyValue,
  PropertyValueResult,
  StrokeBundle,
  TextStyleBundle,
  EnableableBundle,
  GroupItemValue,
} from '../composables/use-wasm'

// ── Props / emits ────────────────────────────────────────────────────────────

const props = defineProps<{
  descriptors: PropertyDescriptor[]
  values: Record<string, PropertyValueResult>
}>()

const emit = defineEmits<{
  (e: 'propertyChange', name: string, value: PropertyValue): void
}>()

// ── Track open popovers so dialogs can block outside-click dismissal ─────────

const openPopoverCount = inject<Ref<number>>('openPopoverCount', ref(0))
const flagsOpen = ref<Record<string, boolean>>({})
watch(
  () => Object.values(flagsOpen.value).filter(Boolean).length,
  (n, o) => { openPopoverCount.value += n - (o ?? 0) },
  { flush: 'sync' },
)

// ── Row type classification ──────────────────────────────────────────────────

type SectionRow =
  | { kind: 'single';            descriptor: PropertyDescriptor }
  | { kind: 'strokeBundle';      descriptor: PropertyDescriptor }
  | { kind: 'textStyleBundle';   descriptor: PropertyDescriptor }
  | { kind: 'inlineGroupBundle'; descriptor: PropertyDescriptor }
  | { kind: 'groupBundle';       descriptor: PropertyDescriptor }

const rows = computed<SectionRow[]>(() => {
  const out: SectionRow[] = []
  for (const d of props.descriptors) {
    if (typeof d.kind === 'object' && 'stroke' in d.kind) {
      out.push({ kind: 'strokeBundle', descriptor: d })
    } else if (typeof d.kind === 'object' && 'textStyle' in d.kind) {
      out.push({ kind: 'textStyleBundle', descriptor: d })
    } else if (typeof d.kind === 'object' && 'group' in d.kind && d.kind.group.inline) {
      out.push({ kind: 'inlineGroupBundle', descriptor: d })
    } else if (typeof d.kind === 'object' && 'group' in d.kind) {
      out.push({ kind: 'groupBundle', descriptor: d })
    } else {
      out.push({ kind: 'single', descriptor: d })
    }
  }
  return out
})

// ── Value readers ────────────────────────────────────────────────────────────

function valueOf(name: string): PropertyValue | null {
  const r = props.values[name]
  if (!r || typeof r === 'string') return null
  return r.value
}
function colorOf(name: string): number {
  const v = valueOf(name)
  return v && 'color' in v ? v.color : 0x808080ff
}
function floatOf(name: string, fallback = 1): number {
  const v = valueOf(name)
  return v && 'float' in v ? v.float : fallback
}
function boolOf(name: string): boolean {
  const v = valueOf(name)
  return v && 'bool' in v ? v.bool : false
}
function enumIndexOf(name: string): number {
  const v = valueOf(name)
  return v && 'enum' in v ? v.enum : 0
}
function intOf(name: string): number {
  const v = valueOf(name)
  return v && 'int' in v ? v.int : 0
}
function textAlignOf(name: string): 'left' | 'center' | 'right' {
  const v = valueOf(name)
  return v && 'textAlign' in v ? v.textAlign : 'left'
}
function textOf(name: string): string {
  const v = valueOf(name)
  return v && 'text' in v ? v.text : ''
}

// ── Fill helpers (supports enableable) ──────────────────────────────────────

function readFillColor(desc: PropertyDescriptor): number {
  const r = props.values[desc.name]
  if (!r || typeof r === 'string') return 0x808080ff
  if (desc.enableable) {
    if (!('enableable' in r.value)) return 0x808080ff
    const inner = (r.value.enableable as EnableableBundle).value
    return 'color' in inner ? inner.color : 0x808080ff
  }
  return 'color' in r.value ? r.value.color : 0x808080ff
}

function readFillEnabled(desc: PropertyDescriptor): boolean {
  if (!desc.enableable) return true
  const r = props.values[desc.name]
  if (!r || typeof r === 'string' || !('enableable' in r.value)) return true
  return (r.value.enableable as EnableableBundle).enabled
}

function writeFillColor(desc: PropertyDescriptor, color: number) {
  emit('propertyChange', desc.name, desc.enableable
    ? { enableable: { enabled: readFillEnabled(desc), value: { color } } }
    : { color })
}

function writeFillEnabled(desc: PropertyDescriptor, enabled: boolean) {
  emit('propertyChange', desc.name, {
    enableable: { enabled, value: { color: readFillColor(desc) } },
  })
}

// ── Enableable helpers for non-fill kinds (e.g. Number) ──────────────────────

function readEnableableEnabled(name: string): boolean {
  const r = props.values[name]
  if (!r || typeof r === 'string' || !('enableable' in r.value)) return true
  return (r.value.enableable as EnableableBundle).enabled
}

function readEnableableFloat(name: string, fallback = 0): number {
  const r = props.values[name]
  if (!r || typeof r === 'string') return fallback
  if ('enableable' in r.value) {
    const inner = (r.value.enableable as EnableableBundle).value
    return 'float' in inner ? (inner as any).float : fallback
  }
  return 'float' in r.value ? (r.value as any).float : fallback
}

function writeEnableableEnabled(name: string, enabled: boolean) {
  const r = props.values[name]
  const inner = r && typeof r !== 'string' && 'enableable' in r.value
    ? (r.value.enableable as EnableableBundle).value
    : { float: 0 }
  emit('propertyChange', name, { enableable: { enabled, value: inner } })
}

function writeEnableableFloat(name: string, val: number) {
  const r = props.values[name]
  const enabled = r && typeof r !== 'string' && 'enableable' in r.value
    ? (r.value.enableable as EnableableBundle).enabled
    : true
  emit('propertyChange', name, { enableable: { enabled, value: { float: val } } })
}

// ── Stroke bundle helpers ────────────────────────────────────────────────────

const DEFAULT_STROKE: StrokeBundle = { color: 0x000000ff, width: 1, style: 'solid' }

function readStrokeValue(desc: PropertyDescriptor): StrokeBundle {
  const r = props.values[desc.name]
  if (!r || typeof r === 'string') return DEFAULT_STROKE
  if (desc.enableable) {
    if (!('enableable' in r.value)) return DEFAULT_STROKE
    const inner = (r.value.enableable as EnableableBundle).value
    return 'stroke' in inner ? inner.stroke : DEFAULT_STROKE
  }
  return 'stroke' in r.value ? r.value.stroke : DEFAULT_STROKE
}

function readStrokeEnabled(desc: PropertyDescriptor): boolean {
  if (!desc.enableable) return true
  const r = props.values[desc.name]
  if (!r || typeof r === 'string' || !('enableable' in r.value)) return true
  return (r.value.enableable as EnableableBundle).enabled
}

function writeStrokeField(desc: PropertyDescriptor, field: 'color' | 'width' | 'style', raw: unknown) {
  const next: StrokeBundle = { ...readStrokeValue(desc), [field]: raw } as StrokeBundle
  const sv: PropertyValue = { stroke: next }
  emit('propertyChange', desc.name, desc.enableable
    ? { enableable: { enabled: readStrokeEnabled(desc), value: sv } }
    : sv)
}

function writeStrokeEnabled(desc: PropertyDescriptor, enabled: boolean) {
  emit('propertyChange', desc.name, {
    enableable: { enabled, value: { stroke: readStrokeValue(desc) } },
  })
}

// ── TextStyle bundle helpers ─────────────────────────────────────────────────

const DEFAULT_TEXT_STYLE: TextStyleBundle = { color: 0x000000ff, fontSize: 12, bold: false, italic: false }

function readTextStyleValue(desc: PropertyDescriptor): TextStyleBundle {
  const r = props.values[desc.name]
  if (!r || typeof r === 'string') return DEFAULT_TEXT_STYLE
  if (desc.enableable) {
    if (!('enableable' in r.value)) return DEFAULT_TEXT_STYLE
    const inner = (r.value.enableable as EnableableBundle).value
    return 'textStyle' in inner ? inner.textStyle : DEFAULT_TEXT_STYLE
  }
  return 'textStyle' in r.value ? r.value.textStyle : DEFAULT_TEXT_STYLE
}

function readTextStyleEnabled(desc: PropertyDescriptor): boolean {
  if (!desc.enableable) return true
  const r = props.values[desc.name]
  if (!r || typeof r === 'string' || !('enableable' in r.value)) return true
  return (r.value.enableable as EnableableBundle).enabled
}

function writeTextStyleField(desc: PropertyDescriptor, field: 'color' | 'fontSize' | 'bold' | 'italic', raw: unknown) {
  const next: TextStyleBundle = { ...readTextStyleValue(desc), [field]: raw } as TextStyleBundle
  const sv: PropertyValue = { textStyle: next }
  emit('propertyChange', desc.name, desc.enableable
    ? { enableable: { enabled: readTextStyleEnabled(desc), value: sv } }
    : sv)
}

function writeTextStyleEnabled(desc: PropertyDescriptor, enabled: boolean) {
  emit('propertyChange', desc.name, {
    enableable: { enabled, value: { textStyle: readTextStyleValue(desc) } },
  })
}

// ── Group bundle helpers ─────────────────────────────────────────────────────

const DEFAULT_GROUP_ITEM: GroupItemValue = {
  enabled: true, number: 0,
  value: { stroke: { color: 0x808080ff, width: 1, style: 'solid' } },
}

function readGroupItems(desc: PropertyDescriptor): GroupItemValue[] {
  const r = props.values[desc.name]
  if (!r || typeof r === 'string' || !('groupItems' in r.value)) return []
  return r.value.groupItems
}

function groupItemStroke(item: GroupItemValue): StrokeBundle {
  return 'stroke' in item.value ? item.value.stroke : DEFAULT_GROUP_ITEM.value.stroke as StrokeBundle
}

function writeGroupItemField(
  desc: PropertyDescriptor, idx: number,
  field: 'enabled' | 'number' | 'color' | 'width' | 'style', raw: unknown,
) {
  const items = readGroupItems(desc)
  const cur: GroupItemValue = items[idx] ?? { ...DEFAULT_GROUP_ITEM }
  let next: GroupItemValue
  if (field === 'enabled') {
    next = { ...cur, enabled: raw as boolean }
  } else if (field === 'number') {
    next = { ...cur, number: raw as number }
  } else {
    const sv = 'stroke' in cur.value ? cur.value.stroke : { color: 0x808080ff, width: 1, style: 'solid' as const }
    next = { ...cur, value: { stroke: { ...sv, [field]: raw } } }
  }
  const newItems = [...items]
  newItems[idx] = next
  emit('propertyChange', desc.name, { groupItems: newItems })
}

// ── Inline group helpers (colour pairs: ↑ up / ↓ down) ──────────────────────

function inlineGroupColor(desc: PropertyDescriptor, idx: number): number {
  const r = props.values[desc.name]
  if (!r || typeof r === 'string' || !('value' in r) || !('groupItems' in r.value)) {
    return 0x808080ff
  }
  const item = r.value.groupItems[idx]
  if (!item) return 0x808080ff
  return (item.value as any)?.color ?? 0x808080ff
}

function writeInlineGroupItem(desc: PropertyDescriptor, idx: number, color: number) {
  const cur: GroupItemValue[] = readGroupItems(desc)
  const newItems: GroupItemValue[] = [...cur]
  newItems[idx] = { ...(newItems[idx] ?? { enabled: true, number: 0 }), value: { color } }
  emit('propertyChange', desc.name, { groupItems: newItems })
}

// ── Flags helpers ────────────────────────────────────────────────────────────

function flagsSummary(name: string, options: { displayName: string }[]): string {
  const bits = intOf(name)
  const sel = options.filter((_, i) => !!(bits & (1 << i))).map((o) => o.displayName)
  if (sel.length === 0) return '—'
  return sel.length === 1 ? sel[0] : sel[0] + ', …'
}

function writeFlags(name: string, bit: number, on: boolean) {
  const cur = intOf(name)
  emit('propertyChange', name, { int: on ? (cur | (1 << bit)) : (cur & ~(1 << bit)) })
}

// ── Text (textarea) helpers ──────────────────────────────────────────────────

// Local mirror so we don't stomp what the user is typing if values re-push.
const textDrafts = ref<Record<string, string>>({})
const touchedTextFields = new Set<string>()

watch(() => props.descriptors, () => {
  touchedTextFields.clear()
  const next: Record<string, string> = {}
  for (const [name, r] of Object.entries(props.values)) {
    if (typeof r !== 'string' && 'text' in r.value) next[name] = r.value.text
  }
  textDrafts.value = next
})

watch(() => props.values, (vals) => {
  for (const [name, r] of Object.entries(vals)) {
    if (touchedTextFields.has(name)) continue
    if (typeof r !== 'string' && 'text' in r.value) textDrafts.value[name] = r.value.text
  }
}, { deep: true })

function onTextInput(name: string, value: string) {
  touchedTextFields.add(name)
  textDrafts.value[name] = value
  emit('propertyChange', name, { text: value })
}

// ── Constants ────────────────────────────────────────────────────────────────

const LINE_STYLES: Array<'solid' | 'dashed' | 'dotted'> = ['solid', 'dashed', 'dotted']
const TEXT_ALIGNS: Array<'left' | 'center' | 'right'> = ['left', 'center', 'right']
const FONT_SIZE_OPTIONS = [8, 10, 12, 14, 16, 18, 20, 24, 28, 32]
</script>

<template>
  <div class="ann-props__section">
    <template v-for="(row, ri) in rows" :key="ri">

      <!-- ── Stroke bundle ─────────────────────────────────────────────────── -->
      <div v-if="row.kind === 'strokeBundle'" class="ann-props__row ann-props__row--popover">
        <button
          v-if="row.descriptor.enableable"
          type="button" class="ann-props__col-cb"
          role="checkbox" :aria-checked="readStrokeEnabled(row.descriptor)"
          @click="writeStrokeEnabled(row.descriptor, !readStrokeEnabled(row.descriptor))"
        >
          <span class="apd-check" :class="{ 'apd-check--on': readStrokeEnabled(row.descriptor) }" aria-hidden="true">
            <svg class="apd-check__tick" viewBox="0 0 10 8" fill="none">
              <path d="M1 4L3.5 6.5L9 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </button>
        <span v-else class="ann-props__col-cb" />
        <label class="ann-props__label"
          :class="{ 'ann-props__label--disabled': row.descriptor.enableable && !readStrokeEnabled(row.descriptor) }"
        >{{ row.descriptor.displayName }}</label>

        <div class="ann-props__control"
          :class="{ 'ann-props__text-format-bar--disabled': row.descriptor.enableable && !readStrokeEnabled(row.descriptor) }">
          <!-- All three flags → 3-in-1 LineStylePopover -->
          <template v-if="typeof row.descriptor.kind === 'object' && 'stroke' in row.descriptor.kind
            && row.descriptor.kind.stroke.flags.color
            && row.descriptor.kind.stroke.flags.width
            && row.descriptor.kind.stroke.flags.style">
            <LineStylePopover
              :color="readStrokeValue(row.descriptor).color"
              :line-style="readStrokeValue(row.descriptor).style"
              :line-width="readStrokeValue(row.descriptor).width"
              :line-width-options="[1, 2, 3, 4]"
              size="sm" side="bottom" align="start"
              @update:color="(c: number) => writeStrokeField(row.descriptor, 'color', c)"
              @update:line-style="(s: string) => writeStrokeField(row.descriptor, 'style', s)"
              @update:line-width="(w: number) => writeStrokeField(row.descriptor, 'width', w)"
            />
          </template>
          <!-- Partial flags → individual controls -->
          <template v-else-if="typeof row.descriptor.kind === 'object' && 'stroke' in row.descriptor.kind">
            <ColorPickerPopover
              v-if="row.descriptor.kind.stroke.flags.color"
              :model-value="readStrokeValue(row.descriptor).color"
              @update:model-value="(c: number) => writeStrokeField(row.descriptor, 'color', c)"
            />
            <!-- Width + style (no color) → single LineStylePopover without color -->
            <LineStylePopover
              v-if="row.descriptor.kind.stroke.flags.width && row.descriptor.kind.stroke.flags.style && !row.descriptor.kind.stroke.flags.color"
              :color="readStrokeValue(row.descriptor).color"
              :line-width="readStrokeValue(row.descriptor).width"
              :line-style="readStrokeValue(row.descriptor).style"
              :line-width-options="[1, 2, 3, 4]"
              :show-color="false"
              :show-line-style="true"
              :show-line-width="true"
              size="sm" side="bottom" align="start"
              @update:line-style="(s: string) => writeStrokeField(row.descriptor, 'style', s)"
              @update:line-width="(w: number) => writeStrokeField(row.descriptor, 'width', w)"
            />
            <!-- Width without style → width-only popover -->
            <LineStylePopover
              v-else-if="row.descriptor.kind.stroke.flags.width && !row.descriptor.kind.stroke.flags.style"
              :color="readStrokeValue(row.descriptor).color"
              :line-width="readStrokeValue(row.descriptor).width"
              :line-style="readStrokeValue(row.descriptor).style"
              :line-width-options="[1, 2, 3, 4]"
              :show-color="false"
              :show-line-style="false"
              :show-line-width="true"
              size="sm" side="bottom" align="start"
              @update:line-width="(w: number) => writeStrokeField(row.descriptor, 'width', w)"
            />
            <Input
              v-else-if="row.descriptor.kind.stroke.flags.width"
              type="number" :min="0" :step="0.5"
              :model-value="String(readStrokeValue(row.descriptor).width)"
              class="ann-props__num"
              @update:model-value="(v: any) => writeStrokeField(row.descriptor, 'width', Number(v) || 1)"
            />
            <!-- Style segment buttons only when not already handled by the combined popover above -->
            <div v-if="row.descriptor.kind.stroke.flags.style && !(row.descriptor.kind.stroke.flags.width && !row.descriptor.kind.stroke.flags.color)" class="ann-props__seg">
              <button v-for="s in LINE_STYLES" :key="s" type="button" class="ann-props__seg-btn"
                :class="{ 'ann-props__seg-btn--active': readStrokeValue(row.descriptor).style === s }"
                :title="s" @click="writeStrokeField(row.descriptor, 'style', s)">
                <svg viewBox="0 0 24 8" class="w-6 h-2">
                  <line x1="1" y1="4" x2="23" y2="4" stroke="currentColor" stroke-width="1.5"
                    :stroke-dasharray="s === 'dashed' ? '6 4' : s === 'dotted' ? '2 3' : undefined"/>
                </svg>
              </button>
            </div>
          </template>
        </div>
      </div>

      <!-- ── TextStyle bundle ──────────────────────────────────────────────── -->
      <div v-else-if="row.kind === 'textStyleBundle'" class="ann-props__row">
        <button
          v-if="row.descriptor.enableable"
          type="button" class="ann-props__col-cb"
          role="checkbox" :aria-checked="readTextStyleEnabled(row.descriptor)"
          @click="writeTextStyleEnabled(row.descriptor, !readTextStyleEnabled(row.descriptor))"
        >
          <span class="apd-check" :class="{ 'apd-check--on': readTextStyleEnabled(row.descriptor) }" aria-hidden="true">
            <svg class="apd-check__tick" viewBox="0 0 10 8" fill="none">
              <path d="M1 4L3.5 6.5L9 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </button>
        <span v-else class="ann-props__col-cb" />
        <label class="ann-props__label"
          :class="{ 'ann-props__label--disabled': row.descriptor.enableable && !readTextStyleEnabled(row.descriptor) }"
        >{{ row.descriptor.displayName }}</label>

        <div class="ann-props__control ann-props__text-format-bar"
          :class="{ 'ann-props__text-format-bar--disabled': row.descriptor.enableable && !readTextStyleEnabled(row.descriptor) }">
          <template v-if="typeof row.descriptor.kind === 'object' && 'textStyle' in row.descriptor.kind">
            <ColorPickerPopover
              v-if="row.descriptor.kind.textStyle.flags.color"
              :model-value="readTextStyleValue(row.descriptor).color"
              :disabled="row.descriptor.enableable && !readTextStyleEnabled(row.descriptor)"
              @update:model-value="(c: number) => writeTextStyleField(row.descriptor, 'color', c)"
            />
            <SelectRoot
              v-if="row.descriptor.kind.textStyle.flags.size"
              :model-value="String(readTextStyleValue(row.descriptor).fontSize)"
              :disabled="row.descriptor.enableable && !readTextStyleEnabled(row.descriptor)"
              @update:model-value="(v) => writeTextStyleField(row.descriptor, 'fontSize', Number(v))"
            >
              <SelectTrigger class="h-7 text-xs w-16 bg-muted/50 border-border hover:bg-muted">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem v-for="s in FONT_SIZE_OPTIONS" :key="s" :value="String(s)">{{ s }}</SelectItem>
              </SelectContent>
            </SelectRoot>
            <button
              v-if="row.descriptor.kind.textStyle.flags.bold"
              type="button" class="ann-props__fmt-btn"
              :class="{ 'ann-props__fmt-btn--active': readTextStyleValue(row.descriptor).bold }"
              :disabled="row.descriptor.enableable && !readTextStyleEnabled(row.descriptor)"
              @click="writeTextStyleField(row.descriptor, 'bold', !readTextStyleValue(row.descriptor).bold)"
            ><b>B</b></button>
            <button
              v-if="row.descriptor.kind.textStyle.flags.italic"
              type="button" class="ann-props__fmt-btn"
              :class="{ 'ann-props__fmt-btn--active': readTextStyleValue(row.descriptor).italic }"
              :disabled="row.descriptor.enableable && !readTextStyleEnabled(row.descriptor)"
              @click="writeTextStyleField(row.descriptor, 'italic', !readTextStyleValue(row.descriptor).italic)"
            ><i>I</i></button>
          </template>
        </div>
      </div>

      <!-- ── Inline group bundle (colour pair: [Label] [↑] [↓]) ─────────────── -->
      <div
        v-else-if="row.kind === 'inlineGroupBundle' && typeof row.descriptor.kind === 'object' && 'group' in row.descriptor.kind"
        class="ann-props__row"
      >
        <span class="ann-props__col-cb" />
        <label class="ann-props__label">{{ row.descriptor.displayName }}</label>
        <div class="ann-props__control">
          <template
            v-for="(item, idx) in row.descriptor.kind.group.items"
            :key="idx"
          >
            <ColorPickerPopover
              v-if="item.kind === 'fill'"
              :model-value="inlineGroupColor(row.descriptor, idx)"
              @update:model-value="(c: number) => writeInlineGroupItem(row.descriptor, idx, c)"
            />
          </template>
        </div>
      </div>

      <!-- ── Group bundle ──────────────────────────────────────────────────── -->
      <div
        v-else-if="row.kind === 'groupBundle' && typeof row.descriptor.kind === 'object' && 'group' in row.descriptor.kind"
        class="ann-props__group"
        :class="{ 'ann-props__group--two-col': row.descriptor.kind.group.items.length > 5 }"
      >
        <div class="ann-props__group-title">{{ row.descriptor.displayName }}</div>
        <div v-for="(item, itemIdx) in row.descriptor.kind.group.items" :key="item.name" class="ann-props__group-item">
          <button
            v-if="item.enableable" type="button" class="ann-props__pws-check" role="checkbox"
            :aria-checked="(readGroupItems(row.descriptor))[itemIdx]?.enabled ?? true"
            @click="writeGroupItemField(row.descriptor, itemIdx, 'enabled', !((readGroupItems(row.descriptor))[itemIdx]?.enabled ?? true))"
          >
            <span class="apd-check" :class="{ 'apd-check--on': (readGroupItems(row.descriptor))[itemIdx]?.enabled ?? true }" aria-hidden="true">
              <svg class="apd-check__tick" viewBox="0 0 10 8" fill="none">
                <path d="M1 4L3.5 6.5L9 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </button>
          <Input
            v-if="typeof row.descriptor.kind === 'object' && 'group' in row.descriptor.kind && row.descriptor.kind.group.hasNumber"
            type="number" :model-value="String((readGroupItems(row.descriptor))[itemIdx]?.number ?? 0)"
            class="ann-props__percent-input"
            @update:model-value="(v: any) => writeGroupItemField(row.descriptor, itemIdx, 'number', Number(v) || 0)"
          />
          <template v-if="typeof item.kind === 'object' && 'stroke' in item.kind">
            <LineStylePopover
              v-if="item.kind.stroke.flags.color && item.kind.stroke.flags.width && item.kind.stroke.flags.style"
              :color="groupItemStroke((readGroupItems(row.descriptor))[itemIdx] ?? DEFAULT_GROUP_ITEM).color"
              :line-style="groupItemStroke((readGroupItems(row.descriptor))[itemIdx] ?? DEFAULT_GROUP_ITEM).style"
              :line-width="groupItemStroke((readGroupItems(row.descriptor))[itemIdx] ?? DEFAULT_GROUP_ITEM).width"
              :line-width-options="[1, 2, 3, 4]" size="sm" side="bottom" align="start"
              @update:color="(c: number) => writeGroupItemField(row.descriptor, itemIdx, 'color', c)"
              @update:line-style="(s: string) => writeGroupItemField(row.descriptor, itemIdx, 'style', s as any)"
              @update:line-width="(w: number) => writeGroupItemField(row.descriptor, itemIdx, 'width', w)"
            />
            <template v-else>
              <ColorPickerPopover
                v-if="item.kind.stroke.flags.color"
                :model-value="groupItemStroke((readGroupItems(row.descriptor))[itemIdx] ?? DEFAULT_GROUP_ITEM).color"
                @update:model-value="(c: number) => writeGroupItemField(row.descriptor, itemIdx, 'color', c)"
              />
              <Input v-if="item.kind.stroke.flags.width" type="number" :min="0" :step="0.5"
                :model-value="String(groupItemStroke((readGroupItems(row.descriptor))[itemIdx] ?? DEFAULT_GROUP_ITEM).width)"
                class="ann-props__num"
                @update:model-value="(v: any) => writeGroupItemField(row.descriptor, itemIdx, 'width', Number(v) || 1)"
              />
              <div v-if="item.kind.stroke.flags.style" class="ann-props__seg">
                <button v-for="s in LINE_STYLES" :key="s" type="button" class="ann-props__seg-btn"
                  :class="{ 'ann-props__seg-btn--active': groupItemStroke((readGroupItems(row.descriptor))[itemIdx] ?? DEFAULT_GROUP_ITEM).style === s }"
                  :title="s" @click="writeGroupItemField(row.descriptor, itemIdx, 'style', s)">
                  <svg viewBox="0 0 24 8" class="w-6 h-2">
                    <line x1="1" y1="4" x2="23" y2="4" stroke="currentColor" stroke-width="1.5"
                      :stroke-dasharray="s === 'dashed' ? '6 4' : s === 'dotted' ? '2 3' : undefined"/>
                  </svg>
                </button>
              </div>
            </template>
          </template>
        </div>
      </div>

      <!-- ── Single descriptor row ─────────────────────────────────────────── -->
      <div v-else class="ann-props__row" :class="{ 'ann-props__row--mixed': values[row.descriptor.name] === 'mixed' }">
        <!-- checkbox for enableable fill -->
        <button
          v-if="row.descriptor.kind === 'fill' && row.descriptor.enableable"
          type="button"
          class="apd-check-row ann-props__col-cb-btn"
          role="checkbox"
          :aria-checked="readFillEnabled(row.descriptor)"
          @click="writeFillEnabled(row.descriptor, !readFillEnabled(row.descriptor))"
        >
          <span class="apd-check" :class="{ 'apd-check--on': readFillEnabled(row.descriptor) }">
            <svg class="apd-check__tick" viewBox="0 0 10 8" fill="none">
              <path d="M1 4L3.5 6.5L9 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </button>
        <!-- checkbox for other enableable kinds (e.g. Number) -->
        <button
          v-else-if="row.descriptor.enableable"
          type="button"
          class="apd-check-row ann-props__col-cb-btn"
          role="checkbox"
          :aria-checked="readEnableableEnabled(row.descriptor.name)"
          @click="writeEnableableEnabled(row.descriptor.name, !readEnableableEnabled(row.descriptor.name))"
        >
          <span class="apd-check" :class="{ 'apd-check--on': readEnableableEnabled(row.descriptor.name) }">
            <svg class="apd-check__tick" viewBox="0 0 10 8" fill="none">
              <path d="M1 4L3.5 6.5L9 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </button>
        <span v-else class="ann-props__col-cb" />
        <label
          class="ann-props__label"
          :class="{ 'ann-props__label--disabled': row.descriptor.kind === 'fill' && row.descriptor.enableable && !readFillEnabled(row.descriptor) }"
          :for="`prop-${row.descriptor.name}`"
        >
          {{ row.descriptor.displayName }}
          <span
            v-if="row.descriptor.tooltip"
            class="ann-props__tooltip-icon"
            :title="row.descriptor.tooltip"
            aria-label="info"
          >
            <svg viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <circle cx="7" cy="7" r="6.25" stroke="currentColor" stroke-width="1.5"/>
              <path d="M7 6.5v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <circle cx="7" cy="4.5" r="0.75" fill="currentColor"/>
            </svg>
          </span>
        </label>
        <div class="ann-props__control">

          <!-- fill → ColorPickerPopover -->
          <ColorPickerPopover
            v-if="row.descriptor.kind === 'fill'"
            :model-value="readFillColor(row.descriptor)"
            :disabled="row.descriptor.enableable && !readFillEnabled(row.descriptor)"
            @update:model-value="(c: number) => writeFillColor(row.descriptor, c)"
          />

          <!-- textAlign → segment buttons -->
          <div v-else-if="row.descriptor.kind === 'textAlign'" class="ann-props__seg">
            <button v-for="a in TEXT_ALIGNS" :key="a" type="button" class="ann-props__seg-btn"
              :class="{ 'ann-props__seg-btn--active': textAlignOf(row.descriptor.name) === a }"
              :title="a" @click="$emit('propertyChange', row.descriptor.name, { textAlign: a })">
              {{ a === 'left' ? '⇤' : a === 'center' ? '↔' : '⇥' }}
            </button>
          </div>

          <!-- flags → popover checklist -->
          <PopoverRoot
            v-else-if="typeof row.descriptor.kind === 'object' && 'flags' in row.descriptor.kind"
            :open="!!flagsOpen[row.descriptor.name]"
            @update:open="(o) => { flagsOpen[row.descriptor.name] = o }"
          >
            <PopoverTrigger as-child>
              <button type="button" class="ann-props__flags-trigger">
                <span class="ann-props__flags-summary">{{ flagsSummary(row.descriptor.name, row.descriptor.kind.flags.options) }}</span>
                <span class="ann-props__flags-arrow">▾</span>
              </button>
            </PopoverTrigger>
            <Teleport to="body">
              <div v-if="!!flagsOpen[row.descriptor.name]" data-popover-overlay
                style="position: fixed; inset: 0; z-index: 199;"
                @pointerdown.stop @click.stop="flagsOpen[row.descriptor.name] = false"
              />
            </Teleport>
            <PopoverPortal>
              <PopoverContent side="bottom" align="start" :side-offset="4" :collision-padding="8"
                class="z-[300] min-w-[160px] rounded-lg border bg-popover p-2 text-popover-foreground shadow-lg flex flex-col gap-1.5 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
                <button v-for="(opt, i) in row.descriptor.kind.flags.options" :key="i"
                  type="button" class="apd-check-row"
                  @click="writeFlags(row.descriptor.name, i, !(intOf(row.descriptor.name) & (1 << i)))">
                  <span class="apd-check" :class="{ 'apd-check--on': !!(intOf(row.descriptor.name) & (1 << i)) }">
                    <svg class="apd-check__tick" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  <span>{{ opt.displayName }}</span>
                </button>
              </PopoverContent>
            </PopoverPortal>
          </PopoverRoot>

          <!-- bool → checkbox -->
          <span
            v-else-if="row.descriptor.kind === 'bool'"
            :id="`prop-${row.descriptor.name}`"
            class="apd-check" :class="{ 'apd-check--on': boolOf(row.descriptor.name) }"
            role="checkbox" :aria-checked="boolOf(row.descriptor.name)"
            tabindex="0"
            @click="$emit('propertyChange', row.descriptor.name, { bool: !boolOf(row.descriptor.name) })"
            @keydown.space.prevent="$emit('propertyChange', row.descriptor.name, { bool: !boolOf(row.descriptor.name) })"
          >
            <svg class="apd-check__tick" viewBox="0 0 10 8" fill="none">
              <path d="M1 4L3.5 6.5L9 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>

          <!-- enum / textVAlign → Select -->
          <SelectRoot
            v-else-if="typeof row.descriptor.kind === 'object' && ('enum' in row.descriptor.kind || 'textVAlign' in row.descriptor.kind)"
            :model-value="String(enumIndexOf(row.descriptor.name))"
            @update:model-value="(v) => $emit('propertyChange', row.descriptor.name, { enum: Number(v) })"
          >
            <SelectTrigger class="h-7 text-xs bg-muted/50 border-border hover:bg-muted w-auto min-w-[80px] max-w-[160px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                v-for="(opt, idx) in ('enum' in row.descriptor.kind ? row.descriptor.kind.enum.options : row.descriptor.kind.textVAlign.options)"
                :key="idx"
                :value="String(idx)"
              >
                {{ opt.displayName }}
              </SelectItem>
            </SelectContent>
          </SelectRoot>

          <!-- text → textarea -->
          <textarea
            v-else-if="row.descriptor.kind === 'text'"
            :id="`prop-${row.descriptor.name}`"
            :value="textDrafts[row.descriptor.name] ?? textOf(row.descriptor.name)"
            rows="3" class="ann-props__textarea"
            @input="(e: Event) => onTextInput(row.descriptor.name, (e.target as HTMLTextAreaElement).value)"
          />

          <!-- alpha → slider -->
          <div v-else-if="row.descriptor.kind === 'alpha'" class="ann-props__alpha-row">
            <div class="ann-props__alpha-track">
              <AlphaSlider
                :value="Math.round(floatOf(row.descriptor.name, 0) * 255)"
                @update:value="(v: number) => $emit('propertyChange', row.descriptor.name, { float: v / 255 })"
              />
            </div>
            <span class="ann-props__alpha-pct">{{ Math.round(floatOf(row.descriptor.name, 0) * 100) }}%</span>
          </div>

          <!-- number → input -->
          <Input
            v-else-if="typeof row.descriptor.kind === 'object' && 'number' in row.descriptor.kind"
            type="number"
            :min="(row.descriptor.kind as any).number.min"
            :max="(row.descriptor.kind as any).number.max"
            :step="(row.descriptor.kind as any).number.step ?? 'any'"
            :value="String(row.descriptor.enableable ? readEnableableFloat(row.descriptor.name) : floatOf(row.descriptor.name, 0))"
            class="ann-props__num"
            @change="(e: Event) => {
              const v = parseFloat((e.target as HTMLInputElement).value) || 0
              row.descriptor.enableable
                ? writeEnableableFloat(row.descriptor.name, v)
                : $emit('propertyChange', row.descriptor.name, { float: v })
            }"
          />

        </div>
      </div>

    </template>
  </div>
</template>

<style scoped>
/* Script-config–style rows: divider between items, generous padding,
   hover highlight — matching the Inputs tab in ScriptConfigDialog. */
.ann-props__section {
  display: grid;
  grid-template-columns: 20px minmax(110px, max-content) 1fr;
}
.ann-props__row {
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: subgrid;
  align-items: center;
  gap: 12px;
  padding: 10px 0 10px 5px;
  border-bottom: 1px solid var(--vp-c-divider, rgba(0, 0, 0, 0.06));
  transition: background 0.15s;
  cursor: default;
}
.ann-props__row:hover {
  background: var(--vp-c-default-soft, rgba(128, 128, 128, 0.08));
}
.ann-props__row--mixed .ann-props__control {
  outline: 1px dashed var(--vp-c-warning-1, #f59e0b);
  outline-offset: 2px;
  border-radius: 4px;
}
.ann-props__row--popover {
  align-items: center;
}
.ann-props__col-cb {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  flex-shrink: 0;
}
.ann-props__col-cb-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  flex-shrink: 0;
}
.ann-props__label--disabled {
  opacity: 0.4;
}
.ann-props__label {
  font-size: 13px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  opacity: 0.8;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 4px;
}
.ann-props__tooltip-icon {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  color: var(--vp-c-text-3);
  cursor: default;
  & svg {
    width: 13px;
    height: 13px;
  }
  &:hover {
    color: var(--vp-c-text-1);
  }
}
.ann-props__label--checkbox {
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: 13px;
  font-family: inherit;
  color: inherit;
  text-align: left;
  white-space: nowrap;
  opacity: 0.8;
  font-weight: 500;
}
.ann-props__control {
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
}
.ann-props__num {
  width: 80px;
}
.ann-props__input,
.ann-props__textarea {
  width: 100%;
  padding: 4px 8px;
  font-size: 13px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider, rgba(0, 0, 0, 0.12));
  border-radius: 4px;
}
.ann-props__textarea {
  resize: vertical;
  font-family: inherit;
}
.ann-props__seg {
  display: inline-flex;
  border: 1px solid var(--vp-c-divider, rgba(0, 0, 0, 0.12));
  border-radius: 4px;
  overflow: hidden;
}
.ann-props__seg-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  min-width: 32px;
  padding: 0 6px;
  background: transparent;
  border: none;
  border-right: 1px solid var(--vp-c-divider, rgba(0, 0, 0, 0.08));
  color: var(--vp-c-text-2);
  cursor: pointer;
  font-size: 14px;
}
.ann-props__seg-btn:last-child { border-right: none; }
.ann-props__seg-btn:hover { background: var(--vp-c-default-soft, rgba(0, 0, 0, 0.06)); }
.ann-props__seg-btn--active {
  background: var(--vp-c-brand-soft, rgba(137, 180, 250, 0.16));
  color: var(--vp-c-brand-1, #89b4fa);
}
.ann-props__text-format-bar {
  display: flex;
  align-items: center;
  gap: 6px;
}
.ann-props__text-format-bar--disabled {
  opacity: 0.45;
  pointer-events: none;
}
.ann-props__fmt-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  background: transparent;
  border: 1px solid var(--vp-c-divider, rgba(0, 0, 0, 0.12));
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-family: serif;
  color: var(--vp-c-text-1);
}
.ann-props__fmt-btn:hover { background: var(--vp-c-default-soft, rgba(0, 0, 0, 0.06)); }
.ann-props__fmt-btn--active {
  background: var(--vp-c-brand-soft, rgba(137, 180, 250, 0.16));
  border-color: var(--vp-c-brand-2, #74c7ec);
  color: var(--vp-c-brand-1, #89b4fa);
}
.ann-props__group {
  display: flex;
  flex-direction: column;
  gap: 4px;
  grid-column: 1 / -1;
  padding: 10px 0 10px 40px;
  border-bottom: 1px solid var(--vp-c-divider, rgba(0, 0, 0, 0.06));
  transition: background 0.15s;
  cursor: default;
}
.ann-props__group:hover {
  background: var(--vp-c-default-soft, rgba(128, 128, 128, 0.08));
}
.ann-props__group--two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px 12px;
}
.ann-props__group-title {
  grid-column: 1 / -1;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: var(--vp-c-text-2);
  padding-top: 4px;
}
.ann-props__group-item {
  display: flex;
  align-items: center;
  gap: 6px;
  padding-left: 8px;
}
.ann-props__pws-check {
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  width: 22px;
  height: 22px;
}
.ann-props__percent-input {
  width: 72px;
  flex-shrink: 0;
}
.ann-props__alpha-row {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 160px;
}
.ann-props__alpha-track {
  position: relative;
  flex: 1;
  height: 14px;
  background:
    linear-gradient(to right, transparent, currentColor),
    repeating-conic-gradient(#808080 0% 25%, #fff 0% 50%) 0 0 / 8px 8px;
  border-radius: 9999px;
  border: 1px solid var(--vp-c-divider, rgba(0, 0, 0, 0.12));
  overflow: hidden;
}
.ann-props__alpha-pct {
  font-size: 11px;
  color: var(--vp-c-text-3);
  min-width: 30px;
  text-align: right;
}
.ann-props__flags-trigger {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  height: 28px;
  padding: 0 8px;
  font-size: 13px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider, rgba(0, 0, 0, 0.12));
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
}
.ann-props__flags-trigger:hover { background: var(--vp-c-default-soft, rgba(0, 0, 0, 0.06)); }
.ann-props__flags-summary { max-width: 160px; overflow: hidden; text-overflow: ellipsis; }
.ann-props__flags-arrow { font-size: 10px; color: var(--vp-c-text-3); }
</style>

<style>
/* Non-scoped: also covers portal-teleported content */
.apd-check {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  border-radius: 3px;
  border: 1.5px solid var(--vp-c-text-3, rgba(128,128,128,0.5));
  background: transparent;
  cursor: pointer;
  transition: background 0.1s, border-color 0.1s;
  outline: none;
}
.apd-check--on {
  background: var(--vp-c-brand-1, #3451b2);
  border-color: var(--vp-c-brand-1, #3451b2);
}
.apd-check:hover:not(.apd-check--on) {
  border-color: var(--vp-c-text-2, rgba(128,128,128,0.8));
}
.apd-check__tick {
  width: 10px;
  height: 8px;
  opacity: 0;
  transition: opacity 0.1s;
}
.apd-check--on .apd-check__tick { opacity: 1; }
.apd-check-row {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  cursor: pointer;
  color: var(--vp-c-text-1);
  user-select: none;
  background: transparent;
  border: none;
  padding: 2px 0;
  width: 100%;
  text-align: left;
}
.apd-check-row:hover .apd-check { border-color: var(--vp-c-text-2); }
</style>
