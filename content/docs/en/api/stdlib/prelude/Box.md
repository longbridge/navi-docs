---
title: "Box"
---


# Box

Handle for a box drawing.

## Static Methods

### new {#new}

**Overloads**

```navi
Box.new(left: series int, top: series float, right: series int, bottom: series float, border_color: series Color = Color.BLUE, border_width: series int = 1, border_style: series LineStyle = LineStyle.Solid, extend: series Extend = Extend.None, xloc: series XLoc = XLoc.BarIndex, bg_color: series Color = Color.BLUE, text: series String = "", text_size: series int = 0, text_color: series Color = Color.BLACK, text_halign: series TextHAlign = TextHAlign.Right, text_valign: series TextVAlign = TextVAlign.Center, text_wrap: series TextWrap = TextWrap.None, text_font_family: series FontFamily = FontFamily.Default, force_overlay: const bool = false, text_formatting: const TextFormat = TextFormat.NONE): series Box
Box.new(left: series int, top: series float, right: series int, bottom: series float, border_color: series Color = Color.BLUE, border_width: series int = 1, border_style: series LineStyle = LineStyle.Solid, extend: series Extend = Extend.None, xloc: series XLoc = XLoc.BarIndex, bg_color: series Color = Color.BLUE, text: series String = "", text_size: series Size = Size.Auto, text_color: series Color = Color.BLACK, text_halign: series TextHAlign = TextHAlign.Right, text_valign: series TextVAlign = TextVAlign.Center, text_wrap: series TextWrap = TextWrap.None, text_font_family: series FontFamily = FontFamily.Default, force_overlay: const bool = false, text_formatting: const TextFormat = TextFormat.NONE): series Box
Box.new(top_left: series chart.Point, bottom_right: series chart.Point, border_color: series Color = Color.BLUE, border_width: series int = 1, border_style: series LineStyle = LineStyle.Solid, extend: series Extend = Extend.None, xloc: series XLoc = XLoc.BarIndex, bg_color: series Color = Color.BLUE, text: series String = "", text_size: series Size = Size.Auto, text_color: series Color = Color.BLACK, text_halign: series TextHAlign = TextHAlign.Right, text_valign: series TextVAlign = TextVAlign.Center, text_wrap: series TextWrap = TextWrap.None, text_font_family: series FontFamily = FontFamily.Default, force_overlay: const bool = false, text_formatting: const TextFormat = TextFormat.NONE): series Box
Box.new(top_left: series chart.Point, bottom_right: series chart.Point, border_color: series Color = Color.BLUE, border_width: series int = 1, border_style: series LineStyle = LineStyle.Solid, extend: series Extend = Extend.None, xloc: series XLoc = XLoc.BarIndex, bg_color: series Color = Color.BLUE, text: series String = "", text_size: series Size = Size.Auto, text_color: series Color = Color.BLACK, text_halign: series TextHAlign = TextHAlign.Right, text_valign: series TextVAlign = TextVAlign.Center, text_wrap: series TextWrap = TextWrap.None, text_font_family: series FontFamily = FontFamily.Default, force_overlay: const bool = false, text_formatting: const TextFormat = TextFormat.NONE): series Box
```

Creates a new box object.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `left` | <code>series&nbsp;int</code> |  | The left coordinate (bar index or UNIX time). |
| `top` | <code>series&nbsp;float</code> |  | The top coordinate (price). |
| `right` | <code>series&nbsp;int</code> |  | The right coordinate (bar index or UNIX time). |
| `bottom` | <code>series&nbsp;float</code> |  | The bottom coordinate (price). |
| `border_color` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | The border color of the box. |
| `border_width` | <code>series&nbsp;int</code> | `1` | The border width in pixels. |
| `border_style` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/LineStyle">LineStyle</a></code> | `LineStyle.Solid` | The border line style. |
| `extend` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Extend">Extend</a></code> | `Extend.None` | The extension mode: Extend.None, Extend.Left, Extend.Right, or Extend.Both. |
| `xloc` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/XLoc">XLoc</a></code> | `XLoc.BarIndex` | The x-location type: XLoc.BarIndex or XLoc.BarTime. |
| `bg_color` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | The background color of the box. |
| `text` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `""` | The text content of the box. |
| `text_size` | <code>series&nbsp;int</code> | `0` | The text size in pixels. |
| `text_color` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code> | `Color.BLACK` | The text color. |
| `text_halign` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/TextHAlign">TextHAlign</a></code> | `TextHAlign.Right` | The horizontal text alignment. |
| `text_valign` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/TextVAlign">TextVAlign</a></code> | `TextVAlign.Center` | The vertical text alignment. |
| `text_wrap` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/TextWrap">TextWrap</a></code> | `TextWrap.None` | The text wrapping mode. |
| `text_font_family` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/FontFamily">FontFamily</a></code> | `FontFamily.Default` | The font family for the text. |
| `force_overlay` | <code>const&nbsp;bool</code> | `false` | If true, the box is rendered on top. |
| `text_formatting` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/TextFormat">TextFormat</a></code> | `TextFormat.NONE` | The text formatting options. |

**Returns:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Box">Box</a></code>

Creates a new box object.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `left` | <code>series&nbsp;int</code> |  | The left coordinate (bar index or UNIX time). |
| `top` | <code>series&nbsp;float</code> |  | The top coordinate (price). |
| `right` | <code>series&nbsp;int</code> |  | The right coordinate (bar index or UNIX time). |
| `bottom` | <code>series&nbsp;float</code> |  | The bottom coordinate (price). |
| `border_color` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | The border color of the box. |
| `border_width` | <code>series&nbsp;int</code> | `1` | The border width in pixels. |
| `border_style` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/LineStyle">LineStyle</a></code> | `LineStyle.Solid` | The border line style. |
| `extend` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Extend">Extend</a></code> | `Extend.None` | The extension mode: Extend.None, Extend.Left, Extend.Right, or Extend.Both. |
| `xloc` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/XLoc">XLoc</a></code> | `XLoc.BarIndex` | The x-location type: XLoc.BarIndex or XLoc.BarTime. |
| `bg_color` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | The background color of the box. |
| `text` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `""` | The text content of the box. |
| `text_size` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Size">Size</a></code> | `Size.Auto` | The text size as a named constant. |
| `text_color` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code> | `Color.BLACK` | The text color. |
| `text_halign` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/TextHAlign">TextHAlign</a></code> | `TextHAlign.Right` | The horizontal text alignment. |
| `text_valign` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/TextVAlign">TextVAlign</a></code> | `TextVAlign.Center` | The vertical text alignment. |
| `text_wrap` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/TextWrap">TextWrap</a></code> | `TextWrap.None` | The text wrapping mode. |
| `text_font_family` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/FontFamily">FontFamily</a></code> | `FontFamily.Default` | The font family for the text. |
| `force_overlay` | <code>const&nbsp;bool</code> | `false` | If true, the box is rendered on top. |
| `text_formatting` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/TextFormat">TextFormat</a></code> | `TextFormat.NONE` | The text formatting options. |

**Returns:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Box">Box</a></code>

Creates a new box object.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `top_left` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/chart/Point">chart.Point</a></code> |  | The <a class="stdlib-ref" data-key="chart::Point" href="/api/stdlib/chart/Point">chart.Point</a> object specifying the top-left corner. |
| `bottom_right` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/chart/Point">chart.Point</a></code> |  | The <a class="stdlib-ref" data-key="chart::Point" href="/api/stdlib/chart/Point">chart.Point</a> object specifying the bottom-right corner. |
| `border_color` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | The border color of the box. |
| `border_width` | <code>series&nbsp;int</code> | `1` | The border width in pixels. |
| `border_style` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/LineStyle">LineStyle</a></code> | `LineStyle.Solid` | The border line style. |
| `extend` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Extend">Extend</a></code> | `Extend.None` | The extension mode: Extend.None, Extend.Left, Extend.Right, or Extend.Both. |
| `xloc` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/XLoc">XLoc</a></code> | `XLoc.BarIndex` | The x-location type: XLoc.BarIndex or XLoc.BarTime. |
| `bg_color` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | The background color of the box. |
| `text` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `""` | The text content of the box. |
| `text_size` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Size">Size</a></code> | `Size.Auto` | The text size in pixels. |
| `text_color` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code> | `Color.BLACK` | The text color. |
| `text_halign` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/TextHAlign">TextHAlign</a></code> | `TextHAlign.Right` | The horizontal text alignment. |
| `text_valign` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/TextVAlign">TextVAlign</a></code> | `TextVAlign.Center` | The vertical text alignment. |
| `text_wrap` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/TextWrap">TextWrap</a></code> | `TextWrap.None` | The text wrapping mode. |
| `text_font_family` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/FontFamily">FontFamily</a></code> | `FontFamily.Default` | The font family for the text. |
| `force_overlay` | <code>const&nbsp;bool</code> | `false` | If true, the box is rendered on top. |
| `text_formatting` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/TextFormat">TextFormat</a></code> | `TextFormat.NONE` | The text formatting options. |

**Returns:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Box">Box</a></code>

Creates a new box object.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `top_left` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/chart/Point">chart.Point</a></code> |  | The <a class="stdlib-ref" data-key="chart::Point" href="/api/stdlib/chart/Point">chart.Point</a> object specifying the top-left corner. |
| `bottom_right` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/chart/Point">chart.Point</a></code> |  | The <a class="stdlib-ref" data-key="chart::Point" href="/api/stdlib/chart/Point">chart.Point</a> object specifying the bottom-right corner. |
| `border_color` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | The border color of the box. |
| `border_width` | <code>series&nbsp;int</code> | `1` | The border width in pixels. |
| `border_style` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/LineStyle">LineStyle</a></code> | `LineStyle.Solid` | The border line style. |
| `extend` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Extend">Extend</a></code> | `Extend.None` | The extension mode: Extend.None, Extend.Left, Extend.Right, or Extend.Both. |
| `xloc` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/XLoc">XLoc</a></code> | `XLoc.BarIndex` | The x-location type: XLoc.BarIndex or XLoc.BarTime. |
| `bg_color` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | The background color of the box. |
| `text` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `""` | The text content of the box. |
| `text_size` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Size">Size</a></code> | `Size.Auto` | The text size as a named constant. |
| `text_color` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code> | `Color.BLACK` | The text color. |
| `text_halign` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/TextHAlign">TextHAlign</a></code> | `TextHAlign.Right` | The horizontal text alignment. |
| `text_valign` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/TextVAlign">TextVAlign</a></code> | `TextVAlign.Center` | The vertical text alignment. |
| `text_wrap` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/TextWrap">TextWrap</a></code> | `TextWrap.None` | The text wrapping mode. |
| `text_font_family` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/FontFamily">FontFamily</a></code> | `FontFamily.Default` | The font family for the text. |
| `force_overlay` | <code>const&nbsp;bool</code> | `false` | If true, the box is rendered on top. |
| `text_formatting` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/TextFormat">TextFormat</a></code> | `TextFormat.NONE` | The text formatting options. |

**Returns:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Box">Box</a></code>

## Static Properties

### all {#all}

**Type:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/api/stdlib/prelude/Box">Box</a>&gt;</code>

Returns an array filled with all the current boxes drawn by the script.

## Methods

### copy {#copy}

```navi
Box.copy(id: series Box): series Box
```

Creates a copy of the specified box and returns its id.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Box">Box</a></code> |  | The box to copy. |

**Returns:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Box">Box</a></code>

---

### delete {#delete}

```navi
Box.delete(id: series Box)
```

Deletes the specified box from the chart.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Box">Box</a></code> |  | The box to delete. |

---

### get_bottom {#get_bottom}

```navi
Box.get_bottom(id: series Box): series float
```

Returns the price value of the bottom border of the box.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Box">Box</a></code> |  | The box to get the bottom coordinate from. |

**Returns:** <code>series&nbsp;float</code>

---

### get_left {#get_left}

```navi
Box.get_left(id: series Box): series int
```

Returns the bar index or the UNIX time (depending on the last value used for 'xloc') of the left border of the box.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Box">Box</a></code> |  | The box to get the left coordinate from. |

**Returns:** <code>series&nbsp;int</code>

---

### get_right {#get_right}

```navi
Box.get_right(id: series Box): series int
```

Returns the bar index or the UNIX time (depending on the last value used for 'xloc') of the right border of the box.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Box">Box</a></code> |  | The box to get the right coordinate from. |

**Returns:** <code>series&nbsp;int</code>

---

### get_top {#get_top}

```navi
Box.get_top(id: series Box): series float
```

Returns the price value of the top border of the box.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Box">Box</a></code> |  | The box to get the top coordinate from. |

**Returns:** <code>series&nbsp;float</code>

---

### set_bg_color {#set_bg_color}

```navi
Box.set_bg_color(id: series Box, color: series Color)
```

Sets the background color of the box.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Box">Box</a></code> |  | The box to modify. |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code> |  | The new background color. |

---

### set_border_color {#set_border_color}

```navi
Box.set_border_color(id: series Box, color: series Color)
```

Sets the border color of the box.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Box">Box</a></code> |  | The box to modify. |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code> |  | The new border color. |

---

### set_border_style {#set_border_style}

```navi
Box.set_border_style(id: series Box, style: series LineStyle)
```

Sets the border style of the box.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Box">Box</a></code> |  | The box to modify. |
| `style` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/LineStyle">LineStyle</a></code> |  | The new border line style. |

---

### set_border_width {#set_border_width}

```navi
Box.set_border_width(id: series Box, width: series int)
```

Sets the border width of the box.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Box">Box</a></code> |  | The box to modify. |
| `width` | <code>series&nbsp;int</code> |  | The new border width in pixels. |

---

### set_bottom {#set_bottom}

```navi
Box.set_bottom(id: series Box, bottom: series float)
```

Sets the bottom coordinate of the box.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Box">Box</a></code> |  | The box to modify. |
| `bottom` | <code>series&nbsp;float</code> |  | The new bottom coordinate (price). |

---

### set_bottom_right_point {#set_bottom_right_point}

```navi
Box.set_bottom_right_point(id: series Box, point: series chart.Point)
```

Sets the bottom-right corner of the box using a `chart.Point` object.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Box">Box</a></code> |  | The box to modify. |
| `point` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/chart/Point">chart.Point</a></code> |  | The `chart.Point` object specifying the new bottom-right corner. |

---

### set_extend {#set_extend}

```navi
Box.set_extend(id: series Box, extend: series Extend)
```

Sets extending type of the border of this box object.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Box">Box</a></code> |  | The box to modify. |
| `extend` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Extend">Extend</a></code> |  | The extension mode: Extend.None, Extend.Left, Extend.Right, or Extend.Both. |

---

### set_left {#set_left}

```navi
Box.set_left(id: series Box, left: series int)
```

Sets the left coordinate of the box.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Box">Box</a></code> |  | The box to modify. |
| `left` | <code>series&nbsp;int</code> |  | The new left coordinate (bar index or UNIX time). |

---

### set_left_top {#set_left_top}

```navi
Box.set_left_top(id: series Box, left: series int, top: series float)
```

Sets the left and top coordinates of the box.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Box">Box</a></code> |  | The box to modify. |
| `left` | <code>series&nbsp;int</code> |  | The new left coordinate (bar index or UNIX time). |
| `top` | <code>series&nbsp;float</code> |  | The new top coordinate (price). |

---

### set_right {#set_right}

```navi
Box.set_right(id: series Box, right: series int)
```

Sets the right coordinate of the box.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Box">Box</a></code> |  | The box to modify. |
| `right` | <code>series&nbsp;int</code> |  | The new right coordinate (bar index or UNIX time). |

---

### set_right_bottom {#set_right_bottom}

```navi
Box.set_right_bottom(id: series Box, right: series int, bottom: series float)
```

Sets the right and bottom coordinates of the box.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Box">Box</a></code> |  | The box to modify. |
| `right` | <code>series&nbsp;int</code> |  | The new right coordinate (bar index or UNIX time). |
| `bottom` | <code>series&nbsp;float</code> |  | The new bottom coordinate (price). |

---

### set_text {#set_text}

```navi
Box.set_text(id: series Box, text: series String)
```

Sets the text size of the box.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Box">Box</a></code> |  | The box to modify. |
| `text` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The new text content. |

---

### set_text_color {#set_text_color}

```navi
Box.set_text_color(id: series Box, text_color: series Color)
```

Sets the text color of the box.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Box">Box</a></code> |  | The box to modify. |
| `text_color` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code> |  | The new text color. |

---

### set_text_font_family {#set_text_font_family}

```navi
Box.set_text_font_family(id: series Box, font_family: series String)
```

Sets the font family of the box text.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Box">Box</a></code> |  | The box to modify. |
| `font_family` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The font family: FontFamily.Default or FontFamily.Monospace. |

---

### set_text_formatting {#set_text_formatting}

```navi
Box.set_text_formatting(id: series Box, text_formatting: const TextFormat)
```

Sets the text formatting of the box.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Box">Box</a></code> |  | The box to modify. |
| `text_formatting` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/TextFormat">TextFormat</a></code> |  | The text formatting options. |

---

### set_text_halign {#set_text_halign}

```navi
Box.set_text_halign(id: series Box, text_halign: series TextHAlign)
```

Sets the horizontal alignment of the box text.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Box">Box</a></code> |  | The box to modify. |
| `text_halign` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/TextHAlign">TextHAlign</a></code> |  | The horizontal text alignment: TextHAlign.Left, TextHAlign.Center, or TextHAlign.Right. |

---

### set_text_size {#set_text_size}

**Overloads**

```navi
Box.set_text_size(id: series Box, text_size: series int)
Box.set_text_size(id: series Box, text_size: series Size)
```

Sets the text size of the box.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Box">Box</a></code> |  | The box to modify. |
| `text_size` | <code>series&nbsp;int</code> |  | The new text size in pixels. |

Sets the text size of the box.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Box">Box</a></code> |  | The box to modify. |
| `text_size` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Size">Size</a></code> |  | The new text size as a named constant (Size.Tiny, Size.Small, Size.Normal, Size.Large, Size.Huge). |

---

### set_text_valign {#set_text_valign}

```navi
Box.set_text_valign(id: series Box, text_valign: series TextVAlign)
```

Sets the vertical alignment of the box text.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Box">Box</a></code> |  | The box to modify. |
| `text_valign` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/TextVAlign">TextVAlign</a></code> |  | The vertical text alignment: TextVAlign.Top, TextHAlign.Center, or TextVAlign.Bottom. |

---

### set_text_wrap {#set_text_wrap}

```navi
Box.set_text_wrap(id: series Box, text_wrap: series TextWrap)
```

Sets the text wrapping mode of the box.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Box">Box</a></code> |  | The box to modify. |
| `text_wrap` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/TextWrap">TextWrap</a></code> |  | The text wrapping mode: TextWrap.None or TextWrap.Auto. |

---

### set_top {#set_top}

```navi
Box.set_top(id: series Box, top: series float)
```

Sets the top coordinate of the box.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Box">Box</a></code> |  | The box to modify. |
| `top` | <code>series&nbsp;float</code> |  | The new top coordinate (price). |

---

### set_top_left_point {#set_top_left_point}

```navi
Box.set_top_left_point(id: series Box, point: series chart.Point)
```

Sets the top-left corner of the box using a `chart.Point` object.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Box">Box</a></code> |  | The box to modify. |
| `point` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/chart/Point">chart.Point</a></code> |  | The `chart.Point` object specifying the new top-left corner. |

---

### set_xloc {#set_xloc}

```navi
Box.set_xloc(
    id: series Box,
    left: series int,
    right: series int,
    xloc: series XLoc
  )
```

Sets the left and right borders of a box and updates its xloc property.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Box">Box</a></code> |  | The box to modify. |
| `left` | <code>series&nbsp;int</code> |  | The new left coordinate (bar index or UNIX time). |
| `right` | <code>series&nbsp;int</code> |  | The new right coordinate (bar index or UNIX time). |
| `xloc` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/XLoc">XLoc</a></code> |  | The x-location type: XLoc.BarIndex or XLoc.BarTime. |
