---
title: "Array<T>"
---


# Array&lt;T&gt;

類型為 `T` 的有序、可索引的元素集合。

**種類:** object

## 靜態方法

### from {#from}

```navi
Array.from(values: T): Array<T>
```

Creates a new array containing the provided `values`.

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `values` | <code>T</code> |  | Variable number of elements to include in the array. |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code>

---

### new {#new}

```navi
Array.new(size: int = 0, initial_value: T = na): const Array<T>
```

Creates a new empty array of type `T`.

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `size` | <code>int</code> | `0` | The initial size of the array. |
| `initial_value` | <code>T</code> | `na` | The initial value for all elements. |

**返回:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code>

---

### new_bool {#new_bool}

```navi
Array.new_bool(size: int = 0, initial_value: bool = na): Array<bool>
```

Creates a new array of `bool` values.

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `size` | <code>int</code> | `0` | Initial size of the array. Default is 0. |
| `initial_value` | <code>bool</code> | `na` | Initial value for all elements. Default is `na`. |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;bool&gt;</code>

---

### new_box {#new_box}

```navi
Array.new_box(size: int = 0, initial_value: Box = na): Array<Box>
```

Creates a new array of `Box` ids.

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `size` | <code>int</code> | `0` | Initial size of the array. Default is 0. |
| `initial_value` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Box">Box</a></code> | `na` | Initial value for all elements. Default is `na`. |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Box">Box</a>&gt;</code>

---

### new_color {#new_color}

```navi
Array.new_color(size: int = 0, initial_value: Color = na): Array<Color>
```

Creates a new array of `color` values.

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `size` | <code>int</code> | `0` | Initial size of the array. Default is 0. |
| `initial_value` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `na` | Initial value for all elements. Default is `na`. |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a>&gt;</code>

---

### new_float {#new_float}

```navi
Array.new_float(size: int = 0, initial_value: float = na): Array<float>
```

Creates a new array of `float` values.

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `size` | <code>int</code> | `0` | Initial size of the array. Default is 0. |
| `initial_value` | <code>float</code> | `na` | Initial value for all elements. Default is `na`. |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code>

---

### new_int {#new_int}

```navi
Array.new_int(size: int = 0, initial_value: int = na): Array<int>
```

Creates a new array of `int` values.

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `size` | <code>int</code> | `0` | Initial size of the array. Default is 0. |
| `initial_value` | <code>int</code> | `na` | Initial value for all elements. Default is `na`. |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code>

---

### new_label {#new_label}

```navi
Array.new_label(size: int = 0, initial_value: Label = na): Array<Label>
```

Creates a new array of `Label` ids.

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `size` | <code>int</code> | `0` | Initial size of the array. Default is 0. |
| `initial_value` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Label">Label</a></code> | `na` | Initial value for all elements. Default is `na`. |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Label">Label</a>&gt;</code>

---

### new_line {#new_line}

```navi
Array.new_line(size: int = 0, initial_value: Line = na): Array<Line>
```

Creates a new array of `Line` ids.

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `size` | <code>int</code> | `0` | Initial size of the array. Default is 0. |
| `initial_value` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Line">Line</a></code> | `na` | Initial value for all elements. Default is `na`. |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Line">Line</a>&gt;</code>

---

### new_line_fill {#new_line_fill}

```navi
Array.new_line_fill(
    size: int = 0,
    initial_value: LineFill = na
  ): Array<LineFill>
```

Creates a new array of `LineFill` ids.

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `size` | <code>int</code> | `0` | Initial size of the array. Default is 0. |
| `initial_value` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/LineFill">LineFill</a></code> | `na` | Initial value for all elements. Default is `na`. |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/LineFill">LineFill</a>&gt;</code>

---

### new_string {#new_string}

```navi
Array.new_string(size: int = 0, initial_value: String = na): Array<String>
```

Creates a new array of `String` values.

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `size` | <code>int</code> | `0` | Initial size of the array. Default is 0. |
| `initial_value` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | Initial value for all elements. Default is `na`. |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a>&gt;</code>

---

### new_table {#new_table}

```navi
Array.new_table(size: int = 0, initial_value: Table = na): Array<Table>
```

Creates a new array of `Table` ids.

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `size` | <code>int</code> | `0` | Initial size of the array. Default is 0. |
| `initial_value` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Table">Table</a></code> | `na` | Initial value for all elements. Default is `na`. |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Table">Table</a>&gt;</code>

## 方法

### abs {#abs}

**Overloads**

```navi
Array.abs(id: Array<int>): Array<int>
Array.abs(id: Array<float>): Array<float>
```

傳回一個新陣列，其中包含傳入 `array` 的元素的絕對值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 整數元素的輸入陣列。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code>

傳回一個新陣列，其中包含傳入 `array` 的元素的絕對值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 浮點元素的輸入陣列。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code>

---

### avg {#avg}

**Overloads**

```navi
Array.avg(id: series Array<int>): float
Array.avg(id: series Array<float>): float
```

傳回傳入 `array` 中元素的平均值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 整數元素的輸入陣列。 |

**返回:** <code>float</code>

傳回平均值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 浮點元素的輸入陣列。 |

**返回:** <code>float</code>

---

### binary_search {#binary_search}

**Overloads**

```navi
Array.binary_search(id: Array<int>, value: int): int
Array.binary_search(id: Array<float>, value: float): int
```

對給定排序的 `array` 中指定的 `value` 執行二分搜索，如果找到則傳回該值的索引，如果未找到則傳回 -1。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 要搜索的已排序整數陣列。 |
| `value` | <code>int</code> |  | 要搜索的值。 |

**返回:** <code>int</code> — 值的索引，如果未找到則為 -1。陣列必須按升序排序。

在已排序的 `array` 中對指定的 `value` 執行二分搜尋，如果找到則傳回該值的索引，否則傳回 -1。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 要搜索的已排序浮點陣列。 |
| `value` | <code>float</code> |  | 要搜索的值。 |

**返回:** <code>int</code> — 該值的索引；如果未找到則傳回 -1。陣列必須按升序排序。

---

### binary_search_leftmost {#binary_search_leftmost}

**Overloads**

```navi
Array.binary_search_leftmost(id: Array<int>, value: int): int
Array.binary_search_leftmost(id: Array<float>, value: float): int
```

傳回已排序 `array` 中匹配值的索引。

如果未找到該值，則傳回該值插入位置左側最近較小元素的索引。要搜尋的陣列必須按升序排序。


**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 要搜索的已排序整數陣列。 |
| `value` | <code>int</code> |  | 要搜索的值。 |

**返回:** <code>int</code>

傳回已排序 `array` 中匹配值的索引。

如果未找到該值，則傳回該值插入位置左側最近較小元素的索引。要搜尋的陣列必須按升序排序。


**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 要搜索的已排序浮點陣列。 |
| `value` | <code>float</code> |  | 要搜索的值。 |

**返回:** <code>int</code>

---

### binary_search_rightmost {#binary_search_rightmost}

**Overloads**

```navi
Array.binary_search_rightmost(id: Array<int>, value: int): int
Array.binary_search_rightmost(id: Array<float>, value: float): int
```

如果找到該值，則傳回該值的索引。

當未找到該值時，該函數將傳回該值所在位置右側元素的索引。陣列必須按升序排序。


**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 要搜索的已排序整數陣列。 |
| `value` | <code>int</code> |  | 要搜索的值。 |

**返回:** <code>int</code>

如果找到該值，則傳回該值的索引。

當未找到該值時，該函數將傳回該值所在位置右側元素的索引。陣列必須按升序排序。


**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 要搜索的已排序浮點陣列。 |
| `value` | <code>float</code> |  | 要搜索的值。 |

**返回:** <code>int</code>

---

### clear {#clear}

```navi
Array.clear(id: series Array<T>)
```

清空給定 `array` 中的所有元素。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | 要清空的陣列。 |

---

### concat {#concat}

```navi
Array.concat(id1: Array<T>, id2: Array<T>): Array<T>
```

連接相同類型 `T` 的兩個陣列 `array1` 和 `array2` 並傳回一個包含兩個陣列中所有元素的新陣列。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | 要連接的第一個陣列。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | 要連接的第二個陣列。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code>

---

### copy {#copy}

```navi
Array.copy(id: Array<T>): Array<T>
```

創建給定 `array` 的複本並傳回新陣列。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | 要複製的陣列。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code>

---

### covariance {#covariance}

**Overloads**

```navi
Array.covariance(id1: Array<float>, id2: Array<float>, biased: any = true): float
Array.covariance(id1: Array<int>, id2: Array<int>, biased: any = true): float
Array.covariance(id1: Array<int>, id2: Array<float>, biased: any = true): float
Array.covariance(id1: Array<float>, id2: Array<int>, biased: any = true): float
```

計算相同類型 `T` 的兩個陣列 `array1` 和 `array2` 之間的協方差。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 第一個輸入陣列。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 第二個輸入陣列。 |
| `biased` | <code>any</code> | `true` | 如果是 `true`，則函數使用有偏估計（除以 `n`）；如果是 `false`，則使用無偏估計（除以 `n-1`）。 |

**返回:** <code>float</code>

計算兩個陣列 `array1` 和 `array2` 的協方差。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 第一個輸入陣列。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 第二個輸入陣列。 |
| `biased` | <code>any</code> | `true` | 如果是 `true`，則函數使用有偏估計（除以 `n`）；如果是 `false`，則使用無偏估計（除以 `n-1`）。 |

**返回:** <code>float</code>

計算兩個陣列 `array1` 和 `array2` 的協方差。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 第一個輸入陣列。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 第二個輸入陣列。 |
| `biased` | <code>any</code> | `true` | 如果是 `true`，則函數使用有偏估計（除以 `n`）；如果是 `false`，則使用無偏估計（除以 `n-1`）。 |

**返回:** <code>float</code>

計算兩個陣列 `array1` 和 `array2` 的協方差。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id1` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 第一個輸入陣列。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 第二個輸入陣列。 |
| `biased` | <code>any</code> | `true` | 如果是 `true`，則函數使用有偏估計（除以 `n`）；如果是 `false`，則使用無偏估計（除以 `n-1`）。 |

**返回:** <code>float</code>

---

### every {#every}

**Overloads**

```navi
Array.every(id: Array<bool>): bool
Array.every(id: Array<int>): bool
Array.every(id: Array<float>): bool
```

檢查給定布爾值 `array` 中的每個元素是否都是 `true`。如果所有元素都是 `true`，則傳回 `true`，否則傳回 `false`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;bool&gt;</code> |  | 要檢查的陣列。 |

**返回:** <code>bool</code>

檢查給定 `array` 中的每個元素是否都評估為 `true`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 要檢查的陣列。 |

**返回:** <code>bool</code>

檢查給定 `array` 中的每個元素是否都評估為 `true`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 要檢查的陣列。 |

**返回:** <code>bool</code>

---

### fill {#fill}

```navi
Array.fill(id: Array<T>, value: T, index_from: int = 0, index_to: int = na)
```

使用指定的 `value` 從 `index_from` 到 `index_to` 填充給定 `array` 的元素。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | 要填充的陣列。 |
| `value` | <code>T</code> |  | 要填充的值。 |
| `index_from` | <code>int</code> | `0` | 起始索引（含）。 |
| `index_to` | <code>int</code> | `na` | 結束索引（不包括）。當 na 時，表示陣列末尾。 |

---

### first {#first}

```navi
Array.first(id: Array<T>): T
```

傳回給定 `array` 的第一個元素。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | 要從中檢索第一個元素的陣列。 |

**返回:** <code>T</code>

---

### get {#get}

```navi
Array.get(id: Array<T>, index: int): T
```

傳回給定 `array` 中指定 `index` 處的元素。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | 要從中檢索元素的陣列。 |
| `index` | <code>int</code> |  | 要檢索的元素的索引。 |

**返回:** <code>T</code>

---

### includes {#includes}

```navi
Array.includes(id: Array<T>, value: T): bool
```

檢查給定的 `array` 是否包含指定的 `value`。如果在陣列中找到該值，則傳回 `true`，否則傳回 `false`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | 要搜索的陣列。 |
| `value` | <code>T</code> |  | 要搜索的值。 |

**返回:** <code>bool</code>

---

### indexof {#indexof}

```navi
Array.indexof(id: Array<T>, value: T): int
```

傳回指定 `value` 在給定 `array` 中第一次出現的索引。如果沒有找到該值，則傳回-1。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | 要搜索的陣列。 |
| `value` | <code>T</code> |  | 要搜索的值。 |

**返回:** <code>int</code> — 第一次出現的從零開始的索引，如果未找到則為 -1。

---

### insert {#insert}

```navi
Array.insert(id: Array<T>, index: int, value: T)
```

將指定的 `value` 插入到 `array` 中給定的 `index` 處，並將後續元素向右移動。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | 要修改的陣列。 |
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

將給定 `array` 的元素連接成單個字符串，每個元素由指定的 `separator` 分隔。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 要連接的整數陣列。 |
| `separator` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 放置在元素之間的分隔符字符串。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

將給定 `array` 的元素連接為一個字串，每個元素之間使用指定的 `separator` 分隔。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 要加入的浮點陣列。 |
| `separator` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 放置在元素之間的分隔符字符串。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

將給定 `array` 的元素連接為一個字串，每個元素之間使用指定的 `separator` 分隔。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a>&gt;</code> |  | 要連接的字符串陣列。 |
| `separator` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 放置在元素之間的分隔符字符串。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

---

### last {#last}

```navi
Array.last(id: Array<T>): T
```

傳回給定 `array` 的最後一個元素。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | 要從中檢索最後一個元素的陣列。 |

**返回:** <code>T</code>

---

### lastindexof {#lastindexof}

```navi
Array.lastindexof(id: Array<T>, value: T): int
```

傳回指定 `value` 在給定 `array` 中最後一次出現的索引。如果沒有找到該值，則傳回-1。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | 要搜索的陣列。 |
| `value` | <code>T</code> |  | 要搜索的值。 |

**返回:** <code>int</code> — 最後一次出現的從零開始的索引，如果未找到則為 -1。

---

### max {#max}

**Overloads**

```navi
Array.max(id: Array<int>, nth: int = 0): int
Array.max(id: Array<float>, nth: int = 0): float
```

傳回給定 `array` 中的 `nth` 最大值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 輸入整數陣列。 |
| `nth` | <code>int</code> | `0` | 傳回哪個最大值（0 表示最大，1 表示第二大，等等）。 |

**返回:** <code>int</code>

傳回給定 `array` 中的第 n 個最大值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 輸入浮點數陣列。 |
| `nth` | <code>int</code> | `0` | 傳回哪個最大值（0 表示最大，1 表示第二大，等等）。 |

**返回:** <code>float</code>

---

### median {#median}

**Overloads**

```navi
Array.median(id: Array<int>): float
Array.median(id: Array<float>): float
```

傳回給定 `array` 中元素的中值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 輸入整數陣列。 |

**返回:** <code>float</code>

傳回中位數。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 輸入浮點數陣列。 |

**返回:** <code>float</code>

---

### min {#min}

**Overloads**

```navi
Array.min(id: Array<int>, nth: int = 0): int
Array.min(id: Array<float>, nth: int = 0): float
```

傳回給定 `array` 中的 `nth` 最小值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 輸入整數陣列。 |
| `nth` | <code>int</code> | `0` | 傳回哪個最小值（0 表示最小，1 表示第二小，等等）。 |

**返回:** <code>int</code>

傳回給定 `array` 中的第 n 個最小值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 輸入浮點數陣列。 |
| `nth` | <code>int</code> | `0` | 傳回哪個最小值（0 表示最小，1 表示第二小，等等）。 |

**返回:** <code>float</code>

---

### mode {#mode}

**Overloads**

```navi
Array.mode(id: Array<int>): int
Array.mode(id: Array<float>): float
```

該函數傳回陣列元素的眾數。如果有多個值具有相同的頻率，則傳回最小值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 輸入整數陣列。 |

**返回:** <code>int</code> — 最常出現的值，或相關值中最小的值。

傳回陣列元素的眾數。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 輸入浮點數陣列。 |

**返回:** <code>float</code> — The most frequently occurring value, or the smallest among tied values.

---

### percent_rank {#percent_rank}

**Overloads**

```navi
Array.percent_rank(id: Array<int>, index: int): float
Array.percent_rank(id: Array<float>, index: int): float
```

傳回給定 `array` 中指定 `index` 處元素的百分位數排名。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 輸入整數陣列。 |
| `index` | <code>int</code> |  | 元素的索引。 |

**返回:** <code>float</code> — 0 到 100 之間的值，表示小於或等於 `index` 處的元素的百分比。

傳回給定 `array` 中指定 `index` 處元素的百分位數排名.

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 輸入浮點數陣列。 |
| `index` | <code>int</code> |  | 元素的索引。 |

**返回:** <code>float</code> — A value between 0 and 100 indicating the percentage of elements that are less than or equal to the element at `index`.

---

### percentile_linear_interpolation {#percentile_linear_interpolation}

**Overloads**

```navi
Array.percentile_linear_interpolation(id: Array<int>, percentage: float): float
Array.percentile_linear_interpolation(id: Array<float>, percentage: float): float
```

使用線性插值從給定 `array` 傳回指定 `percentile` 處的值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 輸入整數陣列。 |
| `percentage` | <code>float</code> |  | 百分位值 (0-100)。 |

**返回:** <code>float</code>

使用線性插值傳回百分位數的值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 輸入浮點數陣列。 |
| `percentage` | <code>float</code> |  | 百分位值 (0-100)。 |

**返回:** <code>float</code>

---

### percentile_nearest_rank {#percentile_nearest_rank}

**Overloads**

```navi
Array.percentile_nearest_rank(id: Array<int>, percentage: float): float
Array.percentile_nearest_rank(id: Array<float>, percentage: float): float
```

使用最近排序方法從給定的 `array` 傳回指定 `percentile` 處的值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 輸入整數陣列。 |
| `percentage` | <code>float</code> |  | 百分位值 (0-100)。 |

**返回:** <code>float</code>

傳回具有最接近排名的百分位值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 輸入浮點數陣列。 |
| `percentage` | <code>float</code> |  | 百分位值 (0-100)。 |

**返回:** <code>float</code>

---

### pop {#pop}

```navi
Array.pop(id: Array<T>): T
```

刪除並傳回給定 `array` 中的最後一個元素。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | 從中彈出元素的陣列。 |

**返回:** <code>T</code>

---

### push {#push}

```navi
Array.push(id: Array<T>, value: T)
```

將給定的 `value` 附加到 `array` 的末尾。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | 將附加值的陣列。 |
| `value` | <code>T</code> |  | 要附加到陣列的值。 |

---

### range {#range}

**Overloads**

```navi
Array.range(id: Array<int>): int
Array.range(id: Array<float>): float
```

傳回給定 `array` 中元素的範圍（最大值和最小值之間的差）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 輸入整數陣列。 |

**返回:** <code>int</code>

傳回給定 `array` 中元素的範圍（最大值與最小值之差）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 輸入浮點數陣列。 |

**返回:** <code>float</code>

---

### remove {#remove}

```navi
Array.remove(id: Array<T>, index: int): T
```

從給定的 `array` 中刪除指定 `index` 處的元素並傳回刪除的元素。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | 要修改的陣列。 |
| `index` | <code>int</code> |  | 要刪除的元素的索引。 |

**返回:** <code>T</code>

---

### reverse {#reverse}

```navi
Array.reverse(id: Array<T>)
```

反轉給定 `array` 中元素的順序。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | 要反轉的陣列。 |

---

### set {#set}

```navi
Array.set(id: Array<T>, index: int, value: T)
```

將陣列中指定索引處的元素設定為提供的值。如果索引為正，則該函數從陣列的開頭開始計數（從 0 開始），如果索引為負，則從陣列的末尾開始計數（-1 是最後一個元素）。例如，對於包含 `[10, 20, 30]` 的陣列，以下所有索引均有效：`0`、`1`、`2`、`-1`、`-2`、`-3`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | 要修改的陣列。 |
| `index` | <code>int</code> |  | 元素的索引（支持負索引）。 |
| `value` | <code>T</code> |  | 要在指定索引處設定的值。 |

---

### shift {#shift}

```navi
Array.shift(id: Array<T>): T
```

刪除並傳回給定 `array` 中的第一個元素。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | 要從中移動元素的陣列。 |

**返回:** <code>T</code>

---

### size {#size}

```navi
Array.size(id: Array<T>): int
```

傳回給定 `array` 的大小（元素數量）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | 待確定大小的陣列。 |

**返回:** <code>int</code>

---

### slice {#slice}

```navi
Array.slice(id: Array<T>, index_from: int = 0, index_to: int = na): Array<T>
```

創建一個新陣列，該陣列是給定 `array` 的一部分，從 `index_from` 到 `index_to`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | 要切片的陣列。 |
| `index_from` | <code>int</code> | `0` | 起始索引（含）。 |
| `index_to` | <code>int</code> | `na` | 結束索引（不包括）。當 na 時，表示陣列末尾。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code>

---

### some {#some}

**Overloads**

```navi
Array.some(id: Array<bool>): bool
Array.some(id: Array<int>): bool
Array.some(id: Array<float>): bool
```

檢查給定布爾值 `array` 中是否至少有一個元素是 `true`。如果任何元素是 `true`，則傳回 `true`，否則傳回 `false`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;bool&gt;</code> |  | 要檢查的陣列。 |

**返回:** <code>bool</code>

檢查給定 `array` 中是否至少有一個元素評估為 `true`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 要檢查的陣列。 |

**返回:** <code>bool</code>

檢查給定 `array` 中是否至少有一個元素評估為 `true`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 要檢查的陣列。 |

**返回:** <code>bool</code>

---

### sort {#sort}

**Overloads**

```navi
Array.sort(id: Array<int>, order: any = SortOrder.Ascending)
Array.sort(id: Array<float>, order: any = SortOrder.Ascending)
Array.sort(id: Array<String>, order: any = SortOrder.Ascending)
```

按升序或降序對給定 `array` 的元素進行排序。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 要排序的整數陣列。 |
| `order` | <code>any</code> | `SortOrder.Ascending` | 排序順序。 |

對陣列元素進行排序。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 要排序的浮點陣列。 |
| `order` | <code>any</code> | `SortOrder.Ascending` | 排序順序。 |

對陣列元素進行排序。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a>&gt;</code> |  | 要排序的字符串陣列。 |
| `order` | <code>any</code> | `SortOrder.Ascending` | 排序順序。 |

---

### sort_indices {#sort_indices}

**Overloads**

```navi
Array.sort_indices(id: Array<int>, order: any = SortOrder.Ascending): Array<int>
Array.sort_indices(id: Array<float>, order: any = SortOrder.Ascending): Array<int>
Array.sort_indices(id: Array<String>, order: any = SortOrder.Ascending): Array<int>
```

傳回對給定 `array` 進行排序的索引陣列。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 要分析的整數陣列。 |
| `order` | <code>any</code> | `SortOrder.Ascending` | 排序順序。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> — 重新排列原始索引的陣列，以便 `array.get(result.get(i))` 產生第 i 個排序元素。

傳回排序索引。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 要分析的浮點數陣列。 |
| `order` | <code>any</code> | `SortOrder.Ascending` | 排序順序。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code>

傳回排序索引。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a>&gt;</code> |  | 要分析的字符串陣列。 |
| `order` | <code>any</code> | `SortOrder.Ascending` | 排序順序。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code>

---

### standardize {#standardize}

**Overloads**

```navi
Array.standardize(id: Array<float>): Array<float>
Array.standardize(id: Array<int>): Array<float>
```

通過減去平均值併除以標準差來標準化給定 `array` 的元素。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 輸入浮點數陣列。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> — 一個新陣列，其中每個元素都是 `(value - mean) / stdev` （z 分數）。

透過減去平均值並除以標準差來標準化給定 `array` 的元素。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 輸入整數陣列。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> — 傳回一個新陣列，其中每個元素都是 `(value - mean) / stdev`（z 分數）。

---

### stdev {#stdev}

**Overloads**

```navi
Array.stdev(id: Array<float>, biased: any = true): float
Array.stdev(id: Array<int>, biased: any = true): float
```

計算給定 `array` 中元素的標準差。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 輸入浮點數陣列。 |
| `biased` | <code>any</code> | `true` | 如果是 `true`，則函數使用有偏估計（除以 `n`）；如果是 `false`，則使用無偏估計（除以 `n-1`）。 |

**返回:** <code>float</code>

計算給定 `array` 元素的標準差。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 輸入整數陣列。 |
| `biased` | <code>any</code> | `true` | 如果是 `true`，則函數使用有偏估計（除以 `n`）；如果是 `false`，則使用無偏估計（除以 `n-1`）。 |

**返回:** <code>float</code>

---

### sum {#sum}

**Overloads**

```navi
Array.sum(id: Array<int>): int
Array.sum(id: Array<float>): float
```

計算給定 `array` 中元素的總和。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 輸入整數陣列。 |

**返回:** <code>int</code>

計算給定 `array` 中元素的總和。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 輸入浮點數陣列。 |

**返回:** <code>float</code>

---

### unshift {#unshift}

```navi
Array.unshift(id: Array<T>, value: T)
```

將指定的 `value` 添加到給定 `array` 的開頭。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> |  | 要修改的陣列。 |
| `value` | <code>T</code> |  | 要添加到開頭的值。 |

---

### variance {#variance}

**Overloads**

```navi
Array.variance(id: Array<int>, biased: any = true): float
Array.variance(id: Array<float>, biased: any = true): float
```

計算給定 `array` 中元素的方差。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> |  | 輸入整數陣列。 |
| `biased` | <code>any</code> | `true` | 如果是 `true`，則函數使用有偏估計（除以 `n`）；如果是 `false`，則使用無偏估計（除以 `n-1`）。 |

**返回:** <code>float</code>

計算給定 `array` 元素的方差。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> |  | 輸入浮點數陣列。 |
| `biased` | <code>any</code> | `true` | 如果是 `true`，則函數使用有偏估計（除以 `n`）；如果是 `false`，則使用無偏估計（除以 `n-1`）。 |

**返回:** <code>float</code>
