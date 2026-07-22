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
Prelude 会自动加载到每个脚本中。它的类型和函数都应直接用名称引用——**不要**添加命名空间前缀（例如写 `close`，而不是 `prelude.close`）。
:::

## 类型

| 名称 | 说明 |
| --- | --- |
| [`Adjustment`](/zh-CN/api/stdlib/prelude/Adjustment) | 请求数据的价格复权类型。 |
| [`AlertFreq`](/zh-CN/api/stdlib/prelude/AlertFreq) | alert() 的触发频率常量。 |
| [`Array<T>`](/zh-CN/api/stdlib/prelude/Array) | 类型为 `T` 的有序、可索引的元素集合。 |
| [`BackAdjustment`](/zh-CN/api/stdlib/prelude/BackAdjustment) | 连续期货合约的历史价格复权方式。 |
| [`BarmergeGaps`](/zh-CN/api/stdlib/prelude/BarmergeGaps) | `request.*()` 函数的间隙模式。 |
| [`BarmergeLookahead`](/zh-CN/api/stdlib/prelude/BarmergeLookahead) | `request.*()` 函数的前瞻模式。 |
| [`Box`](/zh-CN/api/stdlib/prelude/Box) | 方框图的句柄。 |
| [`BoxStyle`](/zh-CN/api/stdlib/prelude/BoxStyle) | 砖形图/卡吉图/点数图的箱体大小计算方式。 |
| [`Color`](/zh-CN/api/stdlib/prelude/Color) | 32 位 RGBA 颜色值。 |
| [`CommissionType`](/zh-CN/api/stdlib/prelude/CommissionType) | strategy() 的佣金计算方式。 |
| [`Currency`](/zh-CN/api/stdlib/prelude/Currency) | 货币代码（ISO 4217）。 |
| [`DayOfWeek`](/zh-CN/api/stdlib/prelude/DayOfWeek) | 星期常量。 |
| [`DefaultQtyType`](/zh-CN/api/stdlib/prelude/DefaultQtyType) | strategy() 的默认数量模式。 |
| [`Direction`](/zh-CN/api/stdlib/prelude/Direction) | 策略订单方向。 |
| [`DividendsField`](/zh-CN/api/stdlib/prelude/DividendsField) | request.dividends() 的字段选择器。 |
| [`EarningsField`](/zh-CN/api/stdlib/prelude/EarningsField) | request.earnings() 的字段选择器。 |
| [`Extend`](/zh-CN/api/stdlib/prelude/Extend) | 线条延伸方向。 |
| [`FontFamily`](/zh-CN/api/stdlib/prelude/FontFamily) | 文字绘图的字体系列。 |
| [`Format`](/zh-CN/api/stdlib/prelude/Format) | 图表和标签的数值格式。 |
| [`HLine`](/zh-CN/api/stdlib/prelude/HLine) | 由 <a class="stdlib-ref" data-key="prelude::hline" href="/zh-CN/api/stdlib/prelude/#hline">hline</a> 创建的水平线的句柄。 |
| [`HLineStyle`](/zh-CN/api/stdlib/prelude/HLineStyle) | 水平线绘图的样式。 |
| [`Label`](/zh-CN/api/stdlib/prelude/Label) | 标签绘图的句柄。 |
| [`LabelStyle`](/zh-CN/api/stdlib/prelude/LabelStyle) | 标签绘图的样式。 |
| [`Line`](/zh-CN/api/stdlib/prelude/Line) | 画线句柄。 |
| [`LineFill`](/zh-CN/api/stdlib/prelude/LineFill) | 两行之间的行填充句柄。 |
| [`LineStyle`](/zh-CN/api/stdlib/prelude/LineStyle) | 线条绘图的样式。 |
| [`Location`](/zh-CN/api/stdlib/prelude/Location) | plot_shape() 和 plot_char() 的垂直位置。 |
| [`Map<K, V>`](/zh-CN/api/stdlib/prelude/Map) | 将 `K` 类型的键映射到 `V` 类型值的键值存储。 |
| [`Matrix<T>`](/zh-CN/api/stdlib/prelude/Matrix) | 以行优先顺序存储的 `T` 类型元素的二维表。 |
| [`OcaType`](/zh-CN/api/stdlib/prelude/OcaType) | 策略订单的 OCA（一单取消全部）行为。 |
| [`Plot`](/zh-CN/api/stdlib/prelude/Plot) | 由 <a class="stdlib-ref" data-key="prelude::plot" href="/zh-CN/api/stdlib/prelude/#plot">plot</a> 创建的绘图的句柄。 |
| [`PlotDisplay`](/zh-CN/api/stdlib/prelude/PlotDisplay) | 控制绘图和视觉效果显示位置的位标志类型。 |
| [`PlotStyle`](/zh-CN/api/stdlib/prelude/PlotStyle) | 图表系列的绘图样式。 |
| [`PnfSource`](/zh-CN/api/stdlib/prelude/PnfSource) | 计算点数图箱格所用的价格来源。 |
| [`Polyline`](/zh-CN/api/stdlib/prelude/Polyline) | 多段线绘图的句柄。 |
| [`Position`](/zh-CN/api/stdlib/prelude/Position) | 表格和标签在图表面板上的位置。 |
| [`RenkoSource`](/zh-CN/api/stdlib/prelude/RenkoSource) | 计算砖形图砖块所用的价格来源。 |
| [`ScaleType`](/zh-CN/api/stdlib/prelude/ScaleType) | indicator() 和 strategy() 的价格坐标轴挂载模式。 |
| [`Session`](/zh-CN/api/stdlib/prelude/Session) | 交易时段类型。 |
| [`SettlementAsClose`](/zh-CN/api/stdlib/prelude/SettlementAsClose) | 期货品种在日线及以上周期是否以结算价作为收盘价。 |
| [`Shape`](/zh-CN/api/stdlib/prelude/Shape) | plot_shape() 绘制的图形。 |
| [`Size`](/zh-CN/api/stdlib/prelude/Size) | 绘图和标签的尺寸常量。 |
| [`SortOrder`](/zh-CN/api/stdlib/prelude/SortOrder) | 数组和矩阵操作的排序方向。 |
| [`SplitsField`](/zh-CN/api/stdlib/prelude/SplitsField) | request.splits() 的字段选择器。 |
| [`String`](/zh-CN/api/stdlib/prelude/String) | 不可变的 Unicode 字符序列。 |
| [`Table`](/zh-CN/api/stdlib/prelude/Table) | 表格绘图的句柄。 |
| [`TextFormat`](/zh-CN/api/stdlib/prelude/TextFormat) | 文字格式标志（粗体、斜体）。可使用 `+` 组合多个值。 |
| [`TextHAlign`](/zh-CN/api/stdlib/prelude/TextHAlign) | 文字水平对齐方式。 |
| [`TextVAlign`](/zh-CN/api/stdlib/prelude/TextVAlign) | 文字垂直对齐方式。 |
| [`TextWrap`](/zh-CN/api/stdlib/prelude/TextWrap) | 文字换行模式。 |
| [`XLoc`](/zh-CN/api/stdlib/prelude/XLoc) | 绘图对象的 X 轴坐标模式。 |
| [`YLoc`](/zh-CN/api/stdlib/prelude/YLoc) | 标签的 Y 轴坐标模式。 |

## 属性

### ask {#ask}

**类型:** <code>series&nbsp;float</code>

当前 K 线的最优卖价（ask）。仅在 `1T`（tick）周期可用，其他周期返回 `na`。

---

### bar_index {#bar_index}

**类型:** <code>series&nbsp;int</code>

当前 bar 的索引。编号从零开始，因此图表上第一个（最旧的）bar 的索引为 0。每个后续 bar 的值都会增加 1。使用 `bar_index[1]` 引用前一个 bar 的索引。

---

### bid {#bid}

**类型:** <code>series&nbsp;float</code>

当前 K 线的最优买价（bid）。仅在 `1T`（tick）周期可用，其他周期返回 `na`。

---

### close {#close}

**类型:** <code>series&nbsp;float</code>

当前 bar 的收盘价。在历史 bars 上，这是 bar 收盘时的最后交易价格。在实时 bars 上，这是当前的最后交易价格，并将发生变化，直到 bar 收盘。

---

### day_of_month {#prop-day_of_month}

**类型:** <code>int</code>

返回交易品种时区中当前 bar 开市时间的月份 (1-31) 中的某一天。

---

### day_of_week {#prop-day_of_week}

**类型:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/DayOfWeek">DayOfWeek</a></code>

返回当前 bar 的开放时间是星期几。

---

### high {#high}

**类型:** <code>series&nbsp;float</code>

当前 bar 期间达到的最高价格。在历史 bars 上，这是最高交易价格。在实时 bars 上，该值可能会随着新高的出现而增加。

---

### hl2 {#hl2}

**类型:** <code>series&nbsp;float</code>

高价和低价的中点：`(high + low) / 2`。也称为中位价格。可用于简单估算 bar 的中心价格。

---

### hlc3 {#hlc3}

**类型:** <code>series&nbsp;float</code>

典型价格：`(high + low + close) / 3`。一种常见的价格代理，对收盘价和高低范围的权重相等。常用于体积加权计算。

---

### hlcc4 {#hlcc4}

**类型:** <code>series&nbsp;float</code>

加权收盘价：`(high + low + close + close) / 4`。对收盘价给予额外权重，占总权重的 50%。

---

### hour {#prop-hour}

**类型:** <code>int</code>

返回符号时区中当前 bar 开放时间的小时 (0-23)。

---

### last_bar_index {#last_bar_index}

**类型:** <code>series&nbsp;int</code>

图表上最后一个（最新）bar 的索引。与 `bar_index` 结合，这可用于确定从当前 bar 到图表末尾的距离，例如，`last_bar_index - bar_index` 给出剩余的 bars。

---

### last_bar_time {#last_bar_time}

**类型:** <code>series&nbsp;int</code>

图表上最后一个 bar 的时间戳，采用 UNIX 格式（自 1970-01-01 00:00:00 UTC 以来的毫秒数）。对于确定图表的时间范围或相对于图表结束的基于时间的计算很有用。

---

### low {#low}

**类型:** <code>series&nbsp;float</code>

当前 bar 期间达到的最低价格。在历史 bars 上，这是最低交易价格。在实时 bars 上，该值可能会随着新低的出现而减小。

---

### minute {#prop-minute}

**类型:** <code>int</code>

返回交易品种时区中当前 bar 开市时间的分钟 (0-59)。

---

### month {#prop-month}

**类型:** <code>int</code>

返回交易品种时区中当前 bar 开放时间的月份 (1-12)。

---

### ohlc4 {#ohlc4}

**类型:** <code>series&nbsp;float</code>

平均价格：`(open + high + low + close) / 4`。所有四个 OHLC 价格的算术平均值，代表 bar 的整体价格活动。

---

### open {#open}

**类型:** <code>series&nbsp;float</code>

当前 bar 的开盘价。这是 bar 开盘时的第一个交易价格。在实时 bars 上，一旦 bar 打开，该值就固定。

---

### second {#prop-second}

**类型:** <code>int</code>

返回交易品种时区中当前 bar 开放时间的秒数 (0-59)。

---

### time {#prop-time}

**类型:** <code>series&nbsp;int</code>

bar 左边缘的 UNIX 时间戳。该值以 Unix 纪元的毫秒数表示，并且在当前实时 bar 仍在形成时不会漂移。

---

### time_close {#prop-time_close}

**类型:** <code>series&nbsp;int</code>

bar 右边缘的 UNIX 时间戳。在基于时间的图表上，这是活跃 bar 的预定收盘价。

---

### time_now {#time_now}

**类型:** <code>series&nbsp;int</code>

UNIX 格式的当前实际时间（自 1970-01-01 00:00:00 UTC 以来的毫秒数）。与返回 bar 时间的 `time` 不同，`time_now` 返回实际的当前时间并在实时 bars 上持续更新。

---

### time_tradingday {#time_tradingday}

**类型:** <code>series&nbsp;int</code>

返回当前 bar 所属交换会话的 UTC 午夜标记。对于共享同一交易时段的所有 bars，结果保持相同，这在交易跨日历边界时非常方便。

---

### volume {#volume}

**类型:** <code>series&nbsp;float</code>

当前 bar 的交易量。代表交易的股票或合约总数。如果交易品种的成交量数据不可用，则可能为 `na`。

---

### week_of_year {#prop-week_of_year}

**类型:** <code>int</code>

返回符号时区中当前 bar 开放时间的一年中的第几周 (1-53)。

---

### year {#prop-year}

**类型:** <code>int</code>

返回符号时区中当前 bar 开放时间的年份。

## 函数

### alert {#alert}

```navi
alert(message: series String, freq: input AlertFreq = AlertFreq.OncePerBar)
```

使用给定的消息和频率创建警报。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `message` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  |  |
| `freq` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/AlertFreq">AlertFreq</a></code> | `AlertFreq.OncePerBar` |  |

---

### alert_condition {#alert_condition}

```navi
alert_condition(
    condition: series bool,
    title: const String,
    message: const String
  )
```

创建可用于根据布尔条件触发警报的警报条件。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `condition` | <code>series&nbsp;bool</code> |  |  |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  |  |
| `message` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  |  |

---

### bar_color {#bar_color}

```navi
bar_color(
    color: series Color,
    offset: simple int = 0,
    editable: input bool = true,
    show_last: input int = na,
    title: const String = na,
    display: input PlotDisplay
  )
```

设置图表上价格 bars 的颜色。每个 bar 可以有自己的颜色，允许根据指示器条件进行动态着色。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> |  | 应用于 bar 的颜色。使用 `na` 保留默认颜色。 |
| `offset` | <code>simple&nbsp;int</code> | `0` | 将颜色向左（负）或右（正）移动指定数量的 bars。 |
| `editable` | <code>input&nbsp;bool</code> | `true` | 如果为 true，则可以在样式对话框中编辑该设置。 |
| `show_last` | <code>input&nbsp;int</code> | `na` | 如果设置，则仅对最后 N 个 bars 着色。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 标题显示在样式对话框中。 |
| `display` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> |  | 控制颜色可见的位置。 |

---

### bg_color {#bg_color}

```navi
bg_color(
    color: series Color,
    offset: simple int = 0,
    editable: input bool = true,
    show_last: input int = na,
    title: const String = na,
    display: input PlotDisplay = PlotDisplay.ALL,
    force_overlay: const bool = na
  )
```

用指定的颜色填充图表 bars 的背景。用于突出显示图表上的特定条件或时间段。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> |  | 背景颜色。使用 `na` 表示透明。 |
| `offset` | <code>simple&nbsp;int</code> | `0` | 将背景颜色向左（负）或右（正）移动指定数量的 bars。 |
| `editable` | <code>input&nbsp;bool</code> | `true` | 如果为 true，则可以在样式对话框中编辑该设置。 |
| `show_last` | <code>input&nbsp;int</code> | `na` | 如果设置，则仅填充最后 N 个 bars。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 标题显示在样式对话框中。 |
| `display` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 控制背景可见的位置。 |
| `force_overlay` | <code>const&nbsp;bool</code> | `na` | 如果为 true，力将显示在主图表窗格上。 |

---

### bool {#bool}

<OverloadTabs v-model="_s0" :labels='["<span style=\"color:#005CC5;--shiki-dark:#79B8FF\">bool</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(x</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>","<span style=\"color:#005CC5;--shiki-dark:#79B8FF\">bool</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(x</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>","<span style=\"color:#005CC5;--shiki-dark:#79B8FF\">bool</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(x</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>","<span style=\"color:#005CC5;--shiki-dark:#79B8FF\">bool</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(x</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> T)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>"]' />

<div v-show="_s0 === 0">

将 `x` 值转换为 `bool` 值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `x` | <code>int</code> |  |  |

**返回:** <code>bool</code> — 如果 x 是 `na`、`false` 或等于 `0` 的 `int`/`float` 值，则为 `false`。 `true` 对于所有其他值。

</div>

<div v-show="_s0 === 1">

将浮点数转换为布尔值；如果 na 或零则返回 false，否则返回 true。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `x` | <code>float</code> |  |  |

**返回:** <code>bool</code>

</div>

<div v-show="_s0 === 2">

将布尔值转换为布尔值；如果 na 返回 false，否则返回该值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `x` | <code>bool</code> |  |  |

**返回:** <code>bool</code>

</div>

<div v-show="_s0 === 3">

将任意类型的值转换为bool；如果 na 返回 false，否则返回 true。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `x` | <code>T</code> |  |  |

**返回:** <code>bool</code>

</div>

---

### box {#box}

```navi
box(x: Box): Box
```

将 na 转换为盒子类型。对于初始化稍后将分配的框变量很有用。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `x` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Box">Box</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Box">Box</a></code>

---

### color {#color}

```navi
color(x: Color): Color
```

将 na 投射为颜色

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `x` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code>

---

### day_of_month {#fn-day_of_month}

```navi
day_of_month(timestamp: int, timezone: String = symbol_info.timezone): int
```

从指定时区的 UNIX 时间戳中提取月份中的日期 (1-31)。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `timestamp` | <code>int</code> |  | UNIX 时间戳（以毫秒为单位）。 |
| `timezone` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `symbol_info.timezone` | 用于解释的时区。默认为符号的时区。 |

**返回:** <code>int</code>

---

### day_of_week {#fn-day_of_week}

```navi
day_of_week(timestamp: int, timezone: String = symbol_info.timezone): DayOfWeek
```

从指定时区的 UNIX 时间戳中提取星期几。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `timestamp` | <code>int</code> |  | UNIX 时间戳（以毫秒为单位）。 |
| `timezone` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `symbol_info.timezone` | 用于解释的时区。默认为符号的时区。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/DayOfWeek">DayOfWeek</a></code> — 1（周日）至 7（周六）。

---

### fill {#fill}

<OverloadTabs v-model="_s1" :labels='["<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">fill</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(hline1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> HLine, hline2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> HLine, </span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color.BLUE, title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, editable</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> true</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, fill_gaps</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> false</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, display</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay.ALL)</span>","<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">fill</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(plot1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Plot, plot2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Plot, </span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color.BLUE, title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, editable</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> true</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, show_last</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, fill_gaps</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> false</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, display</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay.ALL)</span>","<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">fill</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(plot1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Plot, plot2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Plot, top_value</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, bottom_value</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, top_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color.BLUE, bottom_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> #3a3c42</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, display</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay.ALL, fill_gaps</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> false</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, editable</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> true</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span>"]' />

<div v-show="_s1 === 0">

用纯色填充两条水平线之间的区域。对于创建视觉区域（例如超买/超卖区域）很有用。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `hline1` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/HLine">HLine</a></code> |  | 第一个水平线句柄（来自 <a class="stdlib-ref" data-key="prelude::hline" href="/zh-CN/api/stdlib/prelude/#hline">hline</a>）。 |
| `hline2` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/HLine">HLine</a></code> |  | 第二个水平线句柄（来自 <a class="stdlib-ref" data-key="prelude::hline" href="/zh-CN/api/stdlib/prelude/#hline">hline</a>）。 |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 填充颜​​色。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 标题显示在样式对话框中。 |
| `editable` | <code>input&nbsp;bool</code> | `true` | 如果为 true，则可以在样式对话框中编辑填充。 |
| `fill_gaps` | <code>const&nbsp;bool</code> | `false` | 如果为真，则填补数据中的空白。 |
| `display` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 控制填充的可见位置。 |

</div>

<div v-show="_s1 === 1">

用纯色填充两个图之间的区域。对于可视化两个系列之间的差异或分布很有用。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `plot1` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Plot">Plot</a></code> |  | 第一个绘图句柄（来自 <a class="stdlib-ref" data-key="prelude::plot" href="/zh-CN/api/stdlib/prelude/#plot">plot</a>）。 |
| `plot2` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Plot">Plot</a></code> |  | 第二个绘图句柄（来自 <a class="stdlib-ref" data-key="prelude::plot" href="/zh-CN/api/stdlib/prelude/#plot">plot</a>）。 |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 填充颜​​色。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 标题显示在样式对话框中。 |
| `editable` | <code>input&nbsp;bool</code> | `true` | 如果为 true，则可以在样式对话框中编辑填充。 |
| `show_last` | <code>input&nbsp;int</code> | `na` | 如果设置，则仅填充最后 N 个 bars。 |
| `fill_gaps` | <code>const&nbsp;bool</code> | `false` | 如果为真，则填补数据中的空白。 |
| `display` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 控制填充的可见位置。 |

</div>

<div v-show="_s1 === 2">

用垂直渐变填充两个图之间的区域。渐变从 `top_value` 处的 `top_color` 过渡到 `bottom_value` 处的 `bottom_color`，从而根据价格水平创建平滑的颜色过渡。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `plot1` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Plot">Plot</a></code> |  | 第一个绘图句柄（来自 <a class="stdlib-ref" data-key="prelude::plot" href="/zh-CN/api/stdlib/prelude/#plot">plot</a>）。 |
| `plot2` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Plot">Plot</a></code> |  | 第二个绘图句柄（来自 <a class="stdlib-ref" data-key="prelude::plot" href="/zh-CN/api/stdlib/prelude/#plot">plot</a>）。 |
| `top_value` | <code>series&nbsp;float</code> |  | 应用顶部颜色的价格水平。 |
| `bottom_value` | <code>series&nbsp;float</code> |  | 应用底部颜色的价格水平。 |
| `top_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 渐变顶部的颜色。 |
| `bottom_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `#3a3c42` | 渐变底部的颜色。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 标题显示在样式对话框中。 |
| `display` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 控制填充的可见位置。 |
| `fill_gaps` | <code>const&nbsp;bool</code> | `false` | 如果为真，则填补数据中的空白。 |
| `editable` | <code>input&nbsp;bool</code> | `true` | 如果为 true，则可以在样式对话框中编辑填充。 |

</div>

---

### fixnan {#fixnan}

```navi
fixnan(value: series T): series T
```

将 `na` 值替换为系列中最后一个非 na 值。延续最新的有效值，有效“填补”数据空白。如果尚未看到有效值，则返回 `na`。对于保持偶尔缺失值的系列的连续性很有用。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `value` | <code>series&nbsp;T</code> |  | 要处理的系列值。 |

**返回:** <code>series&nbsp;T</code> — 当前值（如果不是 `na`），否则为最新的非 na 值，或者 `na`（如果尚未看到有效值）。

---

### float {#float}

<OverloadTabs v-model="_s2" :labels='["<span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(x</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>","<span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(x</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s2 === 0">

将 na 强制转换为浮动

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `x` | <code>float</code> |  |  |

**返回:** <code>float</code>

</div>

<div v-show="_s2 === 1">

将 int 转换为 float。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `x` | <code>int</code> |  |  |

**返回:** <code>float</code>

</div>

---

### hline {#hline}

```navi
hline(
    price: input float,
    title: const String = na,
    color: input Color = Color.BLUE,
    line_style: input HLineStyle = HLineStyle.Dashed,
    line_width: input int = 1,
    editable: input bool = true,
    display: input PlotDisplay = PlotDisplay.ALL
  ): HLine
```

在整个图表上以固定价格水平绘制一条水平线。与 <a class="stdlib-ref" data-key="prelude::plot" href="/zh-CN/api/stdlib/prelude/#plot">plot</a> 不同，价格必须是常量或传入值，而不是序列。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `price` | <code>input&nbsp;float</code> |  | 绘制线的价格水平。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 标题显示在样式对话框中。 |
| `color` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 线条颜色。 |
| `line_style` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/HLineStyle">HLineStyle</a></code> | `HLineStyle.Dashed` | 线条样式：<code>hLineStyle.Solid</code>、<code>hLineStyle.Dashed</code>、<code>hLineStyle.Dotted</code>。 |
| `line_width` | <code>input&nbsp;int</code> | `1` | 线条的宽度（以像素 (1-4) 为单位）。 |
| `editable` | <code>input&nbsp;bool</code> | `true` | 如果为 true，则可以在样式对话框中编辑该线。 |
| `display` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 控制线的可见位置。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/HLine">HLine</a></code> — 可与 <a class="stdlib-ref" data-key="prelude::fill" href="/zh-CN/api/stdlib/prelude/Matrix#fill">fill</a> 一起使用的 hline 句柄。

---

### hour {#fn-hour}

```navi
hour(timestamp: int, timezone: String = symbol_info.timezone): int
```

从指定时区的 UNIX 时间戳中提取小时 (0-23)。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `timestamp` | <code>int</code> |  | UNIX 时间戳（以毫秒为单位）。 |
| `timezone` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `symbol_info.timezone` | 用于解释的时区。默认为符号的时区。 |

**返回:** <code>int</code>

---

### indicator {#indicator}

```navi
indicator(
    title: const String,
    short_title: const String = na,
    overlay: const bool = false,
    format: const Format = Format.Inherit,
    precision: const int = na,
    scale: const ScaleType = na,
    max_bars_back: const int = na,
    timeframe: const String = na,
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

将脚本指定为指标并设置与指标相关的属性。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 脚本的标题。当不使用 `shorttitle` 参数时，它会显示在图表上，并在发布脚本时成为出版物的默认标题。 |
| `short_title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 脚本在图表上的显示名称。如果指定，它将替换大多数图表相关窗口中的 `title` 参数。 |
| `overlay` | <code>const&nbsp;bool</code> | `false` | 如果为 `true`，则如果用户将脚本直接添加到图表，则脚本的视觉效果将显示在主图表窗格上；如果用户将脚本应用到该脚本，则脚本的视觉效果将显示在另一个脚本的窗格中。如果为 `false`，则脚本的视觉效果将显示在单独的窗格中。 |
| `format` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Format">Format</a></code> | `Format.Inherit` | 指定脚本显示值的格式。可能的值：<a class="stdlib-ref" data-key="prelude::Format" href="/zh-CN/api/stdlib/prelude/Format">Format.Inherit</a>、<a class="stdlib-ref" data-key="prelude::Format" href="/zh-CN/api/stdlib/prelude/Format">Format.Price</a>、<a class="stdlib-ref" data-key="prelude::Format" href="/zh-CN/api/stdlib/prelude/Format">Format.Volume</a>、<a class="stdlib-ref" data-key="prelude::Format" href="/zh-CN/api/stdlib/prelude/Format">Format.Percent</a>。选修的。 |
| `precision` | <code>const&nbsp;int</code> | `na` | 指定脚本显示值的浮点后的位数。必须是不大于 16 的非负整数。如果 `format` 设置为 <a class="stdlib-ref" data-key="prelude::Format" href="/zh-CN/api/stdlib/prelude/Format">Format.Inherit</a> 并指定 `precision`，则格式将设置为 <a class="stdlib-ref" data-key="prelude::Format" href="/zh-CN/api/stdlib/prelude/Format">Format.Price</a>。当函数的 `format` 参数使用 <a class="stdlib-ref" data-key="prelude::Format" href="/zh-CN/api/stdlib/prelude/Format">Format.Volume</a> 时，`precision` 参数不会影响结果，因为 <a class="stdlib-ref" data-key="prelude::Format" href="/zh-CN/api/stdlib/prelude/Format">Format.Volume</a> 定义的小数精度规则会取代其他精度设置。选修的。默认值继承自图表符号的精度。 |
| `scale` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/ScaleType">ScaleType</a></code> | `na` | 使用的价格等级。可能的值：<code>scale.right</code>、<code>scale.left</code>、<code>scale.none</code>。 <code>scale.none</code> 值只能与 `overlay = true` 结合使用。选修的。默认情况下，脚本使用与图表相同的比例。使用 <code>scale_type</code> 类型。 |
| `max_bars_back` | <code>const&nbsp;int</code> | `na` | 脚本为每个变量和函数保留的历史缓冲区的长度，它确定可以使用 `[]` 历史引用运算符引用多少个过去的值。 |
| `timeframe` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 向简单脚本添加多时间范围功能。 |
| `timeframe_gaps` | <code>const&nbsp;bool</code> | `true` | 指定当时间范围高于图表的时间范围时指标值如何在图表 bars 上显示。如果是 `true`，则仅当较高的 `timeframe` 值可用时，值才会出现在图表 bar 上，否则返回 `na` （因此会出现“间隙”）。使用 `false` 时，原本存在的间隙将被返回的最新已知值填充，从而避免使用 `na` 值。选修的。默认为 `true`。 |
| `explicit_plot_zorder` | <code>const&nbsp;bool</code> | `false` | 指定脚本的绘图、填充和线条的渲染顺序。如果是 `true`，则按照脚本代码中出现的顺序绘制绘图，每个较新的绘图都绘制在之前的绘图上方。这仅适用于 `plot*()` 函数、<a class="stdlib-ref" data-key="prelude::fill" href="/zh-CN/api/stdlib/prelude/Matrix#fill">fill</a> 和 <a class="stdlib-ref" data-key="prelude::hline" href="/zh-CN/api/stdlib/prelude/#hline">hline</a>。 |
| `max_lines_count` | <code>const&nbsp;int</code> | `50` | 最后显示的 <code>line</code> 绘图的数量。可能的值：1-500。计数为近似值；可能会显示多于指定数量的绘图。 |
| `max_labels_count` | <code>const&nbsp;int</code> | `50` | 最后显示的 <code>label</code> 绘图的数量。可能的值：1-500。计数为近似值；可能会显示多于指定数量的绘图。 |
| `max_boxes_count` | <code>const&nbsp;int</code> | `50` | 最后显示的 <code>box</code> 绘图的数量。可能的值：1-500。计数为近似值；可能会显示多于指定数量的绘图。 |
| `calc_bars_count` | <code>const&nbsp;int</code> | `na` | 将脚本的初始计算限制为最后指定的 bars 数量。默认值为 `na`，在这种情况下，脚本将在所有可用的 bars 上执行。 |
| `max_polylines_count` | <code>const&nbsp;int</code> | `50` | 最后显示的 <code>polyline</code> 绘图的数量。可能的值：1-100。计数为近似值；可能会显示多于指定数量的绘图。 |
| `dynamic_requests` | <code>const&nbsp;bool</code> | `true` | 指定脚本是否可以动态调用 `request.*()` 命名空间中的函数。条件结构（例如 `if`）、循环（例如 `for`）和导出函数的本地范围内允许动态 `request.*()` 调用。此外，此类调用允许其许多参数使用“系列”参数。 |
| `behind_chart` | <code>const&nbsp;bool</code> | `true` | 控制所有绘图和绘图是显示在图表显示后面（如果 `true`）还是显示在图表显示前面（如果 `false`）。该参数仅在`overlay`参数为`true`时生效。 |

**示例**

```navi
// RSI indicator in a separate pane
indicator("My RSI", short_title: "RSI", overlay: false);
plot(ta.rsi(close, 14), title: "RSI");
```

```navi
// Overlay indicator on the price chart
indicator("EMA Cross", overlay: true);
plot(ta.ema(close, 9),  color: Color.GREEN);
plot(ta.ema(close, 21), color: Color.RED);
```

---

### input {#input}

<OverloadTabs v-model="_s3" :labels='["<span style=\"color:#D73A49;--shiki-dark:#F97583\">input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(defval</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, tooltip</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, inline</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, group</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, display</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay.ALL, active</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> true</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#D73A49;--shiki-dark:#F97583\">input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(defval</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, tooltip</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, inline</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, group</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, display</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay.ALL, active</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> true</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>","<span style=\"color:#D73A49;--shiki-dark:#F97583\">input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(defval</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, tooltip</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, inline</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, group</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, display</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay.ALL, active</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> true</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>","<span style=\"color:#D73A49;--shiki-dark:#F97583\">input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(defval</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color, title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, tooltip</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, inline</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, group</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, display</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay.ALL, active</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> true</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color</span>","<span style=\"color:#D73A49;--shiki-dark:#F97583\">input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(defval</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String, title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, tooltip</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, inline</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, group</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, display</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay.ALL, active</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> true</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String</span>","<span style=\"color:#D73A49;--shiki-dark:#F97583\">input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(defval</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> expression, title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, tooltip</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, inline</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, group</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, display</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay.ALL, active</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> true</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s3 === 0">

创建在脚本设置 UI 中公开的传入值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;int</code> |  |  |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` |  |
| `active` | <code>input&nbsp;bool</code> | `true` |  |

**返回:** <code>input&nbsp;int</code>

</div>

<div v-show="_s3 === 1">

创建在脚本设置 UI 中公开的传入值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;float</code> |  |  |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` |  |
| `active` | <code>input&nbsp;bool</code> | `true` |  |

**返回:** <code>input&nbsp;float</code>

</div>

<div v-show="_s3 === 2">

创建在脚本设置 UI 中公开的传入值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;bool</code> |  |  |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` |  |
| `active` | <code>input&nbsp;bool</code> | `true` |  |

**返回:** <code>input&nbsp;bool</code>

</div>

<div v-show="_s3 === 3">

创建在脚本设置 UI 中公开的传入值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> |  |  |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` |  |
| `active` | <code>input&nbsp;bool</code> | `true` |  |

**返回:** <code>input&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code>

</div>

<div v-show="_s3 === 4">

创建在脚本设置 UI 中公开的传入值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  |  |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` |  |
| `active` | <code>input&nbsp;bool</code> | `true` |  |

**返回:** <code>input&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

</div>

<div v-show="_s3 === 5">

创建在脚本设置 UI 中公开的传入值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;expression</code> |  |  |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` |  |
| `active` | <code>input&nbsp;bool</code> | `true` |  |

**返回:** <code>input&nbsp;float</code>

</div>

---

### int {#int}

<OverloadTabs v-model="_s4" :labels='["<span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(x</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(x</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>"]' />

<div v-show="_s4 === 0">

将 na 转换为 int

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `x` | <code>int</code> |  |  |

**返回:** <code>int</code>

</div>

<div v-show="_s4 === 1">

将 float 转换为 int（通过 math.floor 截断为零）。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `x` | <code>float</code> |  |  |

**返回:** <code>int</code>

</div>

---

### label {#label}

```navi
label(x: Label): Label
```

将 na 转换为标签类型。对于初始化稍后分配的标签变量很有用。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `x` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Label">Label</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Label">Label</a></code>

---

### library {#library}

```navi
library(
    title: const String,
    overlay: const bool = false,
    dynamic_requests: const bool = true
  )
```

将脚本标识为库的声明语句。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 图书馆的标题及其标识符。它不能包含空格、特殊字符或以数字开头。它用作出版物的默认标题，并在另一个脚本使用它时在 `import` 语句中唯一标识该库。它也用作图表上的脚本名称。 |
| `overlay` | <code>const&nbsp;bool</code> | `false` | 如果为 `true`，则库导出函数生成的任何视觉效果都将绘制在主图表窗格上。如果是 `false`，它们将出现在单独的窗格中。选修的。默认为 `false`。 |
| `dynamic_requests` | <code>const&nbsp;bool</code> | `true` | 指定库的导出函数是否可以包含动态 `request.*()` 调用 - 即放置在条件结构或循环内的调用，或者接受通常需要更简单限定符的参数的“系列”参数的调用。选修的。默认为 `true`。 |

---

### line {#line}

```navi
line(x: Line): Line
```

将 na 转换为线型。对于初始化稍后将分配的行变量很有用。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `x` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Line">Line</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Line">Line</a></code>

---

### line_fill {#line_fill}

```navi
line_fill(x: LineFill): LineFill
```

将 na 转换为行填充类型。对于初始化稍后分配的行填充变量很有用。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `x` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/LineFill">LineFill</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/LineFill">LineFill</a></code>

---

### max_bars_back {#max_bars_back}

```navi
max_bars_back(variable: variableref, num: const int)
```

通过 `[]` 历史引用运算符设置特定变量或内置系列可用的历史 bars 的最大数量。如果 bars 的实际数量超过最大值，则只有最新的 bars 可用。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `variable` | <code>variableref</code> |  |  |
| `num` | <code>const&nbsp;int</code> |  | 历史 bars 的最大数量。 |

---

### minute {#fn-minute}

```navi
minute(timestamp: int, timezone: String = symbol_info.timezone): int
```

从指定时区的 UNIX 时间戳中提取分钟 (0-59)。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `timestamp` | <code>int</code> |  | UNIX 时间戳（以毫秒为单位）。 |
| `timezone` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `symbol_info.timezone` | 用于解释的时区。默认为符号的时区。 |

**返回:** <code>int</code>

---

### month {#fn-month}

```navi
month(timestamp: int, timezone: String = symbol_info.timezone): int
```

从指定时区的 UNIX 时间戳中提取月份 (1-12)。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `timestamp` | <code>int</code> |  | UNIX 时间戳（以毫秒为单位）。 |
| `timezone` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `symbol_info.timezone` | 用于解释的时区。默认为符号的时区。 |

**返回:** <code>int</code>

---

### na {#na}

```navi
na(value: any): bool
```

测试 `value` 是否为 `na`（不可用）。对于处理数据间隙、系列缺失值或未初始化变量至关重要。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `value` | <code>any</code> |  | 要测试的值。可以是任何类型。 |

**返回:** <code>bool</code> — 如果值未定义或缺失，则为 `true`，否则为 `false`。

---

### nz {#nz}

<OverloadTabs v-model="_s5" :labels='["<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">nz</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(source</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> T, replacement</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> T)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> T</span>","<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">nz</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(source</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, replacement</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">nz</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(source</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, replacement</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>","<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">nz</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(source</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color, replacement</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> #000000</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color</span>"]' />

<div v-show="_s5 === 0">

将 `na` 值替换为指定的替换值。如果 `source` 不是 `na`，则返回 `source` 不变。如果 `source` 是 `na`，则返回 `replacement`。对于确保计算不会传播 `na` 值至关重要。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>T</code> |  | 要检查的值。 |
| `replacement` | <code>T</code> |  | 如果 `source` 是 `na`，则返回值。 |

**返回:** <code>T</code>

</div>

<div v-show="_s5 === 1">

将 `na` 整数值替换为替换值（默认 0）。当您需要对丢失的整数数据进行数字回退时很有用。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>int</code> |  | 要检查的整数值。 |
| `replacement` | <code>int</code> | `0` | 如果 `source` 是 `na`，则返回值。默认为 0。 |

**返回:** <code>int</code>

</div>

<div v-show="_s5 === 2">

将 `na` 浮点值替换为替换值（默认 0.0）。当您需要为缺失的价格或计算数据提供数字回退时很有用。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>float</code> |  | 要检查的浮点值。 |
| `replacement` | <code>float</code> | `0` | 如果 `source` 是 `na`，则返回值。默认为 0.0。 |

**返回:** <code>float</code>

</div>

<div v-show="_s5 === 3">

将 `na` 颜色值替换为替换值（默认黑色）。当您需要可见的后备颜色来进行条件着色时非常有用。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> |  | 要检查的颜色值。 |
| `replacement` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `#000000` | 如果 `source` 是 `na`，则返回值。默认为#000000。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code>

</div>

---

### plot {#plot}

```navi
plot(
    series: series float,
    title: const String = na,
    color: series Color = Color.BLUE,
    line_width: input int = 1,
    style: input PlotStyle = PlotStyle.Line,
    track_price: input bool = false,
    hist_base: input float = 0,
    offset: simple int = 0,
    join: input bool = false,
    editable: input bool = true,
    show_last: input int = na,
    display: input PlotDisplay = PlotDisplay.ALL,
    format: input Format = na,
    precision: input int = na,
    force_overlay: const bool = na,
    line_style: input PlotStyle = PlotStyle.Line
  ): Plot
```

在图表上绘制一系列数据作为可视化表示。支持线条、柱状图、面积、柱状图等多种样式。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `series` | <code>series&nbsp;float</code> |  | 要绘制的一系列值。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 绘图的标题，显示在样式对话框中并作为数据窗口工具提示。 |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 绘制元素的颜色。 |
| `line_width` | <code>input&nbsp;int</code> | `1` | 绘制线的宽度，以像素为单位 (1-4)。 |
| `style` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotStyle">PlotStyle</a></code> | `PlotStyle.Line` | 绘图样式：<code>plot.style_line</code>、<code>plot.style_histogram</code>、<code>plot.style_area</code>、<code>plot.style_columns</code> 等。 |
| `track_price` | <code>input&nbsp;bool</code> | `false` | 如果为 true，则会在最后一个值处显示一条水平价格线。 |
| `hist_base` | <code>input&nbsp;float</code> | `0` | 直方图/列样式的基值。条形图从此水平延伸至系列值。 |
| `offset` | <code>simple&nbsp;int</code> | `0` | 将绘图向左（负）或右（正）移动指定数量的 bars。 |
| `join` | <code>input&nbsp;bool</code> | `false` | 如果为真，则用线连接系列中的间隙。 |
| `editable` | <code>input&nbsp;bool</code> | `true` | 如果为 true，则可以在样式对话框中编辑打印样式。 |
| `show_last` | <code>input&nbsp;int</code> | `na` | 如果设置，则仅显示最后 N 个 bars。 |
| `display` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 控制绘图的显示位置。使用 <code>display.all</code>、<code>display.none</code>、<code>display.pane</code>、<code>display.price_scale</code> 等。 |
| `format` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Format">Format</a></code> | `na` | 覆盖数据窗口中该图的默认数字格式。 |
| `precision` | <code>input&nbsp;int</code> | `na` | 显示的小数位数。 |
| `force_overlay` | <code>const&nbsp;bool</code> | `na` | 如果为 true，则强制绘图显示在主图表窗格上。 |
| `line_style` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotStyle">PlotStyle</a></code> | `PlotStyle.Line` | 线条样式：<a class="stdlib-ref" data-key="prelude::PlotStyle" href="/zh-CN/api/stdlib/prelude/PlotStyle">PlotStyle.Line</a>、<a class="stdlib-ref" data-key="prelude::PlotStyle" href="/zh-CN/api/stdlib/prelude/PlotStyle">PlotStyle.Line</a>、<a class="stdlib-ref" data-key="prelude::PlotStyle" href="/zh-CN/api/stdlib/prelude/PlotStyle">PlotStyle.Line</a>。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Plot">Plot</a></code> — 可与 <a class="stdlib-ref" data-key="prelude::fill" href="/zh-CN/api/stdlib/prelude/Matrix#fill">fill</a> 一起使用的绘图句柄来填充绘图之间的区域。

**示例**

```navi
// Plot a simple moving average
let smaLine = plot(ta.sma(close, 20), title: "SMA 20", color: Color.BLUE);
```

```navi
// Plot two EMAs and fill between them
let p1 = plot(ta.ema(close, 9), title: "EMA 9", color: Color.GREEN); let p2 =
plot(ta.ema(close, 21), title: "EMA 21", color: Color.RED); fill(p1, p2,
color: Color.new(Color.GRAY, 80));
```

---

### plot_arrow {#plot_arrow}

```navi
plot_arrow(
    series: series float,
    title: const String = na,
    color_up: series Color = Color.BLUE,
    color_down: series Color = Color.BLACK,
    offset: simple int = 0,
    min_height: input int = 5,
    max_height: input int = 100,
    editable: input bool = true,
    show_last: input int = na,
    display: input PlotDisplay = PlotDisplay.ALL,
    format: input Format = na,
    precision: input int = na,
    force_overlay: const bool = na
  )
```

根据系列的符号在图表上绘制向上和向下箭头。当值为正时绘制向上箭头，当值为负时绘制向下箭头。箭头高度与绝对值成正比，在 `minheight` 和 `maxheight` 之间缩放。对于可视化动量或方向变化很有用。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `series` | <code>series&nbsp;float</code> |  | 数据系列。正值绘制向上箭头，负值绘制向下箭头。 `na` 或零值不会绘制任何内容。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 标题显示在样式对话框和数据窗口中。 |
| `color_up` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 向上箭头的颜色。 |
| `color_down` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `Color.BLACK` | 向下箭头的颜色。 |
| `offset` | <code>simple&nbsp;int</code> | `0` | 将箭头向左（负）或右（正）移动指定的 bars。 |
| `min_height` | <code>input&nbsp;int</code> | `5` | 最小箭头高度（以像素为单位）。 |
| `max_height` | <code>input&nbsp;int</code> | `100` | 最大箭头高度（以像素为单位）。 |
| `editable` | <code>input&nbsp;bool</code> | `true` | 如果为 true，则可以在样式对话框中编辑绘图。 |
| `show_last` | <code>input&nbsp;int</code> | `na` | 如果设置，则仅显示最后 N 个 bars 上的箭头。 |
| `display` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 控制箭头的显示位置。 |
| `format` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Format">Format</a></code> | `na` | 覆盖数据窗口中的默认数字格式。 |
| `precision` | <code>input&nbsp;int</code> | `na` | 显示的小数位数。 |
| `force_overlay` | <code>const&nbsp;bool</code> | `na` | 如果为 true，力将显示在主图表窗格上。 |

---

### plot_bar {#plot_bar}

```navi
plot_bar(
    open: series float,
    high: series float,
    low: series float,
    close: series float,
    title: const String = na,
    color: series Color = Color.BLUE,
    editable: input bool = true,
    show_last: input int = na,
    display: input PlotDisplay = PlotDisplay.ALL,
    format: input Format = na,
    precision: input int = na,
    force_overlay: const bool = na
  )
```

在图表上绘制 OHLC bars。每个 bar 将开盘价、最高价、最低价和收盘价显示为传统的 bar 图表元素。对于覆盖自定义 OHLC 数据或显示转换后的价格数据非常有用。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `open` | <code>series&nbsp;float</code> |  | 每个 bar 的开盘价。 |
| `high` | <code>series&nbsp;float</code> |  | 每个 bar 的价格很高。 |
| `low` | <code>series&nbsp;float</code> |  | 每个 bar 的低价。 |
| `close` | <code>series&nbsp;float</code> |  | 每个 bar 的收盘价。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 标题显示在样式对话框和数据窗口中。 |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 条形颜色。 |
| `editable` | <code>input&nbsp;bool</code> | `true` | 如果为 true，则可以在样式对话框中编辑绘图。 |
| `show_last` | <code>input&nbsp;int</code> | `na` | 如果设置，则仅显示最后 N 个 bars。 |
| `display` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 控制 bars 的显示位置。 |
| `format` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Format">Format</a></code> | `na` | 覆盖数据窗口中的默认数字格式。 |
| `precision` | <code>input&nbsp;int</code> | `na` | 显示的小数位数。 |
| `force_overlay` | <code>const&nbsp;bool</code> | `na` | 如果为 true，力将显示在主图表窗格上。 |

---

### plot_candle {#plot_candle}

```navi
plot_candle(
    open: series float,
    high: series float,
    low: series float,
    close: series float,
    title: const String = na,
    color: series Color = Color.BLUE,
    wick_color: series Color = Color.BLUE,
    editable: input bool = true,
    show_last: input int = na,
    border_color: series Color = Color.BLACK,
    display: input PlotDisplay = PlotDisplay.ALL,
    format: input Format = na,
    precision: input int = na,
    force_overlay: const bool = na
  )
```

在图表上绘制烛台。每根蜡烛均显示开盘价、最高价、最低价和收盘价，并带有实体和影线。对于覆盖自定义烛台数据（例如 Heikin-Ashi）或显示转换后的价格系列非常有用。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `open` | <code>series&nbsp;float</code> |  | 每根蜡烛的开盘价。 |
| `high` | <code>series&nbsp;float</code> |  | 每根蜡烛的价格很高。 |
| `low` | <code>series&nbsp;float</code> |  | 每支蜡烛的低价。 |
| `close` | <code>series&nbsp;float</code> |  | 每根蜡烛的收盘价。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 标题显示在样式对话框和数据窗口中。 |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 蜡烛体颜色。 |
| `wick_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 烛芯颜色。 |
| `editable` | <code>input&nbsp;bool</code> | `true` | 如果为 true，则可以在样式对话框中编辑绘图。 |
| `show_last` | <code>input&nbsp;int</code> | `na` | 如果设置，则仅显示最后 N 根蜡烛。 |
| `border_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `Color.BLACK` | 蜡烛体边框颜色。 |
| `display` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 控制蜡烛的显示位置。 |
| `format` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Format">Format</a></code> | `na` | 覆盖数据窗口中的默认数字格式。 |
| `precision` | <code>input&nbsp;int</code> | `na` | 显示的小数位数。 |
| `force_overlay` | <code>const&nbsp;bool</code> | `na` | 如果为 true，力将显示在主图表窗格上。 |

---

### plot_char {#plot_char}

<OverloadTabs v-model="_s6" :labels='["<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">plot_char</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">series:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, char</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> \"⭐\"</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, location</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Location </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Location.AboveBar, </span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color.BLUE, offset</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> simple</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color.BLUE, editable</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> true</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, size</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Size </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Size.Auto, show_last</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, display</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay.ALL, format</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Format </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, precision</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, force_overlay</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span>","<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">plot_char</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">series:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, char</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> \"⭐\"</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, location</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Location </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Location.AboveBar, </span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color.BLUE, offset</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> simple</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color.BLUE, editable</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> true</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, size</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Size </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Size.Auto, show_last</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, display</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay.ALL, format</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Format </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, precision</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, force_overlay</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span>"]' />

<div v-show="_s6 === 0">

在系列具有非 na 值的每个 bar 处绘制一个字符。该字符基于 `location` 相对于 bar 定位。用于在图表上标记特定事件或条件。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `series` | <code>series&nbsp;float</code> |  | 数据系列。当值不是 `na` 时，将绘制字符。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 标题显示在样式对话框和数据窗口中。 |
| `char` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `"⭐"` | 要显示的字符（支持 Unicode）。 |
| `location` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Location">Location</a></code> | `Location.AboveBar` | 垂直位置：<code>location.abovebar</code>、<code>location.belowbar</code>、<code>location.top</code>、<code>location.bottom</code>、<code>location.absolute</code>。 |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 人物颜色。 |
| `offset` | <code>simple&nbsp;int</code> | `0` | 将字符向左（负）或右（正）移动 bars。 |
| `text` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 显示在角色附近的可选文本。 |
| `text_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 可选文本的颜色。 |
| `editable` | <code>input&nbsp;bool</code> | `true` | 如果为 true，则可以在样式对话框中编辑绘图。 |
| `size` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Size">Size</a></code> | `Size.Auto` | 字符大小：<a class="stdlib-ref" data-key="prelude::Size" href="/zh-CN/api/stdlib/prelude/Size">Size.Auto</a>、<a class="stdlib-ref" data-key="prelude::Size" href="/zh-CN/api/stdlib/prelude/Size">Size.Tiny</a>、<a class="stdlib-ref" data-key="prelude::Size" href="/zh-CN/api/stdlib/prelude/Size">Size.Small</a>、<a class="stdlib-ref" data-key="prelude::Size" href="/zh-CN/api/stdlib/prelude/Size">Size.Normal</a>、<a class="stdlib-ref" data-key="prelude::Size" href="/zh-CN/api/stdlib/prelude/Size">Size.Large</a>、<a class="stdlib-ref" data-key="prelude::Size" href="/zh-CN/api/stdlib/prelude/Size">Size.Huge</a>。 |
| `show_last` | <code>input&nbsp;int</code> | `na` | 如果设置，则仅显示最后 N 个 bars 上的字符。 |
| `display` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 控制字符的显示位置。 |
| `format` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Format">Format</a></code> | `na` | 覆盖数据窗口中的默认数字格式。 |
| `precision` | <code>input&nbsp;int</code> | `na` | 显示的小数位数。 |
| `force_overlay` | <code>const&nbsp;bool</code> | `na` | 如果为 true，力将显示在主图表窗格上。 |

</div>

<div v-show="_s6 === 1">

在布尔系列为 true 的每个 bar 处绘制一个字符。当值为 `true` 时绘制字符。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `series` | <code>series&nbsp;bool</code> |  | 布尔系列。当 true 时，将绘制一个字符。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 标题显示在样式对话框和数据窗口中。 |
| `char` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `"⭐"` | 要显示的字符（支持 Unicode）。 |
| `location` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Location">Location</a></code> | `Location.AboveBar` | 垂直位置：<code>location.abovebar</code>、<code>location.belowbar</code>、<code>location.top</code>、<code>location.bottom</code>、<code>location.absolute</code>。 |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 人物颜色。 |
| `offset` | <code>simple&nbsp;int</code> | `0` | 将字符向左（负）或右（正）移动 bars。 |
| `text` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 显示在角色附近的可选文本。 |
| `text_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 可选文本的颜色。 |
| `editable` | <code>input&nbsp;bool</code> | `true` | 如果为 true，则可以在样式对话框中编辑绘图。 |
| `size` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Size">Size</a></code> | `Size.Auto` | 字符大小：<a class="stdlib-ref" data-key="prelude::Size" href="/zh-CN/api/stdlib/prelude/Size">Size.Auto</a>、<a class="stdlib-ref" data-key="prelude::Size" href="/zh-CN/api/stdlib/prelude/Size">Size.Tiny</a>、<a class="stdlib-ref" data-key="prelude::Size" href="/zh-CN/api/stdlib/prelude/Size">Size.Small</a>、<a class="stdlib-ref" data-key="prelude::Size" href="/zh-CN/api/stdlib/prelude/Size">Size.Normal</a>、<a class="stdlib-ref" data-key="prelude::Size" href="/zh-CN/api/stdlib/prelude/Size">Size.Large</a>、<a class="stdlib-ref" data-key="prelude::Size" href="/zh-CN/api/stdlib/prelude/Size">Size.Huge</a>。 |
| `show_last` | <code>input&nbsp;int</code> | `na` | 如果设置，则仅显示最后 N 个 bars 上的字符。 |
| `display` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 控制字符的显示位置。 |
| `format` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Format">Format</a></code> | `na` | 覆盖数据窗口中的默认数字格式。 |
| `precision` | <code>input&nbsp;int</code> | `na` | 显示的小数位数。 |
| `force_overlay` | <code>const&nbsp;bool</code> | `na` | 如果为 true，力将显示在主图表窗格上。 |

</div>

---

### plot_shape {#plot_shape}

<OverloadTabs v-model="_s7" :labels='["<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">plot_shape</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">series:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, style</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Shape </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Shape.XCross, location</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Location </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Location.AboveBar, </span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color.BLUE, offset</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> simple</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color.BLUE, editable</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> true</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, size</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Size </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Size.Auto, show_last</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, display</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay.ALL, format</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Format </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, precision</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, force_overlay</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span>","<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">plot_shape</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">series:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, style</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Shape </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Shape.XCross, location</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Location </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Location.AboveBar, </span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color.BLUE, offset</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> simple</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color.BLUE, editable</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> true</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, size</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Size </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Size.Auto, show_last</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, display</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay.ALL, format</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Format </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, precision</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, force_overlay</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span>"]' />

<div v-show="_s7 === 0">

在每个 bar 处绘制一个形状，其中该系列具有非 na 值。提供各种形状样式（箭头、圆形、十字形等）。该形状基于 `location` 相对于 bar 定位。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `series` | <code>series&nbsp;float</code> |  | 数据系列。当值不是 `na` 时，将绘制形状。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 标题显示在样式对话框和数据窗口中。 |
| `style` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Shape">Shape</a></code> | `Shape.XCross` | 形状样式：<code>shape.xcross</code>、<code>shape.cross</code>、<code>shape.triangleup</code>、<code>shape.triangledown</code>、<code>shape.flag</code>、<code>shape.circle</code>、<code>shape.arrowup</code>、<code>shape.arrowdown</code>、<code>shape.labelup</code>、<code>shape.labeldown</code>、<code>shape.square</code>、<code>shape.diamond</code>。 |
| `location` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Location">Location</a></code> | `Location.AboveBar` | 垂直位置：<code>location.abovebar</code>、<code>location.belowbar</code>、<code>location.top</code>、<code>location.bottom</code>、<code>location.absolute</code>。 |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 形状颜色。 |
| `offset` | <code>simple&nbsp;int</code> | `0` | 将形状向左（负）或右（正）移动 bars。 |
| `text` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 形状附近显示的可选文本。 |
| `text_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 可选文本的颜色。 |
| `editable` | <code>input&nbsp;bool</code> | `true` | 如果为 true，则可以在样式对话框中编辑绘图。 |
| `size` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Size">Size</a></code> | `Size.Auto` | 形状大小：<a class="stdlib-ref" data-key="prelude::Size" href="/zh-CN/api/stdlib/prelude/Size">Size.Auto</a>、<a class="stdlib-ref" data-key="prelude::Size" href="/zh-CN/api/stdlib/prelude/Size">Size.Tiny</a>、<a class="stdlib-ref" data-key="prelude::Size" href="/zh-CN/api/stdlib/prelude/Size">Size.Small</a>、<a class="stdlib-ref" data-key="prelude::Size" href="/zh-CN/api/stdlib/prelude/Size">Size.Normal</a>、<a class="stdlib-ref" data-key="prelude::Size" href="/zh-CN/api/stdlib/prelude/Size">Size.Large</a>、<a class="stdlib-ref" data-key="prelude::Size" href="/zh-CN/api/stdlib/prelude/Size">Size.Huge</a>。 |
| `show_last` | <code>input&nbsp;int</code> | `na` | 如果设置，则仅显示最后 N 个 bars 上的形状。 |
| `display` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 控制形状的显示位置。 |
| `format` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Format">Format</a></code> | `na` | 覆盖数据窗口中的默认数字格式。 |
| `precision` | <code>input&nbsp;int</code> | `na` | 显示的小数位数。 |
| `force_overlay` | <code>const&nbsp;bool</code> | `na` | 如果为 true，力将显示在主图表窗格上。 |

</div>

<div v-show="_s7 === 1">

在布尔级数为真的每个 bar 处绘制一个形状。当值为 `true` 时绘制形状。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `series` | <code>series&nbsp;bool</code> |  | 布尔系列。当为 true 时，会绘制一个形状。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 标题显示在样式对话框和数据窗口中。 |
| `style` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Shape">Shape</a></code> | `Shape.XCross` | 形状样式：<code>shape.xcross</code>、<code>shape.cross</code>、<code>shape.triangleup</code>、<code>shape.triangledown</code>、<code>shape.flag</code>、<code>shape.circle</code>、<code>shape.arrowup</code>、<code>shape.arrowdown</code>、<code>shape.labelup</code>、<code>shape.labeldown</code>、<code>shape.square</code>、<code>shape.diamond</code>。 |
| `location` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Location">Location</a></code> | `Location.AboveBar` | 垂直位置：<code>location.abovebar</code>、<code>location.belowbar</code>、<code>location.top</code>、<code>location.bottom</code>、<code>location.absolute</code>。 |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 形状颜色。 |
| `offset` | <code>simple&nbsp;int</code> | `0` | 将形状向左（负）或右（正）移动 bars。 |
| `text` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 形状附近显示的可选文本。 |
| `text_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 可选文本的颜色。 |
| `editable` | <code>input&nbsp;bool</code> | `true` | 如果为 true，则可以在样式对话框中编辑绘图。 |
| `size` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Size">Size</a></code> | `Size.Auto` | 形状大小：<a class="stdlib-ref" data-key="prelude::Size" href="/zh-CN/api/stdlib/prelude/Size">Size.Auto</a>、<a class="stdlib-ref" data-key="prelude::Size" href="/zh-CN/api/stdlib/prelude/Size">Size.Tiny</a>、<a class="stdlib-ref" data-key="prelude::Size" href="/zh-CN/api/stdlib/prelude/Size">Size.Small</a>、<a class="stdlib-ref" data-key="prelude::Size" href="/zh-CN/api/stdlib/prelude/Size">Size.Normal</a>、<a class="stdlib-ref" data-key="prelude::Size" href="/zh-CN/api/stdlib/prelude/Size">Size.Large</a>、<a class="stdlib-ref" data-key="prelude::Size" href="/zh-CN/api/stdlib/prelude/Size">Size.Huge</a>。 |
| `show_last` | <code>input&nbsp;int</code> | `na` | 如果设置，则仅显示最后 N 个 bars 上的形状。 |
| `display` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 控制形状的显示位置。 |
| `format` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Format">Format</a></code> | `na` | 覆盖数据窗口中的默认数字格式。 |
| `precision` | <code>input&nbsp;int</code> | `na` | 显示的小数位数。 |
| `force_overlay` | <code>const&nbsp;bool</code> | `na` | 如果为 true，力将显示在主图表窗格上。 |

</div>

---

### second {#fn-second}

```navi
second(timestamp: int, timezone: String = symbol_info.timezone): int
```

从指定时区的 UNIX 时间戳中提取秒数 (0-59)。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `timestamp` | <code>int</code> |  | UNIX 时间戳（以毫秒为单位）。 |
| `timezone` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `symbol_info.timezone` | 用于解释的时区。默认为符号的时区。 |

**返回:** <code>int</code>

---

### strategy {#strategy}

```navi
strategy(
    title: const String,
    short_title: const String = na,
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
    currency: simple String = symbol_info.currency,
    slippage: const int = 0,
    commission_type: const CommissionType = CommissionType.Percent,
    commission_value: const float = 0,
    process_orders_on_close: const bool = false,
    close_entries_rule: const String = "FIFO",
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

将脚本指定为策略并设置与策略相关的属性。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 脚本的标题。未设置 `shorttitle` 时显示在图表上，并成为发布时的默认标题。 |
| `short_title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 图表和大多数图表相关窗口中显示的脚本的缩写显示名称。选修的。 |
| `overlay` | <code>const&nbsp;bool</code> | `false` | 如果是 `true`，则策略的视觉效果将绘制在主图表窗格上。如果是 `false`，它们将出现在单独的窗格中。选修的。默认为 `false`。 |
| `format` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Format">Format</a></code> | `Format.Inherit` | 指定策略显示值的格式。可能的值：<a class="stdlib-ref" data-key="prelude::Format" href="/zh-CN/api/stdlib/prelude/Format">Format.Inherit</a>、<a class="stdlib-ref" data-key="prelude::Format" href="/zh-CN/api/stdlib/prelude/Format">Format.Price</a>、<a class="stdlib-ref" data-key="prelude::Format" href="/zh-CN/api/stdlib/prelude/Format">Format.Volume</a>、<a class="stdlib-ref" data-key="prelude::Format" href="/zh-CN/api/stdlib/prelude/Format">Format.Percent</a>。选修的。 |
| `precision` | <code>const&nbsp;int</code> | `na` | 策略显示值的小数位数。必须是不大于16的非负整数。当使用<a class="stdlib-ref" data-key="prelude::Format" href="/zh-CN/api/stdlib/prelude/Format">Format.Volume</a>时，此设置无效。选修的。默认值继承自图表符号的精度。 |
| `scale` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/ScaleType">ScaleType</a></code> | `na` | 使用的价格范围。可能的值：<code>scale.right</code>、<code>scale.left</code>、<code>scale.none</code>。仅当 `overlay = true` 时才允许 <code>scale.none</code>。选修的。 |
| `pyramiding` | <code>const&nbsp;int</code> | `0` | 同一时间允许在同一方向上进入的最大数量。选修的。默认值为 `0`，表示每个方向仅允许一个条目。 |
| `calc_on_order_fills` | <code>const&nbsp;bool</code> | `false` | 如果是 `true`，则只要在 bar 期间执行订单，策略就会重新计算其逻辑，而不仅仅是在 bar 收盘时。选修的。默认为 `false`。 |
| `calc_on_every_tick` | <code>const&nbsp;bool</code> | `false` | 如果是 `true`，策略会在每次传入的实时价格更新（变动点）时重新计算。如果是 `false`，则计算仅在 bar 关闭时发生。选修的。默认为 `false`。 |
| `max_bars_back` | <code>const&nbsp;int</code> | `na` | 为所有变量和函数保留的历史缓冲区的深度，控制可以使用 `[]` 运算符读取多少个过去的值。选修的。 |
| `backtest_fill_limits_assumption` | <code>const&nbsp;int</code> | `0` | 在假设执行限价单之前，市场必须移动超出限价的价格变动数。选修的。默认为 `0`。 |
| `default_qty_type` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/DefaultQtyType">DefaultQtyType</a></code> | `DefaultQtyType.Fixed` | 确定如何解释 `default_qty_value`。可能的值：<code>strategy.fixed</code>、<code>strategy.percent_of_equity</code>、<code>strategy.cash</code>。选修的。默认值为 <code>strategy.fixed</code>。 |
| `default_qty_value` | <code>const&nbsp;float</code> | `1` | 在入场调用中未指定数量时使用的默认订单大小。它的含义取决于`default_qty_type`。选修的。默认为 `1.0`。 |
| `initial_capital` | <code>const&nbsp;float</code> | `1000000` | 回测开始时策略可用的启动资金，以 `currency` 表示。选修的。默认为 `1000000.0`。 |
| `currency` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `symbol_info.currency` | 策略跟踪资本、利润和损失所用的基础货币。选修的。默认为图表符号的货币。 |
| `slippage` | <code>const&nbsp;int</code> | `0` | 添加到每个订单执行价格以模拟执行滑点的价格变动数量。选修的。默认为 `0`。 |
| `commission_type` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/CommissionType">CommissionType</a></code> | `CommissionType.Percent` | 指定如何计算交易佣金。可能的值：`strategy.commission.percent`、`strategy.commission.cash_per_contract`、`strategy.commission.cash_per_order`。选修的。默认为 `strategy.commission.percent`。 |
| `commission_value` | <code>const&nbsp;float</code> | `0` | 佣金金额，根据 `commission_type` 解释。选修的。默认为 `0.0`。 |
| `process_orders_on_close` | <code>const&nbsp;bool</code> | `false` | 如果是 `true`，则在 bar 期间生成的订单将按该 bar 的收盘价处理，而不是在下一个 bar 的开盘价处理。选修的。默认为 `false`。 |
| `close_entries_rule` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `"FIFO"` | 关闭多个打开的条目时应用的排序规则。 `\"FIFO` 首先关闭最旧的条目； `ANY` 允许关闭调用通过 ID 定位特定条目。选修的。默认为 `FIFO\"`。 |
| `margin_long` | <code>const&nbsp;float</code> | `100` | 多头头寸的保证金要求，以头寸价值的百分比表示。值 `100` 表示没有杠杆。选修的。默认为 `100.0`。 |
| `margin_short` | <code>const&nbsp;float</code> | `100` | 空头头寸的保证金要求，以头寸价值的百分比表示。值 `100` 表示没有杠杆。选修的。默认为 `100.0`。 |
| `explicit_plot_zorder` | <code>const&nbsp;bool</code> | `false` | 如果 `true`，绘图、填充和线条将按照它们在脚本代码中出现的顺序呈现，后面的声明绘制在前面的声明之上。选修的。默认为 `false`。 |
| `max_lines_count` | <code>const&nbsp;int</code> | `50` | 图表上保存的最新 `line` 绘图的最大数量。可能的值：1–500。选修的。默认为 `50`。 |
| `max_labels_count` | <code>const&nbsp;int</code> | `50` | 图表上保存的最新 `label` 绘图的最大数量。可能的值：1–500。选修的。默认为 `50`。 |
| `max_boxes_count` | <code>const&nbsp;int</code> | `50` | 图表上保存的最新 `box` 绘图的最大数量。可能的值：1–500。选修的。默认为 `50`。 |
| `calc_bars_count` | <code>const&nbsp;int</code> | `na` | 将回测限制为指定的最新 bars 数量。当 `na` 时，策略在所有可用历史记录上运行。选修的。默认为 `na`。 |
| `risk_free_rate` | <code>const&nbsp;float</code> | `2` | 计算夏普比率和索尔蒂诺比率时使用的年度无风险利率（百分比）。选修的。默认为 `2.0`。 |
| `use_bar_magnifier` | <code>const&nbsp;bool</code> | `false` | 如果是 `true`，引擎会使用更高分辨率的柱内数据来确定每个 bar 内更准确的订单执行价格。选修的。默认为 `false`。 |
| `fill_orders_on_standard_ohlc` | <code>const&nbsp;bool</code> | `false` | 如果 `true`，限价单和止损单将根据 bar 的标准 OHLC 价格执行，忽略任何柱内价格路径。选修的。默认为 `false`。 |
| `max_polylines_count` | <code>const&nbsp;int</code> | `50` | 图表上保存的最新 `polyline` 绘图的最大数量。可能的值：1–100。选修的。默认为 `50`。 |
| `dynamic_requests` | <code>const&nbsp;bool</code> | `true` | 指定策略是否可以在条件结构或循环内包含动态 `request.*()` 调用，或者接受通常为非系列参数的“系列”参数的调用。选修的。默认为 `true`。 |
| `behind_chart` | <code>const&nbsp;bool</code> | `true` | 如果是 `true`，则所有图表和绘图都将呈现在图表的烛台或 bars 后面。仅当 `overlay = true` 时生效。选修的。默认为 `true`。 |

---

### string {#string}

```navi
string(x: String): String
```

将 na 转换为字符串

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `x` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

---

### table {#table}

```navi
table(x: Table): Table
```

将 na 转换为表类型。对于初始化稍后分配的表变量很有用。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `x` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Table">Table</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Table">Table</a></code>

---

### time {#fn-time}

<OverloadTabs v-model="_s8" :labels='["<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">time</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(timeframe</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String, session</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, timezone</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> symbol_info.timezone)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">time</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(timeframe</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String, session</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, bars_back</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, timeframe_bars_back</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>"]' />

<div v-show="_s8 === 0">

解析由 `timeframe` 和 `session` 选择的 bar 存储桶的打开时间戳。当您希望在特定时区解释目标会话时，此重载非常方便。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `timeframe` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 时间范围代码，例如 `\"D`、`60` 或 `W\"`。 |
| `session` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 可选的会话窗口。省略时，将使用交易品种的常规会话规则。 |
| `timezone` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `symbol_info.timezone` | 评估会话字符串时使用的时区。 |

**返回:** <code>series&nbsp;int</code> — 匹配 bar 开始的毫秒时间戳，或当前 bar 不属于请求的会话时的 `na`。

</div>

<div v-show="_s8 === 1">

将当前图表 bar 映射到另一个时间范围并返回该目标 bar 的开盘时间戳。查找可以首先在图表时间范围上移动，然后再在目标时间范围上移动。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `timeframe` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 目的地时间范围。空字符串回落至图表时间范围。 |
| `session` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 用于目标查找的可选会话过滤器。 |
| `bars_back` | <code>series&nbsp;int</code> | `0` | 在映射之前在图表时间范围上应用的偏移量。 |
| `timeframe_bars_back` | <code>series&nbsp;int</code> | `0` | 找到目标 bar 后应用额外偏移。 |

**返回:** <code>series&nbsp;int</code>

</div>

---

### time_close {#fn-time_close}

<OverloadTabs v-model="_s9" :labels='["<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">time_close</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(timeframe</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String, session</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, timezone</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> symbol_info.timezone)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">time_close</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(timeframe</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String, session</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, bars_back</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, timeframe_bars_back</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>"]' />

<div v-show="_s9 === 0">

解析由 `timeframe` 和 `session` 选择的 bar 存储桶的关闭时间戳。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `timeframe` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 时间范围代码，例如 `\"D`、`60` 或 `W\"`。 |
| `session` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 查找过程中使用的可选会话窗口。 |
| `timezone` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `symbol_info.timezone` | 解释会话字符串时使用的时区。 |

**返回:** <code>series&nbsp;int</code> — 匹配 bar 关闭的毫秒时间戳，或当当前 bar 位于请求的会话之外时的 `na`。

</div>

<div v-show="_s9 === 1">

将当前图表 bar 映射到另一个时间范围并返回该目标 bar 的结束时间戳。它使用与 <a class="stdlib-ref" data-key="prelude::time" href="/zh-CN/api/stdlib/prelude/#prop-time">time</a> 相同的两阶段偏移模型，但报告 bar 结束而不是 bar 开始。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `timeframe` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 目的地时间范围。空字符串回落至图表时间范围。 |
| `session` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 用于目标查找的可选会话过滤器。 |
| `bars_back` | <code>series&nbsp;int</code> | `0` | 在映射之前在图表时间范围上应用的偏移量。 |
| `timeframe_bars_back` | <code>series&nbsp;int</code> | `0` | 找到目标 bar 后应用额外偏移。 |

**返回:** <code>series&nbsp;int</code>

</div>

---

### timestamp {#timestamp}

<OverloadTabs v-model="_s10" :labels='["<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">timestamp</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(date_string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">timestamp</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(year</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, month</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, day</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, hour</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, minute</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, second</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">timestamp</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(timezone</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> symbol_info.timezone, year</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, month</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, day</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, hour</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, minute</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, second</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>"]' />

<div v-show="_s10 === 0">

解析日期/时间字符串并返回相应的 UNIX 时间戳（以毫秒为单位）。该字符串必须采用 ISO 8601 格式（例如“2024-01-15”或“2024-01-15T09:30:00Z”）或 IETF RFC 2822 格式。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `date_string` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 要解析的日期/时间字符串。 |

**返回:** <code>int</code>

</div>

<div v-show="_s10 === 1">

使用图表的时区从日期/时间组件创建 UNIX 时间戳。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `year` | <code>int</code> |  | 年份（例如 2024 年）。 |
| `month` | <code>int</code> |  | 月份（1-12）。 |
| `day` | <code>int</code> |  | 一个月中的某一天 (1-31)。 |
| `hour` | <code>int</code> | `0` | 小时 (0-23)。默认为 0。 |
| `minute` | <code>int</code> | `0` | 分钟 (0-59)。默认为 0。 |
| `second` | <code>int</code> | `0` | 第二个（0-59）。默认为 0。 |

**返回:** <code>int</code> — 自 1970-01-01 00:00:00 UTC 以来的毫秒数。

</div>

<div v-show="_s10 === 2">

根据指定时区的日期/时间组件创建 UNIX 时间戳。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `timezone` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `symbol_info.timezone` | 时区（例如“America/New_York”、“UTC”、“GMT+8”）。 |
| `year` | <code>int</code> |  | 年份（例如 2024 年）。 |
| `month` | <code>int</code> |  | 月份（1-12）。 |
| `day` | <code>int</code> |  | 一个月中的某一天 (1-31)。 |
| `hour` | <code>int</code> | `0` | 小时 (0-23)。默认为 0。 |
| `minute` | <code>int</code> | `0` | 分钟 (0-59)。默认为 0。 |
| `second` | <code>int</code> | `0` | 第二个（0-59）。默认为 0。 |

**返回:** <code>int</code> — 自 1970-01-01 00:00:00 UTC 以来的毫秒数。

</div>

---

### week_of_year {#fn-week_of_year}

```navi
week_of_year(timestamp: int, timezone: String = symbol_info.timezone): int
```

从指定时区的 UNIX 时间戳中提取一年中的第几周 (1-53)。第 1 周是包含 1 月 4 日的那一周 (ISO 8601)。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `timestamp` | <code>int</code> |  | UNIX 时间戳（以毫秒为单位）。 |
| `timezone` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `symbol_info.timezone` | 用于解释的时区。默认为符号的时区。 |

**返回:** <code>int</code>

---

### year {#fn-year}

```navi
year(timestamp: int, timezone: String = symbol_info.timezone): int
```

从指定时区的 UNIX 时间戳中提取年份。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `timestamp` | <code>int</code> |  | UNIX 时间戳（以毫秒为单位）。 |
| `timezone` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `symbol_info.timezone` | 用于解释的时区。默认为符号的时区。 |

**返回:** <code>int</code>
