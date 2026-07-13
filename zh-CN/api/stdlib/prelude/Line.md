---
title: "Line"
---

<script setup>
import { ref } from 'vue'
const _s0 = ref(0)
</script>

# Line

画线句柄。

## 静态方法

### new {#new}

<OverloadTabs v-model="_s0" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Line.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">new</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(first_point</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> chart.Point, second_point</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> chart.Point, xloc</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> XLoc </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> XLoc.BarIndex, extend</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Extend </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Extend.None, </span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, style</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> LineStyle </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> LineStyle.Solid, width</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 1</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, force_overlay</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> false</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Line</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Line.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">new</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(x1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, y1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, x2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, y2</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, xloc</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> XLoc </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> XLoc.BarIndex, extend</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Extend </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Extend.None, </span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, style</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> LineStyle </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> LineStyle.Solid, width</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 1</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, force_overlay</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> false</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Line</span>"]' />

<div v-show="_s0 === 0">

在图表上创建线条对象。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `first_point` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/chart/Point">chart.Point</a></code> |  | 指定线的第一个点的 <code>chart.point</code> 对象。 |
| `second_point` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/chart/Point">chart.Point</a></code> |  | 指定线的第二个点的 <code>chart.point</code> 对象。 |
| `xloc` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/XLoc">XLoc</a></code> | `XLoc.BarIndex` | x 位置类型：xloc.bar_index 或 xloc.bar_time。 |
| `extend` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Extend">Extend</a></code> | `Extend.None` | 扩展模式：extend.none、extend.left、extend.right或extend.both。 |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `na` | 线条的颜色。 |
| `style` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/LineStyle">LineStyle</a></code> | `LineStyle.Solid` | 线条样式。 |
| `width` | <code>series&nbsp;int</code> | `1` | 线宽（以像素为单位）。 |
| `force_overlay` | <code>series&nbsp;bool</code> | `false` | 如果为 true，则该线将呈现在顶部。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Line">Line</a></code>

</div>

<div v-show="_s0 === 1">

在图表上创建线条对象。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `x1` | <code>series&nbsp;int</code> |  | 第一个点的 x 坐标（bar 索引或 UNIX 时间）。 |
| `y1` | <code>series&nbsp;float</code> |  | 第一个点（价格）的 y 坐标。 |
| `x2` | <code>series&nbsp;int</code> |  | 第二个点的 x 坐标（bar 索引或 UNIX 时间）。 |
| `y2` | <code>series&nbsp;float</code> |  | 第二个点（价格）的 y 坐标。 |
| `xloc` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/XLoc">XLoc</a></code> | `XLoc.BarIndex` | x 位置类型：xloc.bar_index 或 xloc.bar_time。 |
| `extend` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Extend">Extend</a></code> | `Extend.None` | 扩展模式：extend.none、extend.left、extend.right或extend.both。 |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `na` | 线条的颜色。 |
| `style` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/LineStyle">LineStyle</a></code> | `LineStyle.Solid` | 线条样式。 |
| `width` | <code>series&nbsp;int</code> | `1` | 线宽（以像素为单位）。 |
| `force_overlay` | <code>series&nbsp;bool</code> | `false` | 如果为 true，则该线将呈现在顶部。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Line">Line</a></code>

</div>

## 静态属性

### all {#all}

**类型:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Line">Line</a>&gt;</code>

返回一个数组，其中填充了脚本绘制的所有当前行。

## 方法

### copy {#copy}

```navi
Line.copy(id: series Line): series Line
```

创建指定行的拷贝并返回其 id。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Line">Line</a></code> |  | 要复制的行。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Line">Line</a></code>

---

### delete {#delete}

```navi
Line.delete(id: series Line)
```

从图表中删除指定的线。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Line">Line</a></code> |  | 要删除的行。 |

---

### get_price {#get_price}

```navi
Line.get_price(id: series Line, x: series int): series float
```

返回给定 bar 索引处的价格水平。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Line">Line</a></code> |  | 获取价格的线路。 |
| `x` | <code>series&nbsp;int</code> |  | 获取价格的 bar 索引或 UNIX 时间。 |

**返回:** <code>series&nbsp;float</code>

---

### get_x1 {#get_x1}

```navi
Line.get_x1(id: series Line): series int
```

返回线的第一个点的 UNIX 时间或 bar 索引（取决于最后设置的 xloc 值）。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Line">Line</a></code> |  | 从中获取 x1 坐标的线。 |

**返回:** <code>series&nbsp;int</code>

---

### get_x2 {#get_x2}

```navi
Line.get_x2(id: series Line): series int
```

返回该行第二个点的 UNIX 时间或 bar 索引（取决于最后设置的 xloc 值）。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Line">Line</a></code> |  | 从中获取 x2 坐标的线。 |

**返回:** <code>series&nbsp;int</code>

---

### get_y1 {#get_y1}

```navi
Line.get_y1(id: series Line): series float
```

返回线的第一个点的价格。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Line">Line</a></code> |  | 从中获取 y1 坐标的线。 |

**返回:** <code>series&nbsp;float</code>

---

### get_y2 {#get_y2}

```navi
Line.get_y2(id: series Line): series float
```

返回该线第二个点的价格。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Line">Line</a></code> |  | 从中获取 y2 坐标的线。 |

**返回:** <code>series&nbsp;float</code>

---

### set_color {#set_color}

```navi
Line.set_color(id: series Line, color: series Color)
```

设置线条颜色。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Line">Line</a></code> |  | 要修改的行。 |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> |  | 线条的新颜色。 |

---

### set_extend {#set_extend}

```navi
Line.set_extend(id: series Line, extend: series Extend)
```

设置该线对象的延伸类型。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Line">Line</a></code> |  | 要修改的行。 |
| `extend` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Extend">Extend</a></code> |  | 扩展模式：extend.none、extend.left、extend.right或extend.both。 |

---

### set_first_point {#set_first_point}

```navi
Line.set_first_point(id: series Line, point: series chart.Point)
```

设置该线对象的第一个点。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Line">Line</a></code> |  | 要修改的行。 |
| `point` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/chart/Point">chart.Point</a></code> |  | 指定新的第一个点的 <code>chart.point</code> 对象。 |

---

### set_second_point {#set_second_point}

```navi
Line.set_second_point(id: series Line, point: series chart.Point)
```

设置该直线对象的第二个点。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Line">Line</a></code> |  | 要修改的行。 |
| `point` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/chart/Point">chart.Point</a></code> |  | 指定新的第二个点的 <code>chart.point</code> 对象。 |

---

### set_style {#set_style}

```navi
Line.set_style(id: series Line, style: series LineStyle)
```

设置线条样式。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Line">Line</a></code> |  | 要修改的行。 |
| `style` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/LineStyle">LineStyle</a></code> |  | 新的线条样式。 |

---

### set_width {#set_width}

```navi
Line.set_width(id: series Line, width: series int)
```

设置线宽。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Line">Line</a></code> |  | 要修改的行。 |
| `width` | <code>series&nbsp;int</code> |  | 新线宽（以像素为单位）。 |

---

### set_x1 {#set_x1}

```navi
Line.set_x1(id: series Line, x: series int)
```

设置第一个点的 bar 索引或 bar 时间（取决于 xloc）。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Line">Line</a></code> |  | 要修改的行。 |
| `x` | <code>series&nbsp;int</code> |  | 第一个点的新 x 坐标。 |

---

### set_x2 {#set_x2}

```navi
Line.set_x2(id: series Line, x: series int)
```

设置第二个点的 bar 索引或 bar 时间（取决于 xloc）。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Line">Line</a></code> |  | 要修改的行。 |
| `x` | <code>series&nbsp;int</code> |  | 第二个点的新 x 坐标。 |

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

设置 x 位置和新的 bar 索引/时间值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Line">Line</a></code> |  | 要修改的行。 |
| `x1` | <code>series&nbsp;int</code> |  | 第一个点的新 x 坐标。 |
| `x2` | <code>series&nbsp;int</code> |  | 第二个点的新 x 坐标。 |
| `xloc` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/XLoc">XLoc</a></code> |  | x 位置类型：xloc.bar_index 或 xloc.bar_time。 |

---

### set_xy1 {#set_xy1}

```navi
Line.set_xy1(id: series Line, x: series int, y: series float)
```

设置第一个点的 bar 索引/时间和价格。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Line">Line</a></code> |  | 要修改的行。 |
| `x` | <code>series&nbsp;int</code> |  | 第一个点的新 x 坐标。 |
| `y` | <code>series&nbsp;float</code> |  | 第一个点的新 y 坐标。 |

---

### set_xy2 {#set_xy2}

```navi
Line.set_xy2(id: series Line, x: series int, y: series float)
```

设置第二个点的 bar 索引/时间和价格。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Line">Line</a></code> |  | 要修改的行。 |
| `x` | <code>series&nbsp;int</code> |  | 第二个点的新 x 坐标。 |
| `y` | <code>series&nbsp;float</code> |  | 第二个点的新 y 坐标。 |

---

### set_y1 {#set_y1}

```navi
Line.set_y1(id: series Line, y: series float)
```

设置第一个点的价格。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Line">Line</a></code> |  | 要修改的行。 |
| `y` | <code>series&nbsp;float</code> |  | 第一个点的新 y 坐标。 |

---

### set_y2 {#set_y2}

```navi
Line.set_y2(id: series Line, y: series float)
```

设置第二个点的价格。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Line">Line</a></code> |  | 要修改的行。 |
| `y` | <code>series&nbsp;float</code> |  | 第二个点的新 y 坐标。 |
