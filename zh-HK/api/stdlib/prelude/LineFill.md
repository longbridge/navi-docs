---
title: "LineFill"
---

# LineFill

兩行之間的行填充句柄。

## 靜態方法

### new {#new}

```navi
LineFill.new(
    line1: series Line,
    line2: series Line,
    color: series Color
  ): series LineFill
```

創建一個新的行填充對象並將其顯示在圖表上，用 `color` 中指定的顏色填充 `line1` 和 `line2` 之間的空間。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `line1` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Line">Line</a></code> |  |  |
| `line2` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Line">Line</a></code> |  |  |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> |  |  |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/LineFill">LineFill</a></code>

## 靜態屬性

### all {#all}

**類型:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/LineFill">LineFill</a>&gt;</code>

傳回一個陣列，其中填充了腳本繪製的所有當前行填充。

## 方法

### delete {#delete}

```navi
LineFill.delete(id: series LineFill)
```

從圖表中刪除指定的線條填充。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/LineFill">LineFill</a></code> |  |  |

---

### get_line1 {#get_line1}

```navi
LineFill.get_line1(id: series LineFill): series Line
```

傳回行填充的第一行。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/LineFill">LineFill</a></code> |  |  |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Line">Line</a></code>

---

### get_line2 {#get_line2}

```navi
LineFill.get_line2(id: series LineFill): series Line
```

傳回換行符的第二行。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/LineFill">LineFill</a></code> |  |  |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Line">Line</a></code>

---

### set_color {#set_color}

```navi
LineFill.set_color(id: series LineFill, color: series Color)
```

設定線條填充的顏色。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/LineFill">LineFill</a></code> |  |  |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> |  |  |
