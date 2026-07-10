---
title: "symbol_info"
---

# symbol_info

## 屬性

### base_currency {#base_currency}

**類型:** <code>simple&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

傳回符號的基礎貨幣。例如，在 `EURUSD` 貨幣對中，基礎貨幣為 `EUR`，在 `BTCUSDT` 貨幣對中，基礎貨幣為 `BTC`。

---

### country {#country}

**類型:** <code>simple&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

傳回交易品種所在國家/地區的兩個字母代碼，採用 [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) 格式。

---

### currency {#currency}

**類型:** <code>simple&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

傳回符號價格的貨幣。

---

### current_contract {#current_contract}

**類型:** <code>simple&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

傳回基礎合約的代碼標識符。

---

### description {#description}

**類型:** <code>simple&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

傳回符號的描述。

---

### employees {#employees}

**類型:** <code>simple&nbsp;int</code>

傳回公司的員工人數（對於股票）。

---

### expiration_date {#expiration_date}

**類型:** <code>simple&nbsp;int</code>

以 UNIX 時間戳形式傳回符號的到期日期（以毫秒為單位）。

---

### industry {#industry}

**類型:** <code>simple&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

傳回公司的行業（對於股票）。

---

### isin {#isin}

**類型:** <code>simple&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

傳回代碼的國際證券識別碼 (ISIN)。

---

### main_tickerid {#main_tickerid}

**類型:** <code>simple&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

傳回圖表主要交易品種的完整標識符。即使代碼在 `request.*()` 上下文中執行，該值仍然引用外部圖表符號。

---

### min_contract {#min_contract}

**類型:** <code>simple&nbsp;float</code>

傳回交易品種的最小合約大小。

---

### min_move {#min_move}

**類型:** <code>simple&nbsp;float</code>

傳回交易品種的最小价格變動（報價變動單位）。

---

### min_tick {#min_tick}

**類型:** <code>simple&nbsp;float</code>

傳回符號的最小价格波動（刻度值）。

---

### point_value {#point_value}

**類型:** <code>simple&nbsp;float</code>

傳回符號的點值。

---

### prefix {#prop-prefix}

**類型:** <code>simple&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

傳回交易品種的股票標識符的前綴。

---

### price_scale {#price_scale}

**類型:** <code>simple&nbsp;int</code>

傳回交易品種的價格比例。

---

### recommendations_buy {#recommendations_buy}

**類型:** <code>simple&nbsp;int</code>

傳回該交易品種的“買入”推薦數量。

---

### recommendations_buy_strong {#recommendations_buy_strong}

**類型:** <code>simple&nbsp;int</code>

傳回該交易品種的“強力買入”建議數量。

---

### recommendations_date {#recommendations_date}

**類型:** <code>simple&nbsp;int</code>

以 UNIX 時間戳（以毫秒為單位）傳回最新建議更新的日期。

---

### recommendations_hold {#recommendations_hold}

**類型:** <code>simple&nbsp;int</code>

傳回該交易品種的“保留”建議數量。

---

### recommendations_sell {#recommendations_sell}

**類型:** <code>simple&nbsp;int</code>

傳回該交易品種的“賣出”推薦數量。

---

### recommendations_sell_strong {#recommendations_sell_strong}

**類型:** <code>simple&nbsp;int</code>

傳回該交易品種的“強力賣出”建議數量。

---

### recommendations_total {#recommendations_total}

**類型:** <code>simple&nbsp;int</code>

傳回符號的推薦總數。

---

### root {#root}

**類型:** <code>simple&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

傳回交易品種的股票標識符的根交易品種。

---

### sector {#sector}

**類型:** <code>simple&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

傳回公司的部門（對於股票）。

---

### session {#session}

**類型:** <code>simple&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Session">Session</a></code>

傳回圖表主系列的會話類型（`session.regular` 或 `session.extended`）。

---

### shareholders {#shareholders}

**類型:** <code>simple&nbsp;int</code>

傳回公司擁有的股東數量（對於股票）。

---

### shares_outstanding_float {#shares_outstanding_float}

**類型:** <code>simple&nbsp;float</code>

傳回公司現有的已發行股票總數，不包括其任何限制性股票（對於股票）。

---

### shares_outstanding_total {#shares_outstanding_total}

**類型:** <code>simple&nbsp;float</code>

傳回公司現有的已發行股票總數，包括內部人士、主要股東和員工持有的限制性股票（對於股票）。

---

### target_price_average {#target_price_average}

**類型:** <code>simple&nbsp;float</code>

傳回預測品種的最新平均年度價格目標

---

### target_price_date {#target_price_date}

**類型:** <code>simple&nbsp;int</code>

以 UNIX 時間戳形式傳回目標價格的日期（以毫秒為單位）（對於股票）。

---

### target_price_estimates {#target_price_estimates}

**類型:** <code>simple&nbsp;int</code>

傳回當前交易品種的最新價格目標預測總數。

---

### target_price_high {#target_price_high}

**類型:** <code>simple&nbsp;float</code>

傳回分析師預測的品種的最後一個最高年度價格目標。

---

### target_price_low {#target_price_low}

**類型:** <code>simple&nbsp;float</code>

傳回分析師預測的品種最後一個最低年度價格目標。

---

### target_price_median {#target_price_median}

**類型:** <code>simple&nbsp;float</code>

傳回分析師預測的品種的年度價格目標中值。

---

### ticker {#prop-ticker}

**類型:** <code>simple&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

傳回不帶交換前綴的交易品種名稱，

---

### tickerid {#tickerid}

**類型:** <code>simple&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

傳回符號的完整代碼標識符。

---

### timezone {#timezone}

**類型:** <code>simple&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

傳回圖表主系列交易所的時區。

---

### type {#type}

**類型:** <code>simple&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

傳回符號的類型。值為 `stock`、`fund`、`dr`、`right`、`bond`、`warrant`、`structured`、`index`、`forex`、`futures`、`spread`、`economic`、`fundamental`、`crypto`、`spot`、`swap`、`option`、 __代碼17__。

---

### volumetype {#volumetype}

**類型:** <code>simple&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

傳回交易品種的交易量類型。值為 `base`、`quote`、`tick`。

## 函數

### prefix {#fn-prefix}

```navi
symbol_info.prefix(symbol: String): String
```

傳回符號的前綴。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `symbol` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 從中獲取前綴的交易品種代碼字符串。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

---

### ticker {#fn-ticker}

```navi
symbol_info.ticker(symbol: String): String
```

傳回不帶交換前綴的交易品種名稱。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `symbol` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 從中獲取名稱的交易品種股票字符串。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>
