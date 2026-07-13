---
title: "input"
---


# input

## 函数

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

创建在脚本设置 UI 中公开的传入值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;bool</code> |  | 输入的默认值。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 设置中输入的标签。 |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 输入的工具提示文本。 |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 布局的内联组名称。 |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 输入组织的组名称。 |
| `confirm` | <code>const&nbsp;bool</code> | `false` | 如果为 true，则会显示确认对话框。 |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 输入的显示模式。 |
| `active` | <code>input&nbsp;bool</code> | `true` | 如果为 true，则输入处于活动状态。 |

**返回:** <code>input&nbsp;bool</code>

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

创建在脚本设置 UI 中公开的传入值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> |  | 输入的默认颜色值。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 设置中输入的标签。 |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 输入的工具提示文本。 |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 布局的内联组名称。 |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 输入组织的组名称。 |
| `confirm` | <code>const&nbsp;bool</code> | `false` | 如果为 true，则会显示确认对话框。 |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 输入的显示模式。 |
| `active` | <code>input&nbsp;bool</code> | `true` | 如果为 true，则输入处于活动状态。 |

**返回:** <code>input&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code>

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

创建在脚本设置 UI 中公开的传入值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;T</code> |  | 输入的默认枚举值。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 设置中输入的标签。 |
| `options` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> | `na` | 允许的枚举值的数组。 |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 输入的工具提示文本。 |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 布局的内联组名称。 |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 输入组织的组名称。 |
| `confirm` | <code>const&nbsp;bool</code> | `false` | 如果为 true，则会显示确认对话框。 |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 输入的显示模式。 |
| `active` | <code>input&nbsp;bool</code> | `true` | 如果为 true，则输入处于活动状态。 |

**返回:** <code>input&nbsp;T</code>

---

### float {#float}

**Overloads**

```navi
input.float(defval: const float, title: const String = na, options: const Array<float> = na, tooltip: const String = na, inline: const String = na, group: const String = na, confirm: const bool = false, display: const PlotDisplay = PlotDisplay.ALL, active: input bool = true): input float
input.float(defval: const float, title: const String = na, minval: const float = na, maxval: const float = na, step: const float = na, tooltip: const String = na, inline: const String = na, group: const String = na, confirm: const bool = false, display: const PlotDisplay = PlotDisplay.ALL, active: input bool = true): input float
```

创建在脚本设置 UI 中公开的传入值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;float</code> |  | 输入的默认值。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 设置中输入的标签。 |
| `options` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> | `na` | 输入允许值的数组。 |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 输入的工具提示文本。 |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 布局的内联组名称。 |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 输入组织的组名称。 |
| `confirm` | <code>const&nbsp;bool</code> | `false` | 如果为 true，则会显示确认对话框。 |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 输入的显示模式。 |
| `active` | <code>input&nbsp;bool</code> | `true` | 如果为 true，则输入处于活动状态。 |

**返回:** <code>input&nbsp;float</code>

创建在脚本设置 UI 中公开的传入值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;float</code> |  | 输入的默认值。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 设置中输入的标签。 |
| `minval` | <code>const&nbsp;float</code> | `na` | 最小允许值。 |
| `maxval` | <code>const&nbsp;float</code> | `na` | 最大允许值。 |
| `step` | <code>const&nbsp;float</code> | `na` | 值增量的步长。 |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 输入的工具提示文本。 |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 布局的内联组名称。 |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 输入组织的组名称。 |
| `confirm` | <code>const&nbsp;bool</code> | `false` | 如果为 true，则会显示确认对话框。 |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 输入的显示模式。 |
| `active` | <code>input&nbsp;bool</code> | `true` | 如果为 true，则输入处于活动状态。 |

**返回:** <code>input&nbsp;float</code>

---

### int {#int}

**Overloads**

```navi
input.int(defval: const int, title: const String = na, options: const Array<int> = na, tooltip: const String = na, inline: const String = na, group: const String = na, confirm: const bool = false, display: const PlotDisplay = PlotDisplay.ALL, active: input bool = true): input int
input.int(defval: const int, title: const String = na, minval: const int = na, maxval: const int = na, step: const int = na, tooltip: const String = na, inline: const String = na, group: const String = na, confirm: const bool = false, display: const PlotDisplay = PlotDisplay.ALL, active: input bool = true): input int
```

创建在脚本设置 UI 中公开的传入值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;int</code> |  | 输入的默认值。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 设置中输入的标签。 |
| `options` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> | `na` | 输入允许值的数组。 |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 输入的工具提示文本。 |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 布局的内联组名称。 |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 输入组织的组名称。 |
| `confirm` | <code>const&nbsp;bool</code> | `false` | 如果为 true，则会显示确认对话框。 |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 输入的显示模式。 |
| `active` | <code>input&nbsp;bool</code> | `true` | 如果为 true，则输入处于活动状态。 |

**返回:** <code>input&nbsp;int</code>

创建在脚本设置 UI 中公开的传入值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;int</code> |  | 输入的默认值。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 设置中输入的标签。 |
| `minval` | <code>const&nbsp;int</code> | `na` | 最小允许值。 |
| `maxval` | <code>const&nbsp;int</code> | `na` | 最大允许值。 |
| `step` | <code>const&nbsp;int</code> | `na` | 值增量的步长。 |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 输入的工具提示文本。 |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 布局的内联组名称。 |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 输入组织的组名称。 |
| `confirm` | <code>const&nbsp;bool</code> | `false` | 如果为 true，则会显示确认对话框。 |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 输入的显示模式。 |
| `active` | <code>input&nbsp;bool</code> | `true` | 如果为 true，则输入处于活动状态。 |

**返回:** <code>input&nbsp;int</code>

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

创建在脚本设置 UI 中公开的传入值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;float</code> |  | 输入的默认价格值。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 设置中输入的标签。 |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 输入的工具提示文本。 |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 布局的内联组名称。 |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 输入组织的组名称。 |
| `confirm` | <code>const&nbsp;bool</code> | `false` | 如果为 true，则会显示确认对话框。 |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 输入的显示模式。 |
| `active` | <code>input&nbsp;bool</code> | `true` | 如果为 true，则输入处于活动状态。 |

**返回:** <code>input&nbsp;float</code>

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

创建在脚本设置 UI 中公开的传入值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 输入的默认会话值。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 设置中输入的标签。 |
| `options` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a>&gt;</code> | `na` | 允许的会话值的数组。 |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 输入的工具提示文本。 |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 布局的内联组名称。 |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 输入组织的组名称。 |
| `confirm` | <code>const&nbsp;bool</code> | `false` | 如果为 true，则会显示确认对话框。 |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 输入的显示模式。 |
| `active` | <code>input&nbsp;bool</code> | `true` | 如果为 true，则输入处于活动状态。 |

**返回:** <code>input&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

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

创建在脚本设置 UI 中公开的传入值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;expression</code> |  | 输入的默认系列表达式值。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 设置中输入的标签。 |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 输入的工具提示文本。 |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 布局的内联组名称。 |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 输入组织的组名称。 |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 输入的显示模式。 |
| `active` | <code>input&nbsp;bool</code> | `true` | 如果为 true，则输入处于活动状态。 |
| `confirm` | <code>const&nbsp;bool</code> | `false` | 如果为 true，则会显示确认对话框。 |

**返回:** <code>input&nbsp;float</code>

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

创建在脚本设置 UI 中公开的传入值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 输入的默认字符串值。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 设置中输入的标签。 |
| `options` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a>&gt;</code> | `na` | 输入允许值的数组。 |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 输入的工具提示文本。 |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 布局的内联组名称。 |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 输入组织的组名称。 |
| `confirm` | <code>const&nbsp;bool</code> | `false` | 如果为 true，则会显示确认对话框。 |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 输入的显示模式。 |
| `active` | <code>input&nbsp;bool</code> | `true` | 如果为 true，则输入处于活动状态。 |

**返回:** <code>input&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

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

创建在脚本设置 UI 中公开的传入值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 输入的默认符号值。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 设置中输入的标签。 |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 输入的工具提示文本。 |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 布局的内联组名称。 |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 输入组织的组名称。 |
| `confirm` | <code>const&nbsp;bool</code> | `false` | 如果为 true，则会显示确认对话框。 |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 输入的显示模式。 |
| `active` | <code>input&nbsp;bool</code> | `true` | 如果为 true，则输入处于活动状态。 |

**返回:** <code>input&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

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

创建在脚本设置 UI 中公开的传入值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 输入的默认文本值。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 设置中输入的标签。 |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 输入的工具提示文本。 |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 输入组织的组名称。 |
| `confirm` | <code>const&nbsp;bool</code> | `false` | 如果为 true，则会显示确认对话框。 |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 输入的显示模式。 |
| `active` | <code>input&nbsp;bool</code> | `true` | 如果为 true，则输入处于活动状态。 |

**返回:** <code>input&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

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

创建在脚本设置 UI 中公开的传入值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;int</code> |  | 输入的默认时间值作为 UNIX 时间戳。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 设置中输入的标签。 |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 输入的工具提示文本。 |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 布局的内联组名称。 |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 输入组织的组名称。 |
| `confirm` | <code>const&nbsp;bool</code> | `false` | 如果为 true，则会显示确认对话框。 |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 输入的显示模式。 |
| `active` | <code>input&nbsp;bool</code> | `true` | 如果为 true，则输入处于活动状态。 |

**返回:** <code>input&nbsp;int</code>

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

创建在脚本设置 UI 中公开的传入值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 输入的默认时间范围值。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 设置中输入的标签。 |
| `options` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a>&gt;</code> | `na` | 允许的时间范围值的数组。 |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 输入的工具提示文本。 |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 布局的内联组名称。 |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 输入组织的组名称。 |
| `confirm` | <code>const&nbsp;bool</code> | `false` | 如果为 true，则会显示确认对话框。 |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 输入的显示模式。 |
| `active` | <code>input&nbsp;bool</code> | `true` | 如果为 true，则输入处于活动状态。 |

**返回:** <code>input&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>
