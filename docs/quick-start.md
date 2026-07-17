# Quick Start

Before starting, [choose and set up how you want to use Navi](/docs/install). This guide uses the Longbridge CLI to run scripts with market data and the optional standalone `navi` CLI for local development checks.

## Write Your First Indicator

Create `sma.nv`:

```navi
indicator("SMA", overlay: true);

let len = input.int(14, "Length", minval: 1);
plot(ta.sma(close, len), "SMA", color: Color.BLUE);
```

<QuickStartSmaChart />

The blue line is the 14-bar simple moving average produced by the indicator over the AAPL daily candles. The script was executed with `navi run` against the same OHLCV data.

## Check Locally (Optional)

If you installed the standalone `navi` CLI for development, validate the script before running it:

```bash
navi lint sma.nv
```

`lint` checks syntax, types, compilation, imports, and canonical formatting. The standalone CLI does not contain market data. To verify execution, prepare an OHLCV CSV—synthetic bars are sufficient and should cover the script's lookback and important branches—then run:

```bash
navi run sma.nv --data bars.csv --symbol NASDAQ:AAPL --timeframe 1D
```

The required CSV columns are `time,open,high,low,close`; `volume` and `turnover` are optional, and `time` is Unix milliseconds. Use `navi run --help` for the current schema and available options.

When real candles are useful, an installed and authenticated Longbridge CLI can fetch them as JSON:

```bash
longbridge kline history AAPL.US \
  --start 2024-01-01 \
  --end 2024-12-31 \
  --format json
```

Convert the returned OHLCV fields to the CSV schema above. In an AI environment with Longbridge MCP, the agent can instead request historical candlesticks from its market-data tools. If neither is available, use a reputable public market-data source and check its licensing, adjustment, timezone, ordering, and missing-bar conventions.

## Run with Longbridge

Run the indicator against historical market data with the Longbridge CLI:

```bash
cat sma.nv | longbridge quant run AAPL.US \
  --start 2024-01-01 \
  --end 2024-12-31
```

See the [`longbridge quant run` documentation](https://open.longbridge.com/docs/cli/quant) for data periods, inputs, output formats, and backtesting options. You can also use the same script interactively in the Longbridge App or desktop client.

## Write a Strategy

```navi
strategy("MA Cross", overlay: true);

let fast = ta.ema(close, input.int(10, "Fast"));
let slow = ta.ema(close, input.int(20, "Slow"));

if ta.cross_over(fast, slow) {
    strategy.close("Short");
    strategy.entry("Long", Direction.Long);
}
if ta.cross_under(fast, slow) {
    strategy.close("Long");
    strategy.entry("Short", Direction.Short);
}

plot(fast, "Fast EMA");
plot(slow, "Slow EMA");
```

```bash
navi lint ma_cross.nv
navi run ma_cross.nv --data bars.csv --symbol NASDAQ:AAPL --timeframe 1D
```

Running the example over 500 AAPL daily bars prints:

```text
ran 500 bars; plots: 2; trades: 0 ; net profit: 0
```

## Running PineScript Files <Badge type="warning" text="experimental" />

The `navi` CLI is compatible with PineScript v6 syntax. Save the script with a `.pine` extension and pass the global `--pine` option to compile or run it directly:

```bash
navi check my_indicator.pine --pine
navi run my_indicator.pine \
  --data bars.csv \
  --symbol NASDAQ:AAPL \
  --timeframe 1D \
  --pine
```

The `--pine` option is required for `.pine` entry files. Without it, the local CLI accepts Navi `.nv` files.

### Converting to Navi

Both examples calculate Bollinger Bands. PineScript fills the envelope, while the compact Navi version uses a trend-colored basis and simple range boundaries.

```pine
// @version=6
indicator("Bollinger Bands", overlay=true)

length = input.int(20, "Length")
mult   = input.float(2.0, "Multiplier")

[basis, upper, lower] = ta.bb(close, length, mult)

plot(basis, "Basis", color.blue)
upper_plot = plot(upper, "Upper", color.red)
lower_plot = plot(lower, "Lower", color.green)
fill(upper_plot, lower_plot, color.new(color.blue, 90))
```

```navi
indicator("Bollinger Range", overlay: true);

let price_source = input.source(close, "Source");
let period = input.int(20, "Period", minval: 1);
let deviation = input.float(2.0, "Deviation", minval: 0.1);

let (middle, upper_band, lower_band) = ta.bb(price_source, period, deviation);
let middle_color = middle > middle[1] ? Color.GREEN : Color.RED;

plot(middle, "Trend Basis", color: middle_color, line_width: 2);
plot(upper_band, "Upper Range", color: Color.BLUE);
plot(lower_band, "Lower Range", color: Color.BLUE);
```

## Next Steps

- [Language Basics](/docs/language-basics)
- [Standard Library](/api/stdlib/)
