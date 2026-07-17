# History Reference

In Navi, every expression is evaluated once per bar, producing a time series of values. The `[]` operator accesses the value that an expression produced on a **previous bar** — not just built-in variables, but any expression:

```navi
let previousClose = close[1];              // close price one bar ago
let twoBarsAgo    = high[2];               // high price two bars ago

let prevSma = ta.sma(close, 14)[1];        // SMA value from the previous bar
let prevEma = ta.ema(close, 10)[3];        // EMA value from 3 bars ago

let prevRange = (high - low)[1];           // bar range from the previous bar

let myValue = close * volume;
let prevMyValue = myValue[1];              // previous bar's value of myValue
```

> **Key concept:** `ta.sma(close, 14)[1]` does **not** recompute the SMA — it returns the value that was already calculated when the script ran on the previous bar.

On early bars where insufficient history exists, the result is `na`. The offset can be a series expression:

```navi
let lookback: int = input.int(5, "Lookback");
let pastClose = close[lookback];
```

## Next Steps

- [Variables & Qualifiers](/docs/types-and-variables) — `var`, type qualifiers, `na`
- [Collections](/docs/collections) — array, map, matrix
