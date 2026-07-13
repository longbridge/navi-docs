---
title: "Polyline"
---

# Polyline

Handle for a polyline drawing.

## Static Methods

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

Creates a new polyline instance and displays it on the chart, sequentially connecting all of the points in the points array with line segments.

The segments in the drawing can be straight or curved depending on the curved parameter.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `points` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/api/stdlib/chart/Point">chart.Point</a>&gt;</code> |  | An array of `chart.Point` values defining the vertices of the polyline in the order they will be connected. |
| `curved` | <code>series&nbsp;bool</code> | `false` | If `true`, the segments between consecutive points are drawn as smooth curves. If `false`, straight line segments are used. Optional. The default is `false`. |
| `closed` | <code>series&nbsp;bool</code> | `false` | If `true`, an additional segment is drawn from the last point back to the first, closing the shape. Optional. The default is `false`. |
| `xloc` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `xloc.bar_index` | Determines how the x-coordinate of each `chart.Point` is interpreted. Use `xloc.bar_index` to treat x as a bar index, or `xloc.bar_time` to treat x as a UNIX timestamp. Optional. The default is `xloc.bar_index`. |
| `line_color` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | The color of the line segments. Optional. The default is `Color.BLUE`. |
| `fill_color` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code> | `na` | The color used to fill the interior of the polyline when it is closed. `na` means no fill. Optional. The default is `na`. |
| `line_style` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `line.style_solid` | The style of the line. Possible values: `line.style_solid`, `line.style_dotted`, `line.style_dashed`, `line.style_arrow_left`, `line.style_arrow_right`, `line.style_arrow_both`. Optional. The default is `line.style_solid`. |
| `line_width` | <code>series&nbsp;int</code> | `1` | The width of the line in pixels. Optional. The default is `1`. |
| `force_overlay` | <code>series&nbsp;bool</code> | `false` | If `true`, the polyline is drawn on the main chart pane regardless of which pane the script occupies. If `false`, it follows the script's pane. Optional. The default is `false`. |

**Returns:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Polyline">Polyline</a></code>

## Static Properties

### all {#all}

**Type:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/api/stdlib/prelude/Polyline">Polyline</a>&gt;</code>

Returns an array filled with all the current polylines drawn by the script.

## Methods

### delete {#delete}

```navi
Polyline.delete(id: series Polyline)
```

Deletes the specified polyline from the chart.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Polyline">Polyline</a></code> |  |  |
