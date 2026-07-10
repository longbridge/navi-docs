---
title: "TextFormat"
---

# TextFormat

文字格式标志（粗体、斜体）。可使用 `+` 组合多个值。

## 静态属性

### BOLD {#BOLD}

**类型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextFormat">TextFormat</a></code>

将支持的文字渲染为粗体的格式标志。

---

### ITALIC {#ITALIC}

**类型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextFormat">TextFormat</a></code>

将支持的文字渲染为斜体的格式标志。

---

### NONE {#NONE}

**类型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextFormat">TextFormat</a></code>

不应用额外格式的标志。

## 方法

### operator+ {#operator+}

```navi
operator+(a: TextFormat, b: TextFormat): TextFormat
```

合并两个文字格式标志（按位或）。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `a` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextFormat">TextFormat</a></code> |  |  |
| `b` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextFormat">TextFormat</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextFormat">TextFormat</a></code>

---

### operator- {#operator-}

```navi
operator-(a: TextFormat, b: TextFormat): TextFormat
```

从第一个操作数中移除文字格式标志（按位差）。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `a` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextFormat">TextFormat</a></code> |  |  |
| `b` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextFormat">TextFormat</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextFormat">TextFormat</a></code>
