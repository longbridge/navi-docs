---
title: "strategy"
---

# strategy

## 属性

### account_currency {#account_currency}

**类型:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

返回用于策略账户的货币代码，如 <a class="stdlib-ref" data-key="prelude::strategy" href="/zh-CN/api/stdlib/prelude/#strategy">strategy</a> 声明中所设置。

---

### avg_losing_trade {#avg_losing_trade}

**类型:** <code>series&nbsp;float</code>

返回以账户货币计的每笔亏损交易的平均损失。计算方式为总亏损/亏损交易数量。表示为正数。

---

### avg_losing_trade_percent {#avg_losing_trade_percent}

**类型:** <code>series&nbsp;float</code>

返回每笔亏损交易的平均损失占初始资本的百分比。计算方式为总亏损百分比/亏损交易数量。表示为正数。

---

### avg_trade {#avg_trade}

**类型:** <code>series&nbsp;float</code>

返回以账户货币计的每笔已平仓交易的平均利润/损失。计算方式为净利润/已平仓交易数量。

---

### avg_trade_percent {#avg_trade_percent}

**类型:** <code>series&nbsp;float</code>

返回每笔已平仓交易的平均利润/亏损占初始资本的百分比。计算方式为净利润百分比/已平仓交易数量。

---

### avg_winning_trade {#avg_winning_trade}

**类型:** <code>series&nbsp;float</code>

返回以账户货币计的每笔获胜交易的平均利润。计算方式为毛利润/获胜交易数量。

---

### avg_winning_trade_percent {#avg_winning_trade_percent}

**类型:** <code>series&nbsp;float</code>

返回每笔获胜交易的平均利润占初始资本的百分比。计算方式为毛利润百分比/获胜交易数量。

---

### closed_trades {#closed_trades}

**类型:** <code>series&nbsp;int</code>

返回自策略启动以来已平仓交易的数量。当入场完全退出时，交易被视为平仓。使用 `strategy.closedtrades.*` 函数访问各个已平仓交易的详细信息。

---

### default_entry_qty {#default_entry_qty}

**类型:** <code>series&nbsp;float</code>

返回用于市价订单的默认合约/股票/手数/单位数量。根据 <a class="stdlib-ref" data-key="prelude::strategy" href="/zh-CN/api/stdlib/prelude/#strategy">strategy</a> 声明的 `default_qty_type` 和 `default_qty_value` 参数计算。价值取决于当前价格和净值。

---

### equity {#equity}

**类型:** <code>series&nbsp;float</code>

返回经常账户净值：初始资本+净利润+未平仓利润。这是账户的实时价值，包括未平仓头寸的未实现收益/损失。

---

### even_trades {#even_trades}

**类型:** <code>series&nbsp;int</code>

返回盈亏平衡平仓交易的数量。即使交易的利润恰好为零，也会被考虑。

---

### gross_loss {#gross_loss}

**类型:** <code>series&nbsp;float</code>

返回总损失：所有亏损的平仓交易的损失总和。表示为正数。以账户货币计。

---

### gross_loss_percent {#gross_loss_percent}

**类型:** <code>series&nbsp;float</code>

返回总损失占初始资本的百分比。计算公式为（总亏损/初始资本）* 100。

---

### gross_profit {#gross_profit}

**类型:** <code>series&nbsp;float</code>

返回毛利润：所有获胜平仓交易的利润总和。不减去损失。以账户货币计。

---

### gross_profit_percent {#gross_profit_percent}

**类型:** <code>series&nbsp;float</code>

返回毛利润占初始资本的百分比。计算公式为（毛利润/初始资本）* 100。

---

### initial_capital {#initial_capital}

**类型:** <code>series&nbsp;float</code>

返回 <a class="stdlib-ref" data-key="prelude::strategy" href="/zh-CN/api/stdlib/prelude/#strategy">strategy</a> 声明中设置的初始大写字母。这是回测的起始现金，由 `initial_capital` 参数指定。

---

### loss_trades {#loss_trades}

**类型:** <code>series&nbsp;int</code>

返回亏损的平仓交易数量。当利润小于零时，交易被视为亏损。

---

### margin_liquidation_price {#margin_liquidation_price}

**类型:** <code>series&nbsp;float</code>

返回当前头寸触发追加保证金的价格。

---

### max_contracts_held_all {#max_contracts_held_all}

**类型:** <code>series&nbsp;float</code>

返回策略期间任一时间持有的合约/股票/手数/单位的最大数量。考虑多头和空头方向（以较大者为准）。

---

### max_contracts_held_long {#max_contracts_held_long}

**类型:** <code>series&nbsp;float</code>

返回策略期间任一时间持有多头头寸的合约/股票/手数/单位的最大数量。

---

### max_contracts_held_short {#max_contracts_held_short}

**类型:** <code>series&nbsp;float</code>

返回策略期间任意时刻持有空头头寸的合约/股票/手数/单位的最大数量。

---

### max_drawdown {#max_drawdown}

**类型:** <code>series&nbsp;float</code>

返回最大回撤：该策略历史上净值从峰到谷的最大跌幅。以账户货币计。显示峰值后最严重损失的关键风险指标。

---

### max_drawdown_percent {#max_drawdown_percent}

**类型:** <code>series&nbsp;float</code>

返回最大回撤占峰值时净值的百分比。回撤 20% 意味着股本较最高点下跌 20%。

---

### max_runup {#max_runup}

**类型:** <code>series&nbsp;float</code>

返回最大涨幅：该策略历史上净值从峰到谷的最大涨幅。以账户货币计。代表已实现的最佳未实现收益。

---

### max_runup_percent {#max_runup_percent}

**类型:** <code>series&nbsp;float</code>

返回最大上涨值占谷底净值的百分比。

---

### net_profit {#net_profit}

**类型:** <code>series&nbsp;float</code>

返回以账户货币表示的净利润。这是已平仓交易的所有已实现利润和损失的总和。不包括未平仓利润。

---

### net_profit_percent {#net_profit_percent}

**类型:** <code>series&nbsp;float</code>

返回净利润占初始资本的百分比。计算公式为（净利润/初始资本）* 100。

---

### open_profit {#open_profit}

**类型:** <code>series&nbsp;float</code>

返回以账户货币表示的未平仓头寸的当前未实现利润/损失。头寸盈利时为正值，亏损时为负值。该值随着价格变动而波动。

---

### open_profit_percent {#open_profit_percent}

**类型:** <code>series&nbsp;float</code>

返回当前未实现损益占初始资本的百分比。计算公式为（未平仓利润/初始资本）* 100。

---

### open_trades {#open_trades}

**类型:** <code>series&nbsp;int</code>

返回当前未平仓交易的数量。已建仓但尚未完全平仓。使用 `strategy.opentrades.*` 函数访问各个未平仓交易的详细信息。

---

### position_avg_price {#position_avg_price}

**类型:** <code>series&nbsp;float</code>

返回当前未平仓头寸的数量加权平均入场价格。计算方式为所有未平仓交易的（入场价格 × 数量）总和除以总数量。平坦时返回 `na`。

---

### position_entry_name {#position_entry_name}

**类型:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

返回当前仓位第一笔未平仓交易的入场 ID。

---

### position_size {#position_size}

**类型:** <code>series&nbsp;float</code>

返回当前头寸规模（以单位（合约、股票等）为单位）。正值表示多​​头头寸，负值表示空头头寸，零表示平仓（无头寸）。

---

### win_trades {#win_trades}

**类型:** <code>series&nbsp;int</code>

返回获胜平仓交易的数量。当利润大于零时，交易被视为盈利。

## 函数

### cancel {#cancel}

```navi
strategy.cancel(id: series String)
```

通过 ID 取消挂单。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 要取消的订单标识符。 |

---

### cancel_all {#cancel_all}

```navi
strategy.cancel_all()
```

取消策略创建的每个挂单。

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

通过条目 ID 平仓。使用 `qty` 或 `qty_percent` 请求部分关闭。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 要关闭的条目 ID。 |
| `comment` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 生成的平仓订单的可选注释。 |
| `qty` | <code>series&nbsp;float</code> | `na` | 绝对数量关闭。 |
| `qty_percent` | <code>series&nbsp;float</code> | `na` | 平仓的百分比。 |
| `alert_message` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 可选的警报消息。 |
| `immediately` | <code>series&nbsp;bool</code> | `false` | 如果 `true`，则立即平仓。 |
| `disable_alert` | <code>series&nbsp;bool</code> | `false` | 如果 `true`，则抑制策略警报。 |

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

关闭所有未平仓头寸。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `comment` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 生成的平仓订单的可选注释。 |
| `alert_message` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 可选的警报消息。 |
| `immediately` | <code>series&nbsp;bool</code> | `false` | 如果 `true`，则立即平仓所有仓位。 |
| `disable_alert` | <code>series&nbsp;bool</code> | `false` | 如果 `true`，则抑制策略警报。 |

---

### convert_to_account {#convert_to_account}

```navi
strategy.convert_to_account(value: series float): series float
```

将货币值从代码的货币转换为策略的账户货币。使用配置的货币转换器。当未提供转换器时，返回原值不变。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `value` | <code>series&nbsp;float</code> |  | 以符号货币表示的价值。 |

**返回:** <code>series&nbsp;float</code>

---

### convert_to_symbol {#convert_to_symbol}

```navi
strategy.convert_to_symbol(value: series float): series float
```

将货币值从策略的账户货币转换为代码的货币。使用配置的货币转换器。当未提供转换器时，返回原值不变。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `value` | <code>series&nbsp;float</code> |  | 以账户货币表示的价值。 |

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

下达或更新挂单。重用现有待处理的 `id` 会更新该订单，而不是创建新订单。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 唯一的订单标识符。 |
| `direction` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Direction">Direction</a></code> |  | 订单方：<code>strategy.long</code> 或 <code>strategy.short</code>。 |
| `qty` | <code>series&nbsp;float</code> | `na` | 订单大小。当`na`时，使用策略默认值。 |
| `limit` | <code>series&nbsp;float</code> | `na` | 限价。当`na`时，顺序不限。 |
| `stop` | <code>series&nbsp;float</code> | `na` | 止损价。当 `na` 时，没有附加停止触发器。 |
| `oca_name` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 可选的“一取消全”组名称。 |
| `oca_type` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/OcaType">OcaType</a></code> | `OcaType.None` | OCA 行为，例如 `oca.cancel`、`oca.reduce` 或 `oca.none`。 |
| `comment` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 可选订单评论。 |
| `alert_message` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 此订单的可选警报消息。 |
| `disable_alert` | <code>series&nbsp;bool</code> | `false` | 如果 `true`，则抑制该订单的策略警报。 |

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

下达或更新未平仓头寸的退出订单。该订单可以结合止盈、止损和追踪止损设置。如果同时提供止盈值和止损值，它们将充当括号。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 唯一的退出指令标识符。 |
| `from_entry` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 退出的入口 ID。当 `na` 时，退出适用于整个匹配位置。 |
| `qty` | <code>series&nbsp;float</code> | `na` | 绝对数量关闭。当 `na` 时，使用完全匹配的数量。 |
| `qty_percent` | <code>series&nbsp;float</code> | `na` | 平仓的百分比。 |
| `profit` | <code>series&nbsp;float</code> | `na` | 与入场价格的止盈距离（以跳动点为单位）。 |
| `limit` | <code>series&nbsp;float</code> | `na` | 绝对止盈价。覆盖 `profit`。 |
| `loss` | <code>series&nbsp;float</code> | `na` | 距入场价格的止损距离（以跳动点为单位）。 |
| `stop` | <code>series&nbsp;float</code> | `na` | 绝对止损价。覆盖 `loss`。 |
| `trail_price` | <code>series&nbsp;float</code> | `na` | 激活追踪止损的绝对价格。 |
| `trail_points` | <code>series&nbsp;float</code> | `na` | 勾选距激活追踪止损入场点的距离。 |
| `trail_offset` | <code>series&nbsp;float</code> | `na` | 激活后，报价偏移量保持在最佳价格后面。 |
| `oca_name` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 可选的 OCA 组名称。 |
| `comment` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 从此出口填充的默认注释。 |
| `comment_profit` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 用于止盈填充的注释。 |
| `comment_loss` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 用于止损填充的注释。 |
| `comment_trailing` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 用于追踪止损填充的注释。 |
| `alert_message` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 默认警报消息。 |
| `alert_profit` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 用于止盈填充的警报消息。 |
| `alert_loss` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 用于止损填充的警报消息。 |
| `alert_trailing` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 用于追踪止损填充的警报消息。 |
| `disable_alert` | <code>series&nbsp;bool</code> | `false` | 如果 `true`，则抑制此退出的策略警报。 |

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

下达或更新一般策略订单。该 API 可以根据当前仓位和参数开仓、增加、减少或平仓。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 唯一的订单标识符。 |
| `direction` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Direction">Direction</a></code> |  | 订单方：<code>strategy.long</code> 或 <code>strategy.short</code>。 |
| `qty` | <code>series&nbsp;float</code> | `na` | 订单大小。当`na`时，使用策略默认值。 |
| `limit` | <code>series&nbsp;float</code> | `na` | 限价。当`na`时，顺序不限。 |
| `stop` | <code>series&nbsp;float</code> | `na` | 止损价。当 `na` 时，没有附加停止触发器。 |
| `oca_name` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 可选的“一取消全”组名称。 |
| `oca_type` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/OcaType">OcaType</a></code> | `OcaType.None` | OCA 行为，例如 `oca.cancel`、`oca.reduce` 或 `oca.none`。 |
| `comment` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 可选订单评论。 |
| `alert_message` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 此订单的可选警报消息。 |
| `disable_alert` | <code>series&nbsp;bool</code> | `false` | 如果 `true`，则抑制该订单的策略警报。 |
