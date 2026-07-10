---
title: "color"
---

# color

## 屬性

### AQUA {#AQUA}

**類型:** <code>const&nbsp;color</code>

`#00BCD4` 的顏色常量。

---

### BLACK {#BLACK}

**類型:** <code>const&nbsp;color</code>

`#363A45` 的顏色常量。

---

### BLUE {#BLUE}

**類型:** <code>const&nbsp;color</code>

`#2962FF` 的顏色常量。

---

### BROWN {#BROWN}

**類型:** <code>const&nbsp;color</code>

Color constant for `#795548`.

---

### CORAL {#CORAL}

**類型:** <code>const&nbsp;color</code>

Color constant for `#FF7043`.

---

### CYAN {#CYAN}

**類型:** <code>const&nbsp;color</code>

Color constant for `#00BFF3`.

---

### FUCHSIA {#FUCHSIA}

**類型:** <code>const&nbsp;color</code>

`#E040FB` 的顏色常量。

---

### GOLD {#GOLD}

**類型:** <code>const&nbsp;color</code>

Color constant for `#FFD700`.

---

### GRAY {#GRAY}

**類型:** <code>const&nbsp;color</code>

`#787B86` 的顏色常量。

---

### GREEN {#GREEN}

**類型:** <code>const&nbsp;color</code>

`#4CAF50` 的顏色常量。

---

### INDIGO {#INDIGO}

**類型:** <code>const&nbsp;color</code>

Color constant for `#3F51B5`.

---

### LIME {#LIME}

**類型:** <code>const&nbsp;color</code>

`#00E676` 的顏色常量。

---

### MAROON {#MAROON}

**類型:** <code>const&nbsp;color</code>

`#880E4F` 的顏色常量。

---

### NAVY {#NAVY}

**類型:** <code>const&nbsp;color</code>

`#311B92` 的顏色常量。

---

### OLIVE {#OLIVE}

**類型:** <code>const&nbsp;color</code>

`#808000` 的顏色常量。

---

### ORANGE {#ORANGE}

**類型:** <code>const&nbsp;color</code>

`#FF9800` 的顏色常量。

---

### PINK {#PINK}

**類型:** <code>const&nbsp;color</code>

Color constant for `#E91E63`.

---

### PURPLE {#PURPLE}

**類型:** <code>const&nbsp;color</code>

`#9C27B0` 的顏色常量。

---

### RED {#RED}

**類型:** <code>const&nbsp;color</code>

`#F23645` 的顏色常量。

---

### SILVER {#SILVER}

**類型:** <code>const&nbsp;color</code>

`#B2B5BE` 的顏色常量。

---

### TEAL {#TEAL}

**類型:** <code>const&nbsp;color</code>

`#089981` 的顏色常量。

---

### VIOLET {#VIOLET}

**類型:** <code>const&nbsp;color</code>

Color constant for `#7B1FA2`.

---

### WHITE {#WHITE}

**類型:** <code>const&nbsp;color</code>

`#FFFFFF` 的顏色常量。

---

### YELLOW {#YELLOW}

**類型:** <code>const&nbsp;color</code>

`#FDD835` 的顏色常量。

## 函數

### alpha {#alpha}

```navi
color.alpha(color: color): float
```

傳回給定 `color` 的透明度分量。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `color` | <code>color</code> |  | 從中提取透明度分量的顏色。 |

**返回:** <code>float</code> — 範圍 [0, 100] 中的值，其中 0 表示完全不透明，100 表示完全透明。

---

### blue {#blue}

```navi
color.blue(color: color): float
```

傳回給定 `color` 的藍色分量。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `color` | <code>color</code> |  | 從中提取藍色分量的顏色。 |

**返回:** <code>float</code> — [0, 255] 範圍內的值。

---

### from_gradient {#from_gradient}

```navi
color.from_gradient(
    value: float,
    bottom_value: float,
    top_value: float,
    bottom_color: color,
    top_color: color
  ): color
```

基於 `bottom_value` 和 `top_value` 之間的 `value` 創建 `bottom_color` 和 `top_color` 之間的漸變顏色。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `value` | <code>float</code> |  | 用於插值的值（在bottom_value 和top_value 之間）。 |
| `bottom_value` | <code>float</code> |  | 值範圍的下限。 |
| `top_value` | <code>float</code> |  | 值範圍的上限。 |
| `bottom_color` | <code>color</code> |  | 當值等於bottom_value 時使用的顏色。 |
| `top_color` | <code>color</code> |  | 當 value 等於 top_value 時使用的顏色。 |

**返回:** <code>color</code>

---

### green {#green}

```navi
color.green(color: color): float
```

傳回給定 `color` 的綠色分量。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `color` | <code>color</code> |  | 從中提取綠色分量的顏色。 |

**返回:** <code>float</code> — [0, 255] 範圍內的值。

---

### new {#new}

```navi
color.new(color: color, transp: float): color
```

通過將給定 `color` 的透明度更改為 `transp` (0-100) 創建新顏色。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `color` | <code>color</code> |  | 要修改的顏色。 |
| `transp` | <code>float</code> |  | 新的透明度值 (0-100)。 |

**返回:** <code>color</code>

---

### red {#red}

```navi
color.red(color: color): float
```

傳回給定 `color` 的紅色分量。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `color` | <code>color</code> |  | 從中提取紅色分量的顏色。 |

**返回:** <code>float</code> — [0, 255] 範圍內的值。

---

### rgb {#rgb}

```navi
color.rgb(red: float, green: float, blue: float, transp: float = 0): color
```

從指定的紅色、綠色、藍色分量 (0-255) 和可選的透明度 (0-100) 創建顏色。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `red` | <code>float</code> |  | 紅色分量值（0-255）。 |
| `green` | <code>float</code> |  | 綠色分量值（0-255）。 |
| `blue` | <code>float</code> |  | 藍色分量值（0-255）。 |
| `transp` | <code>float</code> | `0` | 透明度值（0-100，默認值：0.0）。 |

**返回:** <code>color</code>
