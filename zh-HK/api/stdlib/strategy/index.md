---
title: "strategy"
---

# strategy

## 屬性

### account_currency {#account_currency}

**類型:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

傳回用於策略賬户的貨幣代碼，如 <a class="stdlib-ref" data-key="prelude::strategy" href="/zh-HK/api/stdlib/prelude/#strategy">strategy</a> 聲明中所設定。

---

### avg_losing_trade {#avg_losing_trade}

**類型:** <code>series&nbsp;float</code>

傳回以賬户貨幣計的每筆虧損交易的平均損失。計算方式為總虧損/虧損交易數量。表示為正數。

---

### avg_losing_trade_percent {#avg_losing_trade_percent}

**類型:** <code>series&nbsp;float</code>

傳回每筆虧損交易的平均損失佔初始資本的百分比。計算方式為總虧損百分比/虧損交易數量。表示為正數。

---

### avg_trade {#avg_trade}

**類型:** <code>series&nbsp;float</code>

傳回以賬户貨幣計的每筆已平倉交易的平均利潤/損失。計算方式為淨利潤/已平倉交易數量。

---

### avg_trade_percent {#avg_trade_percent}

**類型:** <code>series&nbsp;float</code>

傳回每筆已平倉交易的平均利潤/虧損佔初始資本的百分比。計算方式為淨利潤百分比/已平倉交易數量。

---

### avg_winning_trade {#avg_winning_trade}

**類型:** <code>series&nbsp;float</code>

傳回以賬户貨幣計的每筆獲勝交易的平均利潤。計算方式為毛利潤/獲勝交易數量。

---

### avg_winning_trade_percent {#avg_winning_trade_percent}

**類型:** <code>series&nbsp;float</code>

傳回每筆獲勝交易的平均利潤佔初始資本的百分比。計算方式為毛利潤百分比/獲勝交易數量。

---

### closed_trades {#closed_trades}

**類型:** <code>series&nbsp;int</code>

傳回自策略啓動以來已平倉交易的數量。當入場完全退出時，交易被視為平倉。使用 `strategy.closedtrades.*` 函數訪問各個已平倉交易的詳細信息。

---

### default_entry_qty {#default_entry_qty}

**類型:** <code>series&nbsp;float</code>

傳回用於市價訂單的默認合約/股票/手數/單位數量。根據 <a class="stdlib-ref" data-key="prelude::strategy" href="/zh-HK/api/stdlib/prelude/#strategy">strategy</a> 聲明的 `default_qty_type` 和 `default_qty_value` 參數計算。價值取決於當前價格和淨值。

---

### equity {#equity}

**類型:** <code>series&nbsp;float</code>

傳回經常賬户淨值：初始資本+淨利潤+未平倉利潤。這是賬户的實時價值，包括未平倉頭寸的未實現收益/損失。

---

### even_trades {#even_trades}

**類型:** <code>series&nbsp;int</code>

傳回盈虧平衡平倉交易的數量。即使交易的利潤恰好為零，也會被考慮。

---

### gross_loss {#gross_loss}

**類型:** <code>series&nbsp;float</code>

傳回總損失：所有虧損的平倉交易的損失總和。表示為正數。以賬户貨幣計。

---

### gross_loss_percent {#gross_loss_percent}

**類型:** <code>series&nbsp;float</code>

傳回總損失佔初始資本的百分比。計算公式為（總虧損/初始資本）* 100。

---

### gross_profit {#gross_profit}

**類型:** <code>series&nbsp;float</code>

傳回毛利潤：所有獲勝平倉交易的利潤總和。不減去損失。以賬户貨幣計。

---

### gross_profit_percent {#gross_profit_percent}

**類型:** <code>series&nbsp;float</code>

傳回毛利潤佔初始資本的百分比。計算公式為（毛利潤/初始資本）* 100。

---

### initial_capital {#initial_capital}

**類型:** <code>series&nbsp;float</code>

傳回 <a class="stdlib-ref" data-key="prelude::strategy" href="/zh-HK/api/stdlib/prelude/#strategy">strategy</a> 聲明中設定的初始大寫字母。這是回測的起始現金，由 `initial_capital` 參數指定。

---

### loss_trades {#loss_trades}

**類型:** <code>series&nbsp;int</code>

傳回虧損的平倉交易數量。當利潤小於零時，交易被視為虧損。

---

### margin_liquidation_price {#margin_liquidation_price}

**類型:** <code>series&nbsp;float</code>

傳回當前頭寸觸發追加保證金的價格。

---

### max_contracts_held_all {#max_contracts_held_all}

**類型:** <code>series&nbsp;float</code>

傳回策略期間任一時間持有的合約/股票/手數/單位的最大數量。考慮多頭和空頭方向（以較大者為準）。

---

### max_contracts_held_long {#max_contracts_held_long}

**類型:** <code>series&nbsp;float</code>

傳回策略期間任一時間持有多頭頭寸的合約/股票/手數/單位的最大數量。

---

### max_contracts_held_short {#max_contracts_held_short}

**類型:** <code>series&nbsp;float</code>

傳回策略期間任意時刻持有空頭頭寸的合約/股票/手數/單位的最大數量。

---

### max_drawdown {#max_drawdown}

**類型:** <code>series&nbsp;float</code>

傳回最大回撤：該策略歷史上淨值從峯到谷的最大跌幅。以賬户貨幣計。顯示峯值後最嚴重損失的關鍵風險指標。

---

### max_drawdown_percent {#max_drawdown_percent}

**類型:** <code>series&nbsp;float</code>

傳回最大回撤佔峯值時淨值的百分比。回撤 20% 意味着股本較最高點下跌 20%。

---

### max_runup {#max_runup}

**類型:** <code>series&nbsp;float</code>

傳回最大漲幅：該策略歷史上淨值從峯到谷的最大漲幅。以賬户貨幣計。代表已實現的最佳未實現收益。

---

### max_runup_percent {#max_runup_percent}

**類型:** <code>series&nbsp;float</code>

傳回最大上漲值佔谷底淨值的百分比。

---

### net_profit {#net_profit}

**類型:** <code>series&nbsp;float</code>

傳回以賬户貨幣表示的淨利潤。這是已平倉交易的所有已實現利潤和損失的總和。不包括未平倉利潤。

---

### net_profit_percent {#net_profit_percent}

**類型:** <code>series&nbsp;float</code>

傳回淨利潤佔初始資本的百分比。計算公式為（淨利潤/初始資本）* 100。

---

### open_profit {#open_profit}

**類型:** <code>series&nbsp;float</code>

傳回以賬户貨幣表示的未平倉頭寸的當前未實現利潤/損失。頭寸盈利時為正值，虧損時為負值。該值隨着價格變動而波動。

---

### open_profit_percent {#open_profit_percent}

**類型:** <code>series&nbsp;float</code>

傳回當前未實現損益佔初始資本的百分比。計算公式為（未平倉利潤/初始資本）* 100。

---

### open_trades {#open_trades}

**類型:** <code>series&nbsp;int</code>

傳回當前未平倉交易的數量。已建倉但尚未完全平倉。使用 `strategy.opentrades.*` 函數訪問各個未平倉交易的詳細信息。

---

### position_avg_price {#position_avg_price}

**類型:** <code>series&nbsp;float</code>

傳回當前未平倉頭寸的數量加權平均入場價格。計算方式為所有未平倉交易的（入場價格 × 數量）總和除以總數量。平坦時傳回 `na`。

---

### position_entry_name {#position_entry_name}

**類型:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

傳回當前倉位第一筆未平倉交易的入場 ID。

---

### position_size {#position_size}

**類型:** <code>series&nbsp;float</code>

傳回當前頭寸規模（以單位（合約、股票等）為單位）。正值表示多​​頭頭寸，負值表示空頭頭寸，零表示平倉（無頭寸）。

---

### win_trades {#win_trades}

**類型:** <code>series&nbsp;int</code>

傳回獲勝平倉交易的數量。當利潤大於零時，交易被視為盈利。

## 函數

### cancel {#cancel}

```navi
strategy.cancel(id: series String)
```

通過 ID 取消掛單。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 要取消的訂單標識符。 |

---

### cancel_all {#cancel_all}

```navi
strategy.cancel_all()
```

取消策略創建的每個掛單。

---

### close {#close}

```navi
strategy.close(
    id: series String,
    comment: series String = na,
    qty: series float = na,
    qty_percent: series float = na,
    alert_message: series String = na,
    immediately: series bool = false,
    disable_alert: series bool = false
  )
```

通過條目 ID 平倉。使用 `qty` 或 `qty_percent` 請求部分關閉。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 要關閉的條目 ID。 |
| `comment` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 生成的平倉訂單的可選註釋。 |
| `qty` | <code>series&nbsp;float</code> | `na` | 絕對數量關閉。 |
| `qty_percent` | <code>series&nbsp;float</code> | `na` | 平倉的百分比。 |
| `alert_message` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 可選的警報消息。 |
| `immediately` | <code>series&nbsp;bool</code> | `false` | 如果 `true`，則立即平倉。 |
| `disable_alert` | <code>series&nbsp;bool</code> | `false` | 如果 `true`，則抑制策略警報。 |

---

### close_all {#close_all}

```navi
strategy.close_all(
    comment: series String = na,
    alert_message: series String = na,
    immediately: series bool = false,
    disable_alert: series bool = false
  )
```

關閉所有未平倉頭寸。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `comment` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 生成的平倉訂單的可選註釋。 |
| `alert_message` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 可選的警報消息。 |
| `immediately` | <code>series&nbsp;bool</code> | `false` | 如果 `true`，則立即平倉所有倉位。 |
| `disable_alert` | <code>series&nbsp;bool</code> | `false` | 如果 `true`，則抑制策略警報。 |

---

### convert_to_account {#convert_to_account}

```navi
strategy.convert_to_account(value: series float): series float
```

將貨幣值從代碼的貨幣轉換為策略的賬户貨幣。使用配置的貨幣轉換器。當未提供轉換器時，傳回原值不變。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `value` | <code>series&nbsp;float</code> |  | 以符號貨幣表示的價值。 |

**返回:** <code>series&nbsp;float</code>

---

### convert_to_symbol {#convert_to_symbol}

```navi
strategy.convert_to_symbol(value: series float): series float
```

將貨幣值從策略的賬户貨幣轉換為代碼的貨幣。使用配置的貨幣轉換器。當未提供轉換器時，傳回原值不變。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `value` | <code>series&nbsp;float</code> |  | 以賬户貨幣表示的價值。 |

**返回:** <code>series&nbsp;float</code>

---

### entry {#entry}

```navi
strategy.entry(
    id: series String,
    direction: series Direction,
    qty: series float = na,
    limit: series float = na,
    stop: series float = na,
    oca_name: series String = na,
    oca_type: series OcaType = OcaType.None,
    comment: series String = na,
    alert_message: series String = na,
    disable_alert: series bool = false
  )
```

下達或更新掛單。重用現有待處理的 `id` 會更新該訂單，而不是創建新訂單。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 唯一的訂單標識符。 |
| `direction` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Direction">Direction</a></code> |  | 訂單方：<code>strategy.long</code> 或 <code>strategy.short</code>。 |
| `qty` | <code>series&nbsp;float</code> | `na` | 訂單大小。當`na`時，使用策略默認值。 |
| `limit` | <code>series&nbsp;float</code> | `na` | 限價。當`na`時，順序不限。 |
| `stop` | <code>series&nbsp;float</code> | `na` | 止損價。當 `na` 時，沒有附加停止觸發器。 |
| `oca_name` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 可選的“一取消全”組名稱。 |
| `oca_type` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/OcaType">OcaType</a></code> | `OcaType.None` | OCA 行為，例如 `oca.cancel`、`oca.reduce` 或 `oca.none`。 |
| `comment` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 可選訂單評論。 |
| `alert_message` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 此訂單的可選警報消息。 |
| `disable_alert` | <code>series&nbsp;bool</code> | `false` | 如果 `true`，則抑制該訂單的策略警報。 |

---

### exit {#exit}

```navi
strategy.exit(
    id: series String,
    from_entry: series String = na,
    qty: series float = na,
    qty_percent: series float = na,
    profit: series float = na,
    limit: series float = na,
    loss: series float = na,
    stop: series float = na,
    trail_price: series float = na,
    trail_points: series float = na,
    trail_offset: series float = na,
    oca_name: series String = na,
    comment: series String = na,
    comment_profit: series String = na,
    comment_loss: series String = na,
    comment_trailing: series String = na,
    alert_message: series String = na,
    alert_profit: series String = na,
    alert_loss: series String = na,
    alert_trailing: series String = na,
    disable_alert: series bool = false
  )
```

下達或更新未平倉頭寸的退出訂單。該訂單可以結合止盈、止損和追蹤止損設定。如果同時提供止盈值和止損值，它們將充當括號。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 唯一的退出指令標識符。 |
| `from_entry` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 退出的入口 ID。當 `na` 時，退出適用於整個匹配位置。 |
| `qty` | <code>series&nbsp;float</code> | `na` | 絕對數量關閉。當 `na` 時，使用完全匹配的數量。 |
| `qty_percent` | <code>series&nbsp;float</code> | `na` | 平倉的百分比。 |
| `profit` | <code>series&nbsp;float</code> | `na` | 與入場價格的止盈距離（以跳動點為單位）。 |
| `limit` | <code>series&nbsp;float</code> | `na` | 絕對止盈價。覆蓋 `profit`。 |
| `loss` | <code>series&nbsp;float</code> | `na` | 距入場價格的止損距離（以跳動點為單位）。 |
| `stop` | <code>series&nbsp;float</code> | `na` | 絕對止損價。覆蓋 `loss`。 |
| `trail_price` | <code>series&nbsp;float</code> | `na` | 激活追蹤止損的絕對價格。 |
| `trail_points` | <code>series&nbsp;float</code> | `na` | 勾選距激活追蹤止損入場點的距離。 |
| `trail_offset` | <code>series&nbsp;float</code> | `na` | 激活後，報價偏移量保持在最佳價格後面。 |
| `oca_name` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 可選的 OCA 組名稱。 |
| `comment` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 從此出口填充的默認註釋。 |
| `comment_profit` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 用於止盈填充的註釋。 |
| `comment_loss` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 用於止損填充的註釋。 |
| `comment_trailing` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 用於追蹤止損填充的註釋。 |
| `alert_message` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 默認警報消息。 |
| `alert_profit` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 用於止盈填充的警報消息。 |
| `alert_loss` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 用於止損填充的警報消息。 |
| `alert_trailing` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 用於追蹤止損填充的警報消息。 |
| `disable_alert` | <code>series&nbsp;bool</code> | `false` | 如果 `true`，則抑制此退出的策略警報。 |

---

### order {#order}

```navi
strategy.order(
    id: series String,
    direction: series Direction,
    qty: series float = na,
    limit: series float = na,
    stop: series float = na,
    oca_name: series String = na,
    oca_type: series OcaType = OcaType.None,
    comment: series String = na,
    alert_message: series String = na,
    disable_alert: series bool = false
  )
```

下達或更新一般策略訂單。該 API 可以根據當前倉位和參數開倉、增加、減少或平倉。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 唯一的訂單標識符。 |
| `direction` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Direction">Direction</a></code> |  | 訂單方：<code>strategy.long</code> 或 <code>strategy.short</code>。 |
| `qty` | <code>series&nbsp;float</code> | `na` | 訂單大小。當`na`時，使用策略默認值。 |
| `limit` | <code>series&nbsp;float</code> | `na` | 限價。當`na`時，順序不限。 |
| `stop` | <code>series&nbsp;float</code> | `na` | 止損價。當 `na` 時，沒有附加停止觸發器。 |
| `oca_name` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 可選的“一取消全”組名稱。 |
| `oca_type` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/OcaType">OcaType</a></code> | `OcaType.None` | OCA 行為，例如 `oca.cancel`、`oca.reduce` 或 `oca.none`。 |
| `comment` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 可選訂單評論。 |
| `alert_message` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 此訂單的可選警報消息。 |
| `disable_alert` | <code>series&nbsp;bool</code> | `false` | 如果 `true`，則抑制該訂單的策略警報。 |
