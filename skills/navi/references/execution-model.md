# Navi Execution Model

Use this file when a script depends on previous bars, persistent state, missing values, realtime updates, or multi-timeframe data.

## Table of Contents

- [Bar-by-Bar Evaluation](#bar-by-bar-evaluation)
- [Series Values](#series-values)
- [Type Qualifiers](#type-qualifiers)
- [`let`, `var`, and `varip`](#let-var-and-varip)
- [Realtime Rollback](#realtime-rollback)
- [`na` Values](#na-values)
- [History References](#history-references)
- [Non-Repainting Rules](#non-repainting-rules)
- [`request.security`](#requestsecurity)

## Bar-by-Bar Evaluation

Navi evaluates the whole script once per bar from oldest to newest. On each bar, every top-level statement runs again with the current bar's `open`, `high`, `low`, `close`, `volume`, `time`, and related values.

```navi
indicator("Per-bar example");

let range = high - low; // recalculated on every bar
plot(range, "Range");
```

Plain `let` variables do not remember previous bars. Use either history references (`x[1]`) or persistent declarations (`var`/`varip`) depending on the problem.

## Series Values

A `series` value is the sequence of values produced as the script runs bar by bar. Price data, most indicator outputs, conditions based on price, and plot values are `series`.

```navi
let ma: series float = ta.sma(close, 20);
let rising: series bool = close > close[1];
```

Use history references to read a prior element of a series:

```navi
let change = close - close[1];
```

## Type Qualifiers

Qualifiers describe when a value is known:

| Qualifier | Known when | Can vary by bar? |
| --- | --- | --- |
| `const` | compile time | no |
| `input` | script startup/settings | no during a run |
| `simple` | first bar | no |
| `series` | each bar | yes |

The hierarchy flows one way:

```text
const -> input -> simple -> series
```

A value can be promoted to a less restrictive qualifier but cannot be demoted.

```navi
let fixed: const int = 2;
let len: input int = input.int(14, "Length");
let source: series float = close;
```

Always check the API signature when passing lengths or options. Some `ta.*` functions accept `series int` lengths; others require `simple int`. If a parameter is `simple`, pass a literal, `const`, `input`, or value that does not vary by bar.

```navi
let len = input.int(14, "Length", minval: 1);
plot(ta.ema(close, len)); // OK: input int can satisfy simple int

let dynamicLen = int(close);
// plot(ta.ema(close, dynamicLen)); // error if the signature requires simple int
```

## `let`, `var`, and `varip`

| Declaration | Initialization | Historical bars | Realtime ticks |
| --- | --- | --- | --- |
| `let` | every execution | recalculated | recalculated |
| `var` | first execution | persists | persists with rollback |
| `varip` | first execution | persists | persists without rollback |

Use `let` for ordinary calculations:

```navi
let body = math.abs(close - open);
```

Use `var` for state accumulated across bars:

```navi
indicator("Green Bar Count");

var count = 0;
if close >= open {
    count += 1;
}
plot(count, "Count");
```

`var` can be initialized inside a branch; it initializes the first time that branch runs.

```navi
if close > open {
    var firstGreenClose = close;
    log.info(str.tostring(firstGreenClose));
}
```

Use persistent collections with `var`:

```navi
var window: Array<float> = Array.new<float>();
window.push(close);
if window.size() > 50 {
    window.shift();
}
plot(window.avg(), "Window average");
```

Use `varip` only for intentional intrabar state:

```navi
varip updates: int = 0;
if barstate.is_new {
    updates = 1;
} else {
    updates += 1;
}
plot(updates, "Realtime updates");
```

`varip` can also be applied to struct fields:

```navi
struct Counter {
    bars: int = 0,
    varip ticks: int = 0,
}

var c: Counter = Counter.new();
c.bars += 1;
c.ticks += 1;
```

## Realtime Rollback

Historical bars are evaluated once. The current realtime bar may be evaluated many times before it is confirmed.

On each realtime update:

- `let` values recalculate normally.
- `var` values roll back to their last confirmed-bar value, then the script recalculates.
- `varip` values do not roll back and continue accumulating within the unconfirmed bar.

Prefer `var` for outputs that should match historical replay. Use `varip` only when tick-level behavior is the actual goal.

## `na` Values

`na` means missing or unavailable. It propagates through most calculations and appears during warmup, missing data, invalid optional outputs, and insufficient history.

```navi
let sma5 = ta.sma(close, 5);
plot(not na(sma5) ? sma5 : na, "SMA 5");
```

Helpers:

- `na(x)` tests whether `x` is missing.
- `nz(x, replacement)` returns `replacement` when `x` is `na`; the default replacement is zero.
- `fixnan(x)` replaces `na` with the last non-`na` value.

```navi
let safeVolume = nz(volume, 0.0);
let heldMa = fixnan(ta.sma(close, 20));
```

Annotate `na` when used alone:

```navi
var peak: float = na;
```

## History References

`x[n]` returns the value `x` produced `n` bars ago. It reads the already-computed historical value; it does not recompute the expression.

```navi
let prevClose = close[1];
let prevSma = ta.sma(close, 14)[1];
let prevRange = (high - low)[1];
```

Rules:

- Offsets are non-negative integers and may be series expressions.
- Insufficient early history yields `na`.
- History references promote the result to `series`.
- Chaining is additive: `close[1][1]` is the same as `close[2]`.
- Use `max_bars_back(seriesRef, count)` only when a script needs a larger history buffer.

Manual cross logic:

```navi
let crossedUp = fast > slow and fast[1] <= slow[1];
let crossedDown = fast < slow and fast[1] >= slow[1];
```

Prefer `ta.cross_over(fast, slow)` and `ta.cross_under(fast, slow)` when their boundary behavior matches the script.

## Non-Repainting Rules

A script repaints when a historical bar's final value differs from what would have been visible while that bar was forming.

Default to these rules:

- Base plotted signals on values available at that bar.
- Gate final alerts/orders on `barstate.is_confirmed` when the signal must wait for bar close.
- Avoid `varip` in historical-looking plots unless the realtime-only nature is intentional.
- Avoid lookahead in `request.security`; prefer `BarmergeLookahead.Off`.
- Be careful with pivot functions: pivots confirm only after enough right-side bars exist, so signal placement may naturally appear delayed.

Confirmed-bar side effect:

```navi
let longSignal = ta.cross_over(fast, slow);
if longSignal and barstate.is_confirmed {
    alert("Long signal", AlertFreq.OncePerBarClose);
}
```

## `request.security`

`request.security(symbol, timeframe, expression, ...)` evaluates `expression` on another symbol or timeframe and aligns the result to the current chart.

```navi
let weeklyClose = request.security(syminfo.tickerid, "W", close);
plot(weeklyClose, "Weekly Close");
```

Guidelines:

- Use `gaps: BarmergeGaps.On` only when you want `na` between confirmed higher-timeframe bars.
- Keep `lookahead: BarmergeLookahead.Off` unless future-looking historical alignment is intentional.
- Use confirmed values, such as `close[1]`, when a higher-timeframe value must not update intrabar.
- Do not declare `var` or `varip` inside the `expression` argument. Declare state at top level, then request that state.

Tuple request:

```navi
let (wOpen, wHigh, wLow, wClose) =
    request.security(syminfo.tickerid, "W", (open, high, low, close));

plot_candle(wOpen, wHigh, wLow, wClose, title: "Weekly OHLC");
```

Lower-timeframe request returns an `Array<T>`:

```navi
let lows = request.security_lower_tf(syminfo.tickerid, "1", low);
let intrabarLow = lows.size() > 0 ? lows.min() : na;
plot(intrabarLow, "1m low inside bar");
```
