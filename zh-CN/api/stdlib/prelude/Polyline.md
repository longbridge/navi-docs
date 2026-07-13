---
title: "Polyline"
---

# Polyline

多段线绘图的句柄。

## 静态方法

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

创建一个新的折线实例并将其显示在图表上，用线段顺序连接点数组中的所有点。绘图中的线段可以是直线或曲线，具体取决于曲线参数。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `points` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/zh-CN/api/stdlib/chart/Point">chart.Point</a>&gt;</code> |  | `chart.point` 值的数组，按照连接顺序定义折线的顶点。 |
| `curved` | <code>series&nbsp;bool</code> | `false` | 如果是 `true`，则连续点之间的线段将绘制为平滑曲线。如果 `false`，则使用直线段。选修的。默认为 `false`。 |
| `closed` | <code>series&nbsp;bool</code> | `false` | 如果是 `true`，则从最后一个点回到第一个点绘制一条附加线段，从而闭合形状。选修的。默认为 `false`。 |
| `xloc` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `xloc.bar_index` | 确定如何解释每个 `chart.point` 的 x 坐标。使用 `xloc.bar_index` 将 x 视为 bar 索引，或使用 `xloc.bar_time` 将 x 视为 UNIX 时间戳。选修的。默认为 `xloc.bar_index`。 |
| `line_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 线段的颜色。选修的。默认为 `color.BLUE`。 |
| `fill_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `na` | 当多段线闭合时用于填充多段线内部的颜色。 `na` 表示不填充。选修的。默认为 `na`。 |
| `line_style` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `line.style_solid` | 线条的风格。可能的值：`LineStyle.Solid`、`LineStyle.Dotted`、`LineStyle.Dashed`、`LineStyle.ArrowLeft`、`LineStyle.ArrowRight`、`LineStyle.ArrowBoth`。选修的。默认为 `LineStyle.Solid`。 |
| `line_width` | <code>series&nbsp;int</code> | `1` | 线条的宽度（以像素为单位）。选修的。默认为 `1`。 |
| `force_overlay` | <code>series&nbsp;bool</code> | `false` | 如果为 `true`，则无论脚本占用哪个窗格，都会在主图表窗格上绘制折线。如果是 `false`，则它位于脚本的窗格之后。选修的。默认为 `false`。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Polyline">Polyline</a></code>

## 静态属性

### all {#all}

**类型:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Polyline">Polyline</a>&gt;</code>

返回一个数组，其中填充了脚本绘制的所有当前折线。

## 方法

### delete {#delete}

```navi
Polyline.delete(id: series Polyline)
```

从图表中删除指定的折线。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Polyline">Polyline</a></code> |  |  |
