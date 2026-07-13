---
title: "input"
---


# input

## Functions

### bool {#bool}

```navi
input.bool(
    defval: const bool,
    title: const String = na,
    tooltip: const String = na,
    inline: const String = na,
    group: const String = na,
    confirm: const bool = false,
    display: const PlotDisplay = PlotDisplay.ALL,
    active: input bool = true
  ): input bool
```

Creates an input value exposed in the script settings UI.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;bool</code> |  | The default value of the input. |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The label for the input in the settings. |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The tooltip text for the input. |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The inline group name for layout. |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The input group name for organization. |
| `confirm` | <code>const&nbsp;bool</code> | `false` | If true, a confirmation dialog is shown. |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | The display mode for the input. |
| `active` | <code>input&nbsp;bool</code> | `true` | If true, the input is active. |

**Returns:** <code>input&nbsp;bool</code>

---

### color {#color}

```navi
input.color(
    defval: const Color,
    title: const String = na,
    tooltip: const String = na,
    inline: const String = na,
    group: const String = na,
    confirm: const bool = false,
    display: const PlotDisplay = PlotDisplay.ALL,
    active: input bool = true
  ): input Color
```

Creates an input value exposed in the script settings UI.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code> |  | The default color value of the input. |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The label for the input in the settings. |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The tooltip text for the input. |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The inline group name for layout. |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The input group name for organization. |
| `confirm` | <code>const&nbsp;bool</code> | `false` | If true, a confirmation dialog is shown. |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | The display mode for the input. |
| `active` | <code>input&nbsp;bool</code> | `true` | If true, the input is active. |

**Returns:** <code>input&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code>

---

### enum {#enum}

```navi
input.enum(
    defval: const T,
    title: const String = na,
    options: const Array<T> = na,
    tooltip: const String = na,
    inline: const String = na,
    group: const String = na,
    confirm: const bool = false,
    display: const PlotDisplay = PlotDisplay.ALL,
    active: input bool = true
  ): input T
```

Creates an input value exposed in the script settings UI.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;T</code> |  | The default enum value of the input. |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The label for the input in the settings. |
| `options` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> | `na` | An array of allowed enum values. |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The tooltip text for the input. |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The inline group name for layout. |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The input group name for organization. |
| `confirm` | <code>const&nbsp;bool</code> | `false` | If true, a confirmation dialog is shown. |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | The display mode for the input. |
| `active` | <code>input&nbsp;bool</code> | `true` | If true, the input is active. |

**Returns:** <code>input&nbsp;T</code>

---

### float {#float}

**Overloads**

```navi
input.float(defval: const float, title: const String = na, options: const Array<float> = na, tooltip: const String = na, inline: const String = na, group: const String = na, confirm: const bool = false, display: const PlotDisplay = PlotDisplay.ALL, active: input bool = true): input float
input.float(defval: const float, title: const String = na, minval: const float = na, maxval: const float = na, step: const float = na, tooltip: const String = na, inline: const String = na, group: const String = na, confirm: const bool = false, display: const PlotDisplay = PlotDisplay.ALL, active: input bool = true): input float
```

Creates an input value exposed in the script settings UI.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;float</code> |  | The default value of the input. |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The label for the input in the settings. |
| `options` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> | `na` | An array of allowed values for the input. |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The tooltip text for the input. |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The inline group name for layout. |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The input group name for organization. |
| `confirm` | <code>const&nbsp;bool</code> | `false` | If true, a confirmation dialog is shown. |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | The display mode for the input. |
| `active` | <code>input&nbsp;bool</code> | `true` | If true, the input is active. |

**Returns:** <code>input&nbsp;float</code>

Creates an input value exposed in the script settings UI.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;float</code> |  | The default value of the input. |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The label for the input in the settings. |
| `minval` | <code>const&nbsp;float</code> | `na` | The minimum allowed value. |
| `maxval` | <code>const&nbsp;float</code> | `na` | The maximum allowed value. |
| `step` | <code>const&nbsp;float</code> | `na` | The step size for value increments. |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The tooltip text for the input. |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The inline group name for layout. |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The input group name for organization. |
| `confirm` | <code>const&nbsp;bool</code> | `false` | If true, a confirmation dialog is shown. |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | The display mode for the input. |
| `active` | <code>input&nbsp;bool</code> | `true` | If true, the input is active. |

**Returns:** <code>input&nbsp;float</code>

---

### int {#int}

**Overloads**

```navi
input.int(defval: const int, title: const String = na, options: const Array<int> = na, tooltip: const String = na, inline: const String = na, group: const String = na, confirm: const bool = false, display: const PlotDisplay = PlotDisplay.ALL, active: input bool = true): input int
input.int(defval: const int, title: const String = na, minval: const int = na, maxval: const int = na, step: const int = na, tooltip: const String = na, inline: const String = na, group: const String = na, confirm: const bool = false, display: const PlotDisplay = PlotDisplay.ALL, active: input bool = true): input int
```

Creates an input value exposed in the script settings UI.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;int</code> |  | The default value of the input. |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The label for the input in the settings. |
| `options` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> | `na` | An array of allowed values for the input. |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The tooltip text for the input. |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The inline group name for layout. |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The input group name for organization. |
| `confirm` | <code>const&nbsp;bool</code> | `false` | If true, a confirmation dialog is shown. |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | The display mode for the input. |
| `active` | <code>input&nbsp;bool</code> | `true` | If true, the input is active. |

**Returns:** <code>input&nbsp;int</code>

Creates an input value exposed in the script settings UI.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;int</code> |  | The default value of the input. |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The label for the input in the settings. |
| `minval` | <code>const&nbsp;int</code> | `na` | The minimum allowed value. |
| `maxval` | <code>const&nbsp;int</code> | `na` | The maximum allowed value. |
| `step` | <code>const&nbsp;int</code> | `na` | The step size for value increments. |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The tooltip text for the input. |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The inline group name for layout. |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The input group name for organization. |
| `confirm` | <code>const&nbsp;bool</code> | `false` | If true, a confirmation dialog is shown. |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | The display mode for the input. |
| `active` | <code>input&nbsp;bool</code> | `true` | If true, the input is active. |

**Returns:** <code>input&nbsp;int</code>

---

### price {#price}

```navi
input.price(
    defval: const float,
    title: const String = na,
    tooltip: const String = na,
    inline: const String = na,
    group: const String = na,
    confirm: const bool = false,
    display: const PlotDisplay = PlotDisplay.ALL,
    active: input bool = true
  ): input float
```

Creates an input value exposed in the script settings UI.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;float</code> |  | The default price value of the input. |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The label for the input in the settings. |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The tooltip text for the input. |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The inline group name for layout. |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The input group name for organization. |
| `confirm` | <code>const&nbsp;bool</code> | `false` | If true, a confirmation dialog is shown. |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | The display mode for the input. |
| `active` | <code>input&nbsp;bool</code> | `true` | If true, the input is active. |

**Returns:** <code>input&nbsp;float</code>

---

### session {#session}

```navi
input.session(
    defval: const String,
    title: const String = na,
    options: const Array<String> = na,
    tooltip: const String = na,
    inline: const String = na,
    group: const String = na,
    confirm: const bool = false,
    display: const PlotDisplay = PlotDisplay.ALL,
    active: input bool = true
  ): input String
```

Creates an input value exposed in the script settings UI.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The default session value of the input. |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The label for the input in the settings. |
| `options` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a>&gt;</code> | `na` | An array of allowed session values. |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The tooltip text for the input. |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The inline group name for layout. |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The input group name for organization. |
| `confirm` | <code>const&nbsp;bool</code> | `false` | If true, a confirmation dialog is shown. |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | The display mode for the input. |
| `active` | <code>input&nbsp;bool</code> | `true` | If true, the input is active. |

**Returns:** <code>input&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

---

### source {#source}

```navi
input.source(
    defval: const expression,
    title: const String = na,
    tooltip: const String = na,
    inline: const String = na,
    group: const String = na,
    display: const PlotDisplay = PlotDisplay.ALL,
    active: input bool = true,
    confirm: const bool = false
  ): input float
```

Creates an input value exposed in the script settings UI.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;expression</code> |  | The default series expression value of the input. |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The label for the input in the settings. |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The tooltip text for the input. |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The inline group name for layout. |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The input group name for organization. |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | The display mode for the input. |
| `active` | <code>input&nbsp;bool</code> | `true` | If true, the input is active. |
| `confirm` | <code>const&nbsp;bool</code> | `false` | If true, a confirmation dialog is shown. |

**Returns:** <code>input&nbsp;float</code>

---

### string {#string}

```navi
input.string(
    defval: const String,
    title: const String = na,
    options: const Array<String> = na,
    tooltip: const String = na,
    inline: const String = na,
    group: const String = na,
    confirm: const bool = false,
    display: const PlotDisplay = PlotDisplay.ALL,
    active: input bool = true
  ): input String
```

Creates an input value exposed in the script settings UI.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The default String value of the input. |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The label for the input in the settings. |
| `options` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a>&gt;</code> | `na` | An array of allowed values for the input. |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The tooltip text for the input. |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The inline group name for layout. |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The input group name for organization. |
| `confirm` | <code>const&nbsp;bool</code> | `false` | If true, a confirmation dialog is shown. |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | The display mode for the input. |
| `active` | <code>input&nbsp;bool</code> | `true` | If true, the input is active. |

**Returns:** <code>input&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

---

### symbol {#symbol}

```navi
input.symbol(
    defval: const String,
    title: const String = na,
    tooltip: const String = na,
    inline: const String = na,
    group: const String = na,
    confirm: const bool = false,
    display: const PlotDisplay = PlotDisplay.ALL,
    active: input bool = true
  ): input String
```

Creates an input value exposed in the script settings UI.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The default symbol value of the input. |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The label for the input in the settings. |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The tooltip text for the input. |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The inline group name for layout. |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The input group name for organization. |
| `confirm` | <code>const&nbsp;bool</code> | `false` | If true, a confirmation dialog is shown. |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | The display mode for the input. |
| `active` | <code>input&nbsp;bool</code> | `true` | If true, the input is active. |

**Returns:** <code>input&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

---

### text_area {#text_area}

```navi
input.text_area(
    defval: const String,
    title: const String = na,
    tooltip: const String = na,
    group: const String = na,
    confirm: const bool = false,
    display: const PlotDisplay = PlotDisplay.ALL,
    active: input bool = true
  ): input String
```

Creates an input value exposed in the script settings UI.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The default text value of the input. |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The label for the input in the settings. |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The tooltip text for the input. |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The input group name for organization. |
| `confirm` | <code>const&nbsp;bool</code> | `false` | If true, a confirmation dialog is shown. |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | The display mode for the input. |
| `active` | <code>input&nbsp;bool</code> | `true` | If true, the input is active. |

**Returns:** <code>input&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

---

### time {#time}

```navi
input.time(
    defval: const int,
    title: const String = na,
    tooltip: const String = na,
    inline: const String = na,
    group: const String = na,
    confirm: const bool = false,
    display: const PlotDisplay = PlotDisplay.ALL,
    active: input bool = true
  ): input int
```

Creates an input value exposed in the script settings UI.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;int</code> |  | The default time value of the input as UNIX timestamp. |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The label for the input in the settings. |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The tooltip text for the input. |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The inline group name for layout. |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The input group name for organization. |
| `confirm` | <code>const&nbsp;bool</code> | `false` | If true, a confirmation dialog is shown. |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | The display mode for the input. |
| `active` | <code>input&nbsp;bool</code> | `true` | If true, the input is active. |

**Returns:** <code>input&nbsp;int</code>

---

### timeframe {#timeframe}

```navi
input.timeframe(
    defval: const String,
    title: const String = na,
    options: const Array<String> = na,
    tooltip: const String = na,
    inline: const String = na,
    group: const String = na,
    confirm: const bool = false,
    display: const PlotDisplay = PlotDisplay.ALL,
    active: input bool = true
  ): input String
```

Creates an input value exposed in the script settings UI.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The default timeframe value of the input. |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The label for the input in the settings. |
| `options` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a>&gt;</code> | `na` | An array of allowed timeframe values. |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The tooltip text for the input. |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The inline group name for layout. |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The input group name for organization. |
| `confirm` | <code>const&nbsp;bool</code> | `false` | If true, a confirmation dialog is shown. |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | The display mode for the input. |
| `active` | <code>input&nbsp;bool</code> | `true` | If true, the input is active. |

**Returns:** <code>input&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>
