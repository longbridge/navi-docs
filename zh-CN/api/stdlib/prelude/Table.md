---
title: "Table"
---

<script setup>
import { ref } from 'vue'
const _s0 = ref(0)
const _s1 = ref(0)
</script>

# Table

表格绘图的句柄。

## 静态方法

### new {#new}

```navi
Table.new(
    position: series Position,
    columns: series int,
    rows: series int,
    bg_color: series Color = na,
    frame_color: series Color = na,
    frame_width: series int = 0,
    border_color: series Color = na,
    border_width: series int = 0,
    force_overlay: series bool = false
  ): series Table
```

在图表上创建一个表格对象。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `position` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Position">Position</a></code> |  | 表格在图表上的位置（例如，Position.TopLeft、Position.TopCenter 等）。 |
| `columns` | <code>series&nbsp;int</code> |  | 表中的列数。 |
| `rows` | <code>series&nbsp;int</code> |  | 表中的行数。 |
| `bg_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `na` | 表格的背景颜色。 |
| `frame_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `na` | 表格的边框颜色。 |
| `frame_width` | <code>series&nbsp;int</code> | `0` | 框架边框宽度（以像素为单位）。 |
| `border_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `na` | 表格边框颜色。 |
| `border_width` | <code>series&nbsp;int</code> | `0` | 表格边框宽度（以像素为单位）。 |
| `force_overlay` | <code>series&nbsp;bool</code> | `false` | 如果为 true，则表格将呈现在顶部。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Table">Table</a></code>

## 静态属性

### all {#all}

**类型:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Table">Table</a>&gt;</code>

返回一个数组，其中填充了脚本绘制的所有当前表。

## 方法

### cell {#cell}

<OverloadTabs v-model="_s0" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Table.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">cell</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(table_id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Table, column</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, row</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> \"\"</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, width</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, height</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color.BLACK, text_halign</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextHAlign </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextHAlign.Center, text_valign</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextVAlign </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextVAlign.Center, text_size</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 14</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, bg_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, tooltip</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_font_family</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> FontFamily </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> FontFamily.Default, text_formatting</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextFormat </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextFormat.NONE)</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Table.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">cell</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(table_id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Table, column</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, row</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> \"\"</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, width</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, height</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color.BLACK, text_halign</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextHAlign </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextHAlign.Center, text_valign</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextVAlign </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextVAlign.Center, text_size</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Size </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Size.Auto, bg_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, tooltip</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_font_family</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> FontFamily </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> FontFamily.Default, text_formatting</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextFormat </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextFormat.NONE)</span>"]' />

<div v-show="_s0 === 0">

设置表中特定单元格的属性。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Table">Table</a></code> |  | 要修改的表对象。 |
| `column` | <code>series&nbsp;int</code> |  | 单元格的列索引（从 0 开始）。 |
| `row` | <code>series&nbsp;int</code> |  | 单元格的行索引（从 0 开始）。 |
| `text` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `""` | 单元格的文本内容。 |
| `width` | <code>series&nbsp;float</code> | `0` | 单元格的宽度（以像素为单位）。 |
| `height` | <code>series&nbsp;float</code> | `0` | 单元格的高度（以像素为单位）。 |
| `text_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `Color.BLACK` | 文字颜色。 |
| `text_halign` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextHAlign">TextHAlign</a></code> | `TextHAlign.Center` | 水平文本对齐方式。 |
| `text_valign` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextVAlign">TextVAlign</a></code> | `TextVAlign.Center` | 垂直文本对齐方式。 |
| `text_size` | <code>series&nbsp;int</code> | `14` | 文本大小（以像素为单位）。 |
| `bg_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `na` | 单元格的背景颜色。 |
| `tooltip` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 单元格的工具提示文本。 |
| `text_font_family` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/FontFamily">FontFamily</a></code> | `FontFamily.Default` | 文本的字体系列。 |
| `text_formatting` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextFormat">TextFormat</a></code> | `TextFormat.NONE` | 文本格式选项。 |

</div>

<div v-show="_s0 === 1">

设置表中特定单元格的属性。将文本大小重载为命名常量。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Table">Table</a></code> |  | 要修改的表对象。 |
| `column` | <code>series&nbsp;int</code> |  | 单元格的列索引（从 0 开始）。 |
| `row` | <code>series&nbsp;int</code> |  | 单元格的行索引（从 0 开始）。 |
| `text` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `""` | 单元格的文本内容。 |
| `width` | <code>series&nbsp;float</code> | `0` | 单元格的宽度（以像素为单位）。 |
| `height` | <code>series&nbsp;float</code> | `0` | 单元格的高度（以像素为单位）。 |
| `text_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `Color.BLACK` | 文字颜色。 |
| `text_halign` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextHAlign">TextHAlign</a></code> | `TextHAlign.Center` | 水平文本对齐方式。 |
| `text_valign` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextVAlign">TextVAlign</a></code> | `TextVAlign.Center` | 垂直文本对齐方式。 |
| `text_size` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Size">Size</a></code> | `Size.Auto` | 文本大小作为命名常量。 |
| `bg_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `na` | 单元格的背景颜色。 |
| `tooltip` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `na` | 单元格的工具提示文本。 |
| `text_font_family` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/FontFamily">FontFamily</a></code> | `FontFamily.Default` | 文本的字体系列。 |
| `text_formatting` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextFormat">TextFormat</a></code> | `TextFormat.NONE` | 文本格式选项。 |

</div>

---

### cell_set_bg_color {#cell_set_bg_color}

```navi
Table.cell_set_bg_color(
    table_id: series Table,
    column: series int,
    row: series int,
    bg_color: series Color
  )
```

设置表格中特定单元格的背景颜色。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Table">Table</a></code> |  | 要修改的表对象。 |
| `column` | <code>series&nbsp;int</code> |  | 单元格的列索引（从 0 开始）。 |
| `row` | <code>series&nbsp;int</code> |  | 单元格的行索引（从 0 开始）。 |
| `bg_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> |  | 单元格的新背景颜色。 |

---

### cell_set_height {#cell_set_height}

```navi
Table.cell_set_height(
    table_id: series Table,
    column: series int,
    row: series int,
    height: series float
  )
```

设置表格中特定单元格的高度。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Table">Table</a></code> |  | 要修改的表对象。 |
| `column` | <code>series&nbsp;int</code> |  | 单元格的列索引（从 0 开始）。 |
| `row` | <code>series&nbsp;int</code> |  | 单元格的行索引（从 0 开始）。 |
| `height` | <code>series&nbsp;float</code> |  | 单元格的新高度（以像素为单位）。 |

---

### cell_set_text {#cell_set_text}

```navi
Table.cell_set_text(
    table_id: series Table,
    column: series int,
    row: series int,
    text: series String
  )
```

设置表格中特定单元格的文本。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Table">Table</a></code> |  | 要修改的表对象。 |
| `column` | <code>series&nbsp;int</code> |  | 单元格的列索引（从 0 开始）。 |
| `row` | <code>series&nbsp;int</code> |  | 单元格的行索引（从 0 开始）。 |
| `text` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 单元格的新文本内容。 |

---

### cell_set_text_color {#cell_set_text_color}

```navi
Table.cell_set_text_color(
    table_id: series Table,
    column: series int,
    row: series int,
    text_color: series Color
  )
```

设置表格中特定单元格的文本颜色。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Table">Table</a></code> |  | 要修改的表对象。 |
| `column` | <code>series&nbsp;int</code> |  | 单元格的列索引（从 0 开始）。 |
| `row` | <code>series&nbsp;int</code> |  | 单元格的行索引（从 0 开始）。 |
| `text_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> |  | 单元格的新文本颜色。 |

---

### cell_set_text_font_family {#cell_set_text_font_family}

```navi
Table.cell_set_text_font_family(
    table_id: series Table,
    column: series int,
    row: series int,
    text_font_family: series String
  )
```

设置表格中特定单元格中文本的字体系列。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Table">Table</a></code> |  | 要修改的表对象。 |
| `column` | <code>series&nbsp;int</code> |  | 单元格的列索引（从 0 开始）。 |
| `row` | <code>series&nbsp;int</code> |  | 单元格的行索引（从 0 开始）。 |
| `text_font_family` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 字体系列：FontFamily.Default 或 FontFamily.Monospace。 |

---

### cell_set_text_formatting {#cell_set_text_formatting}

```navi
Table.cell_set_text_formatting(
    table_id: series Table,
    column: series int,
    row: series int,
    text_formatting: const TextFormat
  )
```

设置表格中特定单元格中文本的文本格式。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Table">Table</a></code> |  | 要修改的表对象。 |
| `column` | <code>series&nbsp;int</code> |  | 单元格的列索引（从 0 开始）。 |
| `row` | <code>series&nbsp;int</code> |  | 单元格的行索引（从 0 开始）。 |
| `text_formatting` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextFormat">TextFormat</a></code> |  | 文本格式选项。 |

---

### cell_set_text_halign {#cell_set_text_halign}

```navi
Table.cell_set_text_halign(
    table_id: series Table,
    column: series int,
    row: series int,
    text_halign: series String
  )
```

设置表格中特定单元格中文本的水平对齐方式。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Table">Table</a></code> |  | 要修改的表对象。 |
| `column` | <code>series&nbsp;int</code> |  | 单元格的列索引（从 0 开始）。 |
| `row` | <code>series&nbsp;int</code> |  | 单元格的行索引（从 0 开始）。 |
| `text_halign` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 水平文本对齐方式：TextHAlign.Left、TextHAlign.Center 或 TextHAlign.Right。 |

---

### cell_set_text_size {#cell_set_text_size}

<OverloadTabs v-model="_s1" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Table.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">cell_set_text_size</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(table_id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Table, column</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, row</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_size</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Table.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">cell_set_text_size</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(table_id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Table, column</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, row</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_size</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Size)</span>"]' />

<div v-show="_s1 === 0">

设置表格中特定单元格的文本大小。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Table">Table</a></code> |  | 要修改的表对象。 |
| `column` | <code>series&nbsp;int</code> |  | 单元格的列索引（从 0 开始）。 |
| `row` | <code>series&nbsp;int</code> |  | 单元格的行索引（从 0 开始）。 |
| `text_size` | <code>series&nbsp;int</code> |  | 新的文本大小（以像素为单位）。 |

</div>

<div v-show="_s1 === 1">

设置表格中特定单元格的文本大小。使用命名大小常量重载。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Table">Table</a></code> |  | 要修改的表对象。 |
| `column` | <code>series&nbsp;int</code> |  | 单元格的列索引（从 0 开始）。 |
| `row` | <code>series&nbsp;int</code> |  | 单元格的行索引（从 0 开始）。 |
| `text_size` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Size">Size</a></code> |  | 新的文本大小作为命名常量（Size.Tiny、Size.Small、Size.Normal、Size.Large、Size.Huge）。 |

</div>

---

### cell_set_text_valign {#cell_set_text_valign}

```navi
Table.cell_set_text_valign(
    table_id: series Table,
    column: series int,
    row: series int,
    text_valign: series String
  )
```

设置表格中特定单元格中文本的垂直对齐方式。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Table">Table</a></code> |  | 要修改的表对象。 |
| `column` | <code>series&nbsp;int</code> |  | 单元格的列索引（从 0 开始）。 |
| `row` | <code>series&nbsp;int</code> |  | 单元格的行索引（从 0 开始）。 |
| `text_valign` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 垂直文本对齐方式：text.align_top、TextHAlign.Center 或 text.align_bottom。 |

---

### cell_set_tooltip {#cell_set_tooltip}

```navi
Table.cell_set_tooltip(
    table_id: series Table,
    column: series int,
    row: series int,
    tooltip: series String
  )
```

设置表格中特定单元格的工具提示。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Table">Table</a></code> |  | 要修改的表对象。 |
| `column` | <code>series&nbsp;int</code> |  | 单元格的列索引（从 0 开始）。 |
| `row` | <code>series&nbsp;int</code> |  | 单元格的行索引（从 0 开始）。 |
| `tooltip` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 单元格的新工具提示文本。 |

---

### cell_set_width {#cell_set_width}

```navi
Table.cell_set_width(
    table_id: series Table,
    column: series int,
    row: series int,
    width: series float
  )
```

设置表格中特定单元格的宽度。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Table">Table</a></code> |  | 要修改的表对象。 |
| `column` | <code>series&nbsp;int</code> |  | 单元格的列索引（从 0 开始）。 |
| `row` | <code>series&nbsp;int</code> |  | 单元格的行索引（从 0 开始）。 |
| `width` | <code>series&nbsp;float</code> |  | 单元格的新宽度（以像素为单位）。 |

---

### clear {#clear}

```navi
Table.clear(
    table_id: series Table,
    start_column: series int = 0,
    start_row: series int = 0,
    end_column: series int = na,
    end_row: series int = na
  )
```

清除表格中指定单元格范围的内容。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Table">Table</a></code> |  | 要修改的表。 |
| `start_column` | <code>series&nbsp;int</code> | `0` | 起始列索引。 |
| `start_row` | <code>series&nbsp;int</code> | `0` | 起始行索引。 |
| `end_column` | <code>series&nbsp;int</code> | `na` | 结束列索引。当 na 时，表示最后一列。 |
| `end_row` | <code>series&nbsp;int</code> | `na` | 结束行索引。当 na 时，表示最后一行。 |

---

### delete {#delete}

```navi
Table.delete(table_id: series Table)
```

从图表中删除表格。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Table">Table</a></code> |  | 要删除的表。 |

---

### merge_cells {#merge_cells}

```navi
Table.merge_cells(
    table_id: series Table,
    start_column: series int = 0,
    start_row: series int = 0,
    end_column: series int = na,
    end_row: series int = na
  )
```

合并表格中指定范围的单元格。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Table">Table</a></code> |  | 要修改的表。 |
| `start_column` | <code>series&nbsp;int</code> | `0` | 起始列索引。 |
| `start_row` | <code>series&nbsp;int</code> | `0` | 起始行索引。 |
| `end_column` | <code>series&nbsp;int</code> | `na` | 结束列索引。当 na 时，表示最后一列。 |
| `end_row` | <code>series&nbsp;int</code> | `na` | 结束行索引。当 na 时，表示最后一行。 |

---

### set_bg_color {#set_bg_color}

```navi
Table.set_bg_color(table_id: series Table, bg_color: series Color)
```

设置表格的背景颜色。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Table">Table</a></code> |  | 要修改的表对象。 |
| `bg_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> |  | 表格的新背景颜色。 |

---

### set_border_color {#set_border_color}

```navi
Table.set_border_color(table_id: series Table, border_color: series Color)
```

设置表格的边框颜色。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Table">Table</a></code> |  | 要修改的表对象。 |
| `border_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> |  | 表格的新边框颜色。 |

---

### set_border_width {#set_border_width}

```navi
Table.set_border_width(table_id: series Table, border_width: series int)
```

设置表格的边框宽度。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Table">Table</a></code> |  | 要修改的表对象。 |
| `border_width` | <code>series&nbsp;int</code> |  | 新的边框宽度（以像素为单位）。 |

---

### set_frame_color {#set_frame_color}

```navi
Table.set_frame_color(table_id: series Table, frame_color: series Color)
```

设置表格的框架颜色。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Table">Table</a></code> |  | 要修改的表对象。 |
| `frame_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> |  | 表格的新框架边框颜色。 |

---

### set_frame_width {#set_frame_width}

```navi
Table.set_frame_width(table_id: series Table, frame_width: series int)
```

设置表格的框架宽度。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Table">Table</a></code> |  | 要修改的表对象。 |
| `frame_width` | <code>series&nbsp;int</code> |  | 新的框架边框宽度（以像素为单位）。 |

---

### set_position {#set_position}

```navi
Table.set_position(table_id: series Table, position: series Position)
```

设置表格的位置。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Table">Table</a></code> |  | 要修改的表对象。 |
| `position` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Position">Position</a></code> |  | 表在图表上的新位置。 |
