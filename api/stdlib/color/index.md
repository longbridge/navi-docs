---
title: "color"
---

# color

## Properties

### AQUA {#AQUA}

**Type:** <code>const&nbsp;color</code>

Color constant for `#00BCD4`.

---

### BLACK {#BLACK}

**Type:** <code>const&nbsp;color</code>

Color constant for `#363A45`.

---

### BLUE {#BLUE}

**Type:** <code>const&nbsp;color</code>

Color constant for `#2962FF`.

---

### BROWN {#BROWN}

**Type:** <code>const&nbsp;color</code>

Color constant for `#795548`.

---

### CORAL {#CORAL}

**Type:** <code>const&nbsp;color</code>

Color constant for `#FF7043`.

---

### CYAN {#CYAN}

**Type:** <code>const&nbsp;color</code>

Color constant for `#00BFF3`.

---

### FUCHSIA {#FUCHSIA}

**Type:** <code>const&nbsp;color</code>

Color constant for `#E040FB`.

---

### GOLD {#GOLD}

**Type:** <code>const&nbsp;color</code>

Color constant for `#FFD700`.

---

### GRAY {#GRAY}

**Type:** <code>const&nbsp;color</code>

Color constant for `#787B86`.

---

### GREEN {#GREEN}

**Type:** <code>const&nbsp;color</code>

Color constant for `#4CAF50`.

---

### INDIGO {#INDIGO}

**Type:** <code>const&nbsp;color</code>

Color constant for `#3F51B5`.

---

### LIME {#LIME}

**Type:** <code>const&nbsp;color</code>

Color constant for `#00E676`.

---

### MAROON {#MAROON}

**Type:** <code>const&nbsp;color</code>

Color constant for `#880E4F`.

---

### NAVY {#NAVY}

**Type:** <code>const&nbsp;color</code>

Color constant for `#311B92`.

---

### OLIVE {#OLIVE}

**Type:** <code>const&nbsp;color</code>

Color constant for `#808000`.

---

### ORANGE {#ORANGE}

**Type:** <code>const&nbsp;color</code>

Color constant for `#FF9800`.

---

### PINK {#PINK}

**Type:** <code>const&nbsp;color</code>

Color constant for `#E91E63`.

---

### PURPLE {#PURPLE}

**Type:** <code>const&nbsp;color</code>

Color constant for `#9C27B0`.

---

### RED {#RED}

**Type:** <code>const&nbsp;color</code>

Color constant for `#F23645`.

---

### SILVER {#SILVER}

**Type:** <code>const&nbsp;color</code>

Color constant for `#B2B5BE`.

---

### TEAL {#TEAL}

**Type:** <code>const&nbsp;color</code>

Color constant for `#089981`.

---

### VIOLET {#VIOLET}

**Type:** <code>const&nbsp;color</code>

Color constant for `#7B1FA2`.

---

### WHITE {#WHITE}

**Type:** <code>const&nbsp;color</code>

Color constant for `#FFFFFF`.

---

### YELLOW {#YELLOW}

**Type:** <code>const&nbsp;color</code>

Color constant for `#FDD835`.

## Functions

### alpha {#alpha}

```navi
color.alpha(color: color): float
```

Returns the transparency component of the given `color`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | <code>color</code> |  | The color to extract the transparency component from. |

**Returns:** <code>float</code> — A value in the range [0, 100] where 0 is fully opaque and 100 is fully transparent.

---

### blue {#blue}

```navi
color.blue(color: color): float
```

Returns the blue component of the given `color`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | <code>color</code> |  | The color to extract the blue component from. |

**Returns:** <code>float</code> — A value in the range [0, 255].

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

Creates a color that is a gradient between `bottom_color` and `top_color` based on the `value` between `bottom_value` and `top_value`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | <code>float</code> |  | The value to use for interpolation (between bottom_value and top_value). |
| `bottom_value` | <code>float</code> |  | The lower bound of the value range. |
| `top_value` | <code>float</code> |  | The upper bound of the value range. |
| `bottom_color` | <code>color</code> |  | The color to use when value equals bottom_value. |
| `top_color` | <code>color</code> |  | The color to use when value equals top_value. |

**Returns:** <code>color</code>

---

### green {#green}

```navi
color.green(color: color): float
```

Returns the green component of the given `color`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | <code>color</code> |  | The color to extract the green component from. |

**Returns:** <code>float</code> — A value in the range [0, 255].

---

### mix {#mix}

```navi
color.mix(c1: color, c2: color, weight: float = 0.5): color
```

Linearly interpolates between two colors.

`weight = 0.0` returns `c1`, `weight = 1.0` returns `c2`. Values outside `[0, 1]` are clamped. Interpolates all four channels: red, green, blue, and transparency.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `c1` | <code>color</code> |  | The start color. |
| `c2` | <code>color</code> |  | The end color. |
| `weight` | <code>float</code> | `0.5` | Blend factor in `[0.0, 1.0]`. Defaults to `0.5`. |

**Returns:** <code>color</code>

---

### new {#new}

```navi
color.new(color: color, transp: float): color
```

Creates a new color by changing the transparency of the given `color` to `transp` (0-100).

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | <code>color</code> |  | The color to modify. |
| `transp` | <code>float</code> |  | The new transparency value (0-100). |

**Returns:** <code>color</code>

---

### red {#red}

```navi
color.red(color: color): float
```

Returns the red component of the given `color`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | <code>color</code> |  | The color to extract the red component from. |

**Returns:** <code>float</code> — A value in the range [0, 255].

---

### rgb {#rgb}

```navi
color.rgb(red: float, green: float, blue: float, transp: float = 0): color
```

Creates a color from the specified red, green, blue components (0-255) and optional transparency (0-100).

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `red` | <code>float</code> |  | The red component value (0-255). |
| `green` | <code>float</code> |  | The green component value (0-255). |
| `blue` | <code>float</code> |  | The blue component value (0-255). |
| `transp` | <code>float</code> | `0` | The transparency value (0-100, default: 0.0). |

**Returns:** <code>color</code>
