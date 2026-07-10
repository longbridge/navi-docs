---
title: "String"
---

<script setup>
import { ref } from 'vue'
const _s0 = ref(0)
</script>

# String

不可變的 Unicode 字元序列。

## 靜態方法

### format_time {#format_time}

```navi
String.format_time(
    time: int,
    format: String,
    timezone: String = symbol_info.timezone
  ): String
```

根據提供的格式和時區，將時間戳記（自紀元以來的毫秒數）格式化為字串。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `time` | <code>int</code> |  | 要格式化的時間戳記（自紀元以來的毫秒數）。 |
| `format` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 轉換使用的格式字串。 |
| `timezone` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `symbol_info.timezone` | 格式化使用的時區。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

---

### from {#from}

<OverloadTabs v-model="_s0" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">String.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">from</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(value</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, format</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">String.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">from</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(value</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, format</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">String.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">from</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(value</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, format</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Format)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">String.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">from</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(value</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, format</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Format)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">String.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">from</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(value</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> T)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String</span>"]' />

<div v-show="_s0 === 0">

將整數值轉換為其字串表示形式。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `value` | <code>int</code> |  | 要轉換的整數值。 |
| `format` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 轉換使用的格式字串。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

</div>

<div v-show="_s0 === 1">

用給定格式將浮點數轉換為字串。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `value` | <code>float</code> |  | 要轉換的浮點值。 |
| `format` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 轉換使用的格式字串。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

</div>

<div v-show="_s0 === 2">

使用 <a class="stdlib-ref" data-key="prelude::Format" href="/zh-HK/api/stdlib/prelude/Format">Format</a> 常數將整數轉換為字串。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `value` | <code>int</code> |  | 要轉換的整數值。 |
| `format` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Format">Format</a></code> |  | 控制格式化的 <a class="stdlib-ref" data-key="prelude::Format" href="/zh-HK/api/stdlib/prelude/Format">Format</a> 常數。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

</div>

<div v-show="_s0 === 3">

使用 <a class="stdlib-ref" data-key="prelude::Format" href="/zh-HK/api/stdlib/prelude/Format">Format</a> 常數將浮點數轉換為字串。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `value` | <code>float</code> |  | 要轉換的浮點值。 |
| `format` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Format">Format</a></code> |  | 控制格式化的 <a class="stdlib-ref" data-key="prelude::Format" href="/zh-HK/api/stdlib/prelude/Format">Format</a> 常數。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

</div>

<div v-show="_s0 === 4">

將任意類型的值轉換為其字串表示形式。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `value` | <code>T</code> |  | 要轉換為字串的值。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

</div>

## 方法

### contains {#contains}

```navi
String.contains(self: String, str: String): bool
```

檢查字串是否包含指定的子字串。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  |  |
| `str` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 要搜尋的子字串。 |

**返回:** <code>bool</code>

---

### ends_with {#ends_with}

```navi
String.ends_with(self: String, str: String): bool
```

檢查字串是否以指定後綴結尾。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  |  |
| `str` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 要搜尋的後綴。 |

**返回:** <code>bool</code>

---

### format {#format}

```navi
String.format(self: String, values: any): String
```

將字串作為模板進行格式化，用提供的值替換 `{}` 佔位符。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  |  |
| `values` | <code>any</code> |  | 要替換到模板中的可變數量的值。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

---

### index_of {#index_of}

```navi
String.index_of(self: String, str: String): int
```

返回子字串第一次出現的從零開始的索引，如果未找到則返回 `na`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  |  |
| `str` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 要搜尋的子字串。 |

**返回:** <code>int</code>

---

### length {#length}

```navi
String.length(self: String): int
```

返回字串的長度。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  |  |

**返回:** <code>int</code>

---

### lower {#lower}

```navi
String.lower(self: String): String
```

將字串中的所有字元轉換為小寫。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

---

### match {#match}

```navi
String.match(self: String, regex: String): String
```

如果字串符合正規表達式模式，則返回匹配的子字串，否則返回空字串。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  |  |
| `regex` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 要匹配的正規表達式模式。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

---

### pad_end {#pad_end}

```navi
String.pad_end(self: String, len: int, fill: String = " "): String
```

用 `fill` 在字串右側填充，直到長度至少為 `len` 個字元。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  |  |
| `len` | <code>int</code> |  | 目標最小字元長度。 |
| `fill` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `" "` | 填充字串，預設為 `" "`。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

---

### pad_start {#pad_start}

```navi
String.pad_start(self: String, len: int, fill: String = " "): String
```

用 `fill` 在字串左側填充，直到長度至少為 `len` 個字元。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  |  |
| `len` | <code>int</code> |  | 目標最小字元長度。 |
| `fill` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `" "` | 填充字串，預設為 `" "`。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

---

### repeat {#repeat}

```navi
String.repeat(self: String, repeat: int): String
```

返回將字串重複指定次數後的新字串。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  |  |
| `repeat` | <code>int</code> |  | 重複字串的次數。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

---

### replace {#replace}

```navi
String.replace(
    self: String,
    target: String,
    replacement: String,
    occurrence: int = 0
  ): String
```

將目標子字串第 N 次出現的位置替換為指定內容。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  |  |
| `target` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 要被替換的子字串。 |
| `replacement` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 替換內容。 |
| `occurrence` | <code>int</code> | `0` | 要替換的第 N 次出現（從 0 開始）。預設為 `0`。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

---

### replace_all {#replace_all}

```navi
String.replace_all(self: String, target: String, replacement: String): String
```

將目標子字串的所有出現替換為指定內容。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  |  |
| `target` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 要被替換的子字串。 |
| `replacement` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 替換內容。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

---

### split {#split}

```navi
String.split(self: String, separator: String): Array<String>
```

根據分隔符將字串拆分為子字串陣列。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  |  |
| `separator` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 用於拆分的分隔符字串。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a>&gt;</code>

---

### starts_with {#starts_with}

```navi
String.starts_with(self: String, str: String): bool
```

檢查字串是否以指定前綴開頭。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  |  |
| `str` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 要搜尋的前綴。 |

**返回:** <code>bool</code>

---

### substring {#substring}

```navi
String.substring(self: String, begin_pos: int, end_pos: int): String
```

返回從 `begin_pos` 到 `end_pos`（不含）的子字串。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  |  |
| `begin_pos` | <code>int</code> |  | 起始位置（含）。 |
| `end_pos` | <code>int</code> |  | 結束位置（不含）。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

---

### to_number {#to_number}

```navi
String.to_number(self: String): float
```

將字串轉換為浮點數。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  |  |

**返回:** <code>float</code> — 解析後的浮點值，如果字串無法解析則返回 `na`。

---

### trim {#trim}

```navi
String.trim(self: String): String
```

去除字串首尾的空白字元。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

---

### trim_end {#trim_end}

```navi
String.trim_end(self: String): String
```

去除字串末尾的空白字元。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

---

### trim_start {#trim_start}

```navi
String.trim_start(self: String): String
```

去除字串開頭的空白字元。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

---

### upper {#upper}

```navi
String.upper(self: String): String
```

將字串中的所有字元轉換為大寫。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>
