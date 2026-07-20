---
title: "chart"
---

# chart

## 類型

| 名稱 | 說明 |
| --- | --- |
| [`Point`](/zh-HK/api/stdlib/chart/Point) | 圖表上的一個點（指數、時間、價格）。 |

## 屬性

### bg_color {#bg_color}

**類型:** <code>input&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code>

傳回圖表背景的顏色。

---

### fg_color {#fg_color}

**類型:** <code>input&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code>

傳回與 <a class="stdlib-ref" data-key="chart::bg_color" href="/zh-HK/api/stdlib/chart/#bg_color">chart.bg_color</a> 提供最佳對比度的顏色。

---

### is_heikin_ashi {#is_heikin_ashi}

**類型:** <code>simple&nbsp;bool</code>

若圖表類型為 Heikin Ashi，則返回 `true`。

---

### is_kagi {#is_kagi}

**類型:** <code>simple&nbsp;bool</code>

若圖表類型為 Kagi，則返回 `true`。

---

### is_line_break {#is_line_break}

**類型:** <code>simple&nbsp;bool</code>

若圖表類型為 Line Break，則返回 `true`。

---

### is_point_figure {#is_point_figure}

**類型:** <code>simple&nbsp;bool</code>

若圖表類型為 Point & Figure，則返回 `true`。

---

### is_range {#is_range}

**類型:** <code>simple&nbsp;bool</code>

若圖表類型為 Range，則返回 `true`。

---

### is_renko {#is_renko}

**類型:** <code>simple&nbsp;bool</code>

若圖表類型為 Renko，則返回 `true`。

---

### is_standard {#is_standard}

**類型:** <code>simple&nbsp;bool</code>

如果圖表類型不是以下之一，則傳回 `true`：Renko、Kagi、Line Break、Point &figure、Range、Heikin Ashi； `false` 否則。
