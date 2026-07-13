---
title: "Table"
---

<script setup>
import { ref } from 'vue'
const _s0 = ref(0)
const _s1 = ref(0)
</script>

# Table

Handle for a table drawing.

## Static Methods

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

Creates a table object on the chart.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `position` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Position">Position</a></code> |  | The position of the table on the chart (e.g., position.top_left, position.top_center, etc.). |
| `columns` | <code>series&nbsp;int</code> |  | The number of columns in the table. |
| `rows` | <code>series&nbsp;int</code> |  | The number of rows in the table. |
| `bg_color` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code> | `na` | The background color of the table. |
| `frame_color` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code> | `na` | The frame border color of the table. |
| `frame_width` | <code>series&nbsp;int</code> | `0` | The frame border width in pixels. |
| `border_color` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code> | `na` | The table border color. |
| `border_width` | <code>series&nbsp;int</code> | `0` | The table border width in pixels. |
| `force_overlay` | <code>series&nbsp;bool</code> | `false` | If true, the table is rendered on top. |

**Returns:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Table">Table</a></code>

## Static Properties

### all {#all}

**Type:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/api/stdlib/prelude/Table">Table</a>&gt;</code>

Returns an array filled with all the current tables drawn by the script.

## Methods

### cell {#cell}

<OverloadTabs v-model="_s0" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Table.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">cell</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(table_id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Table, column</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, row</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> \"\"</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, width</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, height</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color.BLACK, text_halign</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextHAlign </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextHAlign.Center, text_valign</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextVAlign </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextVAlign.Center, text_size</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 14</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, bg_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, tooltip</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_font_family</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> FontFamily </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> FontFamily.Default, text_formatting</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextFormat </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextFormat.NONE)</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Table.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">cell</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(table_id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Table, column</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, row</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> \"\"</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, width</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, height</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color.BLACK, text_halign</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextHAlign </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextHAlign.Center, text_valign</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextVAlign </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextVAlign.Center, text_size</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Size </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Size.Auto, bg_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, tooltip</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_font_family</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> FontFamily </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> FontFamily.Default, text_formatting</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextFormat </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextFormat.NONE)</span>"]' />

<div v-show="_s0 === 0">

Sets the properties of a specific cell in a table.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Table">Table</a></code> |  | The table object to modify. |
| `column` | <code>series&nbsp;int</code> |  | The column index of the cell (0-based). |
| `row` | <code>series&nbsp;int</code> |  | The row index of the cell (0-based). |
| `text` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `""` | The text content of the cell. |
| `width` | <code>series&nbsp;float</code> | `0` | The width of the cell in pixels. |
| `height` | <code>series&nbsp;float</code> | `0` | The height of the cell in pixels. |
| `text_color` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code> | `Color.BLACK` | The text color. |
| `text_halign` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/TextHAlign">TextHAlign</a></code> | `TextHAlign.Center` | The horizontal text alignment. |
| `text_valign` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/TextVAlign">TextVAlign</a></code> | `TextVAlign.Center` | The vertical text alignment. |
| `text_size` | <code>series&nbsp;int</code> | `14` | The text size in pixels. |
| `bg_color` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code> | `na` | The background color of the cell. |
| `tooltip` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The tooltip text for the cell. |
| `text_font_family` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/FontFamily">FontFamily</a></code> | `FontFamily.Default` | The font family for the text. |
| `text_formatting` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/TextFormat">TextFormat</a></code> | `TextFormat.NONE` | The text formatting options. |

</div>

<div v-show="_s0 === 1">

Sets the properties of a specific cell in a table.

Overload with text size as named constant.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Table">Table</a></code> |  | The table object to modify. |
| `column` | <code>series&nbsp;int</code> |  | The column index of the cell (0-based). |
| `row` | <code>series&nbsp;int</code> |  | The row index of the cell (0-based). |
| `text` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `""` | The text content of the cell. |
| `width` | <code>series&nbsp;float</code> | `0` | The width of the cell in pixels. |
| `height` | <code>series&nbsp;float</code> | `0` | The height of the cell in pixels. |
| `text_color` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code> | `Color.BLACK` | The text color. |
| `text_halign` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/TextHAlign">TextHAlign</a></code> | `TextHAlign.Center` | The horizontal text alignment. |
| `text_valign` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/TextVAlign">TextVAlign</a></code> | `TextVAlign.Center` | The vertical text alignment. |
| `text_size` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Size">Size</a></code> | `Size.Auto` | The text size as a named constant. |
| `bg_color` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code> | `na` | The background color of the cell. |
| `tooltip` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `na` | The tooltip text for the cell. |
| `text_font_family` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/FontFamily">FontFamily</a></code> | `FontFamily.Default` | The font family for the text. |
| `text_formatting` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/TextFormat">TextFormat</a></code> | `TextFormat.NONE` | The text formatting options. |

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

Sets the background color of a specific cell in a table.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Table">Table</a></code> |  | The table object to modify. |
| `column` | <code>series&nbsp;int</code> |  | The column index of the cell (0-based). |
| `row` | <code>series&nbsp;int</code> |  | The row index of the cell (0-based). |
| `bg_color` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code> |  | The new background color for the cell. |

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

Sets the height of a specific cell in a table.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Table">Table</a></code> |  | The table object to modify. |
| `column` | <code>series&nbsp;int</code> |  | The column index of the cell (0-based). |
| `row` | <code>series&nbsp;int</code> |  | The row index of the cell (0-based). |
| `height` | <code>series&nbsp;float</code> |  | The new height of the cell in pixels. |

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

Sets the text of a specific cell in a table.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Table">Table</a></code> |  | The table object to modify. |
| `column` | <code>series&nbsp;int</code> |  | The column index of the cell (0-based). |
| `row` | <code>series&nbsp;int</code> |  | The row index of the cell (0-based). |
| `text` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The new text content for the cell. |

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

Sets the text color of a specific cell in a table.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Table">Table</a></code> |  | The table object to modify. |
| `column` | <code>series&nbsp;int</code> |  | The column index of the cell (0-based). |
| `row` | <code>series&nbsp;int</code> |  | The row index of the cell (0-based). |
| `text_color` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code> |  | The new text color for the cell. |

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

Sets the font family of the text in a specific cell in a table.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Table">Table</a></code> |  | The table object to modify. |
| `column` | <code>series&nbsp;int</code> |  | The column index of the cell (0-based). |
| `row` | <code>series&nbsp;int</code> |  | The row index of the cell (0-based). |
| `text_font_family` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The font family: FontFamily.Default or font.family_monospace. |

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

Sets the text formatting of the text in a specific cell in a table.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Table">Table</a></code> |  | The table object to modify. |
| `column` | <code>series&nbsp;int</code> |  | The column index of the cell (0-based). |
| `row` | <code>series&nbsp;int</code> |  | The row index of the cell (0-based). |
| `text_formatting` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/TextFormat">TextFormat</a></code> |  | The text formatting options. |

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

Sets the horizontal alignment of the text in a specific cell in a table.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Table">Table</a></code> |  | The table object to modify. |
| `column` | <code>series&nbsp;int</code> |  | The column index of the cell (0-based). |
| `row` | <code>series&nbsp;int</code> |  | The row index of the cell (0-based). |
| `text_halign` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The horizontal text alignment: text.align_left, text.align_center, or text.align_right. |

---

### cell_set_text_size {#cell_set_text_size}

<OverloadTabs v-model="_s1" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Table.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">cell_set_text_size</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(table_id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Table, column</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, row</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_size</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Table.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">cell_set_text_size</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(table_id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Table, column</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, row</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_size</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Size)</span>"]' />

<div v-show="_s1 === 0">

Sets the text size of a specific cell in a table.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Table">Table</a></code> |  | The table object to modify. |
| `column` | <code>series&nbsp;int</code> |  | The column index of the cell (0-based). |
| `row` | <code>series&nbsp;int</code> |  | The row index of the cell (0-based). |
| `text_size` | <code>series&nbsp;int</code> |  | The new text size in pixels. |

</div>

<div v-show="_s1 === 1">

Sets the text size of a specific cell in a table.

Overload with named size constant.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Table">Table</a></code> |  | The table object to modify. |
| `column` | <code>series&nbsp;int</code> |  | The column index of the cell (0-based). |
| `row` | <code>series&nbsp;int</code> |  | The row index of the cell (0-based). |
| `text_size` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Size">Size</a></code> |  | The new text size as a named constant (size.tiny, size.small, size.normal, size.large, size.huge). |

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

Sets the vertical alignment of the text in a specific cell in a table.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Table">Table</a></code> |  | The table object to modify. |
| `column` | <code>series&nbsp;int</code> |  | The column index of the cell (0-based). |
| `row` | <code>series&nbsp;int</code> |  | The row index of the cell (0-based). |
| `text_valign` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The vertical text alignment: text.align_top, text.align_center, or text.align_bottom. |

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

Sets the tooltip of a specific cell in a table.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Table">Table</a></code> |  | The table object to modify. |
| `column` | <code>series&nbsp;int</code> |  | The column index of the cell (0-based). |
| `row` | <code>series&nbsp;int</code> |  | The row index of the cell (0-based). |
| `tooltip` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The new tooltip text for the cell. |

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

Sets the width of a specific cell in a table.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Table">Table</a></code> |  | The table object to modify. |
| `column` | <code>series&nbsp;int</code> |  | The column index of the cell (0-based). |
| `row` | <code>series&nbsp;int</code> |  | The row index of the cell (0-based). |
| `width` | <code>series&nbsp;float</code> |  | The new width of the cell in pixels. |

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

Clears the contents of the specified range of cells in the table.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Table">Table</a></code> |  | The table to modify. |
| `start_column` | <code>series&nbsp;int</code> | `0` | The starting column index. |
| `start_row` | <code>series&nbsp;int</code> | `0` | The starting row index. |
| `end_column` | <code>series&nbsp;int</code> | `na` | The ending column index. When na, denotes last column. |
| `end_row` | <code>series&nbsp;int</code> | `na` | The ending row index. When na, denotes last row. |

---

### delete {#delete}

```navi
Table.delete(table_id: series Table)
```

Deletes the table from the chart.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Table">Table</a></code> |  | The table to delete. |

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

Merges the specified range of cells in the table.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Table">Table</a></code> |  | The table to modify. |
| `start_column` | <code>series&nbsp;int</code> | `0` | The starting column index. |
| `start_row` | <code>series&nbsp;int</code> | `0` | The starting row index. |
| `end_column` | <code>series&nbsp;int</code> | `na` | The ending column index. When na, denotes last column. |
| `end_row` | <code>series&nbsp;int</code> | `na` | The ending row index. When na, denotes last row. |

---

### set_bg_color {#set_bg_color}

```navi
Table.set_bg_color(table_id: series Table, bg_color: series Color)
```

Sets the background color of the table.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Table">Table</a></code> |  | The table object to modify. |
| `bg_color` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code> |  | The new background color of the table. |

---

### set_border_color {#set_border_color}

```navi
Table.set_border_color(table_id: series Table, border_color: series Color)
```

Sets the border color of the table.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Table">Table</a></code> |  | The table object to modify. |
| `border_color` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code> |  | The new border color of the table. |

---

### set_border_width {#set_border_width}

```navi
Table.set_border_width(table_id: series Table, border_width: series int)
```

Sets the border width of the table.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Table">Table</a></code> |  | The table object to modify. |
| `border_width` | <code>series&nbsp;int</code> |  | The new border width in pixels. |

---

### set_frame_color {#set_frame_color}

```navi
Table.set_frame_color(table_id: series Table, frame_color: series Color)
```

Sets the frame color of the table.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Table">Table</a></code> |  | The table object to modify. |
| `frame_color` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code> |  | The new frame border color of the table. |

---

### set_frame_width {#set_frame_width}

```navi
Table.set_frame_width(table_id: series Table, frame_width: series int)
```

Sets the frame width of the table.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Table">Table</a></code> |  | The table object to modify. |
| `frame_width` | <code>series&nbsp;int</code> |  | The new frame border width in pixels. |

---

### set_position {#set_position}

```navi
Table.set_position(table_id: series Table, position: series Position)
```

Sets the position of the table.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Table">Table</a></code> |  | The table object to modify. |
| `position` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Position">Position</a></code> |  | The new position of the table on the chart. |
