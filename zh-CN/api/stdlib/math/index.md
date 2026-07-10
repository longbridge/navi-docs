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

## 属性

### e {#e}

**类型:** <code>const&nbsp;float</code>

数学常数 e（欧拉数），约为 2.71828。自然对数的底数以及 n 接近无穷大时 (1 + 1/n)^n 的极限。

---

### phi {#phi}

**类型:** <code>const&nbsp;float</code>

黄金比例φ（phi），约为1.61803。如果两个数量的比率等于它们的总和与较大数量的比率，则它们处于黄金比例。常见于自然模式和技术分析（斐波那契回调）。

---

### pi {#pi}

**类型:** <code>const&nbsp;float</code>

数学常数π（pi），约为3.14159。表示圆的周长与其直径的比率。

---

### reciprocal_phi {#reciprocal_phi}

**类型:** <code>const&nbsp;float</code>

黄金比例的倒数 (1/φ)，约为 0.61803。等于 φ - 1。用于斐波那契分析，其中 61.8% 是关键回撤水平。

## 函数

### abs {#abs}

<OverloadTabs v-model="_s0" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">math.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">abs</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(n</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">math.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">abs</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(n</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s0 === 0">

返回 `n` 的绝对值。对于正数，返回 `n` 不变。对于负数，返回 `-n`。对于零，返回零。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `n` | <code>int</code> |  | 整数值。 |

**返回:** <code>int</code>

</div>

<div v-show="_s0 === 1">

返回 `n` 的绝对值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `n` | <code>float</code> |  | 浮点值。 |

**返回:** <code>float</code>

</div>

---

### acos {#acos}

```navi
math.acos(value: float): float
```

返回 `value` 的反余弦（反余弦），以度为单位。给定一个余弦值，返回产生该值的角度。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `value` | <code>float</code> |  | 余弦值（必须介于 -1 和 1 之间）。 |

**返回:** <code>float</code> — 范围 [0, 180] 内的角度（以度为单位）。

---

### asin {#asin}

```navi
math.asin(value: float): float
```

返回 `value` 的反正弦（反正弦），以度为单位。给定一个正弦值，返回产生该值的角度。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `value` | <code>float</code> |  | 正弦值（必须介于 -1 和 1 之间）。 |

**返回:** <code>float</code> — 范围 [-90, 90] 内的角度（以度为单位）。

---

### atan {#atan}

```navi
math.atan(value: float): float
```

返回 `value` 的反正切（反正切），以度为单位。给定正切值，返回产生该正切值的角度。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `value` | <code>float</code> |  | 正切值（任何实数）。 |

**返回:** <code>float</code> — (-90, 90) 范围内的角度（以度为单位）。

---

### atan2 {#atan2}

```navi
math.atan2(y: float, x: float): float
```

Returns the four-quadrant arctangent of `y/x` in degrees.

Unlike <a class="stdlib-ref" data-key="math::atan" href="/zh-CN/api/stdlib/math/#atan">atan</a>, this function takes two arguments and determines the correct quadrant using the signs of both. Useful for computing angles between vectors or points.

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `y` | <code>float</code> |  | The Y component (numerator). |
| `x` | <code>float</code> |  | The X component (denominator). |

**返回:** <code>float</code> — An angle in degrees in the range (-180, 180].

---

### avg {#avg}

<OverloadTabs v-model="_s1" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">math.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">avg</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(numbers</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">math.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">avg</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(numbers</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s1 === 0">

返回所有提供的参数的平均值（算术平均值）。接受可变数量的整数参数。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `numbers` | <code>int</code> |  | 要平均的两个或多个整数值。 |

**返回:** <code>float</code>

</div>

<div v-show="_s1 === 1">

返回所有提供的参数的平均值（算术平均值）。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `numbers` | <code>float</code> |  | 要平均的两个或多个浮点值。 |

**返回:** <code>float</code>

</div>

---

### cbrt {#cbrt}

```navi
math.cbrt(n: float): float
```

Returns the cube root of `n`.

Correctly handles negative inputs (e.g., `cbrt(-8.0) = -2.0`), unlike `pow(n, 1.0/3.0)` which returns `na` for negatives.

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `n` | <code>float</code> |  | The value to take the cube root of. |

**返回:** <code>float</code>

---

### ceil {#ceil}

```navi
math.ceil(n: float): int
```

返回 `n` 的上限：大于或等于 `n` 的最小整数。例如，ceil(2.3) = 3，ceil(-2.3) = -2。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
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

**参数**

| 名称 | 类型 | 默认值 | 说明 |
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

返回 `angle` 的余弦。注意：Navi 使用度数，而不是弧度（与大多数编程语言不同）。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `angle` | <code>float</code> |  | 角度（以度为单位）。 |

**返回:** <code>float</code> — 介于 -1 和 1 之间的值。

---

### exp {#exp}

```navi
math.exp(n: float): float
```

返回 e（欧拉数）的 `n` 次方。 <a class="stdlib-ref" data-key="math::log" href="/zh-CN/api/stdlib/math/#log">log</a> 的逆。对于指数增长/衰减计算很有用。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `n` | <code>float</code> |  | 指数值。 |

**返回:** <code>float</code>

---

### floor {#floor}

```navi
math.floor(n: float): int
```

返回 `n` 的下限：小于或等于 `n` 的最大整数。例如，地板（2.7）= 2，地板（-2.3）= -3。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
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

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `x` | <code>float</code> |  | The length of the first leg. |
| `y` | <code>float</code> |  | The length of the second leg. |

**返回:** <code>float</code>

---

### log {#log}

```navi
math.log(n: float): float
```

返回 `n` 的自然对数（以 e 为底）。 <a class="stdlib-ref" data-key="math::exp" href="/zh-CN/api/stdlib/math/#exp">exp</a> 的逆。对于非正值，返回 `na`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `n` | <code>float</code> |  | 值（必须为正）。 |

**返回:** <code>float</code>

---

### log10 {#log10}

```navi
math.log10(n: float): float
```

返回 `n` 的以 10 为底的（常用）对数。对于计算数量级很有用。对于非正值，返回 `na`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `n` | <code>float</code> |  | 值（必须为正）。 |

**返回:** <code>float</code>

---

### max {#max}

<OverloadTabs v-model="_s2" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">math.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">max</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(numbers</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">math.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">max</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(numbers</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s2 === 0">

返回所有提供的参数中的最大值。接受可变数量的整数参数。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `numbers` | <code>int</code> |  | 要比较的两个或多个整数值。 |

**返回:** <code>int</code>

</div>

<div v-show="_s2 === 1">

返回所有提供的参数中的最大值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `numbers` | <code>float</code> |  | 要比较的两个或多个浮点值。 |

**返回:** <code>float</code>

</div>

---

### min {#min}

<OverloadTabs v-model="_s3" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">math.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">min</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(numbers</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">math.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">min</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(numbers</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s3 === 0">

返回所有提供的参数中的最小值。接受可变数量的整数参数。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `numbers` | <code>int</code> |  | 要比较的两个或多个整数值。 |

**返回:** <code>int</code>

</div>

<div v-show="_s3 === 1">

返回所有提供的参数中的最小值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `numbers` | <code>float</code> |  | 要比较的两个或多个浮点值。 |

**返回:** <code>float</code>

</div>

---

### pow {#pow}

```navi
math.pow(base: float, exponent: float): float
```

返回 `base` 的 `exponent` 次方。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `base` | <code>float</code> |  | 基值。 |
| `exponent` | <code>float</code> |  | 将底座提升到的力量。 |

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

生成 [min, max) 范围内的伪随机数。相同的种子产生相同的数字序列，这对于可重现的结果很有用。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `min` | <code>series&nbsp;float</code> | `0` | 范围的下限（含）。默认为 0。 |
| `max` | <code>series&nbsp;float</code> | `1` | 范围的上限（不含）。默认为 1。 |
| `seed` | <code>series&nbsp;int</code> | `na` | 可选种子以提高重现性。如果 `na`，则使用系统随机性。 |

**返回:** <code>series&nbsp;float</code> — 半开区间 `[min, max)` 中的浮点数。

---

### round {#round}

```navi
math.round(n: float, precision: int = 0): int
```

将 `n` 四舍五入到最接近的整数，或四舍五入到 `precision` 小数位。使用向上舍入：0.5 舍入到 1。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `n` | <code>float</code> |  | 要舍入的值。 |
| `precision` | <code>int</code> | `0` | 小数位数（0 表示整数四舍五入）。 |

**返回:** <code>int</code>

---

### round_to_mintick {#round_to_mintick}

```navi
math.round_to_mintick(n: float): float
```

将 `n` 舍入到当前交易品种最接近的刻度值。结果始终是可用于订单的有效价格。使用 `syminfo.mintick` 作为舍入增量。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `n` | <code>float</code> |  | 价格值要四舍五入。 |

**返回:** <code>float</code>

---

### sign {#sign}

```navi
math.sign(n: float): float
```

返回 `n` 的符号：1.0 表示正数，-1.0 表示负数，0.0 表示零。对于确定没有大小的方向很有用。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `n` | <code>float</code> |  | 要检查的值。 |

**返回:** <code>float</code> — 1.0、-1.0 或 0.0。

---

### sin {#sin}

```navi
math.sin(angle: float): float
```

返回 `angle` 的正弦值。注意：Navi 使用度数，而不是弧度（与大多数编程语言不同）。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `angle` | <code>float</code> |  | 角度（以度为单位）。 |

**返回:** <code>float</code> — 介于 -1 和 1 之间的值。

---

### sqrt {#sqrt}

```navi
math.sqrt(n: float): float
```

返回 `n` 的平方根。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `n` | <code>float</code> |  | 该值（必须是非负数）。 |

**返回:** <code>float</code> — 平方根，或 `na` 表示负值。

---

### sum {#sum}

```navi
math.sum(source: series float, length: series int): series float
```

计算 `source` 对最后一个 `length` bars 的滚动总和。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 系列总结。 |
| `length` | <code>series&nbsp;int</code> |  | 要包含的 bars 数量（必须 &gt;= 1）。 |

**返回:** <code>series&nbsp;float</code> — 系列中最新 `length` 值的总数。

---

### tan {#tan}

```navi
math.tan(angle: float): float
```

返回 `angle` 的正切值。注意：Navi 使用度数，而不是弧度。 ±90°、±270° 等处未定义（返回非常大的值）。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `angle` | <code>float</code> |  | 角度（以度为单位）。 |

**返回:** <code>float</code>

---

### to_degrees {#to_degrees}

```navi
math.to_degrees(rad: float): float
```

将角度从弧度转换为度数。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `rad` | <code>float</code> |  | 以弧度表示的角度。 |

**返回:** <code>float</code>

---

### to_radians {#to_radians}

```navi
math.to_radians(deg: float): float
```

将角度从度数转换为弧度。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `deg` | <code>float</code> |  | 角度（以度为单位）。 |

**返回:** <code>float</code>

---

### trunc {#trunc}

```navi
math.trunc(n: float): int
```

Truncates `n` toward zero (removes the fractional part).

Unlike <a class="stdlib-ref" data-key="math::floor" href="/zh-CN/api/stdlib/math/#floor">floor</a>, truncation toward zero is symmetric: `trunc(-1.9) = -1`, whereas `floor(-1.9) = -2`.

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `n` | <code>float</code> |  | The value to truncate. |

**返回:** <code>int</code>
