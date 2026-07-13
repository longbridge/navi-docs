---
title: "Array<T>"
---


# Array&lt;T&gt;

类型为 `T` 的有序、可索引的元素集合。

**种类:** object

## 静态方法

### from {#from}

```navi
Array.from(values: T): Array<T>
```

Creates a new array containing the provided `values`.

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `values` | <code>T</code> |  | Variable number of elements to include in the array. |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code>

---

### new {#new}

```navi
Array.new(size: int = 0, initial_value: T = na): const Array<T>
```

Creates a new empty array of type `T`.

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `size` | <code>int</code> | `0` | The initial size of the array. |
| `initial_value` | <code>T</code> | `na` | The initial value for all elements. |

**返回:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code>

---

### new_bool {#new_bool}

```navi
Array.new_bool(size: int = 0, initial_value: bool = na): Array<bool>
```

Creates a new array of `bool` values.

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `size` | <code>int</code> | `0` | Initial size of the array. Default is 0. |
| `initial_value` | <code>bool</code> | `na` | Initial value for all elements. Default is `na`. |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;bool&gt;</code>

---

### new_box {#new_box}

```navi
Array.new_box(size: int = 0, initial_value: Box = na): Array<Box>
```

Creates a new array of `Box` ids.

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `size` | <code>int</code> | `0` | Initial size of the array. Default is 0. |
| `initial_value` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Box">Box</a></code> | `na` | Initial value for all elements. Default is `na`. |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Box">Box</a>&gt;</code>

---

### new_color {#new_color}

```navi
Array.new_color(size: int = 0, initial_value: Color = na): Array<Color>
```

Creates a new array of `color` values.

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `size` | <code>int</code> | `0` | Initial size of the array. Default is 0. |
| `initial_value` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `na` | Initial value for all elements. Default is `na`. |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a>&gt;</code>

---

### new_float {#new_float}

```navi
Array.new_float(size: int = 0, initial_value: float = na): Array<float>
```

Creates a new array of `float` values.

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `size` | <code>int</code> | `0` | Initial size of the array. Default is 0. |
| `initial_value` | <code>float</code> | `na` | Initial value for all elements. Default is `na`. |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code>

---

### new_int {#new_int}

```navi
Array.new_int(size: int = 0, initial_value: int = na): Array<int>
```

Creates a new array of `int` values.

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `size` | <code>int</code> | `0` | Initial size of the array. Default is 0. |
| `initial_value` | <code>int</code> | `na` | Initial value for all elements. Default is `na`. |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code>

---

### new_label {#new_label}

```navi
Array.new_label(size: int = 0, initial_value: Label = na): Array<Label>
```

Creates a new array of `Label` ids.

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `size` | <code>int</code> | `0` | Initial size of the array. Default is 0. |
| `initial_value` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Label">Label</a></code> | `na` | Initial value for all elements. Default is `na`. |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Label">Label</a>&gt;</code>

---

### new_line {#new_line}

```navi
Array.new_line(size: int = 0, initial_value: Line = na): Array<Line>
```

Creates a new array of `Line` ids.

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `size` | <code>int</code> | `0` | Initial size of the array. Default is 0. |
| `initial_value` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Line">Line</a></code> | `na` | Initial value for all elements. Default is `na`. |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Line">Line</a>&gt;</code>

---

### new_line_fill {#new_line_fill}

```navi
Array.new_line_fill(
    size: int = 0,
    initial_value: LineFill = na
  ): Array<LineFill>
```

Creates a new array of `LineFill` ids.

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `size` | <code>int</code> | `0` | Initial size of the array. Default is 0. |
| `initial_value` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/LineFill">LineFill</a></code> | `na` | Initial value for all elements. Default is `na`. |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/LineFill">LineFill</a>&gt;</code>

---

### new_string {#new_string}

```navi
Array.new_string(size: int = 0, initial_value: String = na): Array<String>
```

Creates a new array of `String` values.

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `size` | <code>int</code> | `0` | Initial size of the array. Default is 0. |
| `initial_value` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | Initial value for all elements. Default is `na`. |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a>&gt;</code>

---

### new_table {#new_table}

```navi
Array.new_table(size: int = 0, initial_value: Table = na): Array<Table>
```

Creates a new array of `Table` ids.

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `size` | <code>int</code> | `0` | Initial size of the array. Default is 0. |
| `initial_value` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Table">Table</a></code> | `na` | Initial value for all elements. Default is `na`. |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Table">Table</a>&gt;</code>

## 方法

### abs {#abs}

**Overloads**

```navi
Array.abs(id: Array<int>): Array<int>
Array.abs(id: Array<float>): Array<float>
```

返回一个新数组，其中包含输入 `array` 的元素的绝对值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 整数元素的传入数组。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code>

返回一个新数组，其中包含输入 `array` 的元素的绝对值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 浮点元素的传入数组。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code>

---

### avg {#avg}

**Overloads**

```navi
Array.avg(id: series Array<int>): float
Array.avg(id: series Array<float>): float
```

返回输入 `array` 中元素的平均值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 整数元素的传入数组。 |

**返回:** <code>float</code>

返回平均值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 浮点元素的传入数组。 |

**返回:** <code>float</code>

---

### binary_search {#binary_search}

**Overloads**

```navi
Array.binary_search(id: Array<int>, value: int): int
Array.binary_search(id: Array<float>, value: float): int
```

对给定排序的 `array` 中指定的 `value` 执行二分搜索，如果找到则返回该值的索引，如果未找到则返回 -1。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 要搜索的已排序整数数组。 |
| `value` | <code>int</code> |  | 要搜索的值。 |

**返回:** <code>int</code> — 值的索引，如果未找到则为 -1。数组必须按升序排序。

在已排序的 `array` 中对指定的 `value` 执行二分搜索，如果找到则返回该值的索引，否则返回 -1。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 要搜索的已排序浮点数组。 |
| `value` | <code>float</code> |  | 要搜索的值。 |

**返回:** <code>int</code> — 该值的索引；如果未找到则返回 -1。数组必须按升序排序。

---

### binary_search_leftmost {#binary_search_leftmost}

**Overloads**

```navi
Array.binary_search_leftmost(id: Array<int>, value: int): int
Array.binary_search_leftmost(id: Array<float>, value: float): int
```

返回已排序 `array` 中匹配值的索引。

如果未找到该值，则返回该值插入位置左侧最近较小元素的索引。要搜索的数组必须按升序排序。


**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 要搜索的已排序整数数组。 |
| `value` | <code>int</code> |  | 要搜索的值。 |

**返回:** <code>int</code>

返回已排序 `array` 中匹配值的索引。

如果未找到该值，则返回该值插入位置左侧最近较小元素的索引。要搜索的数组必须按升序排序。


**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 要搜索的已排序浮点数组。 |
| `value` | <code>float</code> |  | 要搜索的值。 |

**返回:** <code>int</code>

---

### binary_search_rightmost {#binary_search_rightmost}

**Overloads**

```navi
Array.binary_search_rightmost(id: Array<int>, value: int): int
Array.binary_search_rightmost(id: Array<float>, value: float): int
```

如果找到该值，则返回该值的索引。

当未找到该值时，该函数将返回该值所在位置右侧元素的索引。数组必须按升序排序。


**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 要搜索的已排序整数数组。 |
| `value` | <code>int</code> |  | 要搜索的值。 |

**返回:** <code>int</code>

如果找到该值，则返回该值的索引。

当未找到该值时，该函数将返回该值所在位置右侧元素的索引。数组必须按升序排序。


**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 要搜索的已排序浮点数组。 |
| `value` | <code>float</code> |  | 要搜索的值。 |

**返回:** <code>int</code>

---

### clear {#clear}

```navi
Array.clear(id: series Array<T>)
```

清空给定 `array` 中的所有元素。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | 要清空的数组。 |

---

### concat {#concat}

```navi
Array.concat(id1: Array<T>, id2: Array<T>): Array<T>
```

拼接相同类型 `T` 的两个数组 `array1` 和 `array2` 并返回一个包含两个数组中所有元素的新数组。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | 要连接的第一个数组。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | 要连接的第二个数组。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code>

---

### copy {#copy}

```navi
Array.copy(id: Array<T>): Array<T>
```

创建给定 `array` 的拷贝并返回新数组。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | 要复制的数组。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code>

---

### covariance {#covariance}

**Overloads**

```navi
Array.covariance(id1: Array<float>, id2: Array<float>, biased: any = true): float
Array.covariance(id1: Array<int>, id2: Array<int>, biased: any = true): float
Array.covariance(id1: Array<int>, id2: Array<float>, biased: any = true): float
Array.covariance(id1: Array<float>, id2: Array<int>, biased: any = true): float
```

计算相同类型 `T` 的两个数组 `array1` 和 `array2` 之间的协方差。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 第一个传入数组。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 第二个传入数组。 |
| `biased` | <code>any</code> | `true` | 如果是 `true`，则函数使用有偏估计（除以 `n`）；如果是 `false`，则使用无偏估计（除以 `n-1`）。 |

**返回:** <code>float</code>

计算两个数组 `array1` 和 `array2` 的协方差。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 第一个传入数组。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 第二个传入数组。 |
| `biased` | <code>any</code> | `true` | 如果是 `true`，则函数使用有偏估计（除以 `n`）；如果是 `false`，则使用无偏估计（除以 `n-1`）。 |

**返回:** <code>float</code>

计算两个数组 `array1` 和 `array2` 的协方差。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 第一个传入数组。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 第二个传入数组。 |
| `biased` | <code>any</code> | `true` | 如果是 `true`，则函数使用有偏估计（除以 `n`）；如果是 `false`，则使用无偏估计（除以 `n-1`）。 |

**返回:** <code>float</code>

计算两个数组 `array1` 和 `array2` 的协方差。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 第一个传入数组。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 第二个传入数组。 |
| `biased` | <code>any</code> | `true` | 如果是 `true`，则函数使用有偏估计（除以 `n`）；如果是 `false`，则使用无偏估计（除以 `n-1`）。 |

**返回:** <code>float</code>

---

### every {#every}

**Overloads**

```navi
Array.every(id: Array<bool>): bool
Array.every(id: Array<int>): bool
Array.every(id: Array<float>): bool
```

检查给定布尔值 `array` 中的每个元素是否都是 `true`。如果所有元素都是 `true`，则返回 `true`，否则返回 `false`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;bool&gt;</code> |  | 要检查的数组。 |

**返回:** <code>bool</code>

检查给定 `array` 中的每个元素是否都求值为 `true`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 要检查的数组。 |

**返回:** <code>bool</code>

检查给定 `array` 中的每个元素是否都求值为 `true`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 要检查的数组。 |

**返回:** <code>bool</code>

---

### fill {#fill}

```navi
Array.fill(id: Array<T>, value: T, index_from: int = 0, index_to: int = na)
```

使用指定的 `value` 从 `index_from` 到 `index_to` 填充给定 `array` 的元素。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | 要填充的数组。 |
| `value` | <code>T</code> |  | 要填充的值。 |
| `index_from` | <code>int</code> | `0` | 起始索引（含）。 |
| `index_to` | <code>int</code> | `na` | 结束索引（不包括）。当 na 时，表示数组末尾。 |

---

### first {#first}

```navi
Array.first(id: Array<T>): T
```

返回给定 `array` 的第一个元素。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | 要从中检索第一个元素的数组。 |

**返回:** <code>T</code>

---

### get {#get}

```navi
Array.get(id: Array<T>, index: int): T
```

返回给定 `array` 中指定 `index` 处的元素。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | 要从中检索元素的数组。 |
| `index` | <code>int</code> |  | 要检索的元素的索引。 |

**返回:** <code>T</code>

---

### includes {#includes}

```navi
Array.includes(id: Array<T>, value: T): bool
```

检查给定的 `array` 是否包含指定的 `value`。如果在数组中找到该值，则返回 `true`，否则返回 `false`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | 要搜索的数组。 |
| `value` | <code>T</code> |  | 要搜索的值。 |

**返回:** <code>bool</code>

---

### indexof {#indexof}

```navi
Array.indexof(id: Array<T>, value: T): int
```

返回指定 `value` 在给定 `array` 中第一次出现的索引。如果没有找到该值，则返回-1。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | 要搜索的数组。 |
| `value` | <code>T</code> |  | 要搜索的值。 |

**返回:** <code>int</code> — 第一次出现的从零开始的索引，如果未找到则为 -1。

---

### insert {#insert}

```navi
Array.insert(id: Array<T>, index: int, value: T)
```

将指定的 `value` 插入到 `array` 中给定的 `index` 处，并将后续元素向右移动。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | 要修改的数组。 |
| `index` | <code>int</code> |  | 要插入值的索引。 |
| `value` | <code>T</code> |  | 要插入的值。 |

---

### join {#join}

**Overloads**

```navi
Array.join(id: Array<int>, separator: String): String
Array.join(id: Array<float>, separator: String): String
Array.join(id: Array<String>, separator: String): String
```

将给定 `array` 的元素连接成单个字符串，每个元素由指定的 `separator` 分隔。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 要连接的整数数组。 |
| `separator` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 放置在元素之间的分隔符字符串。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

将给定 `array` 的元素连接为一个字符串，每个元素之间使用指定的 `separator` 分隔。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 要加入的浮点数组。 |
| `separator` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 放置在元素之间的分隔符字符串。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

将给定 `array` 的元素连接为一个字符串，每个元素之间使用指定的 `separator` 分隔。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a>&gt;</code> |  | 要连接的字符串数组。 |
| `separator` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 放置在元素之间的分隔符字符串。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

---

### last {#last}

```navi
Array.last(id: Array<T>): T
```

返回给定 `array` 的最后一个元素。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | 要从中检索最后一个元素的数组。 |

**返回:** <code>T</code>

---

### lastindexof {#lastindexof}

```navi
Array.lastindexof(id: Array<T>, value: T): int
```

返回指定 `value` 在给定 `array` 中最后一次出现的索引。如果没有找到该值，则返回-1。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | 要搜索的数组。 |
| `value` | <code>T</code> |  | 要搜索的值。 |

**返回:** <code>int</code> — 最后一次出现的从零开始的索引，如果未找到则为 -1。

---

### max {#max}

**Overloads**

```navi
Array.max(id: Array<int>, nth: int = 0): int
Array.max(id: Array<float>, nth: int = 0): float
```

返回给定 `array` 中的 `nth` 最大值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 输入整数数组。 |
| `nth` | <code>int</code> | `0` | 返回哪个最大值（0 表示最大，1 表示第二大，等等）。 |

**返回:** <code>int</code>

返回给定 `array` 中的第 n 个最大值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 输入浮点数数组。 |
| `nth` | <code>int</code> | `0` | 返回哪个最大值（0 表示最大，1 表示第二大，等等）。 |

**返回:** <code>float</code>

---

### median {#median}

**Overloads**

```navi
Array.median(id: Array<int>): float
Array.median(id: Array<float>): float
```

返回给定 `array` 中元素的中值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 输入整数数组。 |

**返回:** <code>float</code>

返回中位数。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 输入浮点数数组。 |

**返回:** <code>float</code>

---

### min {#min}

**Overloads**

```navi
Array.min(id: Array<int>, nth: int = 0): int
Array.min(id: Array<float>, nth: int = 0): float
```

返回给定 `array` 中的 `nth` 最小值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 输入整数数组。 |
| `nth` | <code>int</code> | `0` | 返回哪个最小值（0 表示最小，1 表示第二小，等等）。 |

**返回:** <code>int</code>

返回给定 `array` 中的第 n 个最小值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 输入浮点数数组。 |
| `nth` | <code>int</code> | `0` | 返回哪个最小值（0 表示最小，1 表示第二小，等等）。 |

**返回:** <code>float</code>

---

### mode {#mode}

**Overloads**

```navi
Array.mode(id: Array<int>): int
Array.mode(id: Array<float>): float
```

该函数返回数组元素的众数。如果有多个值具有相同的频率，则返回最小值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 输入整数数组。 |

**返回:** <code>int</code> — 最常出现的值，或相关值中最小的值。

返回数组元素的众数。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 输入浮点数数组。 |

**返回:** <code>float</code> — The most frequently occurring value, or the smallest among tied values.

---

### percent_rank {#percent_rank}

**Overloads**

```navi
Array.percent_rank(id: Array<int>, index: int): float
Array.percent_rank(id: Array<float>, index: int): float
```

返回给定 `array` 中指定 `index` 处元素的百分位数排名。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 输入整数数组。 |
| `index` | <code>int</code> |  | 元素的索引。 |

**返回:** <code>float</code> — 0 到 100 之间的值，表示小于或等于 `index` 处的元素的百分比。

返回给定 `array` 中指定 `index` 处元素的百分位数排名.

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 输入浮点数数组。 |
| `index` | <code>int</code> |  | 元素的索引。 |

**返回:** <code>float</code> — A value between 0 and 100 indicating the percentage of elements that are less than or equal to the element at `index`.

---

### percentile_linear_interpolation {#percentile_linear_interpolation}

**Overloads**

```navi
Array.percentile_linear_interpolation(id: Array<int>, percentage: float): float
Array.percentile_linear_interpolation(id: Array<float>, percentage: float): float
```

使用线性插值从给定 `array` 返回指定 `percentile` 处的值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 输入整数数组。 |
| `percentage` | <code>float</code> |  | 百分位值 (0-100)。 |

**返回:** <code>float</code>

使用线性插值返回百分位数的值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 输入浮点数数组。 |
| `percentage` | <code>float</code> |  | 百分位值 (0-100)。 |

**返回:** <code>float</code>

---

### percentile_nearest_rank {#percentile_nearest_rank}

**Overloads**

```navi
Array.percentile_nearest_rank(id: Array<int>, percentage: float): float
Array.percentile_nearest_rank(id: Array<float>, percentage: float): float
```

使用最近排序方法从给定的 `array` 返回指定 `percentile` 处的值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 输入整数数组。 |
| `percentage` | <code>float</code> |  | 百分位值 (0-100)。 |

**返回:** <code>float</code>

返回具有最接近排名的百分位值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 输入浮点数数组。 |
| `percentage` | <code>float</code> |  | 百分位值 (0-100)。 |

**返回:** <code>float</code>

---

### pop {#pop}

```navi
Array.pop(id: Array<T>): T
```

删除并返回给定 `array` 中的最后一个元素。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | 从中弹出元素的数组。 |

**返回:** <code>T</code>

---

### push {#push}

```navi
Array.push(id: Array<T>, value: T)
```

将给定的 `value` 附加到 `array` 的末尾。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | 将附加值的数组。 |
| `value` | <code>T</code> |  | 要附加到数组的值。 |

---

### range {#range}

**Overloads**

```navi
Array.range(id: Array<int>): int
Array.range(id: Array<float>): float
```

返回给定 `array` 中元素的范围（最大值和最小值之间的差）。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 输入整数数组。 |

**返回:** <code>int</code>

返回给定 `array` 中元素的范围（最大值与最小值之差）。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 输入浮点数数组。 |

**返回:** <code>float</code>

---

### remove {#remove}

```navi
Array.remove(id: Array<T>, index: int): T
```

从给定的 `array` 中删除指定 `index` 处的元素并返回删除的元素。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | 要修改的数组。 |
| `index` | <code>int</code> |  | 要删除的元素的索引。 |

**返回:** <code>T</code>

---

### reverse {#reverse}

```navi
Array.reverse(id: Array<T>)
```

反转给定 `array` 中元素的顺序。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | 要反转的数组。 |

---

### set {#set}

```navi
Array.set(id: Array<T>, index: int, value: T)
```

将数组中指定索引处的元素设置为提供的值。如果索引为正，则该函数从数组的开头开始计数（从 0 开始），如果索引为负，则从数组的末尾开始计数（-1 是最后一个元素）。例如，对于包含 `[10, 20, 30]` 的数组，以下所有索引均有效：`0`、`1`、`2`、`-1`、`-2`、`-3`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | 要修改的数组。 |
| `index` | <code>int</code> |  | 元素的索引（支持负索引）。 |
| `value` | <code>T</code> |  | 要在指定索引处设置的值。 |

---

### shift {#shift}

```navi
Array.shift(id: Array<T>): T
```

删除并返回给定 `array` 中的第一个元素。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | 要从中移动元素的数组。 |

**返回:** <code>T</code>

---

### size {#size}

```navi
Array.size(id: Array<T>): int
```

返回给定 `array` 的大小（元素数量）。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | 待确定大小的数组。 |

**返回:** <code>int</code>

---

### slice {#slice}

```navi
Array.slice(id: Array<T>, index_from: int = 0, index_to: int = na): Array<T>
```

创建一个新数组，该数组是给定 `array` 的一部分，从 `index_from` 到 `index_to`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | 要切片的数组。 |
| `index_from` | <code>int</code> | `0` | 起始索引（含）。 |
| `index_to` | <code>int</code> | `na` | 结束索引（不包括）。当 na 时，表示数组末尾。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code>

---

### some {#some}

**Overloads**

```navi
Array.some(id: Array<bool>): bool
Array.some(id: Array<int>): bool
Array.some(id: Array<float>): bool
```

检查给定布尔值 `array` 中是否至少有一个元素是 `true`。如果任何元素是 `true`，则返回 `true`，否则返回 `false`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;bool&gt;</code> |  | 要检查的数组。 |

**返回:** <code>bool</code>

检查给定 `array` 中是否至少有一个元素求值为 `true`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 要检查的数组。 |

**返回:** <code>bool</code>

检查给定 `array` 中是否至少有一个元素求值为 `true`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 要检查的数组。 |

**返回:** <code>bool</code>

---

### sort {#sort}

**Overloads**

```navi
Array.sort(id: Array<int>, order: any = SortOrder.Ascending)
Array.sort(id: Array<float>, order: any = SortOrder.Ascending)
Array.sort(id: Array<String>, order: any = SortOrder.Ascending)
```

按升序或降序对给定 `array` 的元素进行排序。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 要排序的整数数组。 |
| `order` | <code>any</code> | `SortOrder.Ascending` | 排序顺序。 |

对数组元素进行排序。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 要排序的浮点数组。 |
| `order` | <code>any</code> | `SortOrder.Ascending` | 排序顺序。 |

对数组元素进行排序。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a>&gt;</code> |  | 要排序的字符串数组。 |
| `order` | <code>any</code> | `SortOrder.Ascending` | 排序顺序。 |

---

### sort_indices {#sort_indices}

**Overloads**

```navi
Array.sort_indices(id: Array<int>, order: any = SortOrder.Ascending): Array<int>
Array.sort_indices(id: Array<float>, order: any = SortOrder.Ascending): Array<int>
Array.sort_indices(id: Array<String>, order: any = SortOrder.Ascending): Array<int>
```

返回对给定 `array` 进行排序的索引数组。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 要分析的整数数组。 |
| `order` | <code>any</code> | `SortOrder.Ascending` | 排序顺序。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> — 重新排列原始索引的数组，以便 `array.get(result.get(i))` 产生第 i 个排序元素。

返回排序索引。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 要分析的浮点数数组。 |
| `order` | <code>any</code> | `SortOrder.Ascending` | 排序顺序。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code>

返回排序索引。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a>&gt;</code> |  | 要分析的字符串数组。 |
| `order` | <code>any</code> | `SortOrder.Ascending` | 排序顺序。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code>

---

### standardize {#standardize}

**Overloads**

```navi
Array.standardize(id: Array<float>): Array<float>
Array.standardize(id: Array<int>): Array<float>
```

通过减去平均值并除以标准差来标准化给定 `array` 的元素。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 输入浮点数数组。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> — 一个新数组，其中每个元素都是 `(value - mean) / stdev` （z 分数）。

通过减去均值并除以标准差来标准化给定 `array` 的元素。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 输入整数数组。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> — 返回一个新数组，其中每个元素都是 `(value - mean) / stdev`（z 分数）。

---

### stdev {#stdev}

**Overloads**

```navi
Array.stdev(id: Array<float>, biased: any = true): float
Array.stdev(id: Array<int>, biased: any = true): float
```

计算给定 `array` 中元素的标准差。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 输入浮点数数组。 |
| `biased` | <code>any</code> | `true` | 如果是 `true`，则函数使用有偏估计（除以 `n`）；如果是 `false`，则使用无偏估计（除以 `n-1`）。 |

**返回:** <code>float</code>

计算给定 `array` 元素的标准差。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 输入整数数组。 |
| `biased` | <code>any</code> | `true` | 如果是 `true`，则函数使用有偏估计（除以 `n`）；如果是 `false`，则使用无偏估计（除以 `n-1`）。 |

**返回:** <code>float</code>

---

### sum {#sum}

**Overloads**

```navi
Array.sum(id: Array<int>): int
Array.sum(id: Array<float>): float
```

计算给定 `array` 中元素的总和。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 输入整数数组。 |

**返回:** <code>int</code>

计算给定 `array` 中元素的总和。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 输入浮点数数组。 |

**返回:** <code>float</code>

---

### unshift {#unshift}

```navi
Array.unshift(id: Array<T>, value: T)
```

将指定的 `value` 添加到给定 `array` 的开头。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | 要修改的数组。 |
| `value` | <code>T</code> |  | 要添加到开头的值。 |

---

### variance {#variance}

**Overloads**

```navi
Array.variance(id: Array<int>, biased: any = true): float
Array.variance(id: Array<float>, biased: any = true): float
```

计算给定 `array` 中元素的方差。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 输入整数数组。 |
| `biased` | <code>any</code> | `true` | 如果是 `true`，则函数使用有偏估计（除以 `n`）；如果是 `false`，则使用无偏估计（除以 `n-1`）。 |

**返回:** <code>float</code>

计算给定 `array` 元素的方差。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 输入浮点数数组。 |
| `biased` | <code>any</code> | `true` | 如果是 `true`，则函数使用有偏估计（除以 `n`）；如果是 `false`，则使用无偏估计（除以 `n-1`）。 |

**返回:** <code>float</code>
