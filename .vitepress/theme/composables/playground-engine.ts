/**
 * PlaygroundEngine wraps the Chart and Analyzer WASM instances together,
 * providing a single object to pass between composables and components.
 *
 * StaticCandlestickAdapter implements the JsDataProvider.candlesticks()
 * interface expected by the WASM Chart constructor, backed by StaticDataProvider.
 */

import type { Chart } from '../../../wasm-pkg/chart/navi_chart_wasm'
import type { Analyzer } from '../../../wasm-pkg/lsp/navi_lsp_wasm'

export type { Chart, Analyzer }

/** Pairs the chart renderer with the language analyzer. */
export class PlaygroundEngine {
  constructor(
    public readonly chart: Chart,
    public readonly analyzer: Analyzer,
  ) {}
}

/**
 * Static K-line store.
 *
 * `time` is a plain JS number (not BigInt). serde_wasm_bindgen deserializes
 * i64 via `as_f64()` which works for all timestamps in the safe integer range.
 */
export class StaticDataProvider {
  private store = new Map<string, any[]>()

  register(symbol: string, tf: string, bars: any[]) {
    this.store.set(`${symbol}:${tf}`, bars)
  }

  barsFor(symbol: string, tf: string, fromTime = 0): any[] {
    return (this.store.get(`${symbol}:${tf}`) ?? []).filter(
      (b: any) => (b.time ?? 0) >= fromTime,
    )
  }
}

/**
 * Implements the JsDataProvider interface expected by the WASM Chart
 * constructor, backed by StaticDataProvider.
 *
 * `candlesticks` yields CandlestickItem values (serde external-tagged,
 * camelCase): `{ bar: { ... } }` for each bar, then `'historyEnd'`.
 *
 * `historyBarsBefore` returns a plain array of Candlestick objects with
 * `time < beforeTime`, newest-of-old last, for incremental history extension.
 */
export class StaticCandlestickAdapter {
  constructor(private readonly data: StaticDataProvider) {}

  async *candlesticks(symbol: string, tf: string, fromTime: number, count: number | null) {
    const allBars = this.data.barsFor(symbol, tf, fromTime)
    const bars = count != null && count > 0 ? allBars.slice(-count) : allBars
    for (const b of bars) {
      yield {
        bar: {
          tradeSession: 'regular',
          ask: NaN,
          bid: NaN,
          ...b,
        },
      }
    }
    yield 'historyEnd'
  }

  async historyBarsBefore(
    symbol: string,
    tf: string,
    beforeTime: number,
    count: number,
  ): Promise<object[]> {
    const allBars = this.data.barsFor(symbol, tf, 0)
    const filtered = allBars.filter((b: any) => (b.time ?? 0) < beforeTime)
    const slice = filtered.slice(-count)
    return slice.map((b: any) => ({
      tradeSession: 'regular',
      ask: NaN,
      bid: NaN,
      turnover: 0,
      turnoverRate: NaN,
      ...b,
    }))
  }
}
