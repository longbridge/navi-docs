'use client';

import type { StrategyReport as Report } from '@/lib/strategy-report';

export function StrategyReport({ report, onClose }: { report: Report; onClose(): void }) {
  const metrics = report.performanceAll;
  const currency = new Intl.NumberFormat(undefined, { maximumFractionDigits: 2 });
  return (
    <section className="max-h-64 overflow-auto border-t bg-fd-background">
      <header className="sticky top-0 flex items-center justify-between border-b bg-fd-background px-3 py-2 font-medium"><span>Strategy Tester</span><button className="text-xs text-fd-muted-foreground" onClick={onClose}>Close</button></header>
      <div className="grid grid-cols-2 gap-px bg-fd-border sm:grid-cols-4">
        <Metric label="Net profit" value={`${currency.format(metrics.netProfit)} (${metrics.netProfitPercent.toFixed(2)}%)`} />
        <Metric label="Closed trades" value={String(metrics.totalClosedTrades)} />
        <Metric label="Profitable" value={metrics.percentProfitable == null ? '—' : `${metrics.percentProfitable.toFixed(2)}%`} />
        <Metric label="Max drawdown" value={`${currency.format(metrics.maxDrawdown)} (${metrics.maxDrawdownPercent.toFixed(2)}%)`} />
      </div>
      {report.closedTrades.length > 0 && <table className="w-full text-xs"><thead><tr className="border-b text-left text-fd-muted-foreground"><th className="p-2">#</th><th>Side</th><th>Entry</th><th>Exit</th><th>P&amp;L</th></tr></thead><tbody>{report.closedTrades.slice(-50).reverse().map((trade) => <tr className="border-b" key={trade.tradeNum}><td className="p-2">{trade.tradeNum}</td><td>{trade.entrySide}</td><td>{currency.format(trade.entryPrice)}</td><td>{currency.format(trade.exitPrice)}</td><td className={trade.profit >= 0 ? 'text-emerald-500' : 'text-red-500'}>{currency.format(trade.profit)} ({trade.profitPercent.toFixed(2)}%)</td></tr>)}</tbody></table>}
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) { return <div className="bg-fd-background p-3"><div className="text-xs text-fd-muted-foreground">{label}</div><div className="mt-1 font-medium">{value}</div></div>; }
