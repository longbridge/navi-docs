<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

interface Bar {
  time: number;
  open: number;
  high: number;
  low: number;
  close: number;
}

const width = 760;
const height = 250;
const plot = { left: 14, right: 14, top: 22, bottom: 14 };
const bars = ref<Bar[]>([]);

onMounted(async () => {
  const response = await fetch("/data/security/AAPL-D.json");
  if (!response.ok) return;
  bars.value = ((await response.json()) as Bar[]).slice(-60);
});

const chart = computed(() => {
  if (!bars.value.length) return null;

  const values = bars.value;
  const innerWidth = width - plot.left - plot.right;
  const innerHeight = height - plot.top - plot.bottom;
  const minimum = Math.min(...values.map((bar) => bar.low));
  const maximum = Math.max(...values.map((bar) => bar.high));
  const padding = (maximum - minimum) * 0.08;
  const low = minimum - padding;
  const high = maximum + padding;
  const x = (index: number) =>
    plot.left + ((index + 0.5) / values.length) * innerWidth;
  const y = (value: number) =>
    plot.top + ((high - value) / (high - low)) * innerHeight;
  const candleWidth = Math.max(2, (innerWidth / values.length) * 0.58);

  const candles = values.map((bar, index) => ({
    ...bar,
    x: x(index),
    openY: y(bar.open),
    highY: y(bar.high),
    lowY: y(bar.low),
    closeY: y(bar.close),
    width: candleWidth,
    rising: bar.close >= bar.open,
  }));

  const smaPoints = values
    .map((_, index) => {
      if (index < 13) return null;
      const window = values.slice(index - 13, index + 1);
      const average =
        window.reduce((sum, bar) => sum + bar.close, 0) / window.length;
      return `${x(index).toFixed(2)},${y(average).toFixed(2)}`;
    })
    .filter(Boolean)
    .join(" ");

  return { candles, smaPoints };
});
</script>

<template>
  <figure class="quick-start-chart">
    <div class="legend"><i /> AAPL · 1D · SMA 14</div>
    <svg
      v-if="chart"
      :viewBox="`0 0 ${width} ${height}`"
      role="img"
      aria-label="AAPL daily candlestick chart with a 14-period simple moving average"
    >
      <g v-for="candle in chart.candles" :key="candle.time" :class="candle.rising ? 'up' : 'down'">
        <line :x1="candle.x" :x2="candle.x" :y1="candle.highY" :y2="candle.lowY" />
        <rect
          :x="candle.x - candle.width / 2"
          :y="Math.min(candle.openY, candle.closeY)"
          :width="candle.width"
          :height="Math.max(1, Math.abs(candle.openY - candle.closeY))"
        />
      </g>
      <polyline class="sma" :points="chart.smaPoints" />
    </svg>
    <div v-else class="chart-loading">Loading chart…</div>
  </figure>
</template>

<style scoped>
.quick-start-chart {
  margin: 20px 0 28px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: #fff;
}
.legend {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 12px 14px 0;
  color: #67676c;
  font-size: 13px;
}
.legend i { width: 18px; height: 3px; border-radius: 2px; background: var(--chart-indicator-blue); }
svg { display: block; width: 100%; height: auto; }
.up line, .up rect { fill: var(--up-color); stroke: var(--up-color); }
.down line, .down rect { fill: var(--down-color); stroke: var(--down-color); }
.sma { fill: none; stroke: var(--chart-indicator-blue); stroke-width: 2.4; stroke-linejoin: round; stroke-linecap: round; }
.chart-loading { min-height: 220px; display: grid; place-items: center; color: #67676c; }
</style>
