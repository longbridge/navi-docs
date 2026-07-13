---
title: "Color"
---

# Color

32 位 RGBA 顏色值。

## 靜態方法

### from_gradient {#from_gradient}

```navi
Color.from_gradient(
    value: float,
    bottom_value: float,
    top_value: float,
    bottom_color: Color,
    top_color: Color
  ): Color
```

根據 `value` 在 `bottom_value` 和 `top_value` 之間的位置，創建 `bottom_color` 和 `top_color` 之間的漸層色。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `value` | <code>float</code> |  | 用於插值的值（介於 bottom_value 和 top_value 之間）。 |
| `bottom_value` | <code>float</code> |  | 值範圍的下界。 |
| `top_value` | <code>float</code> |  | 值範圍的上界。 |
| `bottom_color` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> |  | 當 value 等於 bottom_value 時使用的顏色。 |
| `top_color` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> |  | 當 value 等於 top_value 時使用的顏色。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code>

---

### mix {#mix}

```navi
Color.mix(c1: Color, c2: Color, weight: float = 0.5): Color
```

線性混合兩種顏色。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `c1` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> |  | 第一種顏色。 |
| `c2` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> |  | 第二種顏色。 |
| `weight` | <code>float</code> | `0.5` | 混合權重，範圍 [0.0, 1.0]。0.0 = 完全 `c1`，1.0 = 完全 `c2`。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code>

---

### new {#new}

```navi
Color.new(color: Color, transp: float): Color
```

通過將給定 `color` 的透明度更改為 `transp`（0-100）來創建新顏色。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `color` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> |  | 要修改的顏色。 |
| `transp` | <code>float</code> |  | 新的透明度值（0-100）。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code>

---

### rgb {#rgb}

```navi
Color.rgb(red: float, green: float, blue: float, transp: float = 0): Color
```

根據指定的紅、綠、藍分量（0-255）和可選透明度（0-100）創建顏色。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `red` | <code>float</code> |  | 紅色分量值（0-255）。 |
| `green` | <code>float</code> |  | 綠色分量值（0-255）。 |
| `blue` | <code>float</code> |  | 藍色分量值（0-255）。 |
| `transp` | <code>float</code> | `0` | 透明度值（0-100，預設值：0.0）。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code>

## 靜態屬性

### AQUA {#AQUA}

**類型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code>

`#00BCD4` 的顏色常數。

---

### BLACK {#BLACK}

**類型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code>

`#363A45` 的顏色常數。

---

### BLUE {#BLUE}

**類型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code>

`#2962FF` 的顏色常數。

---

### BROWN {#BROWN}

**類型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code>

`#795548` 的顏色常數。

---

### CORAL {#CORAL}

**類型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code>

`#FF7043` 的顏色常數。

---

### CYAN {#CYAN}

**類型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code>

`#00BFF3` 的顏色常數。

---

### FUCHSIA {#FUCHSIA}

**類型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code>

`#E040FB` 的顏色常數。

---

### GOLD {#GOLD}

**類型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code>

`#FFD700` 的顏色常數。

---

### GRAY {#GRAY}

**類型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code>

`#787B86` 的顏色常數。

---

### GREEN {#GREEN}

**類型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code>

`#4CAF50` 的顏色常數。

---

### INDIGO {#INDIGO}

**類型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code>

`#3F51B5` 的顏色常數。

---

### LIME {#LIME}

**類型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code>

`#00E676` 的顏色常數。

---

### MAROON {#MAROON}

**類型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code>

`#880E4F` 的顏色常數。

---

### NAVY {#NAVY}

**類型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code>

`#311B92` 的顏色常數。

---

### OLIVE {#OLIVE}

**類型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code>

`#808000` 的顏色常數。

---

### ORANGE {#ORANGE}

**類型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code>

`#FF9800` 的顏色常數。

---

### PINK {#PINK}

**類型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code>

`#E91E63` 的顏色常數。

---

### PURPLE {#PURPLE}

**類型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code>

`#9C27B0` 的顏色常數。

---

### RED {#RED}

**類型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code>

`#F23645` 的顏色常數。

---

### SILVER {#SILVER}

**類型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code>

`#B2B5BE` 的顏色常數。

---

### TEAL {#TEAL}

**類型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code>

`#089981` 的顏色常數。

---

### VIOLET {#VIOLET}

**類型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code>

`#7B1FA2` 的顏色常數。

---

### WHITE {#WHITE}

**類型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code>

`#FFFFFF` 的顏色常數。

---

### YELLOW {#YELLOW}

**類型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code>

`#FDD835` 的顏色常數。

## 方法

### alpha {#alpha}

```navi
Color.alpha(self: Color): float
```

返回給定 `color` 的透明度分量。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> |  |  |

**返回:** <code>float</code> — 範圍 [0, 100] 內的值，0 為完全不透明，100 為完全透明。

---

### blue {#blue}

```navi
Color.blue(self: Color): float
```

返回給定 `color` 的藍色分量。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> |  |  |

**返回:** <code>float</code> — 範圍 [0, 255] 內的值。

---

### green {#green}

```navi
Color.green(self: Color): float
```

返回給定 `color` 的綠色分量。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> |  |  |

**返回:** <code>float</code> — 範圍 [0, 255] 內的值。

---

### red {#red}

```navi
Color.red(self: Color): float
```

返回給定 `color` 的紅色分量。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> |  |  |

**返回:** <code>float</code> — 範圍 [0, 255] 內的值。
