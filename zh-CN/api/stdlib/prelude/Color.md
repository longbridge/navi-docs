---
title: "Color"
---

# Color

32 位 RGBA 颜色值。

## 静态方法

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

根据 `value` 在 `bottom_value` 和 `top_value` 之间的位置，创建 `bottom_color` 和 `top_color` 之间的渐变色。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `value` | <code>float</code> |  | 用于插值的值（介于 bottom_value 和 top_value 之间）。 |
| `bottom_value` | <code>float</code> |  | 值范围的下界。 |
| `top_value` | <code>float</code> |  | 值范围的上界。 |
| `bottom_color` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> |  | 当 value 等于 bottom_value 时使用的颜色。 |
| `top_color` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> |  | 当 value 等于 top_value 时使用的颜色。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code>

---

### mix {#mix}

```navi
Color.mix(c1: Color, c2: Color, weight: float = 0.5): Color
```

线性混合两种颜色。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `c1` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> |  | 第一种颜色。 |
| `c2` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> |  | 第二种颜色。 |
| `weight` | <code>float</code> | `0.5` | 混合权重，范围 [0.0, 1.0]。0.0 = 完全 `c1`，1.0 = 完全 `c2`。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code>

---

### new {#new}

```navi
Color.new(color: Color, transp: float): Color
```

通过将给定 `color` 的透明度更改为 `transp`（0-100）来创建新颜色。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `color` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> |  | 要修改的颜色。 |
| `transp` | <code>float</code> |  | 新的透明度值（0-100）。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code>

---

### rgb {#rgb}

```navi
Color.rgb(red: float, green: float, blue: float, transp: float = 0): Color
```

根据指定的红、绿、蓝分量（0-255）和可选透明度（0-100）创建颜色。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `red` | <code>float</code> |  | 红色分量值（0-255）。 |
| `green` | <code>float</code> |  | 绿色分量值（0-255）。 |
| `blue` | <code>float</code> |  | 蓝色分量值（0-255）。 |
| `transp` | <code>float</code> | `0` | 透明度值（0-100，默认值：0.0）。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code>

## 静态属性

### AQUA {#AQUA}

**类型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code>

`#00BCD4` 的颜色常量。

---

### BLACK {#BLACK}

**类型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code>

`#363A45` 的颜色常量。

---

### BLUE {#BLUE}

**类型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code>

`#2962FF` 的颜色常量。

---

### BROWN {#BROWN}

**类型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code>

`#795548` 的颜色常量。

---

### CORAL {#CORAL}

**类型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code>

`#FF7043` 的颜色常量。

---

### CYAN {#CYAN}

**类型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code>

`#00BFF3` 的颜色常量。

---

### FUCHSIA {#FUCHSIA}

**类型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code>

`#E040FB` 的颜色常量。

---

### GOLD {#GOLD}

**类型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code>

`#FFD700` 的颜色常量。

---

### GRAY {#GRAY}

**类型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code>

`#787B86` 的颜色常量。

---

### GREEN {#GREEN}

**类型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code>

`#4CAF50` 的颜色常量。

---

### INDIGO {#INDIGO}

**类型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code>

`#3F51B5` 的颜色常量。

---

### LIME {#LIME}

**类型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code>

`#00E676` 的颜色常量。

---

### MAROON {#MAROON}

**类型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code>

`#880E4F` 的颜色常量。

---

### NAVY {#NAVY}

**类型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code>

`#311B92` 的颜色常量。

---

### OLIVE {#OLIVE}

**类型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code>

`#808000` 的颜色常量。

---

### ORANGE {#ORANGE}

**类型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code>

`#FF9800` 的颜色常量。

---

### PINK {#PINK}

**类型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code>

`#E91E63` 的颜色常量。

---

### PURPLE {#PURPLE}

**类型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code>

`#9C27B0` 的颜色常量。

---

### RED {#RED}

**类型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code>

`#F23645` 的颜色常量。

---

### SILVER {#SILVER}

**类型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code>

`#B2B5BE` 的颜色常量。

---

### TEAL {#TEAL}

**类型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code>

`#089981` 的颜色常量。

---

### VIOLET {#VIOLET}

**类型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code>

`#7B1FA2` 的颜色常量。

---

### WHITE {#WHITE}

**类型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code>

`#FFFFFF` 的颜色常量。

---

### YELLOW {#YELLOW}

**类型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code>

`#FDD835` 的颜色常量。

## 方法

### alpha {#alpha}

```navi
Color.alpha(self: Color): float
```

返回给定 `color` 的透明度分量。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> |  |  |

**返回:** <code>float</code> — 范围 [0, 100] 内的值，0 为完全不透明，100 为完全透明。

---

### blue {#blue}

```navi
Color.blue(self: Color): float
```

返回给定 `color` 的蓝色分量。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> |  |  |

**返回:** <code>float</code> — 范围 [0, 255] 内的值。

---

### green {#green}

```navi
Color.green(self: Color): float
```

返回给定 `color` 的绿色分量。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> |  |  |

**返回:** <code>float</code> — 范围 [0, 255] 内的值。

---

### red {#red}

```navi
Color.red(self: Color): float
```

返回给定 `color` 的红色分量。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> |  |  |

**返回:** <code>float</code> — 范围 [0, 255] 内的值。
