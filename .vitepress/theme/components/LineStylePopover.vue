<script setup lang="ts">
/**
 * Combined colour + line-style + line-width popover, mirroring the
 * per-slot button in ScriptConfigDialog so both surfaces share the
 * same UI chrome.
 *
 * The trigger is a scoped slot so callers can supply their own button
 * while still receiving the computed preview values (dash pattern,
 * stroke-width, preview colour, title). The default trigger is the
 * same `h-9 w-16` button used in ScriptConfigDialog.
 *
 * All three sections (colour, line style, line width) are independently
 * opt-in via the `showColor / showLineStyle / showLineWidth` props so
 * the component can be used for stroke-only annotations that lack fill.
 */

import { computed, ref, inject, watch, onUnmounted, type Ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { PopoverRoot, PopoverTrigger, PopoverContent, PopoverPortal } from 'radix-vue'
import Input from './ui/Input.vue'
import AlphaSlider from './AlphaSlider.vue'
import { cn } from '../lib/utils'

// ── Palette (same as ColorPickerPopover / ScriptConfigDialog) ──────────────

const COLOR_PALETTE = [
  '#FF0000', '#FF5252', '#FF9800', '#FFB74D', '#FFEB3B', '#FFF176',
  '#4CAF50', '#81C784', '#2196F3', '#64B5F6', '#9C27B0', '#CE93D8',
  '#B71C1C', '#D32F2F', '#E65100', '#F57C00', '#F9A825', '#FBC02D',
  '#1B5E20', '#388E3C', '#0D47A1', '#1565C0', '#4A148C', '#7B1FA2',
  '#FFFFFF', '#E0E0E0', '#9E9E9E', '#616161', '#212121', '#000000',
  '#FFCDD2', '#C8E6C9', '#BBDEFB', '#E1BEE7', '#FFE0B2', '#B2DFDB',
]

// ── Color helpers ──────────────────────────────────────────────────────────

function rgbaToHex(rgba: number): string {
  const r = (rgba >>> 24) & 0xff
  const g = (rgba >>> 16) & 0xff
  const b = (rgba >>> 8) & 0xff
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
}

function alphaOf(rgba: number): number {
  return rgba & 0xff
}

function hexAlphaToRgba(hex: string, alpha: number): number {
  const clean = hex.startsWith('#') ? hex.slice(1) : hex
  const r = parseInt(clean.slice(0, 2), 16)
  const g = parseInt(clean.slice(2, 4), 16)
  const b = parseInt(clean.slice(4, 6), 16)
  return ((r << 24) | (g << 16) | (b << 8) | (alpha & 0xff)) >>> 0
}

function rgbaToCss(rgba: number): string {
  const r = (rgba >>> 24) & 0xff
  const g = (rgba >>> 16) & 0xff
  const b = (rgba >>> 8) & 0xff
  const a = (rgba & 0xff) / 255
  return `rgba(${r},${g},${b},${a.toFixed(2)})`
}

// ── Props / emits ──────────────────────────────────────────────────────────

interface Props {
  /** u32 RGBA packed colour (0xRRGGBBAA). Required when showColor is true. */
  color?: number
  lineStyle: string
  lineWidth: number
  lineWidthOptions?: number[]
  /** Ordered list of style values to show as buttons. */
  lineStyleOptions?: string[]
  showColor?: boolean
  showLineStyle?: boolean
  showLineWidth?: boolean
  side?: 'top' | 'bottom' | 'left' | 'right'
  align?: 'start' | 'center' | 'end'
  /** 'sm' = h-7 (28 px), 'md' = h-9 (36 px, default). Controls the default trigger height. */
  size?: 'sm' | 'md'
  /** Extra Tailwind classes merged onto the default trigger button. */
  triggerClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  color: 0xff0000ff,
  lineWidthOptions: () => [1, 2, 3, 4],
  lineStyleOptions: () => ['solid', 'dashed', 'dotted'],
  showColor: true,
  showLineStyle: true,
  showLineWidth: true,
  side: 'bottom',
  align: 'end',
  size: 'md',
})

const emit = defineEmits<{
  'update:color': [v: number]
  'update:lineStyle': [v: string]
  'update:lineWidth': [v: number]
}>()

const { t } = useI18n()

const open = ref(false)

const _openCount = inject<Ref<number>>('openPopoverCount', ref(0))
watch(open, (isOpen) => { _openCount.value += isOpen ? 1 : -1 }, { flush: 'sync' })
onUnmounted(() => { if (open.value) _openCount.value-- })

// ── Derived colour state ───────────────────────────────────────────────────

const currentHex = computed(() => rgbaToHex(props.color))
const currentAlpha = computed(() => alphaOf(props.color))
const previewCss = computed(() => rgbaToCss(props.color))
const swatchBackground = computed(() =>
  `linear-gradient(${previewCss.value}, ${previewCss.value}), repeating-conic-gradient(#808080 0% 25%, transparent 0% 50%) 50%/6px 6px`
)

// ── Line helpers ───────────────────────────────────────────────────────────

function lineStyleDash(style: string): string {
  const s = style.toLowerCase()
  if (s === 'dashed') return '6 3'
  if (s === 'dotted') return '2 2'
  return 'none'
}

function isActiveStyle(style: string): boolean {
  return style.toLowerCase() === props.lineStyle.toLowerCase()
}

function lineWidthDisplaySize(w: number): number {
  const idx = props.lineWidthOptions.indexOf(w)
  return idx >= 0 ? idx + 1 : Math.min(Math.round(w), 4)
}

// ── Trigger slot values ───────────────────────────────────────────────────

const triggerDash = () => lineStyleDash(props.lineStyle)
const triggerStrokeWidth = () => Math.min(lineWidthDisplaySize(props.lineWidth), 4)
const triggerTitle = () => {
  if (props.showLineStyle && props.showLineWidth) return `${props.lineStyle}, ${props.lineWidth}px`
  if (props.showLineStyle) return props.lineStyle
  if (props.showLineWidth) return `${props.lineWidth}px`
  return ''
}

// ── Colour event handlers ─────────────────────────────────────────────────

function onPaletteSelect(hex: string) {
  emit('update:color', hexAlphaToRgba(hex, currentAlpha.value))
  open.value = false
}

function onHexInput(hex: string) {
  if (/^#[0-9a-fA-F]{6}$/.test(hex)) {
    emit('update:color', hexAlphaToRgba(hex, currentAlpha.value))
  }
}

function onAlphaInput(alpha: number) {
  emit('update:color', hexAlphaToRgba(currentHex.value, alpha))
}
</script>

<template>
  <PopoverRoot v-model:open="open">
    <PopoverTrigger as-child>
      <slot
        name="trigger"
        :dash="triggerDash()"
        :stroke-width="triggerStrokeWidth()"
        :preview-css="previewCss"
        :title="triggerTitle()"
      >
        <!-- Default trigger: consistent style across all dialogs/toolbars -->
        <button
          type="button"
          :class="cn(
            size === 'sm' ? 'h-7 px-2' : 'h-9 px-2.5',
            'rounded-md border border-border/70 bg-muted',
            'flex items-center gap-1.5 cursor-pointer',
            'hover:bg-muted/70 hover:border-border transition-colors',
            triggerClass,
          )"
          :title="triggerTitle()"
        >
          <span
            v-if="showColor"
            class="w-3.5 h-3.5 rounded-sm shrink-0 border border-black/10 dark:border-white/10"
            :style="{ background: swatchBackground }"
          />
          <svg viewBox="0 0 52 14" class="w-12 h-3.5 shrink-0">
            <line
              x1="2" y1="7" x2="50" y2="7"
              :stroke="showColor ? previewCss : 'currentColor'"
              :stroke-width="triggerStrokeWidth()"
              :stroke-dasharray="triggerDash()"
              stroke-linecap="butt"
            />
          </svg>
        </button>
      </slot>
    </PopoverTrigger>

    <Teleport to="body">
      <div
        v-if="open"
        data-popover-overlay
        style="position: fixed; inset: 0; z-index: 199;"
        @pointerdown.stop
        @click.stop="open = false"
      />
    </Teleport>
    <PopoverPortal>
      <PopoverContent
        :side="side"
        :align="align"
        :side-offset="4"
        :collision-padding="8"
        class="z-[200] w-56 rounded-xl border bg-popover p-3 text-popover-foreground shadow-lg space-y-3 overflow-y-auto max-h-[var(--radix-popover-content-available-height)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
        @interact-outside="(e: Event) => { if ((e as any).detail?.originalEvent?.target?.closest?.('[data-popover-overlay]')) e.preventDefault() }"
      >
        <!-- ── Colour section ── -->
        <div v-if="showColor">
          <div class="grid grid-cols-6 gap-1">
            <button
              v-for="c in COLOR_PALETTE"
              :key="c"
              type="button"
              class="h-6 w-full rounded border border-transparent hover:border-foreground/50 hover:scale-105 transition-all"
              :style="{ background: c }"
              @click="onPaletteSelect(c)"
            />
          </div>
          <div class="flex items-center gap-1.5 mt-2">
            <div
              class="h-8 w-8 rounded-md border border-input/80 shrink-0 shadow-sm"
              :style="{ background: swatchBackground }"
            />
            <Input
              :model-value="currentHex"
              class="h-8 text-xs font-mono flex-1"
              placeholder="#000000"
              @update:model-value="(v) => onHexInput(v as string)"
            />
          </div>
          <div class="flex items-center gap-2 mt-1.5">
            <div
              class="flex-1 h-3 rounded-full relative"
              style="background: repeating-conic-gradient(#808080 0% 25%, transparent 0% 50%) 50%/6px 6px"
            >
              <div
                class="absolute inset-0 rounded-full"
                :style="{ background: `linear-gradient(to right, transparent, ${currentHex})` }"
              />
              <AlphaSlider :value="currentAlpha" @update:value="onAlphaInput" />
            </div>
            <span class="text-[11px] text-muted-foreground w-8 text-right tabular-nums">
              {{ Math.round(currentAlpha / 255 * 100) }}%
            </span>
          </div>
        </div>

        <!-- ── Line style section ── -->
        <div v-if="showLineStyle">
          <div class="text-xs text-muted-foreground mb-1.5">{{ t('dialog.lineStyle') }}</div>
          <div class="flex gap-1">
            <button
              v-for="ls in lineStyleOptions"
              :key="ls"
              type="button"
              class="h-8 flex-1 rounded-md border flex items-center justify-center transition-colors"
              :class="isActiveStyle(ls)
                ? 'border-primary bg-primary/10'
                : 'bg-muted/50 border-border hover:bg-muted'"
              @click="emit('update:lineStyle', ls); open = false"
            >
              <svg viewBox="0 0 32 8" class="w-7 h-2">
                <line
                  x1="0" y1="4" x2="32" y2="4"
                  stroke="currentColor" stroke-width="2"
                  :stroke-dasharray="lineStyleDash(ls)"
                  stroke-linecap="butt"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- ── Line width section ── -->
        <div v-if="showLineWidth">
          <div class="text-xs text-muted-foreground mb-1.5">{{ t('dialog.lineWidth') }}</div>
          <div class="flex gap-1">
            <button
              v-for="w in lineWidthOptions"
              :key="w"
              type="button"
              class="h-8 flex-1 rounded-md border flex items-center justify-center transition-colors"
              :class="lineWidth === w
                ? 'border-primary bg-primary/10'
                : 'bg-muted/50 border-border hover:bg-muted'"
              @click="emit('update:lineWidth', w); open = false"
            >
              <svg viewBox="0 0 20 12" class="w-5 h-3">
                <line
                  x1="2" y1="6" x2="18" y2="6"
                  stroke="currentColor"
                  :stroke-width="lineWidthDisplaySize(w)"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
