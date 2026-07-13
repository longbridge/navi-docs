---
title: "request"
---

# request

## 函数

### currency_rate {#currency_rate}

```navi
request.currency_rate(
    from: series String,
    to: series String,
    ignore_invalid_currency: series bool = false
  ): series float
```

返回当前 bar 将一单位 `from` 货币转换为 `to` 货币的汇率。该速率由引擎的 DataProvider 提供。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `from` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 源货币代码，例如`\"USD\"` 或 `currency.USD`。 |
| `to` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 目标货币代码，例如`\"EUR\"` 或 `currency.EUR`。 |
| `ignore_invalid_currency` | <code>series&nbsp;bool</code> | `false` | 如果是 `true`，则在无法确定转换率时返回 `na`，而不是引发运行时错误。 |

**返回:** <code>series&nbsp;float</code>

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

调用引擎 DataProvider 上的自定义函数，并将返回的时间序列映射到当前图表 bar。`args` 映射仅接受 `bool`、`int`、`float` 和 `string` 类型的值；其他类型会导致运行时错误。映射中的 `na` 条目会被静默忽略。无数据时返回 `na`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `function` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 要调用的 DataProvider 函数名称。 |
| `args` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Map">Map</a>&lt;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a>, any&gt;</code> | `na` | 传递给函数的可选 `map&lt;string, any&gt;` 类型参数。 |
| `gaps` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/BarmergeGaps">BarmergeGaps</a></code> | `BarmergeGaps.Off` | bar 映射模式（参见 `BarmergeGaps.Off` / `BarmergeGaps.On`）。 |
| `lookahead` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/BarmergeLookahead">BarmergeLookahead</a></code> | `BarmergeLookahead.Off` | 控制前瞻语义以确保回测正确性。 |

**返回:** <code>series&nbsp;float</code>

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

查询引擎的 DataProvider 以获取当前 bar 处的股息值。支持前瞻控制。当没有可用数据时返回 `na`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `ticker` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `symbol_info.tickerid` | 查询股息的股票；默认为图表符号。 |
| `field` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/DividendsField">DividendsField</a></code> | `DividendsField.Gross` | 要检索哪个股息数字：<code>dividends.gross</code>（预扣前）或 <code>dividends.net</code>（预扣后）。 |
| `gaps` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/BarmergeGaps">BarmergeGaps</a></code> | `BarmergeGaps.Off` | 条形映射模式（请参阅 <a class="stdlib-ref" data-key="prelude::BarmergeGaps" href="/zh-CN/api/stdlib/prelude/BarmergeGaps">BarmergeGaps.Off</a> / <a class="stdlib-ref" data-key="prelude::BarmergeGaps" href="/zh-CN/api/stdlib/prelude/BarmergeGaps">BarmergeGaps.On</a>）。 |
| `lookahead` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/BarmergeLookahead">BarmergeLookahead</a></code> | `BarmergeLookahead.Off` | 控制该值是出现在事件 bar 本身上 (`lookahead_on`) 还是仅在确认后出现 (`lookahead_off`)。 |
| `ignore_invalid_symbol` | <code>input&nbsp;bool</code> | `false` | 当 `true` 时，无法识别的代码会默默产生 `na`。 |
| `currency` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `symbol_info.currency` | 用于价值转换的货币代码。 |

**返回:** <code>series&nbsp;float</code>

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

查询引擎的 DataProvider 以获取当前 bar 的收益值。支持回溯测试正确性的前瞻控制。当没有可用数据时返回 `na`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `ticker` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `symbol_info.tickerid` | 查询收益的股票；默认为图表符号。 |
| `field` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/EarningsField">EarningsField</a></code> | `EarningsField.Actual` | 要检索哪个收入数据：<code>earnings.actual</code>、<code>earnings.estimate</code> 或 <code>earnings.standardized</code>。 |
| `gaps` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/BarmergeGaps">BarmergeGaps</a></code> | `BarmergeGaps.Off` | 条形映射模式（请参阅 <a class="stdlib-ref" data-key="prelude::BarmergeGaps" href="/zh-CN/api/stdlib/prelude/BarmergeGaps">BarmergeGaps.Off</a> / <a class="stdlib-ref" data-key="prelude::BarmergeGaps" href="/zh-CN/api/stdlib/prelude/BarmergeGaps">BarmergeGaps.On</a>）。 |
| `lookahead` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/BarmergeLookahead">BarmergeLookahead</a></code> | `BarmergeLookahead.Off` | 当 <a class="stdlib-ref" data-key="prelude::BarmergeLookahead" href="/zh-CN/api/stdlib/prelude/BarmergeLookahead">BarmergeLookahead.Off</a>（默认）时，数据点仅在后续点确认后才变得可见，从而防止回溯测试中的未来泄漏。 |
| `ignore_invalid_symbol` | <code>input&nbsp;bool</code> | `false` | 当 `true` 时，无法识别的代码会默默产生 `na`。 |
| `currency` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `symbol_info.currency` | 用于价值转换的货币代码。 |

**返回:** <code>series&nbsp;float</code>

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

查询引擎的 DataProvider 以获取当前 bar 处的宏观经济指标值。当没有可用数据时返回 `na`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `country_code` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | ISO 3166-1 alpha-2 国家/地区代码，例如__代码0__，__代码1__。 |
| `field` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 要检索的经济指标的标识符。 |
| `gaps` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/BarmergeGaps">BarmergeGaps</a></code> | `BarmergeGaps.Off` | 条形映射模式（请参阅 <a class="stdlib-ref" data-key="prelude::BarmergeGaps" href="/zh-CN/api/stdlib/prelude/BarmergeGaps">BarmergeGaps.Off</a> / <a class="stdlib-ref" data-key="prelude::BarmergeGaps" href="/zh-CN/api/stdlib/prelude/BarmergeGaps">BarmergeGaps.On</a>）。 |
| `ignore_invalid_symbol` | <code>input&nbsp;bool</code> | `false` | 当 `true` 时，无法识别的标识符会默默地产生 `na`。 |

**返回:** <code>series&nbsp;float</code>

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

查询引擎的 DataProvider 以获取当前 bar 处的财务指标值。提供程序流式传输带有时间戳的数据点，VM 使用 `gaps` 模式将这些数据点映射到图表 bars 上。当没有可用数据时返回 `na`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `symbol` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 要查询其财务状况的符号。 |
| `financial_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 要检索的财务指标的标识符。 |
| `period` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 报告期：`\"FQ`（季度）或`FY\"`（年度）。 |
| `gaps` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/BarmergeGaps">BarmergeGaps</a></code> | `BarmergeGaps.Off` | 当数据点与图表 bar 不对齐时控制 bar 映射。 <a class="stdlib-ref" data-key="prelude::BarmergeGaps" href="/zh-CN/api/stdlib/prelude/BarmergeGaps">BarmergeGaps.Off</a> 前向填充； <a class="stdlib-ref" data-key="prelude::BarmergeGaps" href="/zh-CN/api/stdlib/prelude/BarmergeGaps">BarmergeGaps.On</a> 留下间隙作为 `na`。 |
| `ignore_invalid_symbol` | <code>input&nbsp;bool</code> | `false` | 当 `true` 时，无法识别的符号会默默地产生 `na`。 |
| `currency` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `symbol_info.currency` | 用于价值转换的货币代码；默认为图表符号的货币。 |

**返回:** <code>series&nbsp;float</code>

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

评估另一个交易品种或时间范围上的 `expression` 并将结果映射到当前图表上。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `symbol` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 请求的符号。 |
| `timeframe` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 请求的时间范围字符串，例如 `\"D`、`60` 或 `W\"`。 |
| `expression` | <code>instructions&lt;T&gt;</code> |  | 要在请求的上下文中执行的表达式。 |
| `gaps` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/BarmergeGaps">BarmergeGaps</a></code> | `BarmergeGaps.Off` | 如何将缺失的请求 bars 映射回当前图表。 |
| `lookahead` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/BarmergeLookahead">BarmergeLookahead</a></code> | `BarmergeLookahead.Off` | 请求的值是否可以展望历史 bars。 |
| `ignore_invalid_symbol` | <code>input&nbsp;bool</code> | `false` | 如果 `true`，则对于未知符号返回 `na`，而不是引发错误。 |
| `currency` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 用于价格转换的可选货币。 |
| `calc_bars_count` | <code>simple&nbsp;int</code> | `na` | 为请求流加载的最近历史记录窗口的可选正限制。 |

**返回:** <code>series&nbsp;T</code>

**示例**

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

在较低时间范围内评估 `expression` 并为当前图表 bar 内的每个较低时间范围 bar 返回一个数组元素。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `symbol` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 请求的符号。 |
| `timeframe` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 较低或等于时间范围字符串，例如 `\"1` 或 `5\"`。 |
| `expression` | <code>instructions&lt;T&gt;</code> |  | 针对每个较低时间范围 bar 计算的表达式。 |
| `ignore_invalid_symbol` | <code>input&nbsp;bool</code> | `false` | 如果 `true`，则对于未知符号返回 `na`，而不是引发错误。 |
| `currency` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 用于价格转换的可选货币。 |
| `ignore_invalid_timeframe` | <code>input&nbsp;bool</code> | `false` | 如果为 `true`，则当请求的时间范围不低于图表时间范围时返回 `na`。 |
| `calc_bars_count` | <code>simple&nbsp;int</code> | `na` | 为请求流加载的最近历史记录窗口的可选正限制。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code>

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

查询引擎的 DataProvider 以获取当前 bar 处的股票分割值。支持前瞻控制。当没有可用数据时返回 `na`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `ticker` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `symbol_info.tickerid` | 要查询其拆分的股票代码；默认为图表符号。 |
| `field` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/SplitsField">SplitsField</a></code> | `SplitsField.Denominator` | 要检索分流比的哪个组成部分：<code>splits.numerator</code> 或 <code>splits.denominator</code>。 |
| `gaps` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/BarmergeGaps">BarmergeGaps</a></code> | `BarmergeGaps.Off` | 条形映射模式（请参阅 <a class="stdlib-ref" data-key="prelude::BarmergeGaps" href="/zh-CN/api/stdlib/prelude/BarmergeGaps">BarmergeGaps.Off</a> / <a class="stdlib-ref" data-key="prelude::BarmergeGaps" href="/zh-CN/api/stdlib/prelude/BarmergeGaps">BarmergeGaps.On</a>）。 |
| `lookahead` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/BarmergeLookahead">BarmergeLookahead</a></code> | `BarmergeLookahead.Off` | 控制该值是出现在事件 bar 本身上 (`lookahead_on`) 还是仅在确认后出现 (`lookahead_off`)。 |
| `ignore_invalid_symbol` | <code>input&nbsp;bool</code> | `false` | 当 `true` 时，无法识别的代码会默默产生 `na`。 |

**返回:** <code>series&nbsp;float</code>
