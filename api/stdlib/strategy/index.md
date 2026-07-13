---
title: "strategy"
---

# strategy

## Properties

### account_currency {#account_currency}

**Type:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

Returns the currency code used for the strategy's account, as set in the <a class="stdlib-ref" data-key="prelude::strategy" href="/api/stdlib/prelude/#strategy">strategy</a> declaration.

---

### avg_losing_trade {#avg_losing_trade}

**Type:** <code>series&nbsp;float</code>

Returns the average loss per losing trade in account currency.

Calculated as gross loss / number of losing trades. Expressed as a positive number.

---

### avg_losing_trade_percent {#avg_losing_trade_percent}

**Type:** <code>series&nbsp;float</code>

Returns the average loss per losing trade as a percentage of initial capital.

Calculated as gross loss percent / number of losing trades. Expressed as a positive number.

---

### avg_trade {#avg_trade}

**Type:** <code>series&nbsp;float</code>

Returns the average profit/loss per closed trade in account currency.

Calculated as net profit / number of closed trades.

---

### avg_trade_percent {#avg_trade_percent}

**Type:** <code>series&nbsp;float</code>

Returns the average profit/loss per closed trade as a percentage of initial capital.

Calculated as net profit percent / number of closed trades.

---

### avg_winning_trade {#avg_winning_trade}

**Type:** <code>series&nbsp;float</code>

Returns the average profit per winning trade in account currency.

Calculated as gross profit / number of winning trades.

---

### avg_winning_trade_percent {#avg_winning_trade_percent}

**Type:** <code>series&nbsp;float</code>

Returns the average profit per winning trade as a percentage of initial capital.

Calculated as gross profit percent / number of winning trades.

---

### closed_trades {#closed_trades}

**Type:** <code>series&nbsp;int</code>

Returns the count of closed trades since strategy start.

A trade is counted as closed when an entry is fully exited. Use `strategy.closedtrades.*` functions to access details of individual closed trades.

---

### default_entry_qty {#default_entry_qty}

**Type:** <code>series&nbsp;float</code>

Returns the default number of contracts/shares/lots/units used for market orders.

Calculated from the `default_qty_type` and `default_qty_value` parameters of the <a class="stdlib-ref" data-key="prelude::strategy" href="/api/stdlib/prelude/#strategy">strategy</a> declaration. The value depends on the current price and equity.

---

### equity {#equity}

**Type:** <code>series&nbsp;float</code>

Returns the current account equity: initial capital + net profit + open profit.

This is the real-time value of the account including unrealized gains/losses from open positions.

---

### even_trades {#even_trades}

**Type:** <code>series&nbsp;int</code>

Returns the number of break-even closed trades.

A trade is considered even when its profit is exactly zero.

---

### gross_loss {#gross_loss}

**Type:** <code>series&nbsp;float</code>

Returns the gross loss: the sum of losses from all losing closed trades.

Expressed as a positive number. In account currency.

---

### gross_loss_percent {#gross_loss_percent}

**Type:** <code>series&nbsp;float</code>

Returns the gross loss as a percentage of initial capital.

Calculated as (gross loss / initial capital) * 100.

---

### gross_profit {#gross_profit}

**Type:** <code>series&nbsp;float</code>

Returns the gross profit: the sum of profits from all winning closed trades.

Does not subtract losses. In account currency.

---

### gross_profit_percent {#gross_profit_percent}

**Type:** <code>series&nbsp;float</code>

Returns the gross profit as a percentage of initial capital.

Calculated as (gross profit / initial capital) * 100.

---

### initial_capital {#initial_capital}

**Type:** <code>series&nbsp;float</code>

Returns the initial capital set in the <a class="stdlib-ref" data-key="prelude::strategy" href="/api/stdlib/prelude/#strategy">strategy</a> declaration.

This is the starting cash for backtests, as specified by the `initial_capital` parameter.

---

### loss_trades {#loss_trades}

**Type:** <code>series&nbsp;int</code>

Returns the number of losing closed trades.

A trade is considered losing when its profit is less than zero.

---

### margin_liquidation_price {#margin_liquidation_price}

**Type:** <code>series&nbsp;float</code>

Returns the price at which a margin call will be triggered for the current position.

---

### max_contracts_held_all {#max_contracts_held_all}

**Type:** <code>series&nbsp;float</code>

Returns the maximum number of contracts/shares/lots/units held at any one time during the strategy.

Considers both long and short directions (whichever was larger).

---

### max_contracts_held_long {#max_contracts_held_long}

**Type:** <code>series&nbsp;float</code>

Returns the maximum number of contracts/shares/lots/units held in a long position at any one time during the strategy.

---

### max_contracts_held_short {#max_contracts_held_short}

**Type:** <code>series&nbsp;float</code>

Returns the maximum number of contracts/shares/lots/units held in a short position at any one time during the strategy.

---

### max_drawdown {#max_drawdown}

**Type:** <code>series&nbsp;float</code>

Returns the maximum drawdown: the largest peak-to-trough decline in equity during the strategy's history.

In account currency. A key risk metric showing the worst loss from a peak.

---

### max_drawdown_percent {#max_drawdown_percent}

**Type:** <code>series&nbsp;float</code>

Returns the maximum drawdown as a percentage of equity at the peak.

A drawdown of 20% means equity fell 20% from its highest point.

---

### max_runup {#max_runup}

**Type:** <code>series&nbsp;float</code>

Returns the maximum run-up: the largest peak-to-trough rise in equity during the strategy's history.

In account currency. Represents the best unrealized gain achieved.

---

### max_runup_percent {#max_runup_percent}

**Type:** <code>series&nbsp;float</code>

Returns the maximum run-up as a percentage of equity at the trough.

---

### net_profit {#net_profit}

**Type:** <code>series&nbsp;float</code>

Returns the net profit in the account currency.

This is the sum of all realized profits and losses from closed trades. Does not include open profit.

---

### net_profit_percent {#net_profit_percent}

**Type:** <code>series&nbsp;float</code>

Returns the net profit as a percentage of initial capital.

Calculated as (net profit / initial capital) * 100.

---

### open_profit {#open_profit}

**Type:** <code>series&nbsp;float</code>

Returns the current unrealized profit/loss from open positions in account currency.

Positive when positions are profitable, negative when at a loss. This value fluctuates with price movements.

---

### open_profit_percent {#open_profit_percent}

**Type:** <code>series&nbsp;float</code>

Returns the current unrealized profit/loss as a percentage of initial capital.

Calculated as (open profit / initial capital) * 100.

---

### open_trades {#open_trades}

**Type:** <code>series&nbsp;int</code>

Returns the count of currently open trades.

Positions that have been entered but not yet fully closed. Use `strategy.opentrades.*` functions to access details of individual open trades.

---

### position_avg_price {#position_avg_price}

**Type:** <code>series&nbsp;float</code>

Returns the quantity-weighted average entry price of the current open position.

Calculated as the sum of (entry_price × quantity) for all open trades divided by the total quantity. Returns `na` when flat.

---

### position_entry_name {#position_entry_name}

**Type:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

Returns the entry ID of the first open trade in the current position.

---

### position_size {#position_size}

**Type:** <code>series&nbsp;float</code>

Returns the current position size in units (contracts, shares, etc.).

Positive values indicate a long position, negative values indicate a short position, and zero means flat (no position).

---

### win_trades {#win_trades}

**Type:** <code>series&nbsp;int</code>

Returns the number of winning closed trades.

A trade is considered winning when its profit is greater than zero.

## Functions

### cancel {#cancel}

```navi
strategy.cancel(id: series String)
```

Cancels a pending order by ID.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | Order identifier to cancel. |

---

### cancel_all {#cancel_all}

```navi
strategy.cancel_all()
```

Cancels every pending order created by the strategy.

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

Closes an open position by entry ID.

Use either `qty` or `qty_percent` to request a partial close.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | Entry ID to close. |
| `comment` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | Optional comment for the generated close order. |
| `qty` | <code>series&nbsp;float</code> | `na` | Absolute quantity to close. |
| `qty_percent` | <code>series&nbsp;float</code> | `na` | Percentage of the position to close. |
| `alert_message` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | Optional alert message. |
| `immediately` | <code>series&nbsp;bool</code> | `false` | If `true`, closes the position immediately. |
| `disable_alert` | <code>series&nbsp;bool</code> | `false` | If `true`, suppresses the strategy alert. |

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

Closes every open position.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `comment` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | Optional comment for the generated close orders. |
| `alert_message` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | Optional alert message. |
| `immediately` | <code>series&nbsp;bool</code> | `false` | If `true`, closes all positions immediately. |
| `disable_alert` | <code>series&nbsp;bool</code> | `false` | If `true`, suppresses the strategy alert. |

---

### convert_to_account {#convert_to_account}

```navi
strategy.convert_to_account(value: series float): series float
```

Converts a monetary value from the symbol's currency to the strategy's account currency.

Uses the configured currency converter. When no converter is provided, returns the value unchanged.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | <code>series&nbsp;float</code> |  | The value in the symbol's currency. |

**Returns:** <code>series&nbsp;float</code>

---

### convert_to_symbol {#convert_to_symbol}

```navi
strategy.convert_to_symbol(value: series float): series float
```

Converts a monetary value from the strategy's account currency to the symbol's currency.

Uses the configured currency converter. When no converter is provided, returns the value unchanged.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | <code>series&nbsp;float</code> |  | The value in the account currency. |

**Returns:** <code>series&nbsp;float</code>

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

Places or updates an entry order.

Reusing an existing pending `id` updates that order instead of creating a new one.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | Unique order identifier. |
| `direction` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Direction">Direction</a></code> |  | Order side: <a class="stdlib-ref" data-key="prelude::Direction" href="/api/stdlib/prelude/Direction">Direction.Long</a> or <a class="stdlib-ref" data-key="prelude::Direction" href="/api/stdlib/prelude/Direction">Direction.Short</a>. |
| `qty` | <code>series&nbsp;float</code> | `na` | Order size. When `na`, the strategy default is used. |
| `limit` | <code>series&nbsp;float</code> | `na` | Limit price. When `na`, the order is not limited. |
| `stop` | <code>series&nbsp;float</code> | `na` | Stop price. When `na`, no stop trigger is attached. |
| `oca_name` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | Optional One-Cancels-All group name. |
| `oca_type` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/OcaType">OcaType</a></code> | `OcaType.None` | OCA behavior, such as `oca.cancel`, `oca.reduce`, or `oca.none`. |
| `comment` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | Optional order comment. |
| `alert_message` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | Optional alert message for this order. |
| `disable_alert` | <code>series&nbsp;bool</code> | `false` | If `true`, suppresses the strategy alert for this order. |

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

Places or updates an exit order for an open position.

The order can combine take-profit, stop-loss, and trailing-stop settings. If both take-profit and stop-loss values are supplied, they behave as a bracket.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | Unique exit-order identifier. |
| `from_entry` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | Entry ID to exit. When `na`, the exit applies to the whole matching position. |
| `qty` | <code>series&nbsp;float</code> | `na` | Absolute quantity to close. When `na`, the full matched quantity is used. |
| `qty_percent` | <code>series&nbsp;float</code> | `na` | Percentage of the position to close. |
| `profit` | <code>series&nbsp;float</code> | `na` | Take-profit distance in ticks from the entry price. |
| `limit` | <code>series&nbsp;float</code> | `na` | Absolute take-profit price. Overrides `profit`. |
| `loss` | <code>series&nbsp;float</code> | `na` | Stop-loss distance in ticks from the entry price. |
| `stop` | <code>series&nbsp;float</code> | `na` | Absolute stop-loss price. Overrides `loss`. |
| `trail_price` | <code>series&nbsp;float</code> | `na` | Absolute price that activates the trailing stop. |
| `trail_points` | <code>series&nbsp;float</code> | `na` | Tick distance from entry that activates the trailing stop. |
| `trail_offset` | <code>series&nbsp;float</code> | `na` | Tick offset maintained behind the best price after activation. |
| `oca_name` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | Optional OCA group name. |
| `comment` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | Default comment for fills from this exit. |
| `comment_profit` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | Comment used for take-profit fills. |
| `comment_loss` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | Comment used for stop-loss fills. |
| `comment_trailing` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | Comment used for trailing-stop fills. |
| `alert_message` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | Default alert message. |
| `alert_profit` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | Alert message used for take-profit fills. |
| `alert_loss` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | Alert message used for stop-loss fills. |
| `alert_trailing` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | Alert message used for trailing-stop fills. |
| `disable_alert` | <code>series&nbsp;bool</code> | `false` | If `true`, suppresses the strategy alert for this exit. |

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

Places or updates a general strategy order.

This API can open, add to, reduce, or close a position depending on the current position and arguments.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | Unique order identifier. |
| `direction` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Direction">Direction</a></code> |  | Order side: <a class="stdlib-ref" data-key="prelude::Direction" href="/api/stdlib/prelude/Direction">Direction.Long</a> or <a class="stdlib-ref" data-key="prelude::Direction" href="/api/stdlib/prelude/Direction">Direction.Short</a>. |
| `qty` | <code>series&nbsp;float</code> | `na` | Order size. When `na`, the strategy default is used. |
| `limit` | <code>series&nbsp;float</code> | `na` | Limit price. When `na`, the order is not limited. |
| `stop` | <code>series&nbsp;float</code> | `na` | Stop price. When `na`, no stop trigger is attached. |
| `oca_name` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | Optional One-Cancels-All group name. |
| `oca_type` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/OcaType">OcaType</a></code> | `OcaType.None` | OCA behavior, such as `oca.cancel`, `oca.reduce`, or `oca.none`. |
| `comment` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | Optional order comment. |
| `alert_message` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | Optional alert message for this order. |
| `disable_alert` | <code>series&nbsp;bool</code> | `false` | If `true`, suppresses the strategy alert for this order. |
