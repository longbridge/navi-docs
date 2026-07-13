<script setup lang="ts">
/**
 * K-line style + properties dialog.
 * Opened by double-clicking a candlestick bar on the chart.
 * Layout and widget rendering identical to AnnotationPropertiesDialog,
 * sharing the same PropertyRows component.
 */

import { ref, watch, provide } from 'vue'
import { DialogRoot } from 'radix-vue'
import { RotateCcw } from 'lucide-vue-next'
import DialogContent from './ui/DialogContent.vue'
import DialogFooter from './ui/DialogFooter.vue'
import DialogHeader from './ui/DialogHeader.vue'
import DialogTitle from './ui/DialogTitle.vue'
import DialogDescription from './ui/DialogDescription.vue'
import Button from './ui/Button.vue'
import PropertyRows from './PropertyRows.vue'
import CandlestickStyleButton from './CandlestickStyleButton.vue'
import { useI18n } from 'vue-i18n'
import type { PropertyDescriptor, PropertyValue, PropertyValueResult } from '../composables/use-wasm'
import type { CandlestickStyleKey } from '../constants/candlestick-styles'

const props = defineProps<{
  open: boolean
  engine: { chart: { getCandlestickProperties(): any; getCandlestickProperty(name: string): any; setCandlestickProperty(name: string, value: unknown): boolean; resetCandlestickConfig(): void } } | null
  candlestickStyle: CandlestickStyleKey
}>()

const emit = defineEmits<{
  (e: 'update:open', v: boolean): void
  (e: 'style-change', key: CandlestickStyleKey): void
}>()

// ── Prevent outside-click dismissal while inner popovers are open ─────────

const { t } = useI18n()
const openPopoverCount = ref(0)
provide('openPopoverCount', openPopoverCount)

// ── Property state ────────────────────────────────────────────────────────

const descriptors = ref<PropertyDescriptor[]>([])
const values = ref<Record<string, PropertyValueResult>>({})

function loadProperties() {
  const chart = props.engine?.chart
  if (!chart) return
  const descs = chart.getCandlestickProperties() ?? []
  descriptors.value = descs
  const vals: Record<string, PropertyValueResult> = {}
  for (const d of descs) {
    vals[d.name] = chart.getCandlestickProperty(d.name)
  }
  values.value = vals
}

watch(() => props.open, (v) => { if (v) loadProperties() })

// ── Property change ────────────────────────────────────────────────────────

function onPropertyChange(name: string, value: PropertyValue) {
  props.engine?.chart.setCandlestickProperty(name, value as any)
  // Reload descriptors + values after every change: the visible property
  // list may depend on the current values (e.g. fillMode hides stroke or
  // gradient fields), so a full reload is always correct.
  loadProperties()
}

// ── Style change ───────────────────────────────────────────────────────────

function onStyleChange(key: CandlestickStyleKey) {
  emit('style-change', key)
  // Reload descriptors — each style exposes different properties.
  setTimeout(loadProperties, 0)
}

// ── Reset ──────────────────────────────────────────────────────────────────

function resetToDefaults() {
  props.engine?.chart.resetCandlestickConfig()
  loadProperties()
}
</script>

<template>
  <DialogRoot :open="open" @update:open="emit('update:open', $event)">
    <DialogContent
      class="max-w-[480px] !p-0 !gap-0 overflow-clip"
      @pointer-down-outside="(e: Event) => { if (openPopoverCount > 0) e.preventDefault() }"
    >
      <DialogHeader class="px-5 pt-4 pb-3 border-b border-border/50 flex-row items-center gap-3">
        <DialogTitle>{{ t('candlestickStyle.dialog.title') }}</DialogTitle>
        <DialogDescription class="sr-only">{{ t('candlestickStyle.dialog.title') }}</DialogDescription>
        <CandlestickStyleButton :active-style="candlestickStyle" :show-label="true" @select="onStyleChange" />
      </DialogHeader>

      <!-- Per-style property rows -->
      <div class="cs-props">
        <PropertyRows
          :descriptors="descriptors"
          :values="values"
          @property-change="onPropertyChange"
        />
      </div>

      <DialogFooter class="border-t border-border/40 px-5 py-3 bg-muted/15">
        <Button variant="ghost" size="sm" class="text-muted-foreground hover:text-foreground gap-1.5" @click="resetToDefaults">
          <RotateCcw class="h-3.5 w-3.5" />
          Reset to defaults
        </Button>
        <div class="flex-1" />
        <Button size="sm" @click="emit('update:open', false)">OK</Button>
      </DialogFooter>
    </DialogContent>
  </DialogRoot>
</template>

<style scoped>
.cs-props {
  max-height: 60vh;
  overflow-y: auto;
}
</style>
