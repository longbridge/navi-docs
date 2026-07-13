<script setup lang="ts">
import { SelectRoot, SelectGroup, SelectValue } from 'radix-vue'
import { useI18n } from 'vue-i18n'
import { STOCKS, SECURITY_TIMEFRAMES, type StockDef, type SecurityTimeframe } from '../composables/use-wasm'
import SelectTrigger from './ui/SelectTrigger.vue'
import SelectContent from './ui/SelectContent.vue'
import SelectItem from './ui/SelectItem.vue'
import CandlestickStyleButton from './CandlestickStyleButton.vue'
import type { CandlestickStyleKey } from '../constants/candlestick-styles'

const { t } = useI18n()

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
  <div class="flex items-center gap-1 border-b border-border bg-muted/50 px-2 py-1 shrink-0">
    <!-- Stock selector -->
    <SelectRoot
      :model-value="activeStock.ticker"
      @update:model-value="onStockChange"
    >
      <SelectTrigger class="h-7 w-[300px] shrink-0 text-xs">
        <span class="truncate">{{ activeStock.name }}</span>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem
            v-for="stock in STOCKS"
            :key="stock.ticker"
            :value="stock.ticker"
            class="pr-8"
          >
            <span class="flex items-center justify-between gap-3 w-full">
              <span>{{ stock.name }}</span>
              <span class="text-xs text-muted-foreground">{{ stock.ticker }}</span>
            </span>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </SelectRoot>

    <!-- Timeframe selector -->
    <div class="flex items-center shrink-0">
      <button
        v-for="tf in SECURITY_TIMEFRAMES"
        :key="tf"
        :title="t(`toolbar.timeframes.${tf}`)"
        class="inline-flex items-center justify-center h-7 min-w-[28px] px-1.5 rounded-md text-xs font-medium transition-colors"
        :class="currentTimeframe === tf
          ? 'bg-primary text-primary-foreground'
          : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'"
        @click="emit('timeframe-change', tf)"
      >{{ tf }}</button>
    </div>

    <!-- Separator -->
    <div class="w-px h-4 bg-border shrink-0 mx-0.5" />

    <!-- Candlestick style selector -->
    <CandlestickStyleButton
      :active-style="candlestickStyle ?? 'candlestick'"
      @select="emit('candlestick-style-change', $event)"
    />

    <!-- Separator -->
    <div class="w-px h-4 bg-border shrink-0 mx-0.5" />

    <!-- Last price line toggle -->
    <button
      :title="t('toolbar.lastPriceLine')"
      class="inline-flex items-center justify-center h-7 w-7 rounded-md transition-colors"
      :class="showLastPriceLine !== false
        ? 'text-foreground hover:bg-accent hover:text-accent-foreground'
        : 'text-muted-foreground/40 hover:bg-accent hover:text-muted-foreground'"
      @click="emit('last-price-line-change', showLastPriceLine === false)"
    >
      <svg viewBox="0 0 16 16" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="1" y1="8" x2="15" y2="8" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 2" stroke-linecap="round"/>
      </svg>
    </button>

    <!-- Chip distribution (CYQ) toggle -->
    <button
      :title="t('toolbar.cyq')"
      class="inline-flex items-center justify-center h-7 w-7 rounded-md transition-colors"
      :class="showCyq
        ? 'text-foreground hover:bg-accent hover:text-accent-foreground'
        : 'text-muted-foreground/40 hover:bg-accent hover:text-muted-foreground'"
      @click="emit('cyq-change', !showCyq)"
    >
      <svg viewBox="0 0 16 16" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="2" y1="4" x2="10" y2="4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="2" y1="8" x2="14" y2="8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="2" y1="12" x2="6" y2="12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    </button>
  </div>
</template>
