---
title: "TextFormat"
---

# TextFormat

文字格式旗標（粗體、斜體）。可使用 `+` 組合多個值。

## 靜態屬性

### BOLD {#BOLD}

**類型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextFormat">TextFormat</a></code>

將支援的文字渲染為粗體的格式旗標。

---

### ITALIC {#ITALIC}

**類型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextFormat">TextFormat</a></code>

將支援的文字渲染為斜體的格式旗標。

---

### NONE {#NONE}

**類型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextFormat">TextFormat</a></code>

不套用額外格式的旗標。

## 方法

### operator+ {#operator+}

```navi
operator+(a: TextFormat, b: TextFormat): TextFormat
```

合併兩個文字格式旗標（按位元 OR）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `a` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextFormat">TextFormat</a></code> |  |  |
| `b` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextFormat">TextFormat</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextFormat">TextFormat</a></code>

---

### operator- {#operator-}

```navi
operator-(a: TextFormat, b: TextFormat): TextFormat
```

從第一個運算元移除文字格式旗標（按位元差）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `a` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextFormat">TextFormat</a></code> |  |  |
| `b` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextFormat">TextFormat</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/TextFormat">TextFormat</a></code>
