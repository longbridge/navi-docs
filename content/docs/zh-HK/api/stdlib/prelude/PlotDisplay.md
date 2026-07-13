---
title: "PlotDisplay"
---

# PlotDisplay

控制繪圖和視覺效果顯示位置的位標誌類型。

## 靜態屬性

### ALL {#ALL}

**類型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

`display` 標誌組合，啓用每個可用的輸出位置。

---

### DATA_WINDOW {#DATA_WINDOW}

**類型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

`display` 標誌，公開資料窗口中的值。

---

### NONE {#NONE}

**類型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

`display` 標誌組合，隱藏各處的值或視覺效果。

---

### PANE {#PANE}

**類型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

`display` 標誌，在圖表窗格中繪製輸出。

---

### PRICE_SCALE {#PRICE_SCALE}

**類型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

`display` 標誌，當圖表設定允許時在價格刻度上顯示值。

---

### SCREENER {#SCREENER}

**類型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

`display` 標誌，使繪圖值可用於 Screener 集成。

---

### STATUS_LINE {#STATUS_LINE}

**類型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

`display` 標誌，啓用後在圖表狀態行中顯示值。

## 方法

### operator+ {#operator+}

```navi
operator+(a: PlotDisplay, b: PlotDisplay): PlotDisplay
```

合併兩個顯示標誌（按位或）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `a` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> |  |  |
| `b` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

---

### operator- {#operator-}

```navi
operator-(a: PlotDisplay, b: PlotDisplay): PlotDisplay
```

從第一個操作數中移除顯示標誌（按位差）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `a` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> |  |  |
| `b` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>
