/* tslint:disable */
/* eslint-disable */
/**
 * Returns a JS object representing the built-in dark theme.
 *
 * Use this as the `theme` argument to `new Chart(...)` or `chart.setTheme()`.
 */
export function darkTheme(): any;
/**
 * Returns a JS object representing the built-in light theme.
 *
 * Use this as the `theme` argument to `new Chart(...)` or `chart.setTheme()`.
 */
export function lightTheme(): any;
/**
 * The `ReadableStreamType` enum.
 *
 * *This API requires the following crate features to be activated: `ReadableStreamType`*
 */
type ReadableStreamType = "bytes";

/** A position within a source file. */
export interface Position {
  /** Zero-based file identifier — look up the path in `sourceFiles[fileId]`. */
  fileId: number;
  /** One-based line number. */
  line: number;
  /** Zero-based column offset in characters. */
  column: number;
  /** Byte offset from the start of the source text. */
  byteOffset: number;
}

/** A half-open `[start, end)` span in source code. */
export interface Span {
  start: Position;
  end: Position;
}

/** A rectangular region in CSS pixel coordinates. */
export interface Rect {
  origin: { x: number; y: number };
  size: { width: number; height: number };
}

/**
 * Keyboard modifier bitfield forwarded to interaction methods.
 *
 * | Bit | Key   |
 * |-----|-------|
 * | 1   | Ctrl  |
 * | 2   | Shift |
 * | 4   | Alt   |
 * | 8   | Meta  |
 */
export type Modifiers = number;



/** ISO 4217 currency code, e.g. `"USD"`, `"HKD"`. */
export type Currency = string;

/** Instrument type, e.g. `"stock"`, `"futures"`, `"crypto"`. */
export type SymbolType = string;

/** How volume is reported: `"base"` or `"quote"`. */
export type VolumeType = string;

/** Exchange / market identifier, e.g. `"NYSE"`, `"NASDAQ"`. */
export type Market = string;

/**
 * Partial symbol metadata returned by `DataProvider.symbolInfo()`.
 *
 * All fields are optional. Any field omitted (or set to `undefined`) falls
 * back to a default derived from the symbol's exchange prefix.
 */
export interface PartialSymbolInfo {
  /** Exchange that the symbol belongs to. */
  market?: Market;
  /** Human-readable description, e.g. `"Apple Inc."`. */
  description?: string;
  /** Instrument type. */
  type?: SymbolType;
  /** ISO 3166-1 alpha-2 country code, e.g. `"US"`. */
  country?: string;
  /** International Securities Identification Number. */
  isin?: string;
  /** Root symbol for derivatives, e.g. `"ES"` for `"ESZ4"`. */
  root?: string;
  /** Numerator of `mintick = minMove / priceScale`. */
  minMove?: number;
  /** Denominator of `mintick = minMove / priceScale`. */
  priceScale?: number;
  /** Point value multiplier (usually `1`; relevant for futures). */
  pointValue?: number;
  /** Currency of the symbol's prices. */
  currency?: Currency;
  /** ISO 8601 expiration date for futures contracts. */
  expirationDate?: string;
  /** Ticker of the current front-month contract. */
  currentContract?: string;
  /** Base currency for forex / crypto pairs. */
  baseCurrency?: Currency;
  employees?: number;
  industry?: string;
  sector?: string;
  minContract?: number;
  volumeType?: VolumeType;
  shareholders?: number;
  sharesOutstandingFloat?: number;
  sharesOutstandingTotal?: number;
  recommendationsBuy?: number;
  recommendationsBuyStrong?: number;
  recommendationsHold?: number;
  recommendationsSell?: number;
  recommendationsSellStrong?: number;
  /** ISO 8601 date of the latest analyst recommendations. */
  recommendationsDate?: string;
  recommendationsTotal?: number;
  targetPriceAverage?: number;
  /** ISO 8601 date of the latest price target. */
  targetPriceDate?: string;
  targetPriceEstimates?: number;
  targetPriceHigh?: number;
  targetPriceLow?: number;
  targetPriceMedian?: number;
}

/**
 * Set of `syminfo.*` property fields that the compiled script actually
 * accesses. Implementations may use this to fetch only the required data.
 */
export interface SyminfoFields {
  [key: string]: boolean;
}

/** Field selector for `DataProvider.earnings()`. */
export type EarningsField = string;
/** Field selector for `DataProvider.dividends()`. */
export type DividendsField = string;
/** Field selector for `DataProvider.splits()`. */
export type SplitsField = string;

/** A single typed argument value in a `DataArgs` map. */
export interface DataArg {
  [key: string]: unknown;
}

/** Named, typed arguments passed to `DataProvider.data()`. */
export type DataArgs = Record<string, DataArg>;



/**
 * Item yielded by auxiliary data streams (currency rates, financials,
 * earnings, dividends, economic data, splits, custom data).
 *
 * Follows the same `"historyEnd"` stream protocol as
 * {@link CandlestickItem}.
 */
export type AuxDataItem =
  | { data: { /** Epoch milliseconds. */ time: number; value: number } }
  | "historyEnd";



/**
 * Supplies candlestick and auxiliary data to a {@link Chart}.
 *
 * Implement this interface and pass an instance to `new Chart(…)`.
 * All stream methods support infinite (live) streams — yield historical
 * data followed by `"historyEnd"`, then keep yielding realtime updates.
 * When the chart no longer needs data it cancels the generator via
 * `iterator.return()`.
 *
 * All methods are optional — omit any method and the engine uses a safe
 * default (empty stream or `{}` symbol info). Implement only what your
 * use-case needs.
 *
 * @example
 * ```ts
 * const provider: DataProvider = {
 *   async *candlesticks(symbol, tf, fromTime) {
 *     const bars = await fetchHistory(symbol, tf, fromTime);
 *     yield* bars;
 *     yield "historyEnd";
 *     // keep yielding realtime bars...
 *   },
 * };
 * ```
 */
export interface DataProvider {
  /**
   * Return partial symbol metadata for `symbol`.
   *
   * `fields` lists which `syminfo.*` properties the script accesses;
   * you may return only those fields, or return all fields unconditionally.
   * If omitted, all `syminfo.*` fields fall back to their defaults.
   */
  symbolInfo?(symbol: string, fields: SyminfoFields): Promise<PartialSymbolInfo>;

  /**
   * Stream candlestick items for `(symbol, tf)` starting at or before
   * `fromTime` (epoch ms). `count` is an optional cap on historical bars.
   * If omitted, the chart renders with no data.
   */
  candlesticks?(symbol: string, tf: TimeFrame, fromTime: number, count?: number): AsyncIterable<CandlestickItem>;

  /** Stream tick items. Only called for tick-based timeframes (`"1T"`, `"nT"`). */
  ticks?(symbol: string, fromTime: number, count?: number): AsyncIterable<TickItem>;

  /** Stream historical exchange rate data for `from → to` currency conversion. */
  currencyRate?(from: Currency, to: Currency, fromTime: number): AsyncIterable<AuxDataItem>;

  /** Stream financial report data points (revenue, EPS, …). */
  financial?(symbol: string, financialId: string, period: string, currency: Currency | null, fromTime: number): AsyncIterable<AuxDataItem>;

  /** Stream earnings data points. */
  earnings?(symbol: string, field: EarningsField, currency: Currency | null, fromTime: number): AsyncIterable<AuxDataItem>;

  /** Stream dividend data points. */
  dividends?(symbol: string, field: DividendsField, currency: Currency | null, fromTime: number): AsyncIterable<AuxDataItem>;

  /** Stream macroeconomic data points for `countryCode`. */
  economic?(countryCode: string, field: string, fromTime: number): AsyncIterable<AuxDataItem>;

  /** Stream stock split data points. */
  splits?(symbol: string, field: SplitsField, fromTime: number): AsyncIterable<AuxDataItem>;

  /** Stream custom data identified by `fn` and `args`. */
  data?(fn: string, args: DataArgs, fromTime: number): AsyncIterable<AuxDataItem>;
}

/**
 * Supplies K-line data and script execution events to a {@link Chart}.
 *
 * Implement `chartStream` to provide a unified stream of
 * {@link ChartStreamEvent} items. Pass an instance to `new Chart(…)`.
 *
 * For in-browser VM execution use `LocalChartProvider` (from the `local`
 * feature of `navi-chart-wasm`) instead of implementing this yourself.
 *
 * @example
 * ```ts
 * const provider: ChartProvider = {
 *   async *chartStream(symbol, tf, request) {
 *     // yield bars and script events...
 *   },
 * };
 * const chart = new Chart(provider, canvas, "NASDAQ:AAPL", "D", "en", false);
 * ```
 */
export interface ChartProvider {
  /**
   * Stream unified K-line + script events for `(symbol, tf)`.
   *
   * `request` contains the list of scripts (with their handles and overridden
   * input values) plus global configuration (locale, inputSessions).
   *
   * Script events are tagged with `scriptId` values `0..n` corresponding to
   * the index in `request.scripts`.
   */
  chartStream(
    symbol: string,
    tf: TimeFrame,
    request: ChartStreamRequest,
  ): AsyncIterable<ChartStreamEvent>;
}

/**
 * Resolves `import` statements in Navi source code.
 *
 * Pass an instance as the `loader` argument to `new Chart(…)`.
 * Return `null` when the library is not found (equivalent to `NopLoader`).
 */
export interface LibraryLoader {
  /** Return the Navi source for `path`, or `null` if not found. */
  load(path: string): string | null;
}



/** Trading session that a candlestick belongs to. */
export type TradeSession = "PreMarket" | "Regular" | "AfterHours" | "Overnight";

/**
 * Timeframe string identifying a bar interval.
 *
 * Common values: `"1"`, `"5"`, `"15"`, `"60"` (minutes), `"D"` (daily),
 * `"W"` (weekly), `"M"` (monthly).
 */
export type TimeFrame = string;

/** A single OHLCV candlestick bar. */
export interface Candlestick {
  /** Bar open time as epoch milliseconds. */
  time: number;
  open: number;
  high: number;
  low: number;
  close: number;
  /** Trade volume. */
  volume: number;
  /** Turnover (volume × price). */
  turnover: number;
  /** Turnover rate (fraction of float traded). `NaN` when unavailable. */
  turnoverRate: number;
  tradeSession: TradeSession;
  /** Best ask price at bar close (`NaN` when unavailable). */
  ask: number;
  /** Best bid price at bar close (`NaN` when unavailable). */
  bid: number;
}

/**
 * Item yielded by `DataProvider.candlesticks()`.
 *
 * - `{ bar }` — a confirmed historical bar (before `"historyEnd"`) or the
 *   current forming realtime bar (after `"historyEnd"`).
 * - `"historyEnd"` — boundary marker emitted once, after all historical bars
 *   and before the first realtime bar.
 */
export type CandlestickItem =
  | { bar: Candlestick }
  | "historyEnd";



/** A source file referenced by error spans. */
export interface SourceFile {
  /** File path (or a synthetic name like `"<main>"`). */
  path: string;
  /** Full source text. */
  source: string;
}

/**
 * Which module a backtrace frame belongs to.
 *
 * - `"main"` — the user's script.
 * - `"prelude"` — auto-imported built-in functions.
 * - `"stdlib"` — standard library (e.g. `ta`, `math`).
 * - `"import"` — an explicitly imported library.
 */
export type ModuleKind = "main" | "prelude" | "stdlib" | "import";

/** A single compilation diagnostic (always an error). */
export interface CompileDiagnostic {
  message: string;
  /** Source spans associated with this diagnostic. */
  spans: Span[];
}

/** One frame in a runtime call-stack backtrace. */
export interface BacktraceFrame {
  /** Qualified function name, e.g. `"ta.sma"`, or `null` for top-level code. */
  funcName: string | null;
  /** Call-site location. */
  span: Span;
  moduleKind: ModuleKind;
}

/**
 * Error thrown by `Chart.addScript()` when a script fails to compile or
 * execute.
 *
 * Discriminate on the variant key:
 *
 * ```ts
 * try {
 *   await chart.addScript(source, "my-ind");
 * } catch (e: unknown) {
 *   const err = e as ScriptError;
 *   if ("compile" in err) {
 *     showDiagnostics(err.compile.diagnostics);
 *   } else if ("exception" in err) {
 *     showRuntimeError(err.exception);
 *   } else if (err === "missingScriptType") {
 *     console.error("missing script type");
 *   }
 * }
 * ```
 */
export type ScriptError =
  | { compile:                  { diagnostics: CompileDiagnostic[]; sourceFiles: Record<string, SourceFile> } }
  | { exception:                { message: string; spans: Span[]; backtrace: BacktraceFrame[]; sourceFiles: Record<string, SourceFile> } }
  | "missingScriptType"
  | { inputValueNotFound:       { id: number } }
  | { setInputValue:            { id: number; error: string } }
  | { unsupportedTimeFrame:     { timeFrame: TimeFrame } }
  | { sessionNotAllowed:        { session: TradeSession } }
  | "invalidSymbol"
  | "unknownMarket"
  | "libraryScriptNotExecutable"
  | { dataProvider:             { message: string } }
  | "confirmedBarUpdate"
  | { jitCompilation:           { message: string } };



/** Opaque string identifier for a running script slot. */
export type ScriptId = string;

/** Identifier for an individual series graph within a script. */
export type SeriesGraphId = number;

/**
 * Kebab-case identifier of a drawing tool, e.g. `"pointer"`,
 * `"trendline"`, `"fib-retracement"`.
 */
export type DrawingToolId = string;

/**
 * A chart element that can be selected or double-clicked.
 *
 * Discriminate on the variant key: `"series" in el`, `"annotation" in el`, `"bar" in el`.
 */
export type ChartElement =
  | { series:     { scriptId: ScriptId; graphId: SeriesGraphId } }
  | { annotation: AnnotationId }
  | { bar:        number };

/**
 * Result of `hitTest()` — describes what is under the pointer.
 *
 * - `"chart"` — inside the chart drawing area.
 * - `{ divider }` — over a pane-resize handle (`index` is zero-based from top).
 * - `"none"` — outside all interactive regions.
 */
export type HitTarget =
  | "chart"
  | { divider: { index: number } }
  | "none";

/** Snap-to-OHLC magnet configuration. */
export interface MagnetConfig {
  /** `"off"` disables snapping, `"weak"` snaps near OHLC levels, `"strong"` always snaps. */
  mode: "off" | "weak" | "strong";
  /** When `true`, also snap to indicator series values. */
  snapToIndicators: boolean;
}

/**
 * Event emitted by the chart and drained via `pollEvent()`.
 *
 * Discriminate on the variant key:
 *
 * ```ts
 * let ev: ChartEvent | null;
 * while ((ev = chart.pollEvent()) !== null) {
 *   if ("contextMenuRequested" in ev) {
 *     const { x, y, items } = ev.contextMenuRequested;
 *     showMenu(x, y, items);
 *   }
 * }
 * ```
 */
export type ChartEvent =
  /** User clicked the "edit" button on a script label. */
  | { editScript:          ScriptId }
  /** User clicked the "remove" button on a script label. */
  | { removeScript:        ScriptId }
  /** User clicked the error icon on a script label. */
  | { showError:           ScriptId }
  /** User clicked the "configure" button on a script label. */
  | { configureScript:     ScriptId }
  /** User double-clicked a series graph or candlestick bar. */
  | { doubleClick:         ChartElement }
  /** The chart selection changed; value is `null` when cleared. */
  | { selectionChanged:    ChartElement | null }
  /** The active drawing tool changed. */
  | { toolChanged:         { name: string } }
  /** The magnet configuration was modified by the user. */
  | "magnetChanged"
  /** A new annotation was added (programmatically or by the user). */
  | { annotationCreated:   AnnotationId }
  /** An existing annotation's spec was replaced. */
  | { annotationUpdated:   AnnotationId }
  /** An annotation was removed. */
  | { annotationDeleted:   AnnotationId }
  /**
   * User right-clicked an annotation — display a context menu at `(x, y)`.
   * Echo the chosen item back with `dispatchContextMenuAction(actionId)`.
   */
  | { contextMenuRequested: { x: number; y: number; items: ContextMenuItem[] } };



/** A single market tick (one trade event). */
export interface Tick {
  /** Tick timestamp as epoch milliseconds. */
  time: number;
  /** Last traded price. */
  price: number;
  /** Volume traded in this tick. */
  volume: number;
  /** Aggressor side: `"buy"`, `"sell"`, or `null` when unknown. */
  side: string | null;
}

/**
 * Item yielded by `DataProvider.ticks()`.
 *
 * Follows the same stream protocol as {@link CandlestickItem}: historical
 * ticks precede `"historyEnd"`, realtime ticks follow it.
 */
export type TickItem =
  | { tick: Tick }
  | "historyEnd";



/** Metadata for a single `input.*()` declaration in an Navi. */
export interface InputInfo {
  /** Zero-based input index used in `setScriptConfig` overrides. */
  idx: number;
  title: string;
  tooltip: string | null;
  /** Collapsible group label shown in the settings dialog. */
  group: string | null;
  kind: InputKind;
  defaultValue: unknown;
}

/**
 * The typed kind of an input, with its current value and constraints.
 *
 * Discriminate on the variant key, e.g. `"int" in k`, `"bool" in k`.
 */
export type InputKind =
  | { int:       { value: number; min: number | null; max: number | null; step: number | null; options: number[] } }
  | { float:     { value: number; min: number | null; max: number | null; step: number | null; options: number[] } }
  | { bool:      { value: boolean } }
  | { color:     { value: number } }
  | { str:       { value: string; options: string[] } }
  | { source:    { value: string } }
  | { enum:      { value: number; options: [number, string][] } }
  | { symbol:    { value: string } }
  | { timeFrame: { value: string; options: string[] } }
  | { session:   { value: string; options: string[] } }
  | { time:      { value: string } }  // "YYYY-MM-DD HH:mm:ss" exchange local time
  | { textArea:  { value: string } }
  | { [key: string]: unknown };

/** Visual configuration for a single series graph (plot, plotshape, …). */
export type SeriesGraphConfig =
  | { plot:            { title: string; colors: number[]; lineWidth: number; style: number; lineStyle: number } }
  | { plotChar:        { title: string; colors: number[]; charValue: string; location: string; size: string } }
  | { plotShape:       { title: string; colors: number[]; style: string; location: string; size: string } }
  | { plotArrow:       { title: string; upColors: number[]; downColors: number[] } }
  | { plotCandle:      { title: string; colors: number[]; wickColors: number[]; borderColors: number[] } }
  | { plotBar:         { title: string; colors: number[] } }
  | { backgroundColor: { title: string; colors: number[] } }
  | { fill:            { title: string; colors: number[] } }
  | { [key: string]: unknown };

/** User-applied visual overrides for a single series graph. */
export interface SeriesGraphOverride {
  /** Per-plot color overrides (packed RGBA integers). */
  colorOverrides?: number[];
  lineWidth?: number;
  style?: number;
  lineStyle?: number;
  charValue?: string;
  shape?: string;
  location?: string;
  size?: string;
  visible?: boolean;
}

/** Full configuration for a script slot: input overrides + visual overrides + visibility. */
export interface ScriptConfig {
  /** Map from input index to overridden value. */
  inputOverrides: Record<number, unknown>;
  /** Map from series graph id to visual overrides. */
  overrides: Record<SeriesGraphId, SeriesGraphOverride>;
  visible: boolean;
}

/** Backtest summary for a strategy script. Shape is opaque; inspect at runtime. */
export interface StrategyReport {
  [key: string]: unknown;
}

/**
 * A per-script event payload inside a {@link TaggedScriptEvent}.
 *
 * - `{ sessionInfo }` — script metadata, emitted once before the first bar.
 * - `{ draw }` — a rendering instruction (plots, shapes, labels, …).
 * - `{ strategy }` — a strategy order or fill event.
 * - `{ error }` — per-script compile or runtime error.
 */
export type ScriptEventPayload =
  | { sessionInfo: { scriptInfo: unknown; symbolInfo: unknown } }
  | { draw:        unknown }
  | { strategy:    unknown }
  | { error:       ScriptError };

/** A script event tagged with its position index in the scripts list. */
export interface TaggedScriptEvent {
  /** Zero-based index into the `scripts` array passed to `chartStream`. */
  scriptId: number;
  event: ScriptEventPayload;
}

/**
 * An item yielded by {@link ChartProvider.chartStream}.
 *
 * - `{ bar }` — a candlestick bar (historical before `"historyEnd"`, realtime after).
 * - `"historyEnd"` — global boundary between historical and realtime data.
 * - `{ script }` — an event produced by a specific script.
 * - `{ error }` — session-level unrecoverable error; the stream terminates.
 */
export type ChartStreamEvent =
  | { bar:    Candlestick }
  | "historyEnd"
  | { script: TaggedScriptEvent }
  | { error:  ScriptError };

/** A script descriptor inside {@link ChartStreamRequest}. */
export interface ScriptDescriptor {
  /** Opaque script handle (source string, UUID, …). Interpreted by the provider. */
  script: unknown;
  /** User-overridden input values keyed by input index. */
  inputValues: Array<{ key: number; value: unknown }>;
}

/** Request object passed to {@link ChartProvider.chartStream}. */
export interface ChartStreamRequest {
  scripts: ScriptDescriptor[];
  /** BCP-47 locale string for diagnostics (e.g. `"en"`, `"zh-CN"`). */
  locale: string;
  /** Bitfield of accepted trading sessions (see `InputSessions`). */
  inputSessions: number;
}



/** Stable identifier for an annotation, allocated by the chart. */
export type AnnotationId = string;


/**
 * Kebab-case drawing-tool identifier that determines the annotation's
 * geometry and default style, e.g. `"trendline"`, `"rect"`, `"text"`.
 */
export type AnnotationKind = string;

/** A control point in chart-space coordinates. */
export interface ControlPoint {
  /** Timestamp in milliseconds since the Unix epoch. */
  time: number;
  /** Price level. */
  price: number;
}

/** Caller-facing specification used to create or replace an annotation. */
export interface AnnotationSpec {
  kind: AnnotationKind;
  /** Text strings associated with the annotation (labels, callout text, …). */
  texts: string[];
  /** Ordered list of control points that define the annotation's geometry. */
  points: ControlPoint[];
  /** Zero-based sub-pane index (0 = main chart pane). */
  pane: number;
  visible: boolean;
  /** When `true` the user cannot move or resize this annotation. */
  locked: boolean;
}

/** An annotation as stored by the chart, including its assigned `id`. */
export interface Annotation {
  id: AnnotationId;
  spec: AnnotationSpec;
}

/** Describes an editable property of an annotation. */
export interface PropertyDescriptor {
  /** Machine-readable property name used in `getAnnotationProperty` / `setAnnotationProperty`. */
  name: string;
  /** Human-readable label shown in a property editor UI. */
  displayName: string;
  kind: PropertyKindMeta;
  /** When `true` the property can be individually enabled/disabled. */
  enableable: boolean;
}

/** One localised option in an enum/flags property. */
export interface EnumOption { displayName: string }

/**
 * Type metadata for a property — determines which UI widget renders it.
 *
 * Unit variants are plain strings; struct variants use the variant name as key.
 */
export type PropertyKindMeta =
  | "fill"
  | "textAlign"
  | "bool"
  | "text"
  | "alpha"
  | { textVAlign: { options: EnumOption[] } }
  | { enum:       { options: EnumOption[] } }
  | { flags:      { options: EnumOption[] } }
  | { stroke:     { flags: { color: boolean; width: boolean; style: boolean } } }
  | { textStyle:  { flags: { color: boolean; size: boolean; bold: boolean; italic: boolean } } }
  | { group:      { hasNumber: boolean; items: PropertyDescriptor[] } }
  | { [key: string]: unknown };

/**
 * A typed annotation property value.
 *
 * Discriminate on the variant key, e.g. `"color" in v`, `"stroke" in v`.
 */
export type PropertyValue =
  | { color:      number }
  | { float:      number }
  | { bool:       boolean }
  | { lineStyle:  number }
  | { textAlign:  string }
  | { enum:       number }
  | { text:       string }
  | { int:        number }
  | { stroke:     { color: number; width: number; style: number } }
  | { textStyle:  { color?: number; fontSize?: number; bold: boolean; italic: boolean } }
  | { enableable: { enabled: boolean; value: PropertyValue } }
  | { [key: string]: unknown };

/**
 * Result of `getAnnotationProperty()`.
 *
 * - `{ value }` — a single concrete value.
 * - `"none"` — the property has no value (e.g. not applicable to this variant).
 * - `"mixed"` — the selection contains annotations with different values.
 */
export type PropertyValueResult =
  | { value: PropertyValue }
  | "none"
  | "mixed";

/**
 * A single item in a context menu returned by a `contextMenuRequested` event.
 *
 * - `{ action }` — a clickable menu item.
 * - `"separator"` — a visual divider.
 */
export type ContextMenuItem =
  | { action: { /** Stable id to pass back to `dispatchContextMenuAction()`. */ actionId: string; /** When `false`, render greyed-out but still visible. */ enabled: boolean } }
  | "separator";


/**
 * Chart widget backed by a [`JsChartProvider`].
 *
 * Pass any JS object with a `chartStream()` method as the provider.
 * With the `local` feature, use [`LocalChartProvider`] for in-process VM
 * execution — construct it with a `JsDataProvider` and pass it here.
 */
export class Chart {
  free(): void;
  [Symbol.dispose](): void;
  /**
   * Kebab-case identifier of the currently active drawing tool.
   */
  activeTool(): string;
  /**
   * Canvas pixel position `[x, y]` of the text-editor caret, or `null`
   * when no text editor is active.
   */
  caretPixel(): Float64Array | undefined;
  /**
   * Return whether the chip-distribution band is currently shown.
   */
  cyqVisible(): boolean;
  /**
   * Sub-pane height ratios as a `number[]` that sums to `1.0`.
   *
   * Index 0 is the main chart pane; subsequent indices are indicator
   * sub-panes in order from top to bottom.
   */
  paneRatios(): any;
  /**
   * Replace all scripts with a single stream restart.
   *
   * `scripts` must be a JS array of `{ script, tag }` objects matching the
   * shapes accepted by `addScript`. Returns a `Promise<void>` that resolves
   * when the initial historical replay finishes, or rejects on the first
   * script error.
   */
  setScripts(scripts: any): Promise<any>;
  /**
   * Return the current UI chrome font size.
   */
  uiFontSize(): number;
  /**
   * Forward a pointer-up; fires click / double-click / drag-end / pinch-end
   * as recognized internally.
   */
  onPointerUp(id: number, x: number, y: number): void;
  /**
   * Current `ScriptError` for the script with `tag` if it is in an error
   * state, otherwise `null`.
   */
  scriptError(tag: any): any;
  /**
   * Center the viewport on bar `idx` and briefly highlight it.
   */
  scrollToBar(idx: number): void;
  /**
   * Set the chip-distribution band width in pixels (default 270).
   */
  setCyqWidth(width: number): void;
  /**
   * Pin the visible range to the bar indices `[start, end)`.
   */
  setViewport(start: number, end: number): void;
  /**
   * Per-series `SeriesGraphConfig` array (`[{key, value}]`) for `tag`, or
   * `null`.
   */
  graphConfigs(tag: any): any;
  /**
   * `true` if a script with `tag` is currently loaded.
   */
  hasScriptTag(tag: any): boolean;
  /**
   * Current sticky-tool setting.
   */
  isStickyTool(): boolean;
  /**
   * Restore chart state from a snapshot synchronously.
   */
  loadSnapshot(json: any): void;
  /**
   * Remove the script identified by `tag`.
   */
  removeScript(tag: any): void;
  /**
   * Serialize the current chart state to a snapshot object.
   */
  saveSnapshot(): any;
  /**
   * Current `ScriptConfig` for the script with `tag`, or `null`.
   */
  scriptConfig(tag: any): any;
  /**
   * `InputInfo[]` describing the declared inputs of the script with `tag`,
   * or `null` if the script is not found.
   */
  scriptInputs(tag: any): any;
  /**
   * Current horizontal scroll offset (bars from the right edge).
   */
  scrollOffset(): number;
  /**
   * Switch to a new timeframe, keeping the current symbol.
   */
  setTimeframe(tf: string): void;
  /**
   * Set which Y axes are visible.
   *
   * `mode` is a bitflags integer: `0b01` = right, `0b10` = left,
   * `0b11` = both (default), `0b00` = none.
   */
  setYAxisMode(mode: number): void;
  /**
   * Add an annotation from an `AnnotationSpec` object.
   *
   * Returns the new `AnnotationId` as a string, or `""` if the spec was
   * invalid.
   */
  addAnnotation(spec: any): string;
  /**
   * Cancel the drawing currently in progress and discard it.
   */
  cancelDrawing(): void;
  /**
   * Returns the `Annotation` object for `id`, or `null` if not found.
   */
  getAnnotation(id: string): any;
  /**
   * Return the chart's image registry — the `u32` → `HtmlImageElement` map
   * resolving the handles carried by [`AnnotationKind::Image`] annotations.
   *
   * Register bitmaps with `registry.add(id, img)` (typically from an image's
   * `onload`) and drop them with `registry.remove(id)`; neither repaints —
   * the change is picked up on the next render. Add the annotations
   * themselves with [`Self::addSystemAnnotation`], passing an
   * `AnnotationSpec` whose `kind` is `{ image: { imageId, anchor,
   * intrinsicSize, scale, opacity } }`.
   */
  imageRegistry(): ImageRegistry;
  /**
   * Forward a pointer-down. `id` distinguishes concurrent pointers (a second
   * pointer begins a pinch); `kind` is `0=Mouse, 1=Touch, 2=Pen`; `button`
   * is `0=Primary, 1=Middle, 2=Secondary, 3=Back, 4=Forward, 5=Eraser`;
   * `mods` is a bitfield `CTRL=1, SHIFT=2, ALT=4, META=8`. Returns `true` if
   * the chart consumed the event (host should suppress its default
   * handling).
   */
  onPointerDown(id: number, kind: number, button: number, x: number, y: number, mods: number): boolean;
  /**
   * Forward a pointer-move (hover, drag, or pinch).
   */
  onPointerMove(id: number, x: number, y: number, mods: number): void;
  /**
   * Show or hide the chip-distribution (CYQ) band. Defaults to `false`.
   */
  setCyqVisible(visible: boolean): void;
  /**
   * Override the sub-pane height distribution.
   *
   * `ratios` must be a `number[]` with the same length as `paneRatios()`
   * and values that sum to `1.0`.
   */
  setPaneRatios(ratios: any): void;
  /**
   * When `true`, keep the active tool selected after each drawing is
   * placed ("lock drawing" mode).
   */
  setStickyTool(sticky: boolean): void;
  /**
   * Set the font size for all UI chrome (axis ticks, legend, crosshair,
   * price-line labels). Defaults to 12.0.
   */
  setUiFontSize(size: number): void;
  /**
   * Cut the selected text from the active text editor, or `null`.
   */
  textEditorCut(): string | undefined;
  /**
   * Convert a bar index to its open timestamp in epoch milliseconds, or
   * `null` when the index is out of range.
   */
  barIndexToTime(idx: number): any;
  /**
   * Forward `compositionend` with the final committed `text`.
   */
  compositionEnd(text: string): void;
  /**
   * Returns all annotations as an `Annotation[]`.
   */
  getAnnotations(): any;
  /**
   * Handle the pointer entering the canvas.
   */
  onPointerEnter(): void;
  /**
   * Handle the pointer (mouse) leaving the canvas — hides the crosshair.
   */
  onPointerLeave(): void;
  /**
   * Numeric script ID for the script with `tag`, or `null`.
   */
  scriptIdForTag(tag: any): any;
  /**
   * `StrategyReport` for the script with `tag` if it is a strategy,
   * otherwise `null`.
   */
  strategyReport(tag: any): any;
  /**
   * Convert an epoch-millisecond timestamp to the nearest bar index, or
   * `null` when no bar matches.
   */
  timeToBarIndex(time_ms: number): any;
  /**
   * Forward a pointer-cancel (OS captured the gesture / touch interrupted).
   */
  onPointerCancel(id: number): void;
  /**
   * Paste the annotation from the internal clipboard.
   */
  pasteAnnotation(): void;
  /**
   * Request inline text editing for annotation `id`.
   *
   * Returns `true` if the annotation exists and supports text editing, in
   * which case subsequent key and composition events are routed to the
   * annotation's text field.
   */
  requestTextEdit(id: string): boolean;
  /**
   * Per-series visual overrides array (`[{key, value}]`) for `tag`, or
   * `null`.
   */
  scriptOverrides(tag: any): any;
  /**
   * Override visual properties and/or input values for the script with
   * `tag`. `json` is a `ScriptConfig` object.
   */
  setScriptConfig(tag: any, json: any): void;
  /**
   * Set the horizontal scroll position in bars from the right edge.
   */
  setScrollOffset(offset: number): void;
  /**
   * Return the currently active candlestick rendering style as a string.
   */
  candlestickStyle(): any;
  /**
   * `true` while a text-editing tool is active and needs keyboard input.
   *
   * When this returns `true`, forward all key events to
   * [`keyDown`](Self::keyDown) and [`textInput`](Self::textInput)
   * instead of handling them yourself.
   */
  capturesKeyboard(): boolean;
  /**
   * Remove all annotations from the chart.
   */
  clearAnnotations(): void;
  /**
   * Forward `compositionstart` (IME session begins).
   */
  compositionStart(): void;
  /**
   * Return the context-menu items for the element at canvas coordinates
   * `(x, y)`, or `null` if nothing hittable is there.
   *
   * Call this from the `contextmenu` DOM event (after `e.preventDefault()`).
   * The element is also selected internally as a side effect; drain
   * `pollEvent()` as usual afterward to receive any `selectionChanged`
   * event.
   */
  contextMenuItems(x: number, y: number): any;
  /**
   * Remove all active scripts and clear their visual outputs.
   */
  removeAllScripts(): void;
  /**
   * Remove the annotation with `id`.
   */
  removeAnnotation(id: string): void;
  /**
   * Replace the spec of an existing annotation in place.
   */
  updateAnnotation(id: string, spec: any): void;
  /**
   * Forward `compositionupdate` with the current composition `text` and
   * cursor byte offset within that text.
   */
  compositionUpdate(text: string, cursor: number): void;
  /**
   * Current default emoji character for the emoji drawing tool.
   */
  defaultEmojiGlyph(): string;
  /**
   * Restore chart state from a snapshot and re-execute all scripts.
   *
   * Returns a `Promise<void>` that resolves once every script has completed
   * its first execution attempt.
   */
  loadSnapshotAsync(json: any): Promise<any>;
  /**
   * Add a system annotation. Returns its ID as a string.
   *
   * System annotations render below user-drawn annotations and are excluded
   * from undo/redo. `spec` is a JSON-serialised `AnnotationSpec`.
   */
  addSystemAnnotation(spec: any): string;
  /**
   * Set the candlestick rendering style (e.g. `"candlestick"`, `"line"`,
   * `"heikinAshi"`). Accepts a JS string; re-renders on success.
   */
  setCandlestickStyle(style: any): void;
  /**
   * Read (copy) the selected text from the active text editor, or `null`.
   */
  textEditorSelection(): string | undefined;
  /**
   * Returns the editable `PropertyDescriptor[]` for annotation `id`, or
   * `null` if not found.
   */
  annotationProperties(id: string): any;
  /**
   * Return the current candlestick config as a `CandlestickConfig` object.
   */
  getCandlestickConfig(): any;
  /**
   * Return whether the latest-close price line is currently shown.
   */
  lastPriceLineVisible(): boolean;
  /**
   * Set the default style for a drawing tool.
   *
   * `toolId` is the kebab-case tool identifier (e.g. `"trendline"`).
   * `json` is an `AnnotationKind` object that will be used as the template
   * for new annotations created with that tool.
   */
  setAnnotationDefault(tool_id: string, json: any): boolean;
  /**
   * Replace the entire candlestick config. `config` is the serialised
   * `CandlestickConfig` object; re-renders on success.
   */
  setCandlestickConfig(config: any): void;
  /**
   * Set the default emoji character for the emoji drawing tool.
   */
  setDefaultEmojiGlyph(glyph: string): void;
  /**
   * Cut the selected annotation: copy to clipboard then delete it.
   */
  cutSelectedAnnotation(): void;
  /**
   * Returns the current `PropertyValueResult` for a named property of
   * annotation `id`, or `null` if not found.
   */
  getAnnotationProperty(id: string, name: string): any;
  /**
   * `InputInfo[]` with current effective values (defaults merged with user
   * overrides), or `null` if the script is not found.
   */
  scriptInputsEffective(tag: any): any;
  /**
   * Set a named property of annotation `id` to the given `PropertyValue`.
   *
   * Returns `true` on success, `false` if the annotation or property was
   * not found or the value type was invalid.
   */
  setAnnotationProperty(id: string, name: string, value: any): boolean;
  /**
   * Remove all system annotations.
   */
  clearSystemAnnotations(): void;
  /**
   * Copy the selected annotation to the internal clipboard.
   */
  copySelectedAnnotation(): void;
  /**
   * Finalise a multi-point drawing (e.g. commit a polyline after placing
   * all vertices).
   */
  finalizePendingDrawing(): void;
  /**
   * Read one candlestick property by name, as a `PropertyValueResult`.
   */
  getCandlestickProperty(name: string): any;
  /**
   * `true` if the internal clipboard currently holds an annotation.
   */
  hasClipboardAnnotation(): boolean;
  /**
   * Remove a system annotation by ID. Returns `true` if found.
   */
  removeSystemAnnotation(id: string): boolean;
  /**
   * Reset all per-style candlestick config to defaults, keeping the active
   * style.
   */
  resetCandlestickConfig(): void;
  /**
   * Set one candlestick property to a `PropertyValue`; returns `true` on
   * success and re-renders.
   */
  setCandlestickProperty(name: string, value: any): boolean;
  /**
   * Update a system annotation's spec. Returns `true` on success.
   */
  updateSystemAnnotation(id: string, spec: any): boolean;
  /**
   * Show or hide the latest-close horizontal price line and its right-axis
   * label. Defaults to `true`.
   */
  setLastPriceLineVisible(visible: boolean): void;
  /**
   * Delete the currently selected annotation.
   */
  deleteSelectedAnnotation(): void;
  /**
   * Localised `PropertyDescriptor` list for the active candlestick style.
   */
  getCandlestickProperties(): any;
  /**
   * Reset annotation `id` to the default style of its drawing tool.
   *
   * Returns `true` if the annotation was found.
   */
  resetAnnotationToDefault(id: string): boolean;
  /**
   * Bounding `Rect` of the selected annotation in canvas CSS pixels, or
   * `null` if nothing is selected.
   */
  selectedAnnotationBounds(): any;
  /**
   * Execute a context-menu action by its `actionId`.
   *
   * The `actionId` values are provided in the `contextMenuRequested`
   * event emitted by [`pollEvent`](Self::pollEvent).
   */
  dispatchContextMenuAction(action_id: string): void;
  /**
   * Returns the `ControlPointFlags` bitmask (as `number[]`) for each
   * control point of annotation `id`, or `null` if not found.
   */
  annotationControlPointFlags(id: string): any;
  /**
   * Move the selected annotation to the bottom of the Z-order.
   */
  sendSelectedAnnotationToBack(): void;
  /**
   * Toggle the lock state of the selected annotation.
   *
   * Locked annotations cannot be moved or resized by the user.
   */
  toggleSelectedAnnotationLock(): void;
  /**
   * Move the selected annotation to the top of the Z-order.
   */
  bringSelectedAnnotationToFront(): void;
  /**
   * `true` if the selected annotation is a highlighter brush stroke.
   */
  selectedAnnotationIsHighlighter(): boolean;
  /**
   * Create an empty chart attached to a `<canvas>` element.
   *
   * - `locale` — BCP-47 locale for axis labels and tooltips, e.g. `"en"`.
   * - `theme`  — a `Theme` object (use `darkTheme()` / `lightTheme()` or a
   *   custom object matching the `Theme` shape).
   *
   * The chart is initially blank.  Call `setSymbol` / `setTimeframe` to
   * begin loading data.
   */
  constructor(canvas: HTMLCanvasElement, provider: any, locale: string, theme: any);
  /**
   * Redo the last undone action; returns `true` if something was redone.
   */
  redo(): boolean;
  /**
   * Undo the last annotation action; returns `true` if something was undone.
   */
  undo(): boolean;
  /**
   * Current locale string.
   */
  locale(): string;
  /**
   * Advance inertia physics for one animation frame. Call this
   * unconditionally on every `requestAnimationFrame` tick — it is a no-op
   * when there is no active pan or zoom inertia, so a persistent loop costs
   * nothing at rest.
   */
  onTick(): void;
  /**
   * Programmatically set the selected chart element. Pass `null` to clear
   * the selection. Emits a `selectionChanged` event and re-renders.
   */
  select(element: any): void;
  /**
   * Current symbol string, e.g. `"NASDAQ:AAPL"`.
   */
  symbol(): string;
  /**
   * Tag string for the script with string ID `id`, or `null`.
   */
  tagFor(id: string): any;
  /**
   * `true` if the redo stack is non-empty.
   */
  canRedo(): boolean;
  /**
   * `true` if the undo stack is non-empty.
   */
  canUndo(): boolean;
  /**
   * Hit-test the canvas position `(x, y)`.
   *
   * Returns a `HitTarget`: `{ type: "chart" }`, `{ type: "divider", index:
   * number }`, or `{ type: "none" }`.
   */
  hitTest(x: number, y: number): any;
  /**
   * Forward a key-down event using the `KeyboardEvent.key` string.
   *
   * Only a subset of keys are handled: `ArrowLeft/Right/Up/Down`,
   * `Escape`, `Delete`, `Backspace`, `Enter`, `Home`, `End`.
   * Returns `true` if the chart consumed the event.
   */
  keyDown(key: string, mods: number): boolean;
  /**
   * Forward an OS-recognized pinch zoom. `scale` is the multiplicative
   * factor (`>1` = zoom in); `(cx, cy)` is the canvas-relative pinch centre.
   */
  onPinch(scale: number, cx: number, cy: number): void;
  /**
   * Forward a wheel / vertical-scroll zoom event.
   *
   * `delta` is the (pixel-normalised) wheel step; `anchorX` is the
   * canvas-relative X coordinate used as the zoom anchor. Applied with
   * inertia.
   */
  onWheel(delta: number, anchor_x: number): void;
  /**
   * Returns all active scripts as an array of `[tag, id]` pairs.
   */
  scripts(): any;
  /**
   * Activate a drawing tool by its kebab-case identifier.
   *
   * Returns `true` if the id was recognised. Falls back to `"pointer"` for
   * unknown ids. Example ids: `"pointer"`, `"trendline"`, `"rect"`,
   * `"text"`, `"fib-retracement"`.
   */
  setTool(id: string): boolean;
  /**
   * Number of bars currently visible in the viewport.
   */
  barCount(): number;
  /**
   * CSS cursor string appropriate for the canvas position `(x, y)`.
   *
   * Apply the returned value to the canvas element's `style.cursor`.
   */
  cursorAt(x: number, y: number): string;
  /**
   * Return the current chip-distribution band width in pixels.
   */
  cyqWidth(): number;
  /**
   * Notify the chart that the canvas CSS size has changed to `(w, h)`.
   *
   * Call this from a `ResizeObserver` callback whenever the container
   * element is resized. The chart re-scales the backing buffer and
   * re-renders automatically.
   */
  onResize(w: number, h: number): void;
  /**
   * Forward a trackpad two-finger scroll (pan, no inertia). `dx` positive =
   * content scrolled right (swipe left) = advance toward newer bars.
   */
  onScroll(dx: number, dy: number): void;
  /**
   * Apply a theme.  Pass a `Theme` object (use `darkTheme()` /
   * `lightTheme()` or a custom object matching the `Theme` shape).
   * No-op if `theme` cannot be deserialized.
   */
  setTheme(theme: any): void;
  /**
   * Add a script to the chart, streaming its events from the provider.
   *
   * `script` is an opaque handle understood by the JS provider — any
   * JSON-serializable value (source string, hash, server-side cache UUID,
   * …). It is forwarded verbatim to the provider's `scriptEvents(script,
   * …)` method, which streams the pre-computed `ScriptEvent`s rendered by
   * the chart. `tag` is an arbitrary string identifier used to reference
   * the script in subsequent calls.
   *
   * Returns a `Promise<void>` that:
   * - **resolves** when the initial event stream finishes.
   * - **rejects** with a [`ScriptError`](crate::types) on failure.
   */
  addScript(script: any, tag: any): Promise<any>;
  /**
   * Call when the canvas (or its ancestor) loses keyboard focus.
   *
   * Commits any in-progress IME composition and exits text-editing mode.
   */
  focusLost(): void;
  /**
   * Current magnet (snap-to-OHLC) configuration as a `MagnetConfig`
   * object.
   */
  getMagnet(): any;
  /**
   * Drain one pending `ChartEvent`, or return `null` if the queue is empty.
   *
   * Call this after every interaction method to process events such as
   * `annotationCreated`, `toolChanged`, `contextMenuRequested`, etc.
   *
   * ```js
   * let ev;
   * while ((ev = chart.pollEvent()) !== null) handleEvent(ev);
   * ```
   */
  pollEvent(): any;
  /**
   * Currently selected chart element (`ChartElement`), or `null`.
   */
  selection(): any;
  /**
   * Update the locale used for axis labels and tooltips.
   *
   * Accepts a BCP-47 locale string such as `"en"`, `"zh-CN"`, `"ja"`.
   */
  setLocale(locale: string): void;
  /**
   * Update the magnet configuration from a `MagnetConfig` object.
   */
  setMagnet(json: any): void;
  /**
   * Switch to a new symbol, keeping the current timeframe.
   */
  setSymbol(symbol: string): void;
  /**
   * Insert text at the cursor position in the active text editor.
   *
   * Forward the string from a `keypress` or `input` event.
   */
  textInput(text: string): void;
  /**
   * Current timeframe string, e.g. `"D"` or `"60"`.
   */
  timeframe(): string;
  /**
   * Total number of bars in the loaded dataset.
   */
  totalBars(): number;
  /**
   * Return the current Y-axis mode as a bitflags integer.
   */
  yAxisMode(): number;
}
/**
 * Registry mapping `u32` image handles (carried by
 * [`AnnotationImage`](navi_chart::annotation::AnnotationImage)) to loaded
 * `HtmlImageElement`s.
 *
 * Cloning is cheap (shared, reference-counted): the `CanvasContext` that draws
 * the images and any JS holder obtained via `Chart::imageRegistry` all point
 * at the same underlying map. Mutating it with `add` / `remove` does not
 * repaint — the new state is picked up on the next render.
 */
export class ImageRegistry {
  private constructor();
  free(): void;
  [Symbol.dispose](): void;
  /**
   * Register (or replace) the bitmap for handle `id`.
   */
  add(id: number, img: HTMLImageElement): void;
  /**
   * Remove the bitmap for handle `id`. Annotations referencing it draw
   * nothing until a bitmap is registered again.
   */
  remove(id: number): void;
}
export class IntoUnderlyingByteSource {
  private constructor();
  free(): void;
  [Symbol.dispose](): void;
  pull(controller: ReadableByteStreamController): Promise<any>;
  start(controller: ReadableByteStreamController): void;
  cancel(): void;
  readonly autoAllocateChunkSize: number;
  readonly type: ReadableStreamType;
}
export class IntoUnderlyingSink {
  private constructor();
  free(): void;
  [Symbol.dispose](): void;
  abort(reason: any): Promise<any>;
  close(): Promise<any>;
  write(chunk: any): Promise<any>;
}
export class IntoUnderlyingSource {
  private constructor();
  free(): void;
  [Symbol.dispose](): void;
  pull(controller: ReadableStreamDefaultController): Promise<any>;
  cancel(): void;
}
/**
 * Session handle for a [`LocalChartProvider`] stream.
 *
 * JS must keep this object alive for the duration of the session.
 * Call its methods to extend history or dynamically add/remove scripts.
 */
export class LocalChartHandle {
  private constructor();
  free(): void;
  [Symbol.dispose](): void;
  /**
   * Add a script to the live session.
   *
   * Returns the `script_id` (as `f64` / JS number) that will tag subsequent
   * events for this script.  The caller must pass a serialised
   * `ScriptDescriptor` JSON value.
   */
  addScript(descriptor: any): number;
  /**
   * Remove a script from the live session.
   */
  removeScript(script_id: number): void;
  /**
   * Extend the history window without restarting the stream.
   *
   * Returns `true` if the extension was accepted (cached programs
   * available), `false` if a full restart is needed.
   */
  extendHistory(bars_back: number): boolean;
}
/**
 * In-process chart provider backed by the Navi VM.
 *
 * ```typescript
 * const provider = new LocalChartProvider(dataProvider);
 * const chart = new Chart(canvas, provider, symbol, tf, locale, isDark);
 * ```
 */
export class LocalChartProvider {
  free(): void;
  [Symbol.dispose](): void;
  /**
   * Implements the `ChartProvider.chartStream()` interface.
   *
   * Returns a JS object `{ stream: ReadableStream, handle: LocalChartHandle
   * }`. JS must retain `handle` for the session lifetime to enable
   * dynamic `extendHistory` / `addScript` / `removeScript` without a
   * full restart.
   */
  chartStream(symbol: string, tf: string, request: any): any;
  /**
   * Create a new `LocalChartProvider` backed by `data_provider`.
   */
  constructor(data_provider: any);
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_chart_free: (a: number, b: number) => void;
  readonly chart_activeTool: (a: number) => [number, number];
  readonly chart_addAnnotation: (a: number, b: any) => [number, number];
  readonly chart_addScript: (a: number, b: any, c: any) => any;
  readonly chart_addSystemAnnotation: (a: number, b: any) => [number, number];
  readonly chart_annotationControlPointFlags: (a: number, b: number, c: number) => any;
  readonly chart_annotationProperties: (a: number, b: number, c: number) => any;
  readonly chart_barCount: (a: number) => number;
  readonly chart_barIndexToTime: (a: number, b: number) => any;
  readonly chart_bringSelectedAnnotationToFront: (a: number) => void;
  readonly chart_canRedo: (a: number) => number;
  readonly chart_canUndo: (a: number) => number;
  readonly chart_cancelDrawing: (a: number) => void;
  readonly chart_candlestickStyle: (a: number) => any;
  readonly chart_capturesKeyboard: (a: number) => number;
  readonly chart_caretPixel: (a: number) => [number, number];
  readonly chart_clearAnnotations: (a: number) => void;
  readonly chart_clearSystemAnnotations: (a: number) => void;
  readonly chart_compositionEnd: (a: number, b: number, c: number) => void;
  readonly chart_compositionStart: (a: number) => void;
  readonly chart_compositionUpdate: (a: number, b: number, c: number, d: number) => void;
  readonly chart_contextMenuItems: (a: number, b: number, c: number) => any;
  readonly chart_copySelectedAnnotation: (a: number) => void;
  readonly chart_cursorAt: (a: number, b: number, c: number) => [number, number];
  readonly chart_cutSelectedAnnotation: (a: number) => void;
  readonly chart_cyqVisible: (a: number) => number;
  readonly chart_cyqWidth: (a: number) => number;
  readonly chart_defaultEmojiGlyph: (a: number) => [number, number];
  readonly chart_deleteSelectedAnnotation: (a: number) => void;
  readonly chart_dispatchContextMenuAction: (a: number, b: number, c: number) => void;
  readonly chart_finalizePendingDrawing: (a: number) => void;
  readonly chart_focusLost: (a: number) => void;
  readonly chart_getAnnotation: (a: number, b: number, c: number) => any;
  readonly chart_getAnnotationProperty: (a: number, b: number, c: number, d: number, e: number) => any;
  readonly chart_getAnnotations: (a: number) => any;
  readonly chart_getCandlestickConfig: (a: number) => any;
  readonly chart_getCandlestickProperties: (a: number) => any;
  readonly chart_getCandlestickProperty: (a: number, b: number, c: number) => any;
  readonly chart_getMagnet: (a: number) => any;
  readonly chart_graphConfigs: (a: number, b: any) => any;
  readonly chart_hasClipboardAnnotation: (a: number) => number;
  readonly chart_hasScriptTag: (a: number, b: any) => number;
  readonly chart_hitTest: (a: number, b: number, c: number) => any;
  readonly chart_imageRegistry: (a: number) => number;
  readonly chart_isStickyTool: (a: number) => number;
  readonly chart_keyDown: (a: number, b: number, c: number, d: number) => number;
  readonly chart_lastPriceLineVisible: (a: number) => number;
  readonly chart_loadSnapshot: (a: number, b: any) => void;
  readonly chart_loadSnapshotAsync: (a: number, b: any) => any;
  readonly chart_locale: (a: number) => [number, number];
  readonly chart_new: (a: any, b: any, c: number, d: number, e: any) => [number, number, number];
  readonly chart_onPinch: (a: number, b: number, c: number, d: number) => void;
  readonly chart_onPointerCancel: (a: number, b: number) => void;
  readonly chart_onPointerDown: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => number;
  readonly chart_onPointerEnter: (a: number) => void;
  readonly chart_onPointerLeave: (a: number) => void;
  readonly chart_onPointerMove: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly chart_onPointerUp: (a: number, b: number, c: number, d: number) => void;
  readonly chart_onResize: (a: number, b: number, c: number) => void;
  readonly chart_onScroll: (a: number, b: number, c: number) => void;
  readonly chart_onTick: (a: number) => void;
  readonly chart_onWheel: (a: number, b: number, c: number) => void;
  readonly chart_paneRatios: (a: number) => any;
  readonly chart_pasteAnnotation: (a: number) => void;
  readonly chart_pollEvent: (a: number) => any;
  readonly chart_redo: (a: number) => number;
  readonly chart_removeAllScripts: (a: number) => void;
  readonly chart_removeAnnotation: (a: number, b: number, c: number) => void;
  readonly chart_removeScript: (a: number, b: any) => void;
  readonly chart_removeSystemAnnotation: (a: number, b: number, c: number) => number;
  readonly chart_requestTextEdit: (a: number, b: number, c: number) => number;
  readonly chart_resetAnnotationToDefault: (a: number, b: number, c: number) => number;
  readonly chart_resetCandlestickConfig: (a: number) => void;
  readonly chart_saveSnapshot: (a: number) => any;
  readonly chart_scriptConfig: (a: number, b: any) => any;
  readonly chart_scriptError: (a: number, b: any) => any;
  readonly chart_scriptIdForTag: (a: number, b: any) => any;
  readonly chart_scriptInputs: (a: number, b: any) => any;
  readonly chart_scriptInputsEffective: (a: number, b: any) => any;
  readonly chart_scriptOverrides: (a: number, b: any) => any;
  readonly chart_scripts: (a: number) => any;
  readonly chart_scrollOffset: (a: number) => number;
  readonly chart_scrollToBar: (a: number, b: number) => void;
  readonly chart_select: (a: number, b: any) => void;
  readonly chart_selectedAnnotationBounds: (a: number) => any;
  readonly chart_selectedAnnotationIsHighlighter: (a: number) => number;
  readonly chart_selection: (a: number) => any;
  readonly chart_sendSelectedAnnotationToBack: (a: number) => void;
  readonly chart_setAnnotationDefault: (a: number, b: number, c: number, d: any) => number;
  readonly chart_setAnnotationProperty: (a: number, b: number, c: number, d: number, e: number, f: any) => number;
  readonly chart_setCandlestickConfig: (a: number, b: any) => void;
  readonly chart_setCandlestickProperty: (a: number, b: number, c: number, d: any) => number;
  readonly chart_setCandlestickStyle: (a: number, b: any) => void;
  readonly chart_setCyqVisible: (a: number, b: number) => void;
  readonly chart_setCyqWidth: (a: number, b: number) => void;
  readonly chart_setDefaultEmojiGlyph: (a: number, b: number, c: number) => void;
  readonly chart_setLastPriceLineVisible: (a: number, b: number) => void;
  readonly chart_setLocale: (a: number, b: number, c: number) => void;
  readonly chart_setMagnet: (a: number, b: any) => void;
  readonly chart_setPaneRatios: (a: number, b: any) => void;
  readonly chart_setScriptConfig: (a: number, b: any, c: any) => void;
  readonly chart_setScripts: (a: number, b: any) => any;
  readonly chart_setScrollOffset: (a: number, b: number) => void;
  readonly chart_setStickyTool: (a: number, b: number) => void;
  readonly chart_setSymbol: (a: number, b: number, c: number) => void;
  readonly chart_setTheme: (a: number, b: any) => void;
  readonly chart_setTimeframe: (a: number, b: number, c: number) => void;
  readonly chart_setTool: (a: number, b: number, c: number) => number;
  readonly chart_setUiFontSize: (a: number, b: number) => void;
  readonly chart_setViewport: (a: number, b: number, c: number) => void;
  readonly chart_setYAxisMode: (a: number, b: number) => void;
  readonly chart_strategyReport: (a: number, b: any) => any;
  readonly chart_symbol: (a: number) => [number, number];
  readonly chart_tagFor: (a: number, b: number, c: number) => any;
  readonly chart_textEditorCut: (a: number) => [number, number];
  readonly chart_textEditorSelection: (a: number) => [number, number];
  readonly chart_textInput: (a: number, b: number, c: number) => void;
  readonly chart_timeToBarIndex: (a: number, b: number) => any;
  readonly chart_timeframe: (a: number) => [number, number];
  readonly chart_toggleSelectedAnnotationLock: (a: number) => void;
  readonly chart_totalBars: (a: number) => number;
  readonly chart_uiFontSize: (a: number) => number;
  readonly chart_undo: (a: number) => number;
  readonly chart_updateAnnotation: (a: number, b: number, c: number, d: any) => void;
  readonly chart_updateSystemAnnotation: (a: number, b: number, c: number, d: any) => number;
  readonly chart_yAxisMode: (a: number) => number;
  readonly darkTheme: () => any;
  readonly lightTheme: () => any;
  readonly __wbg_imageregistry_free: (a: number, b: number) => void;
  readonly imageregistry_add: (a: number, b: number, c: any) => void;
  readonly imageregistry_remove: (a: number, b: number) => void;
  readonly __wbg_localcharthandle_free: (a: number, b: number) => void;
  readonly __wbg_localchartprovider_free: (a: number, b: number) => void;
  readonly localcharthandle_addScript: (a: number, b: any) => [number, number, number];
  readonly localcharthandle_extendHistory: (a: number, b: number) => number;
  readonly localcharthandle_removeScript: (a: number, b: number) => void;
  readonly localchartprovider_chartStream: (a: number, b: number, c: number, d: number, e: number, f: any) => [number, number, number];
  readonly localchartprovider_new: (a: any) => number;
  readonly __wbg_intounderlyingsource_free: (a: number, b: number) => void;
  readonly intounderlyingsource_cancel: (a: number) => void;
  readonly intounderlyingsource_pull: (a: number, b: any) => any;
  readonly __wbg_intounderlyingsink_free: (a: number, b: number) => void;
  readonly intounderlyingsink_abort: (a: number, b: any) => any;
  readonly intounderlyingsink_close: (a: number) => any;
  readonly intounderlyingsink_write: (a: number, b: any) => any;
  readonly __wbg_intounderlyingbytesource_free: (a: number, b: number) => void;
  readonly intounderlyingbytesource_autoAllocateChunkSize: (a: number) => number;
  readonly intounderlyingbytesource_cancel: (a: number) => void;
  readonly intounderlyingbytesource_pull: (a: number, b: any) => any;
  readonly intounderlyingbytesource_start: (a: number, b: any) => void;
  readonly intounderlyingbytesource_type: (a: number) => number;
  readonly wasm_bindgen__convert__closures_____invoke__hdad8e08980442495: (a: number, b: number) => void;
  readonly wasm_bindgen__closure__destroy__hb26f619182e21929: (a: number, b: number) => void;
  readonly wasm_bindgen__convert__closures_____invoke__h1c3b971bf5230278: (a: number, b: number, c: any) => void;
  readonly wasm_bindgen__closure__destroy__h19febeda49f66582: (a: number, b: number) => void;
  readonly wasm_bindgen__convert__closures_____invoke__h09e1f75621400211: (a: number, b: number, c: any, d: any) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __externref_table_alloc: () => number;
  readonly __wbindgen_externrefs: WebAssembly.Table;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __externref_table_dealloc: (a: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
