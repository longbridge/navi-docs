---
title: "prelude"
---

<script setup>
import { ref } from 'vue'
const _s0 = ref(0)
const _s1 = ref(0)
const _s2 = ref(0)
const _s3 = ref(0)
const _s4 = ref(0)
const _s5 = ref(0)
const _s6 = ref(0)
const _s7 = ref(0)
const _s8 = ref(0)
const _s9 = ref(0)
const _s10 = ref(0)
</script>

# prelude

::: tip
The prelude is loaded automatically into every script. Its types and functions are referenced directly by name — do **not** use a namespace prefix (e.g. write `close`, not `prelude.close`).
:::

## Types

| Name | Description |
| --- | --- |
| [`AlertFreq`](/api/stdlib/prelude/AlertFreq) | Alert frequency constant for <a class="stdlib-ref" data-key="prelude::alert" href="/api/stdlib/prelude/#alert">alert</a>. |
| [`Array<T>`](/api/stdlib/prelude/Array) | An ordered, indexable collection of elements of type `T`. |
| [`BarmergeGaps`](/api/stdlib/prelude/BarmergeGaps) | Gap mode for `request.*()` functions. |
| [`BarmergeLookahead`](/api/stdlib/prelude/BarmergeLookahead) | Lookahead mode for `request.*()` functions. |
| [`Box`](/api/stdlib/prelude/Box) | Handle for a box drawing. |
| [`CommissionType`](/api/stdlib/prelude/CommissionType) | Commission calculation mode for <a class="stdlib-ref" data-key="prelude::strategy" href="/api/stdlib/prelude/#strategy">strategy</a>. |
| [`Currency`](/api/stdlib/prelude/Currency) | Currency code (ISO 4217). |
| [`DayOfWeek`](/api/stdlib/prelude/DayOfWeek) | Day of the week constant. |
| [`DefaultQtyType`](/api/stdlib/prelude/DefaultQtyType) | Default quantity mode for <a class="stdlib-ref" data-key="prelude::strategy" href="/api/stdlib/prelude/#strategy">strategy</a>. |
| [`Direction`](/api/stdlib/prelude/Direction) | Direction for strategy orders. |
| [`DividendsField`](/api/stdlib/prelude/DividendsField) | Field selector for <a class="stdlib-ref" data-key="request::dividends" href="/api/stdlib/request/#dividends">request.dividends</a>. |
| [`EarningsField`](/api/stdlib/prelude/EarningsField) | Field selector for <a class="stdlib-ref" data-key="request::earnings" href="/api/stdlib/request/#earnings">request.earnings</a>. |
| [`Extend`](/api/stdlib/prelude/Extend) | Line extension direction. |
| [`FontFamily`](/api/stdlib/prelude/FontFamily) | Font family for text drawing. |
| [`Format`](/api/stdlib/prelude/Format) | Number format for plots and labels. |
| [`Hline`](/api/stdlib/prelude/Hline) | Handle for a horizontal line created by <a class="stdlib-ref" data-key="prelude::hline" href="/api/stdlib/prelude/#hline">hline</a>. |
| [`HlineStyle`](/api/stdlib/prelude/HlineStyle) | Style of a horizontal line drawing. |
| [`Label`](/api/stdlib/prelude/Label) | Handle for a label drawing. |
| [`LabelStyle`](/api/stdlib/prelude/LabelStyle) | Style of a label drawing. |
| [`Line`](/api/stdlib/prelude/Line) | Handle for a line drawing. |
| [`LineStyle`](/api/stdlib/prelude/LineStyle) | Style of a line drawing. |
| [`Linefill`](/api/stdlib/prelude/Linefill) | Handle for a linefill between two lines. |
| [`Location`](/api/stdlib/prelude/Location) | Vertical location for <a class="stdlib-ref" data-key="prelude::plot_shape" href="/api/stdlib/prelude/#plot_shape">plot_shape</a> and <a class="stdlib-ref" data-key="prelude::plot_char" href="/api/stdlib/prelude/#plot_char">plot_char</a>. |
| [`Map<K, V>`](/api/stdlib/prelude/Map) | A key-value store mapping keys of type `K` to values of type `V`. |
| [`Matrix<T>`](/api/stdlib/prelude/Matrix) | A two-dimensional table of elements of type `T`, stored in row-major order. |
| [`OcaType`](/api/stdlib/prelude/OcaType) | OCA (One-Cancels-All) behavior for strategy orders. |
| [`Plot`](/api/stdlib/prelude/Plot) | Handle for a plot created by <a class="stdlib-ref" data-key="prelude::plot" href="/api/stdlib/prelude/#plot">plot</a>. |
| [`PlotDisplay`](/api/stdlib/prelude/PlotDisplay) | Display options for plots (e.g. |
| [`PlotSimpleDisplay`](/api/stdlib/prelude/PlotSimpleDisplay) | Controls which price scale and chart the plot is displayed on. |
| [`PlotStyle`](/api/stdlib/prelude/PlotStyle) | Style of a plot series. |
| [`Polyline`](/api/stdlib/prelude/Polyline) | Handle for a polyline drawing. |
| [`Position`](/api/stdlib/prelude/Position) | Table and label position on the chart pane. |
| [`ScaleType`](/api/stdlib/prelude/ScaleType) | Price scale attachment mode for <a class="stdlib-ref" data-key="prelude::indicator" href="/api/stdlib/prelude/#indicator">indicator</a> and <a class="stdlib-ref" data-key="prelude::strategy" href="/api/stdlib/prelude/#strategy">strategy</a>. |
| [`Session`](/api/stdlib/prelude/Session) | Trading session type. |
| [`Shape`](/api/stdlib/prelude/Shape) | Shape drawn by <a class="stdlib-ref" data-key="prelude::plot_shape" href="/api/stdlib/prelude/#plot_shape">plot_shape</a>. |
| [`Size`](/api/stdlib/prelude/Size) | Size constant for drawings and labels. |
| [`SortOrder`](/api/stdlib/prelude/SortOrder) | Sort order for array and matrix operations. |
| [`SplitsField`](/api/stdlib/prelude/SplitsField) | Field selector for <a class="stdlib-ref" data-key="request::splits" href="/api/stdlib/request/#splits">request.splits</a>. |
| [`Table`](/api/stdlib/prelude/Table) | Handle for a table drawing. |
| [`TextFormat`](/api/stdlib/prelude/TextFormat) | Text formatting flags (bold, italic). |
| [`TextHAlign`](/api/stdlib/prelude/TextHAlign) | Horizontal text alignment. |
| [`TextVAlign`](/api/stdlib/prelude/TextVAlign) | Vertical text alignment. |
| [`TextWrap`](/api/stdlib/prelude/TextWrap) | Text wrapping mode. |
| [`Xloc`](/api/stdlib/prelude/Xloc) | X-axis coordinate mode for drawings. |
| [`Yloc`](/api/stdlib/prelude/Yloc) | Y-axis coordinate mode for labels. |

## Properties

### ask {#ask}

**Type:** <code>series&nbsp;float</code>

Best ask price of the current bar.

The ask price is the lowest price at which a seller is willing to sell. Only available on `1T` (tick) timeframes; returns `na` on all other timeframes.

---

### bar_index {#bar_index}

**Type:** <code>series&nbsp;int</code>

Index of the current bar.

Numbering is zero-based, so the first (oldest) bar on the chart has index 0. The value increases by 1 for each subsequent bar. Use `bar_index[1]` to reference the previous bar's index.

---

### bid {#bid}

**Type:** <code>series&nbsp;float</code>

Best bid price of the current bar.

The bid price is the highest price a buyer is willing to pay. Only available on `1T` (tick) timeframes; returns `na` on all other timeframes.

---

### close {#close}

**Type:** <code>series&nbsp;float</code>

Closing price of the current bar.

On historical bars, this is the last traded price when the bar closed. On real-time bars, this is the current last traded price and will change until the bar closes.

---

### day_of_month {#prop-day_of_month}

**Type:** <code>int</code>

Returns the day of month (1-31) of the current bar's opening time in the symbol's timezone.

---

### day_of_week {#prop-day_of_week}

**Type:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/DayOfWeek">DayOfWeek</a></code>

Returns the day of week of the current bar's opening time.

---

### high {#high}

**Type:** <code>series&nbsp;float</code>

Highest price reached during the current bar.

On historical bars, this is the maximum traded price. On real-time bars, this value can increase as new highs are made.

---

### hl2 {#hl2}

**Type:** <code>series&nbsp;float</code>

The midpoint of high and low prices: `(high + low) / 2`.

Also known as the median price. Useful as a simple estimate of the bar's central price.

---

### hlc3 {#hlc3}

**Type:** <code>series&nbsp;float</code>

The typical price: `(high + low + close) / 3`.

A common price proxy that weights the close equally with the high-low range. Often used in volume weighted calculations.

---

### hlcc4 {#hlcc4}

**Type:** <code>series&nbsp;float</code>

Weighted close price: `(high + low + close + close) / 4`.

Places extra weight on the closing price, giving it 50% of the total weight.

---

### hour {#prop-hour}

**Type:** <code>int</code>

Returns the hour (0-23) of the current bar's opening time in the symbol's timezone.

---

### last_bar_index {#last_bar_index}

**Type:** <code>series&nbsp;int</code>

Index of the last (newest) bar on the chart.

Combined with `bar_index`, this can be used to determine the distance from the current bar to the chart's end, e.g., `last_bar_index - bar_index` gives bars remaining.

---

### last_bar_time {#last_bar_time}

**Type:** <code>series&nbsp;int</code>

Timestamp of the last bar on the chart, in UNIX format (milliseconds since 1970-01-01 00:00:00 UTC).

Useful for determining the chart's time range or for time-based calculations relative to the chart end.

---

### low {#low}

**Type:** <code>series&nbsp;float</code>

Lowest price reached during the current bar.

On historical bars, this is the minimum traded price. On real-time bars, this value can decrease as new lows are made.

---

### minute {#prop-minute}

**Type:** <code>int</code>

Returns the minute (0-59) of the current bar's opening time in the symbol's timezone.

---

### month {#prop-month}

**Type:** <code>int</code>

Returns the month (1-12) of the current bar's opening time in the symbol's timezone.

---

### ohlc4 {#ohlc4}

**Type:** <code>series&nbsp;float</code>

Average price: `(open + high + low + close) / 4`.

The arithmetic mean of all four OHLC prices, representing the bar's overall price activity.

---

### open {#open}

**Type:** <code>series&nbsp;float</code>

Opening price of the current bar.

This is the first traded price when the bar opened. On real-time bars, this value is fixed once the bar opens.

---

### second {#prop-second}

**Type:** <code>int</code>

Returns the second (0-59) of the current bar's opening time in the symbol's timezone.

---

### time {#prop-time}

**Type:** <code>series&nbsp;int</code>

UNIX timestamp for the bar's left edge.

The value is expressed in milliseconds from the Unix epoch and does not drift while the current realtime bar is still forming.

---

### time_close {#prop-time_close}

**Type:** <code>series&nbsp;int</code>

UNIX timestamp for the bar's right edge.

On time-based charts this is the scheduled close of the active bar.

---

### time_now {#time_now}

**Type:** <code>series&nbsp;int</code>

Current real-world time in UNIX format (milliseconds since 1970-01-01 00:00:00 UTC).

Unlike `time`, which returns the bar's time, `timenow` returns the actual current time and updates continuously on real-time bars.

---

### time_tradingday {#time_tradingday}

**Type:** <code>series&nbsp;int</code>

Returns a UTC-midnight marker for the exchange session the current bar belongs to.

The result stays identical for all bars that share the same trading session, which is handy when sessions bleed across calendar boundaries.

---

### volume {#volume}

**Type:** <code>series&nbsp;float</code>

Trading volume of the current bar.

Represents the total number of shares or contracts traded. May be `na` if volume data is unavailable for the symbol.

---

### week_of_year {#prop-week_of_year}

**Type:** <code>int</code>

Returns the week of year (1-53) of the current bar's opening time in the symbol's timezone.

---

### year {#prop-year}

**Type:** <code>int</code>

Returns the year of the current bar's opening time in the symbol's timezone.

## Functions

### alert {#alert}

```navi
alert(message: series string, freq: input AlertFreq = AlertFreq.OncePerBar)
```

Creates an alert with the given message and frequency.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `message` | <code>series&nbsp;string</code> |  |  |
| `freq` | <code>input&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/AlertFreq">AlertFreq</a></code> | `AlertFreq.OncePerBar` |  |

---

### alert_condition {#alert_condition}

```navi
alert_condition(
    condition: series bool,
    title: const string,
    message: const string
  )
```

Creates an alert condition that can be used to trigger alerts based on a boolean condition.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `condition` | <code>series&nbsp;bool</code> |  |  |
| `title` | <code>const&nbsp;string</code> |  |  |
| `message` | <code>const&nbsp;string</code> |  |  |

---

### bar_color {#bar_color}

```navi
bar_color(
    color: series color,
    offset: simple int = 0,
    editable: input bool = true,
    show_last: input int = na,
    title: const string = na,
    display: input PlotSimpleDisplay
  )
```

Sets the color of price bars on the chart.

Each bar can have its own color, allowing for dynamic coloring based on indicator conditions.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | <code>series&nbsp;color</code> |  | The color to apply to the bar. Use `na` to keep the default color. |
| `offset` | <code>simple&nbsp;int</code> | `0` | Shifts the coloring left (negative) or right (positive) by the specified number of bars. |
| `editable` | <code>input&nbsp;bool</code> | `true` | If true, the setting can be edited in the style dialog. |
| `show_last` | <code>input&nbsp;int</code> | `na` | If set, only colors the last N bars. |
| `title` | <code>const&nbsp;string</code> | `na` | Title shown in the style dialog. |
| `display` | <code>input&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotSimpleDisplay">PlotSimpleDisplay</a></code> |  | Controls where the coloring is visible. |

---

### bg_color {#bg_color}

```navi
bg_color(
    color: series color,
    offset: simple int = 0,
    editable: input bool = true,
    show_last: input int = na,
    title: const string = na,
    display: input PlotSimpleDisplay = display.ALL,
    force_overlay: const bool = na
  )
```

Fills the background of chart bars with a specified color.

Useful for highlighting specific conditions or time periods on the chart.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | <code>series&nbsp;color</code> |  | The background color. Use `na` for transparent. |
| `offset` | <code>simple&nbsp;int</code> | `0` | Shifts the background coloring left (negative) or right (positive) by the specified number of bars. |
| `editable` | <code>input&nbsp;bool</code> | `true` | If true, the setting can be edited in the style dialog. |
| `show_last` | <code>input&nbsp;int</code> | `na` | If set, only fills the last N bars. |
| `title` | <code>const&nbsp;string</code> | `na` | Title shown in the style dialog. |
| `display` | <code>input&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotSimpleDisplay">PlotSimpleDisplay</a></code> | `display.ALL` | Controls where the background is visible. |
| `force_overlay` | <code>const&nbsp;bool</code> | `na` | If true, forces display on the main chart pane. |

---

### bool {#bool}

<OverloadTabs v-model="_s0" :labels='["<span style=\"color:#005CC5;--shiki-dark:#79B8FF\">bool</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(x</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>","<span style=\"color:#005CC5;--shiki-dark:#79B8FF\">bool</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(x</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>","<span style=\"color:#005CC5;--shiki-dark:#79B8FF\">bool</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(x</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>","<span style=\"color:#005CC5;--shiki-dark:#79B8FF\">bool</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(x</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> T)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>"]' />

<div v-show="_s0 === 0">

Converts the `x` value to a `bool` value.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | <code>int</code> |  |  |

**Returns:** <code>bool</code> — `false` if x is `na`, `false`, or an `int`/`float` value equal to `0`. `true` for all other values.

</div>

<div v-show="_s0 === 1">

Converts a float to bool; returns false if na or zero, true otherwise.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | <code>float</code> |  |  |

**Returns:** <code>bool</code>

</div>

<div v-show="_s0 === 2">

Converts a bool to bool; returns false if na, otherwise the value.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | <code>bool</code> |  |  |

**Returns:** <code>bool</code>

</div>

<div v-show="_s0 === 3">

Converts a value of any type to bool; returns false if na, true otherwise.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | <code>T</code> |  |  |

**Returns:** <code>bool</code>

</div>

---

### box {#box}

```navi
box(x: Box): Box
```

Casts na to box type.

Useful for initializing box variables that will be assigned later.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Box">Box</a></code> |  |  |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Box">Box</a></code>

---

### color {#color}

```navi
color(x: color): color
```

Casts na to color

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | <code>color</code> |  |  |

**Returns:** <code>color</code>

---

### day_of_month {#fn-day_of_month}

```navi
day_of_month(timestamp: int, timezone: string = syminfo.timezone): int
```

Extracts the day of month (1-31) from a UNIX timestamp in the specified timezone.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `timestamp` | <code>int</code> |  | The UNIX timestamp in milliseconds. |
| `timezone` | <code>string</code> | `syminfo.timezone` | The timezone for interpretation. Defaults to symbol's timezone. |

**Returns:** <code>int</code>

---

### day_of_week {#fn-day_of_week}

```navi
day_of_week(timestamp: int, timezone: string = syminfo.timezone): DayOfWeek
```

Extracts the day of week from a UNIX timestamp in the specified timezone.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `timestamp` | <code>int</code> |  | The UNIX timestamp in milliseconds. |
| `timezone` | <code>string</code> | `syminfo.timezone` | The timezone for interpretation. Defaults to symbol's timezone. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/DayOfWeek">DayOfWeek</a></code> — 1 (Sunday) through 7 (Saturday).

---

### fill {#fill}

<OverloadTabs v-model="_s1" :labels='["<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">fill</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(hline1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Hline, hline2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Hline, </span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> color</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">.BLUE, title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, editable</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> true</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, fill_gaps</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> false</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, display</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotSimpleDisplay </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> display.ALL)</span>","<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">fill</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(plot1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Plot, plot2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Plot, </span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> color</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">.BLUE, title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, editable</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> true</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, show_last</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, fill_gaps</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> false</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, display</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotSimpleDisplay </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> display.ALL)</span>","<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">fill</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(plot1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Plot, plot2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Plot, top_value</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, bottom_value</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, top_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> color</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">.BLUE, bottom_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> #3a3c42</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, display</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotSimpleDisplay </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> display.ALL, fill_gaps</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> false</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, editable</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> true</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span>"]' />

<div v-show="_s1 === 0">

Fills the area between two horizontal lines with a solid color.

Useful for creating visual zones (e.g., overbought/oversold regions).

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `hline1` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Hline">Hline</a></code> |  | The first horizontal line handle (from <a class="stdlib-ref" data-key="prelude::hline" href="/api/stdlib/prelude/#hline">hline</a>). |
| `hline2` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Hline">Hline</a></code> |  | The second horizontal line handle (from <a class="stdlib-ref" data-key="prelude::hline" href="/api/stdlib/prelude/#hline">hline</a>). |
| `color` | <code>series&nbsp;color</code> | `color.BLUE` | The fill color. |
| `title` | <code>const&nbsp;string</code> | `na` | Title shown in the style dialog. |
| `editable` | <code>input&nbsp;bool</code> | `true` | If true, the fill can be edited in the style dialog. |
| `fill_gaps` | <code>const&nbsp;bool</code> | `false` | If true, fills gaps in the data. |
| `display` | <code>input&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotSimpleDisplay">PlotSimpleDisplay</a></code> | `display.ALL` | Controls where the fill is visible. |

</div>

<div v-show="_s1 === 1">

Fills the area between two plots with a solid color.

Useful for visualizing the difference or spread between two series.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `plot1` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Plot">Plot</a></code> |  | The first plot handle (from <a class="stdlib-ref" data-key="prelude::plot" href="/api/stdlib/prelude/#plot">plot</a>). |
| `plot2` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Plot">Plot</a></code> |  | The second plot handle (from <a class="stdlib-ref" data-key="prelude::plot" href="/api/stdlib/prelude/#plot">plot</a>). |
| `color` | <code>series&nbsp;color</code> | `color.BLUE` | The fill color. |
| `title` | <code>const&nbsp;string</code> | `na` | Title shown in the style dialog. |
| `editable` | <code>input&nbsp;bool</code> | `true` | If true, the fill can be edited in the style dialog. |
| `show_last` | <code>input&nbsp;int</code> | `na` | If set, only fills the last N bars. |
| `fill_gaps` | <code>const&nbsp;bool</code> | `false` | If true, fills gaps in the data. |
| `display` | <code>input&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotSimpleDisplay">PlotSimpleDisplay</a></code> | `display.ALL` | Controls where the fill is visible. |

</div>

<div v-show="_s1 === 2">

Fills the area between two plots with a vertical gradient.

The gradient transitions from `top_color` at `top_value` to `bottom_color` at `bottom_value`, creating a smooth color transition based on price levels.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `plot1` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Plot">Plot</a></code> |  | The first plot handle (from <a class="stdlib-ref" data-key="prelude::plot" href="/api/stdlib/prelude/#plot">plot</a>). |
| `plot2` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Plot">Plot</a></code> |  | The second plot handle (from <a class="stdlib-ref" data-key="prelude::plot" href="/api/stdlib/prelude/#plot">plot</a>). |
| `top_value` | <code>series&nbsp;float</code> |  | The price level where the top color is applied. |
| `bottom_value` | <code>series&nbsp;float</code> |  | The price level where the bottom color is applied. |
| `top_color` | <code>series&nbsp;color</code> | `color.BLUE` | The color at the top of the gradient. |
| `bottom_color` | <code>series&nbsp;color</code> | `#3a3c42` | The color at the bottom of the gradient. |
| `title` | <code>const&nbsp;string</code> | `na` | Title shown in the style dialog. |
| `display` | <code>input&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotSimpleDisplay">PlotSimpleDisplay</a></code> | `display.ALL` | Controls where the fill is visible. |
| `fill_gaps` | <code>const&nbsp;bool</code> | `false` | If true, fills gaps in the data. |
| `editable` | <code>input&nbsp;bool</code> | `true` | If true, the fill can be edited in the style dialog. |

</div>

---

### fixnan {#fixnan}

```navi
fixnan(value: series T): series T
```

Replaces `na` values with the last non-na value in the series.

Carries forward the most recent valid value, effectively "filling" gaps in the data. If no valid value has been seen yet, returns `na`. Useful for maintaining continuity in series that have occasional missing values.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | <code>series&nbsp;T</code> |  | The series value to process. |

**Returns:** <code>series&nbsp;T</code> — The current value if it is not `na`, otherwise the most recent non-na value, or `na` if no valid value has been seen yet.

---

### float {#float}

<OverloadTabs v-model="_s2" :labels='["<span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(x</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>","<span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(x</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s2 === 0">

Casts na to float

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | <code>float</code> |  |  |

**Returns:** <code>float</code>

</div>

<div v-show="_s2 === 1">

Converts an int to float.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | <code>int</code> |  |  |

**Returns:** <code>float</code>

</div>

---

### hline {#hline}

```navi
hline(
    price: input float,
    title: const string = na,
    color: input color = color.BLUE,
    linestyle: input HlineStyle = HlineStyle.Dashed,
    linewidth: input int = 1,
    editable: input bool = true,
    display: input PlotSimpleDisplay = display.ALL
  ): Hline
```

Draws a horizontal line at a fixed price level across the entire chart.

Unlike <a class="stdlib-ref" data-key="prelude::plot" href="/api/stdlib/prelude/#plot">plot</a>, the price must be a constant or input value, not a series.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `price` | <code>input&nbsp;float</code> |  | The price level where the line is drawn. |
| `title` | <code>const&nbsp;string</code> | `na` | Title shown in the style dialog. |
| `color` | <code>input&nbsp;color</code> | `color.BLUE` | Line color. |
| `linestyle` | <code>input&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/HlineStyle">HlineStyle</a></code> | `HlineStyle.Dashed` | Line style: <a class="stdlib-ref" data-key="prelude::HlineStyle" href="/api/stdlib/prelude/HlineStyle">HlineStyle.Solid</a>, <a class="stdlib-ref" data-key="prelude::HlineStyle" href="/api/stdlib/prelude/HlineStyle">HlineStyle.Dashed</a>, <a class="stdlib-ref" data-key="prelude::HlineStyle" href="/api/stdlib/prelude/HlineStyle">HlineStyle.Dotted</a>. |
| `linewidth` | <code>input&nbsp;int</code> | `1` | Width of the line in pixels (1-4). |
| `editable` | <code>input&nbsp;bool</code> | `true` | If true, the line can be edited in the style dialog. |
| `display` | <code>input&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotSimpleDisplay">PlotSimpleDisplay</a></code> | `display.ALL` | Controls where the line is visible. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Hline">Hline</a></code> — An hline handle that can be used with <a class="stdlib-ref" data-key="prelude::fill" href="/api/stdlib/prelude/Matrix#fill">fill</a>.

---

### hour {#fn-hour}

```navi
hour(timestamp: int, timezone: string = syminfo.timezone): int
```

Extracts the hour (0-23) from a UNIX timestamp in the specified timezone.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `timestamp` | <code>int</code> |  | The UNIX timestamp in milliseconds. |
| `timezone` | <code>string</code> | `syminfo.timezone` | The timezone for interpretation. Defaults to symbol's timezone. |

**Returns:** <code>int</code>

---

### indicator {#indicator}

```navi
indicator(
    title: const string,
    shorttitle: const string = na,
    overlay: const bool = false,
    format: const Format = Format.Inherit,
    precision: const int = na,
    scale: const ScaleType = na,
    max_bars_back: const int = na,
    timeframe: const string = na,
    timeframe_gaps: const bool = true,
    explicit_plot_zorder: const bool = false,
    max_lines_count: const int = 50,
    max_labels_count: const int = 50,
    max_boxes_count: const int = 50,
    calc_bars_count: const int = na,
    max_polylines_count: const int = 50,
    dynamic_requests: const bool = true,
    behind_chart: const bool = true
  )
```

Designates the script as an indicator and sets indicator-related properties.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | <code>const&nbsp;string</code> |  | The title of the script. It is displayed on the chart when no `shorttitle` argument is used, and becomes the publication's default title when publishing the script. |
| `shorttitle` | <code>const&nbsp;string</code> | `na` | The script's display name on charts. If specified, it will replace the `title` argument in most chart-related windows. |
| `overlay` | <code>const&nbsp;bool</code> | `false` | If `true`, the script's visuals appear on the main chart pane if the user adds it to the chart directly, or in another script's pane if the user applies it to that script. If `false`, the script's visuals appear in a separate pane. |
| `format` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Format">Format</a></code> | `Format.Inherit` | Specifies the formatting of the script's displayed values. Possible values: <a class="stdlib-ref" data-key="prelude::Format" href="/api/stdlib/prelude/Format">Format.Inherit</a>, <a class="stdlib-ref" data-key="prelude::Format" href="/api/stdlib/prelude/Format">Format.Price</a>, <a class="stdlib-ref" data-key="prelude::Format" href="/api/stdlib/prelude/Format">Format.Volume</a>, <a class="stdlib-ref" data-key="prelude::Format" href="/api/stdlib/prelude/Format">Format.Percent</a>. Optional. |
| `precision` | <code>const&nbsp;int</code> | `na` | Specifies the number of digits after the floating point of the script's displayed values. Must be a non-negative integer no greater than 16. If `format` is set to <a class="stdlib-ref" data-key="prelude::Format" href="/api/stdlib/prelude/Format">Format.Inherit</a> and `precision` is specified, the format will instead be set to <a class="stdlib-ref" data-key="prelude::Format" href="/api/stdlib/prelude/Format">Format.Price</a>. When the function's `format` parameter uses <a class="stdlib-ref" data-key="prelude::Format" href="/api/stdlib/prelude/Format">Format.Volume</a>, the `precision` parameter will not affect the result, as the decimal precision rules defined by <a class="stdlib-ref" data-key="prelude::Format" href="/api/stdlib/prelude/Format">Format.Volume</a> supersede other precision settings. Optional. The default is inherited from the precision of the chart's symbol. |
| `scale` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/ScaleType">ScaleType</a></code> | `na` | The price scale used. Possible values: <a class="stdlib-ref" data-key="prelude::ScaleType" href="/api/stdlib/prelude/ScaleType">ScaleType.Right</a>, <a class="stdlib-ref" data-key="prelude::ScaleType" href="/api/stdlib/prelude/ScaleType">ScaleType.Left</a>, <a class="stdlib-ref" data-key="prelude::ScaleType" href="/api/stdlib/prelude/ScaleType">ScaleType.None</a>. The <a class="stdlib-ref" data-key="prelude::ScaleType" href="/api/stdlib/prelude/ScaleType">ScaleType.None</a> value can only be applied in combination with `overlay = true`. Optional. By default, the script uses the same scale as the chart. Uses the <a class="stdlib-ref" data-key="prelude::ScaleType" href="/api/stdlib/prelude/ScaleType">ScaleType</a> type. |
| `max_bars_back` | <code>const&nbsp;int</code> | `na` | The length of the historical buffer the script keeps for every variable and function, which determines how many past values can be referenced using the `[]` history-referencing operator. |
| `timeframe` | <code>const&nbsp;string</code> | `na` | Adds multi-timeframe functionality to simple scripts. |
| `timeframe_gaps` | <code>const&nbsp;bool</code> | `true` | Specifies how the indicator's values are displayed on chart bars when the timeframe is higher than the chart's. If `true`, a value only appears on a chart bar when the higher `timeframe` value becomes available, otherwise `na` is returned (thus a "gap" occurs). With `false`, what would otherwise be gaps are filled with the latest known value returned, avoiding `na` values. Optional. The default is `true`. |
| `explicit_plot_zorder` | <code>const&nbsp;bool</code> | `false` | Specifies the order in which the script's plots, fills, and hlines are rendered. If `true`, plots are drawn in the order in which they appear in the script's code, each newer plot being drawn above the previous ones. This only applies to `plot*()` functions, <a class="stdlib-ref" data-key="prelude::fill" href="/api/stdlib/prelude/Matrix#fill">fill</a>, and <a class="stdlib-ref" data-key="prelude::hline" href="/api/stdlib/prelude/#hline">hline</a>. |
| `max_lines_count` | <code>const&nbsp;int</code> | `50` | The number of last <a class="stdlib-ref" data-key="prelude::Line" href="/api/stdlib/prelude/Line">Line</a> drawings displayed. Possible values: 1-500. The count is approximate; more drawings than the specified count may be displayed. |
| `max_labels_count` | <code>const&nbsp;int</code> | `50` | The number of last <a class="stdlib-ref" data-key="prelude::Label" href="/api/stdlib/prelude/Label">Label</a> drawings displayed. Possible values: 1-500. The count is approximate; more drawings than the specified count may be displayed. |
| `max_boxes_count` | <code>const&nbsp;int</code> | `50` | The number of last <a class="stdlib-ref" data-key="prelude::Box" href="/api/stdlib/prelude/Box">Box</a> drawings displayed. Possible values: 1-500. The count is approximate; more drawings than the specified count may be displayed. |
| `calc_bars_count` | <code>const&nbsp;int</code> | `na` | Limits the initial calculation of a script to the last number of bars specified. The default is `na`, in which case the script executes on all available bars. |
| `max_polylines_count` | <code>const&nbsp;int</code> | `50` | The number of last <a class="stdlib-ref" data-key="prelude::Polyline" href="/api/stdlib/prelude/Polyline">Polyline</a> drawings displayed. Possible values: 1-100. The count is approximate; more drawings than the specified count may be displayed. |
| `dynamic_requests` | <code>const&nbsp;bool</code> | `true` | Specifies whether the script can dynamically call functions from the `request.*()` namespace. Dynamic `request.*()` calls are allowed within the local scopes of conditional structures (e.g., `if`), loops (e.g., `for`), and exported functions. Additionally, such calls allow "series" arguments for many of their parameters. |
| `behind_chart` | <code>const&nbsp;bool</code> | `true` | Controls whether all plots and drawings appear behind the chart display (if `true`) or in front of it (if `false`). This parameter only takes effect when the `overlay` parameter is `true`. |

**Examples**

```navi
// RSI indicator in a separate pane
indicator("My RSI", shorttitle: "RSI", overlay: false);
plot(ta.rsi(close, 14), title: "RSI");
```

```navi
// Overlay indicator on the price chart
indicator("EMA Cross", overlay: true);
plot(ta.ema(close, 9),  color: color.GREEN);
plot(ta.ema(close, 21), color: color.RED);
```

---

### input {#input}

<OverloadTabs v-model="_s3" :labels='["<span style=\"color:#D73A49;--shiki-dark:#F97583\">input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(defval</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, tooltip</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, inline</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, group</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, display</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> display.ALL, active</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> true</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#D73A49;--shiki-dark:#F97583\">input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(defval</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, tooltip</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, inline</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, group</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, display</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> display.ALL, active</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> true</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>","<span style=\"color:#D73A49;--shiki-dark:#F97583\">input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(defval</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, tooltip</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, inline</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, group</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, display</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> display.ALL, active</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> true</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>","<span style=\"color:#D73A49;--shiki-dark:#F97583\">input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(defval</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> color</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, tooltip</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, inline</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, group</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, display</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> display.ALL, active</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> true</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> color</span>","<span style=\"color:#D73A49;--shiki-dark:#F97583\">input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(defval</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, tooltip</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, inline</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, group</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, display</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> display.ALL, active</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> true</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span>","<span style=\"color:#D73A49;--shiki-dark:#F97583\">input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(defval</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> expression, title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, tooltip</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, inline</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, group</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, display</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> display.ALL, active</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> true</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s3 === 0">

Creates an input value exposed in the script settings UI.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;int</code> |  |  |
| `title` | <code>const&nbsp;string</code> | `na` |  |
| `tooltip` | <code>const&nbsp;string</code> | `na` |  |
| `inline` | <code>const&nbsp;string</code> | `na` |  |
| `group` | <code>const&nbsp;string</code> | `na` |  |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `display.ALL` |  |
| `active` | <code>input&nbsp;bool</code> | `true` |  |

**Returns:** <code>input&nbsp;int</code>

</div>

<div v-show="_s3 === 1">

Creates an input value exposed in the script settings UI.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;float</code> |  |  |
| `title` | <code>const&nbsp;string</code> | `na` |  |
| `tooltip` | <code>const&nbsp;string</code> | `na` |  |
| `inline` | <code>const&nbsp;string</code> | `na` |  |
| `group` | <code>const&nbsp;string</code> | `na` |  |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `display.ALL` |  |
| `active` | <code>input&nbsp;bool</code> | `true` |  |

**Returns:** <code>input&nbsp;float</code>

</div>

<div v-show="_s3 === 2">

Creates an input value exposed in the script settings UI.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;bool</code> |  |  |
| `title` | <code>const&nbsp;string</code> | `na` |  |
| `tooltip` | <code>const&nbsp;string</code> | `na` |  |
| `inline` | <code>const&nbsp;string</code> | `na` |  |
| `group` | <code>const&nbsp;string</code> | `na` |  |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `display.ALL` |  |
| `active` | <code>input&nbsp;bool</code> | `true` |  |

**Returns:** <code>input&nbsp;bool</code>

</div>

<div v-show="_s3 === 3">

Creates an input value exposed in the script settings UI.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;color</code> |  |  |
| `title` | <code>const&nbsp;string</code> | `na` |  |
| `tooltip` | <code>const&nbsp;string</code> | `na` |  |
| `inline` | <code>const&nbsp;string</code> | `na` |  |
| `group` | <code>const&nbsp;string</code> | `na` |  |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `display.ALL` |  |
| `active` | <code>input&nbsp;bool</code> | `true` |  |

**Returns:** <code>input&nbsp;color</code>

</div>

<div v-show="_s3 === 4">

Creates an input value exposed in the script settings UI.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;string</code> |  |  |
| `title` | <code>const&nbsp;string</code> | `na` |  |
| `tooltip` | <code>const&nbsp;string</code> | `na` |  |
| `inline` | <code>const&nbsp;string</code> | `na` |  |
| `group` | <code>const&nbsp;string</code> | `na` |  |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `display.ALL` |  |
| `active` | <code>input&nbsp;bool</code> | `true` |  |

**Returns:** <code>input&nbsp;string</code>

</div>

<div v-show="_s3 === 5">

Creates an input value exposed in the script settings UI.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;expression</code> |  |  |
| `title` | <code>const&nbsp;string</code> | `na` |  |
| `tooltip` | <code>const&nbsp;string</code> | `na` |  |
| `inline` | <code>const&nbsp;string</code> | `na` |  |
| `group` | <code>const&nbsp;string</code> | `na` |  |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `display.ALL` |  |
| `active` | <code>input&nbsp;bool</code> | `true` |  |

**Returns:** <code>input&nbsp;float</code>

</div>

---

### int {#int}

<OverloadTabs v-model="_s4" :labels='["<span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(x</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(x</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>"]' />

<div v-show="_s4 === 0">

Casts na to int

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | <code>int</code> |  |  |

**Returns:** <code>int</code>

</div>

<div v-show="_s4 === 1">

Converts a float to int (truncates toward zero via math.floor).

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | <code>float</code> |  |  |

**Returns:** <code>int</code>

</div>

---

### label {#label}

```navi
label(x: Label): Label
```

Casts na to label type.

Useful for initializing label variables that will be assigned later.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Label">Label</a></code> |  |  |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Label">Label</a></code>

---

### library {#library}

```navi
library(
    title: const string,
    overlay: const bool = false,
    dynamic_requests: const bool = true
  )
```

Declaration statement identifying a script as a library.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | <code>const&nbsp;string</code> |  | The title of the library and its identifier. It cannot contain spaces, special characters or begin with a digit. It is used as the publication's default title, and to uniquely identify the library in the `import` statement, when another script uses it. It is also used as the script's name on the chart. |
| `overlay` | <code>const&nbsp;bool</code> | `false` | If `true`, any visuals produced by the library's exported functions are drawn on the main chart pane. If `false`, they appear in a separate pane. Optional. The default is `false`. |
| `dynamic_requests` | <code>const&nbsp;bool</code> | `true` | Specifies whether the library's exported functions may contain dynamic `request.*()` calls — i.e., calls placed inside conditional structures or loops, or calls that accept "series" arguments for parameters that normally require a simpler qualifier. Optional. The default is `true`. |

---

### line {#line}

```navi
line(x: Line): Line
```

Casts na to line type.

Useful for initializing line variables that will be assigned later.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Line">Line</a></code> |  |  |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Line">Line</a></code>

---

### linefill {#linefill}

```navi
linefill(x: Linefill): Linefill
```

Casts na to linefill type.

Useful for initializing linefill variables that will be assigned later.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Linefill">Linefill</a></code> |  |  |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Linefill">Linefill</a></code>

---

### max_bars_back {#max_bars_back}

```navi
max_bars_back(variable: variableref, num: const int)
```

Sets the maximum number of historical bars available for a specific variable or built-in series via the `[]` history-referencing operator. If the actual number of bars exceeds the maximum, only the most recent bars will be available.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `variable` | <code>variableref</code> |  |  |
| `num` | <code>const&nbsp;int</code> |  | Maximum number of historical bars. |

---

### minute {#fn-minute}

```navi
minute(timestamp: int, timezone: string = syminfo.timezone): int
```

Extracts the minute (0-59) from a UNIX timestamp in the specified timezone.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `timestamp` | <code>int</code> |  | The UNIX timestamp in milliseconds. |
| `timezone` | <code>string</code> | `syminfo.timezone` | The timezone for interpretation. Defaults to symbol's timezone. |

**Returns:** <code>int</code>

---

### month {#fn-month}

```navi
month(timestamp: int, timezone: string = syminfo.timezone): int
```

Extracts the month (1-12) from a UNIX timestamp in the specified timezone.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `timestamp` | <code>int</code> |  | The UNIX timestamp in milliseconds. |
| `timezone` | <code>string</code> | `syminfo.timezone` | The timezone for interpretation. Defaults to symbol's timezone. |

**Returns:** <code>int</code>

---

### na {#na}

```navi
na(value: any): bool
```

Tests if `value` is `na` (not available).

Essential for handling gaps in data, missing values in series, or uninitialized variables.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | <code>any</code> |  | The value to test. Can be any type. |

**Returns:** <code>bool</code> — `true` if the value is undefined or missing, `false` otherwise.

---

### nz {#nz}

<OverloadTabs v-model="_s5" :labels='["<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">nz</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(source</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> T, replacement</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> T)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> T</span>","<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">nz</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(source</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, replacement</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">nz</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(source</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, replacement</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>","<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">nz</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(source</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> color</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, replacement</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> #000000</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> color</span>"]' />

<div v-show="_s5 === 0">

Replaces `na` values with a specified replacement.

If `source` is not `na`, returns `source` unchanged. If `source` is `na`, returns `replacement`. Essential for ensuring calculations don't propagate `na` values.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>T</code> |  | The value to check. |
| `replacement` | <code>T</code> |  | The value to return if `source` is `na`. |

**Returns:** <code>T</code>

</div>

<div v-show="_s5 === 1">

Replaces `na` integer values with a replacement (default 0).

Useful when you need a numeric fallback for missing integer data.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>int</code> |  | The integer value to check. |
| `replacement` | <code>int</code> | `0` | The value to return if `source` is `na`. Defaults to 0. |

**Returns:** <code>int</code>

</div>

<div v-show="_s5 === 2">

Replaces `na` float values with a replacement (default 0.0).

Useful when you need a numeric fallback for missing price or calculation data.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>float</code> |  | The float value to check. |
| `replacement` | <code>float</code> | `0` | The value to return if `source` is `na`. Defaults to 0.0. |

**Returns:** <code>float</code>

</div>

<div v-show="_s5 === 3">

Replaces `na` color values with a replacement (default black).

Useful when you need a visible fallback color for conditional coloring.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>color</code> |  | The color value to check. |
| `replacement` | <code>color</code> | `#000000` | The value to return if `source` is `na`. Defaults to #000000. |

**Returns:** <code>color</code>

</div>

---

### plot {#plot}

```navi
plot(
    series: series float,
    title: const string = na,
    color: series color = color.BLUE,
    linewidth: input int = 1,
    style: input PlotStyle = PlotStyle.Line,
    track_price: input bool = false,
    hist_base: input float = 0,
    offset: simple int = 0,
    join: input bool = false,
    editable: input bool = true,
    show_last: input int = na,
    display: input PlotDisplay = display.ALL,
    format: input Format = na,
    precision: input int = na,
    force_overlay: const bool = na,
    linestyle: input PlotStyle = PlotStyle.Line
  ): Plot
```

Plots a series of data on the chart as a visual representation.

Supports various styles including line, histogram, area, columns, and more.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `series` | <code>series&nbsp;float</code> |  | The series of values to plot. |
| `title` | <code>const&nbsp;string</code> | `na` | Title of the plot, shown in the style dialog and as a data window tooltip. |
| `color` | <code>series&nbsp;color</code> | `color.BLUE` | Color of the plotted element. |
| `linewidth` | <code>input&nbsp;int</code> | `1` | Width of the plotted line, in pixels (1-4). |
| `style` | <code>input&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotStyle">PlotStyle</a></code> | `PlotStyle.Line` | Plot style: <a class="stdlib-ref" data-key="prelude::PlotStyle" href="/api/stdlib/prelude/PlotStyle">PlotStyle.Line</a>, <a class="stdlib-ref" data-key="prelude::PlotStyle" href="/api/stdlib/prelude/PlotStyle">PlotStyle.Histogram</a>, <a class="stdlib-ref" data-key="prelude::PlotStyle" href="/api/stdlib/prelude/PlotStyle">PlotStyle.Area</a>, <a class="stdlib-ref" data-key="prelude::PlotStyle" href="/api/stdlib/prelude/PlotStyle">PlotStyle.Columns</a>, etc. |
| `track_price` | <code>input&nbsp;bool</code> | `false` | If true, a horizontal price line is shown at the last value. |
| `hist_base` | <code>input&nbsp;float</code> | `0` | The base value for histogram/columns style. Bars extend from this level to the series value. |
| `offset` | <code>simple&nbsp;int</code> | `0` | Shifts the plot left (negative) or right (positive) by the specified number of bars. |
| `join` | <code>input&nbsp;bool</code> | `false` | If true, connects gaps in the series with a line. |
| `editable` | <code>input&nbsp;bool</code> | `true` | If true, the plot style can be edited in the style dialog. |
| `show_last` | <code>input&nbsp;int</code> | `na` | If set, only the last N bars are displayed. |
| `display` | <code>input&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `display.ALL` | Controls where the plot is displayed. Use <a class="stdlib-ref" data-key="display::ALL" href="/api/stdlib/display/#ALL">display.ALL</a>, <a class="stdlib-ref" data-key="display::NONE" href="/api/stdlib/display/#NONE">display.NONE</a>, <a class="stdlib-ref" data-key="display::PANE" href="/api/stdlib/display/#PANE">display.PANE</a>, <a class="stdlib-ref" data-key="display::PRICE_SCALE" href="/api/stdlib/display/#PRICE_SCALE">display.PRICE_SCALE</a>, etc. |
| `format` | <code>input&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Format">Format</a></code> | `na` | Overrides the default number format for this plot in the data window. |
| `precision` | <code>input&nbsp;int</code> | `na` | Number of decimal places for display. |
| `force_overlay` | <code>const&nbsp;bool</code> | `na` | If true, forces the plot to display on the main chart pane. |
| `linestyle` | <code>input&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotStyle">PlotStyle</a></code> | `PlotStyle.Line` | Line style: <a class="stdlib-ref" data-key="prelude::PlotStyle" href="/api/stdlib/prelude/PlotStyle">PlotStyle.Line</a>, <a class="stdlib-ref" data-key="prelude::PlotStyle" href="/api/stdlib/prelude/PlotStyle">PlotStyle.Stepline</a>, <a class="stdlib-ref" data-key="prelude::PlotStyle" href="/api/stdlib/prelude/PlotStyle">PlotStyle.LineBr</a>. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Plot">Plot</a></code> — A plot handle that can be used with <a class="stdlib-ref" data-key="prelude::fill" href="/api/stdlib/prelude/Matrix#fill">fill</a> to fill areas between plots.

**Examples**

```navi
// Plot a simple moving average
let smaLine = plot(ta.sma(close, 20), title: "SMA 20", color: color.BLUE);
```

```navi
// Plot two EMAs and fill between them
let p1 = plot(ta.ema(close, 9), title: "EMA 9", color: color.GREEN); let p2 =
plot(ta.ema(close, 21), title: "EMA 21", color: color.RED); fill(p1, p2,
color: color.new(color.GRAY, 80));
```

---

### plot_arrow {#plot_arrow}

```navi
plot_arrow(
    series: series float,
    title: const string = na,
    color_up: series color = color.BLUE,
    color_down: series color = color.BLACK,
    offset: simple int = 0,
    min_height: input int = 5,
    max_height: input int = 100,
    editable: input bool = true,
    show_last: input int = na,
    display: input PlotDisplay = display.ALL,
    format: input Format = na,
    precision: input int = na,
    force_overlay: const bool = na
  )
```

Plots up and down arrows on the chart based on the sign of the series.

An up arrow is drawn when the value is positive, a down arrow when negative. The arrow height is proportional to the absolute value, scaled between `minheight` and `maxheight`. Useful for visualizing momentum or direction changes.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `series` | <code>series&nbsp;float</code> |  | The data series. Positive values draw up arrows, negative draw down arrows. `na` or zero values draw nothing. |
| `title` | <code>const&nbsp;string</code> | `na` | Title shown in the style dialog and data window. |
| `color_up` | <code>series&nbsp;color</code> | `color.BLUE` | Color of up arrows. |
| `color_down` | <code>series&nbsp;color</code> | `color.BLACK` | Color of down arrows. |
| `offset` | <code>simple&nbsp;int</code> | `0` | Shifts arrows left (negative) or right (positive) by the specified bars. |
| `min_height` | <code>input&nbsp;int</code> | `5` | Minimum arrow height in pixels. |
| `max_height` | <code>input&nbsp;int</code> | `100` | Maximum arrow height in pixels. |
| `editable` | <code>input&nbsp;bool</code> | `true` | If true, the plot can be edited in the style dialog. |
| `show_last` | <code>input&nbsp;int</code> | `na` | If set, only shows arrows on the last N bars. |
| `display` | <code>input&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `display.ALL` | Controls where arrows are displayed. |
| `format` | <code>input&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Format">Format</a></code> | `na` | Overrides the default number format in the data window. |
| `precision` | <code>input&nbsp;int</code> | `na` | Number of decimal places for display. |
| `force_overlay` | <code>const&nbsp;bool</code> | `na` | If true, forces display on the main chart pane. |

---

### plot_bar {#plot_bar}

```navi
plot_bar(
    open: series float,
    high: series float,
    low: series float,
    close: series float,
    title: const string = na,
    color: series color = color.BLUE,
    editable: input bool = true,
    show_last: input int = na,
    display: input PlotDisplay = display.ALL,
    format: input Format = na,
    precision: input int = na,
    force_overlay: const bool = na
  )
```

Plots OHLC bars on the chart.

Each bar shows open, high, low, and close prices as a traditional bar chart element. Useful for overlaying custom OHLC data or displaying transformed price data.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `open` | <code>series&nbsp;float</code> |  | The open price for each bar. |
| `high` | <code>series&nbsp;float</code> |  | The high price for each bar. |
| `low` | <code>series&nbsp;float</code> |  | The low price for each bar. |
| `close` | <code>series&nbsp;float</code> |  | The close price for each bar. |
| `title` | <code>const&nbsp;string</code> | `na` | Title shown in the style dialog and data window. |
| `color` | <code>series&nbsp;color</code> | `color.BLUE` | Bar color. |
| `editable` | <code>input&nbsp;bool</code> | `true` | If true, the plot can be edited in the style dialog. |
| `show_last` | <code>input&nbsp;int</code> | `na` | If set, only shows the last N bars. |
| `display` | <code>input&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `display.ALL` | Controls where bars are displayed. |
| `format` | <code>input&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Format">Format</a></code> | `na` | Overrides the default number format in the data window. |
| `precision` | <code>input&nbsp;int</code> | `na` | Number of decimal places for display. |
| `force_overlay` | <code>const&nbsp;bool</code> | `na` | If true, forces display on the main chart pane. |

---

### plot_candle {#plot_candle}

```navi
plot_candle(
    open: series float,
    high: series float,
    low: series float,
    close: series float,
    title: const string = na,
    color: series color = color.BLUE,
    wick_color: series color = color.BLUE,
    editable: input bool = true,
    show_last: input int = na,
    border_color: series color = color.BLACK,
    display: input PlotDisplay = display.ALL,
    format: input Format = na,
    precision: input int = na,
    force_overlay: const bool = na
  )
```

Plots candlesticks on the chart.

Each candle shows open, high, low, and close prices with a body and wicks. Useful for overlaying custom candlestick data (e.g., Heikin-Ashi) or displaying transformed price series.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `open` | <code>series&nbsp;float</code> |  | The open price for each candle. |
| `high` | <code>series&nbsp;float</code> |  | The high price for each candle. |
| `low` | <code>series&nbsp;float</code> |  | The low price for each candle. |
| `close` | <code>series&nbsp;float</code> |  | The close price for each candle. |
| `title` | <code>const&nbsp;string</code> | `na` | Title shown in the style dialog and data window. |
| `color` | <code>series&nbsp;color</code> | `color.BLUE` | Candle body color. |
| `wick_color` | <code>series&nbsp;color</code> | `color.BLUE` | Candle wick color. |
| `editable` | <code>input&nbsp;bool</code> | `true` | If true, the plot can be edited in the style dialog. |
| `show_last` | <code>input&nbsp;int</code> | `na` | If set, only shows the last N candles. |
| `border_color` | <code>series&nbsp;color</code> | `color.BLACK` | Candle body border color. |
| `display` | <code>input&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `display.ALL` | Controls where candles are displayed. |
| `format` | <code>input&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Format">Format</a></code> | `na` | Overrides the default number format in the data window. |
| `precision` | <code>input&nbsp;int</code> | `na` | Number of decimal places for display. |
| `force_overlay` | <code>const&nbsp;bool</code> | `na` | If true, forces display on the main chart pane. |

---

### plot_char {#plot_char}

<OverloadTabs v-model="_s6" :labels='["<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">plot_char</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">series:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, char</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> \"⭐\"</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, location</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Location </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Location.AboveBar, </span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> color</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">.BLUE, offset</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> simple</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> color</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">.BLUE, editable</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> true</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, size</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Size </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Size.Auto, show_last</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, display</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> display.ALL, format</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Format </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, precision</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, force_overlay</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span>","<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">plot_char</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">series:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, char</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> \"⭐\"</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, location</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Location </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Location.AboveBar, </span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> color</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">.BLUE, offset</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> simple</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> color</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">.BLUE, editable</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> true</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, size</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Size </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Size.Auto, show_last</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, display</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> display.ALL, format</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Format </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, precision</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, force_overlay</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span>"]' />

<div v-show="_s6 === 0">

Plots a character at each bar where the series has a non-na value.

The character is positioned relative to the bar based on `location`. Useful for marking specific events or conditions on the chart.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `series` | <code>series&nbsp;float</code> |  | The data series. A character is drawn when the value is not `na`. |
| `title` | <code>const&nbsp;string</code> | `na` | Title shown in the style dialog and data window. |
| `char` | <code>input&nbsp;string</code> | `"⭐"` | The character to display (Unicode supported). |
| `location` | <code>input&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Location">Location</a></code> | `Location.AboveBar` | Vertical position: <a class="stdlib-ref" data-key="prelude::Location" href="/api/stdlib/prelude/Location">Location.AboveBar</a>, <a class="stdlib-ref" data-key="prelude::Location" href="/api/stdlib/prelude/Location">Location.BelowBar</a>, <a class="stdlib-ref" data-key="prelude::Location" href="/api/stdlib/prelude/Location">Location.Top</a>, <a class="stdlib-ref" data-key="prelude::Location" href="/api/stdlib/prelude/Location">Location.Bottom</a>, <a class="stdlib-ref" data-key="prelude::Location" href="/api/stdlib/prelude/Location">Location.Absolute</a>. |
| `color` | <code>series&nbsp;color</code> | `color.BLUE` | Character color. |
| `offset` | <code>simple&nbsp;int</code> | `0` | Shifts the character left (negative) or right (positive) by bars. |
| `text` | <code>const&nbsp;string</code> | `na` | Optional text displayed near the character. |
| `text_color` | <code>series&nbsp;color</code> | `color.BLUE` | Color of the optional text. |
| `editable` | <code>input&nbsp;bool</code> | `true` | If true, the plot can be edited in the style dialog. |
| `size` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Size">Size</a></code> | `Size.Auto` | Character size: <a class="stdlib-ref" data-key="prelude::Size" href="/api/stdlib/prelude/Size">Size.Auto</a>, <a class="stdlib-ref" data-key="prelude::Size" href="/api/stdlib/prelude/Size">Size.Tiny</a>, <a class="stdlib-ref" data-key="prelude::Size" href="/api/stdlib/prelude/Size">Size.Small</a>, <a class="stdlib-ref" data-key="prelude::Size" href="/api/stdlib/prelude/Size">Size.Normal</a>, <a class="stdlib-ref" data-key="prelude::Size" href="/api/stdlib/prelude/Size">Size.Large</a>, <a class="stdlib-ref" data-key="prelude::Size" href="/api/stdlib/prelude/Size">Size.Huge</a>. |
| `show_last` | <code>input&nbsp;int</code> | `na` | If set, only shows characters on the last N bars. |
| `display` | <code>input&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `display.ALL` | Controls where characters are displayed. |
| `format` | <code>input&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Format">Format</a></code> | `na` | Overrides the default number format in the data window. |
| `precision` | <code>input&nbsp;int</code> | `na` | Number of decimal places for display. |
| `force_overlay` | <code>const&nbsp;bool</code> | `na` | If true, forces display on the main chart pane. |

</div>

<div v-show="_s6 === 1">

Plots a character at each bar where the bool series is true.

A character is drawn when the value is `true`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `series` | <code>series&nbsp;bool</code> |  | The boolean series. A character is drawn when true. |
| `title` | <code>const&nbsp;string</code> | `na` | Title shown in the style dialog and data window. |
| `char` | <code>input&nbsp;string</code> | `"⭐"` | The character to display (Unicode supported). |
| `location` | <code>input&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Location">Location</a></code> | `Location.AboveBar` | Vertical position: <a class="stdlib-ref" data-key="prelude::Location" href="/api/stdlib/prelude/Location">Location.AboveBar</a>, <a class="stdlib-ref" data-key="prelude::Location" href="/api/stdlib/prelude/Location">Location.BelowBar</a>, <a class="stdlib-ref" data-key="prelude::Location" href="/api/stdlib/prelude/Location">Location.Top</a>, <a class="stdlib-ref" data-key="prelude::Location" href="/api/stdlib/prelude/Location">Location.Bottom</a>, <a class="stdlib-ref" data-key="prelude::Location" href="/api/stdlib/prelude/Location">Location.Absolute</a>. |
| `color` | <code>series&nbsp;color</code> | `color.BLUE` | Character color. |
| `offset` | <code>simple&nbsp;int</code> | `0` | Shifts the character left (negative) or right (positive) by bars. |
| `text` | <code>const&nbsp;string</code> | `na` | Optional text displayed near the character. |
| `text_color` | <code>series&nbsp;color</code> | `color.BLUE` | Color of the optional text. |
| `editable` | <code>input&nbsp;bool</code> | `true` | If true, the plot can be edited in the style dialog. |
| `size` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Size">Size</a></code> | `Size.Auto` | Character size: <a class="stdlib-ref" data-key="prelude::Size" href="/api/stdlib/prelude/Size">Size.Auto</a>, <a class="stdlib-ref" data-key="prelude::Size" href="/api/stdlib/prelude/Size">Size.Tiny</a>, <a class="stdlib-ref" data-key="prelude::Size" href="/api/stdlib/prelude/Size">Size.Small</a>, <a class="stdlib-ref" data-key="prelude::Size" href="/api/stdlib/prelude/Size">Size.Normal</a>, <a class="stdlib-ref" data-key="prelude::Size" href="/api/stdlib/prelude/Size">Size.Large</a>, <a class="stdlib-ref" data-key="prelude::Size" href="/api/stdlib/prelude/Size">Size.Huge</a>. |
| `show_last` | <code>input&nbsp;int</code> | `na` | If set, only shows characters on the last N bars. |
| `display` | <code>input&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `display.ALL` | Controls where characters are displayed. |
| `format` | <code>input&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Format">Format</a></code> | `na` | Overrides the default number format in the data window. |
| `precision` | <code>input&nbsp;int</code> | `na` | Number of decimal places for display. |
| `force_overlay` | <code>const&nbsp;bool</code> | `na` | If true, forces display on the main chart pane. |

</div>

---

### plot_shape {#plot_shape}

<OverloadTabs v-model="_s7" :labels='["<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">plot_shape</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">series:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, style</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Shape </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Shape.XCross, location</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Location </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Location.AboveBar, </span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> color</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">.BLUE, offset</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> simple</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> color</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">.BLUE, editable</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> true</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, size</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Size </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Size.Auto, show_last</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, display</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> display.ALL, format</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Format </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, precision</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, force_overlay</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span>","<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">plot_shape</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">series:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, style</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Shape </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Shape.XCross, location</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Location </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Location.AboveBar, </span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> color</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">.BLUE, offset</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> simple</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> color</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">.BLUE, editable</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> true</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, size</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Size </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Size.Auto, show_last</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, display</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> display.ALL, format</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Format </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, precision</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, force_overlay</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span>"]' />

<div v-show="_s7 === 0">

Plots a shape at each bar where the series has a non-na value.

Various shape styles are available (arrows, circles, crosses, etc.). The shape is positioned relative to the bar based on `location`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `series` | <code>series&nbsp;float</code> |  | The data series. A shape is drawn when the value is not `na`. |
| `title` | <code>const&nbsp;string</code> | `na` | Title shown in the style dialog and data window. |
| `style` | <code>input&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Shape">Shape</a></code> | `Shape.XCross` | Shape style: <a class="stdlib-ref" data-key="prelude::Shape" href="/api/stdlib/prelude/Shape">Shape.XCross</a>, <a class="stdlib-ref" data-key="prelude::Shape" href="/api/stdlib/prelude/Shape">Shape.Cross</a>, <a class="stdlib-ref" data-key="prelude::Shape" href="/api/stdlib/prelude/Shape">Shape.TriangleUp</a>, <a class="stdlib-ref" data-key="prelude::Shape" href="/api/stdlib/prelude/Shape">Shape.TriangleDown</a>, <a class="stdlib-ref" data-key="prelude::Shape" href="/api/stdlib/prelude/Shape">Shape.Flag</a>, <a class="stdlib-ref" data-key="prelude::Shape" href="/api/stdlib/prelude/Shape">Shape.Circle</a>, <a class="stdlib-ref" data-key="prelude::Shape" href="/api/stdlib/prelude/Shape">Shape.ArrowUp</a>, <a class="stdlib-ref" data-key="prelude::Shape" href="/api/stdlib/prelude/Shape">Shape.ArrowDown</a>, <a class="stdlib-ref" data-key="prelude::Shape" href="/api/stdlib/prelude/Shape">Shape.LabelUp</a>, <a class="stdlib-ref" data-key="prelude::Shape" href="/api/stdlib/prelude/Shape">Shape.LabelDown</a>, <a class="stdlib-ref" data-key="prelude::Shape" href="/api/stdlib/prelude/Shape">Shape.Square</a>, <a class="stdlib-ref" data-key="prelude::Shape" href="/api/stdlib/prelude/Shape">Shape.Diamond</a>. |
| `location` | <code>input&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Location">Location</a></code> | `Location.AboveBar` | Vertical position: <a class="stdlib-ref" data-key="prelude::Location" href="/api/stdlib/prelude/Location">Location.AboveBar</a>, <a class="stdlib-ref" data-key="prelude::Location" href="/api/stdlib/prelude/Location">Location.BelowBar</a>, <a class="stdlib-ref" data-key="prelude::Location" href="/api/stdlib/prelude/Location">Location.Top</a>, <a class="stdlib-ref" data-key="prelude::Location" href="/api/stdlib/prelude/Location">Location.Bottom</a>, <a class="stdlib-ref" data-key="prelude::Location" href="/api/stdlib/prelude/Location">Location.Absolute</a>. |
| `color` | <code>series&nbsp;color</code> | `color.BLUE` | Shape color. |
| `offset` | <code>simple&nbsp;int</code> | `0` | Shifts the shape left (negative) or right (positive) by bars. |
| `text` | <code>const&nbsp;string</code> | `na` | Optional text displayed near the shape. |
| `text_color` | <code>series&nbsp;color</code> | `color.BLUE` | Color of the optional text. |
| `editable` | <code>input&nbsp;bool</code> | `true` | If true, the plot can be edited in the style dialog. |
| `size` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Size">Size</a></code> | `Size.Auto` | Shape size: <a class="stdlib-ref" data-key="prelude::Size" href="/api/stdlib/prelude/Size">Size.Auto</a>, <a class="stdlib-ref" data-key="prelude::Size" href="/api/stdlib/prelude/Size">Size.Tiny</a>, <a class="stdlib-ref" data-key="prelude::Size" href="/api/stdlib/prelude/Size">Size.Small</a>, <a class="stdlib-ref" data-key="prelude::Size" href="/api/stdlib/prelude/Size">Size.Normal</a>, <a class="stdlib-ref" data-key="prelude::Size" href="/api/stdlib/prelude/Size">Size.Large</a>, <a class="stdlib-ref" data-key="prelude::Size" href="/api/stdlib/prelude/Size">Size.Huge</a>. |
| `show_last` | <code>input&nbsp;int</code> | `na` | If set, only shows shapes on the last N bars. |
| `display` | <code>input&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `display.ALL` | Controls where shapes are displayed. |
| `format` | <code>input&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Format">Format</a></code> | `na` | Overrides the default number format in the data window. |
| `precision` | <code>input&nbsp;int</code> | `na` | Number of decimal places for display. |
| `force_overlay` | <code>const&nbsp;bool</code> | `na` | If true, forces display on the main chart pane. |

</div>

<div v-show="_s7 === 1">

Plots a shape at each bar where the bool series is true.

A shape is drawn when the value is `true`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `series` | <code>series&nbsp;bool</code> |  | The boolean series. A shape is drawn when true. |
| `title` | <code>const&nbsp;string</code> | `na` | Title shown in the style dialog and data window. |
| `style` | <code>input&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Shape">Shape</a></code> | `Shape.XCross` | Shape style: <a class="stdlib-ref" data-key="prelude::Shape" href="/api/stdlib/prelude/Shape">Shape.XCross</a>, <a class="stdlib-ref" data-key="prelude::Shape" href="/api/stdlib/prelude/Shape">Shape.Cross</a>, <a class="stdlib-ref" data-key="prelude::Shape" href="/api/stdlib/prelude/Shape">Shape.TriangleUp</a>, <a class="stdlib-ref" data-key="prelude::Shape" href="/api/stdlib/prelude/Shape">Shape.TriangleDown</a>, <a class="stdlib-ref" data-key="prelude::Shape" href="/api/stdlib/prelude/Shape">Shape.Flag</a>, <a class="stdlib-ref" data-key="prelude::Shape" href="/api/stdlib/prelude/Shape">Shape.Circle</a>, <a class="stdlib-ref" data-key="prelude::Shape" href="/api/stdlib/prelude/Shape">Shape.ArrowUp</a>, <a class="stdlib-ref" data-key="prelude::Shape" href="/api/stdlib/prelude/Shape">Shape.ArrowDown</a>, <a class="stdlib-ref" data-key="prelude::Shape" href="/api/stdlib/prelude/Shape">Shape.LabelUp</a>, <a class="stdlib-ref" data-key="prelude::Shape" href="/api/stdlib/prelude/Shape">Shape.LabelDown</a>, <a class="stdlib-ref" data-key="prelude::Shape" href="/api/stdlib/prelude/Shape">Shape.Square</a>, <a class="stdlib-ref" data-key="prelude::Shape" href="/api/stdlib/prelude/Shape">Shape.Diamond</a>. |
| `location` | <code>input&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Location">Location</a></code> | `Location.AboveBar` | Vertical position: <a class="stdlib-ref" data-key="prelude::Location" href="/api/stdlib/prelude/Location">Location.AboveBar</a>, <a class="stdlib-ref" data-key="prelude::Location" href="/api/stdlib/prelude/Location">Location.BelowBar</a>, <a class="stdlib-ref" data-key="prelude::Location" href="/api/stdlib/prelude/Location">Location.Top</a>, <a class="stdlib-ref" data-key="prelude::Location" href="/api/stdlib/prelude/Location">Location.Bottom</a>, <a class="stdlib-ref" data-key="prelude::Location" href="/api/stdlib/prelude/Location">Location.Absolute</a>. |
| `color` | <code>series&nbsp;color</code> | `color.BLUE` | Shape color. |
| `offset` | <code>simple&nbsp;int</code> | `0` | Shifts the shape left (negative) or right (positive) by bars. |
| `text` | <code>const&nbsp;string</code> | `na` | Optional text displayed near the shape. |
| `text_color` | <code>series&nbsp;color</code> | `color.BLUE` | Color of the optional text. |
| `editable` | <code>input&nbsp;bool</code> | `true` | If true, the plot can be edited in the style dialog. |
| `size` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Size">Size</a></code> | `Size.Auto` | Shape size: <a class="stdlib-ref" data-key="prelude::Size" href="/api/stdlib/prelude/Size">Size.Auto</a>, <a class="stdlib-ref" data-key="prelude::Size" href="/api/stdlib/prelude/Size">Size.Tiny</a>, <a class="stdlib-ref" data-key="prelude::Size" href="/api/stdlib/prelude/Size">Size.Small</a>, <a class="stdlib-ref" data-key="prelude::Size" href="/api/stdlib/prelude/Size">Size.Normal</a>, <a class="stdlib-ref" data-key="prelude::Size" href="/api/stdlib/prelude/Size">Size.Large</a>, <a class="stdlib-ref" data-key="prelude::Size" href="/api/stdlib/prelude/Size">Size.Huge</a>. |
| `show_last` | <code>input&nbsp;int</code> | `na` | If set, only shows shapes on the last N bars. |
| `display` | <code>input&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `display.ALL` | Controls where shapes are displayed. |
| `format` | <code>input&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Format">Format</a></code> | `na` | Overrides the default number format in the data window. |
| `precision` | <code>input&nbsp;int</code> | `na` | Number of decimal places for display. |
| `force_overlay` | <code>const&nbsp;bool</code> | `na` | If true, forces display on the main chart pane. |

</div>

---

### second {#fn-second}

```navi
second(timestamp: int, timezone: string = syminfo.timezone): int
```

Extracts the second (0-59) from a UNIX timestamp in the specified timezone.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `timestamp` | <code>int</code> |  | The UNIX timestamp in milliseconds. |
| `timezone` | <code>string</code> | `syminfo.timezone` | The timezone for interpretation. Defaults to symbol's timezone. |

**Returns:** <code>int</code>

---

### strategy {#strategy}

```navi
strategy(
    title: const string,
    shorttitle: const string = na,
    overlay: const bool = false,
    format: const Format = Format.Inherit,
    precision: const int = na,
    scale: const ScaleType = na,
    pyramiding: const int = 0,
    calc_on_order_fills: const bool = false,
    calc_on_every_tick: const bool = false,
    max_bars_back: const int = na,
    backtest_fill_limits_assumption: const int = 0,
    default_qty_type: const DefaultQtyType = DefaultQtyType.Fixed,
    default_qty_value: const float = 1,
    initial_capital: const float = 1000000,
    currency: simple string = syminfo.currency,
    slippage: const int = 0,
    commission_type: const CommissionType = CommissionType.Percent,
    commission_value: const float = 0,
    process_orders_on_close: const bool = false,
    close_entries_rule: const string = "FIFO",
    margin_long: const float = 100,
    margin_short: const float = 100,
    explicit_plot_zorder: const bool = false,
    max_lines_count: const int = 50,
    max_labels_count: const int = 50,
    max_boxes_count: const int = 50,
    calc_bars_count: const int = na,
    risk_free_rate: const float = 2,
    use_bar_magnifier: const bool = false,
    fill_orders_on_standard_ohlc: const bool = false,
    max_polylines_count: const int = 50,
    dynamic_requests: const bool = true,
    behind_chart: const bool = true
  )
```

Designates the script as a strategy and sets strategy-related properties.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | <code>const&nbsp;string</code> |  | The title of the script. Displayed on the chart when `shorttitle` is not set, and becomes the publication's default title when publishing. |
| `shorttitle` | <code>const&nbsp;string</code> | `na` | An abbreviated display name for the script shown on the chart and in most chart-related windows. Optional. |
| `overlay` | <code>const&nbsp;bool</code> | `false` | If `true`, the strategy's visuals are drawn on the main chart pane. If `false`, they appear in a separate pane. Optional. The default is `false`. |
| `format` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Format">Format</a></code> | `Format.Inherit` | Specifies how the strategy's displayed values are formatted. Possible values: <a class="stdlib-ref" data-key="prelude::Format" href="/api/stdlib/prelude/Format">Format.Inherit</a>, <a class="stdlib-ref" data-key="prelude::Format" href="/api/stdlib/prelude/Format">Format.Price</a>, <a class="stdlib-ref" data-key="prelude::Format" href="/api/stdlib/prelude/Format">Format.Volume</a>, <a class="stdlib-ref" data-key="prelude::Format" href="/api/stdlib/prelude/Format">Format.Percent</a>. Optional. |
| `precision` | <code>const&nbsp;int</code> | `na` | Number of decimal digits shown for the strategy's displayed values. Must be a non-negative integer no greater than 16. When <a class="stdlib-ref" data-key="prelude::Format" href="/api/stdlib/prelude/Format">Format.Volume</a> is used, this setting has no effect. Optional. The default is inherited from the chart symbol's precision. |
| `scale` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/ScaleType">ScaleType</a></code> | `na` | The price scale to use. Possible values: <a class="stdlib-ref" data-key="prelude::ScaleType" href="/api/stdlib/prelude/ScaleType">ScaleType.Right</a>, <a class="stdlib-ref" data-key="prelude::ScaleType" href="/api/stdlib/prelude/ScaleType">ScaleType.Left</a>, <a class="stdlib-ref" data-key="prelude::ScaleType" href="/api/stdlib/prelude/ScaleType">ScaleType.None</a>. <a class="stdlib-ref" data-key="prelude::ScaleType" href="/api/stdlib/prelude/ScaleType">ScaleType.None</a> is only allowed when `overlay = true`. Optional. |
| `pyramiding` | <code>const&nbsp;int</code> | `0` | The maximum number of entries allowed in the same direction at the same time. Optional. The default is `0`, meaning only one entry per direction is permitted. |
| `calc_on_order_fills` | <code>const&nbsp;bool</code> | `false` | If `true`, the strategy recalculates its logic whenever an order is filled during a bar, rather than only at bar close. Optional. The default is `false`. |
| `calc_on_every_tick` | <code>const&nbsp;bool</code> | `false` | If `true`, the strategy recalculates on every incoming real-time price update (tick). If `false`, calculations only occur at bar close. Optional. The default is `false`. |
| `max_bars_back` | <code>const&nbsp;int</code> | `na` | The depth of the history buffer kept for all variables and functions, controlling how many past values can be read with the `[]` operator. Optional. |
| `backtest_fill_limits_assumption` | <code>const&nbsp;int</code> | `0` | The number of ticks beyond the limit price a market must move before a limit order is assumed to be filled. Optional. The default is `0`. |
| `default_qty_type` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/DefaultQtyType">DefaultQtyType</a></code> | `DefaultQtyType.Fixed` | Determines how `default_qty_value` is interpreted. Possible values: <a class="stdlib-ref" data-key="prelude::DefaultQtyType" href="/api/stdlib/prelude/DefaultQtyType">DefaultQtyType.Fixed</a>, <a class="stdlib-ref" data-key="prelude::DefaultQtyType" href="/api/stdlib/prelude/DefaultQtyType">DefaultQtyType.PercentOfEquity</a>, <a class="stdlib-ref" data-key="prelude::DefaultQtyType" href="/api/stdlib/prelude/DefaultQtyType">DefaultQtyType.Cash</a>. Optional. The default is <a class="stdlib-ref" data-key="prelude::DefaultQtyType" href="/api/stdlib/prelude/DefaultQtyType">DefaultQtyType.Fixed</a>. |
| `default_qty_value` | <code>const&nbsp;float</code> | `1` | The default order size used when no quantity is specified in an entry call. Its meaning depends on `default_qty_type`. Optional. The default is `1.0`. |
| `initial_capital` | <code>const&nbsp;float</code> | `1000000` | The starting capital available to the strategy at the beginning of the backtest, expressed in `currency`. Optional. The default is `1000000.0`. |
| `currency` | <code>simple&nbsp;string</code> | `syminfo.currency` | The base currency in which the strategy tracks capital, profit, and loss. Optional. Defaults to the chart symbol's currency. |
| `slippage` | <code>const&nbsp;int</code> | `0` | The number of ticks added to each order fill price to simulate execution slippage. Optional. The default is `0`. |
| `commission_type` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/CommissionType">CommissionType</a></code> | `CommissionType.Percent` | Specifies how trading commission is calculated. Possible values: `strategy.commission.percent`, `strategy.commission.cash_per_contract`, `strategy.commission.cash_per_order`. Optional. The default is `strategy.commission.percent`. |
| `commission_value` | <code>const&nbsp;float</code> | `0` | The commission amount, interpreted according to `commission_type`. Optional. The default is `0.0`. |
| `process_orders_on_close` | <code>const&nbsp;bool</code> | `false` | If `true`, orders generated during a bar are processed at that bar's closing price rather than on the opening of the next bar. Optional. The default is `false`. |
| `close_entries_rule` | <code>const&nbsp;string</code> | `"FIFO"` | The sequencing rule applied when closing multiple open entries. `"FIFO"` closes the oldest entry first; `"ANY"` allows the close call to target a specific entry by ID. Optional. The default is `"FIFO"`. |
| `margin_long` | <code>const&nbsp;float</code> | `100` | The margin requirement for long positions, expressed as a percentage of position value. A value of `100` means no leverage. Optional. The default is `100.0`. |
| `margin_short` | <code>const&nbsp;float</code> | `100` | The margin requirement for short positions, expressed as a percentage of position value. A value of `100` means no leverage. Optional. The default is `100.0`. |
| `explicit_plot_zorder` | <code>const&nbsp;bool</code> | `false` | If `true`, plots, fills, and hlines are rendered in the order they appear in the script code, with later declarations drawn on top of earlier ones. Optional. The default is `false`. |
| `max_lines_count` | <code>const&nbsp;int</code> | `50` | The maximum number of recent `line` drawings kept on the chart. Possible values: 1–500. Optional. The default is `50`. |
| `max_labels_count` | <code>const&nbsp;int</code> | `50` | The maximum number of recent `label` drawings kept on the chart. Possible values: 1–500. Optional. The default is `50`. |
| `max_boxes_count` | <code>const&nbsp;int</code> | `50` | The maximum number of recent `box` drawings kept on the chart. Possible values: 1–500. Optional. The default is `50`. |
| `calc_bars_count` | <code>const&nbsp;int</code> | `na` | Limits the backtest to the most recent number of bars specified. When `na`, the strategy runs on all available history. Optional. The default is `na`. |
| `risk_free_rate` | <code>const&nbsp;float</code> | `2` | The annual risk-free rate (as a percentage) used when computing the Sharpe and Sortino ratios. Optional. The default is `2.0`. |
| `use_bar_magnifier` | <code>const&nbsp;bool</code> | `false` | If `true`, the engine uses intrabar data at a finer resolution to determine more accurate order fill prices within each bar. Optional. The default is `false`. |
| `fill_orders_on_standard_ohlc` | <code>const&nbsp;bool</code> | `false` | If `true`, limit and stop orders are filled against the bar's standard OHLC prices, ignoring any intrabar price path. Optional. The default is `false`. |
| `max_polylines_count` | <code>const&nbsp;int</code> | `50` | The maximum number of recent `polyline` drawings kept on the chart. Possible values: 1–100. Optional. The default is `50`. |
| `dynamic_requests` | <code>const&nbsp;bool</code> | `true` | Specifies whether the strategy may contain dynamic `request.*()` calls inside conditional structures or loops, or calls that accept "series" arguments for normally non-series parameters. Optional. The default is `true`. |
| `behind_chart` | <code>const&nbsp;bool</code> | `true` | If `true`, all plots and drawings are rendered behind the chart's candlesticks or bars. Only takes effect when `overlay = true`. Optional. The default is `true`. |

---

### string {#string}

```navi
string(x: string): string
```

Casts na to string

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | <code>string</code> |  |  |

**Returns:** <code>string</code>

---

### table {#table}

```navi
table(x: Table): Table
```

Casts na to table type.

Useful for initializing table variables that will be assigned later.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Table">Table</a></code> |  |  |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Table">Table</a></code>

---

### time {#fn-time}

<OverloadTabs v-model="_s8" :labels='["<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">time</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(timeframe</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, session</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, timezone</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> syminfo.timezone)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">time</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(timeframe</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, session</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, bars_back</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, timeframe_bars_back</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>"]' />

<div v-show="_s8 === 0">

Resolves the opening timestamp of the bar bucket selected by `timeframe` and `session`.

This overload is convenient when you want the target session interpreted in a specific time zone.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `timeframe` | <code>series&nbsp;string</code> |  | Timeframe code such as `"D"`, `"60"`, or `"W"`. |
| `session` | <code>series&nbsp;string</code> | `na` | Optional session window. When omitted, the symbol's regular session rules are used. |
| `timezone` | <code>series&nbsp;string</code> | `syminfo.timezone` | Time zone used when evaluating the session string. |

**Returns:** <code>series&nbsp;int</code> — Millisecond timestamp for the matching bar start, or `na` when the current bar does not belong to the requested session.

</div>

<div v-show="_s8 === 1">

Maps the current chart bar to another timeframe and returns that target bar's opening timestamp.

The lookup can be shifted first on the chart timeframe and then again on the target timeframe.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `timeframe` | <code>series&nbsp;string</code> |  | Destination timeframe. An empty string falls back to the chart timeframe. |
| `session` | <code>series&nbsp;string</code> | `na` | Optional session filter for the destination lookup. |
| `bars_back` | <code>series&nbsp;int</code> | `0` | Offset applied on the chart timeframe before mapping. |
| `timeframe_bars_back` | <code>series&nbsp;int</code> | `0` | Extra offset applied after the destination bar is found. |

**Returns:** <code>series&nbsp;int</code>

</div>

---

### time_close {#fn-time_close}

<OverloadTabs v-model="_s9" :labels='["<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">time_close</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(timeframe</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, session</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, timezone</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> syminfo.timezone)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">time_close</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(timeframe</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, session</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, bars_back</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, timeframe_bars_back</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>"]' />

<div v-show="_s9 === 0">

Resolves the closing timestamp of the bar bucket selected by `timeframe` and `session`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `timeframe` | <code>series&nbsp;string</code> |  | Timeframe code such as `"D"`, `"60"`, or `"W"`. |
| `session` | <code>series&nbsp;string</code> | `na` | Optional session window used during the lookup. |
| `timezone` | <code>series&nbsp;string</code> | `syminfo.timezone` | Time zone used when interpreting the session string. |

**Returns:** <code>series&nbsp;int</code> — Millisecond timestamp for the matching bar close, or `na` when the current bar is outside the requested session.

</div>

<div v-show="_s9 === 1">

Maps the current chart bar to another timeframe and returns that target bar's closing timestamp.

It uses the same two-stage offset model as <a class="stdlib-ref" data-key="prelude::time" href="/api/stdlib/prelude/#fn-time">time</a>, but reports the bar end instead of the bar start.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `timeframe` | <code>series&nbsp;string</code> |  | Destination timeframe. An empty string falls back to the chart timeframe. |
| `session` | <code>series&nbsp;string</code> | `na` | Optional session filter for the destination lookup. |
| `bars_back` | <code>series&nbsp;int</code> | `0` | Offset applied on the chart timeframe before mapping. |
| `timeframe_bars_back` | <code>series&nbsp;int</code> | `0` | Extra offset applied after the destination bar is found. |

**Returns:** <code>series&nbsp;int</code>

</div>

---

### timestamp {#timestamp}

<OverloadTabs v-model="_s10" :labels='["<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">timestamp</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(date_string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">timestamp</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(year</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, month</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, day</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, hour</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, minute</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, second</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">timestamp</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(timezone</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> syminfo.timezone, year</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, month</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, day</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, hour</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, minute</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, second</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>"]' />

<div v-show="_s10 === 0">

Parses a date/time string and returns the corresponding UNIX timestamp in milliseconds.

The string must be in ISO 8601 format (e.g., "2024-01-15" or "2024-01-15T09:30:00Z") or IETF RFC 2822 format.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `date_string` | <code>string</code> |  | The date/time string to parse. |

**Returns:** <code>int</code>

</div>

<div v-show="_s10 === 1">

Creates a UNIX timestamp from date/time components using the chart's timezone.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `year` | <code>int</code> |  | The year (e.g., 2024). |
| `month` | <code>int</code> |  | The month (1-12). |
| `day` | <code>int</code> |  | The day of month (1-31). |
| `hour` | <code>int</code> | `0` | The hour (0-23). Defaults to 0. |
| `minute` | <code>int</code> | `0` | The minute (0-59). Defaults to 0. |
| `second` | <code>int</code> | `0` | The second (0-59). Defaults to 0. |

**Returns:** <code>int</code> — Milliseconds since 1970-01-01 00:00:00 UTC.

</div>

<div v-show="_s10 === 2">

Creates a UNIX timestamp from date/time components in a specified timezone.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `timezone` | <code>string</code> | `syminfo.timezone` | The timezone (e.g., "America/New_York", "UTC", "GMT+8"). |
| `year` | <code>int</code> |  | The year (e.g., 2024). |
| `month` | <code>int</code> |  | The month (1-12). |
| `day` | <code>int</code> |  | The day of month (1-31). |
| `hour` | <code>int</code> | `0` | The hour (0-23). Defaults to 0. |
| `minute` | <code>int</code> | `0` | The minute (0-59). Defaults to 0. |
| `second` | <code>int</code> | `0` | The second (0-59). Defaults to 0. |

**Returns:** <code>int</code> — Milliseconds since 1970-01-01 00:00:00 UTC.

</div>

---

### week_of_year {#fn-week_of_year}

```navi
week_of_year(timestamp: int, timezone: string = syminfo.timezone): int
```

Extracts the week of year (1-53) from a UNIX timestamp in the specified timezone.

Week 1 is the week containing January 4th (ISO 8601).

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `timestamp` | <code>int</code> |  | The UNIX timestamp in milliseconds. |
| `timezone` | <code>string</code> | `syminfo.timezone` | The timezone for interpretation. Defaults to symbol's timezone. |

**Returns:** <code>int</code>

---

### year {#fn-year}

```navi
year(timestamp: int, timezone: string = syminfo.timezone): int
```

Extracts the year from a UNIX timestamp in the specified timezone.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `timestamp` | <code>int</code> |  | The UNIX timestamp in milliseconds. |
| `timezone` | <code>string</code> | `syminfo.timezone` | The timezone for interpretation. Defaults to symbol's timezone. |

**Returns:** <code>int</code>
