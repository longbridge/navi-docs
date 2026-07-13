---
title: "ta"
---


# ta

## Types

| Name | Description |
| --- | --- |
| [`PivotType`](/api/stdlib/ta/PivotType) | Pivot point calculation method for <a class="stdlib-ref" data-key="ta::pivot_point_levels" href="/api/stdlib/ta/#pivot_point_levels">ta.pivot_point_levels</a>. |

## Properties

### accdist {#accdist}

**Type:** <code>series&nbsp;float</code>

Accumulation/Distribution Line (ADL).

It measures the cumulative flow of money into and out of a security.

---

### iii {#iii}

**Type:** <code>series&nbsp;float</code>

Intraday Intensity Index (III).

It measures the flow of volume into and out of a security.

---

### nvi {#nvi}

**Type:** <code>series&nbsp;float</code>

Negative Volume Index (NVI).

It focuses on days when the volume decreases compared to the previous day.

---

### obv {#obv}

**Type:** <code>const&nbsp;float</code>

On-Balance Volume (OBV).

It measures buying and selling pressure as a cumulative indicator that adds volume on up days and subtracts volume on down days.

---

### pvi {#pvi}

**Type:** <code>const&nbsp;float</code>

Positive Volume Index (PVI).

It focuses on days when the volume increases compared to the previous day.

---

### pvt {#pvt}

**Type:** <code>const&nbsp;float</code>

Price Volume Trend (PVT).

It combines price and volume to determine the strength of price movements.

---

### tr {#prop-tr}

**Type:** <code>series&nbsp;float</code>

True Range (TR) with na handling enabled.

Equivalent to `ta.tr(handle_na = true)`.

---

### vwap {#prop-vwap}

**Type:** <code>series&nbsp;float</code>

Daily Volume Weighted Average Price using hlc3 as source.

Resets at the start of each day. This is the standard VWAP used on most trading platforms.

---

### wad {#wad}

**Type:** <code>const&nbsp;float</code>

Williams Accumulation/Distribution (WAD).

It measures buying and selling pressure by comparing the close price to the high-low range.

---

### wvad {#wvad}

**Type:** <code>const&nbsp;float</code>

Williams Variable Accumulation/Distribution (WVAAD).

It adjusts the accumulation/distribution calculation by considering the position of the close price within the true range.

## Functions

### alma {#alma}

```navi
ta.alma(
    series: series float,
    length: series int,
    offset: simple float,
    sigma: simple float,
    floor: simple bool = false
  ): series float
```

Arnaud Legoux Moving Average.

It uses Gaussian distribution as weights for moving average.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `series` | <code>series&nbsp;float</code> |  | Series of values to process. |
| `length` | <code>series&nbsp;int</code> |  | Number of bars (length). |
| `offset` | <code>simple&nbsp;float</code> |  | Controls tradeoff between smoothness (closer to 1) and responsiveness (closer to 0). |
| `sigma` | <code>simple&nbsp;float</code> |  | Changes the smoothness of ALMA. The larger sigma the smoother ALMA. |
| `floor` | <code>simple&nbsp;bool</code> | `false` | Specifies whether the offset calculation is floored before ALMA is calculated. |

**Returns:** <code>series&nbsp;float</code>

---

### atr {#atr}

```navi
ta.atr(length: simple int): series float
```

Calculates the Average True Range (ATR) of a financial instrument over a specified `length`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `length` | <code>simple&nbsp;int</code> |  | The number of bars for the ATR calculation. |

**Returns:** <code>series&nbsp;float</code>

---

### bars_since {#bars_since}

```navi
ta.bars_since(condition: series bool): series int
```

Counts the number of bars since the last time the condition was true.

If the condition has never been true, it returns na.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `condition` | <code>series&nbsp;bool</code> |  | The boolean condition to check. |

**Returns:** <code>series&nbsp;int</code> — The number of bars since the condition was last true, or `na` if it has never been true.

---

### bb {#bb}

```navi
ta.bb(series: series float, length: series int, mult: simple float)
```

Bollinger Bands (BB).

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `series` | <code>series&nbsp;float</code> |  | The input series for BB calculation. |
| `length` | <code>series&nbsp;int</code> |  | The number of bars for the calculation. |
| `mult` | <code>simple&nbsp;float</code> |  | The multiplier for the standard deviation bands. |

**Returns:** A tuple of `[basis, upper, lower]` where basis is the SMA, upper/lower are basis ± mult × stdev.

**Examples**

```navi
let (bbBasis, bbUpper, bbLower) = ta.bb(close, 20, 2.0);
plot(bbBasis, title: "BB Basis", color: Color.ORANGE);
plot(bbUpper, title: "BB Upper", color: Color.BLUE);
plot(bbLower, title: "BB Lower", color: Color.BLUE);
```

---

### bbw {#bbw}

```navi
ta.bbw(
    source: series float,
    length: series int,
    mult: simple float
  ): series float
```

Bollinger Band Width (BBW).

It measures the width of the Bollinger Bands relative to the moving average.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The input series for BBW calculation. |
| `length` | <code>series&nbsp;int</code> |  | The number of bars for the calculation. |
| `mult` | <code>simple&nbsp;float</code> |  | The multiplier for the standard deviation bands. |

**Returns:** <code>series&nbsp;float</code> — The bandwidth as a percentage: `(upper - lower) / basis × 100`.

---

### cci {#cci}

```navi
ta.cci(source: series float, length: series int): series float
```

Commodity Channel Index (CCI).

It measures the deviation of the `series` series from its statistical mean.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The input series for the calculation. |
| `length` | <code>series&nbsp;int</code> |  | The number of bars for the calculation. |

**Returns:** <code>series&nbsp;float</code>

---

### change {#change}

**Overloads**

```navi
ta.change(source: series int, length: series int = 1): series int
ta.change(source: series float, length: series int = 1): series float
ta.change(source: series bool, length: series int = 1): series bool
```

Calculates the difference between the current `source` value and its value `length` bars ago.

Useful for measuring momentum or rate of change.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;int</code> |  | The integer series to compare. |
| `length` | <code>series&nbsp;int</code> | `1` | Number of bars to look back. Defaults to 1 (previous bar). |

**Returns:** <code>series&nbsp;int</code> — `source - source[length]`.

Calculates the difference between the current `source` value and its value `length` bars ago.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The float series to compare. |
| `length` | <code>series&nbsp;int</code> | `1` | Number of bars to look back. Defaults to 1 (previous bar). |

**Returns:** <code>series&nbsp;float</code> — `source - source[length]`.

Detects if a boolean value has changed from its value `length` bars ago.

Useful for detecting state transitions (e.g., signal flips).

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;bool</code> |  | The boolean series to compare. |
| `length` | <code>series&nbsp;int</code> | `1` | Number of bars to look back. Defaults to 1 (previous bar). |

**Returns:** <code>series&nbsp;bool</code> — `true` if the current value differs from the historical value, `false` otherwise.

---

### chop {#chop}

```navi
ta.chop(length: simple int): series float
```

Choppiness Index (CHOP).

Quantifies how directional (trending) or sideways (choppy) the market is. Values near 100 signal maximum choppiness; values near the lower bound (≈ `100/log10(length)`) signal strong trend. Formula: `100 * log10(sum(ATR(1), length) / (highest_high - lowest_low)) / log10(length)`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `length` | <code>simple&nbsp;int</code> |  | The lookback period (must be &gt;= 2). |

**Returns:** <code>series&nbsp;float</code>

---

### cmf {#cmf}

```navi
ta.cmf(length: simple int): series float
```

Chaikin Money Flow (CMF).

Measures buying and selling pressure over `length` bars using the Money Flow Multiplier weighted by volume. Positive values indicate accumulation; negative values indicate distribution. Formula: `sum(MFV, length) / sum(volume, length)` where `MFV = ((close - low) - (high - close)) / (high - low) * volume`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `length` | <code>simple&nbsp;int</code> |  | The number of bars to accumulate. |

**Returns:** <code>series&nbsp;float</code>

---

### cmo {#cmo}

```navi
ta.cmo(series: series float, length: series int): series float
```

Chande Momentum Oscillator (CMO).

It measures the momentum of the `series` series over the specified `length`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `series` | <code>series&nbsp;float</code> |  | The input series for the calculation. |
| `length` | <code>series&nbsp;int</code> |  | The number of bars for the calculation. |

**Returns:** <code>series&nbsp;float</code> — A value between -100 and 100. Positive values indicate upward momentum, negative indicate downward.

---

### cog {#cog}

```navi
ta.cog(source: series float, length: series int): series float
```

Center of Gravity (COG).

It identifies the center of gravity of the `source` series over the specified `length`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The input series for the calculation. |
| `length` | <code>series&nbsp;int</code> |  | The number of bars for the calculation. |

**Returns:** <code>series&nbsp;float</code>

---

### correlation {#correlation}

```navi
ta.correlation(
    source1: series float,
    source2: series float,
    length: series int
  ): series float
```

Pearson Correlation Coefficient between two series over the specified `length`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source1` | <code>series&nbsp;float</code> |  | The first input series. |
| `source2` | <code>series&nbsp;float</code> |  | The second input series. |
| `length` | <code>series&nbsp;int</code> |  | The number of bars for the calculation. |

**Returns:** <code>series&nbsp;float</code> — A value between -1.0 (perfectly negatively correlated) and 1.0 (perfectly positively correlated). 0.0 indicates no linear correlation.

---

### cross {#cross}

```navi
ta.cross(source1: series float, source2: series float): series bool
```

Detects if `source1` has crossed `source2` in either direction.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source1` | <code>series&nbsp;float</code> |  | The first series to compare. |
| `source2` | <code>series&nbsp;float</code> |  | The second series to compare. |

**Returns:** <code>series&nbsp;bool</code>

---

### cross_over {#cross_over}

```navi
ta.cross_over(source1: series float, source2: series float): series bool
```

Detects if `source1` has crossed over `source2`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source1` | <code>series&nbsp;float</code> |  | The first series to compare. |
| `source2` | <code>series&nbsp;float</code> |  | The second series to compare. |

**Returns:** <code>series&nbsp;bool</code>

**Examples**

```navi
let fastEma = ta.ema(close, 9);
let slowEma = ta.ema(close, 21);
if ta.cross_over(fastEma, slowEma) {
label.new(bar_index, low, "Buy", style: LabelStyle.Up);
}
```

---

### cross_under {#cross_under}

```navi
ta.cross_under(source1: series float, source2: series float): series bool
```

Detects if `source1` has crossed under `source2`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source1` | <code>series&nbsp;float</code> |  | The first series to compare. |
| `source2` | <code>series&nbsp;float</code> |  | The second series to compare. |

**Returns:** <code>series&nbsp;bool</code>

**Examples**

```navi
let fastEma = ta.ema(close, 9);
let slowEma = ta.ema(close, 21);
if ta.cross_under(fastEma, slowEma) {
label.new(bar_index, high, "Sell", style: LabelStyle.Down);
}
```

---

### cum {#cum}

```navi
ta.cum(source: series float): series float
```

Cumulative sum of the `source` series.

In other words it's a sum of all elements of the `source` series.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The input series to accumulate. |

**Returns:** <code>series&nbsp;float</code>

---

### dema {#dema}

```navi
ta.dema(source: series float, length: simple int): series float
```

Double Exponential Moving Average (DEMA).

Reduces the lag of a standard EMA by subtracting an EMA of the EMA. Formula: `2 * EMA(source, length) - EMA(EMA(source, length), length)`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The series to smooth. |
| `length` | <code>simple&nbsp;int</code> |  | The smoothing period. |

**Returns:** <code>series&nbsp;float</code>

---

### dev {#dev}

```navi
ta.dev(source: series float, length: series int): series float
```

Mean Deviation of the `source` series over the specified `length`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The input series for the calculation. |
| `length` | <code>series&nbsp;int</code> |  | The number of bars for the calculation. |

**Returns:** <code>series&nbsp;float</code>

---

### dmi {#dmi}

```navi
ta.dmi(di_length: simple int, adx_smoothing: simple int)
```

Directional Movement Index (DMI).

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `di_length` | <code>simple&nbsp;int</code> |  | The length for Directional Indicator calculation. |
| `adx_smoothing` | <code>simple&nbsp;int</code> |  | The smoothing length for ADX calculation. |

**Returns:** A tuple of `[plus_di, minus_di, adx]`, all expressed as percentages (0–100).

---

### ema {#ema}

```navi
ta.ema(source: series float, length: simple int): series float
```

Exponential Moving Average (EMA).

It gives more weight to recent prices to make it more responsive to new information.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The input series for the calculation. |
| `length` | <code>simple&nbsp;int</code> |  | The number of bars for the calculation. |

**Returns:** <code>series&nbsp;float</code>

**Examples**

```navi
let ema12 = ta.ema(close, 12);
let ema26 = ta.ema(close, 26);
plot(ema12, title: "EMA 12", color: Color.GREEN);
plot(ema26, title: "EMA 26", color: Color.RED);
```

---

### falling {#falling}

```navi
ta.falling(source: series float, length: series int): series bool
```

Checks if the `source` series is falling over the specified `length`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The input series to check. |
| `length` | <code>series&nbsp;int</code> |  | The number of bars to check. |

**Returns:** <code>series&nbsp;bool</code>

---

### highest {#highest}

**Overloads**

```navi
ta.highest(length: series int): series float
ta.highest(source: series float, length: series int): series float
```

Returns the highest value of the `high` series over the specified `length`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `length` | <code>series&nbsp;int</code> |  | The number of bars to check. |

**Returns:** <code>series&nbsp;float</code>

Returns the highest value of the `source` series over the specified `length`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The input series to evaluate. |
| `length` | <code>series&nbsp;int</code> |  | The number of bars to check. |

**Returns:** <code>series&nbsp;float</code>

**Examples**

```navi
let highestHigh = ta.highest(high, 20);
plot(highestHigh, title: "20-bar High", color: Color.RED,
style: PlotStyle.Stepline);
```

---

### highest_bars {#highest_bars}

**Overloads**

```navi
ta.highest_bars(source: series float, length: series int): series int
ta.highest_bars(length: series int): series int
```

Returns the number of bars since the highest value of the `source` series over the specified `length`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The input series to evaluate. |
| `length` | <code>series&nbsp;int</code> |  | The number of bars to check. |

**Returns:** <code>series&nbsp;int</code> — A non-positive offset (0 if the highest is the current bar, negative otherwise), or `na` if any value in the window is `na`.

Returns the number of bars since the highest value of the `high` series over the specified `length`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `length` | <code>series&nbsp;int</code> |  | The number of bars to check. |

**Returns:** <code>series&nbsp;int</code>

---

### hma {#hma}

```navi
ta.hma(source: series float, length: simple int): series float
```

Hull Moving Average (HMA).

It aims to reduce lag while maintaining a smooth curve.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The input series for the calculation. |
| `length` | <code>simple&nbsp;int</code> |  | The number of bars for the calculation. |

**Returns:** <code>series&nbsp;float</code>

---

### kc {#kc}

```navi
ta.kc(
    series: series float,
    length: simple int,
    mult: simple float,
    use_true_range: simple bool = true
  )
```

Keltner Channels (KC).

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `series` | <code>series&nbsp;float</code> |  | The input series for KC calculation. |
| `length` | <code>simple&nbsp;int</code> |  | The number of bars for the calculation. |
| `mult` | <code>simple&nbsp;float</code> |  | The multiplier for the channel bands. |
| `use_true_range` | <code>simple&nbsp;bool</code> | `true` | Whether to use True Range. |

**Returns:** A tuple of `[basis, upper, lower]` where basis is the EMA, upper/lower are basis ± mult × range EMA.

---

### kcw {#kcw}

```navi
ta.kcw(
    series: series float,
    length: simple int,
    mult: simple float,
    use_true_range: simple bool = true
  ): series float
```

Keltner Channel Width (KCW).

It measures the width of the Keltner Channels relative to the moving average.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `series` | <code>series&nbsp;float</code> |  | The input series for KCW calculation. |
| `length` | <code>simple&nbsp;int</code> |  | The number of bars for the calculation. |
| `mult` | <code>simple&nbsp;float</code> |  | The multiplier for the channel bands. |
| `use_true_range` | <code>simple&nbsp;bool</code> | `true` | Whether to use True Range. |

**Returns:** <code>series&nbsp;float</code> — The channel width as a ratio: `(upper - lower) / basis`.

---

### linreg {#linreg}

```navi
ta.linreg(
    source: series float,
    length: series int,
    offset: simple int
  ): series float
```

Linear Regression (LINREG).

It fits a linear regression line to the `source` series over the specified `length` and returns the value at the given `offset`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The input series for the calculation. |
| `length` | <code>series&nbsp;int</code> |  | The number of bars for the regression. |
| `offset` | <code>simple&nbsp;int</code> |  | The offset for the regression line (future bar offset). |

**Returns:** <code>series&nbsp;float</code>

---

### lowest {#lowest}

**Overloads**

```navi
ta.lowest(length: series int): series float
ta.lowest(source: series float, length: series int): series float
```

Returns the lowest value of the `low` series over the specified `length`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `length` | <code>series&nbsp;int</code> |  | The number of bars to check. |

**Returns:** <code>series&nbsp;float</code>

Returns the lowest value of the `source` series over the specified `length`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The input series to evaluate. |
| `length` | <code>series&nbsp;int</code> |  | The number of bars to check. |

**Returns:** <code>series&nbsp;float</code>

---

### lowest_bars {#lowest_bars}

**Overloads**

```navi
ta.lowest_bars(source: series float, length: series int): series int
ta.lowest_bars(length: series int): series int
```

Returns the number of bars since the lowest value of the `source` series over the specified `length`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The input series to evaluate. |
| `length` | <code>series&nbsp;int</code> |  | The number of bars to check. |

**Returns:** <code>series&nbsp;int</code> — A non-positive offset (0 if the lowest is the current bar, negative otherwise), or `na` if any value in the window is `na`.

Returns the number of bars since the lowest value of the `low` series over the specified `length`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `length` | <code>series&nbsp;int</code> |  | The number of bars to check. |

**Returns:** <code>series&nbsp;int</code>

---

### macd {#macd}

```navi
ta.macd(
    source: series float,
    fast_length: simple int,
    slow_length: simple int,
    signal_length: simple int
  )
```

Moving Average Convergence Divergence (MACD).

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The input series for the calculation. |
| `fast_length` | <code>simple&nbsp;int</code> |  | The length for the fast EMA. |
| `slow_length` | <code>simple&nbsp;int</code> |  | The length for the slow EMA. |
| `signal_length` | <code>simple&nbsp;int</code> |  | The length for the signal line EMA. |

**Returns:** A tuple of `[macd_line, signal_line, histogram]` where histogram = macd_line − signal_line.

**Examples**

```navi
let (macdLine, signalLine, histLine) = ta.macd(close, 12, 26, 9);
plot(macdLine,   title: "MACD",     color: Color.BLUE);
plot(signalLine, title: "Signal",   color: Color.ORANGE);
plot(histLine, title: "Hist", color: Color.GRAY, style: PlotStyle.Histogram);
```

---

### max {#max}

```navi
ta.max(source: series float): series float
```

Returns the maximum value of the `source` series.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The input series to evaluate. |

**Returns:** <code>series&nbsp;float</code>

---

### median {#median}

```navi
ta.median(source: series float, length: series int): series float
```

Returns the median value of the `source` series over the specified `length`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The input series to evaluate. |
| `length` | <code>series&nbsp;int</code> |  | The number of bars for the calculation. |

**Returns:** <code>series&nbsp;float</code>

---

### mfi {#mfi}

```navi
ta.mfi(series: series float, length: series int): series float
```

Money Flow Index (MFI).

It measures the inflow and outflow of money into an asset over the specified `length`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `series` | <code>series&nbsp;float</code> |  | The input series for the calculation. |
| `length` | <code>series&nbsp;int</code> |  | The number of bars for the calculation. |

**Returns:** <code>series&nbsp;float</code> — A value between 0 and 100. Values above 80 indicate overbought conditions, below 20 indicate oversold.

---

### min {#min}

```navi
ta.min(source: series float): series float
```

Returns the minimum value of the `source` series.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The input series to evaluate. |

**Returns:** <code>series&nbsp;float</code>

---

### mode {#mode}

```navi
ta.mode(source: series float, length: series int): series float
```

Returns the mode (most frequently occurring value) of the `series` series over the specified `length`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The input series to evaluate. |
| `length` | <code>series&nbsp;int</code> |  | The number of bars for the calculation. |

**Returns:** <code>series&nbsp;float</code>

---

### mom {#mom}

```navi
ta.mom(source: series float, length: series int): series float
```

Calculates the momentum of the `source` series over the specified `length`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The input series for the calculation. |
| `length` | <code>series&nbsp;int</code> |  | The number of bars for the calculation. |

**Returns:** <code>series&nbsp;float</code>

---

### percent_rank {#percent_rank}

```navi
ta.percent_rank(source: series float, length: series int): series float
```

Returns the percentile rank of the current value in the `source` series over the specified `length`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The input series to evaluate. |
| `length` | <code>series&nbsp;int</code> |  | The number of bars for the calculation. |

**Returns:** <code>series&nbsp;float</code> — A value between 0 and 100 indicating the percentage of values that are less than or equal to the current value.

---

### percentile_linear_interpolation {#percentile_linear_interpolation}

```navi
ta.percentile_linear_interpolation(
    source: series float,
    length: series int,
    percentage: simple float
  ): series float
```

Returns the percentile value of the `source` series over the specified `length` using linear interpolation.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The input series to evaluate. |
| `length` | <code>series&nbsp;int</code> |  | The number of bars for the calculation. |
| `percentage` | <code>simple&nbsp;float</code> |  | The percentile value (0-100). |

**Returns:** <code>series&nbsp;float</code>

---

### percentile_nearest_rank {#percentile_nearest_rank}

```navi
ta.percentile_nearest_rank(
    source: series float,
    length: series int,
    percentage: simple float
  ): series float
```

Returns the percentile value of the `source` series over the specified `length` using the nearest-rank method.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The input series to evaluate. |
| `length` | <code>series&nbsp;int</code> |  | The number of bars for the calculation. |
| `percentage` | <code>simple&nbsp;float</code> |  | The percentile value (0-100). |

**Returns:** <code>series&nbsp;float</code>

---

### pivot_high {#pivot_high}

**Overloads**

```navi
ta.pivot_high(source: series float, left_bars: series int, right_bars: series int): series float
ta.pivot_high(left_bars: series int, right_bars: series int): series float
```

Returns the price of the pivot high point.

It returns 'NaN', if there was no pivot high point.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The input series to analyze. |
| `left_bars` | <code>series&nbsp;int</code> |  | The number of bars to the left to check. |
| `right_bars` | <code>series&nbsp;int</code> |  | The number of bars to the right to check. |

**Returns:** <code>series&nbsp;float</code> — The pivot high price (offset by `right_bars`), or `na` if no pivot is found at that point.

Returns the price of the pivot high point.

It returns 'NaN', if there was no pivot high point.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `left_bars` | <code>series&nbsp;int</code> |  | The number of bars to the left to check. |
| `right_bars` | <code>series&nbsp;int</code> |  | The number of bars to the right to check. |

**Returns:** <code>series&nbsp;float</code> — The pivot high price (offset by `right_bars`), or `na` if no pivot is found at that point.

---

### pivot_low {#pivot_low}

**Overloads**

```navi
ta.pivot_low(source: series float, left_bars: series int, right_bars: series int): series float
ta.pivot_low(left_bars: series int, right_bars: series int): series float
```

Returns the price of the pivot low point.

It returns 'NaN', if there was no pivot low point.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The input series to analyze. |
| `left_bars` | <code>series&nbsp;int</code> |  | The number of bars to the left to check. |
| `right_bars` | <code>series&nbsp;int</code> |  | The number of bars to the right to check. |

**Returns:** <code>series&nbsp;float</code> — The pivot low price (offset by `right_bars`), or `na` if no pivot is found at that point.

Returns the price of the pivot low point.

It returns 'NaN', if there was no pivot low point.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `left_bars` | <code>series&nbsp;int</code> |  | The number of bars to the left to check. |
| `right_bars` | <code>series&nbsp;int</code> |  | The number of bars to the right to check. |

**Returns:** <code>series&nbsp;float</code> — The pivot low price (offset by `right_bars`), or `na` if no pivot is found at that point.

---

### pivot_point_levels {#pivot_point_levels}

```navi
ta.pivot_point_levels(
    type: series PivotType,
    change: series bool
  ): series Array<float>
```

Returns an array of pivot point levels for the specified pivot type.

The returned array contains up to 11 values in the order: [P, S1, R1, S2, R2, S3, R3, S4, R4, S5, R5]. Levels that do not apply for the chosen type are `na`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/ta/PivotType">PivotType</a></code> |  | The pivot calculation method. |
| `change` | <code>series&nbsp;bool</code> |  | `true` on the first bar of a new pivot period. |

**Returns:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code>

---

### range {#range}

```navi
ta.range(source: series float, length: series int): series float
```

Returns the range (difference between highest and lowest) of the `source` series over the specified `length`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The input series to evaluate. |
| `length` | <code>series&nbsp;int</code> |  | The number of bars for the calculation. |

**Returns:** <code>series&nbsp;float</code>

---

### rci {#rci}

```navi
ta.rci(source: series float, length: simple int): series float
```

Rank Correlation Index (RCI).

It measures the strength and direction of a linear relationship between the ranks of two variables over the specified `length`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The input series for the calculation. |
| `length` | <code>simple&nbsp;int</code> |  | The number of bars for the calculation. |

**Returns:** <code>series&nbsp;float</code> — A value between -100 and 100. +100 means prices are perfectly rising, -100 means perfectly falling.

---

### rising {#rising}

```navi
ta.rising(source: series float, length: series int): series bool
```

Checks if the `source` series is rising over the specified `length`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The input series to check. |
| `length` | <code>series&nbsp;int</code> |  | The number of bars to check. |

**Returns:** <code>series&nbsp;bool</code>

---

### rma {#rma}

```navi
ta.rma(source: series float, length: series int): series float
```

Recursive Moving Average (RMA).

It is similar to an Exponential Moving Average (EMA) but uses a different smoothing factor.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The input series for the calculation. |
| `length` | <code>series&nbsp;int</code> |  | The length for the RMA calculation. |

**Returns:** <code>series&nbsp;float</code>

---

### roc {#roc}

```navi
ta.roc(source: series float, length: series int): series float
```

Rate of Change (ROC).

It measures the percentage change between the current value and the value `length` bars ago.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The input series for the calculation. |
| `length` | <code>series&nbsp;int</code> |  | The number of bars for the comparison. |

**Returns:** <code>series&nbsp;float</code> — The percentage change: `100 × (source − source[length]) / source[length]`.

---

### rsi {#rsi}

```navi
ta.rsi(source: series float, length: series int): series float
```

Relative Strength Index (RSI).

It measures the speed and change of price movements over the specified `length`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The input series for the calculation. |
| `length` | <code>series&nbsp;int</code> |  | The number of bars for the calculation. |

**Returns:** <code>series&nbsp;float</code> — A value between 0 and 100. Values above 70 typically indicate overbought, below 30 oversold.

**Examples**

```navi
let rsiValue = ta.rsi(close, 14);
plot(rsiValue, title: "RSI", color: Color.PURPLE);
hline(70, "Overbought", color: Color.RED);
hline(30, "Oversold", color: Color.GREEN);
```

---

### sar {#sar}

```navi
ta.sar(start: simple float, inc: simple float, max: simple float): series float
```

Parabolic SAR.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `start` | <code>simple&nbsp;float</code> |  | The starting acceleration factor. |
| `inc` | <code>simple&nbsp;float</code> |  | The increment for the acceleration factor. |
| `max` | <code>simple&nbsp;float</code> |  | The maximum acceleration factor. |

**Returns:** <code>series&nbsp;float</code> — The SAR value for the current bar.

---

### sma {#sma}

```navi
ta.sma(source: series float, length: series int): series float
```

Simple Moving Average (SMA).

Calculates the average of the `source` series over the specified `length`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The input series for the calculation. |
| `length` | <code>series&nbsp;int</code> |  | The number of bars for the calculation. |

**Returns:** <code>series&nbsp;float</code>

**Examples**

```navi
let sma20 = ta.sma(close, 20);
plot(sma20, title: "SMA 20", color: Color.BLUE);
```

---

### stdev {#stdev}

```navi
ta.stdev(
    source: series float,
    length: series int,
    biased: series bool = true
  ): series float
```

Calculates the standard deviation of the `source` series over the specified `length`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The input series for the calculation. |
| `length` | <code>series&nbsp;int</code> |  | The number of bars for the calculation. |
| `biased` | <code>series&nbsp;bool</code> | `true` | If true, function will calculate using a biased estimate of the entire population, if false - unbiased estimate of a sample. |

**Returns:** <code>series&nbsp;float</code>

---

### stoch {#stoch}

```navi
ta.stoch(
    source: series float,
    high: series float,
    low: series float,
    length: series int
  ): series float
```

Stochastic Oscillator (STOCH).

It compares the `source` series to its price range over the specified `length`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The input series for the calculation. |
| `high` | <code>series&nbsp;float</code> |  | The high series for the range. |
| `low` | <code>series&nbsp;float</code> |  | The low series for the range. |
| `length` | <code>series&nbsp;int</code> |  | The number of bars for the calculation. |

**Returns:** <code>series&nbsp;float</code> — A value between 0 and 100 representing the position of the source within the high-low range.

---

### supertrend {#supertrend}

```navi
ta.supertrend(factor: series float, atr_period: simple int)
```

SuperTrend indicator.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `factor` | <code>series&nbsp;float</code> |  | The multiplier for ATR in the SuperTrend calculation. |
| `atr_period` | <code>simple&nbsp;int</code> |  | The period for ATR calculation. |

**Returns:** A tuple of `[super_trend, direction]` where direction is -1 (uptrend/bullish) or 1 (downtrend/bearish).

---

### swma {#swma}

```navi
ta.swma(source: series float): series float
```

Smoothed Weighted Moving Average (SWMA).

It applies weighted moving average smoothing to the `source` series.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The input series for the calculation. |

**Returns:** <code>series&nbsp;float</code>

---

### tema {#tema}

```navi
ta.tema(source: series float, length: simple int): series float
```

Triple Exponential Moving Average (TEMA).

Further reduces EMA lag using three layers of smoothing. Formula: `3*EMA1 - 3*EMA2 + EMA3` where each EMA is applied to the previous layer's output.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The series to smooth. |
| `length` | <code>simple&nbsp;int</code> |  | The smoothing period. |

**Returns:** <code>series&nbsp;float</code>

---

### tr {#fn-tr}

```navi
ta.tr(handle_na: simple bool): series float
```

True Range (TR).

Measures volatility by accounting for gaps between bars. TR is the greatest of: (high - low), |high - previous close|, |low - previous close|. This captures overnight gaps and limit moves that high-low alone would miss.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `handle_na` | <code>simple&nbsp;bool</code> |  | If true and previous close is `na` (first bar), uses `high - low` as TR. If false, returns `na` in that case. |

**Returns:** <code>series&nbsp;float</code>

---

### tsi {#tsi}

```navi
ta.tsi(
    source: series float,
    short_length: simple int,
    long_length: simple int
  ): series float
```

True Strength Index (TSI).

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The input series for the calculation. |
| `short_length` | <code>simple&nbsp;int</code> |  | The short EMA length for TSI calculation. |
| `long_length` | <code>simple&nbsp;int</code> |  | The long EMA length for TSI calculation. |

**Returns:** <code>series&nbsp;float</code> — A value between -1.0 and 1.0 representing momentum strength and direction.

---

### value_when {#value_when}

```navi
ta.value_when(
    condition: series bool,
    source: series T,
    occurrence: simple int
  ): series T
```

Returns the value of the `source` series at the time when the `condition` was true for the specified `occurrence`.

The `occurrence` parameter selects which match to return: 0 for the most recent, 1 for the one before that, etc.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `condition` | <code>series&nbsp;bool</code> |  | The condition to evaluate. |
| `source` | <code>series&nbsp;T</code> |  | The series to retrieve the value from. |
| `occurrence` | <code>simple&nbsp;int</code> |  | Which occurrence to retrieve (0 for the most recent). |

**Returns:** <code>series&nbsp;T</code> — The `source` value at the specified occurrence, or `na` if fewer matches have occurred.

---

### variance {#variance}

```navi
ta.variance(
    source: series float,
    length: series int,
    biased: series bool = true
  ): series float
```

Variance of the `source` series over the specified `length`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The input series for the calculation. |
| `length` | <code>series&nbsp;int</code> |  | The number of bars for the calculation. |
| `biased` | <code>series&nbsp;bool</code> | `true` | If true, uses biased estimation; if false, uses unbiased estimation. |

**Returns:** <code>series&nbsp;float</code>

---

### vhf {#vhf}

```navi
ta.vhf(source: series float, length: simple int): series float
```

Vertical Horizontal Filter (VHF).

Identifies whether the market is trending or ranging by comparing the price range to the sum of absolute bar-to-bar changes. Higher values indicate a stronger trend; lower values indicate choppiness. Formula: `(highest - lowest) / sum(|change|, length)`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The price series to analyze. |
| `length` | <code>simple&nbsp;int</code> |  | The lookback period. |

**Returns:** <code>series&nbsp;float</code>

---

### vwap {#fn-vwap}

**Overloads**

```navi
ta.vwap(source: series float, anchor: series bool, stdev_mult: series float)
ta.vwap(source: series float, anchor: series bool = timeframe.change("1D")): series float
```

Volume Weighted Average Price with optional standard deviation bands.

VWAP accumulates since the anchor resets (typically daily) and weights price by volume, giving a benchmark that institutions often use. Returns a tuple of [vwap, upper_band, lower_band] where bands are vwap +/- stdev_mult * stddev.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The price series (commonly hlc3). |
| `anchor` | <code>series&nbsp;bool</code> |  | When true, resets the VWAP calculation. Typically `timeframe.change("1D")`. |
| `stdev_mult` | <code>series&nbsp;float</code> |  | Multiplier for standard deviation bands. Use `na` to disable bands. |

**Returns:** A tuple of `[vwap, upper_band, lower_band]`. Bands are `na` when `stdev_mult` is `na`.

Volume Weighted Average Price without bands.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The price series (commonly hlc3). |
| `anchor` | <code>series&nbsp;bool</code> | `timeframe.change("1D")` | When true, resets the VWAP. Defaults to daily reset (`timeframe.change("1D")`). |

**Returns:** <code>series&nbsp;float</code> — A single VWAP series that resets when `anchor` is true.

---

### vwma {#vwma}

```navi
ta.vwma(source: series float, length: series int): series float
```

Volume Weighted Moving Average (VWMA).

It gives more weight to periods with higher volume.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The input series for the calculation. |
| `length` | <code>series&nbsp;int</code> |  | The number of bars for the calculation. |

**Returns:** <code>series&nbsp;float</code>

---

### wma {#wma}

```navi
ta.wma(source: series float, length: series int): series float
```

Weighted Moving Average (WMA).

It assigns more weight to recent data points.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The input series for the calculation. |
| `length` | <code>series&nbsp;int</code> |  | The number of bars for the calculation. |

**Returns:** <code>series&nbsp;float</code>

---

### wpr {#wpr}

```navi
ta.wpr(length: series int): series float
```

Williams Percent Range (WPR).

It measures overbought and oversold levels by comparing the `close` price to the high-low range over the specified `length`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `length` | <code>series&nbsp;int</code> |  | The number of bars for the calculation. |

**Returns:** <code>series&nbsp;float</code> — A value between -100 and 0. Values above -20 indicate overbought, below -80 indicate oversold.
