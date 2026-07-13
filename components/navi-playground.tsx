'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { BookOpen, FilePlus2, Play, Redo2, RotateCcw, Save, Settings2, Trash2, Undo2, X } from 'lucide-react';
import { PlaygroundEngine, StaticCandlestickAdapter, StaticDataProvider } from '@/lib/playground-engine';
import { NaviEditor, type EditorDiagnostic } from './navi-editor';
import { createScript, deleteScript, listScripts, updateScript, type StoredScript } from '@/lib/script-store';
import { StrategyReport } from './strategy-report';
import type { StrategyReport as StrategyReportData } from '@/lib/strategy-report';
import { StdlibDocsDialog } from './stdlib-docs-dialog';
import type { StdlibDocs } from '@/lib/stdlib-docs';
import { ScriptConfigDialog, type ScriptConfigData } from './script-config-dialog';

export interface ExampleScript { name: string; source: string; category: 'indicator' | 'strategy' }

const stocks = [
  ['NASDAQ:AAPL', 'AAPL'], ['NASDAQ:MSFT', 'MSFT'], ['NASDAQ:GOOGL', 'GOOGL'], ['NASDAQ:AMZN', 'AMZN'],
  ['NASDAQ:TSLA', 'TSLA'], ['NASDAQ:META', 'META'], ['NASDAQ:NVDA', 'NVDA'], ['NYSE:JPM', 'JPM'],
  ['NYSE:V', 'V'], ['NYSE:WMT', 'WMT'], ['NASDAQ:NFLX', 'NFLX'],
] as const;
const timeframes = ['1', '5', '15', '30', '60', 'D', 'W', 'M'] as const;
type Timeframe = (typeof timeframes)[number];
const SOURCE_KEY = 'navi-playground-script';
const drawingTools = ['pointer','trendline','ray','hline','vline','parallel-channel','brush','highlighter','arrow','rect','circle','ellipse','triangle','polyline','fib-retracement','long-position','short-position','price-range','date-range','text','note','callout','emoji'] as const;

type Diagnostic = EditorDiagnostic;

export function NaviPlayground({ locale, examples }: { locale: string; examples: ExampleScript[] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartHostRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<PlaygroundEngine | null>(null);
  const sourceRef = useRef('');
  const [source, setSource] = useState(examples[0]?.source ?? '// Write Navi here\n');
  const [status, setStatus] = useState('Loading compiler and chart…');
  const [diagnostics, setDiagnostics] = useState<Diagnostic[]>([]);
  const [editorEngine, setEditorEngine] = useState<PlaygroundEngine | null>(null);
  const [running, setRunning] = useState(false);
  const [storedScripts, setStoredScripts] = useState<StoredScript[]>([]);
  const [activeScriptId, setActiveScriptId] = useState<string | null>(null);
  const [strategyReport, setStrategyReport] = useState<StrategyReportData | null>(null);
  const [activeTool, setActiveTool] = useState<string>('pointer');
  const [symbol, setSymbol] = useState<string>(stocks[0][0]);
  const [timeframe, setTimeframe] = useState<Timeframe>('D');
  const [stdlibDocs, setStdlibDocs] = useState<StdlibDocs | null>(null);
  const [showStdlib, setShowStdlib] = useState(false);
  const [scriptConfig, setScriptConfig] = useState<ScriptConfigData | null>(null);

  useEffect(() => { sourceRef.current = source; }, [source]);
  useEffect(() => { setStoredScripts(listScripts()); }, []);

  const analyze = useCallback((value: string) => {
    const analyzer = engineRef.current?.analyzer;
    if (!analyzer) return;
    analyzer.analyze('script.nv', value);
    const next = (analyzer.diagnostics() as Diagnostic[] | null) ?? [];
    setDiagnostics(next);
    const errors = next.filter((item) => item.severity === 'error').length;
    setStatus(errors ? `${errors} error${errors === 1 ? '' : 's'}` : 'Ready');
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = chartHostRef.current;
    if (!canvas || !host) return;
    const canvasElement = canvas;
    const chartHost = host;
    let disposed = false;
    let tickFrame = 0;
    let eventFrame = 0;
    let observer: ResizeObserver | undefined;
    let themeObserver: MutationObserver | undefined;

    async function initialize() {
      try {
        const [chartWasm, lspWasm] = await Promise.all([
          import('@/wasm-pkg/chart/navi_chart_wasm.js'),
          import('@/wasm-pkg/lsp/navi_lsp_wasm.js'),
        ]);
        await Promise.all([chartWasm.default(), lspWasm.default()]);
        if (disposed) return;

        const provider = new StaticDataProvider();
        await Promise.all(stocks.flatMap(([stockSymbol, ticker]) => timeframes.map(async (tf) => {
          const response = await fetch(`/data/security/${ticker}-${tf}.json`);
          if (response.ok) provider.register(stockSymbol, tf, await response.json());
        })));
        if (disposed) return;

        const dark = document.documentElement.classList.contains('dark');
        const theme = dark ? chartWasm.darkTheme() : chartWasm.lightTheme();
        const localProvider = new chartWasm.LocalChartProvider(new StaticCandlestickAdapter(provider));
        const chart = new chartWasm.Chart(canvasElement, localProvider, locale, theme);
        chart.setSymbol(stocks[0][0]);
        chart.setTimeframe('D');
        const analyzer = lspWasm.Analyzer.withLocale(locale);
        setStdlibDocs(lspWasm.stdlib_docs(locale) as StdlibDocs);
        engineRef.current = new PlaygroundEngine(chart, analyzer);
        setEditorEngine(engineRef.current);
        themeObserver = new MutationObserver(() => chart.setTheme(document.documentElement.classList.contains('dark') ? chartWasm.darkTheme() : chartWasm.lightTheme()));
        themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        const resize = () => {
          const width = chartHost.clientWidth;
          const height = chartHost.clientHeight;
          const dpr = window.devicePixelRatio || 1;
          canvasElement.width = Math.round(width * dpr);
          canvasElement.height = Math.round(height * dpr);
          canvasElement.getContext('2d')?.setTransform(dpr, 0, 0, dpr, 0, 0);
          chart.onResize(width, height);
        };
        observer = new ResizeObserver(resize);
        observer.observe(chartHost);
        resize();

        const tick = () => { chart.onTick(); tickFrame = requestAnimationFrame(tick); };
        const poll = () => {
          let event: unknown;
          while ((event = chart.pollEvent()) !== null) {
            const value = event as Record<string, unknown>;
            if ('configureScript' in value) {
              const tag = chart.tagFor(String(value.configureScript)) as string | null;
              if (tag) setScriptConfig({ tag, inputs: (chart.scriptInputsEffective(tag) as ScriptConfigData['inputs'] | null) ?? [] });
            }
          }
          eventFrame = requestAnimationFrame(poll);
        };
        tickFrame = requestAnimationFrame(tick);
        eventFrame = requestAnimationFrame(poll);

        const saved = localStorage.getItem(SOURCE_KEY);
        if (saved) { sourceRef.current = saved; setSource(saved); }
        analyze(saved || sourceRef.current);
        setStatus('Ready');
      } catch (error) {
        setStatus(error instanceof Error ? error.message : String(error));
      }
    }
    void initialize();
    return () => {
      disposed = true;
      observer?.disconnect();
      themeObserver?.disconnect();
      cancelAnimationFrame(tickFrame);
      cancelAnimationFrame(eventFrame);
      engineRef.current?.chart.free();
      engineRef.current?.analyzer.free();
      engineRef.current = null;
      setEditorEngine(null);
    };
  }, [analyze, locale]);

  useEffect(() => {
    const timer = window.setTimeout(() => { localStorage.setItem(SOURCE_KEY, source); analyze(source); }, 250);
    return () => window.clearTimeout(timer);
  }, [analyze, source]);

  async function run() {
    const chart = engineRef.current?.chart;
    if (!chart) return;
    setRunning(true);
    setStatus('Running…');
    try {
      await chart.addScript(source, 'editor');
      const error = chart.scriptError('editor');
      setStrategyReport((chart.strategyReport('editor') as StrategyReportData | null) ?? null);
      setStatus(error ? 'Script failed' : 'Running on chart');
    } catch (error) {
      const chartError = chart.scriptError('editor');
      setStrategyReport((chart.strategyReport('editor') as StrategyReportData | null) ?? null);
      setStatus(chartError?.exception?.message ?? chartError?.compile?.diagnostics?.[0]?.message ?? (error instanceof Error ? error.message : 'Script failed'));
    } finally { setRunning(false); }
  }

  function saveScript() {
    if (activeScriptId) updateScript(activeScriptId, source);
    else {
      const name = window.prompt('Script name');
      if (!name?.trim()) return;
      const created = createScript(name.trim(), source);
      setActiveScriptId(created.id);
    }
    setStoredScripts(listScripts());
    setStatus('Saved locally');
  }

  function pointerPosition(event: React.PointerEvent<HTMLCanvasElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    return [event.clientX - rect.left, event.clientY - rect.top] as const;
  }

  return (
    <div className="flex h-[calc(100vh-64px)] min-h-[620px] flex-col bg-fd-background text-sm">
      <header className="flex flex-wrap items-center gap-2 border-b p-2">
        <select className="rounded-md border bg-fd-background px-2 py-1.5" value={symbol} onChange={(event) => { const value = event.target.value; setSymbol(value); engineRef.current?.chart.setSymbol(value); }}>
          {stocks.map(([value, ticker]) => <option key={value} value={value}>{ticker}</option>)}
        </select>
        <select className="rounded-md border bg-fd-background px-2 py-1.5" value={timeframe} onChange={(event) => { const value = event.target.value as Timeframe; setTimeframe(value); engineRef.current?.chart.setTimeframe(value); }}>
          {timeframes.map((value) => <option key={value}>{value}</option>)}
        </select>
        <select className="rounded-md border bg-fd-background px-2 py-1.5" aria-label="Drawing tool" value={activeTool} onChange={(event) => { const tool = event.target.value; if (engineRef.current?.chart.setTool(tool)) setActiveTool(tool); }}>
          {drawingTools.map((tool) => <option key={tool} value={tool}>{tool.replaceAll('-', ' ')}</option>)}
        </select>
        <select className="min-w-48 rounded-md border bg-fd-background px-2 py-1.5" value={activeScriptId ? `saved:${activeScriptId}` : ''} onChange={(event) => { const value = event.target.value; if (value.startsWith('example:')) { const example = examples[Number(value.slice(8))]; if (example) { setActiveScriptId(null); setSource(example.source); } } else if (value.startsWith('saved:')) { const script = storedScripts.find((item) => item.id === value.slice(6)); if (script) { setActiveScriptId(script.id); setSource(script.source); } } }}>
          <option value="" disabled>Scripts</option>
          {storedScripts.map((script) => <option key={script.id} value={`saved:${script.id}`}>My Script · {script.name}</option>)}
          {examples.map((example, index) => <option key={`${example.category}:${example.name}`} value={`example:${index}`}>{example.category === 'strategy' ? 'Strategy' : 'Indicator'} · {example.name}</option>)}
        </select>
        <button className="rounded-md border p-1.5" title="New script" onClick={() => { setActiveScriptId(null); setSource('// Write Navi here\n'); }}><FilePlus2 className="size-4" /></button>
        <button className="rounded-md border p-1.5" title="Save script" onClick={saveScript}><Save className="size-4" /></button>
        <button className="rounded-md border p-1.5" title="Standard library" disabled={!stdlibDocs} onClick={() => setShowStdlib(true)}><BookOpen className="size-4" /></button>
        <button className="rounded-md border p-1.5" title="Script settings" disabled={!engineRef.current} onClick={() => { const chart = engineRef.current?.chart; if (!chart) return; setScriptConfig({ tag: 'editor', inputs: (chart.scriptInputsEffective('editor') as ScriptConfigData['inputs'] | null) ?? [] }); }}><Settings2 className="size-4" /></button>
        {activeScriptId && <button className="rounded-md border p-1.5" title="Delete saved script" onClick={() => { deleteScript(activeScriptId); setStoredScripts(listScripts()); setActiveScriptId(null); setStatus('Deleted local script'); }}><X className="size-4" /></button>}
        <button className="ml-auto inline-flex items-center gap-1.5 rounded-md bg-fd-primary px-3 py-1.5 font-medium text-fd-primary-foreground disabled:opacity-50" disabled={running} onClick={() => void run()}><Play className="size-4" />Run</button>
        <button className="rounded-md border p-1.5" title="Reset source" onClick={() => setSource(examples[0]?.source ?? '')}><RotateCcw className="size-4" /></button>
        <button className="rounded-md border p-1.5" title="Remove script" onClick={() => { engineRef.current?.chart.removeScript('editor'); setStatus('Removed from chart'); }}><Trash2 className="size-4" /></button>
        <button className="rounded-md border p-1.5" title="Undo drawing" onClick={() => engineRef.current?.chart.undo()}><Undo2 className="size-4" /></button>
        <button className="rounded-md border p-1.5" title="Redo drawing" onClick={() => engineRef.current?.chart.redo()}><Redo2 className="size-4" /></button>
      </header>
      <div className="grid min-h-0 flex-1 grid-cols-1 lg:grid-cols-[minmax(340px,42%)_1fr]">
        <section className="flex min-h-0 flex-col border-r">
          <div className="min-h-0 flex-1" aria-label="Navi source editor"><NaviEditor source={source} diagnostics={diagnostics} engine={editorEngine} onChange={setSource} /></div>
          <footer className="flex min-h-10 items-center justify-between border-t px-3 text-xs text-fd-muted-foreground"><span>{status}</span><span>{source.split('\n').length} lines</span></footer>
          {diagnostics.length > 0 && <div className="max-h-36 overflow-auto border-t bg-fd-muted/40 p-2 text-xs">{diagnostics.slice(0, 20).map((item, index) => <button className="block w-full rounded px-2 py-1 text-left hover:bg-fd-muted" key={`${item.message}:${index}`}><span className={item.severity === 'error' ? 'text-red-500' : 'text-amber-500'}>{item.severity}</span> · {item.range.start.line + 1}:{item.range.start.character + 1} {item.message}</button>)}</div>}
        </section>
        <section className="flex min-h-[360px] min-w-0 flex-col overflow-hidden bg-fd-card">
          <div ref={chartHostRef} className="relative min-h-0 flex-1">
          <canvas ref={canvasRef} className="absolute inset-0 size-full touch-none" tabIndex={0}
            onKeyDown={(event) => { const chart = engineRef.current?.chart; if (!chart) return; const key = event.key.toLowerCase(); if (event.key === 'Escape') chart.cancelDrawing(); else if (event.key === 'Delete' || event.key === 'Backspace') chart.deleteSelectedAnnotation(); else if ((event.ctrlKey || event.metaKey) && key === 'z' && event.shiftKey) chart.redo(); else if ((event.ctrlKey || event.metaKey) && key === 'z') chart.undo(); else return; event.preventDefault(); }}
            onPointerDown={(event) => { const chart = engineRef.current?.chart; if (!chart) return; const [x, y] = pointerPosition(event); chart.onPointerDown(event.pointerId, event.pointerType === 'touch' ? 1 : event.pointerType === 'pen' ? 2 : 0, Math.max(event.button, 0), x, y, 0); }}
            onPointerMove={(event) => { const chart = engineRef.current?.chart; if (!chart) return; const [x, y] = pointerPosition(event); chart.onPointerMove(event.pointerId, x, y, 0); event.currentTarget.style.cursor = chart.cursorAt(x, y); }}
            onPointerUp={(event) => { const chart = engineRef.current?.chart; if (!chart) return; const [x, y] = pointerPosition(event); chart.onPointerUp(event.pointerId, x, y); }}
            onWheel={(event) => { event.preventDefault(); const chart = engineRef.current?.chart; if (!chart) return; const rect = event.currentTarget.getBoundingClientRect(); chart.onWheel(event.deltaY, event.clientX - rect.left); }} />
          </div>
          {strategyReport && <StrategyReport report={strategyReport} onClose={() => setStrategyReport(null)} />}
        </section>
      </div>
      {showStdlib && stdlibDocs && <StdlibDocsDialog docs={stdlibDocs} locale={locale} onClose={() => setShowStdlib(false)} />}
      {scriptConfig && engineRef.current && <ScriptConfigDialog data={scriptConfig} chart={engineRef.current.chart} onClose={() => setScriptConfig(null)} />}
    </div>
  );
}
