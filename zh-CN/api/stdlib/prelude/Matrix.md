---
title: "Matrix<T>"
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
const _s11 = ref(0)
const _s12 = ref(0)
const _s13 = ref(0)
const _s14 = ref(0)
const _s15 = ref(0)
const _s16 = ref(0)
const _s17 = ref(0)
const _s18 = ref(0)
const _s19 = ref(0)
const _s20 = ref(0)
const _s21 = ref(0)
const _s22 = ref(0)
const _s23 = ref(0)
const _s24 = ref(0)
const _s25 = ref(0)
const _s26 = ref(0)
</script>

# Matrix&lt;T&gt;

以行优先顺序存储的 `T` 类型元素的二维表。

**种类:** object

## 静态方法

### new {#new}

```navi
Matrix.new(
    rows: int = 0,
    columns: int = 0,
    initial_value: T = na
  ): const Matrix<T>
```

Creates a new matrix with the specified number of rows and columns, initializing all elements to the given initial value.

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `rows` | <code>int</code> | `0` | The number of rows in the matrix. |
| `columns` | <code>int</code> | `0` | The number of columns in the matrix. |
| `initial_value` | <code>T</code> | `na` | The initial value for all elements. |

**返回:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code>

## 方法

### add_col {#add_col}

```navi
Matrix.add_col(id: Matrix<T>, column: int = na, values: Array<T> = na)
```

将新列添加到给定列索引处的指定矩阵，用提供的值填充它，如果没有给出值，则用 `na` 填充。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | 将添加列的矩阵。 |
| `column` | <code>int</code> | `na` | 将插入列的索引。省略时，最后一列位置。 |
| `values` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> | `na` | 用于填充列的值数组，或用 na 值填充 na。 |

---

### add_row {#add_row}

```navi
Matrix.add_row(id: Matrix<T>, row: int = na, values: Array<T> = na)
```

将新行添加到指定矩阵的给定行索引处，用提供的值填充它，如果没有给出值，则用 `na` 填充。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | 将添加行的矩阵。 |
| `row` | <code>int</code> | `na` | 将插入行的索引。省略时，最后一行位置。 |
| `values` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> | `na` | 用于填充行的值数组，或用 na 值填充 na。 |

---

### avg {#avg}

<OverloadTabs v-model="_s0" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">avg</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">avg</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s0 === 0">

计算并返回指定矩阵中所有元素的平均值。如果矩阵为空或不包含任何值，则返回 `na`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 用于计算平均值的整数矩阵。 |

**返回:** <code>float</code>

</div>

<div v-show="_s0 === 1">

计算并返回指定矩阵中所有元素的平均值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 用于计算平均值的浮点矩阵。 |

**返回:** <code>float</code>

</div>

---

### col {#col}

```navi
Matrix.col(id: Matrix<T>, column: int): Array<T>
```

从矩阵的指定列检索所有元素并将它们作为数组返回。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | 要从中检索列的矩阵。 |
| `column` | <code>int</code> |  | 要检索的列索引。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code>

---

### columns {#columns}

```navi
Matrix.columns(id: Matrix<T>): int
```

返回指定矩阵中的列数。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | 从中获取列数的矩阵。 |

**返回:** <code>int</code>

---

### concat {#concat}

```navi
Matrix.concat(id1: Matrix<T>, id2: Matrix<T>)
```

将两个相同类型的矩阵连接到 `mat1` 并返回 `mat1`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | 要连接的第一个矩阵。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | 要连接的第二个矩阵。 |

---

### copy {#copy}

```navi
Matrix.copy(id: Matrix<T>)
```

创建给定矩阵的拷贝并返回新矩阵。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | 要复制的矩阵。 |

---

### det {#det}

<OverloadTabs v-model="_s1" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">det</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">det</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s1 === 0">

计算并返回指定方阵的行列式。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 用于计算行列式的整数矩阵。 |

**返回:** <code>int</code>

</div>

<div v-show="_s1 === 1">

计算并返回指定方阵的行列式。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 用于计算行列式的浮点矩阵。 |

**返回:** <code>float</code>

</div>

---

### diff {#diff}

<OverloadTabs v-model="_s2" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">diff</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, id2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">diff</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, id2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">diff</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, id2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">diff</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, id2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>"]' />

<div v-show="_s2 === 0">

计算相同维度的两个矩阵之间的逐元素差异，并返回包含结果的新矩阵。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 第一个整数矩阵。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 第二个整数矩阵。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code>

</div>

<div v-show="_s2 === 1">

计算两个相同维度矩阵的逐元素差值，并返回一个包含结果的新矩阵。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 第一个浮点矩阵。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 第二个浮点矩阵。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

<div v-show="_s2 === 2">

计算两个相同维度矩阵的逐元素差值，并返回一个包含结果的新矩阵。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 第一个整数矩阵。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 第二个浮点矩阵。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

<div v-show="_s2 === 3">

计算两个相同维度矩阵的逐元素差值，并返回一个包含结果的新矩阵。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 第一个浮点矩阵。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 第二个整数矩阵。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

---

### eigenvalues {#eigenvalues}

<OverloadTabs v-model="_s3" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">eigenvalues</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">eigenvalues</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>"]' />

<div v-show="_s3 === 0">

计算并返回指定方阵的特征值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 用于计算特征值的整数方阵。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

<div v-show="_s3 === 1">

返回指定方阵的特征值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 用于计算特征值的浮点方阵。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

---

### eigenvectors {#eigenvectors}

<OverloadTabs v-model="_s4" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">eigenvectors</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">eigenvectors</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>"]' />

<div v-show="_s4 === 0">

计算并返回指定方阵的特征向量。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 用于计算特征向量的整数方阵。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

<div v-show="_s4 === 1">

返回指定方阵的特征向量。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 用于计算特征向量的浮点方阵。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

---

### elements_count {#elements_count}

```navi
Matrix.elements_count(id: Matrix<T>): int
```

通过将指定矩阵的行数乘以其列数来返回指定矩阵中的元素总数。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | 要计算其元素数量的矩阵。 |

**返回:** <code>int</code>

---

### fill {#fill}

```navi
Matrix.fill(
    id: Matrix<T>,
    value: T,
    from_row: int = 0,
    to_row: int = id.rows(),
    from_column: int = 0,
    to_column: int = id.columns()
  )
```

用指定值填充给定矩阵的指定子矩阵。子矩阵由作为参数提供的行和列范围定义。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | 要填充的矩阵。 |
| `value` | <code>T</code> |  | 用于填充子矩阵的值。 |
| `from_row` | <code>int</code> | `0` | 起始行索引。 |
| `to_row` | <code>int</code> | `id.rows()` | 结束行索引。省略时，表示矩阵行数。 |
| `from_column` | <code>int</code> | `0` | 起始列索引。 |
| `to_column` | <code>int</code> | `id.columns()` | 结束列索引。省略时，表示矩阵列数。 |

---

### get {#get}

```navi
Matrix.get(id: Matrix<T>, row: int, column: int): T
```

从给定矩阵中检索指定行索引和列索引处的值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | 要从中检索值的矩阵。 |
| `row` | <code>int</code> |  | 元素的行索引。 |
| `column` | <code>int</code> |  | 元素的列索引。 |

**返回:** <code>T</code>

---

### inv {#inv}

<OverloadTabs v-model="_s5" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">inv</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">inv</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>"]' />

<div v-show="_s5 === 0">

计算并返回指定方阵的逆矩阵。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要反转的整数方阵。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

<div v-show="_s5 === 1">

计算指定方阵的逆矩阵。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 要反转的浮点方阵。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

---

### is_antidiagonal {#is_antidiagonal}

<OverloadTabs v-model="_s6" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_antidiagonal</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_antidiagonal</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>"]' />

<div v-show="_s6 === 0">

检查给定矩阵是否是反对角矩阵，如果是则返回 `true`，否则返回 `false`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要检查的整数矩阵。 |

**返回:** <code>bool</code>

</div>

<div v-show="_s6 === 1">

检查给定矩阵是否为反对角矩阵，如果是则返回 `true`，否则返回 `false`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 要检查的浮点矩阵。 |

**返回:** <code>bool</code>

</div>

---

### is_antisymmetric {#is_antisymmetric}

<OverloadTabs v-model="_s7" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_antisymmetric</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_antisymmetric</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>"]' />

<div v-show="_s7 === 0">

检查给定矩阵是否是反对称矩阵，如果是则返回 `true`，否则返回 `false`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要检查的整数矩阵。 |

**返回:** <code>bool</code>

</div>

<div v-show="_s7 === 1">

检查给定矩阵是否为反对称矩阵，如果是则返回 `true`，否则返回 `false`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 要检查的浮点矩阵。 |

**返回:** <code>bool</code>

</div>

---

### is_binary {#is_binary}

<OverloadTabs v-model="_s8" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_binary</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_binary</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>"]' />

<div v-show="_s8 === 0">

检查给定矩阵是否为二进制矩阵（仅包含 0 和 1），如果是则返回 `true`，否则返回 `false`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要检查的整数矩阵。 |

**返回:** <code>bool</code>

</div>

<div v-show="_s8 === 1">

检查给定矩阵是否为二值矩阵（只包含 0 和 1），如果是则返回 `true`，否则返回 `false`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 要检查的浮点矩阵。 |

**返回:** <code>bool</code>

</div>

---

### is_diagonal {#is_diagonal}

<OverloadTabs v-model="_s9" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_diagonal</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_diagonal</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>"]' />

<div v-show="_s9 === 0">

检查给定矩阵是否为对角矩阵，如果是，则返回 `true`，否则返回 `false`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要检查的整数矩阵。 |

**返回:** <code>bool</code>

</div>

<div v-show="_s9 === 1">

检查给定矩阵是否为对角矩阵，如果是则返回 `true`，否则返回 `false`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 要检查的浮点矩阵。 |

**返回:** <code>bool</code>

</div>

---

### is_identity {#is_identity}

<OverloadTabs v-model="_s10" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_identity</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_identity</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>"]' />

<div v-show="_s10 === 0">

检查给定矩阵是否为单位矩阵，如果是则返回 `true`，否则返回 `false`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要检查的整数矩阵。 |

**返回:** <code>bool</code>

</div>

<div v-show="_s10 === 1">

检查给定矩阵是否为单位矩阵，如果是则返回 `true`，否则返回 `false`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 要检查的浮点矩阵。 |

**返回:** <code>bool</code>

</div>

---

### is_square {#is_square}

```navi
Matrix.is_square(id: Matrix<T>): bool
```

检查给定矩阵是否为方阵，如果是则返回 `true`，否则返回 `false`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | 要检查的矩阵。 |

**返回:** <code>bool</code>

---

### is_stochastic {#is_stochastic}

<OverloadTabs v-model="_s11" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_stochastic</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_stochastic</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>"]' />

<div v-show="_s11 === 0">

检查给定矩阵是否是随机矩阵，如果是则返回 `true`，否则返回 `false`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 要检查的浮点矩阵。 |

**返回:** <code>bool</code>

</div>

<div v-show="_s11 === 1">

检查给定矩阵是否为随机矩阵，如果是则返回 `true`，否则返回 `false`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要检查的整数矩阵。 |

**返回:** <code>bool</code>

</div>

---

### is_symmetric {#is_symmetric}

<OverloadTabs v-model="_s12" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_symmetric</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_symmetric</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>"]' />

<div v-show="_s12 === 0">

检查给定矩阵是否是对称矩阵，如果是，则返回 `true`，否则返回 `false`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要检查的整数矩阵。 |

**返回:** <code>bool</code>

</div>

<div v-show="_s12 === 1">

检查给定矩阵是否为对称矩阵，如果是则返回 `true`，否则返回 `false`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 要检查的浮点矩阵。 |

**返回:** <code>bool</code>

</div>

---

### is_triangular {#is_triangular}

<OverloadTabs v-model="_s13" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_triangular</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_triangular</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>"]' />

<div v-show="_s13 === 0">

检查给定矩阵是否为三角矩阵，如果是则返回 `true`，否则返回 `false`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要检查的整数矩阵。 |

**返回:** <code>bool</code>

</div>

<div v-show="_s13 === 1">

检查给定矩阵是否为三角矩阵，如果是则返回 `true`，否则返回 `false`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 要检查的浮点矩阵。 |

**返回:** <code>bool</code>

</div>

---

### is_zero {#is_zero}

<OverloadTabs v-model="_s14" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_zero</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_zero</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>"]' />

<div v-show="_s14 === 0">

检查给定矩阵是否为零矩阵，如果是则返回 `true`，否则返回 `false`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要检查的整数矩阵。 |

**返回:** <code>bool</code>

</div>

<div v-show="_s14 === 1">

检查给定矩阵是否为零矩阵，如果是则返回 `true`，否则返回 `false`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 要检查的浮点矩阵。 |

**返回:** <code>bool</code>

</div>

---

### kron {#kron}

<OverloadTabs v-model="_s15" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">kron</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, id2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">kron</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, id2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>"]' />

<div v-show="_s15 === 0">

计算两个矩阵的克罗内克积并返回结果矩阵。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 第一个整数矩阵。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 第二个整数矩阵。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code>

</div>

<div v-show="_s15 === 1">

计算两个矩阵的 Kronecker 积，并返回结果矩阵。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 第一个浮点矩阵。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 第二个浮点矩阵。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

---

### max {#max}

<OverloadTabs v-model="_s16" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">max</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">max</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s16 === 0">

计算并返回指定矩阵中所有元素的最大值。如果矩阵为空或不包含任何值，则返回 `na`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要从中查找最大值的整数矩阵。 |

**返回:** <code>int</code>

</div>

<div v-show="_s16 === 1">

返回所有元素中的最大值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 要从中查找最大值的浮点矩阵。 |

**返回:** <code>float</code>

</div>

---

### median {#median}

<OverloadTabs v-model="_s17" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">median</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">median</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s17 === 0">

计算并返回指定矩阵中所有元素的中位数。如果矩阵为空或不包含任何值，则返回 `na`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要从中查找中位数的整数矩阵。 |

**返回:** <code>float</code>

</div>

<div v-show="_s17 === 1">

计算并返回指定矩阵中所有元素的中位数。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 用于查找中位数的浮点矩阵。 |

**返回:** <code>float</code>

</div>

---

### min {#min}

<OverloadTabs v-model="_s18" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">min</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">min</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s18 === 0">

计算并返回指定矩阵中所有元素的最小值。如果矩阵为空或不包含任何值，则返回 `na`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 用于查找最小值的整数矩阵。 |

**返回:** <code>int</code>

</div>

<div v-show="_s18 === 1">

返回所有元素中的最小值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 用于查找最小值的浮点矩阵。 |

**返回:** <code>float</code>

</div>

---

### mode {#mode}

<OverloadTabs v-model="_s19" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">mode</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">mode</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s19 === 0">

该函数返回矩阵元素的众数。如果有多个值具有相同的频率，则返回最小值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 用于查找众数的整数矩阵。 |

**返回:** <code>int</code> — 最常出现的值，或相关值中最小的值。

</div>

<div v-show="_s19 === 1">

返回矩阵元素的众数。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 用于查找众数的浮点矩阵。 |

**返回:** <code>float</code> — The most frequently occurring value, or the smallest among tied values.

</div>

---

### multi {#multi}

<OverloadTabs v-model="_s20" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">multi</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, id2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">multi</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, id2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">multi</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, id2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">multi</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, id2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>"]' />

<div v-show="_s20 === 0">

将两个矩阵相乘并返回结果矩阵。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 第一个整数矩阵。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 第二个整数矩阵。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code>

</div>

<div v-show="_s20 === 1">

矩阵乘法。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 第一个浮点矩阵。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 第二个浮点矩阵。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

<div v-show="_s20 === 2">

矩阵乘法。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 第一个整数矩阵。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 第二个浮点矩阵。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

<div v-show="_s20 === 3">

矩阵乘法。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 第一个浮点矩阵。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 第二个整数矩阵。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

---

### pinv {#pinv}

<OverloadTabs v-model="_s21" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">pinv</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">pinv</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>"]' />

<div v-show="_s21 === 0">

计算并返回指定矩阵的 Moore-Penrose 伪逆。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 用于计算伪逆的整数矩阵。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

<div v-show="_s21 === 1">

计算 Moore-Penrose 伪逆。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 用于计算伪逆的浮点矩阵。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

---

### pow {#pow}

<OverloadTabs v-model="_s22" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">pow</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, power</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">pow</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, power</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>"]' />

<div v-show="_s22 === 0">

将方阵求指定的非负整数幂并返回结果矩阵。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要求幂的整数方阵。 |
| `power` | <code>int</code> |  | 指数（非负整数）。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code>

</div>

<div v-show="_s22 === 1">

将一个方阵提升到指定的非负整数次幂，并返回结果矩阵。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 要求幂的浮点方阵。 |
| `power` | <code>int</code> |  | 指数（非负整数）。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

---

### rank {#rank}

<OverloadTabs v-model="_s23" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">rank</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">rank</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>"]' />

<div v-show="_s23 === 0">

计算并返回指定矩阵的秩。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要计算秩的整数矩阵。 |

**返回:** <code>int</code>

</div>

<div v-show="_s23 === 1">

返回矩阵的秩。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 要计算排名的浮点矩阵。 |

**返回:** <code>int</code>

</div>

---

### remove_col {#remove_col}

```navi
Matrix.remove_col(id: Matrix<T>, column: int = na): Array<T>
```

从给定矩阵中删除指定列并将删除的列作为数组返回。如果未提供列索引，则默认删除最后一列。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | 将从中删除列的矩阵。 |
| `column` | <code>int</code> | `na` | 要删除的列的索引。省略时，最后一列。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> — 包含已删除列的元素的数组。

---

### remove_row {#remove_row}

```navi
Matrix.remove_row(id: Matrix<T>, row: int = na): Array<T>
```

从给定矩阵中删除指定行并将删除的行作为数组返回。如果未提供行索引，则默认删除最后一行。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | 将从中删除行的矩阵。 |
| `row` | <code>int</code> | `na` | 要删除的行的索引。省略时，最后一行。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> — 包含已删除行的元素的数组。

---

### reshape {#reshape}

```navi
Matrix.reshape(id: Matrix<T>, rows: int, columns: int)
```

将给定矩阵重塑为指定的行数和列数。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | 要重塑的矩阵。 |
| `rows` | <code>int</code> |  | 新的行数。 |
| `columns` | <code>int</code> |  | 新的列数。 |

---

### reverse {#reverse}

```navi
Matrix.reverse(id: Matrix<T>)
```

就地反转指定矩阵中元素的顺序。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | 要反转的矩阵。 |

---

### row {#row}

```navi
Matrix.row(id: Matrix<T>, row: int): Array<T>
```

从矩阵的指定行检索所有元素并将它们作为数组返回。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | 要从中检索行的矩阵。 |
| `row` | <code>int</code> |  | 要检索的行索引。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code>

---

### rows {#rows}

```navi
Matrix.rows(id: Matrix<T>): int
```

返回指定矩阵中的行数。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | 从中获取行数的矩阵。 |

**返回:** <code>int</code>

---

### set {#set}

```navi
Matrix.set(id: Matrix<T>, row: int, column: int, value: T)
```

将给定矩阵中指定行索引和列索引处的值设置为提供的值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | 要修改的矩阵。 |
| `row` | <code>int</code> |  | 元素的行索引。 |
| `column` | <code>int</code> |  | 元素的列索引。 |
| `value` | <code>T</code> |  | 要在指定位置设置的值。 |

---

### sort {#sort}

<OverloadTabs v-model="_s24" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">sort</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, order</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> any </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> SortOrder.Ascending)</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">sort</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, order</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> any </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> SortOrder.Ascending)</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">sort</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">String</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, order</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> any </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> SortOrder.Ascending)</span>"]' />

<div v-show="_s24 === 0">

按升序或降序对给定 `matrix` 的元素进行排序。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要排序的整数矩阵。 |
| `order` | <code>any</code> | `SortOrder.Ascending` | 排序顺序（升序或降序）。 |

</div>

<div v-show="_s24 === 1">

对矩阵元素进行排序。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 要排序的浮点矩阵。 |
| `order` | <code>any</code> | `SortOrder.Ascending` | 排序顺序（升序或降序）。 |

</div>

<div v-show="_s24 === 2">

对矩阵元素进行排序。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a>&gt;</code> |  | 要排序的字符串矩阵。 |
| `order` | <code>any</code> | `SortOrder.Ascending` | 排序顺序（升序或降序）。 |

</div>

---

### sub_matrix {#sub_matrix}

```navi
Matrix.sub_matrix(
    id: Matrix<T>,
    from_row: int = 0,
    to_row: int = id.rows(),
    from_column: int = 0,
    to_column: int = id.columns()
  ): Matrix<T>
```

根据指定的行和列范围从给定矩阵中提取子矩阵并返回新的子矩阵。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | 从中提取子矩阵的矩阵。 |
| `from_row` | <code>int</code> | `0` | 起始行索引。 |
| `to_row` | <code>int</code> | `id.rows()` | 结束行索引。省略时，表示矩阵行数。 |
| `from_column` | <code>int</code> | `0` | 起始列索引。 |
| `to_column` | <code>int</code> | `id.columns()` | 结束列索引。省略时，表示矩阵列数。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code>

---

### sum {#sum}

<OverloadTabs v-model="_s25" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">sum</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, id2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">sum</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, id2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">sum</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, id2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">sum</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, id2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>"]' />

<div v-show="_s25 === 0">

计算相同维度的两个矩阵的按元素和并返回包含结果的新矩阵。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 第一个整数矩阵。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 第二个整数矩阵。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code>

</div>

<div v-show="_s25 === 1">

计算两个相同维度矩阵的逐元素和，并返回一个包含结果的新矩阵。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 第一个浮点矩阵。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 第二个浮点矩阵。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

<div v-show="_s25 === 2">

计算两个相同维度矩阵的逐元素和，并返回一个包含结果的新矩阵。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 第一个整数矩阵。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 第二个浮点矩阵。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

<div v-show="_s25 === 3">

计算两个相同维度矩阵的逐元素和，并返回一个包含结果的新矩阵。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 第一个浮点矩阵。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 第二个整数矩阵。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

---

### swap_columns {#swap_columns}

```navi
Matrix.swap_columns(id: Matrix<T>, column1: int, column2: int)
```

交换指定矩阵中的两列。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | 包含要交换的列的矩阵。 |
| `column1` | <code>int</code> |  | 第一列的索引。 |
| `column2` | <code>int</code> |  | 第二列的索引。 |

---

### swap_rows {#swap_rows}

```navi
Matrix.swap_rows(id: Matrix<T>, row1: int, row2: int)
```

交换指定矩阵中的两行。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | 包含要交换的行的矩阵。 |
| `row1` | <code>int</code> |  | 第一行的索引。 |
| `row2` | <code>int</code> |  | 第二行的索引。 |

---

### trace {#trace}

<OverloadTabs v-model="_s26" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">trace</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">trace</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s26 === 0">

计算并返回指定方阵的迹。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要计算迹的整数方阵。 |

**返回:** <code>int</code>

</div>

<div v-show="_s26 === 1">

返回方阵的迹。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 要计算迹的浮点方阵。 |

**返回:** <code>float</code>

</div>

---

### transpose {#transpose}

```navi
Matrix.transpose(id: Matrix<T>): Matrix<T>
```

转置给定矩阵并返回新的转置矩阵。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | 要转置的矩阵。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code>
