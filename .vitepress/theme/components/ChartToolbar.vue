<script setup lang="ts">
import { ref } from 'vue'
import { SelectRoot, SelectGroup, SelectValue } from 'radix-vue'
import { useI18n } from 'vue-i18n'
import { STOCKS, SECURITY_TIMEFRAMES, type StockDef, type SecurityTimeframe } from '../composables/use-wasm'
import SelectTrigger from './ui/SelectTrigger.vue'
import SelectContent from './ui/SelectContent.vue'
import SelectItem from './ui/SelectItem.vue'
import CandlestickStyleButton from './CandlestickStyleButton.vue'
import type { CandlestickStyleKey } from '../constants/candlestick-styles'
import { ChevronsUpDown } from 'lucide-vue-next'

const { t } = useI18n()
const stockSelectOpen = ref(false)

const props = defineProps<{
  activeStock: StockDef
  currentTimeframe: SecurityTimeframe
  candlestickStyle?: CandlestickStyleKey
  showLastPriceLine?: boolean
  showCyq?: boolean
}>()

const emit = defineEmits<{
  'stock-change': [stock: StockDef]
  'timeframe-change': [tf: SecurityTimeframe]
  'candlestick-style-change': [key: CandlestickStyleKey]
  'last-price-line-change': [value: boolean]
  'cyq-change': [value: boolean]
}>()

function onStockChange(value: string) {
  const stock = STOCKS.find(s => s.ticker === value)
  if (stock) emit('stock-change', stock)
}

</script>

<template>
  <div class="flex min-h-10 shrink-0 items-center gap-1.5 border-b border-border bg-background px-3 py-1.5">
    <!-- Timeframe selector -->
    <div class="flex shrink-0 items-center rounded-md bg-muted p-0.5">
      <button
        v-for="tf in SECURITY_TIMEFRAMES"
        :key="tf"
        :title="t(`toolbar.timeframes.${tf}`)"
        class="inline-flex h-7 min-w-7 items-center justify-center rounded-sm px-1.5 text-xs font-medium transition-colors"
        :class="currentTimeframe === tf
          ? 'bg-primary/10 text-primary'
          : 'text-muted-foreground hover:bg-foreground/10 hover:text-foreground'"
        @click="emit('timeframe-change', tf)"
      >{{ tf }}</button>
    </div>

    <!-- Separator -->
    <div class="mx-0.5 h-5 w-px shrink-0 bg-border" />

    <!-- Candlestick style selector -->
    <CandlestickStyleButton
      :active-style="candlestickStyle ?? 'candlestick'"
      @select="emit('candlestick-style-change', $event)"
    />

    <!-- Separator -->
    <div class="mx-0.5 h-5 w-px shrink-0 bg-border" />

    <!-- Last price line toggle -->
    <button
      :title="t('toolbar.lastPriceLine')"
      class="inline-flex size-8 items-center justify-center rounded-md transition-colors"
      :class="showLastPriceLine !== false
        ? 'bg-primary/10 text-primary hover:bg-primary/15'
        : 'text-muted-foreground hover:bg-foreground/10 hover:text-foreground'"
      @click="emit('last-price-line-change', showLastPriceLine === false)"
    >
      <svg viewBox="0 0 16 16" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="1" y1="8" x2="15" y2="8" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 2" stroke-linecap="round"/>
      </svg>
    </button>

    <!-- Chip distribution (CYQ) toggle -->
    <button
      :title="t('toolbar.cyq')"
      class="inline-flex size-8 items-center justify-center rounded-md transition-colors"
      :class="showCyq
        ? 'bg-primary/10 text-primary hover:bg-primary/15'
        : 'text-muted-foreground hover:bg-foreground/10 hover:text-foreground'"
      @click="emit('cyq-change', !showCyq)"
    >
      <svg viewBox="0 0 16 16" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="2" y1="4" x2="10" y2="4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="2" y1="8" x2="14" y2="8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="2" y1="12" x2="6" y2="12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    </button>

    <!-- Stock selector: a quiet label until the user opens it. -->
    <SelectRoot
      v-model:open="stockSelectOpen"
      :model-value="activeStock.ticker"
      @update:model-value="onStockChange"
    >
      <SelectTrigger
        class="ml-auto h-8 shrink-0 text-xs transition-all"
        :hide-icon="!stockSelectOpen"
        :class="stockSelectOpen
          ? 'w-[clamp(14rem,24vw,20rem)] border-input bg-background shadow-sm'
          : 'w-auto max-w-[20rem] justify-start gap-2 border-transparent bg-transparent px-2 font-medium shadow-none hover:bg-foreground/10'"
      >
        <span class="truncate">{{ activeStock.name }}</span>
        <ChevronsUpDown v-if="!stockSelectOpen" class="size-3.5 shrink-0 text-muted-foreground" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem
            v-for="stock in STOCKS"
            :key="stock.ticker"
            :value="stock.ticker"
            class="pr-8"
          >
            <span class="flex w-full items-center justify-between gap-3">
              <span>{{ stock.name }}</span>
              <span class="text-xs text-muted-foreground">{{ stock.ticker }}</span>
            </span>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </SelectRoot>
  </div>
</template>
