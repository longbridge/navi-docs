---
title: "Polyline"
---

# Polyline

多段線繪圖的句柄。

## 靜態方法

### new {#new}

```navi
Polyline.new(
    points: series Array<chart.Point>,
    curved: series bool = false,
    closed: series bool = false,
    xloc: series String = xloc.bar_index,
    line_color: series Color = Color.BLUE,
    fill_color: series Color = na,
    line_style: series String = line.style_solid,
    line_width: series int = 1,
    force_overlay: series bool = false
  ): series Polyline
```

創建一個新的折線實例並將其顯示在圖表上，用線段順序連接點陣列中的所有點。繪圖中的線段可以是直線或曲線，具體取決於曲線參數。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `points` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/zh-HK/api/stdlib/chart/Point">chart.Point</a>&gt;</code> |  | `chart.point` 值的陣列，按照連接順序定義折線的頂點。 |
| `curved` | <code>series&nbsp;bool</code> | `false` | 如果是 `true`，則連續點之間的線段將繪製為平滑曲線。如果 `false`，則使用直線段。選修的。默認為 `false`。 |
| `closed` | <code>series&nbsp;bool</code> | `false` | 如果是 `true`，則從最後一個點回到第一個點繪製一條附加線段，從而閉合形狀。選修的。默認為 `false`。 |
| `xloc` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `xloc.bar_index` | 確定如何解釋每個 `chart.point` 的 x 座標。使用 `xloc.bar_index` 將 x 視為 bar 索引，或使用 `xloc.bar_time` 將 x 視為 UNIX 時間戳。選修的。默認為 `xloc.bar_index`。 |
| `line_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 線段的顏色。選修的。默認為 `color.BLUE`。 |
| `fill_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `na` | 當多段線閉合時用於填充多段線內部的顏色。 `na` 表示不填充。選修的。默認為 `na`。 |
| `line_style` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `line.style_solid` | 線條的風格。可能的值：`LineStyle.Solid`、`LineStyle.Dotted`、`LineStyle.Dashed`、`LineStyle.ArrowLeft`、`LineStyle.ArrowRight`、`LineStyle.ArrowBoth`。選修的。默認為 `LineStyle.Solid`。 |
| `line_width` | <code>series&nbsp;int</code> | `1` | 線條的寬度（以像素為單位）。選修的。默認為 `1`。 |
| `force_overlay` | <code>series&nbsp;bool</code> | `false` | 如果為 `true`，則無論腳本佔用哪個窗格，都會在主圖表窗格上繪製折線。如果是 `false`，則它位於腳本的窗格之後。選修的。默認為 `false`。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Polyline">Polyline</a></code>

## 靜態屬性

### all {#all}

**類型:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Polyline">Polyline</a>&gt;</code>

傳回一個陣列，其中填充了腳本繪製的所有當前折線。

## 方法

### delete {#delete}

```navi
Polyline.delete(id: series Polyline)
```

從圖表中刪除指定的折線。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Polyline">Polyline</a></code> |  |  |
