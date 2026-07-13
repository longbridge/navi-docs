---
title: "strategy.risk"
---

# strategy.risk

## Functions

### allow_entry_in {#allow_entry_in}

```navi
strategy.risk.allow_entry_in(dir: simple Direction)
```

Sets which direction strategy entries are allowed in.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `dir` | <code>simple&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Direction">Direction</a></code> |  |  |

---

### max_cons_loss_days {#max_cons_loss_days}

```navi
strategy.risk.max_cons_loss_days(count: simple int)
```

Sets the maximum number of consecutive losing days allowed.

A losing day is one where the equity at the end of the day is lower than at the start. When the number of consecutive losing days reaches the limit, all pending orders are cancelled and all positions are closed. Trading is permanently disabled for the rest of the backtest.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `count` | <code>simple&nbsp;int</code> |  | The maximum number of consecutive losing days. |

---

### max_drawdown {#max_drawdown}

```navi
strategy.risk.max_drawdown(value: simple float, type: simple DefaultQtyType)
```

Sets the maximum allowed drawdown for the strategy.

When the strategy's equity drawdown exceeds this limit, all pending orders are cancelled and all positions are closed. Trading is permanently disabled for the rest of the backtest.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | <code>simple&nbsp;float</code> |  | The maximum drawdown value. |
| `type` | <code>simple&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/DefaultQtyType">DefaultQtyType</a></code> |  | The value type: `strategy.cash` or `strategy.percent_of_equity`. |

---

### max_intraday_filled_orders {#max_intraday_filled_orders}

```navi
strategy.risk.max_intraday_filled_orders(count: simple int)
```

Sets the maximum number of filled orders allowed per trading day.

When the daily limit is reached, no further orders will be filled for the rest of that trading day. The counter resets at the start of each new trading day.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `count` | <code>simple&nbsp;int</code> |  | The maximum number of filled orders per day. |

---

### max_intraday_loss {#max_intraday_loss}

```navi
strategy.risk.max_intraday_loss(
    value: simple float,
    type: simple DefaultQtyType
  )
```

Sets the maximum allowed intraday loss for the strategy.

When the intraday loss exceeds this limit, all pending orders are cancelled and all positions are closed. Trading is disabled for the rest of the trading day and resumes on the next day.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | <code>simple&nbsp;float</code> |  | The maximum intraday loss value. |
| `type` | <code>simple&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/DefaultQtyType">DefaultQtyType</a></code> |  | The value type: `strategy.cash` or `strategy.percent_of_equity`. |

---

### max_position_size {#max_position_size}

```navi
strategy.risk.max_position_size(size: simple float)
```

Sets the max absolute position size.

Orders that would exceed this limit will be capped; if the minimum possible order still exceeds, no order is placed.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | <code>simple&nbsp;float</code> |  |  |
