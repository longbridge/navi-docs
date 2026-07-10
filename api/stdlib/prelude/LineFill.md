---
title: "LineFill"
---

# LineFill

Handle for a linefill between two lines.

## Static Methods

### new {#new}

```navi
LineFill.new(
    line1: series Line,
    line2: series Line,
    color: series Color
  ): series LineFill
```

Creates a new linefill object and displays it on the chart, filling the space between `line1` and `line2` with the color specified in `color`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `line1` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Line">Line</a></code> |  |  |
| `line2` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Line">Line</a></code> |  |  |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code> |  |  |

**Returns:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/LineFill">LineFill</a></code>

## Static Properties

### all {#all}

**Type:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/api/stdlib/prelude/LineFill">LineFill</a>&gt;</code>

Returns an array filled with all the current linefills drawn by the script.

## Methods

### delete {#delete}

```navi
LineFill.delete(id: series LineFill)
```

Deletes the specified linefill from the chart.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/LineFill">LineFill</a></code> |  |  |

---

### get_line1 {#get_line1}

```navi
LineFill.get_line1(id: series LineFill): series Line
```

Returns the first line of the linefill.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/LineFill">LineFill</a></code> |  |  |

**Returns:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Line">Line</a></code>

---

### get_line2 {#get_line2}

```navi
LineFill.get_line2(id: series LineFill): series Line
```

Returns the second line of the linefill.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/LineFill">LineFill</a></code> |  |  |

**Returns:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Line">Line</a></code>

---

### set_color {#set_color}

```navi
LineFill.set_color(id: series LineFill, color: series Color)
```

Sets the color of the linefill.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/LineFill">LineFill</a></code> |  |  |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code> |  |  |
