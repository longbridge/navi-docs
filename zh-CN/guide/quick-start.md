# Quick Start

Navi scripts run on the Longbridge platform via the `lb` CLI.

## Install the Longbridge CLI

See the [CLI documentation](https://open.longbridge.com/docs/cli/quant) for installation instructions.

## Write Your First Indicator

Create `sma.nvs`:

```navi
indicator("SMA", overlay: true);

let len = input.int(14, "Length", minval: 1);
plot(ta.sma(close, len), "SMA", color: color.ORANGE);
```

## Run Against Historical Data

```bash
lb quant run AAPL.US --start 2024-01-01 --end 2024-12-31 --script sma.nvs
```

Or pipe the script directly:

```bash
cat sma.nvs | lb quant run AAPL.US --start 2024-01-01 --end 2024-12-31
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
lb quant run AAPL.US --start 2023-01-01 --end 2024-12-31 --script macross.nvs
```

## Next Steps

- [Language Basics](/zh-CN/guide/language-basics)
- [Standard Library](/zh-CN/api/stdlib/)
