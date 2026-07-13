export interface StrategyReport {
  config: { initialCapital: number };
  performanceAll: { netProfit: number; netProfitPercent: number; maxDrawdown: number; maxDrawdownPercent: number; totalClosedTrades: number; percentProfitable: number | null; profitFactor: number | null };
  closedTrades: Array<{ tradeNum: number; entrySide: string; entryPrice: number; exitPrice: number; quantity: number; profit: number; profitPercent: number }>;
  openTrades: unknown[];
}
