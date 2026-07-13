---
title: "input"
---


# input

## 函數

### bool {#bool}

```navi
input.bool(
    defval: const bool,
    title: const String = na,
    tooltip: const String = na,
    inline: const String = na,
    group: const String = na,
    confirm: const bool = false,
    display: const PlotDisplay = PlotDisplay.ALL,
    active: input bool = true
  ): input bool
```

創建在腳本設定 UI 中公開的傳入值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;bool</code> |  | 輸入的默認值。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 設定中輸入的標籤。 |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 輸入的工具提示文本。 |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 佈局的內聯組名稱。 |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 輸入組織的組名稱。 |
| `confirm` | <code>const&nbsp;bool</code> | `false` | 如果為 true，則會顯示確認對話框。 |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 輸入的顯示模式。 |
| `active` | <code>input&nbsp;bool</code> | `true` | 如果為 true，則輸入處於活動狀態。 |

**返回:** <code>input&nbsp;bool</code>

---

### color {#color}

```navi
input.color(
    defval: const Color,
    title: const String = na,
    tooltip: const String = na,
    inline: const String = na,
    group: const String = na,
    confirm: const bool = false,
    display: const PlotDisplay = PlotDisplay.ALL,
    active: input bool = true
  ): input Color
```

創建在腳本設定 UI 中公開的傳入值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code> |  | 輸入的默認顏色值。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 設定中輸入的標籤。 |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 輸入的工具提示文本。 |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 佈局的內聯組名稱。 |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 輸入組織的組名稱。 |
| `confirm` | <code>const&nbsp;bool</code> | `false` | 如果為 true，則會顯示確認對話框。 |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 輸入的顯示模式。 |
| `active` | <code>input&nbsp;bool</code> | `true` | 如果為 true，則輸入處於活動狀態。 |

**返回:** <code>input&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Color">Color</a></code>

---

### enum {#enum}

```navi
input.enum(
    defval: const T,
    title: const String = na,
    options: const Array<T> = na,
    tooltip: const String = na,
    inline: const String = na,
    group: const String = na,
    confirm: const bool = false,
    display: const PlotDisplay = PlotDisplay.ALL,
    active: input bool = true
  ): input T
```

創建在腳本設定 UI 中公開的傳入值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;T</code> |  | 輸入的默認枚舉值。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 設定中輸入的標籤。 |
| `options` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;T&gt;</code> | `na` | 允許的枚舉值的陣列。 |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 輸入的工具提示文本。 |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 佈局的內聯組名稱。 |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 輸入組織的組名稱。 |
| `confirm` | <code>const&nbsp;bool</code> | `false` | 如果為 true，則會顯示確認對話框。 |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 輸入的顯示模式。 |
| `active` | <code>input&nbsp;bool</code> | `true` | 如果為 true，則輸入處於活動狀態。 |

**返回:** <code>input&nbsp;T</code>

---

### float {#float}

**Overloads**

```navi
input.float(defval: const float, title: const String = na, options: const Array<float> = na, tooltip: const String = na, inline: const String = na, group: const String = na, confirm: const bool = false, display: const PlotDisplay = PlotDisplay.ALL, active: input bool = true): input float
input.float(defval: const float, title: const String = na, minval: const float = na, maxval: const float = na, step: const float = na, tooltip: const String = na, inline: const String = na, group: const String = na, confirm: const bool = false, display: const PlotDisplay = PlotDisplay.ALL, active: input bool = true): input float
```

創建在腳本設定 UI 中公開的傳入值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;float</code> |  | 輸入的默認值。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 設定中輸入的標籤。 |
| `options` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code> | `na` | 輸入允許值的陣列。 |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 輸入的工具提示文本。 |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 佈局的內聯組名稱。 |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 輸入組織的組名稱。 |
| `confirm` | <code>const&nbsp;bool</code> | `false` | 如果為 true，則會顯示確認對話框。 |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 輸入的顯示模式。 |
| `active` | <code>input&nbsp;bool</code> | `true` | 如果為 true，則輸入處於活動狀態。 |

**返回:** <code>input&nbsp;float</code>

創建在腳本設定 UI 中公開的傳入值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;float</code> |  | 輸入的默認值。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 設定中輸入的標籤。 |
| `minval` | <code>const&nbsp;float</code> | `na` | 最小允許值。 |
| `maxval` | <code>const&nbsp;float</code> | `na` | 最大允許值。 |
| `step` | <code>const&nbsp;float</code> | `na` | 值增量的步長。 |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 輸入的工具提示文本。 |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 佈局的內聯組名稱。 |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 輸入組織的組名稱。 |
| `confirm` | <code>const&nbsp;bool</code> | `false` | 如果為 true，則會顯示確認對話框。 |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 輸入的顯示模式。 |
| `active` | <code>input&nbsp;bool</code> | `true` | 如果為 true，則輸入處於活動狀態。 |

**返回:** <code>input&nbsp;float</code>

---

### int {#int}

**Overloads**

```navi
input.int(defval: const int, title: const String = na, options: const Array<int> = na, tooltip: const String = na, inline: const String = na, group: const String = na, confirm: const bool = false, display: const PlotDisplay = PlotDisplay.ALL, active: input bool = true): input int
input.int(defval: const int, title: const String = na, minval: const int = na, maxval: const int = na, step: const int = na, tooltip: const String = na, inline: const String = na, group: const String = na, confirm: const bool = false, display: const PlotDisplay = PlotDisplay.ALL, active: input bool = true): input int
```

創建在腳本設定 UI 中公開的傳入值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;int</code> |  | 輸入的默認值。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 設定中輸入的標籤。 |
| `options` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;int&gt;</code> | `na` | 輸入允許值的陣列。 |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 輸入的工具提示文本。 |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 佈局的內聯組名稱。 |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 輸入組織的組名稱。 |
| `confirm` | <code>const&nbsp;bool</code> | `false` | 如果為 true，則會顯示確認對話框。 |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 輸入的顯示模式。 |
| `active` | <code>input&nbsp;bool</code> | `true` | 如果為 true，則輸入處於活動狀態。 |

**返回:** <code>input&nbsp;int</code>

創建在腳本設定 UI 中公開的傳入值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;int</code> |  | 輸入的默認值。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 設定中輸入的標籤。 |
| `minval` | <code>const&nbsp;int</code> | `na` | 最小允許值。 |
| `maxval` | <code>const&nbsp;int</code> | `na` | 最大允許值。 |
| `step` | <code>const&nbsp;int</code> | `na` | 值增量的步長。 |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 輸入的工具提示文本。 |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 佈局的內聯組名稱。 |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 輸入組織的組名稱。 |
| `confirm` | <code>const&nbsp;bool</code> | `false` | 如果為 true，則會顯示確認對話框。 |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 輸入的顯示模式。 |
| `active` | <code>input&nbsp;bool</code> | `true` | 如果為 true，則輸入處於活動狀態。 |

**返回:** <code>input&nbsp;int</code>

---

### price {#price}

```navi
input.price(
    defval: const float,
    title: const String = na,
    tooltip: const String = na,
    inline: const String = na,
    group: const String = na,
    confirm: const bool = false,
    display: const PlotDisplay = PlotDisplay.ALL,
    active: input bool = true
  ): input float
```

創建在腳本設定 UI 中公開的傳入值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;float</code> |  | 輸入的默認價格值。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 設定中輸入的標籤。 |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 輸入的工具提示文本。 |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 佈局的內聯組名稱。 |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 輸入組織的組名稱。 |
| `confirm` | <code>const&nbsp;bool</code> | `false` | 如果為 true，則會顯示確認對話框。 |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 輸入的顯示模式。 |
| `active` | <code>input&nbsp;bool</code> | `true` | 如果為 true，則輸入處於活動狀態。 |

**返回:** <code>input&nbsp;float</code>

---

### session {#session}

```navi
input.session(
    defval: const String,
    title: const String = na,
    options: const Array<String> = na,
    tooltip: const String = na,
    inline: const String = na,
    group: const String = na,
    confirm: const bool = false,
    display: const PlotDisplay = PlotDisplay.ALL,
    active: input bool = true
  ): input String
```

創建在腳本設定 UI 中公開的傳入值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 輸入的默認會話值。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 設定中輸入的標籤。 |
| `options` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a>&gt;</code> | `na` | 允許的會話值的陣列。 |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 輸入的工具提示文本。 |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 佈局的內聯組名稱。 |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 輸入組織的組名稱。 |
| `confirm` | <code>const&nbsp;bool</code> | `false` | 如果為 true，則會顯示確認對話框。 |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 輸入的顯示模式。 |
| `active` | <code>input&nbsp;bool</code> | `true` | 如果為 true，則輸入處於活動狀態。 |

**返回:** <code>input&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

---

### source {#source}

```navi
input.source(
    defval: const expression,
    title: const String = na,
    tooltip: const String = na,
    inline: const String = na,
    group: const String = na,
    display: const PlotDisplay = PlotDisplay.ALL,
    active: input bool = true,
    confirm: const bool = false
  ): input float
```

創建在腳本設定 UI 中公開的傳入值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;expression</code> |  | 輸入的默認系列表達式值。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 設定中輸入的標籤。 |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 輸入的工具提示文本。 |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 佈局的內聯組名稱。 |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 輸入組織的組名稱。 |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 輸入的顯示模式。 |
| `active` | <code>input&nbsp;bool</code> | `true` | 如果為 true，則輸入處於活動狀態。 |
| `confirm` | <code>const&nbsp;bool</code> | `false` | 如果為 true，則會顯示確認對話框。 |

**返回:** <code>input&nbsp;float</code>

---

### string {#string}

```navi
input.string(
    defval: const String,
    title: const String = na,
    options: const Array<String> = na,
    tooltip: const String = na,
    inline: const String = na,
    group: const String = na,
    confirm: const bool = false,
    display: const PlotDisplay = PlotDisplay.ALL,
    active: input bool = true
  ): input String
```

創建在腳本設定 UI 中公開的傳入值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 輸入的默認字符串值。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 設定中輸入的標籤。 |
| `options` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a>&gt;</code> | `na` | 輸入允許值的陣列。 |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 輸入的工具提示文本。 |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 佈局的內聯組名稱。 |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 輸入組織的組名稱。 |
| `confirm` | <code>const&nbsp;bool</code> | `false` | 如果為 true，則會顯示確認對話框。 |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 輸入的顯示模式。 |
| `active` | <code>input&nbsp;bool</code> | `true` | 如果為 true，則輸入處於活動狀態。 |

**返回:** <code>input&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

---

### symbol {#symbol}

```navi
input.symbol(
    defval: const String,
    title: const String = na,
    tooltip: const String = na,
    inline: const String = na,
    group: const String = na,
    confirm: const bool = false,
    display: const PlotDisplay = PlotDisplay.ALL,
    active: input bool = true
  ): input String
```

創建在腳本設定 UI 中公開的傳入值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 輸入的默認符號值。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 設定中輸入的標籤。 |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 輸入的工具提示文本。 |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 佈局的內聯組名稱。 |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 輸入組織的組名稱。 |
| `confirm` | <code>const&nbsp;bool</code> | `false` | 如果為 true，則會顯示確認對話框。 |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 輸入的顯示模式。 |
| `active` | <code>input&nbsp;bool</code> | `true` | 如果為 true，則輸入處於活動狀態。 |

**返回:** <code>input&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

---

### text_area {#text_area}

```navi
input.text_area(
    defval: const String,
    title: const String = na,
    tooltip: const String = na,
    group: const String = na,
    confirm: const bool = false,
    display: const PlotDisplay = PlotDisplay.ALL,
    active: input bool = true
  ): input String
```

創建在腳本設定 UI 中公開的傳入值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 輸入的默認文本值。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 設定中輸入的標籤。 |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 輸入的工具提示文本。 |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 輸入組織的組名稱。 |
| `confirm` | <code>const&nbsp;bool</code> | `false` | 如果為 true，則會顯示確認對話框。 |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 輸入的顯示模式。 |
| `active` | <code>input&nbsp;bool</code> | `true` | 如果為 true，則輸入處於活動狀態。 |

**返回:** <code>input&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

---

### time {#time}

```navi
input.time(
    defval: const int,
    title: const String = na,
    tooltip: const String = na,
    inline: const String = na,
    group: const String = na,
    confirm: const bool = false,
    display: const PlotDisplay = PlotDisplay.ALL,
    active: input bool = true
  ): input int
```

創建在腳本設定 UI 中公開的傳入值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;int</code> |  | 輸入的默認時間值作為 UNIX 時間戳。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 設定中輸入的標籤。 |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 輸入的工具提示文本。 |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 佈局的內聯組名稱。 |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 輸入組織的組名稱。 |
| `confirm` | <code>const&nbsp;bool</code> | `false` | 如果為 true，則會顯示確認對話框。 |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 輸入的顯示模式。 |
| `active` | <code>input&nbsp;bool</code> | `true` | 如果為 true，則輸入處於活動狀態。 |

**返回:** <code>input&nbsp;int</code>

---

### timeframe {#timeframe}

```navi
input.timeframe(
    defval: const String,
    title: const String = na,
    options: const Array<String> = na,
    tooltip: const String = na,
    inline: const String = na,
    group: const String = na,
    confirm: const bool = false,
    display: const PlotDisplay = PlotDisplay.ALL,
    active: input bool = true
  ): input String
```

創建在腳本設定 UI 中公開的傳入值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 輸入的默認時間範圍值。 |
| `title` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 設定中輸入的標籤。 |
| `options` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a>&gt;</code> | `na` | 允許的時間範圍值的陣列。 |
| `tooltip` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 輸入的工具提示文本。 |
| `inline` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 佈局的內聯組名稱。 |
| `group` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `na` | 輸入組織的組名稱。 |
| `confirm` | <code>const&nbsp;bool</code> | `false` | 如果為 true，則會顯示確認對話框。 |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `PlotDisplay.ALL` | 輸入的顯示模式。 |
| `active` | <code>input&nbsp;bool</code> | `true` | 如果為 true，則輸入處於活動狀態。 |

**返回:** <code>input&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>
