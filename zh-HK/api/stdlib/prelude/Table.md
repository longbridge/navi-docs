---
title: "Table"
---

<script setup>
import { ref } from 'vue'
const _s0 = ref(0)
const _s1 = ref(0)
</script>

# Table

表格繪圖的句柄。

## 靜態方法

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

在圖表上創建一個表格對象。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `position` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Position">Position</a></code> |  | 表格在圖表上的位置（例如，Position.TopLeft、Position.TopCenter 等）。 |
| `columns` | <code>series&nbsp;int</code> |  | 表中的列數。 |
| `rows` | <code>series&nbsp;int</code> |  | 表中的行數。 |
| `bg_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `na` | 表格的背景顏色。 |
| `frame_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `na` | 表格的邊框顏色。 |
| `frame_width` | <code>series&nbsp;int</code> | `0` | 框架邊框寬度（以像素為單位）。 |
| `border_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `na` | 表格邊框顏色。 |
| `border_width` | <code>series&nbsp;int</code> | `0` | 表格邊框寬度（以像素為單位）。 |
| `force_overlay` | <code>series&nbsp;bool</code> | `false` | 如果為 true，則表格將呈現在頂部。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Table">Table</a></code>

## 靜態屬性

### all {#all}

**類型:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Table">Table</a>&gt;</code>

傳回一個陣列，其中填充了腳本繪製的所有當前表。

## 方法

### cell {#cell}

<OverloadTabs v-model="_s0" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Table.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">cell</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(table_id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Table, column</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, row</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> \"\"</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, width</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, height</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color.BLACK, text_halign</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextHAlign </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextHAlign.Center, text_valign</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextVAlign </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextVAlign.Center, text_size</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 14</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, bg_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, tooltip</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_font_family</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> FontFamily </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> FontFamily.Default, text_formatting</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextFormat </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextFormat.NONE)</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Table.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">cell</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(table_id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Table, column</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, row</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> \"\"</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, width</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, height</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color.BLACK, text_halign</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextHAlign </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextHAlign.Center, text_valign</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextVAlign </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextVAlign.Center, text_size</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Size </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Size.Auto, bg_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, tooltip</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_font_family</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> FontFamily </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> FontFamily.Default, text_formatting</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextFormat </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextFormat.NONE)</span>"]' />

<div v-show="_s0 === 0">

設定表中特定單元格的屬性。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Table">Table</a></code> |  | 要修改的表對象。 |
| `column` | <code>series&nbsp;int</code> |  | 單元格的列索引（從 0 開始）。 |
| `row` | <code>series&nbsp;int</code> |  | 單元格的行索引（從 0 開始）。 |
| `text` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `""` | 單元格的文本內容。 |
| `width` | <code>series&nbsp;float</code> | `0` | 單元格的寬度（以像素為單位）。 |
| `height` | <code>series&nbsp;float</code> | `0` | 單元格的高度（以像素為單位）。 |
| `text_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `Color.BLACK` | 文字顏色。 |
| `text_halign` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextHAlign">TextHAlign</a></code> | `TextHAlign.Center` | 水平文本對齊方式。 |
| `text_valign` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextVAlign">TextVAlign</a></code> | `TextVAlign.Center` | 垂直文本對齊方式。 |
| `text_size` | <code>series&nbsp;int</code> | `14` | 文本大小（以像素為單位）。 |
| `bg_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `na` | 單元格的背景顏色。 |
| `tooltip` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 單元格的工具提示文本。 |
| `text_font_family` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/FontFamily">FontFamily</a></code> | `FontFamily.Default` | 文本的字體系列。 |
| `text_formatting` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextFormat">TextFormat</a></code> | `TextFormat.NONE` | 文本格式選項。 |

</div>

<div v-show="_s0 === 1">

設定表中特定單元格的屬性。將文本大小重載為命名常量。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Table">Table</a></code> |  | 要修改的表對象。 |
| `column` | <code>series&nbsp;int</code> |  | 單元格的列索引（從 0 開始）。 |
| `row` | <code>series&nbsp;int</code> |  | 單元格的行索引（從 0 開始）。 |
| `text` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `""` | 單元格的文本內容。 |
| `width` | <code>series&nbsp;float</code> | `0` | 單元格的寬度（以像素為單位）。 |
| `height` | <code>series&nbsp;float</code> | `0` | 單元格的高度（以像素為單位）。 |
| `text_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `Color.BLACK` | 文字顏色。 |
| `text_halign` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextHAlign">TextHAlign</a></code> | `TextHAlign.Center` | 水平文本對齊方式。 |
| `text_valign` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextVAlign">TextVAlign</a></code> | `TextVAlign.Center` | 垂直文本對齊方式。 |
| `text_size` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Size">Size</a></code> | `Size.Auto` | 文本大小作為命名常量。 |
| `bg_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> | `na` | 單元格的背景顏色。 |
| `tooltip` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 單元格的工具提示文本。 |
| `text_font_family` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/FontFamily">FontFamily</a></code> | `FontFamily.Default` | 文本的字體系列。 |
| `text_formatting` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextFormat">TextFormat</a></code> | `TextFormat.NONE` | 文本格式選項。 |

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

設定表格中特定單元格的背景顏色。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Table">Table</a></code> |  | 要修改的表對象。 |
| `column` | <code>series&nbsp;int</code> |  | 單元格的列索引（從 0 開始）。 |
| `row` | <code>series&nbsp;int</code> |  | 單元格的行索引（從 0 開始）。 |
| `bg_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> |  | 單元格的新背景顏色。 |

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

設定表格中特定單元格的高度。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Table">Table</a></code> |  | 要修改的表對象。 |
| `column` | <code>series&nbsp;int</code> |  | 單元格的列索引（從 0 開始）。 |
| `row` | <code>series&nbsp;int</code> |  | 單元格的行索引（從 0 開始）。 |
| `height` | <code>series&nbsp;float</code> |  | 單元格的新高度（以像素為單位）。 |

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

設定表格中特定單元格的文本。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Table">Table</a></code> |  | 要修改的表對象。 |
| `column` | <code>series&nbsp;int</code> |  | 單元格的列索引（從 0 開始）。 |
| `row` | <code>series&nbsp;int</code> |  | 單元格的行索引（從 0 開始）。 |
| `text` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 單元格的新文本內容。 |

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

設定表格中特定單元格的文本顏色。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Table">Table</a></code> |  | 要修改的表對象。 |
| `column` | <code>series&nbsp;int</code> |  | 單元格的列索引（從 0 開始）。 |
| `row` | <code>series&nbsp;int</code> |  | 單元格的行索引（從 0 開始）。 |
| `text_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> |  | 單元格的新文本顏色。 |

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

設定表格中特定單元格中文本的字體系列。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Table">Table</a></code> |  | 要修改的表對象。 |
| `column` | <code>series&nbsp;int</code> |  | 單元格的列索引（從 0 開始）。 |
| `row` | <code>series&nbsp;int</code> |  | 單元格的行索引（從 0 開始）。 |
| `text_font_family` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 字體系列：FontFamily.Default 或 FontFamily.Monospace。 |

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

設定表格中特定單元格中文本的文本格式。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Table">Table</a></code> |  | 要修改的表對象。 |
| `column` | <code>series&nbsp;int</code> |  | 單元格的列索引（從 0 開始）。 |
| `row` | <code>series&nbsp;int</code> |  | 單元格的行索引（從 0 開始）。 |
| `text_formatting` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextFormat">TextFormat</a></code> |  | 文本格式選項。 |

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

設定表格中特定單元格中文本的水平對齊方式。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Table">Table</a></code> |  | 要修改的表對象。 |
| `column` | <code>series&nbsp;int</code> |  | 單元格的列索引（從 0 開始）。 |
| `row` | <code>series&nbsp;int</code> |  | 單元格的行索引（從 0 開始）。 |
| `text_halign` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 水平文本對齊方式：TextHAlign.Left、TextHAlign.Center 或 TextHAlign.Right。 |

---

### cell_set_text_size {#cell_set_text_size}

<OverloadTabs v-model="_s1" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Table.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">cell_set_text_size</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(table_id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Table, column</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, row</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_size</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Table.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">cell_set_text_size</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(table_id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Table, column</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, row</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_size</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Size)</span>"]' />

<div v-show="_s1 === 0">

設定表格中特定單元格的文本大小。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Table">Table</a></code> |  | 要修改的表對象。 |
| `column` | <code>series&nbsp;int</code> |  | 單元格的列索引（從 0 開始）。 |
| `row` | <code>series&nbsp;int</code> |  | 單元格的行索引（從 0 開始）。 |
| `text_size` | <code>series&nbsp;int</code> |  | 新的文本大小（以像素為單位）。 |

</div>

<div v-show="_s1 === 1">

設定表格中特定單元格的文本大小。使用命名大小常量重載。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Table">Table</a></code> |  | 要修改的表對象。 |
| `column` | <code>series&nbsp;int</code> |  | 單元格的列索引（從 0 開始）。 |
| `row` | <code>series&nbsp;int</code> |  | 單元格的行索引（從 0 開始）。 |
| `text_size` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Size">Size</a></code> |  | 新的文本大小作為命名常量（Size.Tiny、Size.Small、Size.Normal、Size.Large、Size.Huge）。 |

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

設定表格中特定單元格中文本的垂直對齊方式。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Table">Table</a></code> |  | 要修改的表對象。 |
| `column` | <code>series&nbsp;int</code> |  | 單元格的列索引（從 0 開始）。 |
| `row` | <code>series&nbsp;int</code> |  | 單元格的行索引（從 0 開始）。 |
| `text_valign` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 垂直文本對齊方式：text.align_top、TextHAlign.Center 或 text.align_bottom。 |

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

設定表格中特定單元格的工具提示。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Table">Table</a></code> |  | 要修改的表對象。 |
| `column` | <code>series&nbsp;int</code> |  | 單元格的列索引（從 0 開始）。 |
| `row` | <code>series&nbsp;int</code> |  | 單元格的行索引（從 0 開始）。 |
| `tooltip` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 單元格的新工具提示文本。 |

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

設定表格中特定單元格的寬度。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Table">Table</a></code> |  | 要修改的表對象。 |
| `column` | <code>series&nbsp;int</code> |  | 單元格的列索引（從 0 開始）。 |
| `row` | <code>series&nbsp;int</code> |  | 單元格的行索引（從 0 開始）。 |
| `width` | <code>series&nbsp;float</code> |  | 單元格的新寬度（以像素為單位）。 |

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

清除表格中指定單元格範圍的內容。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Table">Table</a></code> |  | 要修改的表。 |
| `start_column` | <code>series&nbsp;int</code> | `0` | 起始列索引。 |
| `start_row` | <code>series&nbsp;int</code> | `0` | 起始行索引。 |
| `end_column` | <code>series&nbsp;int</code> | `na` | 結束列索引。當 na 時，表示最後一列。 |
| `end_row` | <code>series&nbsp;int</code> | `na` | 結束行索引。當 na 時，表示最後一行。 |

---

### delete {#delete}

```navi
Table.delete(table_id: series Table)
```

從圖表中刪除表格。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Table">Table</a></code> |  | 要刪除的表。 |

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

合併表格中指定範圍的單元格。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Table">Table</a></code> |  | 要修改的表。 |
| `start_column` | <code>series&nbsp;int</code> | `0` | 起始列索引。 |
| `start_row` | <code>series&nbsp;int</code> | `0` | 起始行索引。 |
| `end_column` | <code>series&nbsp;int</code> | `na` | 結束列索引。當 na 時，表示最後一列。 |
| `end_row` | <code>series&nbsp;int</code> | `na` | 結束行索引。當 na 時，表示最後一行。 |

---

### set_bg_color {#set_bg_color}

```navi
Table.set_bg_color(table_id: series Table, bg_color: series Color)
```

設定表格的背景顏色。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Table">Table</a></code> |  | 要修改的表對象。 |
| `bg_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> |  | 表格的新背景顏色。 |

---

### set_border_color {#set_border_color}

```navi
Table.set_border_color(table_id: series Table, border_color: series Color)
```

設定表格的邊框顏色。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Table">Table</a></code> |  | 要修改的表對象。 |
| `border_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> |  | 表格的新邊框顏色。 |

---

### set_border_width {#set_border_width}

```navi
Table.set_border_width(table_id: series Table, border_width: series int)
```

設定表格的邊框寬度。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Table">Table</a></code> |  | 要修改的表對象。 |
| `border_width` | <code>series&nbsp;int</code> |  | 新的邊框寬度（以像素為單位）。 |

---

### set_frame_color {#set_frame_color}

```navi
Table.set_frame_color(table_id: series Table, frame_color: series Color)
```

設定表格的框架顏色。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Table">Table</a></code> |  | 要修改的表對象。 |
| `frame_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> |  | 表格的新框架邊框顏色。 |

---

### set_frame_width {#set_frame_width}

```navi
Table.set_frame_width(table_id: series Table, frame_width: series int)
```

設定表格的框架寬度。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Table">Table</a></code> |  | 要修改的表對象。 |
| `frame_width` | <code>series&nbsp;int</code> |  | 新的框架邊框寬度（以像素為單位）。 |

---

### set_position {#set_position}

```navi
Table.set_position(table_id: series Table, position: series Position)
```

設定表格的位置。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `table_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Table">Table</a></code> |  | 要修改的表對象。 |
| `position` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Position">Position</a></code> |  | 表在圖表上的新位置。 |
