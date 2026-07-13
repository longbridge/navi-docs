---
title: "Array<T>"
---


# Array&lt;T&gt;

An ordered, indexable collection of elements of type `T`.

Create with `Array.new()` or an array literal `[1, 2, 3]`. Access elements with `get` / `set`; iterate with `for v in arr`.

**Kind:** object

## Static Methods

### from {#from}

```navi
Array.from(values: T): Array<T>
```

Creates a new array containing the provided `values`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `values` | <code>T</code> |  | Variable number of elements to include in the array. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code>

---

### new {#new}

```navi
Array.new(size: int = 0, initial_value: T = na): const Array<T>
```

Creates a new empty array of type `T`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | <code>int</code> | `0` | The initial size of the array. |
| `initial_value` | <code>T</code> | `na` | The initial value for all elements. |

**Returns:** <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code>

---

### new_bool {#new_bool}

```navi
Array.new_bool(size: int = 0, initial_value: bool = na): Array<bool>
```

Creates a new array of `bool` values.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | <code>int</code> | `0` | Initial size of the array. Default is 0. |
| `initial_value` | <code>bool</code> | `na` | Initial value for all elements. Default is `na`. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;bool&gt;</code>

---

### new_box {#new_box}

```navi
Array.new_box(size: int = 0, initial_value: Box = na): Array<Box>
```

Creates a new array of `Box` ids.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | <code>int</code> | `0` | Initial size of the array. Default is 0. |
| `initial_value` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Box">Box</a></code> | `na` | Initial value for all elements. Default is `na`. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/api/stdlib/prelude/Box">Box</a>&gt;</code>

---

### new_color {#new_color}

```navi
Array.new_color(size: int = 0, initial_value: Color = na): Array<Color>
```

Creates a new array of `color` values.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | <code>int</code> | `0` | Initial size of the array. Default is 0. |
| `initial_value` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code> | `na` | Initial value for all elements. Default is `na`. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a>&gt;</code>

---

### new_float {#new_float}

```navi
Array.new_float(size: int = 0, initial_value: float = na): Array<float>
```

Creates a new array of `float` values.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | <code>int</code> | `0` | Initial size of the array. Default is 0. |
| `initial_value` | <code>float</code> | `na` | Initial value for all elements. Default is `na`. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code>

---

### new_int {#new_int}

```navi
Array.new_int(size: int = 0, initial_value: int = na): Array<int>
```

Creates a new array of `int` values.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | <code>int</code> | `0` | Initial size of the array. Default is 0. |
| `initial_value` | <code>int</code> | `na` | Initial value for all elements. Default is `na`. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code>

---

### new_label {#new_label}

```navi
Array.new_label(size: int = 0, initial_value: Label = na): Array<Label>
```

Creates a new array of `Label` ids.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | <code>int</code> | `0` | Initial size of the array. Default is 0. |
| `initial_value` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Label">Label</a></code> | `na` | Initial value for all elements. Default is `na`. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/api/stdlib/prelude/Label">Label</a>&gt;</code>

---

### new_line {#new_line}

```navi
Array.new_line(size: int = 0, initial_value: Line = na): Array<Line>
```

Creates a new array of `Line` ids.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | <code>int</code> | `0` | Initial size of the array. Default is 0. |
| `initial_value` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Line">Line</a></code> | `na` | Initial value for all elements. Default is `na`. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/api/stdlib/prelude/Line">Line</a>&gt;</code>

---

### new_line_fill {#new_line_fill}

```navi
Array.new_line_fill(
    size: int = 0,
    initial_value: LineFill = na
  ): Array<LineFill>
```

Creates a new array of `LineFill` ids.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | <code>int</code> | `0` | Initial size of the array. Default is 0. |
| `initial_value` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/LineFill">LineFill</a></code> | `na` | Initial value for all elements. Default is `na`. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/api/stdlib/prelude/LineFill">LineFill</a>&gt;</code>

---

### new_string {#new_string}

```navi
Array.new_string(size: int = 0, initial_value: String = na): Array<String>
```

Creates a new array of `String` values.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | <code>int</code> | `0` | Initial size of the array. Default is 0. |
| `initial_value` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | Initial value for all elements. Default is `na`. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a>&gt;</code>

---

### new_table {#new_table}

```navi
Array.new_table(size: int = 0, initial_value: Table = na): Array<Table>
```

Creates a new array of `Table` ids.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | <code>int</code> | `0` | Initial size of the array. Default is 0. |
| `initial_value` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Table">Table</a></code> | `na` | Initial value for all elements. Default is `na`. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/api/stdlib/prelude/Table">Table</a>&gt;</code>

## Methods

### abs {#abs}

**Overloads**

```navi
Array.abs(id: Array<int>): Array<int>
Array.abs(id: Array<float>): Array<float>
```

Returns a new array containing the absolute values of the elements of the input `id`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | the input array of integer elements. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code>

Returns a new array containing the absolute values of the elements of the input `id`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | the input array of float elements. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code>

---

### avg {#avg}

**Overloads**

```navi
Array.avg(id: series Array<int>): float
Array.avg(id: series Array<float>): float
```

Returns the average of the elements in the input `id`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | the input array of integer elements. |

**Returns:** <code>float</code>

Returns the average.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | the input array of float elements. |

**Returns:** <code>float</code>

---

### binary_search {#binary_search}

**Overloads**

```navi
Array.binary_search(id: Array<int>, value: int): int
Array.binary_search(id: Array<float>, value: float): int
```

Performs a binary search for the specified `value` in the given sorted `id` and returns the index of the value if found, or -1 if not found.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | The sorted array of integers to search. |
| `value` | <code>int</code> |  | The value to search for. |

**Returns:** <code>int</code> — The index of the value, or -1 if not found. the array must be sorted in ascending order.

Performs a binary search for the specified `value` in the given sorted `id` and returns the index of the value if found, or -1 if not found.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | The sorted array of floats to search. |
| `value` | <code>float</code> |  | The value to search for. |

**Returns:** <code>int</code> — The index of the value, or -1 if not found. the array must be sorted in ascending order.

---

### binary_search_leftmost {#binary_search_leftmost}

**Overloads**

```navi
Array.binary_search_leftmost(id: Array<int>, value: int): int
Array.binary_search_leftmost(id: Array<float>, value: float): int
```

Returns the index of the matching value in the sorted array.

If the value is not found, the function returns the index of the nearest smaller element to the left of where the value would be inserted. the array to search must be sorted in ascending order.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | The sorted array of integers to search. |
| `value` | <code>int</code> |  | The value to search for. |

**Returns:** <code>int</code>

Returns the index of the matching value in the sorted array.

If the value is not found, the function returns the index of the nearest smaller element to the left of where the value would be inserted. the array to search must be sorted in ascending order.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | The sorted array of floats to search. |
| `value` | <code>float</code> |  | The value to search for. |

**Returns:** <code>int</code>

---

### binary_search_rightmost {#binary_search_rightmost}

**Overloads**

```navi
Array.binary_search_rightmost(id: Array<int>, value: int): int
Array.binary_search_rightmost(id: Array<float>, value: float): int
```

Returns the index of the matching value in the sorted array.

When the value is not found, the function returns the index of the element to the right of where the value would lie if it was in the array. the array must be sorted in ascending order.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | The sorted array of integers to search. |
| `value` | <code>int</code> |  | The value to search for. |

**Returns:** <code>int</code>

Returns the index of the matching value in the sorted array.

When the value is not found, the function returns the index of the element to the right of where the value would lie if it was in the array. the array must be sorted in ascending order.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | The sorted array of floats to search. |
| `value` | <code>float</code> |  | The value to search for. |

**Returns:** <code>int</code>

---

### clear {#clear}

```navi
Array.clear(id: series Array<T>)
```

Clears all elements from the given array.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | the array to clear. |

---

### concat {#concat}

```navi
Array.concat(id1: Array<T>, id2: Array<T>): Array<T>
```

Concatenates two arrays of the same type `T` and returns a new array containing all elements from both arrays.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | The first array to concatenate. |
| `id2` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | The second array to concatenate. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code>

---

### copy {#copy}

```navi
Array.copy(id: Array<T>): Array<T>
```

Creates a copy of the given array and returns the new id.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | the array to copy. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code>

---

### covariance {#covariance}

**Overloads**

```navi
Array.covariance(id1: Array<float>, id2: Array<float>, biased: any = true): float
Array.covariance(id1: Array<int>, id2: Array<int>, biased: any = true): float
Array.covariance(id1: Array<int>, id2: Array<float>, biased: any = true): float
Array.covariance(id1: Array<float>, id2: Array<int>, biased: any = true): float
```

Calculates the covariance between two arrays of the same type `T`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | The first input array. |
| `id2` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | The second input array. |
| `biased` | <code>any</code> | `true` | If `true`, the function uses biased estimation (dividing by `n`); if `false`, it uses unbiased estimation (dividing by `n-1`). |

**Returns:** <code>float</code>

Calculates the covariance between two arrays.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | The first input array. |
| `id2` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | The second input array. |
| `biased` | <code>any</code> | `true` | If `true`, the function uses biased estimation (dividing by `n`); if `false`, it uses unbiased estimation (dividing by `n-1`). |

**Returns:** <code>float</code>

Calculates the covariance between two arrays.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | The first input array. |
| `id2` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | The second input array. |
| `biased` | <code>any</code> | `true` | If `true`, the function uses biased estimation (dividing by `n`); if `false`, it uses unbiased estimation (dividing by `n-1`). |

**Returns:** <code>float</code>

Calculates the covariance between two arrays.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | The first input array. |
| `id2` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | The second input array. |
| `biased` | <code>any</code> | `true` | If `true`, the function uses biased estimation (dividing by `n`); if `false`, it uses unbiased estimation (dividing by `n-1`). |

**Returns:** <code>float</code>

---

### every {#every}

**Overloads**

```navi
Array.every(id: Array<bool>): bool
Array.every(id: Array<int>): bool
Array.every(id: Array<float>): bool
```

Checks if every element in the given boolean array is `true`.

It returns `true` if all elements are `true`, and `false` otherwise.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;bool&gt;</code> |  | the array to check. |

**Returns:** <code>bool</code>

Checks if every element in the given array evaluates to `true`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | the array to check. |

**Returns:** <code>bool</code>

Checks if every element in the given array evaluates to `true`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | the array to check. |

**Returns:** <code>bool</code>

---

### fill {#fill}

```navi
Array.fill(id: Array<T>, value: T, index_from: int = 0, index_to: int = na)
```

Fills the elements of the given array with the specified `value` from `index_from` to `index_to`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | the array to fill. |
| `value` | <code>T</code> |  | The value to fill with. |
| `index_from` | <code>int</code> | `0` | The starting index (inclusive). |
| `index_to` | <code>int</code> | `na` | The ending index (exclusive). When na, denotes end of array. |

---

### first {#first}

```navi
Array.first(id: Array<T>): T
```

Returns the first element of the given array.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | the array to retrieve the first element from. |

**Returns:** <code>T</code>

---

### get {#get}

```navi
Array.get(id: Array<T>, index: int): T
```

Returns the element at the specified `index` from the given array.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | the array to retrieve the element from. |
| `index` | <code>int</code> |  | The index of the element to retrieve. |

**Returns:** <code>T</code>

---

### includes {#includes}

```navi
Array.includes(id: Array<T>, value: T): bool
```

Checks if the given array includes the specified `value`.

It returns `true` if the value is found in the array, and `false` otherwise.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | the array to search. |
| `value` | <code>T</code> |  | The value to search for. |

**Returns:** <code>bool</code>

---

### indexof {#indexof}

```navi
Array.indexof(id: Array<T>, value: T): int
```

Returns the index of the first occurrence of the specified `value` in the given array.

If the value is not found, it returns -1.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | the array to search. |
| `value` | <code>T</code> |  | The value to search for. |

**Returns:** <code>int</code> — The zero-based index of the first occurrence, or -1 if not found.

---

### insert {#insert}

```navi
Array.insert(id: Array<T>, index: int, value: T)
```

Inserts the specified `value` at the given `index` in the `id`, shifting subsequent elements to the right.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | the array to modify. |
| `index` | <code>int</code> |  | The index at which to insert the value. |
| `value` | <code>T</code> |  | The value to insert. |

---

### join {#join}

**Overloads**

```navi
Array.join(id: Array<int>, separator: String): String
Array.join(id: Array<float>, separator: String): String
Array.join(id: Array<String>, separator: String): String
```

Joins the elements of the given array into a single String, with each element separated by the specified `separator`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | the array of integers to join. |
| `separator` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The separator String to place between elements. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

Joins the elements of the given array into a single String, with each element separated by the specified `separator`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | the array of floats to join. |
| `separator` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The separator String to place between elements. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

Joins the elements of the given array into a single String, with each element separated by the specified `separator`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a>&gt;</code> |  | the array of strings to join. |
| `separator` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The separator String to place between elements. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

---

### last {#last}

```navi
Array.last(id: Array<T>): T
```

Returns the last element of the given array.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | the array to retrieve the last element from. |

**Returns:** <code>T</code>

---

### lastindexof {#lastindexof}

```navi
Array.lastindexof(id: Array<T>, value: T): int
```

Returns the index of the last occurrence of the specified `value` in the given array.

If the value is not found, it returns -1.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | the array to search. |
| `value` | <code>T</code> |  | The value to search for. |

**Returns:** <code>int</code> — The zero-based index of the last occurrence, or -1 if not found.

---

### max {#max}

**Overloads**

```navi
Array.max(id: Array<int>, nth: int = 0): int
Array.max(id: Array<float>, nth: int = 0): float
```

Returns the `nth` maximum value from the given `id`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | the input array of integers. |
| `nth` | <code>int</code> | `0` | Which maximum to return (0 for the largest, 1 for the second largest, etc.). |

**Returns:** <code>int</code>

Returns the `nth` maximum value from the given `id`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | the input array of floats. |
| `nth` | <code>int</code> | `0` | Which maximum to return (0 for the largest, 1 for the second largest, etc.). |

**Returns:** <code>float</code>

---

### median {#median}

**Overloads**

```navi
Array.median(id: Array<int>): float
Array.median(id: Array<float>): float
```

Returns the median value of the elements in the given `id`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | the input array of integers. |

**Returns:** <code>float</code>

Returns the median.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | the input array of floats. |

**Returns:** <code>float</code>

---

### min {#min}

**Overloads**

```navi
Array.min(id: Array<int>, nth: int = 0): int
Array.min(id: Array<float>, nth: int = 0): float
```

Returns the `nth` minimum value from the given `id`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | the input array of integers. |
| `nth` | <code>int</code> | `0` | Which minimum to return (0 for the smallest, 1 for the second smallest, etc.). |

**Returns:** <code>int</code>

Returns the `nth` minimum value from the given `id`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | the input array of floats. |
| `nth` | <code>int</code> | `0` | Which minimum to return (0 for the smallest, 1 for the second smallest, etc.). |

**Returns:** <code>float</code>

---

### mode {#mode}

**Overloads**

```navi
Array.mode(id: Array<int>): int
Array.mode(id: Array<float>): float
```

The function returns the mode of an array's elements.

If there are several values with the same frequency, it returns the smallest value.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | the input array of integers. |

**Returns:** <code>int</code> — The most frequently occurring value, or the smallest among tied values.

The function returns the mode of an array's elements.

If there are several values with the same frequency, it returns the smallest value.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | the input array of floats. |

**Returns:** <code>float</code> — The most frequently occurring value, or the smallest among tied values.

---

### percent_rank {#percent_rank}

**Overloads**

```navi
Array.percent_rank(id: Array<int>, index: int): float
Array.percent_rank(id: Array<float>, index: int): float
```

Returns the percentile rank of the element at the specified `index` in the given array.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | the input array of integers. |
| `index` | <code>int</code> |  | The index of the element. |

**Returns:** <code>float</code> — A value between 0 and 100 indicating the percentage of elements that are less than or equal to the element at `index`.

Returns the percentile rank of the element at the specified `index` in the given array.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | the input array of floats. |
| `index` | <code>int</code> |  | The index of the element. |

**Returns:** <code>float</code> — A value between 0 and 100 indicating the percentage of elements that are less than or equal to the element at `index`.

---

### percentile_linear_interpolation {#percentile_linear_interpolation}

**Overloads**

```navi
Array.percentile_linear_interpolation(id: Array<int>, percentage: float): float
Array.percentile_linear_interpolation(id: Array<float>, percentage: float): float
```

Returns the value at the specified `percentile` from the given array using linear interpolation.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | the input array of integers. |
| `percentage` | <code>float</code> |  | The percentile value (0-100). |

**Returns:** <code>float</code>

Returns value at percentile with linear interpolation.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | the input array of floats. |
| `percentage` | <code>float</code> |  | The percentile value (0-100). |

**Returns:** <code>float</code>

---

### percentile_nearest_rank {#percentile_nearest_rank}

**Overloads**

```navi
Array.percentile_nearest_rank(id: Array<int>, percentage: float): float
Array.percentile_nearest_rank(id: Array<float>, percentage: float): float
```

Returns the value at the specified `percentile` from the given array using the nearest-rank method.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | the input array of integers. |
| `percentage` | <code>float</code> |  | The percentile value (0-100). |

**Returns:** <code>float</code>

Returns value at percentile with nearest-rank.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | the input array of floats. |
| `percentage` | <code>float</code> |  | The percentile value (0-100). |

**Returns:** <code>float</code>

---

### pop {#pop}

```navi
Array.pop(id: Array<T>): T
```

Removes and returns the last element from the given `id`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | the array from which to pop an element. |

**Returns:** <code>T</code>

---

### push {#push}

```navi
Array.push(id: Array<T>, value: T)
```

Appends the given `value` to the end of the array.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | the array to which the value will be appended. |
| `value` | <code>T</code> |  | The value to append to the array. |

---

### range {#range}

**Overloads**

```navi
Array.range(id: Array<int>): int
Array.range(id: Array<float>): float
```

Returns the range (difference between the maximum and minimum values) of the elements in the given array.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | the input array of integers. |

**Returns:** <code>int</code>

Returns the range (difference between the maximum and minimum values) of the elements in the given array.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | the input array of floats. |

**Returns:** <code>float</code>

---

### remove {#remove}

```navi
Array.remove(id: Array<T>, index: int): T
```

Removes the element at the specified `index` from the given array and returns the removed element.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | the array to modify. |
| `index` | <code>int</code> |  | The index of the element to remove. |

**Returns:** <code>T</code>

---

### reverse {#reverse}

```navi
Array.reverse(id: Array<T>)
```

Reverses the order of elements in the given array.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | the array to reverse. |

---

### set {#set}

```navi
Array.set(id: Array<T>, index: int, value: T)
```

Sets the element at the specified index in the array to the provided value.

If the index is positive, the function counts from the beginning of the array (0-based), and if the index is negative, it counts from the end of the array (-1 being the last element). For example, for an array that contains `[10, 20, 30]`, all of the following indexes are valid: `0`, `1`, `2`, `-1`, `-2`, `-3`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | the array to modify. |
| `index` | <code>int</code> |  | The index of the element (supports negative indexing). |
| `value` | <code>T</code> |  | The value to set at the specified index. |

---

### shift {#shift}

```navi
Array.shift(id: Array<T>): T
```

Removes and returns the first element from the given `id`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | the array from which to shift an element. |

**Returns:** <code>T</code>

---

### size {#size}

```navi
Array.size(id: Array<T>): int
```

Returns the size (number of elements) of the given `id`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | the array whose size is to be determined. |

**Returns:** <code>int</code>

---

### slice {#slice}

```navi
Array.slice(id: Array<T>, index_from: int = 0, index_to: int = na): Array<T>
```

Creates a new array that is a slice of the given `id`, starting from `index_from` to `index_to`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | the array to slice. |
| `index_from` | <code>int</code> | `0` | The starting index (inclusive). |
| `index_to` | <code>int</code> | `na` | The ending index (exclusive). When na, denotes end of array. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code>

---

### some {#some}

**Overloads**

```navi
Array.some(id: Array<bool>): bool
Array.some(id: Array<int>): bool
Array.some(id: Array<float>): bool
```

Checks if at least one element in the given boolean `id` is `true`.

It returns `true` if any element is `true`, and `false` otherwise.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;bool&gt;</code> |  | the array to check. |

**Returns:** <code>bool</code>

Checks if at least one element in the given array evaluates to `true`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | the array to check. |

**Returns:** <code>bool</code>

Checks if at least one element in the given array evaluates to `true`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | the array to check. |

**Returns:** <code>bool</code>

---

### sort {#sort}

**Overloads**

```navi
Array.sort(id: Array<int>, order: any = SortOrder.Ascending)
Array.sort(id: Array<float>, order: any = SortOrder.Ascending)
Array.sort(id: Array<String>, order: any = SortOrder.Ascending)
```

Sorts the elements of the given array in ascending or descending order.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | the array of integers to sort. |
| `order` | <code>any</code> | `SortOrder.Ascending` | The sort order. |

Sorts array elements.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | the array of floats to sort. |
| `order` | <code>any</code> | `SortOrder.Ascending` | The sort order. |

Sorts array elements.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a>&gt;</code> |  | the array of strings to sort. |
| `order` | <code>any</code> | `SortOrder.Ascending` | The sort order. |

---

### sort_indices {#sort_indices}

**Overloads**

```navi
Array.sort_indices(id: Array<int>, order: any = SortOrder.Ascending): Array<int>
Array.sort_indices(id: Array<float>, order: any = SortOrder.Ascending): Array<int>
Array.sort_indices(id: Array<String>, order: any = SortOrder.Ascending): Array<int>
```

Returns an array of indices that would sort the given `id`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | the array of integers to analyze. |
| `order` | <code>any</code> | `SortOrder.Ascending` | The sort order. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> — an array of original indices rearranged so that `result.get(i).get()` yields the i-th sorted element.

Returns sort indices.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | the array of floats to analyze. |
| `order` | <code>any</code> | `SortOrder.Ascending` | The sort order. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code>

Returns sort indices.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a>&gt;</code> |  | the array of strings to analyze. |
| `order` | <code>any</code> | `SortOrder.Ascending` | The sort order. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code>

---

### standardize {#standardize}

**Overloads**

```navi
Array.standardize(id: Array<float>): Array<float>
Array.standardize(id: Array<int>): Array<float>
```

Standardizes the elements of the given array by subtracting the mean and dividing by the standard deviation.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | the input array of floats. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> — a new array where each element is `(value - mean) / stdev` (z-scores).

Standardizes the elements of the given array by subtracting the mean and dividing by the standard deviation.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | the input array of integers. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> — a new array where each element is `(value - mean) / stdev` (z-scores).

---

### stdev {#stdev}

**Overloads**

```navi
Array.stdev(id: Array<float>, biased: any = true): float
Array.stdev(id: Array<int>, biased: any = true): float
```

Calculates the standard deviation of the elements in the given array.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | the input array of floats. |
| `biased` | <code>any</code> | `true` | If `true`, the function uses biased estimation (dividing by `n`); if `false`, it uses unbiased estimation (dividing by `n-1`). |

**Returns:** <code>float</code>

Calculates the standard deviation of the elements in the given array.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | the input array of integers. |
| `biased` | <code>any</code> | `true` | If `true`, the function uses biased estimation (dividing by `n`); if `false`, it uses unbiased estimation (dividing by `n-1`). |

**Returns:** <code>float</code>

---

### sum {#sum}

**Overloads**

```navi
Array.sum(id: Array<int>): int
Array.sum(id: Array<float>): float
```

Calculates the sum of the elements in the given `id`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | the input array of integers. |

**Returns:** <code>int</code>

Calculates the sum of the elements in the given array.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | the input array of floats. |

**Returns:** <code>float</code>

---

### unshift {#unshift}

```navi
Array.unshift(id: Array<T>, value: T)
```

Adds the specified `value` to the beginning of the given array.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | the array to modify. |
| `value` | <code>T</code> |  | The value to add to the beginning. |

---

### variance {#variance}

**Overloads**

```navi
Array.variance(id: Array<int>, biased: any = true): float
Array.variance(id: Array<float>, biased: any = true): float
```

Calculates the variance of the elements in the given `id`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | the input array of integers. |
| `biased` | <code>any</code> | `true` | If `true`, the function uses biased estimation (dividing by `n`); if `false`, it uses unbiased estimation (dividing by `n-1`). |

**Returns:** <code>float</code>

Calculates the variance of the elements in the given `id`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | the input array of floats. |
| `biased` | <code>any</code> | `true` | If `true`, the function uses biased estimation (dividing by `n`); if `false`, it uses unbiased estimation (dividing by `n-1`). |

**Returns:** <code>float</code>
