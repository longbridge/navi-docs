---
title: "Label"
---


# Label

標籤繪圖的句柄。

## 靜態方法

### new {#new}

**Overloads**

```navi
Label.new(point: series chart.Point, text: series String = "", xloc: series XLoc = XLoc.BarIndex, yloc: series YLoc = YLoc.Price, color: series Color = na, style: series LabelStyle = LabelStyle.Down, text_color: series Color = na, size: series Size = Size.Normal, text_align: series TextHAlign = TextHAlign.Center, tooltip: series String = na, text_font_family: series FontFamily = FontFamily.Default, force_overlay: const bool = false, text_formatting: const TextFormat = TextFormat.NONE): series Label
Label.new(point: series chart.Point, text: series String = "", xloc: series XLoc = XLoc.BarIndex, yloc: series YLoc = YLoc.Price, color: series Color = na, style: series LabelStyle = LabelStyle.Down, text_color: series Color = na, size: series int = 0, text_align: series TextHAlign = TextHAlign.Center, tooltip: series String = na, text_font_family: series FontFamily = FontFamily.Default, force_overlay: const bool = false, text_formatting: const TextFormat = TextFormat.NONE): series Label
Label.new(x: series int, y: series float, text: series String = "", xloc: series XLoc = XLoc.BarIndex, yloc: series YLoc = YLoc.Price, color: series Color = na, style: series LabelStyle = LabelStyle.Down, text_color: series Color = na, size: series Size = Size.Normal, text_align: series TextHAlign = TextHAlign.Center, tooltip: series String = na, text_font_family: series FontFamily = FontFamily.Default, force_overlay: const bool = false, text_formatting: const TextFormat = TextFormat.NONE): series Label
Label.new(x: series int, y: series float, text: series String = "", xloc: series XLoc = XLoc.BarIndex, yloc: series YLoc = YLoc.Price, color: series Color = na, style: series LabelStyle = LabelStyle.Down, text_color: series Color = na, size: series int = 0, text_align: series TextHAlign = TextHAlign.Center, tooltip: series String = na, text_font_family: series FontFamily = FontFamily.Default, force_overlay: series bool = false, text_formatting: const TextFormat = TextFormat.NONE): series Label
```

在圖表上創建標籤對象。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `point` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/chart/Point">chart.Point</a></code> |  | 指定標籤位置的 <code>chart.point</code> 對象。 |
| `text` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `""` | 要在標籤上顯示的文本。 |
| `xloc` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/XLoc">XLoc</a></code> | `XLoc.BarIndex` | x 位置類型：xloc.bar_index 或 xloc.bar_time。 |
| `yloc` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/YLoc">YLoc</a></code> | `YLoc.Price` | y 位置類型：yloc.price 或 yloc.price_range。 |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `na` | 標籤的背景顏色。 |
| `style` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/LabelStyle">LabelStyle</a></code> | `LabelStyle.Down` | 標籤的樣式。 |
| `text_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `na` | 標籤文本的顏色。 |
| `size` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Size">Size</a></code> | `Size.Normal` | 標籤的大小作為命名常量。 |
| `text_align` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextHAlign">TextHAlign</a></code> | `TextHAlign.Center` | 文本對齊方式：TextHAlign.Center、TextHAlign.Left 或 TextHAlign.Right。 |
| `tooltip` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 將鼠標懸停在標籤上時的工具提示文本。 |
| `text_font_family` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/FontFamily">FontFamily</a></code> | `FontFamily.Default` | 標籤文本的字體系列。 |
| `force_overlay` | <code>const&nbsp;bool</code> | `false` | 如果為 true，則標籤將呈現在頂部。 |
| `text_formatting` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextFormat">TextFormat</a></code> | `TextFormat.NONE` | 文本格式選項。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Label">Label</a></code>

在圖表上創建標籤對象。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `point` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/chart/Point">chart.Point</a></code> |  | 指定標籤位置的 <code>chart.point</code> 對象。 |
| `text` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `""` | 要在標籤上顯示的文本。 |
| `xloc` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/XLoc">XLoc</a></code> | `XLoc.BarIndex` | x 位置類型：xloc.bar_index 或 xloc.bar_time。 |
| `yloc` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/YLoc">YLoc</a></code> | `YLoc.Price` | y 位置類型：yloc.price 或 yloc.price_range。 |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `na` | 標籤的背景顏色。 |
| `style` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/LabelStyle">LabelStyle</a></code> | `LabelStyle.Down` | 標籤的樣式。 |
| `text_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `na` | 標籤文本的顏色。 |
| `size` | <code>series&nbsp;int</code> | `0` | 標籤的大小為整數值。 |
| `text_align` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextHAlign">TextHAlign</a></code> | `TextHAlign.Center` | 文本對齊方式：TextHAlign.Center、TextHAlign.Left 或 TextHAlign.Right。 |
| `tooltip` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 將鼠標懸停在標籤上時的工具提示文本。 |
| `text_font_family` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/FontFamily">FontFamily</a></code> | `FontFamily.Default` | 標籤文本的字體系列。 |
| `force_overlay` | <code>const&nbsp;bool</code> | `false` | 如果為 true，則標籤將呈現在頂部。 |
| `text_formatting` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextFormat">TextFormat</a></code> | `TextFormat.NONE` | 文本格式選項。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Label">Label</a></code>

在圖表上創建標籤對象。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `x` | <code>series&nbsp;int</code> |  | x 座標（bar 索引或 UNIX 時間）。 |
| `y` | <code>series&nbsp;float</code> |  | y 座標（價格）。 |
| `text` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `""` | 要在標籤上顯示的文本。 |
| `xloc` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/XLoc">XLoc</a></code> | `XLoc.BarIndex` | x 位置類型：xloc.bar_index 或 xloc.bar_time。 |
| `yloc` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/YLoc">YLoc</a></code> | `YLoc.Price` | y 位置類型：yloc.price 或 yloc.price_range。 |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `na` | 標籤的背景顏色。 |
| `style` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/LabelStyle">LabelStyle</a></code> | `LabelStyle.Down` | 標籤的樣式。 |
| `text_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `na` | 標籤文本的顏色。 |
| `size` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Size">Size</a></code> | `Size.Normal` | 標籤的大小作為命名常量。 |
| `text_align` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextHAlign">TextHAlign</a></code> | `TextHAlign.Center` | 文本對齊方式：TextHAlign.Center、TextHAlign.Left 或 TextHAlign.Right。 |
| `tooltip` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 將鼠標懸停在標籤上時的工具提示文本。 |
| `text_font_family` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/FontFamily">FontFamily</a></code> | `FontFamily.Default` | 標籤文本的字體系列。 |
| `force_overlay` | <code>const&nbsp;bool</code> | `false` | 如果為 true，則標籤將呈現在頂部。 |
| `text_formatting` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextFormat">TextFormat</a></code> | `TextFormat.NONE` | 文本格式選項。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Label">Label</a></code>

在圖表上創建標籤對象。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `x` | <code>series&nbsp;int</code> |  | x 座標（bar 索引或 UNIX 時間）。 |
| `y` | <code>series&nbsp;float</code> |  | y 座標（價格）。 |
| `text` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `""` | 要在標籤上顯示的文本。 |
| `xloc` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/XLoc">XLoc</a></code> | `XLoc.BarIndex` | x 位置類型：xloc.bar_index 或 xloc.bar_time。 |
| `yloc` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/YLoc">YLoc</a></code> | `YLoc.Price` | y 位置類型：yloc.price 或 yloc.price_range。 |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `na` | 標籤的背景顏色。 |
| `style` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/LabelStyle">LabelStyle</a></code> | `LabelStyle.Down` | 標籤的樣式。 |
| `text_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `na` | 標籤文本的顏色。 |
| `size` | <code>series&nbsp;int</code> | `0` | 標籤的大小為整數值。 |
| `text_align` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextHAlign">TextHAlign</a></code> | `TextHAlign.Center` | 文本對齊方式：TextHAlign.Center、TextHAlign.Left 或 TextHAlign.Right。 |
| `tooltip` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 將鼠標懸停在標籤上時的工具提示文本。 |
| `text_font_family` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/FontFamily">FontFamily</a></code> | `FontFamily.Default` | 標籤文本的字體系列。 |
| `force_overlay` | <code>series&nbsp;bool</code> | `false` | 如果為 true，則標籤將呈現在頂部。 |
| `text_formatting` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextFormat">TextFormat</a></code> | `TextFormat.NONE` | 文本格式選項。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Label">Label</a></code>

## 靜態屬性

### all {#all}

**類型:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Label">Label</a>&gt;</code>

傳回一個陣列，其中填充了腳本繪製的所有當前標籤。

## 方法

### copy {#copy}

```navi
Label.copy(id: series Label): series Label
```

創建指定標籤的複本並傳回其 id。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Label">Label</a></code> |  | 要複製的標籤。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Label">Label</a></code>

---

### delete {#delete}

```navi
Label.delete(id: series Label)
```

從圖表中刪除指定標籤。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Label">Label</a></code> |  | 要刪除的標籤。 |

---

### get_text {#get_text}

```navi
Label.get_text(id: series Label): series String
```

傳回此標籤的文本。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Label">Label</a></code> |  | 從中獲取文本的標籤。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

---

### get_x {#get_x}

```navi
Label.get_x(id: series Label): series int
```

傳回此標籤位置的 UNIX 時間或 bar 索引（取決於最後設定的 xloc 值）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Label">Label</a></code> |  | 從中獲取 x 座標的標籤。 |

**返回:** <code>series&nbsp;int</code>

---

### get_y {#get_y}

```navi
Label.get_y(id: series Label): series float
```

傳回該標籤位置的價格。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Label">Label</a></code> |  | 從中獲取 y 座標的標籤。 |

**返回:** <code>series&nbsp;float</code>

---

### set_color {#set_color}

```navi
Label.set_color(id: series Label, color: series Color)
```

設定此標籤的顏色。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Label">Label</a></code> |  | 要修改的標籤。 |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> |  | 新的背景顏色。 |

---

### set_point {#set_point}

```navi
Label.set_point(id: series Label, point: series chart.Point)
```

使用 `chart.point` 對象設定此標籤的位置。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Label">Label</a></code> |  | 要修改的標籤。 |
| `point` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/chart/Point">chart.Point</a></code> |  | 指定新位置的 `chart.point` 對象。 |

---

### set_size {#set_size}

**Overloads**

```navi
Label.set_size(id: series Label, size: series int)
Label.set_size(id: series Label, size: series Size)
```

設定此標籤的箭頭和文本大小。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Label">Label</a></code> |  | 要修改的標籤。 |
| `size` | <code>series&nbsp;int</code> |  | 新大小為整數值。 |

設定此標籤的箭頭和文本大小。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Label">Label</a></code> |  | 要修改的標籤。 |
| `size` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Size">Size</a></code> |  | 新大小作為命名常量（Size.Tiny、Size.Small、Size.Normal、Size.Large、Size.Huge）。 |

---

### set_style {#set_style}

```navi
Label.set_style(id: series Label, style: series LabelStyle)
```

設定此標籤的樣式。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Label">Label</a></code> |  | 要修改的標籤。 |
| `style` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/LabelStyle">LabelStyle</a></code> |  | 新標籤樣式不變。 |

---

### set_text {#set_text}

```navi
Label.set_text(id: series Label, text: series String)
```

設定此標籤的文本。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Label">Label</a></code> |  | 要修改的標籤。 |
| `text` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 要顯示的新文本。 |

---

### set_text_align {#set_text_align}

```navi
Label.set_text_align(id: series Label, text_align: series TextHAlign)
```

設定此標籤的文本對齊方式。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Label">Label</a></code> |  | 要修改的標籤。 |
| `text_align` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextHAlign">TextHAlign</a></code> |  | 文本對齊方式：TextHAlign.Center、TextHAlign.Left 或 TextHAlign.Right。 |

---

### set_text_color {#set_text_color}

```navi
Label.set_text_color(id: series Label, text_color: series Color)
```

設定此標籤的文本顏色。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Label">Label</a></code> |  | 要修改的標籤。 |
| `text_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> |  | 新的文本顏色。 |

---

### set_text_font_family {#set_text_font_family}

```navi
Label.set_text_font_family(
    id: series Label,
    text_font_family: series FontFamily
  )
```

設定此標籤的字體系列。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Label">Label</a></code> |  | 要修改的標籤。 |
| `text_font_family` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/FontFamily">FontFamily</a></code> |  | 字體系列：FontFamily.Default 或 FontFamily.Monospace。 |

---

### set_text_formatting {#set_text_formatting}

```navi
Label.set_text_formatting(id: series Label, text_formatting: const TextFormat)
```

設定此標籤的文本格式。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Label">Label</a></code> |  | 要修改的標籤。 |
| `text_formatting` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextFormat">TextFormat</a></code> |  | 文本格式選項。 |

---

### set_tooltip {#set_tooltip}

```navi
Label.set_tooltip(id: series Label, tooltip: series String)
```

設定此標籤的工具提示文本。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Label">Label</a></code> |  | 要修改的標籤。 |
| `tooltip` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 新的工具提示文本。 |

---

### set_x {#set_x}

```navi
Label.set_x(id: series Label, x: series int)
```

設定此標籤位置的 UNIX 時間或 bar 索引（取決於最後設定的 xloc 值）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Label">Label</a></code> |  | 要修改的標籤。 |
| `x` | <code>series&nbsp;int</code> |  | 新的 x 座標（bar 索引或 UNIX 時間）。 |

---

### set_xloc {#set_xloc}

```navi
Label.set_xloc(id: series Label, xloc: series XLoc)
```

設定此標籤的 x 位置類型。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Label">Label</a></code> |  | 要修改的標籤。 |
| `xloc` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/XLoc">XLoc</a></code> |  | x 位置類型：xloc.bar_index 或 xloc.bar_time。 |

---

### set_xy {#set_xy}

```navi
Label.set_xy(id: series Label, x: series int, y: series float)
```

設定此標籤位置的 x 和 y 座標。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Label">Label</a></code> |  | 要修改的標籤。 |
| `x` | <code>series&nbsp;int</code> |  | 新的 x 座標（bar 索引或 UNIX 時間）。 |
| `y` | <code>series&nbsp;float</code> |  | 新的 y 座標（價格）。 |

---

### set_y {#set_y}

```navi
Label.set_y(id: series Label, y: series float)
```

設定該標籤位置的價格。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Label">Label</a></code> |  | 要修改的標籤。 |
| `y` | <code>series&nbsp;float</code> |  | 新的 y 座標（價格）。 |

---

### set_yloc {#set_yloc}

```navi
Label.set_yloc(id: series Label, yloc: series YLoc)
```

設定此標籤的 y 位置類型。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Label">Label</a></code> |  | 要修改的標籤。 |
| `yloc` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/YLoc">YLoc</a></code> |  | y 位置類型：yloc.price 或 yloc.price_range。 |
