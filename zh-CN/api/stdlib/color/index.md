---
title: "color"
---

# color

## 属性

### AQUA {#AQUA}

**类型:** <code>const&nbsp;color</code>

`#00BCD4` 的颜色常量。

---

### BLACK {#BLACK}

**类型:** <code>const&nbsp;color</code>

`#363A45` 的颜色常量。

---

### BLUE {#BLUE}

**类型:** <code>const&nbsp;color</code>

`#2962FF` 的颜色常量。

---

### BROWN {#BROWN}

**类型:** <code>const&nbsp;color</code>

Color constant for `#795548`.

---

### CORAL {#CORAL}

**类型:** <code>const&nbsp;color</code>

Color constant for `#FF7043`.

---

### CYAN {#CYAN}

**类型:** <code>const&nbsp;color</code>

Color constant for `#00BFF3`.

---

### FUCHSIA {#FUCHSIA}

**类型:** <code>const&nbsp;color</code>

`#E040FB` 的颜色常量。

---

### GOLD {#GOLD}

**类型:** <code>const&nbsp;color</code>

Color constant for `#FFD700`.

---

### GRAY {#GRAY}

**类型:** <code>const&nbsp;color</code>

`#787B86` 的颜色常量。

---

### GREEN {#GREEN}

**类型:** <code>const&nbsp;color</code>

`#4CAF50` 的颜色常量。

---

### INDIGO {#INDIGO}

**类型:** <code>const&nbsp;color</code>

Color constant for `#3F51B5`.

---

### LIME {#LIME}

**类型:** <code>const&nbsp;color</code>

`#00E676` 的颜色常量。

---

### MAROON {#MAROON}

**类型:** <code>const&nbsp;color</code>

`#880E4F` 的颜色常量。

---

### NAVY {#NAVY}

**类型:** <code>const&nbsp;color</code>

`#311B92` 的颜色常量。

---

### OLIVE {#OLIVE}

**类型:** <code>const&nbsp;color</code>

`#808000` 的颜色常量。

---

### ORANGE {#ORANGE}

**类型:** <code>const&nbsp;color</code>

`#FF9800` 的颜色常量。

---

### PINK {#PINK}

**类型:** <code>const&nbsp;color</code>

Color constant for `#E91E63`.

---

### PURPLE {#PURPLE}

**类型:** <code>const&nbsp;color</code>

`#9C27B0` 的颜色常量。

---

### RED {#RED}

**类型:** <code>const&nbsp;color</code>

`#F23645` 的颜色常量。

---

### SILVER {#SILVER}

**类型:** <code>const&nbsp;color</code>

`#B2B5BE` 的颜色常量。

---

### TEAL {#TEAL}

**类型:** <code>const&nbsp;color</code>

`#089981` 的颜色常量。

---

### VIOLET {#VIOLET}

**类型:** <code>const&nbsp;color</code>

Color constant for `#7B1FA2`.

---

### WHITE {#WHITE}

**类型:** <code>const&nbsp;color</code>

`#FFFFFF` 的颜色常量。

---

### YELLOW {#YELLOW}

**类型:** <code>const&nbsp;color</code>

`#FDD835` 的颜色常量。

## 函数

### alpha {#alpha}

```navi
color.alpha(color: color): float
```

返回给定 `color` 的透明度分量。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `color` | <code>color</code> |  | 从中提取透明度分量的颜色。 |

**返回:** <code>float</code> — 范围 [0, 100] 中的值，其中 0 表示完全不透明，100 表示完全透明。

---

### blue {#blue}

```navi
color.blue(color: color): float
```

返回给定 `color` 的蓝色分量。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `color` | <code>color</code> |  | 从中提取蓝色分量的颜色。 |

**返回:** <code>float</code> — [0, 255] 范围内的值。

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

基于 `bottom_value` 和 `top_value` 之间的 `value` 创建 `bottom_color` 和 `top_color` 之间的渐变颜色。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `value` | <code>float</code> |  | 用于插值的值（在bottom_value 和top_value 之间）。 |
| `bottom_value` | <code>float</code> |  | 值范围的下限。 |
| `top_value` | <code>float</code> |  | 值范围的上限。 |
| `bottom_color` | <code>color</code> |  | 当值等于bottom_value 时使用的颜色。 |
| `top_color` | <code>color</code> |  | 当 value 等于 top_value 时使用的颜色。 |

**返回:** <code>color</code>

---

### green {#green}

```navi
color.green(color: color): float
```

返回给定 `color` 的绿色分量。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `color` | <code>color</code> |  | 从中提取绿色分量的颜色。 |

**返回:** <code>float</code> — [0, 255] 范围内的值。

---

### new {#new}

```navi
color.new(color: color, transp: float): color
```

通过将给定 `color` 的透明度更改为 `transp` (0-100) 创建新颜色。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `color` | <code>color</code> |  | 要修改的颜色。 |
| `transp` | <code>float</code> |  | 新的透明度值 (0-100)。 |

**返回:** <code>color</code>

---

### red {#red}

```navi
color.red(color: color): float
```

返回给定 `color` 的红色分量。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `color` | <code>color</code> |  | 从中提取红色分量的颜色。 |

**返回:** <code>float</code> — [0, 255] 范围内的值。

---

### rgb {#rgb}

```navi
color.rgb(red: float, green: float, blue: float, transp: float = 0): color
```

从指定的红色、绿色、蓝色分量 (0-255) 和可选的透明度 (0-100) 创建颜色。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `red` | <code>float</code> |  | 红色分量值（0-255）。 |
| `green` | <code>float</code> |  | 绿色分量值（0-255）。 |
| `blue` | <code>float</code> |  | 蓝色分量值（0-255）。 |
| `transp` | <code>float</code> | `0` | 透明度值（0-100，默认值：0.0）。 |

**返回:** <code>color</code>
