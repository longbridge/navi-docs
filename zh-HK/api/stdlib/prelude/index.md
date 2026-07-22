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
Prelude 會自動載入到每個腳本中。它的類型和函數都應直接以名稱引用——**不要**加上命名空間前綴（例如寫 `close`，不要寫 `prelude.close`）。
:::

## 類型

| 名稱 | 說明 |
| --- | --- |
| [`Adjustment`](/zh-HK/api/stdlib/prelude/Adjustment) | 請求資料的價格復權類型。 |
| [`AlertFreq`](/zh-HK/api/stdlib/prelude/AlertFreq) | alert() 的觸發頻率常量。 |
| [`Array<T>`](/zh-HK/api/stdlib/prelude/Array) | 類型為 `T` 的有序、可索引的元素集合。 |
| [`BackAdjustment`](/zh-HK/api/stdlib/prelude/BackAdjustment) | 連續期貨合約的歷史價格復權方式。 |
| [`BarmergeGaps`](/zh-HK/api/stdlib/prelude/BarmergeGaps) | `request.*()` 函數的間隙模式。 |
| [`BarmergeLookahead`](/zh-HK/api/stdlib/prelude/BarmergeLookahead) | `request.*()` 函數的前瞻模式。 |
| [`Box`](/zh-HK/api/stdlib/prelude/Box) | 方框圖的句柄。 |
| [`BoxStyle`](/zh-HK/api/stdlib/prelude/BoxStyle) | 磚形圖/卡吉圖/點數圖的箱體大小計算方式。 |
| [`Color`](/zh-HK/api/stdlib/prelude/Color) | 32 位 RGBA 顏色值。 |
| [`CommissionType`](/zh-HK/api/stdlib/prelude/CommissionType) | strategy() 的佣金計算方式。 |
| [`Currency`](/zh-HK/api/stdlib/prelude/Currency) | 貨幣代碼（ISO 4217）。 |
| [`DayOfWeek`](/zh-HK/api/stdlib/prelude/DayOfWeek) | 星期常數。 |
| [`DefaultQtyType`](/zh-HK/api/stdlib/prelude/DefaultQtyType) | strategy() 的預設數量模式。 |
| [`Direction`](/zh-HK/api/stdlib/prelude/Direction) | 策略訂單方向。 |
| [`DividendsField`](/zh-HK/api/stdlib/prelude/DividendsField) | request.dividends() 的欄位選擇器。 |
| [`EarningsField`](/zh-HK/api/stdlib/prelude/EarningsField) | request.earnings() 的欄位選擇器。 |
| [`Extend`](/zh-HK/api/stdlib/prelude/Extend) | 線條延伸方向。 |
| [`FontFamily`](/zh-HK/api/stdlib/prelude/FontFamily) | 文字繪圖的字體系列。 |
| [`Format`](/zh-HK/api/stdlib/prelude/Format) | 圖表和標籤的數值格式。 |
| [`HLine`](/zh-HK/api/stdlib/prelude/HLine) | 由 <a class="stdlib-ref" data-key="prelude::hline" href="/zh-HK/api/stdlib/prelude/#hline">hline</a> 創建的水平線的句柄。 |
| [`HLineStyle`](/zh-HK/api/stdlib/prelude/HLineStyle) | 水平線繪圖的樣式。 |
| [`Label`](/zh-HK/api/stdlib/prelude/Label) | 標籤繪圖的句柄。 |
| [`LabelStyle`](/zh-HK/api/stdlib/prelude/LabelStyle) | 標籤繪圖的樣式。 |
| [`Line`](/zh-HK/api/stdlib/prelude/Line) | 畫線句柄。 |
| [`LineFill`](/zh-HK/api/stdlib/prelude/LineFill) | 兩行之間的行填充句柄。 |
| [`LineStyle`](/zh-HK/api/stdlib/prelude/LineStyle) | 線條繪圖的樣式。 |
| [`Location`](/zh-HK/api/stdlib/prelude/Location) | plot_shape() 和 plot_char() 的垂直位置。 |
| [`Map<K, V>`](/zh-HK/api/stdlib/prelude/Map) | 將 `K` 類型的鍵映射到 `V` 類型值的鍵值存儲。 |
| [`Matrix<T>`](/zh-HK/api/stdlib/prelude/Matrix) | 以行優先順序存儲的 `T` 類型元素的二維表。 |
| [`OcaType`](/zh-HK/api/stdlib/prelude/OcaType) | 策略訂單的 OCA（一單取消全部）行為。 |
| [`Plot`](/zh-HK/api/stdlib/prelude/Plot) | 由 <a class="stdlib-ref" data-key="prelude::plot" href="/zh-HK/api/stdlib/prelude/#plot">plot</a> 創建的繪圖的句柄。 |
| [`PlotDisplay`](/zh-HK/api/stdlib/prelude/PlotDisplay) | 控制繪圖和視覺效果顯示位置的位標誌類型。 |
| [`PlotStyle`](/zh-HK/api/stdlib/prelude/PlotStyle) | 圖表系列的繪圖樣式。 |
| [`PnfSource`](/zh-HK/api/stdlib/prelude/PnfSource) | 計算點數圖箱格所用的價格來源。 |
| [`Polyline`](/zh-HK/api/stdlib/prelude/Polyline) | 多段線繪圖的句柄。 |
| [`Position`](/zh-HK/api/stdlib/prelude/Position) | 表格和標籤在圖表面板上的位置。 |
| [`RenkoSource`](/zh-HK/api/stdlib/prelude/RenkoSource) | 計算磚形圖磚塊所用的價格來源。 |
| [`ScaleType`](/zh-HK/api/stdlib/prelude/ScaleType) | indicator() 和 strategy() 的價格座標軸掛載模式。 |
| [`Session`](/zh-HK/api/stdlib/prelude/Session) | 交易時段類型。 |
| [`SettlementAsClose`](/zh-HK/api/stdlib/prelude/SettlementAsClose) | 期貨品種在日線及以上週期是否以結算價作為收盤價。 |
| [`Shape`](/zh-HK/api/stdlib/prelude/Shape) | plot_shape() 繪製的圖形。 |
| [`Size`](/zh-HK/api/stdlib/prelude/Size) | 繪圖和標籤的尺寸常量。 |
| [`SortOrder`](/zh-HK/api/stdlib/prelude/SortOrder) | 陣列和矩陣操作的排序方向。 |
| [`SplitsField`](/zh-HK/api/stdlib/prelude/SplitsField) | request.splits() 的欄位選擇器。 |
| [`String`](/zh-HK/api/stdlib/prelude/String) | 不可變的 Unicode 字元序列。 |
| [`Table`](/zh-HK/api/stdlib/prelude/Table) | 表格繪圖的句柄。 |
| [`TextFormat`](/zh-HK/api/stdlib/prelude/TextFormat) | 文字格式旗標（粗體、斜體）。可使用 `+` 組合多個值。 |
| [`TextHAlign`](/zh-HK/api/stdlib/prelude/TextHAlign) | 文字水平對齊方式。 |
| [`TextVAlign`](/zh-HK/api/stdlib/prelude/TextVAlign) | 文字垂直對齊方式。 |
| [`TextWrap`](/zh-HK/api/stdlib/prelude/TextWrap) | 文字換行模式。 |
| [`XLoc`](/zh-HK/api/stdlib/prelude/XLoc) | 繪圖物件的 X 軸座標模式。 |
| [`YLoc`](/zh-HK/api/stdlib/prelude/YLoc) | 標籤的 Y 軸座標模式。 |

## 屬性

### ask {#ask}

**類型:** <code>series&nbsp;float</code>

當前 K 線的最優賣價（ask）。僅在 `1T`（tick）週期可用，其他週期返回 `na`。

---

### bar_index {#bar_index}

**類型:** <code>series&nbsp;int</code>

當前 bar 的索引。編號從零開始，因此圖表上第一個（最舊的）bar 的索引為 0。每個後續 bar 的值都會增加 1。使用 `bar_index[1]` 引用前一個 bar 的索引。

---

### bid {#bid}

**類型:** <code>series&nbsp;float</code>

當前 K 線的最優買價（bid）。僅在 `1T`（tick）週期可用，其他週期返回 `na`。

---

### close {#close}

**類型:** <code>series&nbsp;float</code>

當前 bar 的收盤價。在歷史 bars 上，這是 bar 收盤時的最後交易價格。在實時 bars 上，這是當前的最後交易價格，並將發生變化，直到 bar 收盤。

---

### day_of_month {#prop-day_of_month}

**類型:** <code>int</code>

傳回交易品種時區中當前 bar 開市時間的月份 (1-31) 中的某一天。

---

### day_of_week {#prop-day_of_week}

**類型:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/DayOfWeek">DayOfWeek</a></code>

傳回當前 bar 的開放時間是星期幾。

---

### high {#high}

**類型:** <code>series&nbsp;float</code>

當前 bar 期間達到的最高價格。在歷史 bars 上，這是最高交易價格。在實時 bars 上，該值可能會隨着新高的出現而增加。

---

### hl2 {#hl2}

**類型:** <code>series&nbsp;float</code>

高價和低價的中點：`(high + low) / 2`。也稱為中位價格。可用於簡單估算 bar 的中心價格。

---

### hlc3 {#hlc3}

**類型:** <code>series&nbsp;float</code>

典型價格：`(high + low + close) / 3`。一種常見的價格代理，對收盤價和高低範圍的權重相等。常用於體積加權計算。

---

### hlcc4 {#hlcc4}

**類型:** <code>series&nbsp;float</code>

加權收盤價：`(high + low + close + close) / 4`。對收盤價給予額外權重，佔總權重的 50%。

---

### hour {#prop-hour}

**類型:** <code>int</code>

傳回符號時區中當前 bar 開放時間的小時 (0-23)。

---

### last_bar_index {#last_bar_index}

**類型:** <code>series&nbsp;int</code>

圖表上最後一個（最新）bar 的索引。與 `bar_index` 結合，這可用於確定從當前 bar 到圖表末尾的距離，例如，`last_bar_index - bar_index` 給出剩餘的 bars。

---

### last_bar_time {#last_bar_time}

**類型:** <code>series&nbsp;int</code>

圖表上最後一個 bar 的時間戳，採用 UNIX 格式（自 1970-01-01 00:00:00 UTC 以來的毫秒數）。對於確定圖表的時間範圍或相對於圖表結束的基於時間的計算很有用。

---

### low {#low}

**類型:** <code>series&nbsp;float</code>

當前 bar 期間達到的最低價格。在歷史 bars 上，這是最低交易價格。在實時 bars 上，該值可能會隨着新低的出現而減小。

---

### minute {#prop-minute}

**類型:** <code>int</code>

傳回交易品種時區中當前 bar 開市時間的分鐘 (0-59)。

---

### month {#prop-month}

**類型:** <code>int</code>

傳回交易品種時區中當前 bar 開放時間的月份 (1-12)。

---

### ohlc4 {#ohlc4}

**類型:** <code>series&nbsp;float</code>

平均價格：`(open + high + low + close) / 4`。所有四個 OHLC 價格的算術平均值，代表 bar 的整體價格活動。

---

### open {#open}

**類型:** <code>series&nbsp;float</code>

當前 bar 的開盤價。這是 bar 開盤時的第一個交易價格。在實時 bars 上，一旦 bar 打開，該值就固定。

---

### second {#prop-second}

**類型:** <code>int</code>

傳回交易品種時區中當前 bar 開放時間的秒數 (0-59)。

---

### time {#prop-time}

**類型:** <code>series&nbsp;int</code>

bar 左邊緣的 UNIX 時間戳。該值以 Unix 紀元的毫秒數表示，並且在當前實時 bar 仍在形成時不會漂移。

---

### time_close {#prop-time_close}

**類型:** <code>series&nbsp;int</code>

bar 右邊緣的 UNIX 時間戳。在基於時間的圖表上，這是活躍 bar 的預定收盤價。

---

### time_now {#time_now}

**類型:** <code>series&nbsp;int</code>

UNIX 格式的當前實際時間（自 1970-01-01 00:00:00 UTC 以來的毫秒數）。與傳回 bar 時間的 `time` 不同，`time_now` 傳回實際的當前時間並在實時 bars 上持續更新。

---

### time_tradingday {#time_tradingday}

**類型:** <code>series&nbsp;int</code>

傳回當前 bar 所屬交換會話的 UTC 午夜標記。對於共享同一交易時段的所有 bars，結果保持相同，這在交易跨日曆邊界時非常方便。

---

### volume {#volume}

**類型:** <code>series&nbsp;float</code>

當前 bar 的交易量。代表交易的股票或合約總數。如果交易品種的成交量資料不可用，則可能為 `na`。

---

### week_of_year {#prop-week_of_year}

**類型:** <code>int</code>

傳回符號時區中當前 bar 開放時間的一年中的第幾周 (1-53)。

---

### year {#prop-year}

**類型:** <code>int</code>

傳回符號時區中當前 bar 開放時間的年份。

## 函數

### alert {#alert}

```navi
alert(message: series String, freq: input AlertFreq = AlertFreq.OncePerBar)
```

使用給定的消息和頻率創建警報。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `message` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  |  |
| `freq` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/AlertFreq">AlertFreq</a></code> | `AlertFreq.OncePerBar` |  |

---

### alert_condition {#alert_condition}

```navi
alert_condition(
    condition: series bool,
    title: const String,
    message: const String
  )
```

創建可用於根據布爾條件觸發警報的警報條件。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `condition` | <code>series&nbsp;bool</code> |  |  |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  |  |
| `message` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  |  |

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

設定圖表上價格 bars 的顏色。每個 bar 可以有自己的顏色，允許根據指示器條件進行動態着色。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> |  | 應用於 bar 的顏色。使用 `na` 保留默認顏色。 |
| `offset` | <code>simple&nbsp;int</code> | `0` | 將顏色向左（負）或右（正）移動指定數量的 bars。 |
| `editable` | <code>input&nbsp;bool</code> | `true` | 如果為 true，則可以在樣式對話框中編輯該設定。 |
| `show_last` | <code>input&nbsp;int</code> | `na` | 如果設定，則僅對最後 N 個 bars 着色。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 標題顯示在樣式對話框中。 |
| `display` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> |  | 控制顏色可見的位置。 |

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

用指定的顏色填充圖表 bars 的背景。用於突出顯示圖表上的特定條件或時間段。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> |  | 背景顏色。使用 `na` 表示透明。 |
| `offset` | <code>simple&nbsp;int</code> | `0` | 將背景顏色向左（負）或右（正）移動指定數量的 bars。 |
| `editable` | <code>input&nbsp;bool</code> | `true` | 如果為 true，則可以在樣式對話框中編輯該設定。 |
| `show_last` | <code>input&nbsp;int</code> | `na` | 如果設定，則僅填充最後 N 個 bars。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 標題顯示在樣式對話框中。 |
| `display` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 控制背景可見的位置。 |
| `force_overlay` | <code>const&nbsp;bool</code> | `na` | 如果為 true，力將顯示在主圖表窗格上。 |

---

### bool {#bool}

<OverloadTabs v-model="_s0" :labels='["<span style=\"color:#005CC5;--shiki-dark:#79B8FF\">bool</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(x</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>","<span style=\"color:#005CC5;--shiki-dark:#79B8FF\">bool</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(x</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>","<span style=\"color:#005CC5;--shiki-dark:#79B8FF\">bool</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(x</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>","<span style=\"color:#005CC5;--shiki-dark:#79B8FF\">bool</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(x</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> T)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>"]' />

<div v-show="_s0 === 0">

將 `x` 值轉換為 `bool` 值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `x` | <code>int</code> |  |  |

**返回:** <code>bool</code> — 如果 x 是 `na`、`false` 或等於 `0` 的 `int`/`float` 值，則為 `false`。 `true` 對於所有其他值。

</div>

<div v-show="_s0 === 1">

將浮點數轉換為布爾值；如果 na 或零則傳回 false，否則傳回 true。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `x` | <code>float</code> |  |  |

**返回:** <code>bool</code>

</div>

<div v-show="_s0 === 2">

將布爾值轉換為布爾值；如果 na 傳回 false，否則傳回該值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `x` | <code>bool</code> |  |  |

**返回:** <code>bool</code>

</div>

<div v-show="_s0 === 3">

將任意類型的值轉換為bool；如果 na 傳回 false，否則傳回 true。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `x` | <code>T</code> |  |  |

**返回:** <code>bool</code>

</div>

---

### box {#box}

```navi
box(x: Box): Box
```

將 na 轉換為盒子類型。對於初始化稍後將分配的框變量很有用。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `x` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Box">Box</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Box">Box</a></code>

---

### color {#color}

```navi
color(x: Color): Color
```

將 na 投射為顏色

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `x` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code>

---

### day_of_month {#fn-day_of_month}

```navi
day_of_month(timestamp: int, timezone: String = symbol_info.timezone): int
```

從指定時區的 UNIX 時間戳中提取月份中的日期 (1-31)。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `timestamp` | <code>int</code> |  | UNIX 時間戳（以毫秒為單位）。 |
| `timezone` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `symbol_info.timezone` | 用於解釋的時區。默認為符號的時區。 |

**返回:** <code>int</code>

---

### day_of_week {#fn-day_of_week}

```navi
day_of_week(timestamp: int, timezone: String = symbol_info.timezone): DayOfWeek
```

從指定時區的 UNIX 時間戳中提取星期幾。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `timestamp` | <code>int</code> |  | UNIX 時間戳（以毫秒為單位）。 |
| `timezone` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `symbol_info.timezone` | 用於解釋的時區。默認為符號的時區。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/DayOfWeek">DayOfWeek</a></code> — 1（週日）至 7（週六）。

---

### fill {#fill}

<OverloadTabs v-model="_s1" :labels='["<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">fill</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(hline1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> HLine, hline2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> HLine, </span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color.BLUE, title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, editable</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> true</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, fill_gaps</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> false</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, display</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay.ALL)</span>","<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">fill</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(plot1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Plot, plot2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Plot, </span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color.BLUE, title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, editable</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> true</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, show_last</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, fill_gaps</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> false</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, display</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay.ALL)</span>","<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">fill</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(plot1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Plot, plot2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Plot, top_value</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, bottom_value</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, top_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color.BLUE, bottom_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> #3a3c42</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, display</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay.ALL, fill_gaps</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> false</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, editable</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> true</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span>"]' />

<div v-show="_s1 === 0">

用純色填充兩條水平線之間的區域。對於創建視覺區域（例如超買/超賣區域）很有用。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `hline1` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/HLine">HLine</a></code> |  | 第一個水平線句柄（來自 <a class="stdlib-ref" data-key="prelude::hline" href="/zh-HK/api/stdlib/prelude/#hline">hline</a>）。 |
| `hline2` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/HLine">HLine</a></code> |  | 第二個水平線句柄（來自 <a class="stdlib-ref" data-key="prelude::hline" href="/zh-HK/api/stdlib/prelude/#hline">hline</a>）。 |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 填充顏​​色。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 標題顯示在樣式對話框中。 |
| `editable` | <code>input&nbsp;bool</code> | `true` | 如果為 true，則可以在樣式對話框中編輯填充。 |
| `fill_gaps` | <code>const&nbsp;bool</code> | `false` | 如果為真，則填補資料中的空白。 |
| `display` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 控制填充的可見位置。 |

</div>

<div v-show="_s1 === 1">

用純色填充兩個圖之間的區域。對於可視化兩個系列之間的差異或分佈很有用。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `plot1` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Plot">Plot</a></code> |  | 第一個繪圖句柄（來自 <a class="stdlib-ref" data-key="prelude::plot" href="/zh-HK/api/stdlib/prelude/#plot">plot</a>）。 |
| `plot2` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Plot">Plot</a></code> |  | 第二個繪圖句柄（來自 <a class="stdlib-ref" data-key="prelude::plot" href="/zh-HK/api/stdlib/prelude/#plot">plot</a>）。 |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 填充顏​​色。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 標題顯示在樣式對話框中。 |
| `editable` | <code>input&nbsp;bool</code> | `true` | 如果為 true，則可以在樣式對話框中編輯填充。 |
| `show_last` | <code>input&nbsp;int</code> | `na` | 如果設定，則僅填充最後 N 個 bars。 |
| `fill_gaps` | <code>const&nbsp;bool</code> | `false` | 如果為真，則填補資料中的空白。 |
| `display` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 控制填充的可見位置。 |

</div>

<div v-show="_s1 === 2">

用垂直漸變填充兩個圖之間的區域。漸變從 `top_value` 處的 `top_color` 過渡到 `bottom_value` 處的 `bottom_color`，從而根據價格水平創建平滑的顏色過渡。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `plot1` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Plot">Plot</a></code> |  | 第一個繪圖句柄（來自 <a class="stdlib-ref" data-key="prelude::plot" href="/zh-HK/api/stdlib/prelude/#plot">plot</a>）。 |
| `plot2` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Plot">Plot</a></code> |  | 第二個繪圖句柄（來自 <a class="stdlib-ref" data-key="prelude::plot" href="/zh-HK/api/stdlib/prelude/#plot">plot</a>）。 |
| `top_value` | <code>series&nbsp;float</code> |  | 應用頂部顏色的價格水平。 |
| `bottom_value` | <code>series&nbsp;float</code> |  | 應用底部顏色的價格水平。 |
| `top_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 漸變頂部的顏色。 |
| `bottom_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `#3a3c42` | 漸變底部的顏色。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 標題顯示在樣式對話框中。 |
| `display` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 控制填充的可見位置。 |
| `fill_gaps` | <code>const&nbsp;bool</code> | `false` | 如果為真，則填補資料中的空白。 |
| `editable` | <code>input&nbsp;bool</code> | `true` | 如果為 true，則可以在樣式對話框中編輯填充。 |

</div>

---

### fixnan {#fixnan}

```navi
fixnan(value: series T): series T
```

將 `na` 值替換為系列中最後一個非 na 值。延續最新的有效值，有效“填補”資料空白。如果尚未看到有效值，則傳回 `na`。對於保持偶爾缺失值的系列的連續性很有用。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `value` | <code>series&nbsp;T</code> |  | 要處理的系列值。 |

**返回:** <code>series&nbsp;T</code> — 當前值（如果不是 `na`），否則為最新的非 na 值，或者 `na`（如果尚未看到有效值）。

---

### float {#float}

<OverloadTabs v-model="_s2" :labels='["<span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(x</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>","<span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(x</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s2 === 0">

將 na 強制轉換為浮動

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `x` | <code>float</code> |  |  |

**返回:** <code>float</code>

</div>

<div v-show="_s2 === 1">

將 int 轉換為 float。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
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

在整個圖表上以固定價格水平繪製一條水平線。與 <a class="stdlib-ref" data-key="prelude::plot" href="/zh-HK/api/stdlib/prelude/#plot">plot</a> 不同，價格必須是常量或傳入值，而不是序列。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `price` | <code>input&nbsp;float</code> |  | 繪製線的價格水平。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 標題顯示在樣式對話框中。 |
| `color` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 線條顏色。 |
| `line_style` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/HLineStyle">HLineStyle</a></code> | `HLineStyle.Dashed` | 線條樣式：<code>hLineStyle.Solid</code>、<code>hLineStyle.Dashed</code>、<code>hLineStyle.Dotted</code>。 |
| `line_width` | <code>input&nbsp;int</code> | `1` | 線條的寬度（以像素 (1-4) 為單位）。 |
| `editable` | <code>input&nbsp;bool</code> | `true` | 如果為 true，則可以在樣式對話框中編輯該線。 |
| `display` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 控制線的可見位置。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/HLine">HLine</a></code> — 可與 <a class="stdlib-ref" data-key="prelude::fill" href="/zh-HK/api/stdlib/prelude/Matrix#fill">fill</a> 一起使用的 hline 句柄。

---

### hour {#fn-hour}

```navi
hour(timestamp: int, timezone: String = symbol_info.timezone): int
```

從指定時區的 UNIX 時間戳中提取小時 (0-23)。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `timestamp` | <code>int</code> |  | UNIX 時間戳（以毫秒為單位）。 |
| `timezone` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `symbol_info.timezone` | 用於解釋的時區。默認為符號的時區。 |

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

將腳本指定為指標並設定與指標相關的屬性。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 腳本的標題。當不使用 `shorttitle` 參數時，它會顯示在圖表上，並在發佈腳本時成為出版物的默認標題。 |
| `short_title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 腳本在圖表上的顯示名稱。如果指定，它將替換大多數圖表相關窗口中的 `title` 參數。 |
| `overlay` | <code>const&nbsp;bool</code> | `false` | 如果為 `true`，則如果用户將腳本直接添加到圖表，則腳本的視覺效果將顯示在主圖表窗格上；如果用户將腳本應用到該腳本，則腳本的視覺效果將顯示在另一個腳本的窗格中。如果為 `false`，則腳本的視覺效果將顯示在單獨的窗格中。 |
| `format` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Format">Format</a></code> | `Format.Inherit` | 指定腳本顯示值的格式。可能的值：<a class="stdlib-ref" data-key="prelude::Format" href="/zh-HK/api/stdlib/prelude/Format">Format.Inherit</a>、<a class="stdlib-ref" data-key="prelude::Format" href="/zh-HK/api/stdlib/prelude/Format">Format.Price</a>、<a class="stdlib-ref" data-key="prelude::Format" href="/zh-HK/api/stdlib/prelude/Format">Format.Volume</a>、<a class="stdlib-ref" data-key="prelude::Format" href="/zh-HK/api/stdlib/prelude/Format">Format.Percent</a>。選修的。 |
| `precision` | <code>const&nbsp;int</code> | `na` | 指定腳本顯示值的浮點後的位數。必須是不大於 16 的非負整數。如果 `format` 設定為 <a class="stdlib-ref" data-key="prelude::Format" href="/zh-HK/api/stdlib/prelude/Format">Format.Inherit</a> 並指定 `precision`，則格式將設定為 <a class="stdlib-ref" data-key="prelude::Format" href="/zh-HK/api/stdlib/prelude/Format">Format.Price</a>。當函數的 `format` 參數使用 <a class="stdlib-ref" data-key="prelude::Format" href="/zh-HK/api/stdlib/prelude/Format">Format.Volume</a> 時，`precision` 參數不會影響結果，因為 <a class="stdlib-ref" data-key="prelude::Format" href="/zh-HK/api/stdlib/prelude/Format">Format.Volume</a> 定義的小數精度規則會取代其他精度設定。選修的。默認值繼承自圖表符號的精度。 |
| `scale` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/ScaleType">ScaleType</a></code> | `na` | 使用的價格等級。可能的值：<code>scale.right</code>、<code>scale.left</code>、<code>scale.none</code>。 <code>scale.none</code> 值只能與 `overlay = true` 結合使用。選修的。默認情況下，腳本使用與圖表相同的比例。使用 <code>scale_type</code> 類型。 |
| `max_bars_back` | <code>const&nbsp;int</code> | `na` | 腳本為每個變量和函數保留的歷史緩衝區的長度，它確定可以使用 `[]` 歷史引用運算符引用多少個過去的值。 |
| `timeframe` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 向簡單腳本添加多時間範圍功能。 |
| `timeframe_gaps` | <code>const&nbsp;bool</code> | `true` | 指定當時間範圍高於圖表的時間範圍時指標值如何在圖表 bars 上顯示。如果是 `true`，則僅當較高的 `timeframe` 值可用時，值才會出現在圖表 bar 上，否則傳回 `na` （因此會出現“間隙”）。使用 `false` 時，原本存在的間隙將被傳回的最新已知值填充，從而避免使用 `na` 值。選修的。默認為 `true`。 |
| `explicit_plot_zorder` | <code>const&nbsp;bool</code> | `false` | 指定腳本的繪圖、填充和線條的渲染順序。如果是 `true`，則按照腳本代碼中出現的順序繪製繪圖，每個較新的繪圖都繪製在之前的繪圖上方。這僅適用於 `plot*()` 函數、<a class="stdlib-ref" data-key="prelude::fill" href="/zh-HK/api/stdlib/prelude/Matrix#fill">fill</a> 和 <a class="stdlib-ref" data-key="prelude::hline" href="/zh-HK/api/stdlib/prelude/#hline">hline</a>。 |
| `max_lines_count` | <code>const&nbsp;int</code> | `50` | 最後顯示的 <code>line</code> 繪圖的數量。可能的值：1-500。計數為近似值；可能會顯示多於指定數量的繪圖。 |
| `max_labels_count` | <code>const&nbsp;int</code> | `50` | 最後顯示的 <code>label</code> 繪圖的數量。可能的值：1-500。計數為近似值；可能會顯示多於指定數量的繪圖。 |
| `max_boxes_count` | <code>const&nbsp;int</code> | `50` | 最後顯示的 <code>box</code> 繪圖的數量。可能的值：1-500。計數為近似值；可能會顯示多於指定數量的繪圖。 |
| `calc_bars_count` | <code>const&nbsp;int</code> | `na` | 將腳本的初始計算限制為最後指定的 bars 數量。默認值為 `na`，在這種情況下，腳本將在所有可用的 bars 上執行。 |
| `max_polylines_count` | <code>const&nbsp;int</code> | `50` | 最後顯示的 <code>polyline</code> 繪圖的數量。可能的值：1-100。計數為近似值；可能會顯示多於指定數量的繪圖。 |
| `dynamic_requests` | <code>const&nbsp;bool</code> | `true` | 指定腳本是否可以動態調用 `request.*()` 命名空間中的函數。條件結構（例如 `if`）、循環（例如 `for`）和導出函數的本地範圍內允許動態 `request.*()` 調用。此外，此類調用允許其許多參數使用“系列”參數。 |
| `behind_chart` | <code>const&nbsp;bool</code> | `true` | 控制所有繪圖和繪圖是顯示在圖表顯示後面（如果 `true`）還是顯示在圖表顯示前面（如果 `false`）。該參數僅在`overlay`參數為`true`時生效。 |

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

創建在腳本設定 UI 中公開的傳入值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;int</code> |  |  |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` |  |
| `active` | <code>input&nbsp;bool</code> | `true` |  |

**返回:** <code>input&nbsp;int</code>

</div>

<div v-show="_s3 === 1">

創建在腳本設定 UI 中公開的傳入值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;float</code> |  |  |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` |  |
| `active` | <code>input&nbsp;bool</code> | `true` |  |

**返回:** <code>input&nbsp;float</code>

</div>

<div v-show="_s3 === 2">

創建在腳本設定 UI 中公開的傳入值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;bool</code> |  |  |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` |  |
| `active` | <code>input&nbsp;bool</code> | `true` |  |

**返回:** <code>input&nbsp;bool</code>

</div>

<div v-show="_s3 === 3">

創建在腳本設定 UI 中公開的傳入值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> |  |  |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` |  |
| `active` | <code>input&nbsp;bool</code> | `true` |  |

**返回:** <code>input&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code>

</div>

<div v-show="_s3 === 4">

創建在腳本設定 UI 中公開的傳入值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  |  |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` |  |
| `active` | <code>input&nbsp;bool</code> | `true` |  |

**返回:** <code>input&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

</div>

<div v-show="_s3 === 5">

創建在腳本設定 UI 中公開的傳入值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;expression</code> |  |  |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` |  |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` |  |
| `active` | <code>input&nbsp;bool</code> | `true` |  |

**返回:** <code>input&nbsp;float</code>

</div>

---

### int {#int}

<OverloadTabs v-model="_s4" :labels='["<span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(x</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(x</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>"]' />

<div v-show="_s4 === 0">

將 na 轉換為 int

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `x` | <code>int</code> |  |  |

**返回:** <code>int</code>

</div>

<div v-show="_s4 === 1">

將 float 轉換為 int（通過 math.floor 截斷為零）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `x` | <code>float</code> |  |  |

**返回:** <code>int</code>

</div>

---

### label {#label}

```navi
label(x: Label): Label
```

將 na 轉換為標籤類型。對於初始化稍後分配的標籤變量很有用。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `x` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Label">Label</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Label">Label</a></code>

---

### library {#library}

```navi
library(
    title: const String,
    overlay: const bool = false,
    dynamic_requests: const bool = true
  )
```

將腳本標識為庫的聲明語句。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 圖書館的標題及其標識符。它不能包含空格、特殊字符或以數字開頭。它用作出版物的默認標題，並在另一個腳本使用它時在 `import` 語句中唯一標識該庫。它也用作圖表上的腳本名稱。 |
| `overlay` | <code>const&nbsp;bool</code> | `false` | 如果為 `true`，則庫導出函數生成的任何視覺效果都將繪製在主圖表窗格上。如果是 `false`，它們將出現在單獨的窗格中。選修的。默認為 `false`。 |
| `dynamic_requests` | <code>const&nbsp;bool</code> | `true` | 指定庫的導出函數是否可以包含動態 `request.*()` 調用 - 即放置在條件結構或循環內的調用，或者接受通常需要更簡單限定符的參數的“系列”參數的調用。選修的。默認為 `true`。 |

---

### line {#line}

```navi
line(x: Line): Line
```

將 na 轉換為線型。對於初始化稍後將分配的行變量很有用。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `x` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Line">Line</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Line">Line</a></code>

---

### line_fill {#line_fill}

```navi
line_fill(x: LineFill): LineFill
```

將 na 轉換為行填充類型。對於初始化稍後分配的行填充變量很有用。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `x` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/LineFill">LineFill</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/LineFill">LineFill</a></code>

---

### max_bars_back {#max_bars_back}

```navi
max_bars_back(variable: variableref, num: const int)
```

通過 `[]` 歷史引用運算符設定特定變量或內置系列可用的歷史 bars 的最大數量。如果 bars 的實際數量超過最大值，則只有最新的 bars 可用。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `variable` | <code>variableref</code> |  |  |
| `num` | <code>const&nbsp;int</code> |  | 歷史 bars 的最大數量。 |

---

### minute {#fn-minute}

```navi
minute(timestamp: int, timezone: String = symbol_info.timezone): int
```

從指定時區的 UNIX 時間戳中提取分鐘 (0-59)。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `timestamp` | <code>int</code> |  | UNIX 時間戳（以毫秒為單位）。 |
| `timezone` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `symbol_info.timezone` | 用於解釋的時區。默認為符號的時區。 |

**返回:** <code>int</code>

---

### month {#fn-month}

```navi
month(timestamp: int, timezone: String = symbol_info.timezone): int
```

從指定時區的 UNIX 時間戳中提取月份 (1-12)。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `timestamp` | <code>int</code> |  | UNIX 時間戳（以毫秒為單位）。 |
| `timezone` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `symbol_info.timezone` | 用於解釋的時區。默認為符號的時區。 |

**返回:** <code>int</code>

---

### na {#na}

```navi
na(value: any): bool
```

測試 `value` 是否為 `na`（不可用）。對於處理資料間隙、系列缺失值或未初始化變量至關重要。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `value` | <code>any</code> |  | 要測試的值。可以是任何類型。 |

**返回:** <code>bool</code> — 如果值未定義或缺失，則為 `true`，否則為 `false`。

---

### nz {#nz}

<OverloadTabs v-model="_s5" :labels='["<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">nz</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(source</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> T, replacement</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> T)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> T</span>","<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">nz</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(source</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, replacement</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">nz</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(source</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, replacement</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>","<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">nz</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(source</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color, replacement</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> #000000</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color</span>"]' />

<div v-show="_s5 === 0">

將 `na` 值替換為指定的替換值。如果 `source` 不是 `na`，則傳回 `source` 不變。如果 `source` 是 `na`，則傳回 `replacement`。對於確保計算不會傳播 `na` 值至關重要。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>T</code> |  | 要檢查的值。 |
| `replacement` | <code>T</code> |  | 如果 `source` 是 `na`，則傳回值。 |

**返回:** <code>T</code>

</div>

<div v-show="_s5 === 1">

將 `na` 整數值替換為替換值（默認 0）。當您需要對丟失的整數資料進行數字回退時很有用。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>int</code> |  | 要檢查的整數值。 |
| `replacement` | <code>int</code> | `0` | 如果 `source` 是 `na`，則傳回值。默認為 0。 |

**返回:** <code>int</code>

</div>

<div v-show="_s5 === 2">

將 `na` 浮點值替換為替換值（默認 0.0）。當您需要為缺失的價格或計算資料提供數字回退時很有用。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>float</code> |  | 要檢查的浮點值。 |
| `replacement` | <code>float</code> | `0` | 如果 `source` 是 `na`，則傳回值。默認為 0.0。 |

**返回:** <code>float</code>

</div>

<div v-show="_s5 === 3">

將 `na` 顏色值替換為替換值（默認黑色）。當您需要可見的後備顏色來進行條件着色時非常有用。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> |  | 要檢查的顏色值。 |
| `replacement` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `#000000` | 如果 `source` 是 `na`，則傳回值。默認為#000000。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code>

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

在圖表上繪製一系列資料作為可視化表示。支持線條、柱狀圖、面積、柱狀圖等多種樣式。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `series` | <code>series&nbsp;float</code> |  | 要繪製的一系列值。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 繪圖的標題，顯示在樣式對話框中並作為資料窗口工具提示。 |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 繪製元素的顏色。 |
| `line_width` | <code>input&nbsp;int</code> | `1` | 繪製線的寬度，以像素為單位 (1-4)。 |
| `style` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotStyle">PlotStyle</a></code> | `PlotStyle.Line` | 繪圖樣式：<code>plot.style_line</code>、<code>plot.style_histogram</code>、<code>plot.style_area</code>、<code>plot.style_columns</code> 等。 |
| `track_price` | <code>input&nbsp;bool</code> | `false` | 如果為 true，則會在最後一個值處顯示一條水平價格線。 |
| `hist_base` | <code>input&nbsp;float</code> | `0` | 直方圖/列樣式的基值。條形圖從此水平延伸至系列值。 |
| `offset` | <code>simple&nbsp;int</code> | `0` | 將繪圖向左（負）或右（正）移動指定數量的 bars。 |
| `join` | <code>input&nbsp;bool</code> | `false` | 如果為真，則用線連接系列中的間隙。 |
| `editable` | <code>input&nbsp;bool</code> | `true` | 如果為 true，則可以在樣式對話框中編輯打印樣式。 |
| `show_last` | <code>input&nbsp;int</code> | `na` | 如果設定，則僅顯示最後 N 個 bars。 |
| `display` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 控制繪圖的顯示位置。使用 <code>display.all</code>、<code>display.none</code>、<code>display.pane</code>、<code>display.price_scale</code> 等。 |
| `format` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Format">Format</a></code> | `na` | 覆蓋資料窗口中該圖的默認數字格式。 |
| `precision` | <code>input&nbsp;int</code> | `na` | 顯示的小數位數。 |
| `force_overlay` | <code>const&nbsp;bool</code> | `na` | 如果為 true，則強制繪圖顯示在主圖表窗格上。 |
| `line_style` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotStyle">PlotStyle</a></code> | `PlotStyle.Line` | 線條樣式：<a class="stdlib-ref" data-key="prelude::PlotStyle" href="/zh-HK/api/stdlib/prelude/PlotStyle">PlotStyle.Line</a>、<a class="stdlib-ref" data-key="prelude::PlotStyle" href="/zh-HK/api/stdlib/prelude/PlotStyle">PlotStyle.Line</a>、<a class="stdlib-ref" data-key="prelude::PlotStyle" href="/zh-HK/api/stdlib/prelude/PlotStyle">PlotStyle.Line</a>。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Plot">Plot</a></code> — 可與 <a class="stdlib-ref" data-key="prelude::fill" href="/zh-HK/api/stdlib/prelude/Matrix#fill">fill</a> 一起使用的繪圖句柄來填充繪圖之間的區域。

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

根據系列的符號在圖表上繪製向上和向下箭頭。當值為正時繪製向上箭頭，當值為負時繪製向下箭頭。箭頭高度與絕對值成正比，在 `minheight` 和 `maxheight` 之間縮放。對於可視化動量或方向變化很有用。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `series` | <code>series&nbsp;float</code> |  | 資料系列。正值繪製向上箭頭，負值繪製向下箭頭。 `na` 或零值不會繪製任何內容。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 標題顯示在樣式對話框和資料窗口中。 |
| `color_up` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 向上箭頭的顏色。 |
| `color_down` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `Color.BLACK` | 向下箭頭的顏色。 |
| `offset` | <code>simple&nbsp;int</code> | `0` | 將箭頭向左（負）或右（正）移動指定的 bars。 |
| `min_height` | <code>input&nbsp;int</code> | `5` | 最小箭頭高度（以像素為單位）。 |
| `max_height` | <code>input&nbsp;int</code> | `100` | 最大箭頭高度（以像素為單位）。 |
| `editable` | <code>input&nbsp;bool</code> | `true` | 如果為 true，則可以在樣式對話框中編輯繪圖。 |
| `show_last` | <code>input&nbsp;int</code> | `na` | 如果設定，則僅顯示最後 N 個 bars 上的箭頭。 |
| `display` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 控制箭頭的顯示位置。 |
| `format` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Format">Format</a></code> | `na` | 覆蓋資料窗口中的默認數字格式。 |
| `precision` | <code>input&nbsp;int</code> | `na` | 顯示的小數位數。 |
| `force_overlay` | <code>const&nbsp;bool</code> | `na` | 如果為 true，力將顯示在主圖表窗格上。 |

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

在圖表上繪製 OHLC bars。每個 bar 將開盤價、最高價、最低價和收盤價顯示為傳統的 bar 圖表元素。對於覆蓋自定義 OHLC 資料或顯示轉換後的價格資料非常有用。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `open` | <code>series&nbsp;float</code> |  | 每個 bar 的開盤價。 |
| `high` | <code>series&nbsp;float</code> |  | 每個 bar 的價格很高。 |
| `low` | <code>series&nbsp;float</code> |  | 每個 bar 的低價。 |
| `close` | <code>series&nbsp;float</code> |  | 每個 bar 的收盤價。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 標題顯示在樣式對話框和資料窗口中。 |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 條形顏色。 |
| `editable` | <code>input&nbsp;bool</code> | `true` | 如果為 true，則可以在樣式對話框中編輯繪圖。 |
| `show_last` | <code>input&nbsp;int</code> | `na` | 如果設定，則僅顯示最後 N 個 bars。 |
| `display` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 控制 bars 的顯示位置。 |
| `format` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Format">Format</a></code> | `na` | 覆蓋資料窗口中的默認數字格式。 |
| `precision` | <code>input&nbsp;int</code> | `na` | 顯示的小數位數。 |
| `force_overlay` | <code>const&nbsp;bool</code> | `na` | 如果為 true，力將顯示在主圖表窗格上。 |

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

在圖表上繪製燭台。每根蠟燭均顯示開盤價、最高價、最低價和收盤價，並帶有實體和影線。對於覆蓋自定義燭台資料（例如 Heikin-Ashi）或顯示轉換後的價格系列非常有用。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `open` | <code>series&nbsp;float</code> |  | 每根蠟燭的開盤價。 |
| `high` | <code>series&nbsp;float</code> |  | 每根蠟燭的價格很高。 |
| `low` | <code>series&nbsp;float</code> |  | 每支蠟燭的低價。 |
| `close` | <code>series&nbsp;float</code> |  | 每根蠟燭的收盤價。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 標題顯示在樣式對話框和資料窗口中。 |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 蠟燭體顏色。 |
| `wick_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 燭芯顏色。 |
| `editable` | <code>input&nbsp;bool</code> | `true` | 如果為 true，則可以在樣式對話框中編輯繪圖。 |
| `show_last` | <code>input&nbsp;int</code> | `na` | 如果設定，則僅顯示最後 N 根蠟燭。 |
| `border_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `Color.BLACK` | 蠟燭體邊框顏色。 |
| `display` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 控制蠟燭的顯示位置。 |
| `format` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Format">Format</a></code> | `na` | 覆蓋資料窗口中的默認數字格式。 |
| `precision` | <code>input&nbsp;int</code> | `na` | 顯示的小數位數。 |
| `force_overlay` | <code>const&nbsp;bool</code> | `na` | 如果為 true，力將顯示在主圖表窗格上。 |

---

### plot_char {#plot_char}

<OverloadTabs v-model="_s6" :labels='["<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">plot_char</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">series:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, char</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> \"⭐\"</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, location</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Location </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Location.AboveBar, </span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color.BLUE, offset</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> simple</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color.BLUE, editable</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> true</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, size</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Size </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Size.Auto, show_last</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, display</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay.ALL, format</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Format </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, precision</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, force_overlay</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span>","<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">plot_char</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">series:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, char</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> \"⭐\"</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, location</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Location </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Location.AboveBar, </span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color.BLUE, offset</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> simple</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color.BLUE, editable</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> true</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, size</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Size </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Size.Auto, show_last</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, display</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay.ALL, format</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Format </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, precision</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, force_overlay</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span>"]' />

<div v-show="_s6 === 0">

在系列具有非 na 值的每個 bar 處繪製一個字符。該字符基於 `location` 相對於 bar 定位。用於在圖表上標記特定事件或條件。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `series` | <code>series&nbsp;float</code> |  | 資料系列。當值不是 `na` 時，將繪製字符。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 標題顯示在樣式對話框和資料窗口中。 |
| `char` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `"⭐"` | 要顯示的字符（支持 Unicode）。 |
| `location` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Location">Location</a></code> | `Location.AboveBar` | 垂直位置：<code>location.abovebar</code>、<code>location.belowbar</code>、<code>location.top</code>、<code>location.bottom</code>、<code>location.absolute</code>。 |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 人物顏色。 |
| `offset` | <code>simple&nbsp;int</code> | `0` | 將字符向左（負）或右（正）移動 bars。 |
| `text` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 顯示在角色附近的可選文本。 |
| `text_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 可選文本的顏色。 |
| `editable` | <code>input&nbsp;bool</code> | `true` | 如果為 true，則可以在樣式對話框中編輯繪圖。 |
| `size` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Size">Size</a></code> | `Size.Auto` | 字符大小：<a class="stdlib-ref" data-key="prelude::Size" href="/zh-HK/api/stdlib/prelude/Size">Size.Auto</a>、<a class="stdlib-ref" data-key="prelude::Size" href="/zh-HK/api/stdlib/prelude/Size">Size.Tiny</a>、<a class="stdlib-ref" data-key="prelude::Size" href="/zh-HK/api/stdlib/prelude/Size">Size.Small</a>、<a class="stdlib-ref" data-key="prelude::Size" href="/zh-HK/api/stdlib/prelude/Size">Size.Normal</a>、<a class="stdlib-ref" data-key="prelude::Size" href="/zh-HK/api/stdlib/prelude/Size">Size.Large</a>、<a class="stdlib-ref" data-key="prelude::Size" href="/zh-HK/api/stdlib/prelude/Size">Size.Huge</a>。 |
| `show_last` | <code>input&nbsp;int</code> | `na` | 如果設定，則僅顯示最後 N 個 bars 上的字符。 |
| `display` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 控制字符的顯示位置。 |
| `format` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Format">Format</a></code> | `na` | 覆蓋資料窗口中的默認數字格式。 |
| `precision` | <code>input&nbsp;int</code> | `na` | 顯示的小數位數。 |
| `force_overlay` | <code>const&nbsp;bool</code> | `na` | 如果為 true，力將顯示在主圖表窗格上。 |

</div>

<div v-show="_s6 === 1">

在布爾系列為 true 的每個 bar 處繪製一個字符。當值為 `true` 時繪製字符。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `series` | <code>series&nbsp;bool</code> |  | 布爾系列。當 true 時，將繪製一個字符。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 標題顯示在樣式對話框和資料窗口中。 |
| `char` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `"⭐"` | 要顯示的字符（支持 Unicode）。 |
| `location` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Location">Location</a></code> | `Location.AboveBar` | 垂直位置：<code>location.abovebar</code>、<code>location.belowbar</code>、<code>location.top</code>、<code>location.bottom</code>、<code>location.absolute</code>。 |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 人物顏色。 |
| `offset` | <code>simple&nbsp;int</code> | `0` | 將字符向左（負）或右（正）移動 bars。 |
| `text` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 顯示在角色附近的可選文本。 |
| `text_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 可選文本的顏色。 |
| `editable` | <code>input&nbsp;bool</code> | `true` | 如果為 true，則可以在樣式對話框中編輯繪圖。 |
| `size` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Size">Size</a></code> | `Size.Auto` | 字符大小：<a class="stdlib-ref" data-key="prelude::Size" href="/zh-HK/api/stdlib/prelude/Size">Size.Auto</a>、<a class="stdlib-ref" data-key="prelude::Size" href="/zh-HK/api/stdlib/prelude/Size">Size.Tiny</a>、<a class="stdlib-ref" data-key="prelude::Size" href="/zh-HK/api/stdlib/prelude/Size">Size.Small</a>、<a class="stdlib-ref" data-key="prelude::Size" href="/zh-HK/api/stdlib/prelude/Size">Size.Normal</a>、<a class="stdlib-ref" data-key="prelude::Size" href="/zh-HK/api/stdlib/prelude/Size">Size.Large</a>、<a class="stdlib-ref" data-key="prelude::Size" href="/zh-HK/api/stdlib/prelude/Size">Size.Huge</a>。 |
| `show_last` | <code>input&nbsp;int</code> | `na` | 如果設定，則僅顯示最後 N 個 bars 上的字符。 |
| `display` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 控制字符的顯示位置。 |
| `format` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Format">Format</a></code> | `na` | 覆蓋資料窗口中的默認數字格式。 |
| `precision` | <code>input&nbsp;int</code> | `na` | 顯示的小數位數。 |
| `force_overlay` | <code>const&nbsp;bool</code> | `na` | 如果為 true，力將顯示在主圖表窗格上。 |

</div>

---

### plot_shape {#plot_shape}

<OverloadTabs v-model="_s7" :labels='["<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">plot_shape</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">series:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, style</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Shape </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Shape.XCross, location</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Location </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Location.AboveBar, </span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color.BLUE, offset</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> simple</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color.BLUE, editable</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> true</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, size</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Size </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Size.Auto, show_last</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, display</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay.ALL, format</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Format </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, precision</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, force_overlay</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span>","<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">plot_shape</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">series:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, style</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Shape </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Shape.XCross, location</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Location </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Location.AboveBar, </span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color.BLUE, offset</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> simple</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color.BLUE, editable</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> true</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, size</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Size </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Size.Auto, show_last</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, display</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay.ALL, format</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Format </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, precision</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, force_overlay</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span>"]' />

<div v-show="_s7 === 0">

在每個 bar 處繪製一個形狀，其中該系列具有非 na 值。提供各種形狀樣式（箭頭、圓形、十字形等）。該形狀基於 `location` 相對於 bar 定位。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `series` | <code>series&nbsp;float</code> |  | 資料系列。當值不是 `na` 時，將繪製形狀。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 標題顯示在樣式對話框和資料窗口中。 |
| `style` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Shape">Shape</a></code> | `Shape.XCross` | 形狀樣式：<code>shape.xcross</code>、<code>shape.cross</code>、<code>shape.triangleup</code>、<code>shape.triangledown</code>、<code>shape.flag</code>、<code>shape.circle</code>、<code>shape.arrowup</code>、<code>shape.arrowdown</code>、<code>shape.labelup</code>、<code>shape.labeldown</code>、<code>shape.square</code>、<code>shape.diamond</code>。 |
| `location` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Location">Location</a></code> | `Location.AboveBar` | 垂直位置：<code>location.abovebar</code>、<code>location.belowbar</code>、<code>location.top</code>、<code>location.bottom</code>、<code>location.absolute</code>。 |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 形狀顏色。 |
| `offset` | <code>simple&nbsp;int</code> | `0` | 將形狀向左（負）或右（正）移動 bars。 |
| `text` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 形狀附近顯示的可選文本。 |
| `text_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 可選文本的顏色。 |
| `editable` | <code>input&nbsp;bool</code> | `true` | 如果為 true，則可以在樣式對話框中編輯繪圖。 |
| `size` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Size">Size</a></code> | `Size.Auto` | 形狀大小：<a class="stdlib-ref" data-key="prelude::Size" href="/zh-HK/api/stdlib/prelude/Size">Size.Auto</a>、<a class="stdlib-ref" data-key="prelude::Size" href="/zh-HK/api/stdlib/prelude/Size">Size.Tiny</a>、<a class="stdlib-ref" data-key="prelude::Size" href="/zh-HK/api/stdlib/prelude/Size">Size.Small</a>、<a class="stdlib-ref" data-key="prelude::Size" href="/zh-HK/api/stdlib/prelude/Size">Size.Normal</a>、<a class="stdlib-ref" data-key="prelude::Size" href="/zh-HK/api/stdlib/prelude/Size">Size.Large</a>、<a class="stdlib-ref" data-key="prelude::Size" href="/zh-HK/api/stdlib/prelude/Size">Size.Huge</a>。 |
| `show_last` | <code>input&nbsp;int</code> | `na` | 如果設定，則僅顯示最後 N 個 bars 上的形狀。 |
| `display` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 控制形狀的顯示位置。 |
| `format` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Format">Format</a></code> | `na` | 覆蓋資料窗口中的默認數字格式。 |
| `precision` | <code>input&nbsp;int</code> | `na` | 顯示的小數位數。 |
| `force_overlay` | <code>const&nbsp;bool</code> | `na` | 如果為 true，力將顯示在主圖表窗格上。 |

</div>

<div v-show="_s7 === 1">

在布爾級數為真的每個 bar 處繪製一個形狀。當值為 `true` 時繪製形狀。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `series` | <code>series&nbsp;bool</code> |  | 布爾系列。當為 true 時，會繪製一個形狀。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 標題顯示在樣式對話框和資料窗口中。 |
| `style` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Shape">Shape</a></code> | `Shape.XCross` | 形狀樣式：<code>shape.xcross</code>、<code>shape.cross</code>、<code>shape.triangleup</code>、<code>shape.triangledown</code>、<code>shape.flag</code>、<code>shape.circle</code>、<code>shape.arrowup</code>、<code>shape.arrowdown</code>、<code>shape.labelup</code>、<code>shape.labeldown</code>、<code>shape.square</code>、<code>shape.diamond</code>。 |
| `location` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Location">Location</a></code> | `Location.AboveBar` | 垂直位置：<code>location.abovebar</code>、<code>location.belowbar</code>、<code>location.top</code>、<code>location.bottom</code>、<code>location.absolute</code>。 |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 形狀顏色。 |
| `offset` | <code>simple&nbsp;int</code> | `0` | 將形狀向左（負）或右（正）移動 bars。 |
| `text` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 形狀附近顯示的可選文本。 |
| `text_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 可選文本的顏色。 |
| `editable` | <code>input&nbsp;bool</code> | `true` | 如果為 true，則可以在樣式對話框中編輯繪圖。 |
| `size` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Size">Size</a></code> | `Size.Auto` | 形狀大小：<a class="stdlib-ref" data-key="prelude::Size" href="/zh-HK/api/stdlib/prelude/Size">Size.Auto</a>、<a class="stdlib-ref" data-key="prelude::Size" href="/zh-HK/api/stdlib/prelude/Size">Size.Tiny</a>、<a class="stdlib-ref" data-key="prelude::Size" href="/zh-HK/api/stdlib/prelude/Size">Size.Small</a>、<a class="stdlib-ref" data-key="prelude::Size" href="/zh-HK/api/stdlib/prelude/Size">Size.Normal</a>、<a class="stdlib-ref" data-key="prelude::Size" href="/zh-HK/api/stdlib/prelude/Size">Size.Large</a>、<a class="stdlib-ref" data-key="prelude::Size" href="/zh-HK/api/stdlib/prelude/Size">Size.Huge</a>。 |
| `show_last` | <code>input&nbsp;int</code> | `na` | 如果設定，則僅顯示最後 N 個 bars 上的形狀。 |
| `display` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 控制形狀的顯示位置。 |
| `format` | <code>input&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Format">Format</a></code> | `na` | 覆蓋資料窗口中的默認數字格式。 |
| `precision` | <code>input&nbsp;int</code> | `na` | 顯示的小數位數。 |
| `force_overlay` | <code>const&nbsp;bool</code> | `na` | 如果為 true，力將顯示在主圖表窗格上。 |

</div>

---

### second {#fn-second}

```navi
second(timestamp: int, timezone: String = symbol_info.timezone): int
```

從指定時區的 UNIX 時間戳中提取秒數 (0-59)。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `timestamp` | <code>int</code> |  | UNIX 時間戳（以毫秒為單位）。 |
| `timezone` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `symbol_info.timezone` | 用於解釋的時區。默認為符號的時區。 |

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

將腳本指定為策略並設定與策略相關的屬性。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 腳本的標題。未設定 `shorttitle` 時顯示在圖表上，併成為發佈時的默認標題。 |
| `short_title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 圖表和大多數圖表相關窗口中顯示的腳本的縮寫顯示名稱。選修的。 |
| `overlay` | <code>const&nbsp;bool</code> | `false` | 如果是 `true`，則策略的視覺效果將繪製在主圖表窗格上。如果是 `false`，它們將出現在單獨的窗格中。選修的。默認為 `false`。 |
| `format` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Format">Format</a></code> | `Format.Inherit` | 指定策略顯示值的格式。可能的值：<a class="stdlib-ref" data-key="prelude::Format" href="/zh-HK/api/stdlib/prelude/Format">Format.Inherit</a>、<a class="stdlib-ref" data-key="prelude::Format" href="/zh-HK/api/stdlib/prelude/Format">Format.Price</a>、<a class="stdlib-ref" data-key="prelude::Format" href="/zh-HK/api/stdlib/prelude/Format">Format.Volume</a>、<a class="stdlib-ref" data-key="prelude::Format" href="/zh-HK/api/stdlib/prelude/Format">Format.Percent</a>。選修的。 |
| `precision` | <code>const&nbsp;int</code> | `na` | 策略顯示值的小數位數。必須是不大於16的非負整數。當使用<a class="stdlib-ref" data-key="prelude::Format" href="/zh-HK/api/stdlib/prelude/Format">Format.Volume</a>時，此設定無效。選修的。默認值繼承自圖表符號的精度。 |
| `scale` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/ScaleType">ScaleType</a></code> | `na` | 使用的價格範圍。可能的值：<code>scale.right</code>、<code>scale.left</code>、<code>scale.none</code>。僅當 `overlay = true` 時才允許 <code>scale.none</code>。選修的。 |
| `pyramiding` | <code>const&nbsp;int</code> | `0` | 同一時間允許在同一方向上進入的最大數量。選修的。默認值為 `0`，表示每個方向僅允許一個條目。 |
| `calc_on_order_fills` | <code>const&nbsp;bool</code> | `false` | 如果是 `true`，則只要在 bar 期間執行訂單，策略就會重新計算其邏輯，而不僅僅是在 bar 收盤時。選修的。默認為 `false`。 |
| `calc_on_every_tick` | <code>const&nbsp;bool</code> | `false` | 如果是 `true`，策略會在每次傳入的實時價格更新（變動點）時重新計算。如果是 `false`，則計算僅在 bar 關閉時發生。選修的。默認為 `false`。 |
| `max_bars_back` | <code>const&nbsp;int</code> | `na` | 為所有變量和函數保留的歷史緩衝區的深度，控制可以使用 `[]` 運算符讀取多少個過去的值。選修的。 |
| `backtest_fill_limits_assumption` | <code>const&nbsp;int</code> | `0` | 在假設執行限價單之前，市場必須移動超出限價的價格變動數。選修的。默認為 `0`。 |
| `default_qty_type` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/DefaultQtyType">DefaultQtyType</a></code> | `DefaultQtyType.Fixed` | 確定如何解釋 `default_qty_value`。可能的值：<code>strategy.fixed</code>、<code>strategy.percent_of_equity</code>、<code>strategy.cash</code>。選修的。默認值為 <code>strategy.fixed</code>。 |
| `default_qty_value` | <code>const&nbsp;float</code> | `1` | 在入場調用中未指定數量時使用的默認訂單大小。它的含義取決於`default_qty_type`。選修的。默認為 `1.0`。 |
| `initial_capital` | <code>const&nbsp;float</code> | `1000000` | 回測開始時策略可用的啓動資金，以 `currency` 表示。選修的。默認為 `1000000.0`。 |
| `currency` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `symbol_info.currency` | 策略跟蹤資本、利潤和損失所用的基礎貨幣。選修的。默認為圖表符號的貨幣。 |
| `slippage` | <code>const&nbsp;int</code> | `0` | 添加到每個訂單執行價格以模擬執行滑點的價格變動數量。選修的。默認為 `0`。 |
| `commission_type` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/CommissionType">CommissionType</a></code> | `CommissionType.Percent` | 指定如何計算交易佣金。可能的值：`strategy.commission.percent`、`strategy.commission.cash_per_contract`、`strategy.commission.cash_per_order`。選修的。默認為 `strategy.commission.percent`。 |
| `commission_value` | <code>const&nbsp;float</code> | `0` | 佣金金額，根據 `commission_type` 解釋。選修的。默認為 `0.0`。 |
| `process_orders_on_close` | <code>const&nbsp;bool</code> | `false` | 如果是 `true`，則在 bar 期間生成的訂單將按該 bar 的收盤價處理，而不是在下一個 bar 的開盤價處理。選修的。默認為 `false`。 |
| `close_entries_rule` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `"FIFO"` | 關閉多個打開的條目時應用的排序規則。 `\"FIFO` 首先關閉最舊的條目； `ANY` 允許關閉調用通過 ID 定位特定條目。選修的。默認為 `FIFO\"`。 |
| `margin_long` | <code>const&nbsp;float</code> | `100` | 多頭頭寸的保證金要求，以頭寸價值的百分比表示。值 `100` 表示沒有槓桿。選修的。默認為 `100.0`。 |
| `margin_short` | <code>const&nbsp;float</code> | `100` | 空頭頭寸的保證金要求，以頭寸價值的百分比表示。值 `100` 表示沒有槓桿。選修的。默認為 `100.0`。 |
| `explicit_plot_zorder` | <code>const&nbsp;bool</code> | `false` | 如果 `true`，繪圖、填充和線條將按照它們在腳本代碼中出現的順序呈現，後面的聲明繪製在前面的聲明之上。選修的。默認為 `false`。 |
| `max_lines_count` | <code>const&nbsp;int</code> | `50` | 圖表上保存的最新 `line` 繪圖的最大數量。可能的值：1–500。選修的。默認為 `50`。 |
| `max_labels_count` | <code>const&nbsp;int</code> | `50` | 圖表上保存的最新 `label` 繪圖的最大數量。可能的值：1–500。選修的。默認為 `50`。 |
| `max_boxes_count` | <code>const&nbsp;int</code> | `50` | 圖表上保存的最新 `box` 繪圖的最大數量。可能的值：1–500。選修的。默認為 `50`。 |
| `calc_bars_count` | <code>const&nbsp;int</code> | `na` | 將回測限制為指定的最新 bars 數量。當 `na` 時，策略在所有可用歷史記錄上運行。選修的。默認為 `na`。 |
| `risk_free_rate` | <code>const&nbsp;float</code> | `2` | 計算夏普比率和索爾蒂諾比率時使用的年度無風險利率（百分比）。選修的。默認為 `2.0`。 |
| `use_bar_magnifier` | <code>const&nbsp;bool</code> | `false` | 如果是 `true`，引擎會使用更高分辨率的柱內資料來確定每個 bar 內更準確的訂單執行價格。選修的。默認為 `false`。 |
| `fill_orders_on_standard_ohlc` | <code>const&nbsp;bool</code> | `false` | 如果 `true`，限價單和止損單將根據 bar 的標準 OHLC 價格執行，忽略任何柱內價格路徑。選修的。默認為 `false`。 |
| `max_polylines_count` | <code>const&nbsp;int</code> | `50` | 圖表上保存的最新 `polyline` 繪圖的最大數量。可能的值：1–100。選修的。默認為 `50`。 |
| `dynamic_requests` | <code>const&nbsp;bool</code> | `true` | 指定策略是否可以在條件結構或循環內包含動態 `request.*()` 調用，或者接受通常為非系列參數的“系列”參數的調用。選修的。默認為 `true`。 |
| `behind_chart` | <code>const&nbsp;bool</code> | `true` | 如果是 `true`，則所有圖表和繪圖都將呈現在圖表的燭台或 bars 後面。僅當 `overlay = true` 時生效。選修的。默認為 `true`。 |

---

### string {#string}

```navi
string(x: String): String
```

將 na 轉換為字符串

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `x` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

---

### table {#table}

```navi
table(x: Table): Table
```

將 na 轉換為表類型。對於初始化稍後分配的表變量很有用。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `x` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Table">Table</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Table">Table</a></code>

---

### time {#fn-time}

<OverloadTabs v-model="_s8" :labels='["<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">time</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(timeframe</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String, session</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, timezone</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> symbol_info.timezone)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">time</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(timeframe</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String, session</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, bars_back</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, timeframe_bars_back</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>"]' />

<div v-show="_s8 === 0">

解析由 `timeframe` 和 `session` 選擇的 bar 存儲桶的打開時間戳。當您希望在特定時區解釋目標會話時，此重載非常方便。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `timeframe` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 時間範圍代碼，例如 `\"D`、`60` 或 `W\"`。 |
| `session` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 可選的會話窗口。省略時，將使用交易品種的常規會話規則。 |
| `timezone` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `symbol_info.timezone` | 評估會話字符串時使用的時區。 |

**返回:** <code>series&nbsp;int</code> — 匹配 bar 開始的毫秒時間戳，或當前 bar 不屬於請求的會話時的 `na`。

</div>

<div v-show="_s8 === 1">

將當前圖表 bar 映射到另一個時間範圍並傳回該目標 bar 的開盤時間戳。查找可以首先在圖表時間範圍上移動，然後再在目標時間範圍上移動。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `timeframe` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 目的地時間範圍。空字符串回落至圖表時間範圍。 |
| `session` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 用於目標查找的可選會話過濾器。 |
| `bars_back` | <code>series&nbsp;int</code> | `0` | 在映射之前在圖表時間範圍上應用的偏移量。 |
| `timeframe_bars_back` | <code>series&nbsp;int</code> | `0` | 找到目標 bar 後應用額外偏移。 |

**返回:** <code>series&nbsp;int</code>

</div>

---

### time_close {#fn-time_close}

<OverloadTabs v-model="_s9" :labels='["<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">time_close</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(timeframe</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String, session</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, timezone</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> symbol_info.timezone)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">time_close</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(timeframe</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String, session</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, bars_back</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, timeframe_bars_back</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>"]' />

<div v-show="_s9 === 0">

解析由 `timeframe` 和 `session` 選擇的 bar 存儲桶的關閉時間戳。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `timeframe` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 時間範圍代碼，例如 `\"D`、`60` 或 `W\"`。 |
| `session` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 查找過程中使用的可選會話窗口。 |
| `timezone` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `symbol_info.timezone` | 解釋會話字符串時使用的時區。 |

**返回:** <code>series&nbsp;int</code> — 匹配 bar 關閉的毫秒時間戳，或噹噹前 bar 位於請求的會話之外時的 `na`。

</div>

<div v-show="_s9 === 1">

將當前圖表 bar 映射到另一個時間範圍並傳回該目標 bar 的結束時間戳。它使用與 <a class="stdlib-ref" data-key="prelude::time" href="/zh-HK/api/stdlib/prelude/#prop-time">time</a> 相同的兩階段偏移模型，但報告 bar 結束而不是 bar 開始。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `timeframe` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 目的地時間範圍。空字符串回落至圖表時間範圍。 |
| `session` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 用於目標查找的可選會話過濾器。 |
| `bars_back` | <code>series&nbsp;int</code> | `0` | 在映射之前在圖表時間範圍上應用的偏移量。 |
| `timeframe_bars_back` | <code>series&nbsp;int</code> | `0` | 找到目標 bar 後應用額外偏移。 |

**返回:** <code>series&nbsp;int</code>

</div>

---

### timestamp {#timestamp}

<OverloadTabs v-model="_s10" :labels='["<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">timestamp</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(date_string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">timestamp</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(year</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, month</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, day</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, hour</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, minute</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, second</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">timestamp</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(timezone</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> symbol_info.timezone, year</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, month</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, day</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, hour</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, minute</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, second</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>"]' />

<div v-show="_s10 === 0">

解析日期/時間字符串並傳回相應的 UNIX 時間戳（以毫秒為單位）。該字符串必須採用 ISO 8601 格式（例如“2024-01-15”或“2024-01-15T09:30:00Z”）或 IETF RFC 2822 格式。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `date_string` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 要解析的日期/時間字符串。 |

**返回:** <code>int</code>

</div>

<div v-show="_s10 === 1">

使用圖表的時區從日期/時間組件創建 UNIX 時間戳。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `year` | <code>int</code> |  | 年份（例如 2024 年）。 |
| `month` | <code>int</code> |  | 月份（1-12）。 |
| `day` | <code>int</code> |  | 一個月中的某一天 (1-31)。 |
| `hour` | <code>int</code> | `0` | 小時 (0-23)。默認為 0。 |
| `minute` | <code>int</code> | `0` | 分鐘 (0-59)。默認為 0。 |
| `second` | <code>int</code> | `0` | 第二個（0-59）。默認為 0。 |

**返回:** <code>int</code> — 自 1970-01-01 00:00:00 UTC 以來的毫秒數。

</div>

<div v-show="_s10 === 2">

根據指定時區的日期/時間組件創建 UNIX 時間戳。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `timezone` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `symbol_info.timezone` | 時區（例如“America/New_York”、“UTC”、“GMT+8”）。 |
| `year` | <code>int</code> |  | 年份（例如 2024 年）。 |
| `month` | <code>int</code> |  | 月份（1-12）。 |
| `day` | <code>int</code> |  | 一個月中的某一天 (1-31)。 |
| `hour` | <code>int</code> | `0` | 小時 (0-23)。默認為 0。 |
| `minute` | <code>int</code> | `0` | 分鐘 (0-59)。默認為 0。 |
| `second` | <code>int</code> | `0` | 第二個（0-59）。默認為 0。 |

**返回:** <code>int</code> — 自 1970-01-01 00:00:00 UTC 以來的毫秒數。

</div>

---

### week_of_year {#fn-week_of_year}

```navi
week_of_year(timestamp: int, timezone: String = symbol_info.timezone): int
```

從指定時區的 UNIX 時間戳中提取一年中的第幾周 (1-53)。第 1 周是包含 1 月 4 日的那一週 (ISO 8601)。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `timestamp` | <code>int</code> |  | UNIX 時間戳（以毫秒為單位）。 |
| `timezone` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `symbol_info.timezone` | 用於解釋的時區。默認為符號的時區。 |

**返回:** <code>int</code>

---

### year {#fn-year}

```navi
year(timestamp: int, timezone: String = symbol_info.timezone): int
```

從指定時區的 UNIX 時間戳中提取年份。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `timestamp` | <code>int</code> |  | UNIX 時間戳（以毫秒為單位）。 |
| `timezone` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `symbol_info.timezone` | 用於解釋的時區。默認為符號的時區。 |

**返回:** <code>int</code>
