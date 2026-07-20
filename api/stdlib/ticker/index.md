---
title: "ticker"
---

# ticker

## Functions

### heikin_ashi {#heikin_ashi}

```navi
ticker.heikin_ashi(ticker_id: series String): series String
```

Creates a ticker identifier for requesting Heikin Ashi bar values.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ticker_id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The base ticker id to modify (e.g. `syminfo.tickerid`). |

**Returns:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> — A ticker id string usable with `request.security`.

---

### inherit {#inherit}

```navi
ticker.inherit(
    from_ticker_id: series String,
    ticker_id: series String
  ): series String
```

Constructs a ticker id for a symbol carrying all modifiers of another ticker id.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `from_ticker_id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The ticker id whose modifiers are inherited. |
| `ticker_id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The base ticker id supplying the symbol. |

**Returns:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> — A ticker id string usable with `request.security`.

---

### kagi {#kagi}

```navi
ticker.kagi(
    ticker_id: series String,
    param: series float,
    style: series BoxStyle = BoxStyle.Traditional
  ): series String
```

Creates a ticker identifier for requesting Kagi values.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ticker_id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The base ticker id (e.g. `symbol_info.tickerid`). |
| `param` | <code>series&nbsp;float</code> |  | Reversal amount (Traditional) or ATR length (ATR). |
| `style` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/BoxStyle">BoxStyle</a></code> | `BoxStyle.Traditional` | Box size assignment method. |

**Returns:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> — A ticker id string usable with `request.security`.

---

### line_break {#line_break}

```navi
ticker.line_break(
    ticker_id: series String,
    num_lines: series int = 3
  ): series String
```

Creates a ticker identifier for requesting Line Break values.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ticker_id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The base ticker id to modify (e.g. `symbol_info.tickerid`). |
| `num_lines` | <code>series&nbsp;int</code> | `3` | Number of lines used for break calculation. |

**Returns:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> — A ticker id string usable with `request.security`.

---

### modify {#modify}

```navi
ticker.modify(
    ticker_id: series String,
    session: series Session = na,
    adjustment: series Adjustment = na,
    backadjustment: simple BackAdjustment = na,
    settlement_as_close: simple SettlementAsClose = na
  ): series String
```

Overrides data modifiers on an existing ticker id, keeping the rest.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ticker_id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The ticker id to modify. |
| `session` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Session">Session</a></code> | `na` | Session type. Optional. |
| `adjustment` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Adjustment">Adjustment</a></code> | `na` | Price adjustment. Optional. |
| `backadjustment` | <code>simple&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/BackAdjustment">BackAdjustment</a></code> | `na` | Continuous-futures back-adjustment. Optional. |
| `settlement_as_close` | <code>simple&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/SettlementAsClose">SettlementAsClose</a></code> | `na` | Settlement-as-close. Optional. |

**Returns:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> — A ticker id string usable with `request.security`.

---

### new {#new}

```navi
ticker.new(
    prefix: series String,
    ticker: series String,
    session: series Session = Session.Regular,
    adjustment: series Adjustment = Adjustment.None,
    backadjustment: simple BackAdjustment = BackAdjustment.Inherit,
    settlement_as_close: simple SettlementAsClose = SettlementAsClose.Inherit
  ): series String
```

Constructs a ticker id from a prefix and ticker with the given data modifiers (session, adjustment, etc.). Omitted modifiers use their defaults.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `prefix` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | Exchange prefix (e.g. `symbol_info.prefix`). |
| `ticker` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | Ticker name (e.g. `symbol_info.ticker`). |
| `session` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Session">Session</a></code> | `Session.Regular` | Session type. Optional. |
| `adjustment` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Adjustment">Adjustment</a></code> | `Adjustment.None` | Price adjustment. Optional. |
| `backadjustment` | <code>simple&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/BackAdjustment">BackAdjustment</a></code> | `BackAdjustment.Inherit` | Continuous-futures back-adjustment. Optional. |
| `settlement_as_close` | <code>simple&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/SettlementAsClose">SettlementAsClose</a></code> | `SettlementAsClose.Inherit` | Settlement-as-close. Optional. |

**Returns:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> — A ticker id string usable with `request.security`.

---

### point_figure {#point_figure}

```navi
ticker.point_figure(
    ticker_id: series String,
    source: series PnfSource,
    style: series BoxStyle,
    param: series float,
    reversal: series int
  ): series String
```

Creates a ticker identifier for requesting Point & Figure values.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ticker_id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The base ticker id (e.g. `symbol_info.tickerid`). |
| `source` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PnfSource">PnfSource</a></code> |  | Source used to calculate boxes (Hl / Close). |
| `style` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/BoxStyle">BoxStyle</a></code> |  | Box size assignment method. |
| `param` | <code>series&nbsp;float</code> |  | ATR length, box size, or percentage, depending on `style`. |
| `reversal` | <code>series&nbsp;int</code> |  | Reversal amount, in boxes. |

**Returns:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> — A ticker id string usable with `request.security`.

---

### renko {#renko}

```navi
ticker.renko(
    ticker_id: series String,
    style: series BoxStyle = BoxStyle.Atr,
    param: series float = 10,
    request_wicks: series bool = false,
    source: series RenkoSource = RenkoSource.Close
  ): series String
```

Creates a ticker identifier for requesting Renko values.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ticker_id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The base ticker id (e.g. `symbol_info.tickerid`). |
| `style` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/BoxStyle">BoxStyle</a></code> | `BoxStyle.Atr` | Box size assignment method (ATR / Traditional / PercentageLtp). |
| `param` | <code>series&nbsp;float</code> | `10` | ATR length, box size, or percentage, depending on `style`. |
| `request_wicks` | <code>series&nbsp;bool</code> | `false` | Whether Renko bricks include wick values. |
| `source` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/RenkoSource">RenkoSource</a></code> | `RenkoSource.Close` | Source used to calculate bricks (Close / OHLC). |

**Returns:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> — A ticker id string usable with `request.security`.

---

### standard {#standard}

```navi
ticker.standard(ticker_id: series String): series String
```

Creates a ticker identifier for requesting standard chart data, unaffected by non-standard chart-type modifiers (Heikin Ashi, Renko, etc.).

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ticker_id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The base ticker id to modify (e.g. `syminfo.tickerid`). |

**Returns:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> — A ticker id string usable with `request.security`.
