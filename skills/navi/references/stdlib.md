# Navi Standard Library Reference

Use this file to choose built-ins and exact names while writing `.nv` scripts. When unsure, prefer the generated docs under `api/stdlib/` and existing `.nv` examples in `naviscripts/`.

## Table of Contents

- [Name Rules](#name-rules)
- [Prelude](#prelude)
- [High-Frequency Calls](#high-frequency-calls)
- [`ta` Technical Analysis](#ta-technical-analysis)
- [`input` User Inputs](#input-user-inputs)
- [Plotting and Visual Output](#plotting-and-visual-output)
- [Drawing Objects](#drawing-objects)
- [Collections](#collections)
- [Math, Strings, and Colors](#math-strings-and-colors)
- [Strategy API](#strategy-api)
- [Requests and Multi-Timeframe Data](#requests-and-multi-timeframe-data)
- [State Namespaces](#state-namespaces)
- [Enum Cheat Sheet](#enum-cheat-sheet)

## Name Rules

- Use exact current API names. Many built-ins are snake_case: `ta.cross_over`, `ta.cross_under`, `ta.value_when`, `ta.bars_since`, `ta.highest_bars`, `ta.lowest_bars`, `str.index_of`, `color.from_gradient`.
- Use PascalCase types: `Array<T>`, `Map<K, V>`, `Matrix<T>`, `Label`, `Line`, `Box`, `Table`, `Plot`, `HLine`.
- Use PascalCase enum variants: `Direction.Long`, `PlotStyle.Histogram`, `Shape.TriangleUp`, `Location.BelowBar`, `BarmergeLookahead.Off`.
- Use uppercase color constants: `color.BLUE`, `color.ORANGE`, `color.RED`.
- Use named arguments with `name: value`, especially for declarations, inputs, plots, and drawings.

## Prelude

Prelude names are available without a module prefix.

Data and time:

- Prices/volume: `open`, `high`, `low`, `close`, `volume`, `hl2`, `hlc3`, `hlcc4`, `ohlc4`, `ask`, `bid`
- Bar/time: `bar_index`, `last_bar_index`, `time`, `time_close`, `time_now`, `last_bar_time`, `time_tradingday`
- Calendar properties/functions: `year`, `month`, `day_of_month`, `day_of_week`, `hour`, `minute`, `second`, `week_of_year`, `timestamp()`

Script declarations:

- `indicator(...)`
- `strategy(...)`
- `library(...)`

Output:

- `plot()`, `plot_shape()`, `plot_char()`, `plot_arrow()`, `plot_bar()`, `plot_candle()`
- `hline()`, `fill()`, `bar_color()`, `bg_color()`
- `alert()`, `alert_condition()`

Utilities:

- `na()`, `nz()`, `fixnan()`
- Casts: `bool()`, `int()`, `float()`, `string()`, `color()`
- `max_bars_back(variable, num)`

## High-Frequency Calls

Inputs:

```navi
let len = input.int(14, "Length", minval: 1);
let src = input.source(close, "Source");
let mult = input.float(2.0, "Multiplier", minval: 0.001, step: 0.1);
let show = input.bool(true, "Show");
let maType = input.string("EMA", "MA Type", options: ["EMA", "SMA", "RMA", "WMA"]);
```

Technical analysis:

```navi
let ma = ta.sma(src, len);
let ema = ta.ema(close, 20);
let rsi = ta.rsi(close, 14);
let atr = ta.atr(14);

let (basis, upper, lower) = ta.bb(close, 20, 2.0);
let (macdLine, signalLine, hist) = ta.macd(close, 12, 26, 9);

let xUp = ta.cross_over(macdLine, signalLine);
let xDn = ta.cross_under(macdLine, signalLine);
```

Plotting:

```navi
plot(ma, "MA", color: color.ORANGE, linewidth: 2);
plot(hist, "Histogram", style: PlotStyle.Histogram, color: hist >= 0 ? color.GREEN : color.RED);
plot_shape(xUp, title: "Cross Up", style: Shape.TriangleUp, location: Location.BelowBar, color: color.GREEN);
hline(0.0, "Zero", color: color.GRAY, linestyle: HLineStyle.Dashed);
```

Strategy:

```navi
if ta.cross_over(fast, slow) {
    strategy.entry("Long", Direction.Long);
}
if ta.cross_under(fast, slow) {
    strategy.close("Long");
}
```

## `ta` Technical Analysis

Common `ta` members:

- Volume/accumulation: `accdist`, `iii`, `nvi`, `obv`, `pvi`, `pvt`, `wad`, `wvad`
- True range/VWAP properties: `ta.tr`, `ta.vwap`; functions: `ta.tr(handle_na)`, `ta.vwap(...)`
- Moving averages: `sma`, `ema`, `rma`, `wma`, `hma`, `alma`, `dema`, `tema`, `swma`, `vwma`, `linreg`
- Oscillators: `rsi`, `cci`, `cmo`, `cog`, `mfi`, `mom`, `roc`, `tsi`, `wpr`, `stoch`, `rci`, `vhf`, `chop`, `cmf`
- Bands/channels: `bb`, `bbw`, `kc`, `kcw`, `atr`, `sar`, `supertrend`
- Statistics: `stdev`, `variance`, `correlation`, `dev`, `median`, `mode`, `percent_rank`, `percentile_linear_interpolation`, `percentile_nearest_rank`, `range`
- Extremes: `highest`, `lowest`, `highest_bars`, `lowest_bars`, `max`, `min`
- Conditions/events: `cross`, `cross_over`, `cross_under`, `rising`, `falling`, `bars_since`, `value_when`, `change`
- Accumulation: `cum`
- Pivots: `pivot_high`, `pivot_low`, `pivot_point_levels`

Multi-return tuple shapes:

```navi
let (basis, upper, lower) = ta.bb(close, 20, 2.0);
let (basis, upper, lower) = ta.kc(close, 20, 1.5);
let (macdLine, signalLine, hist) = ta.macd(close, 12, 26, 9);
let (plusDi, minusDi, adx) = ta.dmi(14, 14);
let (supertrend, direction) = ta.supertrend(3.0, 10);
```

Check the generated API before assuming a length qualifier. Examples:

- `ta.ema(source, length)` requires `simple int` length.
- `ta.sma(source, length)`, `ta.rsi(source, length)`, and several rolling functions accept `series int` length.

## `input` User Inputs

Typed inputs:

- `input.bool`, `input.color`, `input.enum`, `input.float`, `input.int`
- `input.price`, `input.session`, `input.source`, `input.string`
- `input.symbol`, `input.text_area`, `input.time`, `input.timeframe`

Common named arguments: `title`, `minval`, `maxval`, `step`, `options`, `tooltip`, `inline`, `group`, `confirm`, `display`, `active`.

```navi
let len = input.int(20, title: "Length", minval: 1, maxval: 500);
let colorUp = input.color(color.GREEN, "Up Color");
let tf = input.timeframe("D", "Timeframe");
```

Use generic `input(defval, title: "...")` only when mirroring existing scripts. Prefer typed inputs for new code.

## Plotting and Visual Output

Core calls:

- `plot(series, title, color, linewidth, style, offset, display, ...)`
- `plot_shape(series, title, style, location, color, text, size, display, ...)`
- `plot_char`, `plot_arrow`, `plot_bar`, `plot_candle`
- `hline(price, title, color, linestyle, display, ...)`
- `fill(plotOrHline1, plotOrHline2, color, title, display, ...)`
- `bar_color(color)`, `bg_color(color)`

Hide output by plotting `na` or setting `display: display.NONE`:

```navi
let showMa = input.bool(true, "Show MA");
let ma = ta.sma(close, 20);
plot(showMa ? ma : na, "MA");
```

`plot()` returns a `Plot`; `hline()` returns an `HLine`. Keep handles when using `fill()`:

```navi
let upperPlot = plot(upper, "Upper", color: color.RED);
let lowerPlot = plot(lower, "Lower", color: color.GREEN);
fill(upperPlot, lowerPlot, color.new(color.BLUE, 90), title: "Band Fill");
```

## Drawing Objects

Drawing object types: `Label`, `Line`, `Box`, `Linefill`, `Polyline`, `Table`.

Create with `Type.new(...)`; update with dot-call methods or `Type.method(id, ...)`.

```navi
if ta.cross_over(fast, slow) {
    let lbl = Label.new(bar_index, low, "Buy", style: LabelStyle.Up, color: color.GREEN);
    lbl.set_textcolor(color.WHITE);
}
```

Common methods:

- `Label`: `new`, `all`, `delete`, `copy`, `get_text`, `get_x`, `get_y`, `set_x`, `set_y`, `set_xy`, `set_text`, `set_color`, `set_style`, `set_size`, `set_textcolor`, `set_textalign`, `set_tooltip`, `set_xloc`, `set_yloc`, `set_point`
- `Line`: `new`, `all`, `delete`, `copy`, `get_price`, `get_x1`, `get_x2`, `get_y1`, `get_y2`, `set_xy1`, `set_xy2`, `set_color`, `set_style`, `set_width`, `set_extend`, `set_xloc`
- `Box`: `new`, `all`, `delete`, `copy`, `get_left`, `get_right`, `get_top`, `get_bottom`, `set_lefttop`, `set_rightbottom`, `set_bg_color`, `set_border_color`, `set_border_style`, `set_border_width`, `set_text`, `set_extend`
- `Table`: `new`, `all`, `cell`, `clear`, `delete`, `merge_cells`, `set_position`, `set_bgcolor`, `set_frame_color`, `set_frame_width`, `set_border_color`, `set_border_width`, `cell_set_text`, `cell_set_bgcolor`, `cell_set_text_color`, `cell_set_text_halign`, `cell_set_text_valign`

`chart.Point` helpers:

```navi
let p1 = chart.Point.from_index(bar_index - 10, low[10]);
let p2 = chart.Point.now(high);
let lineId = Line.new(p1, p2, color: color.ORANGE);
```

## Collections

`Array<T>`:

```navi
var xs: Array<float> = Array.new<float>();
xs.push(close);
if xs.size() > 100 {
    xs.shift();
}
plot(xs.avg(), "Array avg");
```

Methods include `get`, `set`, `first`, `last`, `size`, `push`, `pop`, `shift`, `unshift`, `insert`, `remove`, `clear`, `copy`, `slice`, `concat`, `sort`, `sort_indices`, `includes`, `indexof`, `lastindexof`, `binary_search`, `binary_search_leftmost`, `binary_search_rightmost`, `avg`, `sum`, `min`, `max`, `median`, `mode`, `range`, `stdev`, `variance`, `percent_rank`, `percentile_linear_interpolation`, `percentile_nearest_rank`, `join`.

`Map<K, V>`:

```navi
var levels: Map<string, float> = Map.new<string, float>();
levels.put("high", high);
let priorHigh = levels.get("high");
```

Methods: `new`, `clear`, `contains`, `copy`, `get`, `keys`, `put`, `put_all`, `remove`, `size`, `values`.

`Matrix<T>`:

```navi
let m: Matrix<float> = Matrix.new<float>(2, 2, 0.0);
m.set(0, 0, close);
let v = m.get(0, 0);
```

Methods include `new`, `get`, `set`, `rows`, `columns`, `row`, `col`, `add_row`, `add_col`, `remove_row`, `remove_col`, `reshape`, `fill`, `copy`, `concat`, `transpose`, `subMatrix`, `sum`, `diff`, `multi`, `pow`, `det`, `rank`, `trace`, `inv`, `pinv`, `eigenvalues`, `eigenvectors`.

## Math, Strings, and Colors

`math`:

- Constants: `math.pi`, `math.e`, `math.phi`, `math.reciprocal_phi`
- Common functions: `abs`, `max`, `min`, `avg`, `sum`, `ceil`, `floor`, `round`, `round_to_mintick`, `sqrt`, `pow`, `exp`, `log`, `log10`, `sign`, `clamp`, `random`
- Trig/conversion: `sin`, `cos`, `tan`, `asin`, `acos`, `atan`, `atan2`, `todegrees`, `toradians`

`str`:

- `tostring`, `tonumber`, `format`, `format_time`
- `contains`, `startswith`, `endswith`, `index_of`, `match`
- `length`, `lower`, `upper`, `trim`, `trim_start`, `trim_end`
- `repeat`, `replace`, `replace_all`, `split`, `substring`, `pad_start`, `pad_end`

`color`:

- Constants: `AQUA`, `BLACK`, `BLUE`, `BROWN`, `CORAL`, `CYAN`, `FUCHSIA`, `GOLD`, `GRAY`, `GREEN`, `INDIGO`, `LIME`, `MAROON`, `NAVY`, `OLIVE`, `ORANGE`, `PINK`, `PURPLE`, `RED`, `SILVER`, `TEAL`, `VIOLET`, `WHITE`, `YELLOW`
- Functions: `color.new(c, transp)`, `color.rgb(red, green, blue, transp)`, `color.from_gradient(...)`, `color.mix(...)`
- Components: `color.red(c)`, `color.green(c)`, `color.blue(c)`, `color.alpha(c)`

## Strategy API

Use only in `strategy()` scripts.

Orders:

- `strategy.entry(id, direction, qty, limit, stop, oca_name, oca_type, comment, alert_message, disable_alert)`
- `strategy.order(...)`
- `strategy.exit(...)`
- `strategy.close(id, ...)`
- `strategy.close_all(...)`
- `strategy.cancel(id)`, `strategy.cancel_all()`

Direction enum: `Direction.Long`, `Direction.Short`, `Direction.All`.

Account/position properties include `strategy.equity`, `strategy.netprofit`, `strategy.openprofit`, `strategy.position_size`, `strategy.position_avg_price`, `strategy.initial_capital`, `strategy.wintrades`, `strategy.losstrades`, `strategy.opentrades`, and `strategy.closedtrades`.

Risk controls live under `strategy.risk`: `allow_entry_in`, `max_position_size`, `max_drawdown`, `max_intraday_filled_orders`, `max_intraday_loss`, `max_cons_loss_days`.

Trade query namespaces: `strategy.closedtrades.*` and `strategy.opentrades.*`.

## Requests and Multi-Timeframe Data

Use `request.security` for another symbol/timeframe:

```navi
let weeklyRsi = request.security(syminfo.tickerid, "W", ta.rsi(close, 14));
plot(weeklyRsi, "Weekly RSI");
```

Important named arguments: `gaps`, `lookahead`, `ignore_invalid_symbol`, `currency`, `calc_bars_count`.

Use `request.security_lower_tf` for lower timeframe arrays:

```navi
let minuteCloses = request.security_lower_tf(syminfo.tickerid, "1", close);
let intrabarAvg = minuteCloses.size() > 0 ? minuteCloses.avg() : na;
plot(intrabarAvg, "Intrabar avg");
```

Other request APIs: `currency_rate`, `data`, `dividends`, `earnings`, `economic`, `financial`, `splits`.

## State Namespaces

- `barstate`: `is_confirmed`, `is_first`, `is_history`, `is_last`, `is_last_confirmed_history`, `is_new`, `is_realtime`
- `timeframe`: `period`, `main_period`, `multiplier`, `isdaily`, `isdwm`, `isintraday`, `isminutes`, `ismonthly`, `isseconds`, `isticks`, `isweekly`, `change()`, `from_seconds()`, `in_seconds()`
- `syminfo`: `ticker`, `tickerid`, `currency`, `base_currency`, `timezone`, `session`, `type`, `min_tick`, `point_value`, `description`, `prefix`, `root`, `sector`, `industry`, `country`
- `session`: `ismarket`, `ispremarket`, `ispostmarket`, `is_first_bar`, `is_last_bar`, `is_first_bar_regular`, `is_last_bar_regular`
- `display`: combine flags such as `display.ALL`, `display.NONE`, `display.PANE`, `display.DATA_WINDOW`, `display.STATUS_LINE`, `display.PRICE_SCALE`, `display.SCREENER`
- `log`: `log.info`, `log.warning`, `log.error`
- `runtime`: `runtime.error`

## Enum Cheat Sheet

| Enum | Common variants |
| --- | --- |
| `Direction` | `Long`, `Short`, `All` |
| `PlotStyle` | `Line`, `LineBr`, `Area`, `AreaBr`, `Circles`, `Columns`, `Cross`, `Histogram`, `Stepline`, `SteplineDiamond`, `SteplineBr` |
| `Shape` | `ArrowDown`, `ArrowUp`, `Circle`, `Cross`, `Diamond`, `Flag`, `LabelDown`, `LabelUp`, `Square`, `TriangleDown`, `TriangleUp`, `XCross` |
| `Location` | `AboveBar`, `BelowBar`, `Top`, `Bottom`, `Absolute` |
| `Size` | `Auto`, `Tiny`, `Small`, `Normal`, `Large`, `Huge` |
| `LabelStyle` | `Down`, `Up`, `Left`, `Right`, `UpperLeft`, `UpperRight`, `LowerLeft`, `LowerRight`, `LabelCenter`, `LabelUp`, `LabelDown`, `TriangleUp`, `TriangleDown`, `NoLabel` |
| `LineStyle` | `Solid`, `Dashed`, `Dotted`, `ArrowLeft`, `ArrowRight`, `ArrowBoth` |
| `HLineStyle` | `Solid`, `Dashed`, `Dotted` |
| `Extend` | `None`, `Left`, `Right`, `Both` |
| `Position` | `TopLeft`, `TopCenter`, `TopRight`, `MiddleLeft`, `MiddleCenter`, `MiddleRight`, `BottomLeft`, `BottomCenter`, `BottomRight` |
| `XLoc` | `BarIndex`, `BarTime` |
| `YLoc` | `Price`, `AboveBar`, `BelowBar` |
| `BarmergeGaps` | `On`, `Off` |
| `BarmergeLookahead` | `On`, `Off` |
| `Format` | `Inherit`, `Price`, `Volume`, `Percent`, `Mintick` |
| `AlertFreq` | `All`, `OncePerBar`, `OncePerBarClose` |
| `DefaultQtyType` | `PercentOfEquity`, `Fixed`, `Cash` |
| `CommissionType` | `Percent`, `CashPerOrder`, `CashPerContract` |
