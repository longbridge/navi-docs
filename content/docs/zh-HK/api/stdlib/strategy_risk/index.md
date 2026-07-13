---
title: "strategy.risk"
---

# strategy.risk

## 函數

### allow_entry_in {#allow_entry_in}

```navi
strategy.risk.allow_entry_in(dir: simple Direction)
```

設定允許進入哪些方向策略條目。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `dir` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Direction">Direction</a></code> |  |  |

---

### max_cons_loss_days {#max_cons_loss_days}

```navi
strategy.risk.max_cons_loss_days(count: simple int)
```

設定允許的最大連續虧損天數。虧損日是指當天結束時的淨值低於開始時的淨值。當連續虧損天數達到限制時，所有掛單被取消，所有倉位被平倉。在餘下的回測中，交易將被永久禁用。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `count` | <code>simple&nbsp;int</code> |  | 最大連續虧損天數。 |

---

### max_drawdown {#max_drawdown}

```navi
strategy.risk.max_drawdown(value: simple float, type: simple DefaultQtyType)
```

設定策略允許的最大回撤。當策略的淨值回撤超過此限制時，所有掛單將被取消，所有倉位將被平倉。在餘下的回測中，交易將被永久禁用。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `value` | <code>simple&nbsp;float</code> |  | 最大回撤值。 |
| `type` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/DefaultQtyType">DefaultQtyType</a></code> |  | 值類型：`strategy.cash` 或 `strategy.percent_of_equity`。 |

---

### max_intraday_filled_orders {#max_intraday_filled_orders}

```navi
strategy.risk.max_intraday_filled_orders(count: simple int)
```

設定每個交易日允許執行的最大訂單數量。當達到每日限額時，該交易日剩餘時間內將不再執行訂單。計數器在每個新交易日開始時重置。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `count` | <code>simple&nbsp;int</code> |  | 每天執行的最大訂單數。 |

---

### max_intraday_loss {#max_intraday_loss}

```navi
strategy.risk.max_intraday_loss(
    value: simple float,
    type: simple DefaultQtyType
  )
```

設定策略允許的最大日內損失。當盤中虧損超過此限額時，所有掛單被取消，所有倉位被平倉。該交易日剩餘時間禁止交易，並於次日恢復。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `value` | <code>simple&nbsp;float</code> |  | 盤中最大損失值。 |
| `type` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/DefaultQtyType">DefaultQtyType</a></code> |  | 值類型：`strategy.cash` 或 `strategy.percent_of_equity`。 |

---

### max_position_size {#max_position_size}

```navi
strategy.risk.max_position_size(size: simple float)
```

設定最大絕對頭寸大小。超過此限制的訂單將受到限制；如果仍然超過最小可能訂單，則不會下訂單。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `size` | <code>simple&nbsp;float</code> |  |  |
