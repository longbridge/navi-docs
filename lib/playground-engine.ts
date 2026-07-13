import type { Analyzer } from '@/wasm-pkg/lsp/navi_lsp_wasm';
import type { Chart } from '@/wasm-pkg/chart/navi_chart_wasm';

export class PlaygroundEngine {
  constructor(public readonly chart: Chart, public readonly analyzer: Analyzer) {}
}

export class StaticDataProvider {
  private store = new Map<string, unknown[]>();

  register(symbol: string, timeframe: string, bars: unknown[]) {
    this.store.set(`${symbol}:${timeframe}`, bars);
  }

  barsFor(symbol: string, timeframe: string, fromTime = 0): any[] {
    return (this.store.get(`${symbol}:${timeframe}`) ?? []).filter((bar: any) => (bar.time ?? 0) >= fromTime);
  }
}

export class StaticCandlestickAdapter {
  constructor(private readonly data: StaticDataProvider) {}

  async *candlesticks(symbol: string, timeframe: string, fromTime: number, count: number | null) {
    const all = this.data.barsFor(symbol, timeframe, fromTime);
    const bars = count != null && count > 0 ? all.slice(-count) : all;
    for (const bar of bars) yield { bar: { tradeSession: 'regular', ask: Number.NaN, bid: Number.NaN, ...bar } };
    yield 'historyEnd';
  }

  async historyBarsBefore(symbol: string, timeframe: string, beforeTime: number, count: number) {
    return this.data.barsFor(symbol, timeframe).filter((bar) => (bar.time ?? 0) < beforeTime).slice(-count).map((bar) => ({
      tradeSession: 'regular', ask: Number.NaN, bid: Number.NaN, turnover: 0, turnoverRate: Number.NaN, ...bar,
    }));
  }
}
