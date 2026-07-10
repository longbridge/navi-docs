---
title: "str"
---

<script setup>
import { ref } from 'vue'
const _s0 = ref(0)
</script>

# str

## 函數

### contains {#contains}

```navi
str.contains(source: string, str: string): bool
```

檢查源字符串是否包含指定的子字符串。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>string</code> |  | 要在其中搜索的字符串。 |
| `str` | <code>string</code> |  | 要搜索的子字符串。 |

**返回:** <code>bool</code>

---

### endswith {#endswith}

```navi
str.endswith(source: string, str: string): bool
```

檢查源字符串是否以指定的子字符串結尾。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>string</code> |  | 要檢查的字符串。 |
| `str` | <code>string</code> |  | 要搜索的後綴。 |

**返回:** <code>bool</code>

---

### format {#format}

```navi
str.format(format: string, values: any): string
```

使用給定的格式和值格式化字符串。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `format` | <code>string</code> |  | 格式字符串。 |
| `values` | <code>any</code> |  | 要格式化為字符串的可變數量的值。 |

**返回:** <code>string</code>

---

### format_time {#format_time}

```navi
str.format_time(
    time: int,
    format: string,
    timezone: string = syminfo.timezone
  ): string
```

根據提供的格式和時區將時間戳（自紀元以來以毫秒為單位）格式化為字符串。 'M'、'd'、'h'、'H'、'm' 和 's' 標記都可以加倍以生成前導零。例如，一月將顯示為帶有“M”的 1，或帶有“MM”的 01。最常用的格式化標記是： 'y' - 年份。使用“yy”輸出年份的最後兩位數字，或使用“yyyy”輸出全部四位數字。 2000 年將是 00（帶有“yy”）或 2000 年（帶有“yyyy”）。 'M' - 月份。不要與小寫“m”混淆，後者代表分鐘。 'd' - 一個月中的某一天。 'a' - AM/PM 後綴。 'h' - 12 小時格式的小時。在此格式中，當天的最後一個小時將是“11”。 'H' - 24 小時格式的小時。在此格式中，當天的最後一個小時將是“23”。 'm' - 分鐘。 's' - 第二。 'S' - 秒的幾分之一。 'Z' - 時區，相對於 UTC 的時針偏移量，前面帶有 '+' 或 '-'。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `time` | <code>int</code> |  | 自格式化紀元以來的時間戳（以毫秒為單位）。 |
| `format` | <code>string</code> |  | 用於轉換的格式字符串。 |
| `timezone` | <code>string</code> | `syminfo.timezone` | 用於格式化的時區。 |

**返回:** <code>string</code>

---

### index_of {#index_of}

```navi
str.index_of(source: string, str: string): int
```

傳回子字符串在字符串中第一次出現的位置，如果未找到，則傳回 `na`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>string</code> |  | 要在其中搜索的字符串。 |
| `str` | <code>string</code> |  | 要搜索的子字符串。 |

**返回:** <code>int</code> — 第一次出現的從零開始的索引，如果未找到，則為 `na`。

---

### length {#length}

```navi
str.length(str: string): int
```

傳回給定字符串的長度。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `str` | <code>string</code> |  | 待確定長度的字符串。 |

**返回:** <code>int</code>

---

### lower {#lower}

```navi
str.lower(str: string): string
```

將字符串中的所有字符轉換為小寫。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `str` | <code>string</code> |  | 要轉換為小寫的字符串。 |

**返回:** <code>string</code>

---

### match {#match}

```navi
str.match(source: string, regex: string): string
```

如果源字符串與 regex 正則表達式匹配，則傳回源字符串的新子字符串，否則傳回空字符串。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>string</code> |  | 要搜索的字符串。 |
| `regex` | <code>string</code> |  | 要匹配的正則表達式模式。 |

**返回:** <code>string</code> — 匹配的子字符串，如果未找到匹配則為空字符串。

---

### pad_end {#pad_end}

```navi
str.pad_end(str: string, len: int, fill: string = " "): string
```

Right-pads `str` with `fill` until it reaches at least `len` characters.

If `str` is already `len` characters or longer, it is returned unchanged. `fill` is repeated cyclically if shorter than the required padding.

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `str` | <code>string</code> |  | The string to pad. |
| `len` | <code>int</code> |  | The minimum target length in characters. |
| `fill` | <code>string</code> | `" "` | The padding string to repeat on the right. Defaults to `" "`. |

**返回:** <code>string</code>

---

### pad_start {#pad_start}

```navi
str.pad_start(str: string, len: int, fill: string = " "): string
```

Left-pads `str` with `fill` until it reaches at least `len` characters.

If `str` is already `len` characters or longer, it is returned unchanged. `fill` is repeated cyclically if shorter than the required padding.

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `str` | <code>string</code> |  | The string to pad. |
| `len` | <code>int</code> |  | The minimum target length in characters. |
| `fill` | <code>string</code> | `" "` | The padding string to repeat on the left. Defaults to `" "`. |

**返回:** <code>string</code>

---

### repeat {#repeat}

```navi
str.repeat(source: string, repeat: int): string
```

傳回由重複指定次數的源字符串組成的新字符串。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>string</code> |  | 要重複的字符串。 |
| `repeat` | <code>int</code> |  | 重複字符串的次數。 |

**返回:** <code>string</code>

---

### replace {#replace}

```navi
str.replace(
    source: string,
    target: string,
    replacement: string,
    occurrence: int = 0
  ): string
```

用替換子字符串替換源字符串中出現的目標子字符串。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>string</code> |  | 要在其中執行替換的原始字符串。 |
| `target` | <code>string</code> |  | 要替換的子字符串。 |
| `replacement` | <code>string</code> |  | 用於替換目標的子字符串。 |
| `occurrence` | <code>int</code> | `0` | 要替換的目標字符串第 N 次出現。第一個匹配的索引從 0 開始。 |

**返回:** <code>string</code>

---

### replace_all {#replace_all}

```navi
str.replace_all(source: string, target: string, replacement: string): string
```

將源字符串中所有出現的目標子字符串替換為替換子字符串。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>string</code> |  | 要在其中執行替換的原始字符串。 |
| `target` | <code>string</code> |  | 要替換的子字符串。 |
| `replacement` | <code>string</code> |  | 用於替換目標的子字符串。 |

**返回:** <code>string</code>

---

### split {#split}

```navi
str.split(source: string, separator: string): Array<string>
```

根據指定的分隔符將源字符串拆分為子字符串陣列。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>string</code> |  | 要分割的字符串。 |
| `separator` | <code>string</code> |  | 要分割的分隔符字符串。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array&lt;string&gt;</a></code>

---

### startswith {#startswith}

```navi
str.startswith(source: string, str: string): bool
```

檢查源字符串是否以指定的子字符串開頭。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>string</code> |  | 要檢查的字符串。 |
| `str` | <code>string</code> |  | 要搜索的前綴。 |

**返回:** <code>bool</code>

---

### substring {#substring}

```navi
str.substring(source: string, begin_pos: int, end_pos: int): string
```

傳回源字符串中從 begin_pos 到 end_pos（不包括）的子字符串。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `source` | <code>string</code> |  | 要從中提取的字符串。 |
| `begin_pos` | <code>int</code> |  | 起始位置（含）。 |
| `end_pos` | <code>int</code> |  | 結束位置（獨佔）。 |

**返回:** <code>string</code>

---

### tonumber {#tonumber}

```navi
str.tonumber(str: string): float
```

將字符串轉換為浮點數。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `str` | <code>string</code> |  | 要轉換為數字的字符串。 |

**返回:** <code>float</code> — 解析的浮點值，如果字符串無法解析為數字，則為 `na`。

---

### tostring {#tostring}

<OverloadTabs v-model="_s0" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">str.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">tostring</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(value</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, format</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">str.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">tostring</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(value</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, format</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">str.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">tostring</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(value</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, format</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Format)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">str.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">tostring</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(value</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, format</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Format)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">str.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">tostring</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(value</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> T)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span>"]' />

<div v-show="_s0 === 0">

將值轉換為其字符串表示形式。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `value` | <code>int</code> |  | 要轉換的整數值。 |
| `format` | <code>string</code> |  | 用於轉換的格式字符串。 |

**返回:** <code>string</code>

</div>

<div v-show="_s0 === 1">

將浮點數轉換為具有給定格式的字符串。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `value` | <code>float</code> |  | 要轉換的浮點值。 |
| `format` | <code>string</code> |  | 用於轉換的格式字符串。 |

**返回:** <code>string</code>

</div>

<div v-show="_s0 === 2">

將值轉換為其字符串表示形式。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `value` | <code>int</code> |  | 要轉換為字符串的值。 |
| `format` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Format">Format</a></code> |  | The <a class="stdlib-ref" data-key="prelude::Format" href="/zh-HK/api/stdlib/prelude/Format">Format</a> constant controlling formatting. |

**返回:** <code>string</code>

</div>

<div v-show="_s0 === 3">

使用 <a class="stdlib-ref" data-key="prelude::Format" href="/zh-HK/api/stdlib/prelude/Format">Format</a> 常量將浮點數轉換為字串。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `value` | <code>float</code> |  | The float value to convert. |
| `format` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Format">Format</a></code> |  | The <a class="stdlib-ref" data-key="prelude::Format" href="/zh-HK/api/stdlib/prelude/Format">Format</a> constant controlling formatting. |

**返回:** <code>string</code>

</div>

<div v-show="_s0 === 4">

將值轉換為其字串表示形式。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `value` | <code>T</code> |  | The value to convert to string. |

**返回:** <code>string</code>

</div>

---

### trim {#trim}

```navi
str.trim(str: string): string
```

修剪給定字符串的前導和尾隨空格。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `str` | <code>string</code> |  | 要修剪的字符串。 |

**返回:** <code>string</code>

---

### trim_end {#trim_end}

```navi
str.trim_end(str: string): string
```

Trims trailing (right-side) whitespace from the given string.

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `str` | <code>string</code> |  | The string to trim. |

**返回:** <code>string</code>

---

### trim_start {#trim_start}

```navi
str.trim_start(str: string): string
```

Trims leading (left-side) whitespace from the given string.

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `str` | <code>string</code> |  | The string to trim. |

**返回:** <code>string</code>

---

### upper {#upper}

```navi
str.upper(str: string): string
```

將字符串中的所有字符轉換為大寫。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `str` | <code>string</code> |  | 要轉換為大寫的字符串。 |

**返回:** <code>string</code>
