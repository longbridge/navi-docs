---
title: "math"
---

<script setup>
import { ref } from 'vue'
const _s0 = ref(0)
const _s1 = ref(0)
const _s2 = ref(0)
const _s3 = ref(0)
</script>

# math

## 屬性

### e {#e}

**類型:** <code>const&nbsp;float</code>

數學常數 e（歐拉數），約為 2.71828。自然對數的底數以及 n 接近無窮大時 (1 + 1/n)^n 的極限。

---

### phi {#phi}

**類型:** <code>const&nbsp;float</code>

黃金比例φ（phi），約為1.61803。如果兩個數量的比率等於它們的總和與較大數量的比率，則它們處於黃金比例。常見於自然模式和技術分析（斐波那契回調）。

---

### pi {#pi}

**類型:** <code>const&nbsp;float</code>

數學常數π（pi），約為3.14159。表示圓的周長與其直徑的比率。

---

### reciprocal_phi {#reciprocal_phi}

**類型:** <code>const&nbsp;float</code>

黃金比例的倒數 (1/φ)，約為 0.61803。等於 φ - 1。用於斐波那契分析，其中 61.8% 是關鍵回撤水平。

## 函數

### abs {#abs}

<OverloadTabs v-model="_s0" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">math.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">abs</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(n</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">math.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">abs</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(n</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s0 === 0">

傳回 `n` 的絕對值。對於正數，傳回 `n` 不變。對於負數，傳回 `-n`。對於零，傳回零。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `n` | <code>int</code> |  | 整數值。 |

**返回:** <code>int</code>

</div>

<div v-show="_s0 === 1">

傳回 `n` 的絕對值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `n` | <code>float</code> |  | 浮點值。 |

**返回:** <code>float</code>

</div>

---

### acos {#acos}

```navi
math.acos(value: float): float
```

傳回 `value` 的反餘弦（反餘弦），以度為單位。給定一個餘弦值，傳回產生該值的角度。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `value` | <code>float</code> |  | 餘弦值（必須介於 -1 和 1 之間）。 |

**返回:** <code>float</code> — 範圍 [0, 180] 內的角度（以度為單位）。

---

### asin {#asin}

```navi
math.asin(value: float): float
```

傳回 `value` 的反正弦（反正弦），以度為單位。給定一個正弦值，傳回產生該值的角度。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `value` | <code>float</code> |  | 正弦值（必須介於 -1 和 1 之間）。 |

**返回:** <code>float</code> — 範圍 [-90, 90] 內的角度（以度為單位）。

---

### atan {#atan}

```navi
math.atan(value: float): float
```

傳回 `value` 的反正切（反正切），以度為單位。給定正切值，傳回產生該正切值的角度。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `value` | <code>float</code> |  | 正切值（任何實數）。 |

**返回:** <code>float</code> — (-90, 90) 範圍內的角度（以度為單位）。

---

### atan2 {#atan2}

```navi
math.atan2(y: float, x: float): float
```

Returns the four-quadrant arctangent of `y/x` in degrees.

Unlike <a class="stdlib-ref" data-key="math::atan" href="/zh-HK/api/stdlib/math/#atan">atan</a>, this function takes two arguments and determines the correct quadrant using the signs of both. Useful for computing angles between vectors or points.

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `y` | <code>float</code> |  | The Y component (numerator). |
| `x` | <code>float</code> |  | The X component (denominator). |

**返回:** <code>float</code> — An angle in degrees in the range (-180, 180].

---

### avg {#avg}

<OverloadTabs v-model="_s1" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">math.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">avg</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(numbers</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">math.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">avg</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(numbers</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s1 === 0">

傳回所有提供的參數的平均值（算術平均值）。接受可變數量的整數參數。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `numbers` | <code>int</code> |  | 要平均的兩個或多個整數值。 |

**返回:** <code>float</code>

</div>

<div v-show="_s1 === 1">

傳回所有提供的參數的平均值（算術平均值）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `numbers` | <code>float</code> |  | 要平均的兩個或多個浮點值。 |

**返回:** <code>float</code>

</div>

---

### cbrt {#cbrt}

```navi
math.cbrt(n: float): float
```

Returns the cube root of `n`.

Correctly handles negative inputs (e.g., `cbrt(-8.0) = -2.0`), unlike `pow(n, 1.0/3.0)` which returns `na` for negatives.

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `n` | <code>float</code> |  | The value to take the cube root of. |

**返回:** <code>float</code>

---

### ceil {#ceil}

```navi
math.ceil(n: float): int
```

傳回 `n` 的上限：大於或等於 `n` 的最小整數。例如，ceil(2.3) = 3，ceil(-2.3) = -2。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `n` | <code>float</code> |  | 要向上舍入的值。 |

**返回:** <code>int</code>

---

### clamp {#clamp}

```navi
math.clamp(value: float, min: float, max: float): float
```

Clamps `value` to the closed interval `[min, max]`.

Returns `min` if `value &lt; min`, `max` if `value &gt; max`, otherwise `value`. Avoids the verbose `math.max(min, math.min(max, x))` pattern.

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `value` | <code>float</code> |  | The value to clamp. |
| `min` | <code>float</code> |  | The lower bound (inclusive). |
| `max` | <code>float</code> |  | The upper bound (inclusive). |

**返回:** <code>float</code>

---

### cos {#cos}

```navi
math.cos(angle: float): float
```

傳回 `angle` 的餘弦。注意：Navi 使用度數，而不是弧度（與大多數編程語言不同）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `angle` | <code>float</code> |  | 角度（以度為單位）。 |

**返回:** <code>float</code> — 介於 -1 和 1 之間的值。

---

### exp {#exp}

```navi
math.exp(n: float): float
```

傳回 e（歐拉數）的 `n` 次方。 <a class="stdlib-ref" data-key="math::log" href="/zh-HK/api/stdlib/math/#log">log</a> 的逆。對於指數增長/衰減計算很有用。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `n` | <code>float</code> |  | 指數值。 |

**返回:** <code>float</code>

---

### floor {#floor}

```navi
math.floor(n: float): int
```

傳回 `n` 的下限：小於或等於 `n` 的最大整數。例如，地板（2.7）= 2，地板（-2.3）= -3。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `n` | <code>float</code> |  | 要向下舍入的值。 |

**返回:** <code>int</code>

---

### hypot {#hypot}

```navi
math.hypot(x: float, y: float): float
```

Returns the hypotenuse of a right triangle with legs `x` and `y`.

Equivalent to `sqrt(x*x + y*y)` but numerically stable (avoids overflow for large inputs).

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `x` | <code>float</code> |  | The length of the first leg. |
| `y` | <code>float</code> |  | The length of the second leg. |

**返回:** <code>float</code>

---

### log {#log}

```navi
math.log(n: float): float
```

傳回 `n` 的自然對數（以 e 為底）。 <a class="stdlib-ref" data-key="math::exp" href="/zh-HK/api/stdlib/math/#exp">exp</a> 的逆。對於非正值，傳回 `na`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `n` | <code>float</code> |  | 值（必須為正）。 |

**返回:** <code>float</code>

---

### log10 {#log10}

```navi
math.log10(n: float): float
```

傳回 `n` 的以 10 為底的（常用）對數。對於計算數量級很有用。對於非正值，傳回 `na`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `n` | <code>float</code> |  | 值（必須為正）。 |

**返回:** <code>float</code>

---

### max {#max}

<OverloadTabs v-model="_s2" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">math.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">max</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(numbers</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">math.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">max</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(numbers</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s2 === 0">

傳回所有提供的參數中的最大值。接受可變數量的整數參數。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `numbers` | <code>int</code> |  | 要比較的兩個或多個整數值。 |

**返回:** <code>int</code>

</div>

<div v-show="_s2 === 1">

傳回所有提供的參數中的最大值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `numbers` | <code>float</code> |  | 要比較的兩個或多個浮點值。 |

**返回:** <code>float</code>

</div>

---

### min {#min}

<OverloadTabs v-model="_s3" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">math.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">min</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(numbers</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">math.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">min</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(numbers</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s3 === 0">

傳回所有提供的參數中的最小值。接受可變數量的整數參數。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `numbers` | <code>int</code> |  | 要比較的兩個或多個整數值。 |

**返回:** <code>int</code>

</div>

<div v-show="_s3 === 1">

傳回所有提供的參數中的最小值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `numbers` | <code>float</code> |  | 要比較的兩個或多個浮點值。 |

**返回:** <code>float</code>

</div>

---

### pow {#pow}

```navi
math.pow(base: float, exponent: float): float
```

傳回 `base` 的 `exponent` 次方。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `base` | <code>float</code> |  | 基值。 |
| `exponent` | <code>float</code> |  | 將底座提升到的力量。 |

**返回:** <code>float</code>

---

### random {#random}

```navi
math.random(
    min: series float = 0,
    max: series float = 1,
    seed: series int = na
  ): series float
```

生成 [min, max) 範圍內的偽隨機數。相同的種子產生相同的數字序列，這對於可重現的結果很有用。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `min` | <code>series&nbsp;float</code> | `0` | 範圍的下限（含）。默認為 0。 |
| `max` | <code>series&nbsp;float</code> | `1` | 範圍的上限（不含）。默認為 1。 |
| `seed` | <code>series&nbsp;int</code> | `na` | 可選種子以提高重現性。如果 `na`，則使用系統隨機性。 |

**返回:** <code>series&nbsp;float</code> — 半開區間 `[min, max)` 中的浮點數。

---

### round {#round}

```navi
math.round(n: float, precision: int = 0): int
```

將 `n` 四捨五入到最接近的整數，或四捨五入到 `precision` 小數位。使用向上舍入：0.5 舍入到 1。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `n` | <code>float</code> |  | 要舍入的值。 |
| `precision` | <code>int</code> | `0` | 小數位數（0 表示整數四捨五入）。 |

**返回:** <code>int</code>

---

### round_to_mintick {#round_to_mintick}

```navi
math.round_to_mintick(n: float): float
```

將 `n` 舍入到當前交易品種最接近的刻度值。結果始終是可用於訂單的有效價格。使用 `syminfo.mintick` 作為舍入增量。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `n` | <code>float</code> |  | 價格值要四捨五入。 |

**返回:** <code>float</code>

---

### sign {#sign}

```navi
math.sign(n: float): float
```

傳回 `n` 的符號：1.0 表示正數，-1.0 表示負數，0.0 表示零。對於確定沒有大小的方向很有用。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `n` | <code>float</code> |  | 要檢查的值。 |

**返回:** <code>float</code> — 1.0、-1.0 或 0.0。

---

### sin {#sin}

```navi
math.sin(angle: float): float
```

傳回 `angle` 的正弦值。注意：Navi 使用度數，而不是弧度（與大多數編程語言不同）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `angle` | <code>float</code> |  | 角度（以度為單位）。 |

**返回:** <code>float</code> — 介於 -1 和 1 之間的值。

---

### sqrt {#sqrt}

```navi
math.sqrt(n: float): float
```

傳回 `n` 的平方根。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `n` | <code>float</code> |  | 該值（必須是非負數）。 |

**返回:** <code>float</code> — 平方根，或 `na` 表示負值。

---

### sum {#sum}

```navi
math.sum(source: series float, length: series int): series float
```

計算 `source` 對最後一個 `length` bars 的滾動總和。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 系列總結。 |
| `length` | <code>series&nbsp;int</code> |  | 要包含的 bars 數量（必須 &gt;= 1）。 |

**返回:** <code>series&nbsp;float</code> — 系列中最新 `length` 值的總數。

---

### tan {#tan}

```navi
math.tan(angle: float): float
```

傳回 `angle` 的正切值。注意：Navi 使用度數，而不是弧度。 ±90°、±270° 等處未定義（傳回非常大的值）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `angle` | <code>float</code> |  | 角度（以度為單位）。 |

**返回:** <code>float</code>

---

### todegrees {#todegrees}

```navi
math.todegrees(rad: float): float
```

將角度從弧度轉換為度數。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `rad` | <code>float</code> |  | 以弧度表示的角度。 |

**返回:** <code>float</code>

---

### toradians {#toradians}

```navi
math.toradians(deg: float): float
```

將角度從度數轉換為弧度。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `deg` | <code>float</code> |  | 角度（以度為單位）。 |

**返回:** <code>float</code>

---

### trunc {#trunc}

```navi
math.trunc(n: float): int
```

Truncates `n` toward zero (removes the fractional part).

Unlike <a class="stdlib-ref" data-key="math::floor" href="/zh-HK/api/stdlib/math/#floor">floor</a>, truncation toward zero is symmetric: `trunc(-1.9) = -1`, whereas `floor(-1.9) = -2`.

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `n` | <code>float</code> |  | The value to truncate. |

**返回:** <code>int</code>
