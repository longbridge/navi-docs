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

### is_standard {#is_standard}

**Type:** <code>input&nbsp;bool</code>

Returns `true` if the chart type is not one of the following: Renko, Kagi, Line break, Point & figure, Range, Heikin Ashi; `false` otherwise.
