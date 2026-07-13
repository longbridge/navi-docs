<script setup lang="ts">
/**
 * Popover-based color picker that supports full RGBA editing.
 * Accepts / emits a Rust-packed u32 color (0xRRGGBBAA layout).
 */

import { computed, ref, inject, watch, onUnmounted, type Ref } from 'vue'
import { PopoverRoot, PopoverTrigger, PopoverContent, PopoverPortal } from 'radix-vue'
import Input from './ui/Input.vue'
import AlphaSlider from './AlphaSlider.vue'

const props = defineProps<{
  modelValue: number
  /** Extra CSS class(es) applied to the trigger swatch button. */
  swatchClass?: string
  side?: 'top' | 'bottom' | 'left' | 'right'
  align?: 'start' | 'center' | 'end'
}>()

const emit = defineEmits<{
  'update:modelValue': [value: number]
}>()

// ── Color conversion helpers ─────────────────────────────────────────────────

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

// ── Derived state ────────────────────────────────────────────────────────────

const currentHex = computed(() => rgbaToHex(props.modelValue))
const currentAlpha = computed(() => alphaOf(props.modelValue))

const swatchCss = computed(() => {
  const a = currentAlpha.value
  if (a === 255) return currentHex.value
  const r = (props.modelValue >>> 24) & 0xff
  const g = (props.modelValue >>> 16) & 0xff
  const b = (props.modelValue >>> 8) & 0xff
  return `rgba(${r},${g},${b},${(a / 255).toFixed(2)})`
})

// ── Palette ──────────────────────────────────────────────────────────────────

const COLOR_PALETTE = [
  '#FF0000', '#FF5252', '#FF9800', '#FFB74D', '#FFEB3B', '#FFF176',
  '#4CAF50', '#81C784', '#2196F3', '#64B5F6', '#9C27B0', '#CE93D8',
  '#B71C1C', '#D32F2F', '#E65100', '#F57C00', '#F9A825', '#FBC02D',
  '#1B5E20', '#388E3C', '#0D47A1', '#1565C0', '#4A148C', '#7B1FA2',
  '#FFFFFF', '#E0E0E0', '#9E9E9E', '#616161', '#212121', '#000000',
  '#FFCDD2', '#C8E6C9', '#BBDEFB', '#E1BEE7', '#FFE0B2', '#B2DFDB',
]

const open = ref(false)

const _openCount = inject<Ref<number>>('openPopoverCount', ref(0))
watch(open, (isOpen) => { _openCount.value += isOpen ? 1 : -1 }, { flush: 'sync' })
onUnmounted(() => { if (open.value) _openCount.value-- })

// ── Event handlers ───────────────────────────────────────────────────────────

function onPaletteSelect(hex: string) {
  emit('update:modelValue', hexAlphaToRgba(hex, currentAlpha.value))
  open.value = false
}

function onHexInput(hex: string) {
  if (/^#[0-9a-fA-F]{6}$/.test(hex)) {
    emit('update:modelValue', hexAlphaToRgba(hex, currentAlpha.value))
  }
}

function onAlphaInput(alpha: number) {
  emit('update:modelValue', hexAlphaToRgba(currentHex.value, alpha))
}
</script>

<template>
  <PopoverRoot v-model:open="open">
    <PopoverTrigger as-child>
      <slot name="trigger" :swatch-css="swatchCss">
        <button
          class="color-picker-swatch"
          :class="swatchClass"
          :style="{ background: swatchCss }"
          type="button"
        />
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
        :side="side ?? 'bottom'"
        :align="align ?? 'start'"
        :side-offset="4"
        :collision-padding="8"
        class="z-[200] w-56 rounded-xl border bg-popover p-3 text-popover-foreground shadow-lg space-y-2 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
        @interact-outside="(e: Event) => { if ((e as any).detail?.originalEvent?.target?.closest?.('[data-popover-overlay]')) e.preventDefault() }"
      >
        <!-- Palette grid -->
        <div class="grid grid-cols-6 gap-1">
          <button
            v-for="c in COLOR_PALETTE"
            :key="c"
            class="h-6 w-full rounded border border-transparent hover:border-foreground/50 hover:scale-105 transition-all"
            :style="{ background: c }"
            type="button"
            @click="onPaletteSelect(c)"
          />
        </div>

        <!-- Hex input row -->
        <div class="flex items-center gap-1.5 mt-2">
          <div
            class="h-8 w-8 rounded-md border border-input/80 shrink-0 shadow-sm"
            :style="{ background: swatchCss }"
          />
          <Input
            :model-value="currentHex"
            class="h-8 text-xs font-mono flex-1"
            placeholder="#000000"
            @update:model-value="onHexInput($event as string)"
          />
        </div>

        <!-- Alpha slider -->
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
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>

<style scoped>
.color-picker-swatch {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: box-shadow 0.1s, border-color 0.1s;
  flex-shrink: 0;
  /* checkerboard behind to visualise transparency */
  background-clip: padding-box;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,.05);
}
.color-picker-swatch:hover {
  border-color: rgba(0, 0, 0, 0.45);
  box-shadow: 0 1px 4px rgba(0,0,0,.25);
}

</style>
