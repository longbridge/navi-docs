---
title: "Color"
---

# Color

A 32-bit RGBA color value.

## Static Methods

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

Creates a color that is a gradient between `bottom_color` and `top_color` based on the `value` between `bottom_value` and `top_value`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | <code>float</code> |  | The value to use for interpolation (between bottom_value and top_value). |
| `bottom_value` | <code>float</code> |  | The lower bound of the value range. |
| `top_value` | <code>float</code> |  | The upper bound of the value range. |
| `bottom_color` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code> |  | The color to use when value equals bottom_value. |
| `top_color` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code> |  | The color to use when value equals top_value. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code>

---

### mix {#mix}

```navi
Color.mix(c1: Color, c2: Color, weight: float = 0.5): Color
```

Linearly blends two colors.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `c1` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code> |  | The first color. |
| `c2` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code> |  | The second color. |
| `weight` | <code>float</code> | `0.5` | Blend weight in [0.0, 1.0]. 0.0 = full `c1`, 1.0 = full `c2`. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code>

---

### new {#new}

```navi
Color.new(color: Color, transp: float): Color
```

Creates a new color by changing the transparency of the given `color` to `transp` (0-100).

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code> |  | The color to modify. |
| `transp` | <code>float</code> |  | The new transparency value (0-100). |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code>

---

### rgb {#rgb}

```navi
Color.rgb(red: float, green: float, blue: float, transp: float = 0): Color
```

Creates a color from the specified red, green, blue components (0-255) and optional transparency (0-100).

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `red` | <code>float</code> |  | The red component value (0-255). |
| `green` | <code>float</code> |  | The green component value (0-255). |
| `blue` | <code>float</code> |  | The blue component value (0-255). |
| `transp` | <code>float</code> | `0` | The transparency value (0-100, default: 0.0). |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code>

## Static Properties

### AQUA {#AQUA}

**Type:** <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code>

Color constant for `#00BCD4`.

---

### BLACK {#BLACK}

**Type:** <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code>

Color constant for `#363A45`.

---

### BLUE {#BLUE}

**Type:** <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code>

Color constant for `#2962FF`.

---

### BROWN {#BROWN}

**Type:** <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code>

Color constant for `#795548`.

---

### CORAL {#CORAL}

**Type:** <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code>

Color constant for `#FF7043`.

---

### CYAN {#CYAN}

**Type:** <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code>

Color constant for `#00BFF3`.

---

### FUCHSIA {#FUCHSIA}

**Type:** <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code>

Color constant for `#E040FB`.

---

### GOLD {#GOLD}

**Type:** <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code>

Color constant for `#FFD700`.

---

### GRAY {#GRAY}

**Type:** <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code>

Color constant for `#787B86`.

---

### GREEN {#GREEN}

**Type:** <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code>

Color constant for `#4CAF50`.

---

### INDIGO {#INDIGO}

**Type:** <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code>

Color constant for `#3F51B5`.

---

### LIME {#LIME}

**Type:** <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code>

Color constant for `#00E676`.

---

### MAROON {#MAROON}

**Type:** <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code>

Color constant for `#880E4F`.

---

### NAVY {#NAVY}

**Type:** <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code>

Color constant for `#311B92`.

---

### OLIVE {#OLIVE}

**Type:** <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code>

Color constant for `#808000`.

---

### ORANGE {#ORANGE}

**Type:** <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code>

Color constant for `#FF9800`.

---

### PINK {#PINK}

**Type:** <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code>

Color constant for `#E91E63`.

---

### PURPLE {#PURPLE}

**Type:** <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code>

Color constant for `#9C27B0`.

---

### RED {#RED}

**Type:** <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code>

Color constant for `#F23645`.

---

### SILVER {#SILVER}

**Type:** <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code>

Color constant for `#B2B5BE`.

---

### TEAL {#TEAL}

**Type:** <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code>

Color constant for `#089981`.

---

### VIOLET {#VIOLET}

**Type:** <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code>

Color constant for `#7B1FA2`.

---

### WHITE {#WHITE}

**Type:** <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code>

Color constant for `#FFFFFF`.

---

### YELLOW {#YELLOW}

**Type:** <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code>

Color constant for `#FDD835`.

## Methods

### alpha {#alpha}

```navi
Color.alpha(self: Color): float
```

Returns the transparency component of the given `color`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code> |  |  |

**Returns:** <code>float</code> — A value in the range [0, 100] where 0 is fully opaque and 100 is fully transparent.

---

### blue {#blue}

```navi
Color.blue(self: Color): float
```

Returns the blue component of the given `color`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code> |  |  |

**Returns:** <code>float</code> — A value in the range [0, 255].

---

### green {#green}

```navi
Color.green(self: Color): float
```

Returns the green component of the given `color`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code> |  |  |

**Returns:** <code>float</code> — A value in the range [0, 255].

---

### red {#red}

```navi
Color.red(self: Color): float
```

Returns the red component of the given `color`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Color">Color</a></code> |  |  |

**Returns:** <code>float</code> — A value in the range [0, 255].
