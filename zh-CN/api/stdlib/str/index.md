---
title: "str"
---

<script setup>
import { ref } from 'vue'
const _s0 = ref(0)
</script>

# str

## 函数

### contains {#contains}

```navi
str.contains(source: string, str: string): bool
```

检查源字符串是否包含指定的子字符串。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>string</code> |  | 要在其中搜索的字符串。 |
| `str` | <code>string</code> |  | 要搜索的子字符串。 |

**返回:** <code>bool</code>

---

### endswith {#endswith}

```navi
str.endswith(source: string, str: string): bool
```

检查源字符串是否以指定的子字符串结尾。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>string</code> |  | 要检查的字符串。 |
| `str` | <code>string</code> |  | 要搜索的后缀。 |

**返回:** <code>bool</code>

---

### format {#format}

```navi
str.format(format: string, values: any): string
```

使用给定的格式和值格式化字符串。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `format` | <code>string</code> |  | 格式字符串。 |
| `values` | <code>any</code> |  | 要格式化为字符串的可变数量的值。 |

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

根据提供的格式和时区将时间戳（自纪元以来以毫秒为单位）格式化为字符串。 'M'、'd'、'h'、'H'、'm' 和 's' 标记都可以加倍以生成前导零。例如，一月将显示为带有“M”的 1，或带有“MM”的 01。最常用的格式化标记是： 'y' - 年份。使用“yy”输出年份的最后两位数字，或使用“yyyy”输出全部四位数字。 2000 年将是 00（带有“yy”）或 2000 年（带有“yyyy”）。 'M' - 月份。不要与小写“m”混淆，后者代表分钟。 'd' - 一个月中的某一天。 'a' - AM/PM 后缀。 'h' - 12 小时格式的小时。在此格式中，当天的最后一个小时将是“11”。 'H' - 24 小时格式的小时。在此格式中，当天的最后一个小时将是“23”。 'm' - 分钟。 's' - 第二。 'S' - 秒的几分之一。 'Z' - 时区，相对于 UTC 的时针偏移量，前面带有 '+' 或 '-'。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `time` | <code>int</code> |  | 自格式化纪元以来的时间戳（以毫秒为单位）。 |
| `format` | <code>string</code> |  | 用于转换的格式字符串。 |
| `timezone` | <code>string</code> | `syminfo.timezone` | 用于格式化的时区。 |

**返回:** <code>string</code>

---

### index_of {#index_of}

```navi
str.index_of(source: string, str: string): int
```

返回子字符串在字符串中第一次出现的位置，如果未找到，则返回 `na`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>string</code> |  | 要在其中搜索的字符串。 |
| `str` | <code>string</code> |  | 要搜索的子字符串。 |

**返回:** <code>int</code> — 第一次出现的从零开始的索引，如果未找到，则为 `na`。

---

### length {#length}

```navi
str.length(str: string): int
```

返回给定字符串的长度。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `str` | <code>string</code> |  | 待确定长度的字符串。 |

**返回:** <code>int</code>

---

### lower {#lower}

```navi
str.lower(str: string): string
```

将字符串中的所有字符转换为小写。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `str` | <code>string</code> |  | 要转换为小写的字符串。 |

**返回:** <code>string</code>

---

### match {#match}

```navi
str.match(source: string, regex: string): string
```

如果源字符串与 regex 正则表达式匹配，则返回源字符串的新子字符串，否则返回空字符串。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>string</code> |  | 要搜索的字符串。 |
| `regex` | <code>string</code> |  | 要匹配的正则表达式模式。 |

**返回:** <code>string</code> — 匹配的子字符串，如果未找到匹配则为空字符串。

---

### pad_end {#pad_end}

```navi
str.pad_end(str: string, len: int, fill: string = " "): string
```

Right-pads `str` with `fill` until it reaches at least `len` characters.

If `str` is already `len` characters or longer, it is returned unchanged. `fill` is repeated cyclically if shorter than the required padding.

**参数**

| 名称 | 类型 | 默认值 | 说明 |
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

**参数**

| 名称 | 类型 | 默认值 | 说明 |
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

返回由重复指定次数的源字符串组成的新字符串。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>string</code> |  | 要重复的字符串。 |
| `repeat` | <code>int</code> |  | 重复字符串的次数。 |

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

用替换子字符串替换源字符串中出现的目标子字符串。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>string</code> |  | 要在其中执行替换的原始字符串。 |
| `target` | <code>string</code> |  | 要替换的子字符串。 |
| `replacement` | <code>string</code> |  | 用于替换目标的子字符串。 |
| `occurrence` | <code>int</code> | `0` | 要替换的目标字符串第 N 次出现。第一个匹配的索引从 0 开始。 |

**返回:** <code>string</code>

---

### replace_all {#replace_all}

```navi
str.replace_all(source: string, target: string, replacement: string): string
```

将源字符串中所有出现的目标子字符串替换为替换子字符串。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>string</code> |  | 要在其中执行替换的原始字符串。 |
| `target` | <code>string</code> |  | 要替换的子字符串。 |
| `replacement` | <code>string</code> |  | 用于替换目标的子字符串。 |

**返回:** <code>string</code>

---

### split {#split}

```navi
str.split(source: string, separator: string): Array<string>
```

根据指定的分隔符将源字符串拆分为子字符串数组。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>string</code> |  | 要分割的字符串。 |
| `separator` | <code>string</code> |  | 要分割的分隔符字符串。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array&lt;string&gt;</a></code>

---

### startswith {#startswith}

```navi
str.startswith(source: string, str: string): bool
```

检查源字符串是否以指定的子字符串开头。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>string</code> |  | 要检查的字符串。 |
| `str` | <code>string</code> |  | 要搜索的前缀。 |

**返回:** <code>bool</code>

---

### substring {#substring}

```navi
str.substring(source: string, begin_pos: int, end_pos: int): string
```

返回源字符串中从 begin_pos 到 end_pos（不包括）的子字符串。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>string</code> |  | 要从中提取的字符串。 |
| `begin_pos` | <code>int</code> |  | 起始位置（含）。 |
| `end_pos` | <code>int</code> |  | 结束位置（独占）。 |

**返回:** <code>string</code>

---

### tonumber {#tonumber}

```navi
str.tonumber(str: string): float
```

将字符串转换为浮点数。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `str` | <code>string</code> |  | 要转换为数字的字符串。 |

**返回:** <code>float</code> — 解析的浮点值，如果字符串无法解析为数字，则为 `na`。

---

### tostring {#tostring}

<OverloadTabs v-model="_s0" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">str.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">tostring</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(value</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, format</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">str.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">tostring</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(value</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, format</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">str.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">tostring</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(value</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, format</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Format)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">str.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">tostring</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(value</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, format</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Format)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">str.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">tostring</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(value</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> T)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span>"]' />

<div v-show="_s0 === 0">

将值转换为其字符串表示形式。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `value` | <code>int</code> |  | 要转换的整数值。 |
| `format` | <code>string</code> |  | 用于转换的格式字符串。 |

**返回:** <code>string</code>

</div>

<div v-show="_s0 === 1">

将浮点数转换为具有给定格式的字符串。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `value` | <code>float</code> |  | 要转换的浮点值。 |
| `format` | <code>string</code> |  | 用于转换的格式字符串。 |

**返回:** <code>string</code>

</div>

<div v-show="_s0 === 2">

将值转换为其字符串表示形式。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `value` | <code>int</code> |  | 要转换为字符串的值。 |
| `format` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Format">Format</a></code> |  | The <a class="stdlib-ref" data-key="prelude::Format" href="/zh-CN/api/stdlib/prelude/Format">Format</a> constant controlling formatting. |

**返回:** <code>string</code>

</div>

<div v-show="_s0 === 3">

使用 <a class="stdlib-ref" data-key="prelude::Format" href="/zh-CN/api/stdlib/prelude/Format">Format</a> 常量将浮点数转换为字符串。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `value` | <code>float</code> |  | The float value to convert. |
| `format` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Format">Format</a></code> |  | The <a class="stdlib-ref" data-key="prelude::Format" href="/zh-CN/api/stdlib/prelude/Format">Format</a> constant controlling formatting. |

**返回:** <code>string</code>

</div>

<div v-show="_s0 === 4">

将值转换为其字符串表示形式。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `value` | <code>T</code> |  | The value to convert to string. |

**返回:** <code>string</code>

</div>

---

### trim {#trim}

```navi
str.trim(str: string): string
```

修剪给定字符串的前导和尾随空格。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `str` | <code>string</code> |  | 要修剪的字符串。 |

**返回:** <code>string</code>

---

### trim_end {#trim_end}

```navi
str.trim_end(str: string): string
```

Trims trailing (right-side) whitespace from the given string.

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `str` | <code>string</code> |  | The string to trim. |

**返回:** <code>string</code>

---

### trim_start {#trim_start}

```navi
str.trim_start(str: string): string
```

Trims leading (left-side) whitespace from the given string.

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `str` | <code>string</code> |  | The string to trim. |

**返回:** <code>string</code>

---

### upper {#upper}

```navi
str.upper(str: string): string
```

将字符串中的所有字符转换为大写。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `str` | <code>string</code> |  | 要转换为大写的字符串。 |

**返回:** <code>string</code>
