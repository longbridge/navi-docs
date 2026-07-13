---
title: "Label"
---


# Label

标签绘图的句柄。

## 静态方法

### new {#new}

**Overloads**

```navi
Label.new(point: series chart.Point, text: series String = "", xloc: series XLoc = XLoc.BarIndex, yloc: series YLoc = YLoc.Price, color: series Color = na, style: series LabelStyle = LabelStyle.Down, text_color: series Color = na, size: series Size = Size.Normal, text_align: series TextHAlign = TextHAlign.Center, tooltip: series String = na, text_font_family: series FontFamily = FontFamily.Default, force_overlay: const bool = false, text_formatting: const TextFormat = TextFormat.NONE): series Label
Label.new(point: series chart.Point, text: series String = "", xloc: series XLoc = XLoc.BarIndex, yloc: series YLoc = YLoc.Price, color: series Color = na, style: series LabelStyle = LabelStyle.Down, text_color: series Color = na, size: series int = 0, text_align: series TextHAlign = TextHAlign.Center, tooltip: series String = na, text_font_family: series FontFamily = FontFamily.Default, force_overlay: const bool = false, text_formatting: const TextFormat = TextFormat.NONE): series Label
Label.new(x: series int, y: series float, text: series String = "", xloc: series XLoc = XLoc.BarIndex, yloc: series YLoc = YLoc.Price, color: series Color = na, style: series LabelStyle = LabelStyle.Down, text_color: series Color = na, size: series Size = Size.Normal, text_align: series TextHAlign = TextHAlign.Center, tooltip: series String = na, text_font_family: series FontFamily = FontFamily.Default, force_overlay: const bool = false, text_formatting: const TextFormat = TextFormat.NONE): series Label
Label.new(x: series int, y: series float, text: series String = "", xloc: series XLoc = XLoc.BarIndex, yloc: series YLoc = YLoc.Price, color: series Color = na, style: series LabelStyle = LabelStyle.Down, text_color: series Color = na, size: series int = 0, text_align: series TextHAlign = TextHAlign.Center, tooltip: series String = na, text_font_family: series FontFamily = FontFamily.Default, force_overlay: series bool = false, text_formatting: const TextFormat = TextFormat.NONE): series Label
```

在图表上创建标签对象。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `point` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/chart/Point">chart.Point</a></code> |  | 指定标签位置的 <code>chart.point</code> 对象。 |
| `text` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `""` | 要在标签上显示的文本。 |
| `xloc` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/XLoc">XLoc</a></code> | `XLoc.BarIndex` | x 位置类型：xloc.bar_index 或 xloc.bar_time。 |
| `yloc` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/YLoc">YLoc</a></code> | `YLoc.Price` | y 位置类型：yloc.price 或 yloc.price_range。 |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `na` | 标签的背景颜色。 |
| `style` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/LabelStyle">LabelStyle</a></code> | `LabelStyle.Down` | 标签的样式。 |
| `text_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `na` | 标签文本的颜色。 |
| `size` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Size">Size</a></code> | `Size.Normal` | 标签的大小作为命名常量。 |
| `text_align` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextHAlign">TextHAlign</a></code> | `TextHAlign.Center` | 文本对齐方式：TextHAlign.Center、TextHAlign.Left 或 TextHAlign.Right。 |
| `tooltip` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 将鼠标悬停在标签上时的工具提示文本。 |
| `text_font_family` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/FontFamily">FontFamily</a></code> | `FontFamily.Default` | 标签文本的字体系列。 |
| `force_overlay` | <code>const&nbsp;bool</code> | `false` | 如果为 true，则标签将呈现在顶部。 |
| `text_formatting` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextFormat">TextFormat</a></code> | `TextFormat.NONE` | 文本格式选项。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Label">Label</a></code>

在图表上创建标签对象。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `point` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/chart/Point">chart.Point</a></code> |  | 指定标签位置的 <code>chart.point</code> 对象。 |
| `text` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `""` | 要在标签上显示的文本。 |
| `xloc` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/XLoc">XLoc</a></code> | `XLoc.BarIndex` | x 位置类型：xloc.bar_index 或 xloc.bar_time。 |
| `yloc` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/YLoc">YLoc</a></code> | `YLoc.Price` | y 位置类型：yloc.price 或 yloc.price_range。 |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `na` | 标签的背景颜色。 |
| `style` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/LabelStyle">LabelStyle</a></code> | `LabelStyle.Down` | 标签的样式。 |
| `text_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `na` | 标签文本的颜色。 |
| `size` | <code>series&nbsp;int</code> | `0` | 标签的大小为整数值。 |
| `text_align` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextHAlign">TextHAlign</a></code> | `TextHAlign.Center` | 文本对齐方式：TextHAlign.Center、TextHAlign.Left 或 TextHAlign.Right。 |
| `tooltip` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 将鼠标悬停在标签上时的工具提示文本。 |
| `text_font_family` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/FontFamily">FontFamily</a></code> | `FontFamily.Default` | 标签文本的字体系列。 |
| `force_overlay` | <code>const&nbsp;bool</code> | `false` | 如果为 true，则标签将呈现在顶部。 |
| `text_formatting` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextFormat">TextFormat</a></code> | `TextFormat.NONE` | 文本格式选项。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Label">Label</a></code>

在图表上创建标签对象。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `x` | <code>series&nbsp;int</code> |  | x 坐标（bar 索引或 UNIX 时间）。 |
| `y` | <code>series&nbsp;float</code> |  | y 坐标（价格）。 |
| `text` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `""` | 要在标签上显示的文本。 |
| `xloc` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/XLoc">XLoc</a></code> | `XLoc.BarIndex` | x 位置类型：xloc.bar_index 或 xloc.bar_time。 |
| `yloc` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/YLoc">YLoc</a></code> | `YLoc.Price` | y 位置类型：yloc.price 或 yloc.price_range。 |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `na` | 标签的背景颜色。 |
| `style` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/LabelStyle">LabelStyle</a></code> | `LabelStyle.Down` | 标签的样式。 |
| `text_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `na` | 标签文本的颜色。 |
| `size` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Size">Size</a></code> | `Size.Normal` | 标签的大小作为命名常量。 |
| `text_align` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextHAlign">TextHAlign</a></code> | `TextHAlign.Center` | 文本对齐方式：TextHAlign.Center、TextHAlign.Left 或 TextHAlign.Right。 |
| `tooltip` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 将鼠标悬停在标签上时的工具提示文本。 |
| `text_font_family` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/FontFamily">FontFamily</a></code> | `FontFamily.Default` | 标签文本的字体系列。 |
| `force_overlay` | <code>const&nbsp;bool</code> | `false` | 如果为 true，则标签将呈现在顶部。 |
| `text_formatting` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextFormat">TextFormat</a></code> | `TextFormat.NONE` | 文本格式选项。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Label">Label</a></code>

在图表上创建标签对象。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `x` | <code>series&nbsp;int</code> |  | x 坐标（bar 索引或 UNIX 时间）。 |
| `y` | <code>series&nbsp;float</code> |  | y 坐标（价格）。 |
| `text` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `""` | 要在标签上显示的文本。 |
| `xloc` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/XLoc">XLoc</a></code> | `XLoc.BarIndex` | x 位置类型：xloc.bar_index 或 xloc.bar_time。 |
| `yloc` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/YLoc">YLoc</a></code> | `YLoc.Price` | y 位置类型：yloc.price 或 yloc.price_range。 |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `na` | 标签的背景颜色。 |
| `style` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/LabelStyle">LabelStyle</a></code> | `LabelStyle.Down` | 标签的样式。 |
| `text_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `na` | 标签文本的颜色。 |
| `size` | <code>series&nbsp;int</code> | `0` | 标签的大小为整数值。 |
| `text_align` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextHAlign">TextHAlign</a></code> | `TextHAlign.Center` | 文本对齐方式：TextHAlign.Center、TextHAlign.Left 或 TextHAlign.Right。 |
| `tooltip` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 将鼠标悬停在标签上时的工具提示文本。 |
| `text_font_family` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/FontFamily">FontFamily</a></code> | `FontFamily.Default` | 标签文本的字体系列。 |
| `force_overlay` | <code>series&nbsp;bool</code> | `false` | 如果为 true，则标签将呈现在顶部。 |
| `text_formatting` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextFormat">TextFormat</a></code> | `TextFormat.NONE` | 文本格式选项。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Label">Label</a></code>

## 静态属性

### all {#all}

**类型:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Label">Label</a>&gt;</code>

返回一个数组，其中填充了脚本绘制的所有当前标签。

## 方法

### copy {#copy}

```navi
Label.copy(id: series Label): series Label
```

创建指定标签的拷贝并返回其 id。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Label">Label</a></code> |  | 要复制的标签。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Label">Label</a></code>

---

### delete {#delete}

```navi
Label.delete(id: series Label)
```

从图表中删除指定标签。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Label">Label</a></code> |  | 要删除的标签。 |

---

### get_text {#get_text}

```navi
Label.get_text(id: series Label): series String
```

返回此标签的文本。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Label">Label</a></code> |  | 从中获取文本的标签。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

---

### get_x {#get_x}

```navi
Label.get_x(id: series Label): series int
```

返回此标签位置的 UNIX 时间或 bar 索引（取决于最后设置的 xloc 值）。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Label">Label</a></code> |  | 从中获取 x 坐标的标签。 |

**返回:** <code>series&nbsp;int</code>

---

### get_y {#get_y}

```navi
Label.get_y(id: series Label): series float
```

返回该标签位置的价格。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Label">Label</a></code> |  | 从中获取 y 坐标的标签。 |

**返回:** <code>series&nbsp;float</code>

---

### set_color {#set_color}

```navi
Label.set_color(id: series Label, color: series Color)
```

设置此标签的颜色。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Label">Label</a></code> |  | 要修改的标签。 |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> |  | 新的背景颜色。 |

---

### set_point {#set_point}

```navi
Label.set_point(id: series Label, point: series chart.Point)
```

使用 `chart.point` 对象设置此标签的位置。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Label">Label</a></code> |  | 要修改的标签。 |
| `point` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/chart/Point">chart.Point</a></code> |  | 指定新位置的 `chart.point` 对象。 |

---

### set_size {#set_size}

**Overloads**

```navi
Label.set_size(id: series Label, size: series int)
Label.set_size(id: series Label, size: series Size)
```

设置此标签的箭头和文本大小。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Label">Label</a></code> |  | 要修改的标签。 |
| `size` | <code>series&nbsp;int</code> |  | 新大小为整数值。 |

设置此标签的箭头和文本大小。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Label">Label</a></code> |  | 要修改的标签。 |
| `size` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Size">Size</a></code> |  | 新大小作为命名常量（Size.Tiny、Size.Small、Size.Normal、Size.Large、Size.Huge）。 |

---

### set_style {#set_style}

```navi
Label.set_style(id: series Label, style: series LabelStyle)
```

设置此标签的样式。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Label">Label</a></code> |  | 要修改的标签。 |
| `style` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/LabelStyle">LabelStyle</a></code> |  | 新标签样式不变。 |

---

### set_text {#set_text}

```navi
Label.set_text(id: series Label, text: series String)
```

设置此标签的文本。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Label">Label</a></code> |  | 要修改的标签。 |
| `text` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 要显示的新文本。 |

---

### set_text_align {#set_text_align}

```navi
Label.set_text_align(id: series Label, text_align: series TextHAlign)
```

设置此标签的文本对齐方式。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Label">Label</a></code> |  | 要修改的标签。 |
| `text_align` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextHAlign">TextHAlign</a></code> |  | 文本对齐方式：TextHAlign.Center、TextHAlign.Left 或 TextHAlign.Right。 |

---

### set_text_color {#set_text_color}

```navi
Label.set_text_color(id: series Label, text_color: series Color)
```

设置此标签的文本颜色。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Label">Label</a></code> |  | 要修改的标签。 |
| `text_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> |  | 新的文本颜色。 |

---

### set_text_font_family {#set_text_font_family}

```navi
Label.set_text_font_family(
    id: series Label,
    text_font_family: series FontFamily
  )
```

设置此标签的字体系列。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Label">Label</a></code> |  | 要修改的标签。 |
| `text_font_family` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/FontFamily">FontFamily</a></code> |  | 字体系列：FontFamily.Default 或 FontFamily.Monospace。 |

---

### set_text_formatting {#set_text_formatting}

```navi
Label.set_text_formatting(id: series Label, text_formatting: const TextFormat)
```

设置此标签的文本格式。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Label">Label</a></code> |  | 要修改的标签。 |
| `text_formatting` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextFormat">TextFormat</a></code> |  | 文本格式选项。 |

---

### set_tooltip {#set_tooltip}

```navi
Label.set_tooltip(id: series Label, tooltip: series String)
```

设置此标签的工具提示文本。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Label">Label</a></code> |  | 要修改的标签。 |
| `tooltip` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 新的工具提示文本。 |

---

### set_x {#set_x}

```navi
Label.set_x(id: series Label, x: series int)
```

设置此标签位置的 UNIX 时间或 bar 索引（取决于最后设置的 xloc 值）。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Label">Label</a></code> |  | 要修改的标签。 |
| `x` | <code>series&nbsp;int</code> |  | 新的 x 坐标（bar 索引或 UNIX 时间）。 |

---

### set_xloc {#set_xloc}

```navi
Label.set_xloc(id: series Label, xloc: series XLoc)
```

设置此标签的 x 位置类型。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Label">Label</a></code> |  | 要修改的标签。 |
| `xloc` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/XLoc">XLoc</a></code> |  | x 位置类型：xloc.bar_index 或 xloc.bar_time。 |

---

### set_xy {#set_xy}

```navi
Label.set_xy(id: series Label, x: series int, y: series float)
```

设置此标签位置的 x 和 y 坐标。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Label">Label</a></code> |  | 要修改的标签。 |
| `x` | <code>series&nbsp;int</code> |  | 新的 x 坐标（bar 索引或 UNIX 时间）。 |
| `y` | <code>series&nbsp;float</code> |  | 新的 y 坐标（价格）。 |

---

### set_y {#set_y}

```navi
Label.set_y(id: series Label, y: series float)
```

设置该标签位置的价格。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Label">Label</a></code> |  | 要修改的标签。 |
| `y` | <code>series&nbsp;float</code> |  | 新的 y 坐标（价格）。 |

---

### set_yloc {#set_yloc}

```navi
Label.set_yloc(id: series Label, yloc: series YLoc)
```

设置此标签的 y 位置类型。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Label">Label</a></code> |  | 要修改的标签。 |
| `yloc` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/YLoc">YLoc</a></code> |  | y 位置类型：yloc.price 或 yloc.price_range。 |
