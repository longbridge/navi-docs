---
title: "Variables & Qualifiers"
---

# Variables & Qualifiers

## Variable Declaration

Variables can be declared with explicit or inferred types:

```navi
// Type inferred
let a = 10;                // inferred as int
let name = "AAPL";         // inferred as String

// Explicit type
let b: float = 3.14;
let label: String = "Buy";
let flag: bool = true;
```

If the type cannot be inferred, an explicit annotation is required:

```navi
let a = na;                // ERROR: cannot infer variable type
let a: float = na;         // OK
```

## Reassignment

Use `=` to reassign a variable. Compound assignment operators are also supported:

```navi
let a = 10;
a = 20;    // Reassignment
a += 5;    // a = a + 5
a -= 1;    // a = a - 1
a *= 2;    // a = a * 2
a /= 3;    // a = a / 3
a %= 4;    // a = a % 4
```

## Type Qualifiers

Navi has four type qualifiers that describe when a value is known, from most restrictive to least:

| Qualifier | Meaning |
|---|---|
| `const` | Known at compile time, never changes |
| `input` | Known at script startup (e.g., user inputs) |
| `simple` | Known on bar 0, same value on every bar |
| `series` | Can change on every bar |

```navi
let a: const int = 2;
let b: input int = 10;
let c: simple int = a + b;
let d: series float = close;
```

The qualifier hierarchy flows: `const` -> `input` -> `simple` -> `series`. A value can be auto-promoted up this hierarchy but not demoted.

## `var` — Initialize Once, Persist Across Bars

Without a declaration mode, variables are re-initialized on **every script execution** (every bar, every tick). The `var` keyword changes this — the variable is initialized **only once** on the first bar, and retains its last assigned value on all subsequent bars:

```navi
indicator("Green Bars Count");
var count = 0;
let isGreen = close >= open;
if isGreen {
    count = count + 1;
}
plot(count);
```

Without `var`, `count` would reset to `0` on every bar, so the plot would only show `0` or `1`. With `var`, the value accumulates across bars.

### `var` inside `if` blocks

`var` can be used inside `if` blocks. The variable is initialized on the **first execution that enters the block**:

```navi
var a = close;
var b = 0.0;
if close > open {
    var x = close; // initialized once when this branch first executes
    b = x;
}
```

### `var` with collections

`var` works with all types including arrays and objects. A `var` array persists and can grow across bars:

```navi
var a = Array.new<float>(0);
a.push(close);             // array grows by 1 element on each bar
```

### Real-time behavior of `var`

On historical bars, `var` and non-`var` behave identically because the script runs exactly once per bar. The difference is visible on **real-time bars**: without `var`, the variable resets on each tick; with `var`, it retains its value across ticks but is subject to **rollback** when the bar closes (the value reverts to what it was at the last confirmed bar, then re-executes once for the new confirmed bar).

## `varip` — Persist Without Rollback

`varip` (var intrabar persist) is similar to `var` — initialized only once. The key difference is that `varip` variables are **not subject to rollback** on real-time bars. They retain their values across all executions, including multiple ticks within the same unconfirmed bar:

```navi
indicator("varip demo");
varip updateCount: int = na;
if barstate.is_new {
    updateCount = 1;
} else {
    updateCount = updateCount + 1;
}
plot(updateCount, style: PlotStyle.Circles);
```

This is useful for tracking tick-level data. On historical bars, `varip` behaves identically to `var`.

### `varip` on type fields

`varip` can be used on individual type fields to make them persist across intrabar updates while other fields still roll back:

```navi
struct Counter {
    int bars = 0,
    varip int ticks = 0,
}

var counter: Counter = Counter.new();
counter.bars += 1; // subject to rollback on unconfirmed bars
counter.ticks += 1; // NOT subject to rollback
```

### Comparison Table

| Behavior | No keyword | `var` | `varip` |
|---|---|---|---|
| Initialization | Every execution | Once (first bar) | Once (first bar) |
| Historical bars | Re-init each bar | Persists | Persists |
| Real-time ticks | Re-init each tick | Persists (with rollback) | Persists (no rollback) |

## Tuple Destructuring

Functions that return tuples can be destructured with `(...)` syntax:

```navi
let (median, upperBand, lowerBand) = ta.bb(close, 20, 2.0);
plot(median);
plot(upperBand);
plot(lowerBand);
```

## Discard (`_`)

Use `_` to discard unwanted values. It can be used multiple times:

```navi
let (_, upper, _) = ta.bb(close, 20, 2.0);

let _ = someFunction();     // Discard return value
let _ = anotherFunction();
```

## `na` — Missing Values

`na` represents a missing or undefined value. Many functions return `na` when there isn't enough data:

```navi
let sma5 = ta.sma(close, 5); // na for the first 4 bars

// Check for na with na()
if not na(sma5) {
    label.new(bar_index, sma5, String.from(sma5));
}
```

Use `nz()` to replace `na` with a default:

```navi
let value = nz(ta.sma(close, 5), 0.0);  // Replace na with 0
```

Use `fixnan()` to replace `na` with the last non-na value:

```navi
let value = fixnan(ta.sma(close, 5));
```

## Next Steps

- [Control Structures](/guide/control-structures) — if, for, while, switch
- [Functions & Methods](/guide/functions-and-methods) — defining and calling functions
