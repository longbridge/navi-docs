---
title: "Box"
---


# Box

方框圖的句柄。

## 靜態方法

### new {#new}

**Overloads**

```navi
Box.new(left: series int, top: series float, right: series int, bottom: series float, border_color: series Color = Color.BLUE, border_width: series int = 1, border_style: series LineStyle = LineStyle.Solid, extend: series Extend = Extend.None, xloc: series XLoc = XLoc.BarIndex, bg_color: series Color = Color.BLUE, text: series String = "", text_size: series int = 0, text_color: series Color = Color.BLACK, text_halign: series TextHAlign = TextHAlign.Right, text_valign: series TextVAlign = TextVAlign.Center, text_wrap: series TextWrap = TextWrap.None, text_font_family: series FontFamily = FontFamily.Default, force_overlay: const bool = false, text_formatting: const TextFormat = TextFormat.NONE): series Box
Box.new(left: series int, top: series float, right: series int, bottom: series float, border_color: series Color = Color.BLUE, border_width: series int = 1, border_style: series LineStyle = LineStyle.Solid, extend: series Extend = Extend.None, xloc: series XLoc = XLoc.BarIndex, bg_color: series Color = Color.BLUE, text: series String = "", text_size: series Size = Size.Auto, text_color: series Color = Color.BLACK, text_halign: series TextHAlign = TextHAlign.Right, text_valign: series TextVAlign = TextVAlign.Center, text_wrap: series TextWrap = TextWrap.None, text_font_family: series FontFamily = FontFamily.Default, force_overlay: const bool = false, text_formatting: const TextFormat = TextFormat.NONE): series Box
Box.new(top_left: series chart.Point, bottom_right: series chart.Point, border_color: series Color = Color.BLUE, border_width: series int = 1, border_style: series LineStyle = LineStyle.Solid, extend: series Extend = Extend.None, xloc: series XLoc = XLoc.BarIndex, bg_color: series Color = Color.BLUE, text: series String = "", text_size: series Size = Size.Auto, text_color: series Color = Color.BLACK, text_halign: series TextHAlign = TextHAlign.Right, text_valign: series TextVAlign = TextVAlign.Center, text_wrap: series TextWrap = TextWrap.None, text_font_family: series FontFamily = FontFamily.Default, force_overlay: const bool = false, text_formatting: const TextFormat = TextFormat.NONE): series Box
Box.new(top_left: series chart.Point, bottom_right: series chart.Point, border_color: series Color = Color.BLUE, border_width: series int = 1, border_style: series LineStyle = LineStyle.Solid, extend: series Extend = Extend.None, xloc: series XLoc = XLoc.BarIndex, bg_color: series Color = Color.BLUE, text: series String = "", text_size: series Size = Size.Auto, text_color: series Color = Color.BLACK, text_halign: series TextHAlign = TextHAlign.Right, text_valign: series TextVAlign = TextVAlign.Center, text_wrap: series TextWrap = TextWrap.None, text_font_family: series FontFamily = FontFamily.Default, force_overlay: const bool = false, text_formatting: const TextFormat = TextFormat.NONE): series Box
```

創建一個新的盒子對象。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `left` | <code>series&nbsp;int</code> |  | 左座標（bar 索引或 UNIX 時間）。 |
| `top` | <code>series&nbsp;float</code> |  | 頂部座標（價格）。 |
| `right` | <code>series&nbsp;int</code> |  | 右座標（bar 索引或 UNIX 時間）。 |
| `bottom` | <code>series&nbsp;float</code> |  | 底部座標（價格）。 |
| `border_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 框的邊框顏色。 |
| `border_width` | <code>series&nbsp;int</code> | `1` | 邊框寬度（以像素為單位）。 |
| `border_style` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/LineStyle">LineStyle</a></code> | `LineStyle.Solid` | 邊框線樣式。 |
| `extend` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Extend">Extend</a></code> | `Extend.None` | 擴展模式：extend.none、extend.left、extend.right或extend.both。 |
| `xloc` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/XLoc">XLoc</a></code> | `XLoc.BarIndex` | x 位置類型：xloc.bar_index 或 xloc.bar_time。 |
| `bg_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 框的背景顏色。 |
| `text` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `""` | 框的文本內容。 |
| `text_size` | <code>series&nbsp;int</code> | `0` | 文本大小（以像素為單位）。 |
| `text_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `Color.BLACK` | 文字顏色。 |
| `text_halign` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextHAlign">TextHAlign</a></code> | `TextHAlign.Right` | 水平文本對齊方式。 |
| `text_valign` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextVAlign">TextVAlign</a></code> | `TextVAlign.Center` | 垂直文本對齊方式。 |
| `text_wrap` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextWrap">TextWrap</a></code> | `TextWrap.None` | 文本換行模式。 |
| `text_font_family` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/FontFamily">FontFamily</a></code> | `FontFamily.Default` | 文本的字體系列。 |
| `force_overlay` | <code>const&nbsp;bool</code> | `false` | 如果為 true，則該框將呈現在頂部。 |
| `text_formatting` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextFormat">TextFormat</a></code> | `TextFormat.NONE` | 文本格式選項。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Box">Box</a></code>

創建一個新的盒子對象。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `left` | <code>series&nbsp;int</code> |  | 左座標（bar 索引或 UNIX 時間）。 |
| `top` | <code>series&nbsp;float</code> |  | 頂部座標（價格）。 |
| `right` | <code>series&nbsp;int</code> |  | 右座標（bar 索引或 UNIX 時間）。 |
| `bottom` | <code>series&nbsp;float</code> |  | 底部座標（價格）。 |
| `border_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 框的邊框顏色。 |
| `border_width` | <code>series&nbsp;int</code> | `1` | 邊框寬度（以像素為單位）。 |
| `border_style` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/LineStyle">LineStyle</a></code> | `LineStyle.Solid` | 邊框線樣式。 |
| `extend` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Extend">Extend</a></code> | `Extend.None` | 擴展模式：extend.none、extend.left、extend.right或extend.both。 |
| `xloc` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/XLoc">XLoc</a></code> | `XLoc.BarIndex` | x 位置類型：xloc.bar_index 或 xloc.bar_time。 |
| `bg_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 框的背景顏色。 |
| `text` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `""` | 框的文本內容。 |
| `text_size` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Size">Size</a></code> | `Size.Auto` | 文本大小作為命名常量。 |
| `text_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `Color.BLACK` | 文字顏色。 |
| `text_halign` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextHAlign">TextHAlign</a></code> | `TextHAlign.Right` | 水平文本對齊方式。 |
| `text_valign` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextVAlign">TextVAlign</a></code> | `TextVAlign.Center` | 垂直文本對齊方式。 |
| `text_wrap` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextWrap">TextWrap</a></code> | `TextWrap.None` | 文本換行模式。 |
| `text_font_family` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/FontFamily">FontFamily</a></code> | `FontFamily.Default` | 文本的字體系列。 |
| `force_overlay` | <code>const&nbsp;bool</code> | `false` | 如果為 true，則該框將呈現在頂部。 |
| `text_formatting` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextFormat">TextFormat</a></code> | `TextFormat.NONE` | 文本格式選項。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Box">Box</a></code>

創建一個新的盒子對象。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `top_left` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/chart/Point">chart.Point</a></code> |  | 指定左上角的 <code>chart.point</code> 對象。 |
| `bottom_right` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/chart/Point">chart.Point</a></code> |  | 指定右下角的 <code>chart.point</code> 對象。 |
| `border_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 框的邊框顏色。 |
| `border_width` | <code>series&nbsp;int</code> | `1` | 邊框寬度（以像素為單位）。 |
| `border_style` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/LineStyle">LineStyle</a></code> | `LineStyle.Solid` | 邊框線樣式。 |
| `extend` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Extend">Extend</a></code> | `Extend.None` | 擴展模式：extend.none、extend.left、extend.right或extend.both。 |
| `xloc` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/XLoc">XLoc</a></code> | `XLoc.BarIndex` | x 位置類型：xloc.bar_index 或 xloc.bar_time。 |
| `bg_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 框的背景顏色。 |
| `text` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `""` | 框的文本內容。 |
| `text_size` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Size">Size</a></code> | `Size.Auto` | 文本大小（以像素為單位）。 |
| `text_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `Color.BLACK` | 文字顏色。 |
| `text_halign` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextHAlign">TextHAlign</a></code> | `TextHAlign.Right` | 水平文本對齊方式。 |
| `text_valign` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextVAlign">TextVAlign</a></code> | `TextVAlign.Center` | 垂直文本對齊方式。 |
| `text_wrap` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextWrap">TextWrap</a></code> | `TextWrap.None` | 文本換行模式。 |
| `text_font_family` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/FontFamily">FontFamily</a></code> | `FontFamily.Default` | 文本的字體系列。 |
| `force_overlay` | <code>const&nbsp;bool</code> | `false` | 如果為 true，則該框將呈現在頂部。 |
| `text_formatting` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextFormat">TextFormat</a></code> | `TextFormat.NONE` | 文本格式選項。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Box">Box</a></code>

創建一個新的盒子對象。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `top_left` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/chart/Point">chart.Point</a></code> |  | 指定左上角的 <code>chart.point</code> 對象。 |
| `bottom_right` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/chart/Point">chart.Point</a></code> |  | 指定右下角的 <code>chart.point</code> 對象。 |
| `border_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 框的邊框顏色。 |
| `border_width` | <code>series&nbsp;int</code> | `1` | 邊框寬度（以像素為單位）。 |
| `border_style` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/LineStyle">LineStyle</a></code> | `LineStyle.Solid` | 邊框線樣式。 |
| `extend` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Extend">Extend</a></code> | `Extend.None` | 擴展模式：extend.none、extend.left、extend.right或extend.both。 |
| `xloc` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/XLoc">XLoc</a></code> | `XLoc.BarIndex` | x 位置類型：xloc.bar_index 或 xloc.bar_time。 |
| `bg_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 框的背景顏色。 |
| `text` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `""` | 框的文本內容。 |
| `text_size` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Size">Size</a></code> | `Size.Auto` | 文本大小作為命名常量。 |
| `text_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `Color.BLACK` | 文字顏色。 |
| `text_halign` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextHAlign">TextHAlign</a></code> | `TextHAlign.Right` | 水平文本對齊方式。 |
| `text_valign` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextVAlign">TextVAlign</a></code> | `TextVAlign.Center` | 垂直文本對齊方式。 |
| `text_wrap` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextWrap">TextWrap</a></code> | `TextWrap.None` | 文本換行模式。 |
| `text_font_family` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/FontFamily">FontFamily</a></code> | `FontFamily.Default` | 文本的字體系列。 |
| `force_overlay` | <code>const&nbsp;bool</code> | `false` | 如果為 true，則該框將呈現在頂部。 |
| `text_formatting` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextFormat">TextFormat</a></code> | `TextFormat.NONE` | 文本格式選項。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Box">Box</a></code>

## 靜態屬性

### all {#all}

**類型:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Box">Box</a>&gt;</code>

傳回一個陣列，其中填充了腳本繪製的所有當前框。

## 方法

### copy {#copy}

```navi
Box.copy(id: series Box): series Box
```

創建指定框的複本並傳回其 id。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Box">Box</a></code> |  | 要複製的框。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Box">Box</a></code>

---

### delete {#delete}

```navi
Box.delete(id: series Box)
```

從圖表中刪除指定的框。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Box">Box</a></code> |  | 要刪除的框。 |

---

### get_bottom {#get_bottom}

```navi
Box.get_bottom(id: series Box): series float
```

傳回盒子底部邊框的價格值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Box">Box</a></code> |  | 從中獲取底部座標的框。 |

**返回:** <code>series&nbsp;float</code>

---

### get_left {#get_left}

```navi
Box.get_left(id: series Box): series int
```

傳回框左邊框的 bar 索引或 UNIX 時間（取決於用於“xloc”的最後一個值）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Box">Box</a></code> |  | 從中獲取左座標的框。 |

**返回:** <code>series&nbsp;int</code>

---

### get_right {#get_right}

```navi
Box.get_right(id: series Box): series int
```

傳回框右邊框的 bar 索引或 UNIX 時間（取決於用於“xloc”的最後一個值）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Box">Box</a></code> |  | 從中獲取正確座標的框。 |

**返回:** <code>series&nbsp;int</code>

---

### get_top {#get_top}

```navi
Box.get_top(id: series Box): series float
```

傳回盒子上邊框的價格值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Box">Box</a></code> |  | 從中獲取頂部座標的框。 |

**返回:** <code>series&nbsp;float</code>

---

### set_bg_color {#set_bg_color}

```navi
Box.set_bg_color(id: series Box, color: series Color)
```

設定框的背景顏色。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> |  | 新的背景顏色。 |

---

### set_border_color {#set_border_color}

```navi
Box.set_border_color(id: series Box, color: series Color)
```

設定框的邊框顏色。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> |  | 新的邊框顏色。 |

---

### set_border_style {#set_border_style}

```navi
Box.set_border_style(id: series Box, style: series LineStyle)
```

設定框的邊框樣式。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `style` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/LineStyle">LineStyle</a></code> |  | 新的邊框線樣式。 |

---

### set_border_width {#set_border_width}

```navi
Box.set_border_width(id: series Box, width: series int)
```

設定框的邊框寬度。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `width` | <code>series&nbsp;int</code> |  | 新的邊框寬度（以像素為單位）。 |

---

### set_bottom {#set_bottom}

```navi
Box.set_bottom(id: series Box, bottom: series float)
```

設定框的底部座標。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `bottom` | <code>series&nbsp;float</code> |  | 新的底部座標（價格）。 |

---

### set_bottom_right_point {#set_bottom_right_point}

```navi
Box.set_bottom_right_point(id: series Box, point: series chart.Point)
```

使用 `chart.point` 對象設定框的右下角。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `point` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/chart/Point">chart.Point</a></code> |  | 指定新右下角的 `chart.point` 對象。 |

---

### set_extend {#set_extend}

```navi
Box.set_extend(id: series Box, extend: series Extend)
```

設定此框對象邊框的擴展類型。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `extend` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Extend">Extend</a></code> |  | 擴展模式：extend.none、extend.left、extend.right或extend.both。 |

---

### set_left {#set_left}

```navi
Box.set_left(id: series Box, left: series int)
```

設定框的左座標。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `left` | <code>series&nbsp;int</code> |  | 新的左座標（bar 索引或 UNIX 時間）。 |

---

### set_left_top {#set_left_top}

```navi
Box.set_left_top(id: series Box, left: series int, top: series float)
```

設定框的左側和頂部座標。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `left` | <code>series&nbsp;int</code> |  | 新的左座標（bar 索引或 UNIX 時間）。 |
| `top` | <code>series&nbsp;float</code> |  | 新的頂部座標（價格）。 |

---

### set_right {#set_right}

```navi
Box.set_right(id: series Box, right: series int)
```

設定框的右座標。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `right` | <code>series&nbsp;int</code> |  | 新的右座標（bar 索引或 UNIX 時間）。 |

---

### set_right_bottom {#set_right_bottom}

```navi
Box.set_right_bottom(id: series Box, right: series int, bottom: series float)
```

設定框的右側和底部座標。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `right` | <code>series&nbsp;int</code> |  | 新的右座標（bar 索引或 UNIX 時間）。 |
| `bottom` | <code>series&nbsp;float</code> |  | 新的底部座標（價格）。 |

---

### set_text {#set_text}

```navi
Box.set_text(id: series Box, text: series String)
```

設定框的文本大小。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `text` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 新的文本內容。 |

---

### set_text_color {#set_text_color}

```navi
Box.set_text_color(id: series Box, text_color: series Color)
```

設定框的文本顏色。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `text_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> |  | 新的文本顏色。 |

---

### set_text_font_family {#set_text_font_family}

```navi
Box.set_text_font_family(id: series Box, font_family: series String)
```

設定框文本的字體系列。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `font_family` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 字體系列：FontFamily.Default 或 FontFamily.Monospace。 |

---

### set_text_formatting {#set_text_formatting}

```navi
Box.set_text_formatting(id: series Box, text_formatting: const TextFormat)
```

設定框的文本格式。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `text_formatting` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextFormat">TextFormat</a></code> |  | 文本格式選項。 |

---

### set_text_halign {#set_text_halign}

```navi
Box.set_text_halign(id: series Box, text_halign: series TextHAlign)
```

設定框文本的水平對齊方式。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `text_halign` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextHAlign">TextHAlign</a></code> |  | 水平文本對齊方式：TextHAlign.Left、TextHAlign.Center 或 TextHAlign.Right。 |

---

### set_text_size {#set_text_size}

**Overloads**

```navi
Box.set_text_size(id: series Box, text_size: series int)
Box.set_text_size(id: series Box, text_size: series Size)
```

設定框的文本大小。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `text_size` | <code>series&nbsp;int</code> |  | 新的文本大小（以像素為單位）。 |

設定框的文本大小。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `text_size` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Size">Size</a></code> |  | 新的文本大小作為命名常量（Size.Tiny、Size.Small、Size.Normal、Size.Large、Size.Huge）。 |

---

### set_text_valign {#set_text_valign}

```navi
Box.set_text_valign(id: series Box, text_valign: series TextVAlign)
```

設定框文本的垂直對齊方式。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `text_valign` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextVAlign">TextVAlign</a></code> |  | 垂直文本對齊方式：text.align_top、TextHAlign.Center 或 text.align_bottom。 |

---

### set_text_wrap {#set_text_wrap}

```navi
Box.set_text_wrap(id: series Box, text_wrap: series TextWrap)
```

設定框的文本環繞模式。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `text_wrap` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextWrap">TextWrap</a></code> |  | 文本換行模式：text.wrap_none 或 text.wrap_auto。 |

---

### set_top {#set_top}

```navi
Box.set_top(id: series Box, top: series float)
```

設定框的頂部座標。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `top` | <code>series&nbsp;float</code> |  | 新的頂部座標（價格）。 |

---

### set_top_left_point {#set_top_left_point}

```navi
Box.set_top_left_point(id: series Box, point: series chart.Point)
```

使用 `chart.point` 對象設定框的左上角。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `point` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/chart/Point">chart.Point</a></code> |  | 指定新左上角的 `chart.point` 對象。 |

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

設定框的左邊框和右邊框並更新其 xloc 屬性。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `left` | <code>series&nbsp;int</code> |  | 新的左座標（bar 索引或 UNIX 時間）。 |
| `right` | <code>series&nbsp;int</code> |  | 新的右座標（bar 索引或 UNIX 時間）。 |
| `xloc` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/XLoc">XLoc</a></code> |  | x 位置類型：xloc.bar_index 或 xloc.bar_time。 |
