<script setup lang="ts">
/**
 * Uncontrolled alpha range slider (0–255).
 *
 * Using Vue's reactive `:value` binding on <input type="range"> causes the
 * browser to re-set the thumb position on every re-render, which interrupts
 * the native drag tracking on Chrome/Windows. This component avoids that by
 * setting el.value imperatively via a template ref, skipping external syncs
 * while the thumb is held down.
 */

import { ref, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps<{ value: number }>()
const emit = defineEmits<{ 'update:value': [v: number] }>()

const inputEl = ref<HTMLInputElement | null>(null)
let isDragging = false

// Set initial value when the element mounts (e.g. when a Popover/Dialog opens).
watch(inputEl, (el) => {
  if (el) el.value = String(props.value)
})

// Sync external changes (palette pick, hex input) but not during drag.
watch(
  () => props.value,
  (v) => {
    if (!isDragging && inputEl.value) inputEl.value.value = String(v)
  },
)

function onPointerDown() {
  isDragging = true
}
function clearDrag() {
  isDragging = false
}
function onInput(e: Event) {
  emit('update:value', parseInt((e.target as HTMLInputElement).value))
}

// Release outside the element (fast drag) still clears the flag.
onMounted(() => window.addEventListener('pointerup', clearDrag, { capture: true }))
onUnmounted(() => window.removeEventListener('pointerup', clearDrag, { capture: true }))
</script>

<template>
  <input
    ref="inputEl"
    type="range"
    min="0"
    max="255"
    step="1"
    class="alpha-slider absolute inset-0 w-full h-full cursor-pointer"
    @pointerdown="onPointerDown"
    @input="onInput"
  />
</template>

<style>
/* Global (not scoped) so the styles reach elements rendered inside Radix Vue
   Portal / Teleport targets. */
.alpha-slider {
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  margin: 0;
}
.alpha-slider::-webkit-slider-runnable-track {
  background: transparent;
  height: 100%;
  border-radius: 9999px;
}
.alpha-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: white;
  border: 2px solid hsl(var(--border));
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.35);
  cursor: pointer;
  margin-top: -1.5px;
}
.alpha-slider::-moz-range-track {
  background: transparent;
  height: 100%;
  border-radius: 9999px;
}
.alpha-slider::-moz-range-thumb {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: white;
  border: 2px solid hsl(var(--border));
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.35);
  cursor: pointer;
}
</style>
