/**
 * Vue composable for loading and managing the Chart + Analyzer WASM instances.
 *
 * Handles parallel loading of WASM modules + candlestick data, then
 * initializes a Chart and an Analyzer bound to a canvas element.
 */

import { ref, shallowRef, type Ref, type ShallowRef } from 'vue'
import { PlaygroundEngine, StaticCandlestickAdapter, StaticDataProvider } from './playground-engine'

/** Stock definition for the stock selector. */
export interface StockDef {
  symbol: string
  ticker: string
  name: string
}

/** Available stocks in the playground. */
export const STOCKS: StockDef[] = [
  { symbol: 'NASDAQ:AAPL', ticker: 'AAPL', name: 'Apple Inc.' },
  { symbol: 'NASDAQ:MSFT', ticker: 'MSFT', name: 'Microsoft Corporation' },
  { symbol: 'NASDAQ:GOOGL', ticker: 'GOOGL', name: 'Alphabet Inc.' },
  { symbol: 'NASDAQ:AMZN', ticker: 'AMZN', name: 'Amazon.com Inc.' },
  { symbol: 'NASDAQ:TSLA', ticker: 'TSLA', name: 'Tesla Inc.' },
  { symbol: 'NASDAQ:META', ticker: 'META', name: 'Meta Platforms Inc.' },
  { symbol: 'NASDAQ:NVDA', ticker: 'NVDA', name: 'NVIDIA Corporation' },
  { symbol: 'NYSE:JPM', ticker: 'JPM', name: 'JPMorgan Chase & Co.' },
  { symbol: 'NYSE:V', ticker: 'V', name: 'Visa Inc.' },
  { symbol: 'NYSE:WMT', ticker: 'WMT', name: 'Walmart Inc.' },
  { symbol: 'NASDAQ:NFLX', ticker: 'NFLX', name: 'Netflix Inc.' },
]

/** All supported timeframes for the playground. */
export const SECURITY_TIMEFRAMES = ['1', '5', '15', '30', '60', 'D', 'W', 'M'] as const
export type SecurityTimeframe = (typeof SECURITY_TIMEFRAMES)[number]

export interface SnapshotRestoreResult {
  tag: string
  success: boolean
  error?: string
}

// === Annotation property descriptor types ===
//
// Mirrors `crate::annotation::properties::{PropertyDescriptor, PropertyKind,
// PropertyValue, PropertyValueResult}`. All field names are camelCase via the
// Rust-side `#[serde(rename_all = "camelCase")]` annotation.
//
// Serde tagging convention (external tagging):
//   - PropertyValue:       { color: number } | { stroke: StrokeBundle } | …
//   - PropertyValueResult: PropertyValue | 'none' | 'mixed'
//   - PropertyKind:        unit variants → plain string; struct variants → { stroke: {…} }

/** One localised option inside a `PropertyKind::Enum`. */
export interface EnumOption {
  displayName: string
}

/** Which sub-controls to show for a `stroke` property. */
export interface StrokeFlags {
  color: boolean
  width: boolean
  style: boolean
}

/** Which sub-controls to show for a `textStyle` property. */
export interface TextStyleFlags {
  color: boolean
  size: boolean
  bold: boolean
  italic: boolean
}

/** Bundle payload for [`PropertyValue::Stroke`]. */
export interface StrokeBundle {
  color: number
  width: number
  style: 'solid' | 'dashed' | 'dotted'
}

/** Bundle payload for [`PropertyValue::TextStyle`]. */
export interface TextStyleBundle {
  color: number
  fontSize: number
  bold: boolean
  italic: boolean
}

/** Bundle payload for [`PropertyValue::PercentWithStroke`]. */
export interface PercentWithStrokeBundle {
  percent: number
  stroke: StrokeBundle
}

/** Bundle payload for [`PropertyValue::EnableablePercentWithStroke`]. */
export interface EnableablePercentWithStrokeBundle {
  enabled: boolean
  value: PercentWithStrokeBundle
}

/** Bundle payload for [`PropertyValue::Enableable`]. */
export interface EnableableBundle {
  enabled: boolean
  value: PropertyValue
}

/** Value for one item inside a `groupItems` / `groupItem`. */
export interface GroupItemValue {
  enabled: boolean
  number: number
  value: PropertyValue
}

/**
 * Property type — drives which UI widget renders for this descriptor.
 * Unit variants are plain strings; struct variants are `{ variantName: payload }`.
 */
export type PropertyKind =
  | 'fill'
  | 'textAlign'
  | 'bool'
  | 'text'
  | 'alpha'
  | { textVAlign: { options: EnumOption[] } }
  | { enum: { options: EnumOption[] } }
  | { flags: { options: EnumOption[] } }
  | { stroke: { flags: StrokeFlags; lineWidthOptions?: number[] } }
  | { textStyle: { flags: TextStyleFlags } }
  | { number: { min?: number; max?: number; step?: number } }
  | { group: { hasNumber: boolean; inline: boolean; items: PropertyDescriptor[] } }
  | { percentWithStroke: { lineWidthOptions?: number[] } }
  | { enableablePercentWithStroke: { lineWidthOptions?: number[] } }

/**
 * Property value at the WASM boundary. External-tagged: each variant is an
 * object with a single key equal to the lowercase variant name.
 *
 * Color values are u32 RGBA (0xRRGGBBAA). LineStyle / TextAlign use lowercase
 * variant names (`solid`, `dashed`, …; `left`, `center`, `right`).
 */
export type PropertyValue =
  | { color: number }
  | { float: number }
  | { bool: boolean }
  | { lineStyle: 'solid' | 'dashed' | 'dotted' }
  | { textAlign: 'left' | 'center' | 'right' }
  | { enum: number }
  | { text: string }
  | { int: number }
  | { stroke: StrokeBundle }
  | { textStyle: TextStyleBundle }
  | { enableable: EnableableBundle }
  | { groupItems: GroupItemValue[] }
  | { groupItem: GroupItemValue }
  | { percentWithStroke: PercentWithStrokeBundle }
  | { enableablePercentWithStroke: EnableablePercentWithStrokeBundle }

/**
 * Outcome of reading a single property. External-tagged:
 *   - a definite value → `{ value: PropertyValue }`
 *   - no property with that name → `'none'`
 *   - fields disagree → `'mixed'`
 */
export type PropertyValueResult =
  | { value: PropertyValue }
  | 'none'
  | 'mixed'

/**
 * One editable property of an annotation. The WASM resolver fills in
 * `displayName` / `kind.options[].displayName` against the chart crate's
 * current locale before returning.
 */
export interface PropertyDescriptor {
  name: string
  displayName: string
  kind: PropertyKind
  /** When true, a checkbox is rendered beside the label. */
  enableable: boolean
  /** Which settings tab this property appears in. Defaults to "style". */
  category?: 'style' | 'inputs'
  /** Optional tooltip text shown when the user hovers over the info icon. */
  tooltip?: string
}

const DEFAULT_STOCK = STOCKS[0]
const DEFAULT_TIMEFRAME: SecurityTimeframe = 'D'
const MARKET_UP_COLOR = 0x00ADA2FF
const MARKET_DOWN_COLOR = 0xFF3A75FF

function withMarketColors(theme: any): any {
  return {
    ...theme,
    bull: MARKET_UP_COLOR,
    bear: MARKET_DOWN_COLOR,
    bull_text: MARKET_UP_COLOR,
    bear_text: MARKET_DOWN_COLOR,
  }
}

export interface UseWasm {
  engine: ShallowRef<PlaygroundEngine | null>
  loading: Ref<boolean>
  error: Ref<string | null>
  activeStock: Ref<StockDef>
  currentTimeframe: Ref<SecurityTimeframe>
  init: (canvas: HTMLCanvasElement) => Promise<void>
  changeStock: (stock: StockDef) => void
  changeTimeframe: (tf: SecurityTimeframe) => void
  setTheme: (dark: boolean) => void
}

export function useWasm(): UseWasm {
  const engine = shallowRef<PlaygroundEngine | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)
  const activeStock = ref<StockDef>(DEFAULT_STOCK)
  const currentTimeframe = ref<SecurityTimeframe>(DEFAULT_TIMEFRAME)

  let base = '/'
  // Kept after init so setTheme can call darkTheme()/lightTheme().
  let wasmChart: typeof import('../../../wasm-pkg/chart/navi_chart_wasm.js') | null = null

  function setTheme(dark: boolean) {
    if (!engine.value || !wasmChart) return
    engine.value.chart.setTheme(withMarketColors(dark ? wasmChart.darkTheme() : wasmChart.lightTheme()))
  }

  async function init(canvas: HTMLCanvasElement) {
    if (engine.value) return
    loading.value = true
    error.value = null

    try {
      base = import.meta.env.BASE_URL ?? '/'

      // Load both WASM modules in parallel.
      const [chartWasm, lspWasm] = await Promise.all([
        import('../../../wasm-pkg/chart/navi_chart_wasm.js'),
        import('../../../wasm-pkg/lsp/navi_lsp_wasm.js'),
      ])
      wasmChart = chartWasm
      await Promise.all([chartWasm.default(), lspWasm.default()])

      // Pre-load all security data files and register them in the provider.
      const provider = new StaticDataProvider()
      await Promise.all(
        STOCKS.flatMap(({ symbol, ticker }) =>
          SECURITY_TIMEFRAMES.map(async (tf) => {
            try {
              const res = await fetch(`${base}data/security/${ticker}-${tf}.json`)
              if (!res.ok) return
              const bars = await res.json()
              provider.register(symbol, tf, bars)
            } catch {
              // Silently ignore missing files (e.g. during development before
              // download_security_data.py has been run).
            }
          }),
        ),
      )

      const isDark = document.documentElement.classList.contains('dark')
      const locale = document.documentElement.lang || 'en'

      const localProvider = new chartWasm.LocalChartProvider(new StaticCandlestickAdapter(provider))
      const chart = new chartWasm.Chart(
        canvas,
        localProvider,
        locale,
        withMarketColors(isDark ? chartWasm.darkTheme() : chartWasm.lightTheme()),
      )
      chart.setSymbol(DEFAULT_STOCK.symbol)
      chart.setTimeframe(DEFAULT_TIMEFRAME)

      const analyzer = lspWasm.Analyzer.withLocale(locale)

      engine.value = new PlaygroundEngine(chart, analyzer)
    } catch (e) {
      error.value = e instanceof Error ? e.message : String(e)
      console.error('[use-wasm] Failed to initialize:', e)
    } finally {
      loading.value = false
    }
  }

  function changeStock(stock: StockDef) {
    const eng = engine.value
    if (!eng) return
    eng.chart.setSymbol(stock.symbol)
    activeStock.value = stock
  }

  function changeTimeframe(tf: SecurityTimeframe) {
    const eng = engine.value
    if (!eng) return
    eng.chart.setTimeframe(tf)
    currentTimeframe.value = tf
  }

  return {
    engine,
    loading,
    error,
    activeStock,
    currentTimeframe,
    init,
    changeStock,
    changeTimeframe,
    setTheme,
  }
}
