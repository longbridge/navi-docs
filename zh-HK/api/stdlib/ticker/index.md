---
title: "ticker"
---

# ticker

## 函數

### heikin_ashi {#heikin_ashi}

```navi
ticker.heikin_ashi(ticker_id: series String): series String
```

建立用於請求平均K線（Heikin Ashi）數據的代碼識別符。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `ticker_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | The base ticker id to modify (e.g. `syminfo.tickerid`). |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> — A ticker id string usable with `request.security`.

---

### inherit {#inherit}

```navi
ticker.inherit(
    from_ticker_id: series String,
    ticker_id: series String
  ): series String
```

建構一個繼承另一代碼識別符所有修飾符的代碼識別符。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `from_ticker_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | The ticker id whose modifiers are inherited. |
| `ticker_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | The base ticker id supplying the symbol. |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> — A ticker id string usable with `request.security`.

---

### kagi {#kagi}

```navi
ticker.kagi(
    ticker_id: series String,
    param: series float,
    style: series BoxStyle = BoxStyle.Traditional
  ): series String
```

建立用於請求卡吉圖（Kagi）數據的代碼識別符。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `ticker_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | The base ticker id (e.g. `symbol_info.tickerid`). |
| `param` | <code>series&nbsp;float</code> |  | Reversal amount (Traditional) or ATR length (ATR). |
| `style` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/BoxStyle">BoxStyle</a></code> | `BoxStyle.Traditional` | Box size assignment method. |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> — A ticker id string usable with `request.security`.

---

### line_break {#line_break}

```navi
ticker.line_break(
    ticker_id: series String,
    num_lines: series int = 3
  ): series String
```

建立用於請求折線圖（Line Break）數據的代碼識別符。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `ticker_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | The base ticker id to modify (e.g. `symbol_info.tickerid`). |
| `num_lines` | <code>series&nbsp;int</code> | `3` | Number of lines used for break calculation. |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> — A ticker id string usable with `request.security`.

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

覆寫現有代碼識別符上的數據修飾符，其餘部分保持不變。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `ticker_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | The ticker id to modify. |
| `session` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Session">Session</a></code> | `na` | Session type. Optional. |
| `adjustment` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Adjustment">Adjustment</a></code> | `na` | Price adjustment. Optional. |
| `backadjustment` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/BackAdjustment">BackAdjustment</a></code> | `na` | Continuous-futures back-adjustment. Optional. |
| `settlement_as_close` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/SettlementAsClose">SettlementAsClose</a></code> | `na` | Settlement-as-close. Optional. |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> — A ticker id string usable with `request.security`.

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

根據前綴和代碼名稱及指定的數據修飾符（時段、復權等）建構代碼識別符，未指定的修飾符使用預設值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `prefix` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | Exchange prefix (e.g. `symbol_info.prefix`). |
| `ticker` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | Ticker name (e.g. `symbol_info.ticker`). |
| `session` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Session">Session</a></code> | `Session.Regular` | Session type. Optional. |
| `adjustment` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Adjustment">Adjustment</a></code> | `Adjustment.None` | Price adjustment. Optional. |
| `backadjustment` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/BackAdjustment">BackAdjustment</a></code> | `BackAdjustment.Inherit` | Continuous-futures back-adjustment. Optional. |
| `settlement_as_close` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/SettlementAsClose">SettlementAsClose</a></code> | `SettlementAsClose.Inherit` | Settlement-as-close. Optional. |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> — A ticker id string usable with `request.security`.

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

建立用於請求點數圖（Point & Figure）數據的代碼識別符。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `ticker_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | The base ticker id (e.g. `symbol_info.tickerid`). |
| `source` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PnfSource">PnfSource</a></code> |  | Source used to calculate boxes (Hl / Close). |
| `style` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/BoxStyle">BoxStyle</a></code> |  | Box size assignment method. |
| `param` | <code>series&nbsp;float</code> |  | ATR length, box size, or percentage, depending on `style`. |
| `reversal` | <code>series&nbsp;int</code> |  | Reversal amount, in boxes. |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> — A ticker id string usable with `request.security`.

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

建立用於請求磚形圖（Renko）數據的代碼識別符。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `ticker_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | The base ticker id (e.g. `symbol_info.tickerid`). |
| `style` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/BoxStyle">BoxStyle</a></code> | `BoxStyle.Atr` | Box size assignment method (ATR / Traditional / PercentageLtp). |
| `param` | <code>series&nbsp;float</code> | `10` | ATR length, box size, or percentage, depending on `style`. |
| `request_wicks` | <code>series&nbsp;bool</code> | `false` | Whether Renko bricks include wick values. |
| `source` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/RenkoSource">RenkoSource</a></code> | `RenkoSource.Close` | Source used to calculate bricks (Close / OHLC). |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> — A ticker id string usable with `request.security`.

---

### standard {#standard}

```navi
ticker.standard(ticker_id: series String): series String
```

建立用於請求標準圖表數據的代碼識別符，不受非標準圖表類型修飾符（Heikin Ashi、Renko 等）的影響。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `ticker_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | The base ticker id to modify (e.g. `syminfo.tickerid`). |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> — A ticker id string usable with `request.security`.
