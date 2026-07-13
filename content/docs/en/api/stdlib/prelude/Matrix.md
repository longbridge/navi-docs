---
title: "Matrix<T>"
---


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

**Overloads**

```navi
Matrix.avg(id: Matrix<int>): float
Matrix.avg(id: Matrix<float>): float
```

Calculates and returns the average of all elements in the specified matrix.

If the matrix is empty or contains no values, it returns `na`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer matrix to calculate the average from. |

**Returns:** <code>float</code>

Calculates and returns the average of all elements in the specified matrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float matrix to calculate the average from. |

**Returns:** <code>float</code>

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

**Overloads**

```navi
Matrix.det(id: Matrix<int>): int
Matrix.det(id: Matrix<float>): float
```

Calculates and returns the determinant of the specified square matrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer matrix to calculate the determinant from. |

**Returns:** <code>int</code>

Calculates and returns the determinant of the specified square matrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float matrix to calculate the determinant from. |

**Returns:** <code>float</code>

---

### diff {#diff}

**Overloads**

```navi
Matrix.diff(id1: Matrix<int>, id2: Matrix<int>): Matrix<int>
Matrix.diff(id1: Matrix<float>, id2: Matrix<float>): Matrix<float>
Matrix.diff(id1: Matrix<int>, id2: Matrix<float>): Matrix<float>
Matrix.diff(id1: Matrix<float>, id2: Matrix<int>): Matrix<float>
```

Computes the element-wise difference between two matrices of the same dimensions and returns a new matrix containing the results.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The first integer matrix. |
| `id2` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The second integer matrix. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code>

Computes and returns the element-wise difference between two matrices of the same dimensions.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The first float matrix. |
| `id2` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The second float matrix. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

Computes and returns the element-wise difference between two matrices of the same dimensions.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The first integer matrix. |
| `id2` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The second float matrix. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

Computes and returns the element-wise difference between two matrices of the same dimensions.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The first float matrix. |
| `id2` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The second integer matrix. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

---

### eigenvalues {#eigenvalues}

**Overloads**

```navi
Matrix.eigenvalues(id: Matrix<int>): Matrix<float>
Matrix.eigenvalues(id: Matrix<float>): Matrix<float>
```

Calculates and returns the eigenvalues of the specified square matrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer square matrix to calculate eigenvalues from. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

Returns the eigenvalues of the specified square matrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float square matrix to calculate eigenvalues from. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

---

### eigenvectors {#eigenvectors}

**Overloads**

```navi
Matrix.eigenvectors(id: Matrix<int>): Matrix<float>
Matrix.eigenvectors(id: Matrix<float>): Matrix<float>
```

Calculates and returns the eigenvectors of the specified square matrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer square matrix to calculate eigenvectors from. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

Returns the eigenvectors of the specified square matrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float square matrix to calculate eigenvectors from. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

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

**Overloads**

```navi
Matrix.inv(id: Matrix<int>): Matrix<float>
Matrix.inv(id: Matrix<float>): Matrix<float>
```

Computes and returns the inverse of the specified square matrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer square matrix to invert. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

Computes the inverse of the specified square matrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float square matrix to invert. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

---

### is_antidiagonal {#is_antidiagonal}

**Overloads**

```navi
Matrix.is_antidiagonal(id: Matrix<int>): bool
Matrix.is_antidiagonal(id: Matrix<float>): bool
```

Checks if the given matrix is an antidiagonal matrix, returning `true` if it is and `false` otherwise.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer matrix to check. |

**Returns:** <code>bool</code>

Checks if the given matrix is an antidiagonal matrix, returning `true` if it is and `false` otherwise.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float matrix to check. |

**Returns:** <code>bool</code>

---

### is_antisymmetric {#is_antisymmetric}

**Overloads**

```navi
Matrix.is_antisymmetric(id: Matrix<int>): bool
Matrix.is_antisymmetric(id: Matrix<float>): bool
```

Checks if the given matrix is an antisymmetric matrix, returning `true` if it is and `false` otherwise.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer matrix to check. |

**Returns:** <code>bool</code>

Checks if the given matrix is an antisymmetric matrix, returning `true` if it is and `false` otherwise.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float matrix to check. |

**Returns:** <code>bool</code>

---

### is_binary {#is_binary}

**Overloads**

```navi
Matrix.is_binary(id: Matrix<int>): bool
Matrix.is_binary(id: Matrix<float>): bool
```

Checks if the given matrix is a binary matrix (containing only 0 and 1), returning `true` if it is and `false` otherwise.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer matrix to check. |

**Returns:** <code>bool</code>

Checks if the given matrix is a binary matrix (containing only 0 and 1), returning `true` if it is and `false` otherwise.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float matrix to check. |

**Returns:** <code>bool</code>

---

### is_diagonal {#is_diagonal}

**Overloads**

```navi
Matrix.is_diagonal(id: Matrix<int>): bool
Matrix.is_diagonal(id: Matrix<float>): bool
```

Checks if the given matrix is a diagonal matrix, returning `true` if it is and `false` otherwise.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer matrix to check. |

**Returns:** <code>bool</code>

Checks if the given matrix is a diagonal matrix, returning `true` if it is and `false` otherwise.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float matrix to check. |

**Returns:** <code>bool</code>

---

### is_identity {#is_identity}

**Overloads**

```navi
Matrix.is_identity(id: Matrix<int>): bool
Matrix.is_identity(id: Matrix<float>): bool
```

Checks if the given matrix is an identity matrix, returning `true` if it is and `false` otherwise.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer matrix to check. |

**Returns:** <code>bool</code>

Checks if the given matrix is an identity matrix, returning `true` if it is and `false` otherwise.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float matrix to check. |

**Returns:** <code>bool</code>

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

**Overloads**

```navi
Matrix.is_stochastic(id: Matrix<float>): bool
Matrix.is_stochastic(id: Matrix<int>): bool
```

Checks if the given matrix is a stochastic matrix, returning `true` if it is and `false` otherwise.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float matrix to check. |

**Returns:** <code>bool</code>

Checks if the given matrix is a stochastic matrix, returning `true` if it is and `false` otherwise.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer matrix to check. |

**Returns:** <code>bool</code>

---

### is_symmetric {#is_symmetric}

**Overloads**

```navi
Matrix.is_symmetric(id: Matrix<int>): bool
Matrix.is_symmetric(id: Matrix<float>): bool
```

Checks if the given matrix is a symmetric matrix, returning `true` if it is and `false` otherwise.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer matrix to check. |

**Returns:** <code>bool</code>

Checks if the given matrix is a symmetric matrix, returning `true` if it is and `false` otherwise.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float matrix to check. |

**Returns:** <code>bool</code>

---

### is_triangular {#is_triangular}

**Overloads**

```navi
Matrix.is_triangular(id: Matrix<int>): bool
Matrix.is_triangular(id: Matrix<float>): bool
```

Checks if the given matrix is a triangular matrix, returning `true` if it is and `false` otherwise.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer matrix to check. |

**Returns:** <code>bool</code>

Checks if the given matrix is a triangular matrix, returning `true` if it is and `false` otherwise.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float matrix to check. |

**Returns:** <code>bool</code>

---

### is_zero {#is_zero}

**Overloads**

```navi
Matrix.is_zero(id: Matrix<int>): bool
Matrix.is_zero(id: Matrix<float>): bool
```

Checks if the given matrix is a zero matrix, returning `true` if it is and `false` otherwise.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer matrix to check. |

**Returns:** <code>bool</code>

Checks if the given matrix is a zero matrix, returning `true` if it is and `false` otherwise.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float matrix to check. |

**Returns:** <code>bool</code>

---

### kron {#kron}

**Overloads**

```navi
Matrix.kron(id1: Matrix<int>, id2: Matrix<int>): Matrix<int>
Matrix.kron(id1: Matrix<float>, id2: Matrix<float>): Matrix<float>
```

Computes the Kronecker product of two matrices and returns the resulting matrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The first integer matrix. |
| `id2` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The second integer matrix. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code>

Computes the Kronecker product of two matrices and returns the resulting matrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The first float matrix. |
| `id2` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The second float matrix. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

---

### max {#max}

**Overloads**

```navi
Matrix.max(id: Matrix<int>): int
Matrix.max(id: Matrix<float>): float
```

Calculates and returns the maximum value among all elements in the specified matrix.

If the matrix is empty or contains no values, it returns `na`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer matrix to find the maximum from. |

**Returns:** <code>int</code>

Returns the maximum value among all elements.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float matrix to find the maximum from. |

**Returns:** <code>float</code>

---

### median {#median}

**Overloads**

```navi
Matrix.median(id: Matrix<int>): float
Matrix.median(id: Matrix<float>): float
```

Calculates and returns the median of all elements in the specified matrix.

If the matrix is empty or contains no values, it returns `na`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer matrix to find the median from. |

**Returns:** <code>float</code>

Calculates and returns the median of all elements in the specified matrix.

If the matrix is empty or contains no values, it returns `na`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float matrix to find the median from. |

**Returns:** <code>float</code>

---

### min {#min}

**Overloads**

```navi
Matrix.min(id: Matrix<int>): int
Matrix.min(id: Matrix<float>): float
```

Calculates and returns the minimum value among all elements in the specified matrix.

If the matrix is empty or contains no values, it returns `na`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer matrix to find the minimum from. |

**Returns:** <code>int</code>

Returns the minimum value among all elements.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float matrix to find the minimum from. |

**Returns:** <code>float</code>

---

### mode {#mode}

**Overloads**

```navi
Matrix.mode(id: Matrix<int>): int
Matrix.mode(id: Matrix<float>): float
```

The function returns the mode of an matrix's elements.

If there are several values with the same frequency, it returns the smallest value.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer matrix to find the mode from. |

**Returns:** <code>int</code> — The most frequently occurring value, or the smallest among tied values.

The function returns the mode of an matrix's elements.

If there are several values with the same frequency, it returns the smallest value.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float matrix to find the mode from. |

**Returns:** <code>float</code> — The most frequently occurring value, or the smallest among tied values.

---

### multi {#multi}

**Overloads**

```navi
Matrix.multi(id1: Matrix<int>, id2: Matrix<int>): Matrix<int>
Matrix.multi(id1: Matrix<float>, id2: Matrix<float>): Matrix<float>
Matrix.multi(id1: Matrix<int>, id2: Matrix<float>): Matrix<float>
Matrix.multi(id1: Matrix<float>, id2: Matrix<int>): Matrix<float>
```

Multiplies two matrices and returns the resulting matrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The first integer matrix. |
| `id2` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The second integer matrix. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code>

Matrix multiplication.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The first float matrix. |
| `id2` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The second float matrix. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

Matrix multiplication.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The first integer matrix. |
| `id2` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The second float matrix. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

Matrix multiplication.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The first float matrix. |
| `id2` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The second integer matrix. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

---

### pinv {#pinv}

**Overloads**

```navi
Matrix.pinv(id: Matrix<int>): Matrix<float>
Matrix.pinv(id: Matrix<float>): Matrix<float>
```

Computes and returns the Moore-Penrose pseudoinverse of the specified matrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer matrix to compute the pseudoinverse from. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

Computes the Moore-Penrose pseudoinverse.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float matrix to compute the pseudoinverse from. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

---

### pow {#pow}

**Overloads**

```navi
Matrix.pow(id: Matrix<int>, power: int): Matrix<int>
Matrix.pow(id: Matrix<float>, power: int): Matrix<float>
```

Raises a square matrix to the specified non-negative integer power and returns the resulting matrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer square matrix to raise to a power. |
| `power` | <code>int</code> |  | The exponent (non-negative integer). |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code>

Raises a square matrix to the specified non-negative integer power and returns the resulting matrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float square matrix to raise to a power. |
| `power` | <code>int</code> |  | The exponent (non-negative integer). |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

---

### rank {#rank}

**Overloads**

```navi
Matrix.rank(id: Matrix<int>): int
Matrix.rank(id: Matrix<float>): int
```

Calculates and returns the rank of the specified matrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer matrix to calculate the rank of. |

**Returns:** <code>int</code>

Returns the rank of the matrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float matrix to calculate the rank of. |

**Returns:** <code>int</code>

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

**Overloads**

```navi
Matrix.sort(id: Matrix<int>, order: any = SortOrder.Ascending)
Matrix.sort(id: Matrix<float>, order: any = SortOrder.Ascending)
Matrix.sort(id: Matrix<String>, order: any = SortOrder.Ascending)
```

Sorts the elements of the given `matrix` in ascending or descending order.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer matrix to sort. |
| `order` | <code>any</code> | `SortOrder.Ascending` | The sort order (ascending or descending). |

Sorts matrix elements.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float matrix to sort. |
| `order` | <code>any</code> | `SortOrder.Ascending` | The sort order (ascending or descending). |

Sorts matrix elements.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a>&gt;</code> |  | The String matrix to sort. |
| `order` | <code>any</code> | `SortOrder.Ascending` | The sort order (ascending or descending). |

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

**Overloads**

```navi
Matrix.sum(id1: Matrix<int>, id2: Matrix<int>): Matrix<int>
Matrix.sum(id1: Matrix<float>, id2: Matrix<float>): Matrix<float>
Matrix.sum(id1: Matrix<int>, id2: Matrix<float>): Matrix<float>
Matrix.sum(id1: Matrix<float>, id2: Matrix<int>): Matrix<float>
```

Computes the element-wise sum of two matrices of the same dimensions and returns a new matrix containing the results.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The first integer matrix. |
| `id2` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The second integer matrix. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code>

Computes the element-wise sum of two matrices of the same dimensions and returns a new matrix containing the results.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The first float matrix. |
| `id2` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The second float matrix. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

Computes the element-wise sum of two matrices of the same dimensions and returns a new matrix containing the results.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The first integer matrix. |
| `id2` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The second float matrix. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

Computes the element-wise sum of two matrices of the same dimensions and returns a new matrix containing the results.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The first float matrix. |
| `id2` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The second integer matrix. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code>

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

**Overloads**

```navi
Matrix.trace(id: Matrix<int>): int
Matrix.trace(id: Matrix<float>): float
```

Calculates and returns the trace of the specified square matrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;int&gt;</code> |  | The integer square matrix to calculate the trace of. |

**Returns:** <code>int</code>

Returns the trace of the square matrix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Matrix">Matrix</a>&lt;float&gt;</code> |  | The float square matrix to calculate the trace of. |

**Returns:** <code>float</code>

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
