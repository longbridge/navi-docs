---
title: "String"
---


# String

An immutable sequence of Unicode characters.

## Static Methods

### format_time {#format_time}

```navi
String.format_time(
    time: int,
    format: String,
    timezone: String = symbol_info.timezone
  ): String
```

Formats a timestamp (in milliseconds since epoch) into a String based on the provided format and timezone.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `time` | <code>int</code> |  | The timestamp in milliseconds since epoch to format. |
| `format` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The format String for the conversion. |
| `timezone` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `symbol_info.timezone` | The timezone to use for formatting. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

---

### from {#from}

**Overloads**

```navi
String.from(value: int, format: String): String
String.from(value: float, format: String): String
String.from(value: int, format: Format): String
String.from(value: float, format: Format): String
String.from(value: T): String
```

Converts a value to its String representation.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | <code>int</code> |  | The integer value to convert. |
| `format` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The format String for the conversion. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

Converts a float to String with the given format.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | <code>float</code> |  | The float value to convert. |
| `format` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The format String for the conversion. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

Converts an integer to String using a <a class="stdlib-ref" data-key="prelude::Format" href="/api/stdlib/prelude/Format">Format</a> constant.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | <code>int</code> |  | The integer value to convert. |
| `format` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Format">Format</a></code> |  | The <a class="stdlib-ref" data-key="prelude::Format" href="/api/stdlib/prelude/Format">Format</a> constant controlling formatting. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

Converts a float to String using a <a class="stdlib-ref" data-key="prelude::Format" href="/api/stdlib/prelude/Format">Format</a> constant.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | <code>float</code> |  | The float value to convert. |
| `format` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Format">Format</a></code> |  | The <a class="stdlib-ref" data-key="prelude::Format" href="/api/stdlib/prelude/Format">Format</a> constant controlling formatting. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

Converts any value to its String representation.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | <code>T</code> |  | The value to convert to String. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

## Methods

### contains {#contains}

```navi
String.contains(self: String, str: String): bool
```

Checks if the String contains the specified substring.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  |  |
| `str` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The substring to search for. |

**Returns:** <code>bool</code>

---

### ends_with {#ends_with}

```navi
String.ends_with(self: String, str: String): bool
```

Checks if the String ends with the specified suffix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  |  |
| `str` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The suffix to search for. |

**Returns:** <code>bool</code>

---

### format {#format}

```navi
String.format(self: String, values: any): String
```

Formats the String as a template, substituting `{}` placeholders with the provided values.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  |  |
| `values` | <code>any</code> |  | Variable number of values to substitute into the template. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

---

### index_of {#index_of}

```navi
String.index_of(self: String, str: String): int
```

Returns the zero-based index of the first occurrence of a substring, or `na` if not found.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  |  |
| `str` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The substring to search for. |

**Returns:** <code>int</code>

---

### length {#length}

```navi
String.length(self: String): int
```

Returns the length of the String.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  |  |

**Returns:** <code>int</code>

---

### lower {#lower}

```navi
String.lower(self: String): String
```

Converts all characters in the String to lowercase.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  |  |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

---

### match {#match}

```navi
String.match(self: String, regex: String): String
```

Returns the matched substring if the String matches a regex pattern, or an empty String otherwise.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  |  |
| `regex` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The regular expression pattern to match. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

---

### pad_end {#pad_end}

```navi
String.pad_end(self: String, len: int, fill: String = " "): String
```

Right-pads the String with `fill` until it reaches at least `len` characters.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  |  |
| `len` | <code>int</code> |  | The minimum target length in characters. |
| `fill` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `" "` | The padding String. Defaults to `" "`. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

---

### pad_start {#pad_start}

```navi
String.pad_start(self: String, len: int, fill: String = " "): String
```

Left-pads the String with `fill` until it reaches at least `len` characters.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  |  |
| `len` | <code>int</code> |  | The minimum target length in characters. |
| `fill` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `" "` | The padding String. Defaults to `" "`. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

---

### repeat {#repeat}

```navi
String.repeat(self: String, repeat: int): String
```

Returns a new String consisting of the String repeated a specified number of times.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  |  |
| `repeat` | <code>int</code> |  | The number of times to repeat the String. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

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

Replaces the N-th occurrence of a target substring with a replacement.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  |  |
| `target` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The substring to be replaced. |
| `replacement` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The replacement substring. |
| `occurrence` | <code>int</code> | `0` | N-th occurrence to replace (0-indexed). Defaults to `0`. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

---

### replace_all {#replace_all}

```navi
String.replace_all(self: String, target: String, replacement: String): String
```

Replaces all occurrences of a target substring with a replacement.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  |  |
| `target` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The substring to be replaced. |
| `replacement` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The replacement substring. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

---

### split {#split}

```navi
String.split(self: String, separator: String): Array<String>
```

Splits the String into an array of substrings based on a separator.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  |  |
| `separator` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The separator String to split on. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a>&gt;</code>

---

### starts_with {#starts_with}

```navi
String.starts_with(self: String, str: String): bool
```

Checks if the String starts with the specified prefix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  |  |
| `str` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The prefix to search for. |

**Returns:** <code>bool</code>

---

### substring {#substring}

```navi
String.substring(self: String, begin_pos: int, end_pos: int): String
```

Returns a substring from `begin_pos` to `end_pos` (exclusive).

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  |  |
| `begin_pos` | <code>int</code> |  | The starting position (inclusive). |
| `end_pos` | <code>int</code> |  | The ending position (exclusive). |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

---

### to_number {#to_number}

```navi
String.to_number(self: String): float
```

Converts the String to a floating-point number.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  |  |

**Returns:** <code>float</code> — The parsed float value, or `na` if the String cannot be parsed.

---

### trim {#trim}

```navi
String.trim(self: String): String
```

Trims leading and trailing whitespace from the String.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  |  |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

---

### trim_end {#trim_end}

```navi
String.trim_end(self: String): String
```

Trims trailing whitespace from the String.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  |  |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

---

### trim_start {#trim_start}

```navi
String.trim_start(self: String): String
```

Trims leading whitespace from the String.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  |  |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

---

### upper {#upper}

```navi
String.upper(self: String): String
```

Converts all characters in the String to uppercase.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  |  |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>
