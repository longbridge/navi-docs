---
title: "PlotDisplay"
---

# PlotDisplay

Bitflag type controlling where plots and visuals are shown.

## Static Properties

### ALL {#ALL}

**Type:** <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

`display` flag combination that enables every available output location.

---

### DATA_WINDOW {#DATA_WINDOW}

**Type:** <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

`display` flag that exposes values in the Data Window.

---

### NONE {#NONE}

**Type:** <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

`display` flag combination that hides the value or visual everywhere.

---

### PANE {#PANE}

**Type:** <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

`display` flag that draws output in a chart pane.

---

### PRICE_SCALE {#PRICE_SCALE}

**Type:** <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

`display` flag that shows a value on the price scale when chart settings allow it.

---

### SCREENER {#SCREENER}

**Type:** <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

`display` flag that makes a <a class="stdlib-ref" data-key="prelude::plot" href="/api/stdlib/prelude/#plot">plot</a> value available to Screener integrations.

---

### STATUS_LINE {#STATUS_LINE}

**Type:** <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

`display` flag that shows a value in the chart status line when enabled.

## Methods

### operator+ {#operator+}

```navi
operator+(a: PlotDisplay, b: PlotDisplay): PlotDisplay
```

Combines two display flags (bitwise OR).

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> |  |  |
| `b` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> |  |  |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

---

### operator- {#operator-}

```navi
operator-(a: PlotDisplay, b: PlotDisplay): PlotDisplay
```

Removes display flags from the first operand (bitwise difference).

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> |  |  |
| `b` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> |  |  |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>
