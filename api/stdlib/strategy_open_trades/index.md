---
title: "strategy.open_trades"
---

# strategy.open_trades

## Properties

### capital_held {#capital_held}

**Type:** <code>series&nbsp;float</code>

Returns the capital amount currently held by open trades.

## Functions

### commission {#commission}

```navi
strategy.open_trades.commission(trade_num: int): series float
```

Returns the sum of entry and exit fees paid in the open trade, expressed in `strategy.account_currency`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**Returns:** <code>series&nbsp;float</code>

---

### entry_bar_index {#entry_bar_index}

```navi
strategy.open_trades.entry_bar_index(trade_num: int): series int
```

Returns the bar index of the entry bar of the open trade.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**Returns:** <code>series&nbsp;int</code>

---

### entry_comment {#entry_comment}

```navi
strategy.open_trades.entry_comment(trade_num: int): series String
```

Returns the comment of the entry order of the open trade.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**Returns:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

---

### entry_id {#entry_id}

```navi
strategy.open_trades.entry_id(trade_num: int): series String
```

Returns the entry order ID of the open trade.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**Returns:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

---

### entry_price {#entry_price}

```navi
strategy.open_trades.entry_price(trade_num: int): series float
```

Returns the entry price of the open trade.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**Returns:** <code>series&nbsp;float</code>

---

### entry_time {#entry_time}

```navi
strategy.open_trades.entry_time(trade_num: int): series int
```

Returns the entry time of the open trade, in UNIX time (milliseconds).

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**Returns:** <code>series&nbsp;int</code>

---

### max_drawdown {#max_drawdown}

```navi
strategy.open_trades.max_drawdown(trade_num: int): series float
```

Returns the maximum drawdown (in `strategy.account_currency`) of the open trade.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**Returns:** <code>series&nbsp;float</code>

---

### max_drawdown_percent {#max_drawdown_percent}

```navi
strategy.open_trades.max_drawdown_percent(trade_num: int): series float
```

Returns the maximum drawdown (percent) of the open trade.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**Returns:** <code>series&nbsp;float</code>

---

### max_runup {#max_runup}

```navi
strategy.open_trades.max_runup(trade_num: int): series float
```

Returns the maximum run-up (in `strategy.account_currency`) of the open trade.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**Returns:** <code>series&nbsp;float</code>

---

### max_runup_percent {#max_runup_percent}

```navi
strategy.open_trades.max_runup_percent(trade_num: int): series float
```

Returns the maximum run-up (percent) of the open trade.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**Returns:** <code>series&nbsp;float</code>

---

### profit {#profit}

```navi
strategy.open_trades.profit(trade_num: int): series float
```

Returns the current profit/loss (in `strategy.account_currency`) of the open trade.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**Returns:** <code>series&nbsp;float</code>

---

### profit_percent {#profit_percent}

```navi
strategy.open_trades.profit_percent(trade_num: int): series float
```

Returns the current profit/loss (percent) of the open trade.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**Returns:** <code>series&nbsp;float</code>

---

### size {#size}

```navi
strategy.open_trades.size(trade_num: int): series float
```

Returns the size (quantity) of the open trade.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**Returns:** <code>series&nbsp;float</code>
