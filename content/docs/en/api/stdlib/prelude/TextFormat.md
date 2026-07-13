---
title: "TextFormat"
---

# TextFormat

Text formatting flags (bold, italic). Values can be combined with `+`.

## Static Properties

### BOLD {#BOLD}

**Type:** <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/TextFormat">TextFormat</a></code>

Text-format flag that renders supported text in bold.

---

### ITALIC {#ITALIC}

**Type:** <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/TextFormat">TextFormat</a></code>

Text-format flag that renders supported text in italics.

---

### NONE {#NONE}

**Type:** <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/TextFormat">TextFormat</a></code>

Text-format flag that applies no extra formatting.

## Methods

### operator+ {#operator+}

```navi
operator+(a: TextFormat, b: TextFormat): TextFormat
```

Combines two text-format flags (bitwise OR).

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/TextFormat">TextFormat</a></code> |  |  |
| `b` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/TextFormat">TextFormat</a></code> |  |  |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/TextFormat">TextFormat</a></code>

---

### operator- {#operator-}

```navi
operator-(a: TextFormat, b: TextFormat): TextFormat
```

Removes text-format flags from the first operand (bitwise difference).

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/TextFormat">TextFormat</a></code> |  |  |
| `b` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/TextFormat">TextFormat</a></code> |  |  |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/TextFormat">TextFormat</a></code>
