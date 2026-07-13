---
title: "Matrix<T>"
---


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

**Overloads**

```navi
Matrix.avg(id: Matrix<int>): float
Matrix.avg(id: Matrix<float>): float
```

計算並傳回指定矩陣中所有元素的平均值。如果矩陣為空或不包含任何值，則傳回 `na`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 用於計算平均值的整數矩陣。 |

**返回:** <code>float</code>

計算並傳回指定矩陣中所有元素的平均值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 用於計算平均值的浮點矩陣。 |

**返回:** <code>float</code>

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

**Overloads**

```navi
Matrix.det(id: Matrix<int>): int
Matrix.det(id: Matrix<float>): float
```

計算並傳回指定方陣的行列式。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 用於計算行列式的整數矩陣。 |

**返回:** <code>int</code>

計算並傳回指定方陣的行列式。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 用於計算行列式的浮點矩陣。 |

**返回:** <code>float</code>

---

### diff {#diff}

**Overloads**

```navi
Matrix.diff(id1: Matrix<int>, id2: Matrix<int>): Matrix<int>
Matrix.diff(id1: Matrix<float>, id2: Matrix<float>): Matrix<float>
Matrix.diff(id1: Matrix<int>, id2: Matrix<float>): Matrix<float>
Matrix.diff(id1: Matrix<float>, id2: Matrix<int>): Matrix<float>
```

計算相同維度的兩個矩陣之間的逐元素差異，並傳回包含結果的新矩陣。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 第一個整數矩陣。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 第二個整數矩陣。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code>

計算兩個相同維度矩陣的逐元素差值，並傳回一個包含結果的新矩陣。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 第一個浮點矩陣。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 第二個浮點矩陣。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

計算兩個相同維度矩陣的逐元素差值，並傳回一個包含結果的新矩陣。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 第一個整數矩陣。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 第二個浮點矩陣。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

計算兩個相同維度矩陣的逐元素差值，並傳回一個包含結果的新矩陣。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 第一個浮點矩陣。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 第二個整數矩陣。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

---

### eigenvalues {#eigenvalues}

**Overloads**

```navi
Matrix.eigenvalues(id: Matrix<int>): Matrix<float>
Matrix.eigenvalues(id: Matrix<float>): Matrix<float>
```

計算並傳回指定方陣的特徵值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 用於計算特徵值的整數方陣。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

傳回指定方陣的特徵值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 用於計算特徵值的浮點方陣。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

---

### eigenvectors {#eigenvectors}

**Overloads**

```navi
Matrix.eigenvectors(id: Matrix<int>): Matrix<float>
Matrix.eigenvectors(id: Matrix<float>): Matrix<float>
```

計算並傳回指定方陣的特徵向量。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 用於計算特徵向量的整數方陣。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

傳回指定方陣的特徵向量。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 用於計算特徵向量的浮點方陣。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

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

**Overloads**

```navi
Matrix.inv(id: Matrix<int>): Matrix<float>
Matrix.inv(id: Matrix<float>): Matrix<float>
```

計算並傳回指定方陣的逆矩陣。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要反轉的整數方陣。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

計算指定方陣的逆矩陣。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 要反轉的浮點方陣。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

---

### is_antidiagonal {#is_antidiagonal}

**Overloads**

```navi
Matrix.is_antidiagonal(id: Matrix<int>): bool
Matrix.is_antidiagonal(id: Matrix<float>): bool
```

檢查給定矩陣是否是反對角矩陣，如果是則傳回 `true`，否則傳回 `false`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要檢查的整數矩陣。 |

**返回:** <code>bool</code>

檢查給定矩陣是否為反對角矩陣，如果是則傳回 `true`，否則傳回 `false`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 要檢查的浮點矩陣。 |

**返回:** <code>bool</code>

---

### is_antisymmetric {#is_antisymmetric}

**Overloads**

```navi
Matrix.is_antisymmetric(id: Matrix<int>): bool
Matrix.is_antisymmetric(id: Matrix<float>): bool
```

檢查給定矩陣是否是反對稱矩陣，如果是則傳回 `true`，否則傳回 `false`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要檢查的整數矩陣。 |

**返回:** <code>bool</code>

檢查給定矩陣是否為反對稱矩陣，如果是則傳回 `true`，否則傳回 `false`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 要檢查的浮點矩陣。 |

**返回:** <code>bool</code>

---

### is_binary {#is_binary}

**Overloads**

```navi
Matrix.is_binary(id: Matrix<int>): bool
Matrix.is_binary(id: Matrix<float>): bool
```

檢查給定矩陣是否為二進制矩陣（僅包含 0 和 1），如果是則傳回 `true`，否則傳回 `false`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要檢查的整數矩陣。 |

**返回:** <code>bool</code>

檢查給定矩陣是否為二值矩陣（只包含 0 和 1），如果是則傳回 `true`，否則傳回 `false`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 要檢查的浮點矩陣。 |

**返回:** <code>bool</code>

---

### is_diagonal {#is_diagonal}

**Overloads**

```navi
Matrix.is_diagonal(id: Matrix<int>): bool
Matrix.is_diagonal(id: Matrix<float>): bool
```

檢查給定矩陣是否為對角矩陣，如果是，則傳回 `true`，否則傳回 `false`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要檢查的整數矩陣。 |

**返回:** <code>bool</code>

檢查給定矩陣是否為對角矩陣，如果是則傳回 `true`，否則傳回 `false`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 要檢查的浮點矩陣。 |

**返回:** <code>bool</code>

---

### is_identity {#is_identity}

**Overloads**

```navi
Matrix.is_identity(id: Matrix<int>): bool
Matrix.is_identity(id: Matrix<float>): bool
```

檢查給定矩陣是否為單位矩陣，如果是則傳回 `true`，否則傳回 `false`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要檢查的整數矩陣。 |

**返回:** <code>bool</code>

檢查給定矩陣是否為單位矩陣，如果是則傳回 `true`，否則傳回 `false`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 要檢查的浮點矩陣。 |

**返回:** <code>bool</code>

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

**Overloads**

```navi
Matrix.is_stochastic(id: Matrix<float>): bool
Matrix.is_stochastic(id: Matrix<int>): bool
```

檢查給定矩陣是否是隨機矩陣，如果是則傳回 `true`，否則傳回 `false`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 要檢查的浮點矩陣。 |

**返回:** <code>bool</code>

檢查給定矩陣是否為隨機矩陣，如果是則傳回 `true`，否則傳回 `false`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要檢查的整數矩陣。 |

**返回:** <code>bool</code>

---

### is_symmetric {#is_symmetric}

**Overloads**

```navi
Matrix.is_symmetric(id: Matrix<int>): bool
Matrix.is_symmetric(id: Matrix<float>): bool
```

檢查給定矩陣是否是對稱矩陣，如果是，則傳回 `true`，否則傳回 `false`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要檢查的整數矩陣。 |

**返回:** <code>bool</code>

檢查給定矩陣是否為對稱矩陣，如果是則傳回 `true`，否則傳回 `false`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 要檢查的浮點矩陣。 |

**返回:** <code>bool</code>

---

### is_triangular {#is_triangular}

**Overloads**

```navi
Matrix.is_triangular(id: Matrix<int>): bool
Matrix.is_triangular(id: Matrix<float>): bool
```

檢查給定矩陣是否為三角矩陣，如果是則傳回 `true`，否則傳回 `false`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要檢查的整數矩陣。 |

**返回:** <code>bool</code>

檢查給定矩陣是否為三角矩陣，如果是則傳回 `true`，否則傳回 `false`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 要檢查的浮點矩陣。 |

**返回:** <code>bool</code>

---

### is_zero {#is_zero}

**Overloads**

```navi
Matrix.is_zero(id: Matrix<int>): bool
Matrix.is_zero(id: Matrix<float>): bool
```

檢查給定矩陣是否為零矩陣，如果是則傳回 `true`，否則傳回 `false`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要檢查的整數矩陣。 |

**返回:** <code>bool</code>

檢查給定矩陣是否為零矩陣，如果是則傳回 `true`，否則傳回 `false`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 要檢查的浮點矩陣。 |

**返回:** <code>bool</code>

---

### kron {#kron}

**Overloads**

```navi
Matrix.kron(id1: Matrix<int>, id2: Matrix<int>): Matrix<int>
Matrix.kron(id1: Matrix<float>, id2: Matrix<float>): Matrix<float>
```

計算兩個矩陣的克羅內克積並傳回結果矩陣。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 第一個整數矩陣。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 第二個整數矩陣。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code>

計算兩個矩陣的 Kronecker 積，並傳回結果矩陣。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 第一個浮點矩陣。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 第二個浮點矩陣。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

---

### max {#max}

**Overloads**

```navi
Matrix.max(id: Matrix<int>): int
Matrix.max(id: Matrix<float>): float
```

計算並傳回指定矩陣中所有元素的最大值。如果矩陣為空或不包含任何值，則傳回 `na`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要從中查找最大值的整數矩陣。 |

**返回:** <code>int</code>

傳回所有元素中的最大值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 要從中查找最大值的浮點矩陣。 |

**返回:** <code>float</code>

---

### median {#median}

**Overloads**

```navi
Matrix.median(id: Matrix<int>): float
Matrix.median(id: Matrix<float>): float
```

計算並傳回指定矩陣中所有元素的中位數。如果矩陣為空或不包含任何值，則傳回 `na`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要從中查找中位數的整數矩陣。 |

**返回:** <code>float</code>

計算並傳回指定矩陣中所有元素的中位數。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 用於查找中位數的浮點矩陣。 |

**返回:** <code>float</code>

---

### min {#min}

**Overloads**

```navi
Matrix.min(id: Matrix<int>): int
Matrix.min(id: Matrix<float>): float
```

計算並傳回指定矩陣中所有元素的最小值。如果矩陣為空或不包含任何值，則傳回 `na`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 用於查找最小值的整數矩陣。 |

**返回:** <code>int</code>

傳回所有元素中的最小值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 用於查找最小值的浮點矩陣。 |

**返回:** <code>float</code>

---

### mode {#mode}

**Overloads**

```navi
Matrix.mode(id: Matrix<int>): int
Matrix.mode(id: Matrix<float>): float
```

該函數傳回矩陣元素的眾數。如果有多個值具有相同的頻率，則傳回最小值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 用於查找眾數的整數矩陣。 |

**返回:** <code>int</code> — 最常出現的值，或相關值中最小的值。

傳回矩陣元素的眾數。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 用於查找眾數的浮點矩陣。 |

**返回:** <code>float</code> — The most frequently occurring value, or the smallest among tied values.

---

### multi {#multi}

**Overloads**

```navi
Matrix.multi(id1: Matrix<int>, id2: Matrix<int>): Matrix<int>
Matrix.multi(id1: Matrix<float>, id2: Matrix<float>): Matrix<float>
Matrix.multi(id1: Matrix<int>, id2: Matrix<float>): Matrix<float>
Matrix.multi(id1: Matrix<float>, id2: Matrix<int>): Matrix<float>
```

將兩個矩陣相乘並傳回結果矩陣。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 第一個整數矩陣。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 第二個整數矩陣。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code>

矩陣乘法。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 第一個浮點矩陣。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 第二個浮點矩陣。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

矩陣乘法。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 第一個整數矩陣。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 第二個浮點矩陣。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

矩陣乘法。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 第一個浮點矩陣。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 第二個整數矩陣。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

---

### pinv {#pinv}

**Overloads**

```navi
Matrix.pinv(id: Matrix<int>): Matrix<float>
Matrix.pinv(id: Matrix<float>): Matrix<float>
```

計算並傳回指定矩陣的 Moore-Penrose 偽逆。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 用於計算偽逆的整數矩陣。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

計算 Moore-Penrose 偽逆。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 用於計算偽逆的浮點矩陣。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

---

### pow {#pow}

**Overloads**

```navi
Matrix.pow(id: Matrix<int>, power: int): Matrix<int>
Matrix.pow(id: Matrix<float>, power: int): Matrix<float>
```

將方陣求指定的非負整數冪並傳回結果矩陣。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要求冪的整數方陣。 |
| `power` | <code>int</code> |  | 指數（非負整數）。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code>

將一個方陣提升到指定的非負整數次方，並傳回結果矩陣。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 要求冪的浮點方陣。 |
| `power` | <code>int</code> |  | 指數（非負整數）。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

---

### rank {#rank}

**Overloads**

```navi
Matrix.rank(id: Matrix<int>): int
Matrix.rank(id: Matrix<float>): int
```

計算並傳回指定矩陣的秩。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要計算秩的整數矩陣。 |

**返回:** <code>int</code>

傳回矩陣的秩。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 要計算排名的浮點矩陣。 |

**返回:** <code>int</code>

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

**Overloads**

```navi
Matrix.sort(id: Matrix<int>, order: any = SortOrder.Ascending)
Matrix.sort(id: Matrix<float>, order: any = SortOrder.Ascending)
Matrix.sort(id: Matrix<String>, order: any = SortOrder.Ascending)
```

按升序或降序對給定 `matrix` 的元素進行排序。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要排序的整數矩陣。 |
| `order` | <code>any</code> | `SortOrder.Ascending` | 排序順序（升序或降序）。 |

對矩陣元素進行排序。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 要排序的浮點矩陣。 |
| `order` | <code>any</code> | `SortOrder.Ascending` | 排序順序（升序或降序）。 |

對矩陣元素進行排序。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a>&gt;</code> |  | 要排序的字符串矩陣。 |
| `order` | <code>any</code> | `SortOrder.Ascending` | 排序順序（升序或降序）。 |

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

**Overloads**

```navi
Matrix.sum(id1: Matrix<int>, id2: Matrix<int>): Matrix<int>
Matrix.sum(id1: Matrix<float>, id2: Matrix<float>): Matrix<float>
Matrix.sum(id1: Matrix<int>, id2: Matrix<float>): Matrix<float>
Matrix.sum(id1: Matrix<float>, id2: Matrix<int>): Matrix<float>
```

計算相同維度的兩個矩陣的按元素和並傳回包含結果的新矩陣。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 第一個整數矩陣。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 第二個整數矩陣。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code>

計算兩個相同維度矩陣的逐元素和，並傳回一個包含結果的新矩陣。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 第一個浮點矩陣。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 第二個浮點矩陣。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

計算兩個相同維度矩陣的逐元素和，並傳回一個包含結果的新矩陣。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 第一個整數矩陣。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 第二個浮點矩陣。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

計算兩個相同維度矩陣的逐元素和，並傳回一個包含結果的新矩陣。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 第一個浮點矩陣。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 第二個整數矩陣。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

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

**Overloads**

```navi
Matrix.trace(id: Matrix<int>): int
Matrix.trace(id: Matrix<float>): float
```

計算並傳回指定方陣的跡。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | 要計算跡的整數方陣。 |

**返回:** <code>int</code>

傳回方陣的跡。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | 要計算跡的浮點方陣。 |

**返回:** <code>float</code>

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
