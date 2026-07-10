---
title: "strategy.risk"
---

# strategy.risk

## 函数

### allow_entry_in {#allow_entry_in}

```navi
strategy.risk.allow_entry_in(dir: simple Direction)
```

设置允许进入哪些方向策略条目。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `dir` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Direction">Direction</a></code> |  |  |

---

### max_cons_loss_days {#max_cons_loss_days}

```navi
strategy.risk.max_cons_loss_days(count: simple int)
```

设置允许的最大连续亏损天数。亏损日是指当天结束时的净值低于开始时的净值。当连续亏损天数达到限制时，所有挂单被取消，所有仓位被平仓。在余下的回测中，交易将被永久禁用。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `count` | <code>simple&nbsp;int</code> |  | 最大连续亏损天数。 |

---

### max_drawdown {#max_drawdown}

```navi
strategy.risk.max_drawdown(value: simple float, type: simple DefaultQtyType)
```

设置策略允许的最大回撤。当策略的净值回撤超过此限制时，所有挂单将被取消，所有仓位将被平仓。在余下的回测中，交易将被永久禁用。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `value` | <code>simple&nbsp;float</code> |  | 最大回撤值。 |
| `type` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/DefaultQtyType">DefaultQtyType</a></code> |  | 值类型：`strategy.cash` 或 `strategy.percent_of_equity`。 |

---

### max_intraday_filled_orders {#max_intraday_filled_orders}

```navi
strategy.risk.max_intraday_filled_orders(count: simple int)
```

设置每个交易日允许执行的最大订单数量。当达到每日限额时，该交易日剩余时间内将不再执行订单。计数器在每个新交易日开始时重置。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `count` | <code>simple&nbsp;int</code> |  | 每天执行的最大订单数。 |

---

### max_intraday_loss {#max_intraday_loss}

```navi
strategy.risk.max_intraday_loss(
    value: simple float,
    type: simple DefaultQtyType
  )
```

设置策略允许的最大日内损失。当盘中亏损超过此限额时，所有挂单被取消，所有仓位被平仓。该交易日剩余时间禁止交易，并于次日恢复。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `value` | <code>simple&nbsp;float</code> |  | 盘中最大损失值。 |
| `type` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/DefaultQtyType">DefaultQtyType</a></code> |  | 值类型：`strategy.cash` 或 `strategy.percent_of_equity`。 |

---

### max_position_size {#max_position_size}

```navi
strategy.risk.max_position_size(size: simple float)
```

设置最大绝对头寸大小。超过此限制的订单将受到限制；如果仍然超过最小可能订单，则不会下订单。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `size` | <code>simple&nbsp;float</code> |  |  |
