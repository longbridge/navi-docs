---
title: "request"
---

# request

## Functions

### currency_rate {#currency_rate}

```navi
request.currency_rate(
    from: series String,
    to: series String,
    ignore_invalid_currency: series bool = false
  ): series float
```

Returns the exchange rate for converting one unit of `from` currency into `to` currency at the current bar. The rate is provided by the engine's DataProvider.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `from` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | Source currency code, e.g. `"USD"` or `currency.USD`. |
| `to` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | Target currency code, e.g. `"EUR"` or `currency.EUR`. |
| `ignore_invalid_currency` | <code>series&nbsp;bool</code> | `false` | If `true`, returns `na` when the conversion rate cannot be determined instead of raising a runtime error. |

**Returns:** <code>series&nbsp;float</code>

---

### data {#data}

```navi
request.data(
    function: simple String,
    args: series Map<String, any> = na,
    gaps: simple BarmergeGaps = BarmergeGaps.Off,
    lookahead: simple BarmergeLookahead = BarmergeLookahead.Off
  ): series float
```

Calls a user-defined function on the engine's DataProvider and maps the resulting time-series onto the current chart bar. The `args` map accepts `bool`, `int`, `float`, and `String` values; other types cause a runtime error. `na` entries in the map are silently ignored. Returns `na` when no data is available.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `function` | <code>simple&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | Name of the DataProvider function to call. |
| `args` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Map">Map</a>&lt;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a>, any&gt;</code> | `na` | Optional `Map&lt;String, any&gt;` of typed parameters passed to the function. |
| `gaps` | <code>simple&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/BarmergeGaps">BarmergeGaps</a></code> | `BarmergeGaps.Off` | Bar-mapping mode (see <a class="stdlib-ref" data-key="prelude::BarmergeGaps" href="/api/stdlib/prelude/BarmergeGaps">BarmergeGaps.Off</a> / <a class="stdlib-ref" data-key="prelude::BarmergeGaps" href="/api/stdlib/prelude/BarmergeGaps">BarmergeGaps.On</a>). |
| `lookahead` | <code>simple&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/BarmergeLookahead">BarmergeLookahead</a></code> | `BarmergeLookahead.Off` | Controls lookahead semantics for backtesting correctness. |

**Returns:** <code>series&nbsp;float</code>

---

### dividends {#dividends}

```navi
request.dividends(
    ticker: series String = symbol_info.tickerid,
    field: series DividendsField = DividendsField.Gross,
    gaps: simple BarmergeGaps = BarmergeGaps.Off,
    lookahead: simple BarmergeLookahead = BarmergeLookahead.Off,
    ignore_invalid_symbol: input bool = false,
    currency: series String = symbol_info.currency
  ): series float
```

Queries the engine's DataProvider for a dividend value at the current bar. Supports lookahead control. Returns `na` when no data is available.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ticker` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `symbol_info.tickerid` | Ticker whose dividends to query; defaults to the chart symbol. |
| `field` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/DividendsField">DividendsField</a></code> | `DividendsField.Gross` | Which dividend figure to retrieve: <a class="stdlib-ref" data-key="prelude::DividendsField" href="/api/stdlib/prelude/DividendsField">DividendsField.Gross</a> (before withholding) or <a class="stdlib-ref" data-key="prelude::DividendsField" href="/api/stdlib/prelude/DividendsField">DividendsField.Net</a> (after withholding). |
| `gaps` | <code>simple&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/BarmergeGaps">BarmergeGaps</a></code> | `BarmergeGaps.Off` | Bar-mapping mode (see <a class="stdlib-ref" data-key="prelude::BarmergeGaps" href="/api/stdlib/prelude/BarmergeGaps">BarmergeGaps.Off</a> / <a class="stdlib-ref" data-key="prelude::BarmergeGaps" href="/api/stdlib/prelude/BarmergeGaps">BarmergeGaps.On</a>). |
| `lookahead` | <code>simple&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/BarmergeLookahead">BarmergeLookahead</a></code> | `BarmergeLookahead.Off` | Controls whether the value appears on the event bar itself (`lookahead_on`) or only after confirmation (`lookahead_off`). |
| `ignore_invalid_symbol` | <code>input&nbsp;bool</code> | `false` | When `true`, unrecognised tickers silently yield `na`. |
| `currency` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `symbol_info.currency` | Currency code for value conversion. |

**Returns:** <code>series&nbsp;float</code>

---

### earnings {#earnings}

```navi
request.earnings(
    ticker: series String = symbol_info.tickerid,
    field: series EarningsField = EarningsField.Actual,
    gaps: simple BarmergeGaps = BarmergeGaps.Off,
    lookahead: simple BarmergeLookahead = BarmergeLookahead.Off,
    ignore_invalid_symbol: input bool = false,
    currency: series String = symbol_info.currency
  ): series float
```

Queries the engine's DataProvider for an earnings value at the current bar. Supports lookahead control for backtesting correctness. Returns `na` when no data is available.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ticker` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `symbol_info.tickerid` | Ticker whose earnings to query; defaults to the chart symbol. |
| `field` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/EarningsField">EarningsField</a></code> | `EarningsField.Actual` | Which earnings figure to retrieve: <a class="stdlib-ref" data-key="prelude::EarningsField" href="/api/stdlib/prelude/EarningsField">EarningsField.Actual</a>, <a class="stdlib-ref" data-key="prelude::EarningsField" href="/api/stdlib/prelude/EarningsField">EarningsField.Estimate</a>, or <a class="stdlib-ref" data-key="prelude::EarningsField" href="/api/stdlib/prelude/EarningsField">EarningsField.Standardized</a>. |
| `gaps` | <code>simple&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/BarmergeGaps">BarmergeGaps</a></code> | `BarmergeGaps.Off` | Bar-mapping mode (see <a class="stdlib-ref" data-key="prelude::BarmergeGaps" href="/api/stdlib/prelude/BarmergeGaps">BarmergeGaps.Off</a> / <a class="stdlib-ref" data-key="prelude::BarmergeGaps" href="/api/stdlib/prelude/BarmergeGaps">BarmergeGaps.On</a>). |
| `lookahead` | <code>simple&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/BarmergeLookahead">BarmergeLookahead</a></code> | `BarmergeLookahead.Off` | When <a class="stdlib-ref" data-key="prelude::BarmergeLookahead" href="/api/stdlib/prelude/BarmergeLookahead">BarmergeLookahead.Off</a> (default), a data point becomes visible only after a subsequent point confirms it, preventing future-leak in backtests. |
| `ignore_invalid_symbol` | <code>input&nbsp;bool</code> | `false` | When `true`, unrecognised tickers silently yield `na`. |
| `currency` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `symbol_info.currency` | Currency code for value conversion. |

**Returns:** <code>series&nbsp;float</code>

---

### economic {#economic}

```navi
request.economic(
    country_code: series String,
    field: series String,
    gaps: simple BarmergeGaps = BarmergeGaps.Off,
    ignore_invalid_symbol: input bool = false
  ): series float
```

Queries the engine's DataProvider for a macroeconomic indicator value at the current bar. Returns `na` when no data is available.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `country_code` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | ISO 3166-1 alpha-2 country code, e.g. `"US"`, `"CN"`. |
| `field` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | Identifier of the economic indicator to retrieve. |
| `gaps` | <code>simple&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/BarmergeGaps">BarmergeGaps</a></code> | `BarmergeGaps.Off` | Bar-mapping mode (see <a class="stdlib-ref" data-key="prelude::BarmergeGaps" href="/api/stdlib/prelude/BarmergeGaps">BarmergeGaps.Off</a> / <a class="stdlib-ref" data-key="prelude::BarmergeGaps" href="/api/stdlib/prelude/BarmergeGaps">BarmergeGaps.On</a>). |
| `ignore_invalid_symbol` | <code>input&nbsp;bool</code> | `false` | When `true`, unrecognised identifiers silently yield `na`. |

**Returns:** <code>series&nbsp;float</code>

---

### financial {#financial}

```navi
request.financial(
    symbol: series String,
    financial_id: series String,
    period: series String,
    gaps: simple BarmergeGaps = BarmergeGaps.Off,
    ignore_invalid_symbol: input bool = false,
    currency: series String = symbol_info.currency
  ): series float
```

Queries the engine's DataProvider for a financial metric value at the current bar. The provider streams timestamped data points which the VM maps onto chart bars using the `gaps` mode. Returns `na` when no data is available.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `symbol` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | Symbol whose financials to query. |
| `financial_id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | Identifier of the financial metric to retrieve. |
| `period` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | Reporting period: `"FQ"` (quarterly) or `"FY"` (annual). |
| `gaps` | <code>simple&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/BarmergeGaps">BarmergeGaps</a></code> | `BarmergeGaps.Off` | Controls bar mapping when the data point does not align with a chart bar. <a class="stdlib-ref" data-key="prelude::BarmergeGaps" href="/api/stdlib/prelude/BarmergeGaps">BarmergeGaps.Off</a> forward-fills; <a class="stdlib-ref" data-key="prelude::BarmergeGaps" href="/api/stdlib/prelude/BarmergeGaps">BarmergeGaps.On</a> leaves gaps as `na`. |
| `ignore_invalid_symbol` | <code>input&nbsp;bool</code> | `false` | When `true`, unrecognised symbols silently yield `na`. |
| `currency` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `symbol_info.currency` | Currency code for value conversion; defaults to the chart symbol's currency. |

**Returns:** <code>series&nbsp;float</code>

---

### security {#security}

```navi
request.security(
    symbol: series String,
    timeframe: series String,
    expression: instructions<T>,
    gaps: simple BarmergeGaps = BarmergeGaps.Off,
    lookahead: simple BarmergeLookahead = BarmergeLookahead.Off,
    ignore_invalid_symbol: input bool = false,
    currency: series String = na,
    calc_bars_count: simple int = na
  ): series T
```

Evaluates `expression` on another symbol or timeframe and maps the result onto the current chart.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `symbol` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | Symbol to request. |
| `timeframe` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | Requested timeframe String, such as `"D"`, `"60"`, or `"W"`. |
| `expression` | <code>instructions&lt;T&gt;</code> |  | Expression to execute in the requested context. |
| `gaps` | <code>simple&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/BarmergeGaps">BarmergeGaps</a></code> | `BarmergeGaps.Off` | How missing requested bars are mapped back onto the current chart. |
| `lookahead` | <code>simple&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/BarmergeLookahead">BarmergeLookahead</a></code> | `BarmergeLookahead.Off` | Whether requested values may look ahead on historical bars. |
| `ignore_invalid_symbol` | <code>input&nbsp;bool</code> | `false` | If `true`, returns `na` for unknown symbols instead of raising an error. |
| `currency` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | Optional currency used for price conversion. |
| `calc_bars_count` | <code>simple&nbsp;int</code> | `na` | Optional positive limit for the recent history window loaded for the request stream. |

**Returns:** <code>series&nbsp;T</code>

**Examples**

```navi
// Get daily close of a different symbol on the current intraday chart let
dailyClose = request.security("AAPL", "D", close);
plot(dailyClose, title: "AAPL Daily Close");
```

```navi
// Request daily high and low simultaneously using a tuple expression let
(dHigh, dLow) = request.security("AAPL", "D", (high, low));
plot(dHigh, title: "Daily High", color: Color.GREEN);
plot(dLow,  title: "Daily Low",  color: Color.RED);
```

---

### security_lower_tf {#security_lower_tf}

```navi
request.security_lower_tf(
    symbol: series String,
    timeframe: series String,
    expression: instructions<T>,
    ignore_invalid_symbol: input bool = false,
    currency: series String = na,
    ignore_invalid_timeframe: input bool = false,
    calc_bars_count: simple int = na
  ): series Array<T>
```

Evaluates `expression` on a lower timeframe and returns one array element per lower-timeframe bar inside the current chart bar.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `symbol` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | Symbol to request. |
| `timeframe` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | Lower or equal timeframe String, such as `"1"` or `"5"`. |
| `expression` | <code>instructions&lt;T&gt;</code> |  | Expression to evaluate for each lower-timeframe bar. |
| `ignore_invalid_symbol` | <code>input&nbsp;bool</code> | `false` | If `true`, returns `na` for unknown symbols instead of raising an error. |
| `currency` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | Optional currency used for price conversion. |
| `ignore_invalid_timeframe` | <code>input&nbsp;bool</code> | `false` | If `true`, returns `na` when the requested timeframe is not lower than the chart timeframe. |
| `calc_bars_count` | <code>simple&nbsp;int</code> | `na` | Optional positive limit for the recent history window loaded for the request stream. |

**Returns:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code>

---

### splits {#splits}

```navi
request.splits(
    ticker: series String = symbol_info.tickerid,
    field: series SplitsField = SplitsField.Denominator,
    gaps: simple BarmergeGaps = BarmergeGaps.Off,
    lookahead: simple BarmergeLookahead = BarmergeLookahead.Off,
    ignore_invalid_symbol: input bool = false
  ): series float
```

Queries the engine's DataProvider for a stock-split value at the current bar. Supports lookahead control. Returns `na` when no data is available.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ticker` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `symbol_info.tickerid` | Ticker whose splits to query; defaults to the chart symbol. |
| `field` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/SplitsField">SplitsField</a></code> | `SplitsField.Denominator` | Which component of the split ratio to retrieve: <a class="stdlib-ref" data-key="prelude::SplitsField" href="/api/stdlib/prelude/SplitsField">SplitsField.Numerator</a> or <a class="stdlib-ref" data-key="prelude::SplitsField" href="/api/stdlib/prelude/SplitsField">SplitsField.Denominator</a>. |
| `gaps` | <code>simple&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/BarmergeGaps">BarmergeGaps</a></code> | `BarmergeGaps.Off` | Bar-mapping mode (see <a class="stdlib-ref" data-key="prelude::BarmergeGaps" href="/api/stdlib/prelude/BarmergeGaps">BarmergeGaps.Off</a> / <a class="stdlib-ref" data-key="prelude::BarmergeGaps" href="/api/stdlib/prelude/BarmergeGaps">BarmergeGaps.On</a>). |
| `lookahead` | <code>simple&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/BarmergeLookahead">BarmergeLookahead</a></code> | `BarmergeLookahead.Off` | Controls whether the value appears on the event bar itself (`lookahead_on`) or only after confirmation (`lookahead_off`). |
| `ignore_invalid_symbol` | <code>input&nbsp;bool</code> | `false` | When `true`, unrecognised tickers silently yield `na`. |

**Returns:** <code>series&nbsp;float</code>
