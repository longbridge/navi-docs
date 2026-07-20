---
title: "symbol_info"
---

# symbol_info

## Properties

### base_currency {#base_currency}

**Type:** <code>simple&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

Returns base currency of the symbol.

For example, in the pair `EURUSD`, the base currency is `EUR`, in the pair `BTCUSDT`, the base currency is `BTC`.

---

### country {#country}

**Type:** <code>simple&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

Returns the two-letter code of the country where the symbol is traded, in the [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.

---

### currency {#currency}

**Type:** <code>simple&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

Returns the currency of the symbol's prices.

---

### current_contract {#current_contract}

**Type:** <code>simple&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

Returns the ticker identifier of the underlying contract.

---

### description {#description}

**Type:** <code>simple&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

Returns the description of the symbol.

---

### employees {#employees}

**Type:** <code>simple&nbsp;int</code>

Returns the number of employees in the company (for stocks).

---

### expiration_date {#expiration_date}

**Type:** <code>simple&nbsp;int</code>

Returns the expiration date of the symbol as UNIX timestamp in milliseconds.

---

### industry {#industry}

**Type:** <code>simple&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

Returns the industry of the company (for stocks).

---

### isin {#isin}

**Type:** <code>simple&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

Returns the International Securities Identification Number (ISIN) of the symbol.

---

### main_tickerid {#main_tickerid}

**Type:** <code>simple&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

Returns the full identifier of the chart's primary symbol.

This value keeps referring to the outer chart symbol even while code is executing inside a `request.*()` context.

---

### min_contract {#min_contract}

**Type:** <code>simple&nbsp;float</code>

Returns the minimum contract size for the symbol.

---

### min_move {#min_move}

**Type:** <code>simple&nbsp;float</code>

Returns the minimum price movement (tick size) for the symbol.

---

### min_tick {#min_tick}

**Type:** <code>simple&nbsp;float</code>

Returns the minimum price fluctuation (tick value) for the symbol.

---

### point_value {#point_value}

**Type:** <code>simple&nbsp;float</code>

Returns the point value for the symbol.

---

### prefix {#prop-prefix}

**Type:** <code>simple&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

Returns the prefix of the symbol's ticker identifier.

---

### price_scale {#price_scale}

**Type:** <code>simple&nbsp;int</code>

Returns the price scale for the symbol.

---

### recommendations_buy {#recommendations_buy}

**Type:** <code>simple&nbsp;int</code>

Returns the number of 'buy' recommendations for the symbol.

---

### recommendations_buy_strong {#recommendations_buy_strong}

**Type:** <code>simple&nbsp;int</code>

Returns the number of 'strong buy' recommendations for the symbol.

---

### recommendations_date {#recommendations_date}

**Type:** <code>simple&nbsp;int</code>

Returns the date of the latest recommendations update as UNIX timestamp in milliseconds.

---

### recommendations_hold {#recommendations_hold}

**Type:** <code>simple&nbsp;int</code>

Returns the number of 'hold' recommendations for the symbol.

---

### recommendations_sell {#recommendations_sell}

**Type:** <code>simple&nbsp;int</code>

Returns the number of 'sell' recommendations for the symbol.

---

### recommendations_sell_strong {#recommendations_sell_strong}

**Type:** <code>simple&nbsp;int</code>

Returns the number of 'strong sell' recommendations for the symbol.

---

### recommendations_total {#recommendations_total}

**Type:** <code>simple&nbsp;int</code>

Returns the total number of recommendations for the symbol.

---

### root {#root}

**Type:** <code>simple&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

Returns the root symbol of the symbol's ticker identifier.

---

### sector {#sector}

**Type:** <code>simple&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

Returns the sector of the company (for stocks).

---

### session {#session}

**Type:** <code>simple&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Session">Session</a></code>

Returns the session type of the chart main series (`Session.Regular`, `Session.Extended`, or `Session.Overnight`).

---

### shareholders {#shareholders}

**Type:** <code>simple&nbsp;int</code>

Returns the number of shareholders the company has (for stocks).

---

### shares_outstanding_float {#shares_outstanding_float}

**Type:** <code>simple&nbsp;float</code>

Returns the total number of shares outstanding a company has available, excluding any of its restricted shares (for stocks).

---

### shares_outstanding_total {#shares_outstanding_total}

**Type:** <code>simple&nbsp;float</code>

Returns the total number of shares outstanding a company has available, including restricted shares held by insiders, major shareholders, and employees (for stocks).

---

### target_price_average {#target_price_average}

**Type:** <code>simple&nbsp;float</code>

Returns the latest average yearly price target for the symbol predicted by

---

### target_price_date {#target_price_date}

**Type:** <code>simple&nbsp;int</code>

Returns the date of the target price as UNIX timestamp in milliseconds (for stocks).

---

### target_price_estimates {#target_price_estimates}

**Type:** <code>simple&nbsp;int</code>

Returns the latest total number of price target predictions for the current symbol.

---

### target_price_high {#target_price_high}

**Type:** <code>simple&nbsp;float</code>

Returns the last highest yearly price target for the symbol predicted by analysts.

---

### target_price_low {#target_price_low}

**Type:** <code>simple&nbsp;float</code>

Returns the last lowest yearly price target for the symbol predicted by analysts.

---

### target_price_median {#target_price_median}

**Type:** <code>simple&nbsp;float</code>

Returns the median yearly price target for the symbol predicted by analysts.

---

### ticker {#prop-ticker}

**Type:** <code>simple&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

Returns the symbol name without exchange prefix,

---

### tickerid {#tickerid}

**Type:** <code>simple&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

Returns the full ticker identifier of the symbol.

---

### timezone {#timezone}

**Type:** <code>simple&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

Returns the timezone of the exchange of the chart main series.

---

### type {#type}

**Type:** <code>simple&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

Returns the type of the symbol.

The values are `stock`, `fund`, `dr`, `right`, `bond`, `warrant`, `structured`, `index`, `forex`, `futures`, `spread`, `economic`, `fundamental`, `crypto`, `spot`, `swap`, `option`, `commodity`.

---

### volumetype {#volumetype}

**Type:** <code>simple&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

Returns the volume type of the symbol.

The values are `base`, `quote`, `tick`.

## Functions

### prefix {#fn-prefix}

```navi
symbol_info.prefix(symbol: String): String
```

Returns the prefix of the symbol.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `symbol` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The symbol ticker String to get the prefix from. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

---

### ticker {#fn-ticker}

```navi
symbol_info.ticker(symbol: String): String
```

Returns symbol name without exchange prefix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `symbol` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The symbol ticker String to get the name from. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>
