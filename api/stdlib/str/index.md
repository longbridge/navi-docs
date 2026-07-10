---
title: "str"
---

<script setup>
import { ref } from 'vue'
const _s0 = ref(0)
</script>

# str

## Functions

### contains {#contains}

```navi
str.contains(source: string, str: string): bool
```

Checks if the source string contains the specified substring.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>string</code> |  | The string to search within. |
| `str` | <code>string</code> |  | The substring to search for. |

**Returns:** <code>bool</code>

---

### endswith {#endswith}

```navi
str.endswith(source: string, str: string): bool
```

Checks if the source string ends with the specified substring.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>string</code> |  | The string to check. |
| `str` | <code>string</code> |  | The suffix to search for. |

**Returns:** <code>bool</code>

---

### format {#format}

```navi
str.format(format: string, values: any): string
```

Formats a string using the given format and values.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `format` | <code>string</code> |  | The format string. |
| `values` | <code>any</code> |  | Variable number of values to format into the string. |

**Returns:** <code>string</code>

---

### format_time {#format_time}

```navi
str.format_time(
    time: int,
    format: string,
    timezone: string = syminfo.timezone
  ): string
```

Formats a timestamp (in milliseconds since epoch) into a string based on the provided format and timezone.

The 'M', 'd', 'h', 'H', 'm' and 's' tokens can all be doubled to generate leading zeros. For example, the month of January will display as 1 with 'M', or 01 with 'MM'. The most frequently used formatting tokens are: 'y' - Year. Use 'yy' to output the last two digits of the year or 'yyyy' to output all four. Year 2000 will be 00 with 'yy' or 2000 with 'yyyy'. 'M' - Month. Not to be confused with lowercase 'm', which stands for minute. 'd' - Day of the month. 'a' - AM/PM postfix. 'h' - Hour in the 12-hour format. The last hour of the day will be '11' in this format. 'H' - Hour in the 24-hour format. The last hour of the day will be '23' in this format. 'm' - Minute. 's' - Second. 'S' - Fractions of a second. 'Z' - Timezone, the HHmm offset from UTC, preceded by either '+' or '-'.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `time` | <code>int</code> |  | The timestamp in milliseconds since epoch to format. |
| `format` | <code>string</code> |  | The format string for the conversion. |
| `timezone` | <code>string</code> | `syminfo.timezone` | The timezone to use for formatting. |

**Returns:** <code>string</code>

---

### index_of {#index_of}

```navi
str.index_of(source: string, str: string): int
```

Returns the position of the first occurrence of a substring in a string, or `na` if not found.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>string</code> |  | The string to search within. |
| `str` | <code>string</code> |  | The substring to search for. |

**Returns:** <code>int</code> — The zero-based index of the first occurrence, or `na` if not found.

---

### length {#length}

```navi
str.length(str: string): int
```

Returns the length of the given string.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `str` | <code>string</code> |  | The string whose length is to be determined. |

**Returns:** <code>int</code>

---

### lower {#lower}

```navi
str.lower(str: string): string
```

Converts all characters in the string to lowercase.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `str` | <code>string</code> |  | The string to convert to lowercase. |

**Returns:** <code>string</code>

---

### match {#match}

```navi
str.match(source: string, regex: string): string
```

Returns the new substring of the source string if it matches a regex regular expression, an empty string otherwise.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>string</code> |  | The string to search. |
| `regex` | <code>string</code> |  | The regular expression pattern to match. |

**Returns:** <code>string</code> — The matched substring, or an empty string if no match is found.

---

### repeat {#repeat}

```navi
str.repeat(source: string, repeat: int): string
```

Returns a new string consisting of the source string repeated a specified number of times.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>string</code> |  | The string to repeat. |
| `repeat` | <code>int</code> |  | The number of times to repeat the string. |

**Returns:** <code>string</code>

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

Replaces occurrences of a target substring within the source string with a replacement substring.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>string</code> |  | The original string in which to perform the replacement. |
| `target` | <code>string</code> |  | The substring to be replaced. |
| `replacement` | <code>string</code> |  | The substring to replace the target with. |
| `occurrence` | <code>int</code> | `0` | N-th occurrence of the target string to replace. Indexing starts at 0 for the first match. |

**Returns:** <code>string</code>

---

### replace_all {#replace_all}

```navi
str.replace_all(source: string, target: string, replacement: string): string
```

Replaces all occurrences of a target substring within the source string with a replacement substring.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>string</code> |  | The original string in which to perform the replacement. |
| `target` | <code>string</code> |  | The substring to be replaced. |
| `replacement` | <code>string</code> |  | The substring to replace the target with. |

**Returns:** <code>string</code>

---

### split {#split}

```navi
str.split(source: string, separator: string): Array<string>
```

Splits the source string into an array of substrings based on the specified separator.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>string</code> |  | The string to split. |
| `separator` | <code>string</code> |  | The separator string to split on. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array&lt;string&gt;</a></code>

---

### startswith {#startswith}

```navi
str.startswith(source: string, str: string): bool
```

Checks if the source string starts with the specified substring.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>string</code> |  | The string to check. |
| `str` | <code>string</code> |  | The prefix to search for. |

**Returns:** <code>bool</code>

---

### substring {#substring}

```navi
str.substring(source: string, begin_pos: int, end_pos: int): string
```

Returns a substring of the source string from begin_pos to end_pos (exclusive).

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | <code>string</code> |  | The string to extract from. |
| `begin_pos` | <code>int</code> |  | The starting position (inclusive). |
| `end_pos` | <code>int</code> |  | The ending position (exclusive). |

**Returns:** <code>string</code>

---

### tonumber {#tonumber}

```navi
str.tonumber(str: string): float
```

Converts a string to a floating-point number.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `str` | <code>string</code> |  | The string to convert to a number. |

**Returns:** <code>float</code> — The parsed float value, or `na` if the string cannot be parsed as a number.

---

### tostring {#tostring}

<OverloadTabs v-model="_s0" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">str.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">tostring</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(value</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, format</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">str.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">tostring</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(value</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, format</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">str.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">tostring</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(value</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, format</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Format)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">str.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">tostring</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(value</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, format</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Format)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">str.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">tostring</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(value</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> T)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span>"]' />

<div v-show="_s0 === 0">

Converts a value to its string representation.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | <code>int</code> |  | The integer value to convert. |
| `format` | <code>string</code> |  | The format string for the conversion. |

**Returns:** <code>string</code>

</div>

<div v-show="_s0 === 1">

Converts a float to string with the given format.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | <code>float</code> |  | The float value to convert. |
| `format` | <code>string</code> |  | The format string for the conversion. |

**Returns:** <code>string</code>

</div>

<div v-show="_s0 === 2">

Converts an integer to string using a <a class="stdlib-ref" data-key="prelude::Format" href="/api/stdlib/prelude/Format">Format</a> constant.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | <code>int</code> |  | The integer value to convert. |
| `format` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Format">Format</a></code> |  | The <a class="stdlib-ref" data-key="prelude::Format" href="/api/stdlib/prelude/Format">Format</a> constant controlling formatting. |

**Returns:** <code>string</code>

</div>

<div v-show="_s0 === 3">

Converts a float to string using a <a class="stdlib-ref" data-key="prelude::Format" href="/api/stdlib/prelude/Format">Format</a> constant.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | <code>float</code> |  | The float value to convert. |
| `format` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Format">Format</a></code> |  | The <a class="stdlib-ref" data-key="prelude::Format" href="/api/stdlib/prelude/Format">Format</a> constant controlling formatting. |

**Returns:** <code>string</code>

</div>

<div v-show="_s0 === 4">

Converts a value to its string representation.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | <code>T</code> |  | The value to convert to string. |

**Returns:** <code>string</code>

</div>

---

### trim {#trim}

```navi
str.trim(str: string): string
```

Trims leading and trailing whitespace from the given string.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `str` | <code>string</code> |  | The string to trim. |

**Returns:** <code>string</code>

---

### upper {#upper}

```navi
str.upper(str: string): string
```

Converts all characters in the string to uppercase.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `str` | <code>string</code> |  | The string to convert to uppercase. |

**Returns:** <code>string</code>
