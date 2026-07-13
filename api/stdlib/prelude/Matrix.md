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

A two-dimensional table of elements of type `T`, stored in row-major order.

Create with `Matrix.new()`. Access elements with `get` / `set`; iterate rows with `for row in mat`.

**Kind:** object

## Static Methods

### new {#new}

```navi
Matrix.new(
    rows: int = 0,
    columns: int = 0,
    initial_value: T = na
  ): const Matrix<T>
```

Creates a new matrix with the specified number of rows and columns, initializing all elements to the given initial value.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `rows` | <code>int</code> | `0` | The number of rows in the matrix. |
| `columns` | <code>int</code> | `0` | The number of columns in the matrix. |
| `initial_value` | <code>T</code> | `na` | The initial value for all elements. |

**Returns:** <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code>

## Methods

### add_col {#add_col}

```navi
Matrix.add_col(id: Matrix<T>, column: int = na, values: Array<T> = na)
```

Adds a new column to the specified matrix at the given column index, filling it with the provided values or `na` if no values are given.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | The matrix to which the column will be added. |
| `column` | <code>int</code> | `na` | The index at which the column will be inserted. When omitted, last column position. |
| `values` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> | `na` | An array of values to fill the column, or na to fill with na values. |

---

### add_row {#add_row}

```navi
Matrix.add_row(id: Matrix<T>, row: int = na, values: Array<T> = na)
```

Adds a new row to the specified matrix at the given row index, filling it with the provided values or `na` if no values are given.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | The matrix to which the row will be added. |
| `row` | <code>int</code> | `na` | The index at which the row will be inserted. When omitted, last row position. |
| `values` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> | `na` | An array of values to fill the row, or na to fill with na values. |

---

### avg {#avg}

<OverloadTabs v-model="_s0" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">avg</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">avg</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s0 === 0">

Calculates and returns the average of all elements in the specified matrix.

If the matrix is empty or contains no values, it returns `na`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer matrix to calculate the average from. |

**Returns:** <code>float</code>

</div>

<div v-show="_s0 === 1">

Calculates and returns the average of all elements in the specified matrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float matrix to calculate the average from. |

**Returns:** <code>float</code>

</div>

---

### col {#col}

```navi
Matrix.col(id: Matrix<T>, column: int): Array<T>
```

Retrieves all elements from the specified column of the matrix and returns them as an array.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | The matrix to retrieve the column from. |
| `column` | <code>int</code> |  | The column index to retrieve. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code>

---

### columns {#columns}

```navi
Matrix.columns(id: Matrix<T>): int
```

Returns the number of columns in the specified matrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | The matrix to get the column count from. |

**Returns:** <code>int</code>

---

### concat {#concat}

```navi
Matrix.concat(id1: Matrix<T>, id2: Matrix<T>)
```

Concatenates two matrices of the same type to the matrix and returns `id`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | The first matrix to concatenate. |
| `id2` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | The second matrix to concatenate. |

---

### copy {#copy}

```navi
Matrix.copy(id: Matrix<T>)
```

Creates a copy of the given matrix and returns the new matrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | The matrix to copy. |

---

### det {#det}

<OverloadTabs v-model="_s1" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">det</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">det</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s1 === 0">

Calculates and returns the determinant of the specified square matrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer matrix to calculate the determinant from. |

**Returns:** <code>int</code>

</div>

<div v-show="_s1 === 1">

Calculates and returns the determinant of the specified square matrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float matrix to calculate the determinant from. |

**Returns:** <code>float</code>

</div>

---

### diff {#diff}

<OverloadTabs v-model="_s2" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">diff</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, id2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">diff</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, id2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">diff</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, id2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">diff</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, id2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>"]' />

<div v-show="_s2 === 0">

Computes the element-wise difference between two matrices of the same dimensions and returns a new matrix containing the results.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The first integer matrix. |
| `id2` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The second integer matrix. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code>

</div>

<div v-show="_s2 === 1">

Computes and returns the element-wise difference between two matrices of the same dimensions.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The first float matrix. |
| `id2` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The second float matrix. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

<div v-show="_s2 === 2">

Computes and returns the element-wise difference between two matrices of the same dimensions.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The first integer matrix. |
| `id2` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The second float matrix. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

<div v-show="_s2 === 3">

Computes and returns the element-wise difference between two matrices of the same dimensions.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The first float matrix. |
| `id2` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The second integer matrix. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

---

### eigenvalues {#eigenvalues}

<OverloadTabs v-model="_s3" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">eigenvalues</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">eigenvalues</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>"]' />

<div v-show="_s3 === 0">

Calculates and returns the eigenvalues of the specified square matrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer square matrix to calculate eigenvalues from. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

<div v-show="_s3 === 1">

Returns the eigenvalues of the specified square matrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float square matrix to calculate eigenvalues from. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

---

### eigenvectors {#eigenvectors}

<OverloadTabs v-model="_s4" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">eigenvectors</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">eigenvectors</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>"]' />

<div v-show="_s4 === 0">

Calculates and returns the eigenvectors of the specified square matrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer square matrix to calculate eigenvectors from. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

<div v-show="_s4 === 1">

Returns the eigenvectors of the specified square matrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float square matrix to calculate eigenvectors from. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

---

### elements_count {#elements_count}

```navi
Matrix.elements_count(id: Matrix<T>): int
```

Returns the total number of elements in the specified matrix by multiplying its number of rows by its number of columns.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | The matrix to count the elements of. |

**Returns:** <code>int</code>

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

Fills a specified submatrix of the given matrix with a specified value.

The submatrix is defined by the row and column ranges provided as parameters.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | The matrix to fill. |
| `value` | <code>T</code> |  | The value to fill the submatrix with. |
| `from_row` | <code>int</code> | `0` | The starting row index. |
| `to_row` | <code>int</code> | `id.rows()` | The ending row index. When omitted, denotes matrix row count. |
| `from_column` | <code>int</code> | `0` | The starting column index. |
| `to_column` | <code>int</code> | `id.columns()` | The ending column index. When omitted, denotes matrix column count. |

---

### get {#get}

```navi
Matrix.get(id: Matrix<T>, row: int, column: int): T
```

Retrieves the value at the specified row and column indices from the given matrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | The matrix to retrieve the value from. |
| `row` | <code>int</code> |  | The row index of the element. |
| `column` | <code>int</code> |  | The column index of the element. |

**Returns:** <code>T</code>

---

### inv {#inv}

<OverloadTabs v-model="_s5" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">inv</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">inv</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>"]' />

<div v-show="_s5 === 0">

Computes and returns the inverse of the specified square matrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer square matrix to invert. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

<div v-show="_s5 === 1">

Computes the inverse of the specified square matrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float square matrix to invert. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

---

### is_antidiagonal {#is_antidiagonal}

<OverloadTabs v-model="_s6" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_antidiagonal</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_antidiagonal</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>"]' />

<div v-show="_s6 === 0">

Checks if the given matrix is an antidiagonal matrix, returning `true` if it is and `false` otherwise.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer matrix to check. |

**Returns:** <code>bool</code>

</div>

<div v-show="_s6 === 1">

Checks if the given matrix is an antidiagonal matrix, returning `true` if it is and `false` otherwise.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float matrix to check. |

**Returns:** <code>bool</code>

</div>

---

### is_antisymmetric {#is_antisymmetric}

<OverloadTabs v-model="_s7" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_antisymmetric</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_antisymmetric</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>"]' />

<div v-show="_s7 === 0">

Checks if the given matrix is an antisymmetric matrix, returning `true` if it is and `false` otherwise.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer matrix to check. |

**Returns:** <code>bool</code>

</div>

<div v-show="_s7 === 1">

Checks if the given matrix is an antisymmetric matrix, returning `true` if it is and `false` otherwise.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float matrix to check. |

**Returns:** <code>bool</code>

</div>

---

### is_binary {#is_binary}

<OverloadTabs v-model="_s8" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_binary</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_binary</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>"]' />

<div v-show="_s8 === 0">

Checks if the given matrix is a binary matrix (containing only 0 and 1), returning `true` if it is and `false` otherwise.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer matrix to check. |

**Returns:** <code>bool</code>

</div>

<div v-show="_s8 === 1">

Checks if the given matrix is a binary matrix (containing only 0 and 1), returning `true` if it is and `false` otherwise.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float matrix to check. |

**Returns:** <code>bool</code>

</div>

---

### is_diagonal {#is_diagonal}

<OverloadTabs v-model="_s9" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_diagonal</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_diagonal</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>"]' />

<div v-show="_s9 === 0">

Checks if the given matrix is a diagonal matrix, returning `true` if it is and `false` otherwise.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer matrix to check. |

**Returns:** <code>bool</code>

</div>

<div v-show="_s9 === 1">

Checks if the given matrix is a diagonal matrix, returning `true` if it is and `false` otherwise.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float matrix to check. |

**Returns:** <code>bool</code>

</div>

---

### is_identity {#is_identity}

<OverloadTabs v-model="_s10" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_identity</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_identity</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>"]' />

<div v-show="_s10 === 0">

Checks if the given matrix is an identity matrix, returning `true` if it is and `false` otherwise.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer matrix to check. |

**Returns:** <code>bool</code>

</div>

<div v-show="_s10 === 1">

Checks if the given matrix is an identity matrix, returning `true` if it is and `false` otherwise.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float matrix to check. |

**Returns:** <code>bool</code>

</div>

---

### is_square {#is_square}

```navi
Matrix.is_square(id: Matrix<T>): bool
```

Checks if the given matrix is a square matrix, returning `true` if it is and `false` otherwise.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | The matrix to check. |

**Returns:** <code>bool</code>

---

### is_stochastic {#is_stochastic}

<OverloadTabs v-model="_s11" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_stochastic</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_stochastic</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>"]' />

<div v-show="_s11 === 0">

Checks if the given matrix is a stochastic matrix, returning `true` if it is and `false` otherwise.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float matrix to check. |

**Returns:** <code>bool</code>

</div>

<div v-show="_s11 === 1">

Checks if the given matrix is a stochastic matrix, returning `true` if it is and `false` otherwise.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer matrix to check. |

**Returns:** <code>bool</code>

</div>

---

### is_symmetric {#is_symmetric}

<OverloadTabs v-model="_s12" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_symmetric</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_symmetric</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>"]' />

<div v-show="_s12 === 0">

Checks if the given matrix is a symmetric matrix, returning `true` if it is and `false` otherwise.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer matrix to check. |

**Returns:** <code>bool</code>

</div>

<div v-show="_s12 === 1">

Checks if the given matrix is a symmetric matrix, returning `true` if it is and `false` otherwise.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float matrix to check. |

**Returns:** <code>bool</code>

</div>

---

### is_triangular {#is_triangular}

<OverloadTabs v-model="_s13" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_triangular</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_triangular</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>"]' />

<div v-show="_s13 === 0">

Checks if the given matrix is a triangular matrix, returning `true` if it is and `false` otherwise.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer matrix to check. |

**Returns:** <code>bool</code>

</div>

<div v-show="_s13 === 1">

Checks if the given matrix is a triangular matrix, returning `true` if it is and `false` otherwise.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float matrix to check. |

**Returns:** <code>bool</code>

</div>

---

### is_zero {#is_zero}

<OverloadTabs v-model="_s14" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_zero</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">is_zero</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>"]' />

<div v-show="_s14 === 0">

Checks if the given matrix is a zero matrix, returning `true` if it is and `false` otherwise.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer matrix to check. |

**Returns:** <code>bool</code>

</div>

<div v-show="_s14 === 1">

Checks if the given matrix is a zero matrix, returning `true` if it is and `false` otherwise.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float matrix to check. |

**Returns:** <code>bool</code>

</div>

---

### kron {#kron}

<OverloadTabs v-model="_s15" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">kron</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, id2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">kron</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, id2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>"]' />

<div v-show="_s15 === 0">

Computes the Kronecker product of two matrices and returns the resulting matrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The first integer matrix. |
| `id2` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The second integer matrix. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code>

</div>

<div v-show="_s15 === 1">

Computes the Kronecker product of two matrices and returns the resulting matrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The first float matrix. |
| `id2` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The second float matrix. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

---

### max {#max}

<OverloadTabs v-model="_s16" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">max</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">max</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s16 === 0">

Calculates and returns the maximum value among all elements in the specified matrix.

If the matrix is empty or contains no values, it returns `na`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer matrix to find the maximum from. |

**Returns:** <code>int</code>

</div>

<div v-show="_s16 === 1">

Returns the maximum value among all elements.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float matrix to find the maximum from. |

**Returns:** <code>float</code>

</div>

---

### median {#median}

<OverloadTabs v-model="_s17" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">median</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">median</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s17 === 0">

Calculates and returns the median of all elements in the specified matrix.

If the matrix is empty or contains no values, it returns `na`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer matrix to find the median from. |

**Returns:** <code>float</code>

</div>

<div v-show="_s17 === 1">

Calculates and returns the median of all elements in the specified matrix.

If the matrix is empty or contains no values, it returns `na`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float matrix to find the median from. |

**Returns:** <code>float</code>

</div>

---

### min {#min}

<OverloadTabs v-model="_s18" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">min</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">min</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s18 === 0">

Calculates and returns the minimum value among all elements in the specified matrix.

If the matrix is empty or contains no values, it returns `na`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer matrix to find the minimum from. |

**Returns:** <code>int</code>

</div>

<div v-show="_s18 === 1">

Returns the minimum value among all elements.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float matrix to find the minimum from. |

**Returns:** <code>float</code>

</div>

---

### mode {#mode}

<OverloadTabs v-model="_s19" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">mode</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">mode</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s19 === 0">

The function returns the mode of an matrix's elements.

If there are several values with the same frequency, it returns the smallest value.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer matrix to find the mode from. |

**Returns:** <code>int</code> — The most frequently occurring value, or the smallest among tied values.

</div>

<div v-show="_s19 === 1">

The function returns the mode of an matrix's elements.

If there are several values with the same frequency, it returns the smallest value.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float matrix to find the mode from. |

**Returns:** <code>float</code> — The most frequently occurring value, or the smallest among tied values.

</div>

---

### multi {#multi}

<OverloadTabs v-model="_s20" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">multi</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, id2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">multi</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, id2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">multi</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, id2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">multi</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, id2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>"]' />

<div v-show="_s20 === 0">

Multiplies two matrices and returns the resulting matrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The first integer matrix. |
| `id2` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The second integer matrix. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code>

</div>

<div v-show="_s20 === 1">

Matrix multiplication.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The first float matrix. |
| `id2` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The second float matrix. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

<div v-show="_s20 === 2">

Matrix multiplication.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The first integer matrix. |
| `id2` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The second float matrix. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

<div v-show="_s20 === 3">

Matrix multiplication.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The first float matrix. |
| `id2` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The second integer matrix. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

---

### pinv {#pinv}

<OverloadTabs v-model="_s21" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">pinv</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">pinv</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>"]' />

<div v-show="_s21 === 0">

Computes and returns the Moore-Penrose pseudoinverse of the specified matrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer matrix to compute the pseudoinverse from. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

<div v-show="_s21 === 1">

Computes the Moore-Penrose pseudoinverse.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float matrix to compute the pseudoinverse from. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

---

### pow {#pow}

<OverloadTabs v-model="_s22" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">pow</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, power</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">pow</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, power</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>"]' />

<div v-show="_s22 === 0">

Raises a square matrix to the specified non-negative integer power and returns the resulting matrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer square matrix to raise to a power. |
| `power` | <code>int</code> |  | The exponent (non-negative integer). |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code>

</div>

<div v-show="_s22 === 1">

Raises a square matrix to the specified non-negative integer power and returns the resulting matrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float square matrix to raise to a power. |
| `power` | <code>int</code> |  | The exponent (non-negative integer). |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

---

### rank {#rank}

<OverloadTabs v-model="_s23" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">rank</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">rank</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>"]' />

<div v-show="_s23 === 0">

Calculates and returns the rank of the specified matrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer matrix to calculate the rank of. |

**Returns:** <code>int</code>

</div>

<div v-show="_s23 === 1">

Returns the rank of the matrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float matrix to calculate the rank of. |

**Returns:** <code>int</code>

</div>

---

### remove_col {#remove_col}

```navi
Matrix.remove_col(id: Matrix<T>, column: int = na): Array<T>
```

Removes the specified column from the given matrix and returns the removed column as an array.

If no column index is provided, it removes the last column by default.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | The matrix from which the column will be removed. |
| `column` | <code>int</code> | `na` | The index of the column to remove. When omitted, last column. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> — An array containing the elements of the removed column.

---

### remove_row {#remove_row}

```navi
Matrix.remove_row(id: Matrix<T>, row: int = na): Array<T>
```

Removes the specified row from the given matrix and returns the removed row as an array.

If no row index is provided, it removes the last row by default.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | The matrix from which the row will be removed. |
| `row` | <code>int</code> | `na` | The index of the row to remove. When omitted, last row. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> — An array containing the elements of the removed row.

---

### reshape {#reshape}

```navi
Matrix.reshape(id: Matrix<T>, rows: int, columns: int)
```

Reshapes the given matrix to the specified number of rows and columns.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | The matrix to reshape. |
| `rows` | <code>int</code> |  | The new number of rows. |
| `columns` | <code>int</code> |  | The new number of columns. |

---

### reverse {#reverse}

```navi
Matrix.reverse(id: Matrix<T>)
```

Reverses the order of elements in the specified matrix in place.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | The matrix to reverse. |

---

### row {#row}

```navi
Matrix.row(id: Matrix<T>, row: int): Array<T>
```

Retrieves all elements from the specified row of the matrix and returns them as an array.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | The matrix to retrieve the row from. |
| `row` | <code>int</code> |  | The row index to retrieve. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code>

---

### rows {#rows}

```navi
Matrix.rows(id: Matrix<T>): int
```

Returns the number of rows in the specified matrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | The matrix to get the row count from. |

**Returns:** <code>int</code>

---

### set {#set}

```navi
Matrix.set(id: Matrix<T>, row: int, column: int, value: T)
```

Sets the value at the specified row and column indices in the given matrix to the provided value.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | The matrix to modify. |
| `row` | <code>int</code> |  | The row index of the element. |
| `column` | <code>int</code> |  | The column index of the element. |
| `value` | <code>T</code> |  | The value to set at the specified position. |

---

### sort {#sort}

<OverloadTabs v-model="_s24" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">sort</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, order</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> any </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> SortOrder.Ascending)</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">sort</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, order</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> any </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> SortOrder.Ascending)</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">sort</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">String</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, order</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> any </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> SortOrder.Ascending)</span>"]' />

<div v-show="_s24 === 0">

Sorts the elements of the given `matrix` in ascending or descending order.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer matrix to sort. |
| `order` | <code>any</code> | `SortOrder.Ascending` | The sort order (ascending or descending). |

</div>

<div v-show="_s24 === 1">

Sorts matrix elements.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float matrix to sort. |
| `order` | <code>any</code> | `SortOrder.Ascending` | The sort order (ascending or descending). |

</div>

<div v-show="_s24 === 2">

Sorts matrix elements.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a>&gt;</code> |  | The String matrix to sort. |
| `order` | <code>any</code> | `SortOrder.Ascending` | The sort order (ascending or descending). |

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

Extracts a submatrix from the given matrix based on the specified row and column ranges and returns the new submatrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | The matrix to extract the submatrix from. |
| `from_row` | <code>int</code> | `0` | The starting row index. |
| `to_row` | <code>int</code> | `id.rows()` | The ending row index. When omitted, denotes matrix row count. |
| `from_column` | <code>int</code> | `0` | The starting column index. |
| `to_column` | <code>int</code> | `id.columns()` | The ending column index. When omitted, denotes matrix column count. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code>

---

### sum {#sum}

<OverloadTabs v-model="_s25" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">sum</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, id2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">sum</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, id2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">sum</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, id2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">sum</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, id2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span>"]' />

<div v-show="_s25 === 0">

Computes the element-wise sum of two matrices of the same dimensions and returns a new matrix containing the results.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The first integer matrix. |
| `id2` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The second integer matrix. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code>

</div>

<div v-show="_s25 === 1">

Computes the element-wise sum of two matrices of the same dimensions and returns a new matrix containing the results.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The first float matrix. |
| `id2` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The second float matrix. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

<div v-show="_s25 === 2">

Computes the element-wise sum of two matrices of the same dimensions and returns a new matrix containing the results.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The first integer matrix. |
| `id2` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The second float matrix. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

<div v-show="_s25 === 3">

Computes the element-wise sum of two matrices of the same dimensions and returns a new matrix containing the results.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The first float matrix. |
| `id2` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The second integer matrix. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

</div>

---

### swap_columns {#swap_columns}

```navi
Matrix.swap_columns(id: Matrix<T>, column1: int, column2: int)
```

Swaps two columns in the specified matrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | The matrix containing the columns to swap. |
| `column1` | <code>int</code> |  | The index of the first column. |
| `column2` | <code>int</code> |  | The index of the second column. |

---

### swap_rows {#swap_rows}

```navi
Matrix.swap_rows(id: Matrix<T>, row1: int, row2: int)
```

Swaps two rows in the specified matrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | The matrix containing the rows to swap. |
| `row1` | <code>int</code> |  | The index of the first row. |
| `row2` | <code>int</code> |  | The index of the second row. |

---

### trace {#trace}

<OverloadTabs v-model="_s26" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">trace</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Matrix.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">trace</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Matrix</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s26 === 0">

Calculates and returns the trace of the specified square matrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer square matrix to calculate the trace of. |

**Returns:** <code>int</code>

</div>

<div v-show="_s26 === 1">

Returns the trace of the square matrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float square matrix to calculate the trace of. |

**Returns:** <code>float</code>

</div>

---

### transpose {#transpose}

```navi
Matrix.transpose(id: Matrix<T>): Matrix<T>
```

Transposes the given matrix and returns the new transposed matrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code> |  | The matrix to transpose. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;T&gt;</code>
