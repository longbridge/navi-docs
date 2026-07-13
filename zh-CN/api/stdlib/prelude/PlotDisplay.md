---
title: "PlotDisplay"
---

# PlotDisplay

控制绘图和视觉效果显示位置的位标志类型。

## 静态属性

### ALL {#ALL}

**类型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

`display` 标志组合，启用每个可用的输出位置。

---

### DATA_WINDOW {#DATA_WINDOW}

**类型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

`display` 标志，公开数据窗口中的值。

---

### NONE {#NONE}

**类型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

`display` 标志组合，隐藏各处的值或视觉效果。

---

### PANE {#PANE}

**类型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

`display` 标志，在图表窗格中绘制输出。

---

### PRICE_SCALE {#PRICE_SCALE}

**类型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

`display` 标志，当图表设置允许时在价格刻度上显示值。

---

### SCREENER {#SCREENER}

**类型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

`display` 标志，使绘图值可用于 Screener 集成。

---

### STATUS_LINE {#STATUS_LINE}

**类型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

`display` 标志，启用后在图表状态行中显示值。

## 方法

### operator+ {#operator+}

```navi
operator+(a: PlotDisplay, b: PlotDisplay): PlotDisplay
```

合并两个显示标志（按位或）。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `a` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> |  |  |
| `b` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

---

### operator- {#operator-}

```navi
operator-(a: PlotDisplay, b: PlotDisplay): PlotDisplay
```

从第一个操作数中移除显示标志（按位差）。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `a` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> |  |  |
| `b` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>
