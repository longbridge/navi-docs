<script setup lang="ts">
/**
 * "Edit annotation properties" dialog — triggered by double-clicking an
 * annotation on the chart. Lists every `PropertyDescriptor` from
 * `pg.selected_annotation_properties()` as a flat list, with one inline
 * editor per descriptor based on its `kind`.
 */

import { computed, watch, ref, provide } from 'vue'
import { useI18n } from 'vue-i18n'
import { DialogRoot, SelectRoot, SelectValue } from 'radix-vue'
import PropertyRows from './PropertyRows.vue'
import DialogContent from './ui/DialogContent.vue'
import DialogFooter from './ui/DialogFooter.vue'
import DialogHeader from './ui/DialogHeader.vue'
import DialogTitle from './ui/DialogTitle.vue'
import DialogDescription from './ui/DialogDescription.vue'
import Button from './ui/Button.vue'
import Input from './ui/Input.vue'
import SelectTrigger from './ui/SelectTrigger.vue'
import SelectContent from './ui/SelectContent.vue'
import SelectItem from './ui/SelectItem.vue'
import { RotateCcw } from 'lucide-vue-next'
import AlphaSlider from './AlphaSlider.vue'
import ColorPickerPopover from './ColorPickerPopover.vue'
import LineStylePopover from './LineStylePopover.vue'
import {
  type PropertyDescriptor,
  type PropertyValue,
  type PropertyValueResult,
  type StrokeBundle,
  type TextStyleBundle,
  type StrokeFlags,
  type TextStyleFlags,
  type EnableableBundle,
  type GroupItemValue,
} from '../composables/use-wasm'

/** Bitmask values matching Rust `ControlPointFlags`. */
const CP_LOCK_BAR_INDEX = 0b0000_0001
const CP_LOCK_PRICE = 0b0000_0010

interface ControlPoint {
  barIndex: number
  price: number
  /** Optional bitmask; absent or 0 = no axis constraints. */
  flags?: number
}

interface Props {
  open: boolean
  descriptors: PropertyDescriptor[]
  values: Record<string, PropertyValueResult>
  points: ControlPoint[]
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'update:open', open: boolean): void
  (e: 'propertyChange', name: string, value: PropertyValue): void
  (e: 'pointChange', idx: number, barIndex: number, price: number): void
  (e: 'resetToDefault'): void
}>()

const { t } = useI18n()

const openPopoverCount = ref(0)
provide('openPopoverCount', openPopoverCount)

// ── Tab state ───────────────────────────────────────────────────────────────

type Tab = 'inputs' | 'style' | 'text' | 'coordinates'
const activeTab = ref<Tab>('style')
const flagsOpen = ref<Record<string, boolean>>({})
watch(
  () => Object.values(flagsOpen.value).filter(Boolean).length,
  (n, o) => { openPopoverCount.value += n - (o ?? 0) },
  { flush: 'sync' },
)

const hasInputsTab = computed(() => props.descriptors.some((d) => d.category === 'inputs'))
const hasTextTab = computed(() => props.descriptors.some((d) => d.kind === 'text' || (typeof d.kind === 'object' && 'text' in d.kind)))

/** A descriptor belongs to the Text tab only when there IS a text tab (i.e.
 *  the annotation has at least one `text` descriptor). Without a text tab,
 *  textAlign / textVAlign descriptors show as regular rows in the style tab. */
function isTextDesc(d: PropertyDescriptor): boolean {
  if (!hasTextTab.value) return false
  const k = d.kind
  if (typeof k === 'string') return k === 'text' || k === 'textStyle' || k === 'textAlign' || k === 'textVAlign'
  return 'text' in k || 'textStyle' in k || 'textAlign' in k || 'textVAlign' in k
}
const hasCoordinatesTab = computed(() => props.points.length > 0)
const hasAnySecondaryTab = computed(() => hasInputsTab.value || hasTextTab.value || hasCoordinatesTab.value)

// ── Text-tab descriptor lookups ─────────────────────────────────────────────

/** Single bundle descriptor that carries colour + font size + bold + italic. */
const textStyleDesc = computed(() =>
  props.descriptors.find((d) => d.kind === 'textStyle' || (typeof d.kind === 'object' && 'textStyle' in d.kind)),
)
const textDesc = computed(() =>
  props.descriptors.find((d) => d.kind === 'text' || (typeof d.kind === 'object' && 'text' in d.kind)),
)
const textAlignDesc = computed(() =>
  props.descriptors.find((d) => d.kind === 'textAlign' || (typeof d.kind === 'object' && 'textAlign' in d.kind)),
)
const textVAlignDesc = computed(() =>
  props.descriptors.find((d) => typeof d.kind === 'object' && 'textVAlign' in d.kind),
)
const fontSizeOptions = [8, 10, 12, 14, 16, 18, 20, 24, 28, 32]

/** Read the current textStyle bundle value (single-selection only). */
function readTextStyle(): TextStyleBundle | null {
  const d = textStyleDesc.value
  if (!d) return null
  const r = props.values[d.name]
  if (!r || typeof r === 'string' || !('textStyle' in r.value)) return null
  return r.value.textStyle
}

/** Patch one field of the textStyle bundle and emit the write. */
function writeTextStyleField(
  field: 'color' | 'fontSize' | 'bold' | 'italic',
  raw: unknown,
) {
  const d = textStyleDesc.value
  if (!d) return
  const base = readTextStyle() ?? { color: 0x000000ff, fontSize: 12, bold: false, italic: false }
  const next = { ...base, [field]: raw }
  emit('propertyChange', d.name, { textStyle: next })
}

// (Stroke, TextStyle, Group, value-reader helpers are in PropertyRows.vue)

// ── Coordinates helpers ──────────────────────────────────────────────────────

function onBarIndexChange(idx: number, e: Event) {
  const val = parseInt((e.target as HTMLInputElement).value, 10)
  if (!isNaN(val) && val >= 0) {
    emit('pointChange', idx, val, props.points[idx].price)
  }
}

function onPriceChange(idx: number, e: Event) {
  const val = parseFloat((e.target as HTMLInputElement).value)
  if (!isNaN(val)) {
    emit('pointChange', idx, props.points[idx].barIndex, val)
  }
}

// When the dialog opens: pick the starting tab and initialise textDrafts.
// Annotations whose descriptors are all text-related (Text / Emoji) start on
// the text tab; others start on the style tab.

// ── Filter (annotation-specific: tab routing) ────────────────────────────────

const visible = computed(() => {
  if (activeTab.value === 'inputs') return props.descriptors.filter((d) => d.category === 'inputs')
  if (activeTab.value === 'text') return props.descriptors.filter(isTextDesc)
  // Style tab: all non-text, non-inputs descriptors
  return props.descriptors.filter((d) => !isTextDesc(d) && d.category !== 'inputs')
})

// ── Writers ────────────────────────────────────────────────────────────────

function write(name: string, value: PropertyValue) {
  emit('propertyChange', name, value)
}

watch(() => props.open, (open) => {
  if (!open) return
  const hasStyleDescs = props.descriptors.some((d) => !isTextDesc(d) && d.category !== 'inputs')
  if (hasInputsTab.value) {
    activeTab.value = 'inputs'
  } else if (hasStyleDescs) {
    activeTab.value = 'style'
  } else if (hasTextTab.value) {
    activeTab.value = 'text'
  } else {
    activeTab.value = 'coordinates'
  }
})

// ── Helpers for group item stroke sub-value reading (text tab format bar) ───

function groupItemStroke(item: GroupItemValue): StrokeBundle {
  return 'stroke' in item.value
    ? item.value.stroke
    : { color: 0x808080ff, width: 1, style: 'solid' }
}

// ── Text tab helpers (text drafts, value readers for text/align props) ────────
// These live here (not in PropertyRows) because the text tab has a custom
// layout (format bar + full-width textarea) rendered directly in this dialog.

const textDrafts = ref<Record<string, string>>({})
const touchedTextFields = new Set<string>()

watch(() => props.open, (open) => {
  if (!open) return
  touchedTextFields.clear()
  const next: Record<string, string> = {}
  for (const [name, r] of Object.entries(props.values)) {
    if (typeof r !== 'string' && 'value' in r && 'text' in r.value) next[name] = r.value.text
  }
  textDrafts.value = next
}, { immediate: false })

watch(() => props.values, (vals) => {
  if (!props.open) return
  for (const [name, r] of Object.entries(vals)) {
    if (touchedTextFields.has(name)) continue
    if (typeof r !== 'string' && 'value' in r && 'text' in r.value) textDrafts.value[name] = r.value.text
  }
}, { deep: true })

function onTextInput(name: string, value: string) {
  touchedTextFields.add(name)
  textDrafts.value[name] = value
  write(name, { text: value })
}

function textOf(name: string): string {
  const r = props.values[name]
  if (!r || typeof r === 'string' || !('value' in r) || !('text' in r.value)) return ''
  return r.value.text
}

function textAlignOf(name: string): 'left' | 'center' | 'right' {
  const r = props.values[name]
  if (!r || typeof r === 'string' || !('value' in r) || !('textAlign' in r.value)) return 'left'
  return r.value.textAlign
}

function enumIndexOf(name: string): number {
  const r = props.values[name]
  if (!r || typeof r === 'string' || !('value' in r) || !('enum' in r.value)) return 0
  return r.value.enum
}

const TEXT_ALIGNS: Array<'left' | 'center' | 'right'> = ['left', 'center', 'right']

</script>

<template>
  <DialogRoot :open="open" @update:open="emit('update:open', $event)">
    <DialogContent
      class="max-w-[640px] !p-0 !gap-0 overflow-clip"
      @pointer-down-outside="(e: Event) => { if (openPopoverCount > 0) e.preventDefault() }"
    >
      <DialogHeader class="px-5 pt-4 pb-3 border-b border-border/50">
        <DialogTitle>{{ t('playground.propertiesDialog.title') }}</DialogTitle>
        <DialogDescription class="sr-only">{{ t('playground.propertiesDialog.title') }}</DialogDescription>
      </DialogHeader>

      <!-- Tab bar — shown when the annotation has inputs, text, or coordinates tabs -->
      <div v-if="hasAnySecondaryTab" class="ann-props__tabs">
        <button
          v-if="hasInputsTab"
          type="button"
          class="ann-props__tab"
          :class="{ 'ann-props__tab--active': activeTab === 'inputs' }"
          @click="activeTab = 'inputs'"
        >{{ t('playground.propertiesDialog.tabInputs') }}</button>
        <button
          type="button"
          class="ann-props__tab"
          :class="{ 'ann-props__tab--active': activeTab === 'style' }"
          @click="activeTab = 'style'"
        >{{ t('playground.propertiesDialog.tabStyle') }}</button>
        <button
          v-if="hasTextTab"
          type="button"
          class="ann-props__tab"
          :class="{ 'ann-props__tab--active': activeTab === 'text' }"
          @click="activeTab = 'text'"
        >{{ t('playground.propertiesDialog.tabText') }}</button>
        <button
          v-if="hasCoordinatesTab"
          type="button"
          class="ann-props__tab"
          :class="{ 'ann-props__tab--active': activeTab === 'coordinates' }"
          @click="activeTab = 'coordinates'"
        >{{ t('playground.propertiesDialog.tabCoordinates') }}</button>
      </div>

      <!-- Coordinates tab: list of control points with Y (price) + X (bar index) inputs -->
      <div v-if="activeTab === 'coordinates'" class="ann-props__coords px-5 py-3">
        <div
          v-for="(pt, idx) in points"
          :key="idx"
          class="ann-props__coord-row"
        >
          <span class="ann-props__coord-label">{{ t('playground.propertiesDialog.point', { n: idx + 1 }) }}</span>
          <input
            v-if="!((pt.flags ?? 0) & CP_LOCK_PRICE)"
            type="number"
            step="0.01"
            class="ann-props__coord-num"
            :value="(pt.price ?? 0).toFixed(2)"
            @change="onPriceChange(idx, $event)"
          />
          <input
            v-if="!((pt.flags ?? 0) & CP_LOCK_BAR_INDEX)"
            type="number"
            step="1"
            min="0"
            class="ann-props__coord-num"
            :value="pt.barIndex"
            @change="onBarIndexChange(idx, $event)"
          />
        </div>
      </div>

      <!-- Text tab: compact format bar + full-width textarea -->
      <div v-if="activeTab === 'text'" class="ann-props__text-tab px-5 py-3">
        <div v-if="textStyleDesc" class="ann-props__text-format-bar">
          <ColorPickerPopover
            :model-value="readTextStyle()?.color ?? 0xffffffff"
            @update:model-value="(c: number) => writeTextStyleField('color', c)"
          />
          <SelectRoot
            :model-value="String(readTextStyle()?.fontSize ?? 12)"
            @update:model-value="(v) => writeTextStyleField('fontSize', Number(v))"
          >
            <SelectTrigger class="h-8 text-xs w-16 bg-muted/50 border-border hover:bg-muted">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem v-for="s in fontSizeOptions" :key="s" :value="String(s)">{{ s }}</SelectItem>
            </SelectContent>
          </SelectRoot>
          <button
            type="button"
            class="ann-props__fmt-btn"
            :class="{ 'ann-props__fmt-btn--active': readTextStyle()?.bold }"
            @click="writeTextStyleField('bold', !readTextStyle()?.bold)"
          ><b>B</b></button>
          <button
            type="button"
            class="ann-props__fmt-btn"
            :class="{ 'ann-props__fmt-btn--active': readTextStyle()?.italic }"
            @click="writeTextStyleField('italic', !readTextStyle()?.italic)"
          ><i>I</i></button>
        </div>
        <textarea
          v-if="textDesc"
          :value="textDrafts[textDesc.name] ?? textOf(textDesc.name)"
          class="ann-props__textarea ann-props__textarea--large"
          :placeholder="t('playground.propertiesDialog.addText')"
          @input="(e: Event) => onTextInput(textDesc!.name, (e.target as HTMLTextAreaElement).value)"
        />
        <!-- Alignment controls below the textarea -->
        <div v-if="textAlignDesc || textVAlignDesc" class="ann-props__text-align-row">
          <div v-if="textAlignDesc" class="ann-props__seg">
            <button
              v-for="a in TEXT_ALIGNS"
              :key="a"
              type="button"
              class="ann-props__seg-btn"
              :class="{ 'ann-props__seg-btn--active': textAlignOf(textAlignDesc.name) === a }"
              :title="textAlignDesc.displayName + ': ' + a"
              @click="write(textAlignDesc.name, { textAlign: a })"
            >{{ a === 'left' ? '⇤' : a === 'center' ? '↔' : '⇥' }}</button>
          </div>
          <SelectRoot
            v-if="textVAlignDesc && typeof textVAlignDesc.kind === 'object' && 'textVAlign' in textVAlignDesc.kind"
            :model-value="String(enumIndexOf(textVAlignDesc.name))"
            @update:model-value="(v) => write(textVAlignDesc!.name, { enum: Number(v) })"
          >
            <SelectTrigger class="h-8 text-xs bg-muted/50 border-border hover:bg-muted w-auto min-w-[80px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                v-for="(opt, idx) in (textVAlignDesc.kind as any).textVAlign.options"
                :key="idx"
                :value="String(idx)"
              >{{ opt.displayName }}</SelectItem>
            </SelectContent>
          </SelectRoot>
        </div>
      </div>

      <!-- Inputs / Style tabs: delegated to PropertyRows -->
      <div v-if="activeTab === 'inputs' || activeTab === 'style'" class="ann-props">
        <PropertyRows :descriptors="visible" :values="values" @property-change="write" />
      </div>
      <DialogFooter class="border-t border-border/40 px-5 py-3 bg-muted/15">
        <Button variant="ghost" size="sm" class="text-muted-foreground hover:text-foreground gap-1.5" @click="emit('resetToDefault')">
          <RotateCcw class="h-3.5 w-3.5" />
          {{ t('dialog.resetDefaults') }}
        </Button>
        <div class="flex-1" />
        <Button size="sm" @click="emit('update:open', false)">{{ t('dialog.ok') }}</Button>
      </DialogFooter>
    </DialogContent>
  </DialogRoot>
</template>


<style scoped>
/* ── Tab bar ──────────────────────────────────────────────────────────────── */
.ann-props__tabs {
  display: flex;
  border-bottom: 1px solid var(--vp-c-divider, rgba(0, 0, 0, 0.1));
  gap: 0;
}
.ann-props__tab {
  padding: 6px 16px;
  font-size: 13px;
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;
}
.ann-props__tab:hover {
  color: var(--vp-c-text-1);
}
.ann-props__tab--active {
  color: var(--vp-c-brand-1, #89b4fa);
  border-bottom-color: var(--vp-c-brand-1, #89b4fa);
  font-weight: 500;
}

/* ── Container ────────────────────────────────────────────────────────────── */
.ann-props {
  max-height: 60vh;
  overflow-y: auto;
}

/* ── Seg buttons (used by text-align control in text tab) ─────────────────── */
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
.ann-props__text-align-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}

/* ── Text tab ─────────────────────────────────────────────────────────────── */
.ann-props__text-tab {
  display: flex;
  flex-direction: column;
  gap: 10px;
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
.ann-props__textarea {
  width: 100%;
  padding: 4px 8px;
  font-size: 13px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider, rgba(0, 0, 0, 0.12));
  border-radius: 4px;
  resize: vertical;
  font-family: inherit;
}

/* ── Coordinates tab ──────────────────────────────────────────────────────── */
.ann-props__coords {
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-height: 60vh;
  overflow-y: auto;
}
.ann-props__coord-row {
  display: grid;
  grid-template-columns: 60px 100px 80px;
  align-items: center;
  gap: 8px;
}
.ann-props__coord-label {
  font-size: 13px;
  color: var(--vp-c-text-1);
  white-space: nowrap;
}
.ann-props__coord-num {
  width: 100%;
  padding: 4px 2px 4px 6px;
  font-size: 13px;
  font-variant-numeric: tabular-nums;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider, rgba(0, 0, 0, 0.12));
  border-radius: 4px;
  box-sizing: border-box;
  -webkit-appearance: auto;
  appearance: auto;
}
.ann-props__coord-num::-webkit-inner-spin-button,
.ann-props__coord-num::-webkit-outer-spin-button {
  opacity: 1;
  -webkit-appearance: auto;
}
</style>
