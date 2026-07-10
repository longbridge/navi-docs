/** Strategy report data structures matching the WASM engine output (camelCase). */

export interface StrategyReport {
  config: StrategyConfigReport
  performanceAll: PerformanceMetrics
  performanceLong: PerformanceMetrics
  performanceShort: PerformanceMetrics
  closedTrades: ClosedTradeReport[]
  openTrades: OpenTradeReport[]
  equityCurve: number[]
  drawdownCurve: number[]
  buyHoldCurve: number[]
  dailyReturns: DailyReturnReport[]
  tradingRange: TradingRangeReport | null
}

export interface PerformanceMetrics {
  netProfit: number
  netProfitPercent: number
  grossProfit: number
  grossProfitPercent: number
  grossLoss: number
  grossLossPercent: number
  maxDrawdown: number
  maxDrawdownPercent: number
  maxRunup: number
  maxRunupPercent: number
  buyHoldReturn: number | null
  buyHoldReturnPercent: number | null
  sharpeRatio: number | null
  sortinoRatio: number | null
  profitFactor: number | null
  totalClosedTrades: number
  totalOpenTrades: number
  numWinningTrades: number
  numLosingTrades: number
  numEvenTrades: number
  percentProfitable: number | null
  avgTrade: number
  avgTradePercent: number
  avgWinningTrade: number
  avgWinningTradePercent: number
  avgLosingTrade: number
  avgLosingTradePercent: number
  ratioAvgWinLoss: number | null
  largestWinningTrade: number
  largestWinningTradePercent: number
  largestLosingTrade: number
  largestLosingTradePercent: number
  avgBarsInTrades: number
  avgBarsInWinningTrades: number
  avgBarsInLosingTrades: number
  commissionPaid: number
  maxContractsHeld: number
  marginCalls: number
}

export interface ClosedTradeReport {
  tradeNum: number
  entryId: string
  entryComment: string
  entrySide: 'long' | 'short'
  entryPrice: number
  entryBar: number
  entryTime: number
  exitId: string
  exitComment: string
  exitPrice: number
  exitBar: number
  exitTime: number
  quantity: number
  profit: number
  profitPercent: number
  cumulativeProfit: number
  cumulativeProfitPercent: number
  maxRunup: number
  maxRunupPercent: number
  maxDrawdown: number
  maxDrawdownPercent: number
  commission: number
}

export interface OpenTradeReport {
  tradeNum: number
  entryId: string
  entryComment: string
  entrySide: 'long' | 'short'
  entryPrice: number
  entryBar: number
  entryTime: number
  quantity: number
  profit: number
  profitPercent: number
  maxRunup: number
  maxRunupPercent: number
  maxDrawdown: number
  maxDrawdownPercent: number
  commission: number
}

export interface StrategyConfigReport {
  initialCapital: number
  commissionType: string
  commissionValue: number
  marginLong: number
  marginShort: number
  slippage: number
  pyramiding: number
  riskFreeRate: number
  processOrdersOnClose: boolean
  calcOnOrderFills: boolean
  closeEntriesRule: string
}

export interface DailyReturnReport {
  date: string
  returnPercent: number
}

export interface TradingRangeReport {
  startTime: number
  endTime: number
}
