---
title: "ta"
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
</script>

# ta

## 類型

| 名稱 | 說明 |
| --- | --- |
| [`PivotType`](/zh-HK/api/stdlib/ta/PivotType) | Pivot point calculation method for <a class="stdlib-ref" data-key="ta::pivot_point_levels" href="/zh-HK/api/stdlib/ta/#pivot_point_levels">ta.pivot_point_levels</a>. |

## 屬性

### accdist {#accdist}

**類型:** <code>series&nbsp;float</code>

累積/分配線 (ADL)。它衡量流入和流出證券的累計資金流量。

---

### iii {#iii}

**類型:** <code>series&nbsp;float</code>

日內強度指數（III）。它測量證券流入和流出的流量。

---

### nvi {#nvi}

**類型:** <code>series&nbsp;float</code>

負成交量指數（NVI）。它重點關注交易量較前一天減少的日子。

---

### obv {#obv}

**類型:** <code>const&nbsp;float</code>

平衡交易量 (OBV)。它將買賣壓力作為累積指標來衡量，該指標在上漲日增加成交量，在下跌日減少成交量。

---

### pvi {#pvi}

**類型:** <code>const&nbsp;float</code>

正成交量指數（PVI）。它重點關注成交量較前一天增加的日子。

---

### pvt {#pvt}

**類型:** <code>const&nbsp;float</code>

價量趨勢 (PVT)。它結合價格和成交量來確定價格變動的強度。

---

### tr {#prop-tr}

**類型:** <code>series&nbsp;float</code>

啓用 na 處理的真實範圍 (TR)。相當於 `ta.tr(handle_na = true)`。

---

### vwap {#prop-vwap}

**類型:** <code>series&nbsp;float</code>

使用 hlc3 作為來源的每日成交量加權平均價格。每天開始時重置。這是大多數交易平台使用的標準 VWAP。

---

### wad {#wad}

**類型:** <code>const&nbsp;float</code>

威廉姆斯累積/派發 (WAD)。它通過比較收盤價與高低範圍來衡量買賣壓力。

---

### wvad {#wvad}

**類型:** <code>const&nbsp;float</code>

威廉姆斯變量累積/分配 (WVAAD)。它通過考慮收盤價在真實範圍內的位置來調整累積/派發計算。

## 函數

### alma {#alma}

```navi
ta.alma(
    series: series float,
    length: series int,
    offset: simple float,
    sigma: simple float,
    floor: simple bool = false
  ): series float
```

阿諾·勒古移動平均線。它使用高斯分佈作為移動平均的權重。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `series` | <code>series&nbsp;float</code> |  | 要處理的一系列值。 |
| `length` | <code>series&nbsp;int</code> |  | bars 數量（長度）。 |
| `offset` | <code>simple&nbsp;float</code> |  | 控制平滑度（接近 1）和響應度（接近 0）之間的權衡。 |
| `sigma` | <code>simple&nbsp;float</code> |  | 更改 ALMA 的平滑度。西格瑪越大，ALMA 越平滑。 |
| `floor` | <code>simple&nbsp;bool</code> | `false` | 指定在計算 ALMA 之前是否對偏移計算進行下限。 |

**返回:** <code>series&nbsp;float</code>

---

### atr {#atr}

```navi
ta.atr(length: simple int): series float
```

計算指定 `length` 上金融工具的平均真實波幅 ​​(ATR)。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `length` | <code>simple&nbsp;int</code> |  | 用於 ATR 計算的 bars 數量。 |

**返回:** <code>series&nbsp;float</code>

---

### bars_since {#bars_since}

```navi
ta.bars_since(condition: series bool): series int
```

計算自上次條件為真以來 bars 的數量。如果條件從未成立，則傳回 na。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `condition` | <code>series&nbsp;bool</code> |  | 要檢查的布爾條件。 |

**返回:** <code>series&nbsp;int</code> — 自上次條件為真以來 bars 的數量，如果從未為真，則為 `na`。

---

### bb {#bb}

```navi
ta.bb(series: series float, length: series int, mult: simple float)
```

布林線 (BB)。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `series` | <code>series&nbsp;float</code> |  | BB 計算的傳入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用於計算的 bars 數量。 |
| `mult` | <code>simple&nbsp;float</code> |  | 標準差帶的乘數。 |

**返回:** `[basis, upper, lower]` 的元組，其中基礎是 SMA，上限/下限是基礎 ± mult × stdev。

**示例**

```navi
let (bbBasis, bbUpper, bbLower) = ta.bb(close, 20, 2.0);
plot(bbBasis, title: "BB Basis", color: color.ORANGE);
plot(bbUpper, title: "BB Upper", color: color.BLUE);
plot(bbLower, title: "BB Lower", color: color.BLUE);
```

---

### bbw {#bbw}

```navi
ta.bbw(
    source: series float,
    length: series int,
    mult: simple float
  ): series float
```

布林帶寬度 (BBW)。它衡量布林帶相對於移動平均線的寬度。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | BBW 計算的傳入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用於計算的 bars 數量。 |
| `mult` | <code>simple&nbsp;float</code> |  | 標準差帶的乘數。 |

**返回:** <code>series&nbsp;float</code> — 帶寬百分比：`(upper - lower) / basis × 100`。

---

### cci {#cci}

```navi
ta.cci(source: series float, length: series int): series float
```

商品通道指數（CCI）。它測量 `series` 系列與其統計平均值的偏差。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 用於計算的傳入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用於計算的 bars 數量。 |

**返回:** <code>series&nbsp;float</code>

---

### change {#change}

<OverloadTabs v-model="_s0" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">ta.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">change</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(source</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, length</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 1</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">ta.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">change</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(source</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, length</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 1</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">ta.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">change</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(source</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, length</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 1</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>"]' />

<div v-show="_s0 === 0">

計算當前 `source` 值與其前值 `length` bars 之間的差值。對於測量動量或變化率很有用。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;int</code> |  | 要比較的整數系列。 |
| `length` | <code>series&nbsp;int</code> | `1` | 要回顧的 bars 數量。默認為 1（之前的 bar）。 |

**返回:** <code>series&nbsp;int</code> — __代碼0__。

</div>

<div v-show="_s0 === 1">

計算當前 `source` 值與其前值 `length` bars 之間的差值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 要比較的浮動系列。 |
| `length` | <code>series&nbsp;int</code> | `1` | 要回顧的 bars 數量。默認為 1（之前的 bar）。 |

**返回:** <code>series&nbsp;float</code> — __代碼0__。

</div>

<div v-show="_s0 === 2">

檢測布爾值是否較 `length` bars 之前的值發生更改。對於檢測狀態轉換（例如信號翻轉）很有用。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;bool</code> |  | 要比較的布爾系列。 |
| `length` | <code>series&nbsp;int</code> | `1` | 要回顧的 bars 數量。默認為 1（之前的 bar）。 |

**返回:** <code>series&nbsp;bool</code> — 如果當前值與歷史值不同，則為 `true`，否則為 `false`。

</div>

---

### chop {#chop}

```navi
ta.chop(length: simple int): series float
```

Choppiness Index (CHOP).

Quantifies how directional (trending) or sideways (choppy) the market is. Values near 100 signal maximum choppiness; values near the lower bound (≈ `100/log10(length)`) signal strong trend. Formula: `100 * log10(sum(ATR(1), length) / (highest_high - lowest_low)) / log10(length)`.

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `length` | <code>simple&nbsp;int</code> |  | The lookback period (must be &gt;= 2). |

**返回:** <code>series&nbsp;float</code>

---

### cmf {#cmf}

```navi
ta.cmf(length: simple int): series float
```

Chaikin Money Flow (CMF).

Measures buying and selling pressure over `length` bars using the Money Flow Multiplier weighted by volume. Positive values indicate accumulation; negative values indicate distribution. Formula: `sum(MFV, length) / sum(volume, length)` where `MFV = ((close - low) - (high - close)) / (high - low) * volume`.

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `length` | <code>simple&nbsp;int</code> |  | The number of bars to accumulate. |

**返回:** <code>series&nbsp;float</code>

---

### cmo {#cmo}

```navi
ta.cmo(series: series float, length: series int): series float
```

錢德動量振盪器 (CMO)。它測量 `series` 系列在指定 `length` 上的動量。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `series` | <code>series&nbsp;float</code> |  | 用於計算的傳入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用於計算的 bars 數量。 |

**返回:** <code>series&nbsp;float</code> — 介於 -100 和 100 之間的值。正值表示向上動量，負值表示向下動量。

---

### cog {#cog}

```navi
ta.cog(source: series float, length: series int): series float
```

重心 (COG)。它標識 `source` 系列在指定 `length` 上的重心。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 用於計算的傳入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用於計算的 bars 數量。 |

**返回:** <code>series&nbsp;float</code>

---

### correlation {#correlation}

```navi
ta.correlation(
    source1: series float,
    source2: series float,
    length: series int
  ): series float
```

指定 `length` 上兩個系列之間的皮爾遜相關係數。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source1` | <code>series&nbsp;float</code> |  | 第一個傳入系列。 |
| `source2` | <code>series&nbsp;float</code> |  | 第二個傳入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用於計算的 bars 數量。 |

**返回:** <code>series&nbsp;float</code> — 介於 -1.0（完全負相關）和 1.0（完全正相關）之間的值。 0.0 表示沒有線性相關。

---

### cross {#cross}

```navi
ta.cross(source1: series float, source2: series float): series bool
```

檢測 `source1` 是否在任一方向上穿過 `source2`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source1` | <code>series&nbsp;float</code> |  | 第一個要比較的系列。 |
| `source2` | <code>series&nbsp;float</code> |  | 要比較的第二個系列。 |

**返回:** <code>series&nbsp;bool</code>

---

### cross_over {#cross_over}

```navi
ta.cross_over(source1: series float, source2: series float): series bool
```

檢測 `source1` 是否越過 `source2`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source1` | <code>series&nbsp;float</code> |  | 第一個要比較的系列。 |
| `source2` | <code>series&nbsp;float</code> |  | 要比較的第二個系列。 |

**返回:** <code>series&nbsp;bool</code>

**示例**

```navi
let fastEma = ta.ema(close, 9);
let slowEma = ta.ema(close, 21);
if ta.cross_over(fastEma, slowEma) {
label.new(bar_index, low, "Buy", style: LabelStyle.Up);
}
```

---

### cross_under {#cross_under}

```navi
ta.cross_under(source1: series float, source2: series float): series bool
```

檢測 `source1` 是否越過 `source2`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source1` | <code>series&nbsp;float</code> |  | 第一個要比較的系列。 |
| `source2` | <code>series&nbsp;float</code> |  | 要比較的第二個系列。 |

**返回:** <code>series&nbsp;bool</code>

**示例**

```navi
let fastEma = ta.ema(close, 9);
let slowEma = ta.ema(close, 21);
if ta.cross_under(fastEma, slowEma) {
label.new(bar_index, high, "Sell", style: LabelStyle.Down);
}
```

---

### cum {#cum}

```navi
ta.cum(source: series float): series float
```

`source` 系列的累積和。換句話説，它是 `source` 系列所有元素的總和。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 要累積的傳入系列。 |

**返回:** <code>series&nbsp;float</code>

---

### dema {#dema}

```navi
ta.dema(source: series float, length: simple int): series float
```

Double Exponential Moving Average (DEMA).

Reduces the lag of a standard EMA by subtracting an EMA of the EMA. Formula: `2 * EMA(source, length) - EMA(EMA(source, length), length)`.

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The series to smooth. |
| `length` | <code>simple&nbsp;int</code> |  | The smoothing period. |

**返回:** <code>series&nbsp;float</code>

---

### dev {#dev}

```navi
ta.dev(source: series float, length: series int): series float
```

`source` 系列相對於指定 `length` 的平均偏差。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 用於計算的傳入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用於計算的 bars 數量。 |

**返回:** <code>series&nbsp;float</code>

---

### dmi {#dmi}

```navi
ta.dmi(di_length: simple int, adx_smoothing: simple int)
```

定向運動指數（DMI）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `di_length` | <code>simple&nbsp;int</code> |  | 方向指標計算的長度。 |
| `adx_smoothing` | <code>simple&nbsp;int</code> |  | ADX 計算的平滑長度。 |

**返回:** `[plus_di, minus_di, adx]` 的元組，全部表示為百分比 (0–100)。

---

### ema {#ema}

```navi
ta.ema(source: series float, length: simple int): series float
```

指數移動平均線 (EMA)。它更加重視最近的價格，使其對新信息更加敏感。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 用於計算的傳入系列。 |
| `length` | <code>simple&nbsp;int</code> |  | 用於計算的 bars 數量。 |

**返回:** <code>series&nbsp;float</code>

**示例**

```navi
let ema12 = ta.ema(close, 12);
let ema26 = ta.ema(close, 26);
plot(ema12, title: "EMA 12", color: color.GREEN);
plot(ema26, title: "EMA 26", color: color.RED);
```

---

### falling {#falling}

```navi
ta.falling(source: series float, length: series int): series bool
```

檢查 `source` 系列是否超出指定的 `length`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 要檢查的傳入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 要檢查的 bars 數量。 |

**返回:** <code>series&nbsp;bool</code>

---

### highest {#highest}

<OverloadTabs v-model="_s1" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">ta.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">highest</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(length</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">ta.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">highest</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(source</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, length</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s1 === 0">

傳回 `high` 系列在指定 `length` 上的最高值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `length` | <code>series&nbsp;int</code> |  | 要檢查的 bars 數量。 |

**返回:** <code>series&nbsp;float</code>

</div>

<div v-show="_s1 === 1">

傳回 `source` 系列在指定 `length` 上的最高值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 要評估的傳入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 要檢查的 bars 數量。 |

**返回:** <code>series&nbsp;float</code>

**示例**

```navi
let highestHigh = ta.highest(high, 20);
plot(highestHigh, title: "20-bar High", color: color.RED,
style: PlotStyle.Stepline);
```

</div>

---

### highest_bars {#highest_bars}

<OverloadTabs v-model="_s2" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">ta.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">highest_bars</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(source</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, length</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">ta.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">highest_bars</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(length</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>"]' />

<div v-show="_s2 === 0">

傳回自指定 `length` 上 `source` 系列的最高值以來 bars 的數量。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 要評估的傳入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 要檢查的 bars 數量。 |

**返回:** <code>series&nbsp;int</code> — 非正偏移量（如果最高的是當前 bar，則為 0，否則為負），或者如果窗口中的任何值為 `na`，則為 `na`。

</div>

<div v-show="_s2 === 1">

傳回自指定 `length` 上 `high` 系列的最高值以來 bars 的數量。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `length` | <code>series&nbsp;int</code> |  | 要檢查的 bars 數量。 |

**返回:** <code>series&nbsp;int</code>

</div>

---

### hma {#hma}

```navi
ta.hma(source: series float, length: simple int): series float
```

船體移動平均線（HMA）。其目的是在保持平滑曲線的同時減少滯後。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 用於計算的傳入系列。 |
| `length` | <code>simple&nbsp;int</code> |  | 用於計算的 bars 數量。 |

**返回:** <code>series&nbsp;float</code>

---

### kc {#kc}

```navi
ta.kc(
    series: series float,
    length: simple int,
    mult: simple float,
    use_true_range: simple bool = true
  )
```

肯特納通道 (KC)。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `series` | <code>series&nbsp;float</code> |  | KC 計算的傳入系列。 |
| `length` | <code>simple&nbsp;int</code> |  | 用於計算的 bars 數量。 |
| `mult` | <code>simple&nbsp;float</code> |  | 通道頻帶的乘數。 |
| `use_true_range` | <code>simple&nbsp;bool</code> | `true` | 是否使用真實範圍。 |

**返回:** `[basis, upper, lower]` 的元組，其中基礎是 EMA，上限/下限是基礎 ± 乘數 × 範圍 EMA。

---

### kcw {#kcw}

```navi
ta.kcw(
    series: series float,
    length: simple int,
    mult: simple float,
    use_true_range: simple bool = true
  ): series float
```

肯特納通道寬度 (KCW)。它測量肯特納通道相對於移動平均線的寬度。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `series` | <code>series&nbsp;float</code> |  | KCW 計算的傳入系列。 |
| `length` | <code>simple&nbsp;int</code> |  | 用於計算的 bars 數量。 |
| `mult` | <code>simple&nbsp;float</code> |  | 通道頻帶的乘數。 |
| `use_true_range` | <code>simple&nbsp;bool</code> | `true` | 是否使用真實範圍。 |

**返回:** <code>series&nbsp;float</code> — 通道寬度的比率：`(upper - lower) / basis`。

---

### linreg {#linreg}

```navi
ta.linreg(
    source: series float,
    length: series int,
    offset: simple int
  ): series float
```

線性迴歸 (LINREG)。它在指定的 `length` 上將線性迴歸線擬合到 `source` 系列，並傳回給定 `offset` 處的值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 用於計算的傳入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 迴歸的 bars 數量。 |
| `offset` | <code>simple&nbsp;int</code> |  | 迴歸線的偏移量（未來的 bar 偏移量）。 |

**返回:** <code>series&nbsp;float</code>

---

### lowest {#lowest}

<OverloadTabs v-model="_s3" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">ta.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">lowest</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(length</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">ta.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">lowest</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(source</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, length</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s3 === 0">

傳回指定 `length` 上 `low` 系列的最小值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `length` | <code>series&nbsp;int</code> |  | 要檢查的 bars 數量。 |

**返回:** <code>series&nbsp;float</code>

</div>

<div v-show="_s3 === 1">

傳回指定 `length` 上 `source` 系列的最小值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 要評估的傳入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 要檢查的 bars 數量。 |

**返回:** <code>series&nbsp;float</code>

</div>

---

### lowest_bars {#lowest_bars}

<OverloadTabs v-model="_s4" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">ta.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">lowest_bars</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(source</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, length</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">ta.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">lowest_bars</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(length</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>"]' />

<div v-show="_s4 === 0">

傳回自指定 `length` 上 `source` 系列的最低值以來 bars 的數量。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 要評估的傳入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 要檢查的 bars 數量。 |

**返回:** <code>series&nbsp;int</code> — 非正偏移（如果最低值是當前 bar，則為 0，否則為負），或者如果窗口中的任何值為 `na`，則為 `na`。

</div>

<div v-show="_s4 === 1">

傳回自指定 `length` 上 `low` 系列的最低值以來 bars 的數量。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `length` | <code>series&nbsp;int</code> |  | 要檢查的 bars 數量。 |

**返回:** <code>series&nbsp;int</code>

</div>

---

### macd {#macd}

```navi
ta.macd(
    source: series float,
    fast_length: simple int,
    slow_length: simple int,
    signal_length: simple int
  )
```

移動平均收斂分歧 (MACD)。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 用於計算的傳入系列。 |
| `fast_length` | <code>simple&nbsp;int</code> |  | 快速 EMA 的長度。 |
| `slow_length` | <code>simple&nbsp;int</code> |  | 慢速 EMA 的長度。 |
| `signal_length` | <code>simple&nbsp;int</code> |  | 信號線 EMA 的長度。 |

**返回:** `[macd_line, signal_line, histogram]` 的元組，其中直方圖 = macd_line − signal_line。

**示例**

```navi
let (macdLine, signalLine, histLine) = ta.macd(close, 12, 26, 9);
plot(macdLine,   title: "MACD",     color: color.BLUE);
plot(signalLine, title: "Signal",   color: color.ORANGE);
plot(histLine, title: "Hist", color: color.GRAY, style: PlotStyle.Histogram);
```

---

### max {#max}

```navi
ta.max(source: series float): series float
```

傳回 `source` 系列的最大值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 要評估的傳入系列。 |

**返回:** <code>series&nbsp;float</code>

---

### median {#median}

```navi
ta.median(source: series float, length: series int): series float
```

傳回指定 `length` 上 `source` 系列的中值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 要評估的傳入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用於計算的 bars 數量。 |

**返回:** <code>series&nbsp;float</code>

---

### mfi {#mfi}

```navi
ta.mfi(series: series float, length: series int): series float
```

資金流量指數（MFI）。它衡量指定 `length` 內資產的資金流入和流出。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `series` | <code>series&nbsp;float</code> |  | 用於計算的傳入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用於計算的 bars 數量。 |

**返回:** <code>series&nbsp;float</code> — 0 到 100 之間的值。高於 80 的值表示超買狀態，低於 20 表示超賣。

---

### min {#min}

```navi
ta.min(source: series float): series float
```

傳回 `source` 系列的最小值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 要評估的傳入系列。 |

**返回:** <code>series&nbsp;float</code>

---

### mode {#mode}

```navi
ta.mode(source: series float, length: series int): series float
```

傳回指定 `length` 上 `series` 系列的眾數（最常出現的值）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 要評估的傳入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用於計算的 bars 數量。 |

**返回:** <code>series&nbsp;float</code>

---

### mom {#mom}

```navi
ta.mom(source: series float, length: series int): series float
```

計算 `source` 系列在指定 `length` 上的動量。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 用於計算的傳入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用於計算的 bars 數量。 |

**返回:** <code>series&nbsp;float</code>

---

### percent_rank {#percent_rank}

```navi
ta.percent_rank(source: series float, length: series int): series float
```

傳回 `source` 系列中當前值相對於指定 `length` 的百分位數排名。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 要評估的傳入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用於計算的 bars 數量。 |

**返回:** <code>series&nbsp;float</code> — 0 到 100 之間的值，指示小於或等於當前值的值的百分比。

---

### percentile_linear_interpolation {#percentile_linear_interpolation}

```navi
ta.percentile_linear_interpolation(
    source: series float,
    length: series int,
    percentage: simple float
  ): series float
```

使用線性插值傳回 `source` 系列相對於指定 `length` 的百分位值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 要評估的傳入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用於計算的 bars 數量。 |
| `percentage` | <code>simple&nbsp;float</code> |  | 百分位值 (0-100)。 |

**返回:** <code>series&nbsp;float</code>

---

### percentile_nearest_rank {#percentile_nearest_rank}

```navi
ta.percentile_nearest_rank(
    source: series float,
    length: series int,
    percentage: simple float
  ): series float
```

使用最近排名方法傳回 `source` 系列相對於指定 `length` 的百分位數值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 要評估的傳入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用於計算的 bars 數量。 |
| `percentage` | <code>simple&nbsp;float</code> |  | 百分位值 (0-100)。 |

**返回:** <code>series&nbsp;float</code>

---

### pivot_high {#pivot_high}

<OverloadTabs v-model="_s5" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">ta.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">pivot_high</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(source</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, left_bars</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, right_bars</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">ta.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">pivot_high</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(left_bars</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, right_bars</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s5 === 0">

傳回樞軸高點的價格。

如果沒有樞軸高點，則傳回“NaN”。


**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 要分析的傳入系列。 |
| `left_bars` | <code>series&nbsp;int</code> |  | 要檢查的左側 bars 的數量。 |
| `right_bars` | <code>series&nbsp;int</code> |  | 要檢查的右側 bars 的數量。 |

**返回:** <code>series&nbsp;float</code> — 樞軸最高價格（由 `rightbars` 抵消），如果在該點未找到樞軸，則為 `na`。

</div>

<div v-show="_s5 === 1">

傳回樞軸高點的價格。

如果沒有樞軸高點，則傳回“NaN”。


**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `left_bars` | <code>series&nbsp;int</code> |  | 要檢查的左側 bars 的數量。 |
| `right_bars` | <code>series&nbsp;int</code> |  | 要檢查的右側 bars 的數量。 |

**返回:** <code>series&nbsp;float</code> — 樞軸高點價格（按 `rightbars` 偏移），如果未找到則傳回 `na`。

</div>

---

### pivot_low {#pivot_low}

<OverloadTabs v-model="_s6" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">ta.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">pivot_low</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(source</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, left_bars</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, right_bars</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">ta.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">pivot_low</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(left_bars</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, right_bars</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s6 === 0">

傳回樞軸低點的價格。

如果沒有樞軸低點，則傳回“NaN”。


**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 要分析的傳入系列。 |
| `left_bars` | <code>series&nbsp;int</code> |  | 要檢查的左側 bars 的數量。 |
| `right_bars` | <code>series&nbsp;int</code> |  | 要檢查的右側 bars 的數量。 |

**返回:** <code>series&nbsp;float</code> — 樞軸低價（由 `rightbars` 抵消），如果在該點未找到樞軸，則為 `na`。

</div>

<div v-show="_s6 === 1">

傳回樞軸低點的價格。

如果沒有樞軸低點，則傳回“NaN”。


**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `left_bars` | <code>series&nbsp;int</code> |  | 要檢查的左側 bars 的數量。 |
| `right_bars` | <code>series&nbsp;int</code> |  | 要檢查的右側 bars 的數量。 |

**返回:** <code>series&nbsp;float</code> — 樞軸低點價格（按 `rightbars` 偏移），如果未找到則傳回 `na`。

</div>

---

### pivot_point_levels {#pivot_point_levels}

```navi
ta.pivot_point_levels(
    type: series PivotType,
    change: series bool
  ): series Array<float>
```

Returns an array of pivot point levels for the specified pivot type.

The returned array contains up to 11 values in the order: [P, S1, R1, S2, R2, S3, R3, S4, R4, S5, R5]. Levels that do not apply for the chosen type are `na`.

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `type` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/ta/PivotType">PivotType</a></code> |  | The pivot calculation method. |
| `change` | <code>series&nbsp;bool</code> |  | `true` on the first bar of a new pivot period. |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array&lt;float&gt;</a></code>

---

### range {#range}

```navi
ta.range(source: series float, length: series int): series float
```

傳回指定 `length` 上 `source` 系列的範圍（最高和最低之間的差）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 要評估的傳入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用於計算的 bars 數量。 |

**返回:** <code>series&nbsp;float</code>

---

### rci {#rci}

```navi
ta.rci(source: series float, length: simple int): series float
```

排名相關指數（RCI）。它測量指定 `length` 上兩個變量的排名之間的線性關係的強度和方向。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 用於計算的傳入系列。 |
| `length` | <code>simple&nbsp;int</code> |  | 用於計算的 bars 數量。 |

**返回:** <code>series&nbsp;float</code> — 值介於 -100 和 100 之間。+100 表示價格完全上漲，-100 表示價格完全下跌。

---

### rising {#rising}

```navi
ta.rising(source: series float, length: series int): series bool
```

檢查 `source` 系列是否上升到超過指定的 `length`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 要檢查的傳入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 要檢查的 bars 數量。 |

**返回:** <code>series&nbsp;bool</code>

---

### rma {#rma}

```navi
ta.rma(source: series float, length: series int): series float
```

遞歸移動平均線 (RMA)。它類似於指數移動平均線 (EMA)，但使用不同的平滑因子。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 用於計算的傳入系列。 |
| `length` | <code>series&nbsp;int</code> |  | RMA 計算的長度。 |

**返回:** <code>series&nbsp;float</code>

---

### roc {#roc}

```navi
ta.roc(source: series float, length: series int): series float
```

變化率 (ROC)。它測量當前值與 `length` bars 之前的值之間的百分比變化。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 用於計算的傳入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用於比較的 bars 數量。 |

**返回:** <code>series&nbsp;float</code> — 百分比變化：`100 × (source − source[length]) / source[length]`。

---

### rsi {#rsi}

```navi
ta.rsi(source: series float, length: series int): series float
```

相對強弱指數（RSI）。它測量指定 `length` 內價格變動的速度和變化。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 用於計算的傳入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用於計算的 bars 數量。 |

**返回:** <code>series&nbsp;float</code> — 介於 0 和 100 之間的值。高於 70 的值通常表示超買，低於 30 的值通常表示超賣。

**示例**

```navi
let rsiValue = ta.rsi(close, 14);
plot(rsiValue, title: "RSI", color: color.PURPLE);
hline(70, "Overbought", color: color.RED);
hline(30, "Oversold", color: color.GREEN);
```

---

### sar {#sar}

```navi
ta.sar(start: simple float, inc: simple float, max: simple float): series float
```

拋物線轉向指標。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `start` | <code>simple&nbsp;float</code> |  | 啓動加速因子。 |
| `inc` | <code>simple&nbsp;float</code> |  | 加速因子的增量。 |
| `max` | <code>simple&nbsp;float</code> |  | 最大加速係數。 |

**返回:** <code>series&nbsp;float</code> — 當前 bar 的 SAR 值。

---

### sma {#sma}

```navi
ta.sma(source: series float, length: series int): series float
```

簡單移動平均線 (SMA)。計算指定 `length` 上 `source` 系列的平均值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 用於計算的傳入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用於計算的 bars 數量。 |

**返回:** <code>series&nbsp;float</code>

**示例**

```navi
let sma20 = ta.sma(close, 20);
plot(sma20, title: "SMA 20", color: color.BLUE);
```

---

### stdev {#stdev}

```navi
ta.stdev(
    source: series float,
    length: series int,
    biased: series bool = true
  ): series float
```

計算 `source` 系列相對於指定 `length` 的標準差。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 用於計算的傳入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用於計算的 bars 數量。 |
| `biased` | <code>series&nbsp;bool</code> | `true` | 如果為 true，函數將使用整個總體的有偏估計進行計算，如果為 false，則使用樣本的無偏估計進行計算。 |

**返回:** <code>series&nbsp;float</code>

---

### stoch {#stoch}

```navi
ta.stoch(
    source: series float,
    high: series float,
    low: series float,
    length: series int
  ): series float
```

隨機振盪指標 (STOCH)。它將 `source` 系列與其指定 `length` 上的價格範圍進行比較。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 用於計算的傳入系列。 |
| `high` | <code>series&nbsp;float</code> |  | 該系列的高級系列。 |
| `low` | <code>series&nbsp;float</code> |  | 該系列的低系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用於計算的 bars 數量。 |

**返回:** <code>series&nbsp;float</code> — 0 到 100 之間的值，表示源在高低範圍內的位置。

---

### supertrend {#supertrend}

```navi
ta.supertrend(factor: series float, atr_period: simple int)
```

超級趨勢指標。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `factor` | <code>series&nbsp;float</code> |  | SuperTrend 計算中 ATR 的乘數。 |
| `atr_period` | <code>simple&nbsp;int</code> |  | ATR 計算的週期。 |

**返回:** `[super_trend, direction]` 的元組，其中方向為 -1（上升趨勢/看漲）或 1（下降趨勢/看跌）。

---

### swma {#swma}

```navi
ta.swma(source: series float): series float
```

平滑加權移動平均線 (SWMA)。它將加權移動平均平滑應用於 `source` 系列。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 用於計算的傳入系列。 |

**返回:** <code>series&nbsp;float</code>

---

### tema {#tema}

```navi
ta.tema(source: series float, length: simple int): series float
```

Triple Exponential Moving Average (TEMA).

Further reduces EMA lag using three layers of smoothing. Formula: `3*EMA1 - 3*EMA2 + EMA3` where each EMA is applied to the previous layer's output.

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The series to smooth. |
| `length` | <code>simple&nbsp;int</code> |  | The smoothing period. |

**返回:** <code>series&nbsp;float</code>

---

### tr {#fn-tr}

```navi
ta.tr(handle_na: simple bool): series float
```

真實波幅 ​​(TR)。通過考慮 bars 之間的差距來衡量波動性。 TR 是以下各項中最大的一個：（最高價 - 最低價）、|最高價 - 前收盤價|、|最低價 - 前收盤價|。這捕捉了隔夜差距並限制了僅高低點會錯過的走勢。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `handle_na` | <code>simple&nbsp;bool</code> |  | 如果為 true 並且上一次收盤價為 `na`（第一個 bar），則使用 `high - low` 作為 TR。如果為 false，則在這種情況下傳回 `na`。 |

**返回:** <code>series&nbsp;float</code>

---

### tsi {#tsi}

```navi
ta.tsi(
    source: series float,
    short_length: simple int,
    long_length: simple int
  ): series float
```

真實強度指數（TSI）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 用於計算的傳入系列。 |
| `short_length` | <code>simple&nbsp;int</code> |  | 用於 TSI 計算的短 EMA 長度。 |
| `long_length` | <code>simple&nbsp;int</code> |  | 用於 TSI 計算的長 EMA 長度。 |

**返回:** <code>series&nbsp;float</code> — -1.0 和 1.0 之間的值表示動量強度和方向。

---

### value_when {#value_when}

```navi
ta.value_when(
    condition: series bool,
    source: series T,
    occurrence: simple int
  ): series T
```

傳回當指定的 `occurrence` 的 `condition` 為 true 時 `source` 系列的值。 `occurrence` 參數選擇要傳回的匹配項：0 表示最近的匹配項，1 表示之前的匹配項，等等。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `condition` | <code>series&nbsp;bool</code> |  | 評估的條件。 |
| `source` | <code>series&nbsp;T</code> |  | 要從中檢索值的系列。 |
| `occurrence` | <code>simple&nbsp;int</code> |  | 要檢索的事件（0 表示最近的事件）。 |

**返回:** <code>series&nbsp;T</code> — 指定出現處的 `source` 值，如果出現的匹配項較少，則為 `na`。

---

### variance {#variance}

```navi
ta.variance(
    source: series float,
    length: series int,
    biased: series bool = true
  ): series float
```

`source` 系列相對於指定 `length` 的方差。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 用於計算的傳入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用於計算的 bars 數量。 |
| `biased` | <code>series&nbsp;bool</code> | `true` | 如果為真，則使用有偏估計；如果為 false，則使用無偏估計。 |

**返回:** <code>series&nbsp;float</code>

---

### vhf {#vhf}

```navi
ta.vhf(source: series float, length: simple int): series float
```

Vertical Horizontal Filter (VHF).

Identifies whether the market is trending or ranging by comparing the price range to the sum of absolute bar-to-bar changes. Higher values indicate a stronger trend; lower values indicate choppiness. Formula: `(highest - lowest) / sum(|change|, length)`.

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The price series to analyze. |
| `length` | <code>simple&nbsp;int</code> |  | The lookback period. |

**返回:** <code>series&nbsp;float</code>

---

### vwap {#fn-vwap}

<OverloadTabs v-model="_s7" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">ta.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">vwap</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(source</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, anchor</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, stdev_mult</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">ta.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">vwap</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(source</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, anchor</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> timeframe.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">change</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">\"1D\"</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">))</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s7 === 0">

具有可選標準偏差範圍的成交量加權平均價格。 VWAP 自錨定重置（通常每天）以來不斷累積，並按交易量對價格進行加權，從而提供機構經常使用的基準。傳回 [vwap, upper_band, lower_band] 的元組，其中 band 為 vwap +/- stdev_mult * stddev。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 價格系列（通常為hlc3）。 |
| `anchor` | <code>series&nbsp;bool</code> |  | 如果為 true，則重置 VWAP 計算。通常為 `timeframe.change(\"1D\")`。 |
| `stdev_mult` | <code>series&nbsp;float</code> |  | 標準偏差帶的乘數。使用 `na` 禁用頻段。 |

**返回:** `[vwap, upper_band, lower_band]` 的元組。當 `stdev_mult` 為 `na` 時，條帶為 `na`。

</div>

<div v-show="_s7 === 1">

無區間的成交量加權平均價格。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 價格系列（通常為hlc3）。 |
| `anchor` | <code>series&nbsp;bool</code> | `timeframe.change("1D")` | 如果為 true，則重置 VWAP。默認為每日重置 (`timeframe.change(\"1D\")`)。 |

**返回:** <code>series&nbsp;float</code> — 當 `anchor` 為 true 時重置的單個 VWAP 系列。

</div>

---

### vwma {#vwma}

```navi
ta.vwma(source: series float, length: series int): series float
```

成交量加權移動平均線（VWMA）。它賦予交易量較大的時段更大的權重。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 用於計算的傳入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用於計算的 bars 數量。 |

**返回:** <code>series&nbsp;float</code>

---

### wma {#wma}

```navi
ta.wma(source: series float, length: series int): series float
```

加權移動平均線（WMA）。它為最近的資料點分配更多的權重。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 用於計算的傳入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用於計算的 bars 數量。 |

**返回:** <code>series&nbsp;float</code>

---

### wpr {#wpr}

```navi
ta.wpr(length: series int): series float
```

威廉姆斯百分比範圍 (WPR)。它通過將 `close` 價格與指定 `length` 上的高低範圍進行比較來衡量超買和超賣水平。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `length` | <code>series&nbsp;int</code> |  | 用於計算的 bars 數量。 |

**返回:** <code>series&nbsp;float</code> — 介於 -100 和 0 之間的值。高於 -20 的值表示超買，低於 -80 的值表示超賣。
