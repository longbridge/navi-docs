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

以行優先順序存儲的 `T` 類型元素的二維表。

**種類:** object

## 靜態方法

### new {#new}

```navi
Matrix.new(
    rows: int = 0,
    columns: int = 0,
    initial_value: T = na
  ): const Matrix<T>
```

Creates a new matrix with the specified number of rows and columns, initializing all elements to the given initial value.

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `rows` | <code>int</code> | `0` | The number of rows in the matrix. |
| `columns` | <code>int</code> | `0` | The number of columns in the matrix. |
| `initial_value` | <code>T</code> | `na` | The initial value for all elements. |

**返回:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code>

## 方法

### add_col {#add_col}

```navi
Matrix.add_col(id: Matrix<T>, column: int = na, values: Array<T> = na)
```

將新列添加到給定列索引處的指定矩陣，用提供的值填充它，如果沒有給出值，則用 `na` 填充。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | 將添加列的矩陣。 |
| `column` | <code>int</code> | `na` | 將插入列的索引。省略時，最後一列位置。 |
| `values` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> | `na` | 用於填充列的值陣列，或用 na 值填充 na。 |

---

### add_row {#add_row}

```navi
Matrix.add_row(id: Matrix<T>, row: int = na, values: Array<T> = na)
```

將新行添加到指定矩陣的給定行索引處，用提供的值填充它，如果沒有給出值，則用 `na` 填充。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | 將添加行的矩陣。 |
| `row` | <code>int</code> | `na` | 將插入行的索引。省略時，最後一行位置。 |
| `values` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> | `na` | 用於填充行的值陣列，或用 na 值填充 na。 |

---

### avg {#avg}

<OverloadTabs v-model="_s0" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">avg</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">avg</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s0 === 0">

計算並傳回指定矩陣中所有元素的平均值。如果矩陣為空或不包含任何值，則傳回 `na`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 用於計算平均值的整數矩陣。 |

**返回:** <code>float</code>

</div>

<div v-show="_s0 === 1">

計算並傳回指定矩陣中所有元素的平均值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 用於計算平均值的浮點矩陣。 |

**返回:** <code>float</code>

</div>

---

### col {#col}

```navi
Matrix.col(id: Matrix<T>, column: int): Array<T>
```

從矩陣的指定列檢索所有元素並將它們作為陣列傳回。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | 要從中檢索列的矩陣。 |
| `column` | <code>int</code> |  | 要檢索的列索引。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code>

---

### columns {#columns}

```navi
Matrix.columns(id: Matrix<T>): int
```

傳回指定矩陣中的列數。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | 從中獲取列數的矩陣。 |

**返回:** <code>int</code>

---

### concat {#concat}

```navi
Matrix.concat(id1: Matrix<T>, id2: Matrix<T>)
```

將兩個相同類型的矩陣連接到 `mat1` 並傳回 `mat1`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | 要連接的第一個矩陣。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | 要連接的第二個矩陣。 |

---

### copy {#copy}

```navi
Matrix.copy(id: Matrix<T>)
```

創建給定矩陣的複本並傳回新矩陣。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | 要複製的矩陣。 |

---

### det {#det}

<OverloadTabs v-model="_s1" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">det</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">det</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s1 === 0">

計算並傳回指定方陣的行列式。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 用於計算行列式的整數矩陣。 |

**返回:** <code>int</code>

</div>

<div v-show="_s1 === 1">

計算並傳回指定方陣的行列式。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 用於計算行列式的浮點矩陣。 |

**返回:** <code>float</code>

</div>

---

### diff {#diff}

<OverloadTabs v-model="_s2" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">diff</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, id2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">diff</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, id2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">diff</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, id2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">diff</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, id2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>"]' />

<div v-show="_s2 === 0">

計算相同維度的兩個矩陣之間的逐元素差異，並傳回包含結果的新矩陣。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 第一個整數矩陣。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 第二個整數矩陣。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code>

</div>

<div v-show="_s2 === 1">

計算兩個相同維度矩陣的逐元素差值，並傳回一個包含結果的新矩陣。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 第一個浮點矩陣。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 第二個浮點矩陣。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

<div v-show="_s2 === 2">

計算兩個相同維度矩陣的逐元素差值，並傳回一個包含結果的新矩陣。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 第一個整數矩陣。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 第二個浮點矩陣。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

<div v-show="_s2 === 3">

計算兩個相同維度矩陣的逐元素差值，並傳回一個包含結果的新矩陣。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 第一個浮點矩陣。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 第二個整數矩陣。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

---

### eigenvalues {#eigenvalues}

<OverloadTabs v-model="_s3" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">eigenvalues</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">eigenvalues</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>"]' />

<div v-show="_s3 === 0">

計算並傳回指定方陣的特徵值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 用於計算特徵值的整數方陣。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

<div v-show="_s3 === 1">

傳回指定方陣的特徵值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 用於計算特徵值的浮點方陣。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

---

### eigenvectors {#eigenvectors}

<OverloadTabs v-model="_s4" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">eigenvectors</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">eigenvectors</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>"]' />

<div v-show="_s4 === 0">

計算並傳回指定方陣的特徵向量。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 用於計算特徵向量的整數方陣。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

<div v-show="_s4 === 1">

傳回指定方陣的特徵向量。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 用於計算特徵向量的浮點方陣。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

---

### elements_count {#elements_count}

```navi
Matrix.elements_count(id: Matrix<T>): int
```

通過將指定矩陣的行數乘以其列數來傳回指定矩陣中的元素總數。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | 要計算其元素數量的矩陣。 |

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

用指定值填充給定矩陣的指定子矩陣。子矩陣由作為參數提供的行和列範圍定義。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | 要填充的矩陣。 |
| `value` | <code>T</code> |  | 用於填充子矩陣的值。 |
| `from_row` | <code>int</code> | `0` | 起始行索引。 |
| `to_row` | <code>int</code> | `id.rows()` | 結束行索引。省略時，表示矩陣行數。 |
| `from_column` | <code>int</code> | `0` | 起始列索引。 |
| `to_column` | <code>int</code> | `id.columns()` | 結束列索引。省略時，表示矩陣列數。 |

---

### get {#get}

```navi
Matrix.get(id: Matrix<T>, row: int, column: int): T
```

從給定矩陣中檢索指定行索引和列索引處的值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | 要從中檢索值的矩陣。 |
| `row` | <code>int</code> |  | 元素的行索引。 |
| `column` | <code>int</code> |  | 元素的列索引。 |

**返回:** <code>T</code>

---

### inv {#inv}

<OverloadTabs v-model="_s5" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">inv</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">inv</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>"]' />

<div v-show="_s5 === 0">

計算並傳回指定方陣的逆矩陣。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要反轉的整數方陣。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

<div v-show="_s5 === 1">

計算指定方陣的逆矩陣。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 要反轉的浮點方陣。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

---

### is_antidiagonal {#is_antidiagonal}

<OverloadTabs v-model="_s6" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_antidiagonal</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_antidiagonal</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>"]' />

<div v-show="_s6 === 0">

檢查給定矩陣是否是反對角矩陣，如果是則傳回 `true`，否則傳回 `false`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要檢查的整數矩陣。 |

**返回:** <code>bool</code>

</div>

<div v-show="_s6 === 1">

檢查給定矩陣是否為反對角矩陣，如果是則傳回 `true`，否則傳回 `false`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 要檢查的浮點矩陣。 |

**返回:** <code>bool</code>

</div>

---

### is_antisymmetric {#is_antisymmetric}

<OverloadTabs v-model="_s7" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_antisymmetric</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_antisymmetric</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>"]' />

<div v-show="_s7 === 0">

檢查給定矩陣是否是反對稱矩陣，如果是則傳回 `true`，否則傳回 `false`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要檢查的整數矩陣。 |

**返回:** <code>bool</code>

</div>

<div v-show="_s7 === 1">

檢查給定矩陣是否為反對稱矩陣，如果是則傳回 `true`，否則傳回 `false`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 要檢查的浮點矩陣。 |

**返回:** <code>bool</code>

</div>

---

### is_binary {#is_binary}

<OverloadTabs v-model="_s8" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_binary</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_binary</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>"]' />

<div v-show="_s8 === 0">

檢查給定矩陣是否為二進制矩陣（僅包含 0 和 1），如果是則傳回 `true`，否則傳回 `false`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要檢查的整數矩陣。 |

**返回:** <code>bool</code>

</div>

<div v-show="_s8 === 1">

檢查給定矩陣是否為二值矩陣（只包含 0 和 1），如果是則傳回 `true`，否則傳回 `false`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 要檢查的浮點矩陣。 |

**返回:** <code>bool</code>

</div>

---

### is_diagonal {#is_diagonal}

<OverloadTabs v-model="_s9" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_diagonal</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_diagonal</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>"]' />

<div v-show="_s9 === 0">

檢查給定矩陣是否為對角矩陣，如果是，則傳回 `true`，否則傳回 `false`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要檢查的整數矩陣。 |

**返回:** <code>bool</code>

</div>

<div v-show="_s9 === 1">

檢查給定矩陣是否為對角矩陣，如果是則傳回 `true`，否則傳回 `false`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 要檢查的浮點矩陣。 |

**返回:** <code>bool</code>

</div>

---

### is_identity {#is_identity}

<OverloadTabs v-model="_s10" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_identity</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_identity</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>"]' />

<div v-show="_s10 === 0">

檢查給定矩陣是否為單位矩陣，如果是則傳回 `true`，否則傳回 `false`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要檢查的整數矩陣。 |

**返回:** <code>bool</code>

</div>

<div v-show="_s10 === 1">

檢查給定矩陣是否為單位矩陣，如果是則傳回 `true`，否則傳回 `false`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 要檢查的浮點矩陣。 |

**返回:** <code>bool</code>

</div>

---

### is_square {#is_square}

```navi
Matrix.is_square(id: Matrix<T>): bool
```

檢查給定矩陣是否為方陣，如果是則傳回 `true`，否則傳回 `false`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | 要檢查的矩陣。 |

**返回:** <code>bool</code>

---

### is_stochastic {#is_stochastic}

<OverloadTabs v-model="_s11" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_stochastic</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_stochastic</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>"]' />

<div v-show="_s11 === 0">

檢查給定矩陣是否是隨機矩陣，如果是則傳回 `true`，否則傳回 `false`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 要檢查的浮點矩陣。 |

**返回:** <code>bool</code>

</div>

<div v-show="_s11 === 1">

檢查給定矩陣是否為隨機矩陣，如果是則傳回 `true`，否則傳回 `false`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要檢查的整數矩陣。 |

**返回:** <code>bool</code>

</div>

---

### is_symmetric {#is_symmetric}

<OverloadTabs v-model="_s12" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_symmetric</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_symmetric</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>"]' />

<div v-show="_s12 === 0">

檢查給定矩陣是否是對稱矩陣，如果是，則傳回 `true`，否則傳回 `false`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要檢查的整數矩陣。 |

**返回:** <code>bool</code>

</div>

<div v-show="_s12 === 1">

檢查給定矩陣是否為對稱矩陣，如果是則傳回 `true`，否則傳回 `false`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 要檢查的浮點矩陣。 |

**返回:** <code>bool</code>

</div>

---

### is_triangular {#is_triangular}

<OverloadTabs v-model="_s13" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_triangular</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_triangular</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>"]' />

<div v-show="_s13 === 0">

檢查給定矩陣是否為三角矩陣，如果是則傳回 `true`，否則傳回 `false`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要檢查的整數矩陣。 |

**返回:** <code>bool</code>

</div>

<div v-show="_s13 === 1">

檢查給定矩陣是否為三角矩陣，如果是則傳回 `true`，否則傳回 `false`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 要檢查的浮點矩陣。 |

**返回:** <code>bool</code>

</div>

---

### is_zero {#is_zero}

<OverloadTabs v-model="_s14" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_zero</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_zero</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>"]' />

<div v-show="_s14 === 0">

檢查給定矩陣是否為零矩陣，如果是則傳回 `true`，否則傳回 `false`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要檢查的整數矩陣。 |

**返回:** <code>bool</code>

</div>

<div v-show="_s14 === 1">

檢查給定矩陣是否為零矩陣，如果是則傳回 `true`，否則傳回 `false`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 要檢查的浮點矩陣。 |

**返回:** <code>bool</code>

</div>

---

### kron {#kron}

<OverloadTabs v-model="_s15" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">kron</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, id2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">kron</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, id2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>"]' />

<div v-show="_s15 === 0">

計算兩個矩陣的克羅內克積並傳回結果矩陣。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 第一個整數矩陣。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 第二個整數矩陣。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code>

</div>

<div v-show="_s15 === 1">

計算兩個矩陣的 Kronecker 積，並傳回結果矩陣。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 第一個浮點矩陣。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 第二個浮點矩陣。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

---

### max {#max}

<OverloadTabs v-model="_s16" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">max</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">max</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s16 === 0">

計算並傳回指定矩陣中所有元素的最大值。如果矩陣為空或不包含任何值，則傳回 `na`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要從中查找最大值的整數矩陣。 |

**返回:** <code>int</code>

</div>

<div v-show="_s16 === 1">

傳回所有元素中的最大值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 要從中查找最大值的浮點矩陣。 |

**返回:** <code>float</code>

</div>

---

### median {#median}

<OverloadTabs v-model="_s17" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">median</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">median</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s17 === 0">

計算並傳回指定矩陣中所有元素的中位數。如果矩陣為空或不包含任何值，則傳回 `na`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要從中查找中位數的整數矩陣。 |

**返回:** <code>float</code>

</div>

<div v-show="_s17 === 1">

計算並傳回指定矩陣中所有元素的中位數。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 用於查找中位數的浮點矩陣。 |

**返回:** <code>float</code>

</div>

---

### min {#min}

<OverloadTabs v-model="_s18" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">min</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">min</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s18 === 0">

計算並傳回指定矩陣中所有元素的最小值。如果矩陣為空或不包含任何值，則傳回 `na`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 用於查找最小值的整數矩陣。 |

**返回:** <code>int</code>

</div>

<div v-show="_s18 === 1">

傳回所有元素中的最小值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 用於查找最小值的浮點矩陣。 |

**返回:** <code>float</code>

</div>

---

### mode {#mode}

<OverloadTabs v-model="_s19" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">mode</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">mode</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s19 === 0">

該函數傳回矩陣元素的眾數。如果有多個值具有相同的頻率，則傳回最小值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 用於查找眾數的整數矩陣。 |

**返回:** <code>int</code> — 最常出現的值，或相關值中最小的值。

</div>

<div v-show="_s19 === 1">

傳回矩陣元素的眾數。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 用於查找眾數的浮點矩陣。 |

**返回:** <code>float</code> — The most frequently occurring value, or the smallest among tied values.

</div>

---

### multi {#multi}

<OverloadTabs v-model="_s20" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">multi</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, id2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">multi</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, id2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">multi</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, id2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">multi</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, id2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>"]' />

<div v-show="_s20 === 0">

將兩個矩陣相乘並傳回結果矩陣。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 第一個整數矩陣。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 第二個整數矩陣。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code>

</div>

<div v-show="_s20 === 1">

矩陣乘法。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 第一個浮點矩陣。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 第二個浮點矩陣。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

<div v-show="_s20 === 2">

矩陣乘法。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 第一個整數矩陣。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 第二個浮點矩陣。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

<div v-show="_s20 === 3">

矩陣乘法。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 第一個浮點矩陣。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 第二個整數矩陣。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

---

### pinv {#pinv}

<OverloadTabs v-model="_s21" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">pinv</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">pinv</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>"]' />

<div v-show="_s21 === 0">

計算並傳回指定矩陣的 Moore-Penrose 偽逆。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 用於計算偽逆的整數矩陣。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

<div v-show="_s21 === 1">

計算 Moore-Penrose 偽逆。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 用於計算偽逆的浮點矩陣。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

---

### pow {#pow}

<OverloadTabs v-model="_s22" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">pow</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, power</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">pow</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, power</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>"]' />

<div v-show="_s22 === 0">

將方陣求指定的非負整數冪並傳回結果矩陣。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要求冪的整數方陣。 |
| `power` | <code>int</code> |  | 指數（非負整數）。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code>

</div>

<div v-show="_s22 === 1">

將一個方陣提升到指定的非負整數次方，並傳回結果矩陣。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 要求冪的浮點方陣。 |
| `power` | <code>int</code> |  | 指數（非負整數）。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

---

### rank {#rank}

<OverloadTabs v-model="_s23" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">rank</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">rank</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>"]' />

<div v-show="_s23 === 0">

計算並傳回指定矩陣的秩。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要計算秩的整數矩陣。 |

**返回:** <code>int</code>

</div>

<div v-show="_s23 === 1">

傳回矩陣的秩。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 要計算排名的浮點矩陣。 |

**返回:** <code>int</code>

</div>

---

### remove_col {#remove_col}

```navi
Matrix.remove_col(id: Matrix<T>, column: int = na): Array<T>
```

從給定矩陣中刪除指定列並將刪除的列作為陣列傳回。如果未提供列索引，則默認刪除最後一列。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | 將從中刪除列的矩陣。 |
| `column` | <code>int</code> | `na` | 要刪除的列的索引。省略時，最後一列。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> — 包含已刪除列的元素的陣列。

---

### remove_row {#remove_row}

```navi
Matrix.remove_row(id: Matrix<T>, row: int = na): Array<T>
```

從給定矩陣中刪除指定行並將刪除的行作為陣列傳回。如果未提供行索引，則默認刪除最後一行。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | 將從中刪除行的矩陣。 |
| `row` | <code>int</code> | `na` | 要刪除的行的索引。省略時，最後一行。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> — 包含已刪除行的元素的陣列。

---

### reshape {#reshape}

```navi
Matrix.reshape(id: Matrix<T>, rows: int, columns: int)
```

將給定矩陣重塑為指定的行數和列數。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | 要重塑的矩陣。 |
| `rows` | <code>int</code> |  | 新的行數。 |
| `columns` | <code>int</code> |  | 新的列數。 |

---

### reverse {#reverse}

```navi
Matrix.reverse(id: Matrix<T>)
```

就地反轉指定矩陣中元素的順序。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | 要反轉的矩陣。 |

---

### row {#row}

```navi
Matrix.row(id: Matrix<T>, row: int): Array<T>
```

從矩陣的指定行檢索所有元素並將它們作為陣列傳回。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | 要從中檢索行的矩陣。 |
| `row` | <code>int</code> |  | 要檢索的行索引。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code>

---

### rows {#rows}

```navi
Matrix.rows(id: Matrix<T>): int
```

傳回指定矩陣中的行數。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | 從中獲取行數的矩陣。 |

**返回:** <code>int</code>

---

### set {#set}

```navi
Matrix.set(id: Matrix<T>, row: int, column: int, value: T)
```

將給定矩陣中指定行索引和列索引處的值設定為提供的值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | 要修改的矩陣。 |
| `row` | <code>int</code> |  | 元素的行索引。 |
| `column` | <code>int</code> |  | 元素的列索引。 |
| `value` | <code>T</code> |  | 要在指定位置設定的值。 |

---

### sort {#sort}

<OverloadTabs v-model="_s24" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">sort</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, order</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> any </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> SortOrder.Ascending)</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">sort</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, order</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> any </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> SortOrder.Ascending)</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">sort</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">String</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, order</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> any </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> SortOrder.Ascending)</span>"]' />

<div v-show="_s24 === 0">

按升序或降序對給定 `matrix` 的元素進行排序。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要排序的整數矩陣。 |
| `order` | <code>any</code> | `SortOrder.Ascending` | 排序順序（升序或降序）。 |

</div>

<div v-show="_s24 === 1">

對矩陣元素進行排序。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 要排序的浮點矩陣。 |
| `order` | <code>any</code> | `SortOrder.Ascending` | 排序順序（升序或降序）。 |

</div>

<div v-show="_s24 === 2">

對矩陣元素進行排序。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a>&gt;</code> |  | 要排序的字符串矩陣。 |
| `order` | <code>any</code> | `SortOrder.Ascending` | 排序順序（升序或降序）。 |

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

根據指定的行和列範圍從給定矩陣中提取子矩陣並傳回新的子矩陣。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | 從中提取子矩陣的矩陣。 |
| `from_row` | <code>int</code> | `0` | 起始行索引。 |
| `to_row` | <code>int</code> | `id.rows()` | 結束行索引。省略時，表示矩陣行數。 |
| `from_column` | <code>int</code> | `0` | 起始列索引。 |
| `to_column` | <code>int</code> | `id.columns()` | 結束列索引。省略時，表示矩陣列數。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code>

---

### sum {#sum}

<OverloadTabs v-model="_s25" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">sum</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, id2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">sum</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, id2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">sum</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, id2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">sum</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, id2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>"]' />

<div v-show="_s25 === 0">

計算相同維度的兩個矩陣的按元素和並傳回包含結果的新矩陣。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 第一個整數矩陣。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 第二個整數矩陣。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code>

</div>

<div v-show="_s25 === 1">

計算兩個相同維度矩陣的逐元素和，並傳回一個包含結果的新矩陣。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 第一個浮點矩陣。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 第二個浮點矩陣。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

<div v-show="_s25 === 2">

計算兩個相同維度矩陣的逐元素和，並傳回一個包含結果的新矩陣。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 第一個整數矩陣。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 第二個浮點矩陣。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

<div v-show="_s25 === 3">

計算兩個相同維度矩陣的逐元素和，並傳回一個包含結果的新矩陣。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 第一個浮點矩陣。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 第二個整數矩陣。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

---

### swap_columns {#swap_columns}

```navi
Matrix.swap_columns(id: Matrix<T>, column1: int, column2: int)
```

交換指定矩陣中的兩列。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | 包含要交換的列的矩陣。 |
| `column1` | <code>int</code> |  | 第一列的索引。 |
| `column2` | <code>int</code> |  | 第二列的索引。 |

---

### swap_rows {#swap_rows}

```navi
Matrix.swap_rows(id: Matrix<T>, row1: int, row2: int)
```

交換指定矩陣中的兩行。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | 包含要交換的行的矩陣。 |
| `row1` | <code>int</code> |  | 第一行的索引。 |
| `row2` | <code>int</code> |  | 第二行的索引。 |

---

### trace {#trace}

<OverloadTabs v-model="_s26" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">trace</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">trace</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s26 === 0">

計算並傳回指定方陣的跡。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要計算跡的整數方陣。 |

**返回:** <code>int</code>

</div>

<div v-show="_s26 === 1">

傳回方陣的跡。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 要計算跡的浮點方陣。 |

**返回:** <code>float</code>

</div>

---

### transpose {#transpose}

```navi
Matrix.transpose(id: Matrix<T>): Matrix<T>
```

轉置給定矩陣並傳回新的轉置矩陣。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | 要轉置的矩陣。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code>
