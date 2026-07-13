---
title: "request"
---

# request

## 函數

### currency_rate {#currency_rate}

```navi
request.currency_rate(
    from: series String,
    to: series String,
    ignore_invalid_currency: series bool = false
  ): series float
```

傳回當前 bar 將一單位 `from` 貨幣轉換為 `to` 貨幣的匯率。該速率由引擎的 DataProvider 提供。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `from` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 源貨幣代碼，例如`\"USD\"` 或 `currency.USD`。 |
| `to` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 目標貨幣代碼，例如`\"EUR\"` 或 `currency.EUR`。 |
| `ignore_invalid_currency` | <code>series&nbsp;bool</code> | `false` | 如果是 `true`，則在無法確定轉換率時傳回 `na`，而不是引發運行時錯誤。 |

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

呼叫引擎 DataProvider 上的自訂函式，並將回傳的時間序列對映到當前圖表 bar。`args` 對映僅接受 `bool`、`int`、`float` 和 `string` 型別的值；其他型別會導致執行時錯誤。對映中的 `na` 條目會被靜默忽略。無資料時回傳 `na`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `function` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 要呼叫的 DataProvider 函式名稱。 |
| `args` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Map">Map</a>&lt;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a>, any&gt;</code> | `na` | 傳遞給函式的可選 `map&lt;string, any&gt;` 型別參數。 |
| `gaps` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/BarmergeGaps">BarmergeGaps</a></code> | `BarmergeGaps.Off` | bar 對映模式（參見 `BarmergeGaps.Off` / `BarmergeGaps.On`）。 |
| `lookahead` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/BarmergeLookahead">BarmergeLookahead</a></code> | `BarmergeLookahead.Off` | 控制前瞻語義以確保回測正確性。 |

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

查詢引擎的 DataProvider 以獲取當前 bar 處的股息值。支持前瞻控制。當沒有可用資料時傳回 `na`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `ticker` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `symbol_info.tickerid` | 查詢股息的股票；默認為圖表符號。 |
| `field` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/DividendsField">DividendsField</a></code> | `DividendsField.Gross` | 要檢索哪個股息數字：<code>dividends.gross</code>（預扣前）或 <code>dividends.net</code>（預扣後）。 |
| `gaps` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/BarmergeGaps">BarmergeGaps</a></code> | `BarmergeGaps.Off` | 條形映射模式（請參閲 <a class="stdlib-ref" data-key="prelude::BarmergeGaps" href="/zh-HK/api/stdlib/prelude/BarmergeGaps">BarmergeGaps.Off</a> / <a class="stdlib-ref" data-key="prelude::BarmergeGaps" href="/zh-HK/api/stdlib/prelude/BarmergeGaps">BarmergeGaps.On</a>）。 |
| `lookahead` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/BarmergeLookahead">BarmergeLookahead</a></code> | `BarmergeLookahead.Off` | 控制該值是出現在事件 bar 本身上 (`lookahead_on`) 還是僅在確認後出現 (`lookahead_off`)。 |
| `ignore_invalid_symbol` | <code>input&nbsp;bool</code> | `false` | 當 `true` 時，無法識別的代碼會默默產生 `na`。 |
| `currency` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `symbol_info.currency` | 用於價值轉換的貨幣代碼。 |

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

查詢引擎的 DataProvider 以獲取當前 bar 的收益值。支持回溯測試正確性的前瞻控制。當沒有可用資料時傳回 `na`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `ticker` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `symbol_info.tickerid` | 查詢收益的股票；默認為圖表符號。 |
| `field` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/EarningsField">EarningsField</a></code> | `EarningsField.Actual` | 要檢索哪個收入資料：<code>earnings.actual</code>、<code>earnings.estimate</code> 或 <code>earnings.standardized</code>。 |
| `gaps` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/BarmergeGaps">BarmergeGaps</a></code> | `BarmergeGaps.Off` | 條形映射模式（請參閲 <a class="stdlib-ref" data-key="prelude::BarmergeGaps" href="/zh-HK/api/stdlib/prelude/BarmergeGaps">BarmergeGaps.Off</a> / <a class="stdlib-ref" data-key="prelude::BarmergeGaps" href="/zh-HK/api/stdlib/prelude/BarmergeGaps">BarmergeGaps.On</a>）。 |
| `lookahead` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/BarmergeLookahead">BarmergeLookahead</a></code> | `BarmergeLookahead.Off` | 當 <a class="stdlib-ref" data-key="prelude::BarmergeLookahead" href="/zh-HK/api/stdlib/prelude/BarmergeLookahead">BarmergeLookahead.Off</a>（默認）時，資料點僅在後續點確認後才變得可見，從而防止回溯測試中的未來泄漏。 |
| `ignore_invalid_symbol` | <code>input&nbsp;bool</code> | `false` | 當 `true` 時，無法識別的代碼會默默產生 `na`。 |
| `currency` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `symbol_info.currency` | 用於價值轉換的貨幣代碼。 |

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

查詢引擎的 DataProvider 以獲取當前 bar 處的宏觀經濟指標值。當沒有可用資料時傳回 `na`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `country_code` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | ISO 3166-1 alpha-2 國家/地區代碼，例如__代碼0__，__代碼1__。 |
| `field` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 要檢索的經濟指標的標識符。 |
| `gaps` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/BarmergeGaps">BarmergeGaps</a></code> | `BarmergeGaps.Off` | 條形映射模式（請參閲 <a class="stdlib-ref" data-key="prelude::BarmergeGaps" href="/zh-HK/api/stdlib/prelude/BarmergeGaps">BarmergeGaps.Off</a> / <a class="stdlib-ref" data-key="prelude::BarmergeGaps" href="/zh-HK/api/stdlib/prelude/BarmergeGaps">BarmergeGaps.On</a>）。 |
| `ignore_invalid_symbol` | <code>input&nbsp;bool</code> | `false` | 當 `true` 時，無法識別的標識符會默默地產生 `na`。 |

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

查詢引擎的 DataProvider 以獲取當前 bar 處的財務指標值。提供程序流式傳輸帶有時間戳的資料點，VM 使用 `gaps` 模式將這些資料點映射到圖表 bars 上。當沒有可用資料時傳回 `na`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `symbol` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 要查詢其財務狀況的符號。 |
| `financial_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 要檢索的財務指標的標識符。 |
| `period` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 報告期：`\"FQ`（季度）或`FY\"`（年度）。 |
| `gaps` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/BarmergeGaps">BarmergeGaps</a></code> | `BarmergeGaps.Off` | 當資料點與圖表 bar 不對齊時控制 bar 映射。 <a class="stdlib-ref" data-key="prelude::BarmergeGaps" href="/zh-HK/api/stdlib/prelude/BarmergeGaps">BarmergeGaps.Off</a> 前向填充； <a class="stdlib-ref" data-key="prelude::BarmergeGaps" href="/zh-HK/api/stdlib/prelude/BarmergeGaps">BarmergeGaps.On</a> 留下間隙作為 `na`。 |
| `ignore_invalid_symbol` | <code>input&nbsp;bool</code> | `false` | 當 `true` 時，無法識別的符號會默默地產生 `na`。 |
| `currency` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `symbol_info.currency` | 用於價值轉換的貨幣代碼；默認為圖表符號的貨幣。 |

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

評估另一個交易品種或時間範圍上的 `expression` 並將結果映射到當前圖表上。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `symbol` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 請求的符號。 |
| `timeframe` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 請求的時間範圍字符串，例如 `\"D`、`60` 或 `W\"`。 |
| `expression` | <code>instructions&lt;T&gt;</code> |  | 要在請求的上下文中執行的表達式。 |
| `gaps` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/BarmergeGaps">BarmergeGaps</a></code> | `BarmergeGaps.Off` | 如何將缺失的請求 bars 映射回當前圖表。 |
| `lookahead` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/BarmergeLookahead">BarmergeLookahead</a></code> | `BarmergeLookahead.Off` | 請求的值是否可以展望歷史 bars。 |
| `ignore_invalid_symbol` | <code>input&nbsp;bool</code> | `false` | 如果 `true`，則對於未知符號傳回 `na`，而不是引發錯誤。 |
| `currency` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 用於價格轉換的可選貨幣。 |
| `calc_bars_count` | <code>simple&nbsp;int</code> | `na` | 為請求流加載的最近歷史記錄窗口的可選正限制。 |

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

在較低時間範圍內評估 `expression` 併為當前圖表 bar 內的每個較低時間範圍 bar 傳回一個陣列元素。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `symbol` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 請求的符號。 |
| `timeframe` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 較低或等於時間範圍字符串，例如 `\"1` 或 `5\"`。 |
| `expression` | <code>instructions&lt;T&gt;</code> |  | 針對每個較低時間範圍 bar 計算的表達式。 |
| `ignore_invalid_symbol` | <code>input&nbsp;bool</code> | `false` | 如果 `true`，則對於未知符號傳回 `na`，而不是引發錯誤。 |
| `currency` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 用於價格轉換的可選貨幣。 |
| `ignore_invalid_timeframe` | <code>input&nbsp;bool</code> | `false` | 如果為 `true`，則當請求的時間範圍不低於圖表時間範圍時傳回 `na`。 |
| `calc_bars_count` | <code>simple&nbsp;int</code> | `na` | 為請求流加載的最近歷史記錄窗口的可選正限制。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code>

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

查詢引擎的 DataProvider 以獲取當前 bar 處的股票分割值。支持前瞻控制。當沒有可用資料時傳回 `na`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `ticker` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `symbol_info.tickerid` | 要查詢其拆分的股票代碼；默認為圖表符號。 |
| `field` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/SplitsField">SplitsField</a></code> | `SplitsField.Denominator` | 要檢索分流比的哪個組成部分：<code>splits.numerator</code> 或 <code>splits.denominator</code>。 |
| `gaps` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/BarmergeGaps">BarmergeGaps</a></code> | `BarmergeGaps.Off` | 條形映射模式（請參閲 <a class="stdlib-ref" data-key="prelude::BarmergeGaps" href="/zh-HK/api/stdlib/prelude/BarmergeGaps">BarmergeGaps.Off</a> / <a class="stdlib-ref" data-key="prelude::BarmergeGaps" href="/zh-HK/api/stdlib/prelude/BarmergeGaps">BarmergeGaps.On</a>）。 |
| `lookahead` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/BarmergeLookahead">BarmergeLookahead</a></code> | `BarmergeLookahead.Off` | 控制該值是出現在事件 bar 本身上 (`lookahead_on`) 還是僅在確認後出現 (`lookahead_off`)。 |
| `ignore_invalid_symbol` | <code>input&nbsp;bool</code> | `false` | 當 `true` 時，無法識別的代碼會默默產生 `na`。 |

**返回:** <code>series&nbsp;float</code>
