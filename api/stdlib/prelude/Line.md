---
title: "Line"
---

<script setup>
import { ref } from 'vue'
const _s0 = ref(0)
</script>

# Line

Handle for a line drawing.

## Static Methods

### new {#new}

<OverloadTabs v-model="_s0" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Line.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">new</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(first_point</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> chart.Point, second_point</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> chart.Point, xloc</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> XLoc </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> XLoc.BarIndex, extend</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Extend </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Extend.None, </span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, style</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> LineStyle </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> LineStyle.Solid, width</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 1</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, force_overlay</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> false</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Line</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Line.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">new</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(x1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, y1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, x2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, y2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, xloc</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> XLoc </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> XLoc.BarIndex, extend</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Extend </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Extend.None, </span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, style</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> LineStyle </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> LineStyle.Solid, width</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 1</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, force_overlay</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> false</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Line</span>"]' />

<div v-show="_s0 === 0">

Creates a line object on the chart.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `first_point` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/chart/Point">chart.Point</a></code> |  | The <a class="stdlib-ref" data-key="chart::Point" href="/api/stdlib/chart/Point">chart.Point</a> object specifying the first point of the line. |
| `second_point` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/chart/Point">chart.Point</a></code> |  | The <a class="stdlib-ref" data-key="chart::Point" href="/api/stdlib/chart/Point">chart.Point</a> object specifying the second point of the line. |
| `xloc` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/XLoc">XLoc</a></code> | `XLoc.BarIndex` | The x-location type: XLoc.BarIndex or XLoc.BarTime. |
| `extend` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Extend">Extend</a></code> | `Extend.None` | The extension mode: Extend.None, Extend.Left, Extend.Right, or Extend.Both. |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code> | `na` | The color of the line. |
| `style` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/LineStyle">LineStyle</a></code> | `LineStyle.Solid` | The line style. |
| `width` | <code>series&nbsp;int</code> | `1` | The line width in pixels. |
| `force_overlay` | <code>series&nbsp;bool</code> | `false` | If true, the line is rendered on top. |

**Returns:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Line">Line</a></code>

</div>

<div v-show="_s0 === 1">

Creates a line object on the chart.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x1` | <code>series&nbsp;int</code> |  | The x-coordinate of the first point (bar index or UNIX time). |
| `y1` | <code>series&nbsp;float</code> |  | The y-coordinate of the first point (price). |
| `x2` | <code>series&nbsp;int</code> |  | The x-coordinate of the second point (bar index or UNIX time). |
| `y2` | <code>series&nbsp;float</code> |  | The y-coordinate of the second point (price). |
| `xloc` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/XLoc">XLoc</a></code> | `XLoc.BarIndex` | The x-location type: XLoc.BarIndex or XLoc.BarTime. |
| `extend` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Extend">Extend</a></code> | `Extend.None` | The extension mode: Extend.None, Extend.Left, Extend.Right, or Extend.Both. |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code> | `na` | The color of the line. |
| `style` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/LineStyle">LineStyle</a></code> | `LineStyle.Solid` | The line style. |
| `width` | <code>series&nbsp;int</code> | `1` | The line width in pixels. |
| `force_overlay` | <code>series&nbsp;bool</code> | `false` | If true, the line is rendered on top. |

**Returns:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Line">Line</a></code>

</div>

## Static Properties

### all {#all}

**Type:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/api/stdlib/prelude/Line">Line</a>&gt;</code>

Returns an array filled with all the current lines drawn by the script.

## Methods

### copy {#copy}

```navi
Line.copy(id: series Line): series Line
```

Creates a copy of the specified line and returns its id.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Line">Line</a></code> |  | The line to copy. |

**Returns:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Line">Line</a></code>

---

### delete {#delete}

```navi
Line.delete(id: series Line)
```

Deletes the specified line from the chart.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Line">Line</a></code> |  | The line to delete. |

---

### get_price {#get_price}

```navi
Line.get_price(id: series Line, x: series int): series float
```

Returns the price level of a line at a given bar index.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Line">Line</a></code> |  | The line to get the price from. |
| `x` | <code>series&nbsp;int</code> |  | The bar index or UNIX time to get the price at. |

**Returns:** <code>series&nbsp;float</code>

---

### get_x1 {#get_x1}

```navi
Line.get_x1(id: series Line): series int
```

Returns UNIX time or bar index (depending on the last xloc value set) of the first point of the line.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Line">Line</a></code> |  | The line to get the x1 coordinate from. |

**Returns:** <code>series&nbsp;int</code>

---

### get_x2 {#get_x2}

```navi
Line.get_x2(id: series Line): series int
```

Returns UNIX time or bar index (depending on the last xloc value set) of the second point of the line.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Line">Line</a></code> |  | The line to get the x2 coordinate from. |

**Returns:** <code>series&nbsp;int</code>

---

### get_y1 {#get_y1}

```navi
Line.get_y1(id: series Line): series float
```

Returns price of the first point of the line.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Line">Line</a></code> |  | The line to get the y1 coordinate from. |

**Returns:** <code>series&nbsp;float</code>

---

### get_y2 {#get_y2}

```navi
Line.get_y2(id: series Line): series float
```

Returns price of the second point of the line.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Line">Line</a></code> |  | The line to get the y2 coordinate from. |

**Returns:** <code>series&nbsp;float</code>

---

### set_color {#set_color}

```navi
Line.set_color(id: series Line, color: series Color)
```

Sets the line color.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Line">Line</a></code> |  | The line to modify. |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code> |  | The new color of the line. |

---

### set_extend {#set_extend}

```navi
Line.set_extend(id: series Line, extend: series Extend)
```

Sets extending type of this line object.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Line">Line</a></code> |  | The line to modify. |
| `extend` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Extend">Extend</a></code> |  | The extension mode: Extend.None, Extend.Left, Extend.Right, or Extend.Both. |

---

### set_first_point {#set_first_point}

```navi
Line.set_first_point(id: series Line, point: series chart.Point)
```

Sets the first point of this line object.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Line">Line</a></code> |  | The line to modify. |
| `point` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/chart/Point">chart.Point</a></code> |  | The <a class="stdlib-ref" data-key="chart::Point" href="/api/stdlib/chart/Point">chart.Point</a> object specifying the new first point. |

---

### set_second_point {#set_second_point}

```navi
Line.set_second_point(id: series Line, point: series chart.Point)
```

Sets the second point of this line object.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Line">Line</a></code> |  | The line to modify. |
| `point` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/chart/Point">chart.Point</a></code> |  | The <a class="stdlib-ref" data-key="chart::Point" href="/api/stdlib/chart/Point">chart.Point</a> object specifying the new second point. |

---

### set_style {#set_style}

```navi
Line.set_style(id: series Line, style: series LineStyle)
```

Sets the line style.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Line">Line</a></code> |  | The line to modify. |
| `style` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/LineStyle">LineStyle</a></code> |  | The new line style. |

---

### set_width {#set_width}

```navi
Line.set_width(id: series Line, width: series int)
```

Sets the line width.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Line">Line</a></code> |  | The line to modify. |
| `width` | <code>series&nbsp;int</code> |  | The new line width in pixels. |

---

### set_x1 {#set_x1}

```navi
Line.set_x1(id: series Line, x: series int)
```

Sets bar index or bar time (depending on the xloc) of the first point.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Line">Line</a></code> |  | The line to modify. |
| `x` | <code>series&nbsp;int</code> |  | The new x-coordinate for the first point. |

---

### set_x2 {#set_x2}

```navi
Line.set_x2(id: series Line, x: series int)
```

Sets bar index or bar time (depending on the xloc) of the second point.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Line">Line</a></code> |  | The line to modify. |
| `x` | <code>series&nbsp;int</code> |  | The new x-coordinate for the second point. |

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

Sets x-location and new bar index/time values.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Line">Line</a></code> |  | The line to modify. |
| `x1` | <code>series&nbsp;int</code> |  | The new x-coordinate for the first point. |
| `x2` | <code>series&nbsp;int</code> |  | The new x-coordinate for the second point. |
| `xloc` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/XLoc">XLoc</a></code> |  | The x-location type: XLoc.BarIndex or XLoc.BarTime. |

---

### set_xy1 {#set_xy1}

```navi
Line.set_xy1(id: series Line, x: series int, y: series float)
```

Sets bar index/time and price of the first point.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Line">Line</a></code> |  | The line to modify. |
| `x` | <code>series&nbsp;int</code> |  | The new x-coordinate for the first point. |
| `y` | <code>series&nbsp;float</code> |  | The new y-coordinate for the first point. |

---

### set_xy2 {#set_xy2}

```navi
Line.set_xy2(id: series Line, x: series int, y: series float)
```

Sets bar index/time and price of the second point.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Line">Line</a></code> |  | The line to modify. |
| `x` | <code>series&nbsp;int</code> |  | The new x-coordinate for the second point. |
| `y` | <code>series&nbsp;float</code> |  | The new y-coordinate for the second point. |

---

### set_y1 {#set_y1}

```navi
Line.set_y1(id: series Line, y: series float)
```

Sets price of the first point.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Line">Line</a></code> |  | The line to modify. |
| `y` | <code>series&nbsp;float</code> |  | The new y-coordinate for the first point. |

---

### set_y2 {#set_y2}

```navi
Line.set_y2(id: series Line, y: series float)
```

Sets price of the second point.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Line">Line</a></code> |  | The line to modify. |
| `y` | <code>series&nbsp;float</code> |  | The new y-coordinate for the second point. |
