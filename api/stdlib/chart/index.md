---
title: "chart"
---

# chart

## Types

| Name | Description |
| --- | --- |
| [`Point`](/api/stdlib/chart/Point) | A point on the chart (index, time, price). |

## Properties

### bg_color {#bg_color}

**Type:** <code>input&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code>

Returns the color of the chart's background.

---

### fg_color {#fg_color}

**Type:** <code>input&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code>

Returns a color providing optimal contrast with <a class="stdlib-ref" data-key="chart::bg_color" href="/api/stdlib/chart/#bg_color">chart.bg_color</a>.

---

### is_heikin_ashi {#is_heikin_ashi}

**Type:** <code>simple&nbsp;bool</code>

Returns `true` if the chart type is Heikin Ashi.

---

### is_kagi {#is_kagi}

**Type:** <code>simple&nbsp;bool</code>

Returns `true` if the chart type is Kagi.

---

### is_line_break {#is_line_break}

**Type:** <code>simple&nbsp;bool</code>

Returns `true` if the chart type is Line Break.

---

### is_point_figure {#is_point_figure}

**Type:** <code>simple&nbsp;bool</code>

Returns `true` if the chart type is Point & Figure.

---

### is_range {#is_range}

**Type:** <code>simple&nbsp;bool</code>

Returns `true` if the chart type is Range.

---

### is_renko {#is_renko}

**Type:** <code>simple&nbsp;bool</code>

Returns `true` if the chart type is Renko.

---

### is_standard {#is_standard}

**Type:** <code>simple&nbsp;bool</code>

Returns `true` if the chart type is not one of the following: Renko, Kagi, Line break, Point & figure, Range, Heikin Ashi; `false` otherwise.
