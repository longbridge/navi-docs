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

### is_standard {#is_standard}

**類型:** <code>input&nbsp;bool</code>

如果圖表類型不是以下之一，則傳回 `true`：Renko、Kagi、Line Break、Point &figure、Range、Heikin Ashi； `false` 否則。
