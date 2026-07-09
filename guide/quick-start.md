# Quick Start

Navi scripts run on the Longbridge platform via the `longbridge` CLI.

## Install the Longbridge CLI

See the [installation guide](https://open.longbridge.com/docs/cli/install) to get started. The [`longbridge quant` command](https://open.longbridge.com/docs/cli/quant) runs Navi and Pine Script files against historical data.

## Write Your First Indicator

Create `sma.nvs`:

```navi
indicator("SMA", overlay: true);

let len = input.int(14, "Length", minval: 1);
plot(ta.sma(close, len), "SMA", color: color.ORANGE);
```

## Run Against Historical Data

```bash
longbridge quant run AAPL.US --start 2024-01-01 --end 2024-12-31 --script sma.nvs
```

Or pipe the script directly:

```bash
cat sma.nvs | longbridge quant run AAPL.US --start 2024-01-01 --end 2024-12-31
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
longbridge quant run AAPL.US --start 2023-01-01 --end 2024-12-31 --script macross.nvs
```

## Running Pine Script Files

Use `--dialect pine` to run an existing Pine Script file without any code changes:

```bash
longbridge quant run AAPL.US --start 2024-01-01 --end 2024-12-31 --script my_indicator.pine --dialect pine
```

The `--dialect` parameter selects the script language:

| Value | Language |
|---|---|
| `navi` | Navi (default for `.nvs` files) |
| `pine` | Pine Script V6 (default for `.pine` files) |

If your file uses the correct extension (`.nvs` or `.pine`), the dialect is detected automatically and `--dialect` can be omitted.

## Next Steps

- [Language Basics](/guide/language-basics)
- [Standard Library](/api/stdlib/)
