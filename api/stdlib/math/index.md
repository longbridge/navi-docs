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

## Properties

### e {#e}

**Type:** <code>const&nbsp;float</code>

The mathematical constant e (Euler's number), approximately 2.71828.

The base of natural logarithms and the limit of (1 + 1/n)^n as n approaches infinity.

---

### phi {#phi}

**Type:** <code>const&nbsp;float</code>

The golden ratio φ (phi), approximately 1.61803.

Two quantities are in the golden ratio if their ratio equals the ratio of their sum to the larger quantity. Common in natural patterns and technical analysis (Fibonacci retracements).

---

### pi {#pi}

**Type:** <code>const&nbsp;float</code>

The mathematical constant π (pi), approximately 3.14159.

Represents the ratio of a circle's circumference to its diameter.

---

### reciprocal_phi {#reciprocal_phi}

**Type:** <code>const&nbsp;float</code>

The reciprocal of the golden ratio (1/φ), approximately 0.61803.

Equal to φ - 1. Used in Fibonacci analysis where 61.8% is a key retracement level.

## Functions

### abs {#abs}

<OverloadTabs v-model="_s0" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">math.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">abs</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(n</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">math.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">abs</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(n</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s0 === 0">

Returns the absolute value of `n`.

For positive numbers, returns `n` unchanged. For negative numbers, returns `-n`. For zero, returns zero.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | <code>int</code> |  | The integer value. |

**Returns:** <code>int</code>

</div>

<div v-show="_s0 === 1">

Returns the absolute value of `n`.

For positive numbers, returns `n` unchanged. For negative numbers, returns `-n`. For zero, returns zero.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | <code>float</code> |  | The float value. |

**Returns:** <code>float</code>

</div>

---

### acos {#acos}

```navi
math.acos(value: float): float
```

Returns the arccosine (inverse cosine) of `value` in degrees.

Given a cosine value, returns the angle that produces it.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | <code>float</code> |  | The cosine value (must be between -1 and 1). |

**Returns:** <code>float</code> — An angle in degrees in the range [0, 180].

---

### asin {#asin}

```navi
math.asin(value: float): float
```

Returns the arcsine (inverse sine) of `value` in degrees.

Given a sine value, returns the angle that produces it.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | <code>float</code> |  | The sine value (must be between -1 and 1). |

**Returns:** <code>float</code> — An angle in degrees in the range [-90, 90].

---

### atan {#atan}

```navi
math.atan(value: float): float
```

Returns the arctangent (inverse tangent) of `value` in degrees.

Given a tangent value, returns the angle that produces it.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | <code>float</code> |  | The tangent value (any real number). |

**Returns:** <code>float</code> — An angle in degrees in the range (-90, 90).

---

### atan2 {#atan2}

```navi
math.atan2(y: float, x: float): float
```

Returns the four-quadrant arctangent of `y/x` in degrees.

Unlike <a class="stdlib-ref" data-key="math::atan" href="/api/stdlib/math/#atan">atan</a>, this function takes two arguments and determines the correct quadrant using the signs of both. Useful for computing angles between vectors or points.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `y` | <code>float</code> |  | The Y component (numerator). |
| `x` | <code>float</code> |  | The X component (denominator). |

**Returns:** <code>float</code> — An angle in degrees in the range (-180, 180].

---

### avg {#avg}

<OverloadTabs v-model="_s1" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">math.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">avg</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(numbers</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">math.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">avg</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(numbers</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s1 === 0">

Returns the average (arithmetic mean) of all provided arguments.

Accepts a variable number of integer arguments.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `numbers` | <code>int</code> |  | Two or more integer values to average. |

**Returns:** <code>float</code>

</div>

<div v-show="_s1 === 1">

Returns the average (arithmetic mean) of all provided arguments.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `numbers` | <code>float</code> |  | Two or more float values to average. |

**Returns:** <code>float</code>

</div>

---

### cbrt {#cbrt}

```navi
math.cbrt(n: float): float
```

Returns the cube root of `n`.

Correctly handles negative inputs (e.g., `cbrt(-8.0) = -2.0`), unlike `pow(n, 1.0/3.0)` which returns `na` for negatives.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | <code>float</code> |  | The value to take the cube root of. |

**Returns:** <code>float</code>

---

### ceil {#ceil}

```navi
math.ceil(n: float): int
```

Returns the ceiling of `n`: the smallest integer greater than or equal to `n`.

E.g., ceil(2.3) = 3, ceil(-2.3) = -2.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | <code>float</code> |  | The value to round up. |

**Returns:** <code>int</code>

---

### clamp {#clamp}

```navi
math.clamp(value: float, min: float, max: float): float
```

Clamps `value` to the closed interval `[min, max]`.

Returns `min` if `value &lt; min`, `max` if `value &gt; max`, otherwise `value`. Avoids the verbose `math.max(min, math.min(max, x))` pattern.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | <code>float</code> |  | The value to clamp. |
| `min` | <code>float</code> |  | The lower bound (inclusive). |
| `max` | <code>float</code> |  | The upper bound (inclusive). |

**Returns:** <code>float</code>

---

### cos {#cos}

```navi
math.cos(angle: float): float
```

Returns the cosine of `angle`.

Note: Navi uses degrees, not radians (unlike most programming languages).

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `angle` | <code>float</code> |  | The angle in degrees. |

**Returns:** <code>float</code> — A value between -1 and 1.

---

### exp {#exp}

```navi
math.exp(n: float): float
```

Returns e (Euler's number) raised to the power of `n`.

The inverse of <a class="stdlib-ref" data-key="math::log" href="/api/stdlib/math/#log">log</a>. Useful for exponential growth/decay calculations.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | <code>float</code> |  | The exponent value. |

**Returns:** <code>float</code>

---

### floor {#floor}

```navi
math.floor(n: float): int
```

Returns the floor of `n`: the largest integer less than or equal to `n`.

E.g., floor(2.7) = 2, floor(-2.3) = -3.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | <code>float</code> |  | The value to round down. |

**Returns:** <code>int</code>

---

### hypot {#hypot}

```navi
math.hypot(x: float, y: float): float
```

Returns the hypotenuse of a right triangle with legs `x` and `y`.

Equivalent to `sqrt(x*x + y*y)` but numerically stable (avoids overflow for large inputs).

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | <code>float</code> |  | The length of the first leg. |
| `y` | <code>float</code> |  | The length of the second leg. |

**Returns:** <code>float</code>

---

### log {#log}

```navi
math.log(n: float): float
```

Returns the natural logarithm (base e) of `n`.

The inverse of <a class="stdlib-ref" data-key="math::exp" href="/api/stdlib/math/#exp">exp</a>. Returns `na` for non-positive values.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | <code>float</code> |  | The value (must be positive). |

**Returns:** <code>float</code>

---

### log10 {#log10}

```navi
math.log10(n: float): float
```

Returns the base-10 (common) logarithm of `n`.

Useful for calculating orders of magnitude. Returns `na` for non-positive values.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | <code>float</code> |  | The value (must be positive). |

**Returns:** <code>float</code>

---

### max {#max}

<OverloadTabs v-model="_s2" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">math.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">max</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(numbers</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">math.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">max</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(numbers</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s2 === 0">

Returns the maximum value among all provided arguments.

Accepts a variable number of integer arguments.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `numbers` | <code>int</code> |  | Two or more integer values to compare. |

**Returns:** <code>int</code>

</div>

<div v-show="_s2 === 1">

Returns the maximum value among all provided arguments.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `numbers` | <code>float</code> |  | Two or more float values to compare. |

**Returns:** <code>float</code>

</div>

---

### min {#min}

<OverloadTabs v-model="_s3" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">math.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">min</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(numbers</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">math.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">min</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(numbers</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s3 === 0">

Returns the minimum value among all provided arguments.

Accepts a variable number of integer arguments.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `numbers` | <code>int</code> |  | Two or more integer values to compare. |

**Returns:** <code>int</code>

</div>

<div v-show="_s3 === 1">

Returns the minimum value among all provided arguments.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `numbers` | <code>float</code> |  | Two or more float values to compare. |

**Returns:** <code>float</code>

</div>

---

### pow {#pow}

```navi
math.pow(base: float, exponent: float): float
```

Returns `base` raised to the power of `exponent`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `base` | <code>float</code> |  | The base value. |
| `exponent` | <code>float</code> |  | The power to raise the base to. |

**Returns:** <code>float</code>

---

### random {#random}

```navi
math.random(
    min: series float = 0,
    max: series float = 1,
    seed: series int = na
  ): series float
```

Generates a pseudo-random number in the range [min, max).

The same seed produces the same sequence of numbers, useful for reproducible results.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `min` | <code>series&nbsp;float</code> | `0` | Lower bound of the range (inclusive). Defaults to 0. |
| `max` | <code>series&nbsp;float</code> | `1` | Upper bound of the range (exclusive). Defaults to 1. |
| `seed` | <code>series&nbsp;int</code> | `na` | Optional seed for reproducibility. If `na`, uses system randomness. |

**Returns:** <code>series&nbsp;float</code> — A float in the half-open interval `[min, max)`.

---

### round {#round}

```navi
math.round(n: float, precision: int = 0): int
```

Rounds `n` to the nearest integer, or to `precision` decimal places.

Uses round-half-up: 0.5 rounds to 1.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | <code>float</code> |  | The value to round. |
| `precision` | <code>int</code> | `0` | Number of decimal places (0 for integer rounding). |

**Returns:** <code>int</code>

---

### round_to_mintick {#round_to_mintick}

```navi
math.round_to_mintick(n: float): float
```

Rounds `n` to the nearest tick value for the current symbol.

The result is always a valid price that can be used for orders. Uses `syminfo.min_tick` as the rounding increment.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | <code>float</code> |  | The price value to round. |

**Returns:** <code>float</code>

---

### sign {#sign}

```navi
math.sign(n: float): float
```

Returns the sign of `n`: 1.0 for positive, -1.0 for negative, 0.0 for zero.

Useful for determining direction without magnitude.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | <code>float</code> |  | The value to check. |

**Returns:** <code>float</code> — 1.0, -1.0, or 0.0.

---

### sin {#sin}

```navi
math.sin(angle: float): float
```

Returns the sine of `angle`.

Note: Navi uses degrees, not radians (unlike most programming languages).

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `angle` | <code>float</code> |  | The angle in degrees. |

**Returns:** <code>float</code> — A value between -1 and 1.

---

### sqrt {#sqrt}

```navi
math.sqrt(n: float): float
```

Returns the square root of `n`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | <code>float</code> |  | The value (must be non-negative). |

**Returns:** <code>float</code> — The square root, or `na` for negative values.

---

### sum {#sum}

```navi
math.sum(source: series float, length: series int): series float
```

Calculates the rolling sum of `source` over the last `length` bars.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The series to sum. |
| `length` | <code>series&nbsp;int</code> |  | Number of bars to include (must be &gt;= 1). |

**Returns:** <code>series&nbsp;float</code> — The total of the most recent `length` values in the series.

---

### tan {#tan}

```navi
math.tan(angle: float): float
```

Returns the tangent of `angle`.

Note: Navi uses degrees, not radians. Undefined (returns very large values) at ±90°, ±270°, etc.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `angle` | <code>float</code> |  | The angle in degrees. |

**Returns:** <code>float</code>

---

### todegrees {#todegrees}

```navi
math.todegrees(rad: float): float
```

Converts an angle from radians to degrees.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `rad` | <code>float</code> |  | The angle in radians. |

**Returns:** <code>float</code>

---

### toradians {#toradians}

```navi
math.toradians(deg: float): float
```

Converts an angle from degrees to radians.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `deg` | <code>float</code> |  | The angle in degrees. |

**Returns:** <code>float</code>

---

### trunc {#trunc}

```navi
math.trunc(n: float): int
```

Truncates `n` toward zero (removes the fractional part).

Unlike <a class="stdlib-ref" data-key="math::floor" href="/api/stdlib/math/#floor">floor</a>, truncation toward zero is symmetric: `trunc(-1.9) = -1`, whereas `floor(-1.9) = -2`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | <code>float</code> |  | The value to truncate. |

**Returns:** <code>int</code>
