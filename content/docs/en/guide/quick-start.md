---
title: "Quick Start"
---

# Quick Start

Navi scripts run on the Longbridge platform via the `longbridge` CLI.

## Install the Longbridge CLI

See the [installation guide](https://open.longbridge.com/docs/cli/install) to get started. The [`longbridge quant` command](https://open.longbridge.com/docs/cli/quant) runs Navi and Pine Script files against historical data.

## Write Your First Indicator

Create `sma.nv`:

```navi
indicator("SMA", overlay: true);

let len = input.int(14, "Length", minval: 1);
plot(ta.sma(close, len), "SMA", color: color.ORANGE);
```

## Run Against Historical Data

```bash
longbridge quant run AAPL.US --start 2024-01-01 --end 2024-12-31 --script sma.nv
```

Or pipe the script directly:

```bash
cat sma.nv | longbridge quant run AAPL.US --start 2024-01-01 --end 2024-12-31
```

Output defaults to a table with bar-by-bar values. Use `--format json` for structured output.

## Write a Strategy

```navi
strategy("MA Cross", overlay: true);

let fast = ta.ema(close, input.int(10, "Fast"));
let slow = ta.ema(close, input.int(20, "Slow"));

if ta.crossover(fast, slow) { strategy.entry("Long", Direction.Long); }
if ta.crossunder(fast, slow) { strategy.entry("Short", Direction.Short); }

plot(fast, "Fast EMA");
plot(slow, "Slow EMA");
```

```bash
longbridge quant run AAPL.US --start 2023-01-01 --end 2024-12-31 --script macross.nv
```

## Running Pine Script Files

Use `--dialect pine` to run an existing Pine Script file without any code changes:

```bash
longbridge quant run AAPL.US --start 2024-01-01 --end 2024-12-31 --script my_indicator.pine --dialect pine
```

The `--dialect` parameter selects the script language:

| Value | Language |
|---|---|
| `navi` | Navi (default for `.nv` files) |
| `pine` | Pine Script V6 (default for `.pine` files) |

If your file uses the correct extension (`.nv` or `.pine`), the dialect is detected automatically and `--dialect` can be omitted.

### Converting to Navi

For new scripts, Navi (`.nv`) offers full editor support. The following shows a Bollinger Bands indicator written in both languages:

```pine
// Pine Script
// @version=6
indicator("Bollinger Bands", overlay=true)

length = input.int(20, "Length")
mult   = input.float(2.0, "Multiplier")

[basis, upper, lower] = ta.bb(close, length, mult)

plot(basis, "Basis", color.blue)
plot(upper, "Upper", color.red)
plot(lower, "Lower", color.green)
fill(upper, lower, color.new(color.blue, 90))
```

```navi
// Navi
indicator("Bollinger Bands", overlay: true);

let length = input.int(20, "Length");
let mult   = input.float(2.0, "Multiplier");

let (basis, upper, lower) = ta.bb(close, length, mult);

plot(basis, "Basis", color.BLUE);
plot(upper, "Upper", color.RED);
plot(lower, "Lower", color.GREEN);
fill(upper, lower, color.new(color.BLUE, 90));
```

## Next Steps

- [Language Basics](/guide/language-basics)
- [Standard Library](/api/stdlib/)
