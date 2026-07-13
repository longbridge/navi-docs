---
title: "symbol_info"
---

# symbol_info

## 属性

### base_currency {#base_currency}

**类型:** <code>simple&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

返回符号的基础货币。例如，在 `EURUSD` 货币对中，基础货币为 `EUR`，在 `BTCUSDT` 货币对中，基础货币为 `BTC`。

---

### country {#country}

**类型:** <code>simple&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

返回交易品种所在国家/地区的两个字母代码，采用 [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) 格式。

---

### currency {#currency}

**类型:** <code>simple&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

返回符号价格的货币。

---

### current_contract {#current_contract}

**类型:** <code>simple&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

返回基础合约的代码标识符。

---

### description {#description}

**类型:** <code>simple&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

返回符号的描述。

---

### employees {#employees}

**类型:** <code>simple&nbsp;int</code>

返回公司的员工人数（对于股票）。

---

### expiration_date {#expiration_date}

**类型:** <code>simple&nbsp;int</code>

以 UNIX 时间戳形式返回符号的到期日期（以毫秒为单位）。

---

### industry {#industry}

**类型:** <code>simple&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

返回公司的行业（对于股票）。

---

### isin {#isin}

**类型:** <code>simple&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

返回代码的国际证券识别码 (ISIN)。

---

### main_tickerid {#main_tickerid}

**类型:** <code>simple&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

返回图表主要交易品种的完整标识符。即使代码在 `request.*()` 上下文中执行，该值仍然引用外部图表符号。

---

### min_contract {#min_contract}

**类型:** <code>simple&nbsp;float</code>

返回交易品种的最小合约大小。

---

### min_move {#min_move}

**类型:** <code>simple&nbsp;float</code>

返回交易品种的最小价格变动（报价变动单位）。

---

### min_tick {#min_tick}

**类型:** <code>simple&nbsp;float</code>

返回符号的最小价格波动（刻度值）。

---

### point_value {#point_value}

**类型:** <code>simple&nbsp;float</code>

返回符号的点值。

---

### prefix {#prop-prefix}

**类型:** <code>simple&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

返回交易品种的股票标识符的前缀。

---

### price_scale {#price_scale}

**类型:** <code>simple&nbsp;int</code>

返回交易品种的价格比例。

---

### recommendations_buy {#recommendations_buy}

**类型:** <code>simple&nbsp;int</code>

返回该交易品种的“买入”推荐数量。

---

### recommendations_buy_strong {#recommendations_buy_strong}

**类型:** <code>simple&nbsp;int</code>

返回该交易品种的“强力买入”建议数量。

---

### recommendations_date {#recommendations_date}

**类型:** <code>simple&nbsp;int</code>

以 UNIX 时间戳（以毫秒为单位）返回最新建议更新的日期。

---

### recommendations_hold {#recommendations_hold}

**类型:** <code>simple&nbsp;int</code>

返回该交易品种的“保留”建议数量。

---

### recommendations_sell {#recommendations_sell}

**类型:** <code>simple&nbsp;int</code>

返回该交易品种的“卖出”推荐数量。

---

### recommendations_sell_strong {#recommendations_sell_strong}

**类型:** <code>simple&nbsp;int</code>

返回该交易品种的“强力卖出”建议数量。

---

### recommendations_total {#recommendations_total}

**类型:** <code>simple&nbsp;int</code>

返回符号的推荐总数。

---

### root {#root}

**类型:** <code>simple&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

返回交易品种的股票标识符的根交易品种。

---

### sector {#sector}

**类型:** <code>simple&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

返回公司的部门（对于股票）。

---

### session {#session}

**类型:** <code>simple&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Session">Session</a></code>

返回图表主系列的会话类型（`session.regular` 或 `session.extended`）。

---

### shareholders {#shareholders}

**类型:** <code>simple&nbsp;int</code>

返回公司拥有的股东数量（对于股票）。

---

### shares_outstanding_float {#shares_outstanding_float}

**类型:** <code>simple&nbsp;float</code>

返回公司现有的已发行股票总数，不包括其任何限制性股票（对于股票）。

---

### shares_outstanding_total {#shares_outstanding_total}

**类型:** <code>simple&nbsp;float</code>

返回公司现有的已发行股票总数，包括内部人士、主要股东和员工持有的限制性股票（对于股票）。

---

### target_price_average {#target_price_average}

**类型:** <code>simple&nbsp;float</code>

返回预测品种的最新平均年度价格目标

---

### target_price_date {#target_price_date}

**类型:** <code>simple&nbsp;int</code>

以 UNIX 时间戳形式返回目标价格的日期（以毫秒为单位）（对于股票）。

---

### target_price_estimates {#target_price_estimates}

**类型:** <code>simple&nbsp;int</code>

返回当前交易品种的最新价格目标预测总数。

---

### target_price_high {#target_price_high}

**类型:** <code>simple&nbsp;float</code>

返回分析师预测的品种的最后一个最高年度价格目标。

---

### target_price_low {#target_price_low}

**类型:** <code>simple&nbsp;float</code>

返回分析师预测的品种最后一个最低年度价格目标。

---

### target_price_median {#target_price_median}

**类型:** <code>simple&nbsp;float</code>

返回分析师预测的品种的年度价格目标中值。

---

### ticker {#prop-ticker}

**类型:** <code>simple&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

返回不带交换前缀的交易品种名称，

---

### tickerid {#tickerid}

**类型:** <code>simple&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

返回符号的完整代码标识符。

---

### timezone {#timezone}

**类型:** <code>simple&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

返回图表主系列交易所的时区。

---

### type {#type}

**类型:** <code>simple&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

返回符号的类型。值为 `stock`、`fund`、`dr`、`right`、`bond`、`warrant`、`structured`、`index`、`forex`、`futures`、`spread`、`economic`、`fundamental`、`crypto`、`spot`、`swap`、`option`、 __代码17__。

---

### volumetype {#volumetype}

**类型:** <code>simple&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

返回交易品种的交易量类型。值为 `base`、`quote`、`tick`。

## 函数

### prefix {#fn-prefix}

```navi
symbol_info.prefix(symbol: String): String
```

返回符号的前缀。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `symbol` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 从中获取前缀的交易品种代码字符串。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

---

### ticker {#fn-ticker}

```navi
symbol_info.ticker(symbol: String): String
```

返回不带交换前缀的交易品种名称。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `symbol` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 从中获取名称的交易品种股票字符串。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>
