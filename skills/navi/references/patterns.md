# Navi Patterns and Templates

Use these templates when writing complete `.nv` scripts. Prefer the simplest pattern that matches the request, then adapt names, inputs, colors, and plots.

## Table of Contents

- [Complete Templates](#complete-templates)
- [Core Patterns](#core-patterns)
- [Signals and Crosses](#signals-and-crosses)
- [State and Collections](#state-and-collections)
- [Multi-Timeframe Patterns](#multi-timeframe-patterns)
- [Pivot and Divergence Patterns](#pivot-and-divergence-patterns)
- [Strategy Patterns](#strategy-patterns)
- [Common Pitfalls](#common-pitfalls)
- [Debugging and Review Checklist](#debugging-and-review-checklist)

## Complete Templates

### Indicator

```navi
indicator("My Indicator", overlay: true);

let len = input.int(14, "Length", minval: 1);
let src = input.source(close, "Source");

let ma = ta.sma(src, len);
let ready = not na(ma);

plot(ready ? ma : na, "SMA", color: color.ORANGE, linewidth: 2);
```

### Oscillator Pane

```navi
indicator("My Oscillator", overlay: false, format: Format.Price, precision: 2);

let len = input.int(14, "Length", minval: 1);
let osc = ta.rsi(close, len);

plot(osc, "RSI", color: color.PURPLE);
hline(70, "Overbought", color: color.RED, linestyle: HlineStyle.Dashed);
hline(30, "Oversold", color: color.GREEN, linestyle: HlineStyle.Dashed);
```

### Strategy

```navi
strategy("MA Cross Strategy", overlay: true, default_qty_type: DefaultQtyType.Fixed, default_qty_value: 1);

let fastLen = input.int(10, "Fast Length", minval: 1);
let slowLen = input.int(20, "Slow Length", minval: 1);

let fast = ta.ema(close, fastLen);
let slow = ta.ema(close, slowLen);

let longSignal = ta.cross_over(fast, slow);
let shortSignal = ta.cross_under(fast, slow);

if longSignal and barstate.is_confirmed {
    strategy.entry("Long", Direction.Long);
}
if shortSignal and barstate.is_confirmed {
    strategy.entry("Short", Direction.Short);
}

plot(fast, "Fast EMA", color: color.GREEN);
plot(slow, "Slow EMA", color: color.RED);
```

### Library

```navi
//@description Shared technical-analysis helpers.
library("TaHelpers");

//@function Selects a moving average by name.
//@param src Source series.
//@param length Moving-average length.
//@param maType Moving-average type.
//@returns Moving-average series.
export fn ma(src: series float, length: simple int, maType: simple string): series float {
    let result = switch maType {
        "EMA" => ta.ema(src, length),
        "SMA" => ta.sma(src, length),
        "RMA" => ta.rma(src, length),
        "WMA" => ta.wma(src, length),
        => ta.ema(src, length),
    };
    result;
}
```

## Core Patterns

### Selectable Moving Average

```navi
let maType = input.string("EMA", "MA Type", options: ["EMA", "SMA", "RMA", "WMA"]);
let len = input.int(20, "Length", minval: 1);

let ma = switch maType {
    "EMA" => ta.ema(close, len),
    "SMA" => ta.sma(close, len),
    "RMA" => ta.rma(close, len),
    "WMA" => ta.wma(close, len),
    => ta.ema(close, len),
};

plot(ma, "MA", color: color.ORANGE);
```

### Warmup Guard

```navi
let len = input.int(20, "Length", minval: 1);
let ma = ta.sma(close, len);
let ready = not na(ma);

plot(ready ? ma : na, "SMA");
```

### Conditional Output

```navi
let showBands = input.bool(true, "Show Bands");
let (basis, upper, lower) = ta.bb(close, 20, 2.0);

plot(basis, "Basis", color: color.BLUE);
plot(showBands ? upper : na, "Upper", color: color.RED);
plot(showBands ? lower : na, "Lower", color: color.GREEN);
```

### Stable Plot Handles for Fill

```navi
let (basis, upper, lower) = ta.bb(close, 20, 2.0);

let upperPlot = plot(upper, "Upper", color: color.RED);
let lowerPlot = plot(lower, "Lower", color: color.GREEN);
fill(upperPlot, lowerPlot, color.new(color.BLUE, 90), title: "Band Fill");
plot(basis, "Basis", color: color.ORANGE);
```

## Signals and Crosses

Use built-ins for ordinary cross logic:

```navi
let fast = ta.ema(close, 10);
let slow = ta.ema(close, 20);

let crossUp = ta.cross_over(fast, slow);
let crossDown = ta.cross_under(fast, slow);

plot_shape(crossUp, title: "Cross Up", style: Shape.TriangleUp, location: Location.BelowBar, color: color.GREEN);
plot_shape(crossDown, title: "Cross Down", style: Shape.TriangleDown, location: Location.AboveBar, color: color.RED);
```

Spell out the boundary when `>`/`>=` details matter:

```navi
let crossedUp = fast > slow and fast[1] <= slow[1];
let crossedDown = fast < slow and fast[1] >= slow[1];
```

Gate confirmed signals when alerts/orders should wait for bar close:

```navi
let signal = ta.cross_over(fast, slow);
let confirmedSignal = signal and barstate.is_confirmed;

alert_condition(confirmedSignal, "Long", "Long signal");
```

## State and Collections

### Running State with `var`

```navi
var peak: float = na;
if na(peak) or high > peak {
    peak = high;
}

plot(peak, "Peak", color: color.GREEN);
```

### Count Consecutive Bars

```navi
let isUp = close > open;
var count = 0;
count = isUp ? count + 1 : 0;

plot(count, "Up count");
```

### Rolling Array Window

```navi
let size = input.int(50, "Window", minval: 1);

var window: Array<float> = Array.new<float>();
window.push(close);
if window.size() > size {
    window.shift();
}

plot(window.avg(), "Window Average");
```

### Intrabar Counter with `varip`

```navi
varip updates: int = 0;
if barstate.is_new {
    updates = 1;
} else {
    updates += 1;
}

plot(updates, "Realtime Updates", style: PlotStyle.Histogram);
```

Use `varip` only when realtime tick counting is intended.

## Multi-Timeframe Patterns

### Higher-Timeframe Series

```navi
indicator("Weekly MA", overlay: true);

let weeklyMa = request.security(syminfo.tickerid, "W", ta.sma(close, 20), lookahead: BarmergeLookahead.Off);
plot(weeklyMa, "Weekly SMA", color: color.ORANGE);
```

### Confirmed Higher-Timeframe Value

Use prior higher-timeframe values when live updating of the current higher-timeframe bar would repaint a signal.

```navi
let weeklyCloseConfirmed = request.security(syminfo.tickerid, "W", close[1], lookahead: BarmergeLookahead.Off);
plot(weeklyCloseConfirmed, "Confirmed Weekly Close");
```

### Lower-Timeframe Aggregation

```navi
let lows = request.security_lower_tf(syminfo.tickerid, "1", low);
let intrabarLow = lows.size() > 0 ? lows.min() : na;

plot(intrabarLow, "Intrabar Low");
```

## Pivot and Divergence Patterns

Pivot functions return `na` except when a pivot is confirmed. The pivot value corresponds to the pivot bar, usually plotted with a negative `offset` equal to the right lookback.

```navi
let left = input.int(5, "Left", minval: 1);
let right = input.int(5, "Right", minval: 1);

let ph = ta.pivot_high(high, left, right);
let pl = ta.pivot_low(low, left, right);

plot_shape(not na(ph), title: "Pivot High", style: Shape.TriangleDown, location: Location.AboveBar, offset: -right, color: color.RED);
plot_shape(not na(pl), title: "Pivot Low", style: Shape.TriangleUp, location: Location.BelowBar, offset: -right, color: color.GREEN);
```

Simple bearish divergence scaffold:

```navi
let left = input.int(5, "Left", minval: 1);
let right = input.int(5, "Right", minval: 1);
let osc = ta.rsi(close, 14);

let ph = ta.pivot_high(osc, left, right);
let havePivot = not na(ph);

let currPrice = ta.value_when(havePivot, high[right], 0);
let prevPrice = ta.value_when(havePivot, high[right], 1);
let currOsc = ta.value_when(havePivot, osc[right], 0);
let prevOsc = ta.value_when(havePivot, osc[right], 1);

let bearishDiv = havePivot
    and currPrice > prevPrice
    and currOsc < prevOsc;

plot_shape(bearishDiv, title: "Bear Div", style: Shape.TriangleDown, location: Location.AboveBar, offset: -right, color: color.RED);
```

## Strategy Patterns

### Entry and Close

```navi
let longSignal = ta.cross_over(fast, slow);
let exitSignal = ta.cross_under(fast, slow);

if longSignal and barstate.is_confirmed {
    strategy.entry("Long", Direction.Long);
}
if exitSignal and barstate.is_confirmed {
    strategy.close("Long");
}
```

### Stop/Limit Exit

```navi
let atr = ta.atr(14);
let stopPrice = strategy.position_avg_price - atr * 2.0;
let takePrice = strategy.position_avg_price + atr * 3.0;

if strategy.position_size > 0 {
    strategy.exit("Long Exit", "Long", stop: stopPrice, limit: takePrice);
}
```

### Risk Guard

```navi
strategy.risk.max_drawdown(20, DefaultQtyType.PercentOfEquity);
strategy.risk.max_position_size(10);
```

## Common Pitfalls

- Do not use outdated aliases when the current API uses snake_case. Prefer `ta.cross_over`, `ta.cross_under`, `ta.value_when`, `ta.bars_since`, `ta.pivot_high`, and `ta.pivot_low`.
- Do not write lowercase collection types (`array<T>`, `map<K,V>`, `matrix<T>`). Use `Array<T>`, `Map<K, V>`, and `Matrix<T>`.
- Do not compare `na` with `==`; use `na(x)` or `not na(x)`.
- Do not use a `series` value for a parameter that the API marks `simple`, `input`, or `const`.
- Do not store tuples; destructure them immediately.
- Do not use `varip` unless realtime intrabar behavior is required.
- Do not let plot order change across refactors.
- Do not depend on `request.security(..., lookahead: BarmergeLookahead.On)` unless future-looking alignment is intentionally requested.
- Do not use recursion; rewrite as a loop.

## Debugging and Review Checklist

Before returning a script:

- The script starts with `indicator`, `strategy`, or `library`.
- All statements that need semicolons have them.
- Function and struct annotations use `name: type`.
- API names match `api/stdlib` spellings.
- Warmup `na` behavior is handled for rolling calculations.
- Crosses use either `ta.cross_over`/`ta.cross_under` or explicit history comparisons.
- Strategies gate orders with `barstate.is_confirmed` when close-confirmed behavior is intended.
- MTF logic uses `BarmergeLookahead.Off` by default.
- Plots have stable titles, order, and colors.
