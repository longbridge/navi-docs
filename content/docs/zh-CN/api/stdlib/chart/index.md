---
title: "chart"
---

# chart

## 类型

| 名称 | 说明 |
| --- | --- |
| [`Point`](/zh-CN/api/stdlib/chart/Point) | 图表上的一个点（指数、时间、价格）。 |

## 属性

### bg_color {#bg_color}

**类型:** <code>input&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code>

返回图表背景的颜色。

---

### fg_color {#fg_color}

**类型:** <code>input&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code>

返回与 <a class="stdlib-ref" data-key="chart::bg_color" href="/zh-CN/api/stdlib/chart/#bg_color">chart.bg_color</a> 提供最佳对比度的颜色。

---

### is_standard {#is_standard}

**类型:** <code>input&nbsp;bool</code>

如果图表类型不是以下之一，则返回 `true`：Renko、Kagi、Line Break、Point &figure、Range、Heikin Ashi； `false` 否则。
