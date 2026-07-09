# Examples

This page walks through two complete Navi scripts with line-by-line explanations. Each example is designed to illustrate core language features in a realistic context.

## Example 1 — SMA Crossover Indicator

This indicator plots a fast and a slow simple moving average and marks crossover and crossunder events on the chart. It covers variables, series, the `ta` module, `plot`, and `plot_shape`.

- [Simple Moving Average (SMA)](https://en.wikipedia.org/wiki/Moving_average#Simple_moving_average)

```navi
// ① Declare this script as an indicator.
//   - title        : displayed in the chart legend
//   - overlay=true : draw on top of the price candles (not in a separate pane)
indicator("SMA Crossover", overlay:  true);

// ② User-configurable inputs.
//   input.int() creates an integer input that appears in the script settings panel.
//   The second argument is the default value; "title" labels it in the UI.
let fastLen = input.int(9,  title:  "Fast Length");
let slowLen = input.int(21, title:  "Slow Length");

// ③ Compute the two SMA series.
//   These are series<float>: one value is produced per bar.
let fast = ta.sma(close, fastLen);
let slow = ta.sma(close, slowLen);

// ④ Detect crossover and crossunder events.
//   ta.crossover(a, b)  → true on the bar where a crosses above b
//   ta.crossunder(a, b) → true on the bar where a crosses below b
let crossUp   = ta.crossover(fast, slow);
let crossDown = ta.crossunder(fast, slow);

// ⑤ Plot the two moving averages as continuous lines.
//   linewidth=2 makes them slightly thicker than the default 1.
plot(fast, title:  "Fast SMA", color:  color.BLUE,   linewidth:  2);
plot(slow, title:  "Slow SMA", color:  color.ORANGE, linewidth:  2);

// ⑥ Mark bullish crossovers with an upward triangle below the bar.
//   plot_shape only draws on bars where the first argument is true.
plot_shape(crossUp,
    title:  "Bullish Cross",
    style:  Shape.TriangleUp,
    location:  Location.BelowBar,
    color:  color.GREEN,
    size:  Size.Small);

// ⑦ Mark bearish crossunders with a downward triangle above the bar.
plot_shape(crossDown,
    title:  "Bearish Cross",
    style:  Shape.TriangleDown,
    location:  Location.AboveBar,
    color:  color.RED,
    size:  Size.Small);

// ⑧ Color the chart background on bullish or bearish cross bars for emphasis.
//   color.new(c, transp) creates a transparent version of the color (0=opaque, 100=invisible).
//   The ternary operator ?: picks the color based on which event occurred.
let bgColor = crossUp   ? color.new(color.GREEN, 85) :
              crossDown ? color.new(color.RED,   85) : na;
bg_color(bgColor);
```

### Key concepts illustrated

| Concept | Where |
|---|---|
| Script declaration | `indicator(...)` — line ① |
| User inputs | `input.int` — line ② |
| `series<float>` variables | `fast`, `slow`, `crossUp`, `crossDown` — lines ③④ |
| `ta` module | `ta.sma`, `ta.crossover`, `ta.crossunder` — lines ③④ |
| Plotting lines | `plot(...)` — line ⑤ |
| Plotting shapes | `plot_shape(...)` — lines ⑥⑦ |
| Transparent colors | `color.new(c, transp)` — line ⑧ |
| Ternary operator | `c ? a : b` — line ⑧ |
| `na` as "no value" | `na` used to skip background coloring — line ⑧ |

---

## Example 2 — Bollinger Bands Strategy

This strategy enters long when price closes above the upper band and exits when it falls back below the middle band (and vice-versa for the short side). It covers `strategy()`, `ta.bb`, tuple destructuring, the history operator, and `strategy.entry` / `strategy.close`.

- [Bollinger Bands](https://en.wikipedia.org/wiki/Bollinger_Bands)

```navi
// ① Declare this script as a strategy.
// - default_qty_type : use a fixed number of contracts/shares per trade
// default_qty_value : trade 1 unit by default
strategy(
    "Bollinger Bands Breakout",
    default_qty_type:  DefaultQtyType.Fixed,
    default_qty_value:  1
);

// ② Compute Bollinger Bands.
// ta.bb returns a tuple: (middle, upper, lower).
// The (a, b, c) = ... syntax destructures the tuple into three variables.
let (basis, upper, lower) = ta.bb(close, 20, 2.0);

// ③ Entry conditions.
// close[1] references the *previous* bar's close (history operator []).
// Combining the current bar with the prior bar detects the exact crossover bar.
let longEntry = close > upper and close[1] <= upper[1];
let shortEntry = close < lower and close[1] >= lower[1];

// ④ Exit conditions: price crosses back through the middle band.
let longExit = close < basis;
let shortExit = close > basis;

// ⑤ Issue strategy orders.
// strategy.entry opens a position; strategy.close closes it by trade ID.
if longEntry {
    strategy.entry("Long", Direction.Long);
}
if shortEntry {
    strategy.entry("Short", Direction.Short);
}

if longExit {
    strategy.close("Long");
}
if shortExit {
    strategy.close("Short");
}
```

### Key concepts illustrated

| Concept | Where |
|---|---|
| Strategy declaration | `strategy(...)` — line ① |
| Tuple destructuring | `let (basis, upper, lower) = ta.bb(...)` — line ② |
| `ta.bb` | Bollinger Bands computation — line ② |
| History operator `[]` | `close[1]`, `upper[1]` — line ③ |
| Boolean series | `longEntry`, `shortEntry`, `longExit`, `shortExit` — lines ③④ |
| `if` statement | Strategy order blocks — line ⑤ |
| `strategy.entry` / `strategy.close` | Opening and closing trades — line ⑤ |

---

## Further Reading

- [Language Basics](/guide/language-basics) — operators, literals, the history operator
- [Types & Variables](/guide/types-and-variables) — `var`, type qualifiers, `na`
- [Control Structures](/guide/control-structures) — `if`, `for`, `while`, `switch`
- [Functions & Methods](/guide/functions-and-methods) — defining and calling functions
- [Standard Library](/api/stdlib/) — `ta`, `math`, `str`, `strategy`, and more
