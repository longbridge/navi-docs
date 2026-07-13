'use client';

import { RotateCcw, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

export interface ScriptInput { idx: number; title: string | null; tooltip: string | null; group: string | null; kind: Record<string, any>; defaultValue?: unknown }
export interface ScriptConfigData { tag: string; inputs: ScriptInput[] }
type ChartConfigApi = { scriptOverrides(tag: string): Array<{ key: number; value: unknown }> | null; setScriptConfig(tag: string, config: unknown): void };
const sourceValues = ['open', 'high', 'low', 'close', 'hl2', 'hlc3', 'ohlc4'];
const sourceIndex: Record<string, number> = Object.fromEntries(sourceValues.map((value, index) => [value, index]));
const timeframes = ['', '1', '2', '3', '5', '10', '15', '20', '30', '45', '60', '120', '180', '240', 'D', 'W', 'M', '3M', '12M'];

export function ScriptConfigDialog({ data, chart, onClose }: { data: ScriptConfigData; chart: ChartConfigApi; onClose(): void }) {
  const initial = useMemo(() => Object.fromEntries(data.inputs.map((input) => [input.idx, effectiveValue(input)])), [data]);
  const [values, setValues] = useState<Record<number, unknown>>(initial);
  useEffect(() => setValues(initial), [initial]);
  function sync(next: Record<number, unknown>) {
    setValues(next);
    chart.setScriptConfig(data.tag, { seriesOverrides: chart.scriptOverrides(data.tag) ?? [], inputValues: Object.entries(next).map(([key, value]) => ({ key: Number(key), value: vmValue(data.inputs.find((input) => input.idx === Number(key)), value) })) });
  }
  return <div className="fixed inset-0 z-50 grid place-items-center bg-black/55 p-4" role="dialog" aria-modal="true" aria-label="Script settings"><div className="flex max-h-[88vh] w-[min(620px,95vw)] flex-col overflow-hidden rounded-xl border bg-fd-background shadow-2xl"><header className="flex items-center border-b px-5 py-4"><div><h2 className="font-semibold">Script settings</h2><p className="text-xs text-fd-muted-foreground">Changes are applied to the chart immediately.</p></div><button className="ml-auto rounded-md border p-1.5" onClick={onClose} aria-label="Close"><X className="size-4"/></button></header><div className="min-h-0 space-y-5 overflow-auto p-5">{data.inputs.map((input) => <label key={input.idx} className="grid gap-2 sm:grid-cols-[minmax(140px,1fr)_minmax(220px,1.5fr)] sm:items-center"><span><span className="block font-medium">{input.title || `Input ${input.idx + 1}`}</span>{input.tooltip && <span className="block text-xs text-fd-muted-foreground">{input.tooltip}</span>}</span><InputControl input={input} value={values[input.idx]} onChange={(value) => sync({ ...values, [input.idx]: value })}/></label>)}{data.inputs.length === 0 && <p className="text-fd-muted-foreground">This script has no configurable inputs.</p>}</div><footer className="flex justify-between border-t p-4"><button className="inline-flex items-center gap-2 rounded-md border px-3 py-2" onClick={() => sync(Object.fromEntries(data.inputs.map((input) => [input.idx, input.defaultValue ?? effectiveValue(input)])))}><RotateCcw className="size-4"/>Reset defaults</button><button className="rounded-md bg-fd-primary px-4 py-2 text-fd-primary-foreground" onClick={onClose}>Done</button></footer></div></div>;
}

function InputControl({ input, value, onChange }: { input: ScriptInput; value: unknown; onChange(value: unknown): void }) {
  const variant = Object.keys(input.kind)[0] ?? 'str'; const payload = input.kind[variant] ?? {};
  const cls = 'w-full rounded-md border bg-fd-background px-3 py-2';
  if (variant === 'bool') return <input type="checkbox" checked={Boolean(value)} onChange={(e) => onChange(e.target.checked)} className="size-4"/>;
  if (variant === 'int' || variant === 'float') return <input className={cls} type="number" value={String(value ?? '')} min={payload.min} max={payload.max} step={payload.step ?? (variant === 'int' ? 1 : .1)} onChange={(e) => onChange(variant === 'int' ? Number.parseInt(e.target.value) : Number.parseFloat(e.target.value))}/>;
  if (variant === 'source') return <select className={cls} value={sourceName(value)} onChange={(e) => onChange(e.target.value)}>{sourceValues.map((option) => <option key={option}>{option}</option>)}</select>;
  if (variant === 'timeFrame') return <select className={cls} value={String(value ?? '')} onChange={(e) => onChange(e.target.value)}>{timeframes.map((option) => <option key={option || 'chart'} value={option}>{option || 'Chart timeframe'}</option>)}</select>;
  if (variant === 'enum') return <select className={cls} value={String(value ?? '')} onChange={(e) => onChange(Number(e.target.value))}>{(payload.options ?? []).map(([option, label]: [number, string]) => <option key={option} value={option}>{label}</option>)}</select>;
  if (variant === 'str' && payload.options?.length) return <select className={cls} value={String(value ?? '')} onChange={(e) => onChange(e.target.value)}>{payload.options.map((option: string) => <option key={option}>{option}</option>)}</select>;
  if (variant === 'color') return <input className="h-10 w-full rounded-md border bg-fd-background p-1" type="color" value={colorHex(value)} onChange={(e) => onChange(hexColor(e.target.value))}/>;
  if (variant === 'textArea') return <textarea className={`${cls} min-h-24`} value={String(value ?? '')} onChange={(e) => onChange(e.target.value)}/>;
  if (variant === 'time') return <input className={cls} type="datetime-local" step="1" value={String(value ?? '').replace(' ', 'T')} onChange={(e) => onChange(e.target.value.replace('T', ' '))}/>;
  return <input className={cls} value={String(value ?? '')} onChange={(e) => onChange(e.target.value)}/>;
}
function effectiveValue(input: ScriptInput) { const payload = Object.values(input.kind)[0]; return payload && typeof payload === 'object' && 'value' in payload ? (payload as any).value : input.defaultValue ?? ''; }
function vmValue(input: ScriptInput | undefined, value: unknown) { return input && Object.keys(input.kind)[0] === 'source' && typeof value === 'string' ? sourceIndex[value] ?? value : value; }
function sourceName(value: unknown) { return typeof value === 'number' ? sourceValues[value] ?? 'close' : typeof value === 'string' ? value : 'close'; }
function colorHex(value: unknown) { const n = Number(value); if (!Number.isFinite(n)) return '#808080'; return `#${((n >>> 8) & 0xffffff).toString(16).padStart(6, '0')}`; }
function hexColor(value: string) { return ((Number.parseInt(value.slice(1), 16) << 8) | 255) >>> 0; }
