---
title: "Line"
---


# Line

畫線句柄。

## 靜態方法

### new {#new}

**Overloads**

```navi
Line.new(first_point: series chart.Point, second_point: series chart.Point, xloc: series XLoc = XLoc.BarIndex, extend: series Extend = Extend.None, color: series Color = na, style: series LineStyle = LineStyle.Solid, width: series int = 1, force_overlay: series bool = false): series Line
Line.new(x1: series int, y1: series float, x2: series int, y2: series float, xloc: series XLoc = XLoc.BarIndex, extend: series Extend = Extend.None, color: series Color = na, style: series LineStyle = LineStyle.Solid, width: series int = 1, force_overlay: series bool = false): series Line
```

在圖表上創建線條對象。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `first_point` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/chart/Point">chart.Point</a></code> |  | 指定線的第一個點的 <code>chart.point</code> 對象。 |
| `second_point` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/chart/Point">chart.Point</a></code> |  | 指定線的第二個點的 <code>chart.point</code> 對象。 |
| `xloc` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/XLoc">XLoc</a></code> | `XLoc.BarIndex` | x 位置類型：xloc.bar_index 或 xloc.bar_time。 |
| `extend` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Extend">Extend</a></code> | `Extend.None` | 擴展模式：extend.none、extend.left、extend.right或extend.both。 |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `na` | 線條的顏色。 |
| `style` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/LineStyle">LineStyle</a></code> | `LineStyle.Solid` | 線條樣式。 |
| `width` | <code>series&nbsp;int</code> | `1` | 線寬（以像素為單位）。 |
| `force_overlay` | <code>series&nbsp;bool</code> | `false` | 如果為 true，則該線將呈現在頂部。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Line">Line</a></code>

在圖表上創建線條對象。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `x1` | <code>series&nbsp;int</code> |  | 第一個點的 x 座標（bar 索引或 UNIX 時間）。 |
| `y1` | <code>series&nbsp;float</code> |  | 第一個點（價格）的 y 座標。 |
| `x2` | <code>series&nbsp;int</code> |  | 第二個點的 x 座標（bar 索引或 UNIX 時間）。 |
| `y2` | <code>series&nbsp;float</code> |  | 第二個點（價格）的 y 座標。 |
| `xloc` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/XLoc">XLoc</a></code> | `XLoc.BarIndex` | x 位置類型：xloc.bar_index 或 xloc.bar_time。 |
| `extend` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Extend">Extend</a></code> | `Extend.None` | 擴展模式：extend.none、extend.left、extend.right或extend.both。 |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `na` | 線條的顏色。 |
| `style` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/LineStyle">LineStyle</a></code> | `LineStyle.Solid` | 線條樣式。 |
| `width` | <code>series&nbsp;int</code> | `1` | 線寬（以像素為單位）。 |
| `force_overlay` | <code>series&nbsp;bool</code> | `false` | 如果為 true，則該線將呈現在頂部。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Line">Line</a></code>

## 靜態屬性

### all {#all}

**類型:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Line">Line</a>&gt;</code>

傳回一個陣列，其中填充了腳本繪製的所有當前行。

## 方法

### copy {#copy}

```navi
Line.copy(id: series Line): series Line
```

創建指定行的複本並傳回其 id。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Line">Line</a></code> |  | 要複製的行。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Line">Line</a></code>

---

### delete {#delete}

```navi
Line.delete(id: series Line)
```

從圖表中刪除指定的線。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Line">Line</a></code> |  | 要刪除的行。 |

---

### get_price {#get_price}

```navi
Line.get_price(id: series Line, x: series int): series float
```

傳回給定 bar 索引處的價格水平。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Line">Line</a></code> |  | 獲取價格的線路。 |
| `x` | <code>series&nbsp;int</code> |  | 獲取價格的 bar 索引或 UNIX 時間。 |

**返回:** <code>series&nbsp;float</code>

---

### get_x1 {#get_x1}

```navi
Line.get_x1(id: series Line): series int
```

傳回線的第一個點的 UNIX 時間或 bar 索引（取決於最後設定的 xloc 值）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Line">Line</a></code> |  | 從中獲取 x1 座標的線。 |

**返回:** <code>series&nbsp;int</code>

---

### get_x2 {#get_x2}

```navi
Line.get_x2(id: series Line): series int
```

傳回該行第二個點的 UNIX 時間或 bar 索引（取決於最後設定的 xloc 值）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Line">Line</a></code> |  | 從中獲取 x2 座標的線。 |

**返回:** <code>series&nbsp;int</code>

---

### get_y1 {#get_y1}

```navi
Line.get_y1(id: series Line): series float
```

傳回線的第一個點的價格。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Line">Line</a></code> |  | 從中獲取 y1 座標的線。 |

**返回:** <code>series&nbsp;float</code>

---

### get_y2 {#get_y2}

```navi
Line.get_y2(id: series Line): series float
```

傳回該線第二個點的價格。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Line">Line</a></code> |  | 從中獲取 y2 座標的線。 |

**返回:** <code>series&nbsp;float</code>

---

### set_color {#set_color}

```navi
Line.set_color(id: series Line, color: series Color)
```

設定線條顏色。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Line">Line</a></code> |  | 要修改的行。 |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> |  | 線條的新顏色。 |

---

### set_extend {#set_extend}

```navi
Line.set_extend(id: series Line, extend: series Extend)
```

設定該線對象的延伸類型。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Line">Line</a></code> |  | 要修改的行。 |
| `extend` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Extend">Extend</a></code> |  | 擴展模式：extend.none、extend.left、extend.right或extend.both。 |

---

### set_first_point {#set_first_point}

```navi
Line.set_first_point(id: series Line, point: series chart.Point)
```

設定該線對象的第一個點。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Line">Line</a></code> |  | 要修改的行。 |
| `point` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/chart/Point">chart.Point</a></code> |  | 指定新的第一個點的 <code>chart.point</code> 對象。 |

---

### set_second_point {#set_second_point}

```navi
Line.set_second_point(id: series Line, point: series chart.Point)
```

設定該直線對象的第二個點。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Line">Line</a></code> |  | 要修改的行。 |
| `point` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/chart/Point">chart.Point</a></code> |  | 指定新的第二個點的 <code>chart.point</code> 對象。 |

---

### set_style {#set_style}

```navi
Line.set_style(id: series Line, style: series LineStyle)
```

設定線條樣式。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Line">Line</a></code> |  | 要修改的行。 |
| `style` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/LineStyle">LineStyle</a></code> |  | 新的線條樣式。 |

---

### set_width {#set_width}

```navi
Line.set_width(id: series Line, width: series int)
```

設定線寬。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Line">Line</a></code> |  | 要修改的行。 |
| `width` | <code>series&nbsp;int</code> |  | 新線寬（以像素為單位）。 |

---

### set_x1 {#set_x1}

```navi
Line.set_x1(id: series Line, x: series int)
```

設定第一個點的 bar 索引或 bar 時間（取決於 xloc）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Line">Line</a></code> |  | 要修改的行。 |
| `x` | <code>series&nbsp;int</code> |  | 第一個點的新 x 座標。 |

---

### set_x2 {#set_x2}

```navi
Line.set_x2(id: series Line, x: series int)
```

設定第二個點的 bar 索引或 bar 時間（取決於 xloc）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Line">Line</a></code> |  | 要修改的行。 |
| `x` | <code>series&nbsp;int</code> |  | 第二個點的新 x 座標。 |

---

### set_xloc {#set_xloc}

```navi
Line.set_xloc(
    id: series Line,
    x1: series int,
    x2: series int,
    xloc: series XLoc
  )
```

設定 x 位置和新的 bar 索引/時間值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Line">Line</a></code> |  | 要修改的行。 |
| `x1` | <code>series&nbsp;int</code> |  | 第一個點的新 x 座標。 |
| `x2` | <code>series&nbsp;int</code> |  | 第二個點的新 x 座標。 |
| `xloc` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/XLoc">XLoc</a></code> |  | x 位置類型：xloc.bar_index 或 xloc.bar_time。 |

---

### set_xy1 {#set_xy1}

```navi
Line.set_xy1(id: series Line, x: series int, y: series float)
```

設定第一個點的 bar 索引/時間和價格。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Line">Line</a></code> |  | 要修改的行。 |
| `x` | <code>series&nbsp;int</code> |  | 第一個點的新 x 座標。 |
| `y` | <code>series&nbsp;float</code> |  | 第一個點的新 y 座標。 |

---

### set_xy2 {#set_xy2}

```navi
Line.set_xy2(id: series Line, x: series int, y: series float)
```

設定第二個點的 bar 索引/時間和價格。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Line">Line</a></code> |  | 要修改的行。 |
| `x` | <code>series&nbsp;int</code> |  | 第二個點的新 x 座標。 |
| `y` | <code>series&nbsp;float</code> |  | 第二個點的新 y 座標。 |

---

### set_y1 {#set_y1}

```navi
Line.set_y1(id: series Line, y: series float)
```

設定第一個點的價格。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Line">Line</a></code> |  | 要修改的行。 |
| `y` | <code>series&nbsp;float</code> |  | 第一個點的新 y 座標。 |

---

### set_y2 {#set_y2}

```navi
Line.set_y2(id: series Line, y: series float)
```

設定第二個點的價格。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Line">Line</a></code> |  | 要修改的行。 |
| `y` | <code>series&nbsp;float</code> |  | 第二個點的新 y 座標。 |
