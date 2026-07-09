# 語言基礎

每個 Navi 腳本都以聲明語句開頭：`indicator()`、`strategy()` 或 `library()`。

## 腳本結構

```navi
indicator("My Indicator");

// 你的代碼
plot(close);
```

Navi 使用**大括號塊** `{ }` 和**分號** `;` 來終止語句。換行符無意義——你可以自由地拆分或合併行。

## 註釋

```navi
// 單行註釋
let a: float = 10; // 行尾註釋
```

沒有多行註釋。以 `//@` 開頭的特殊註釋是文件標籤：`//@function`、`//@param`、`//@returns`、`//@type`、`//@enum`、`//@field`、`//@variable`、`//@description`。

## 語句

每條語句以 `;` 結尾。換行符無意義——多條語句可以在同一行，單條語句可以跨多行：

```navi
let a = 1; let b = 2; let c = a + b;   // 同一行多條語句

let result = longVariableName           // 跨行拆分
    + anotherLongVariable
    - someOtherValue;
```

以右大括號 `}` 結尾的語句（函數、if/for/while 等）不需要在末尾加 `;`。

## 基本類型

### 原始類型

| 類型 | 描述 | 示例 |
|---|---|---|
| `int` | 整數 | `42`, `-123`, `+5` |
| `float` | 浮點數 | `3.14`, `.5`, `3.`, `1e-3` |
| `bool` | 布林值 | `true`, `false` |
| `string` | 文字 | `"hello"`, `'world'` |
| `color` | RGBA 顏色 | `#FF0000`, `#FF000080` |
| `na` | 缺失/未定義值 | `na` |

### `int` 和 `float`

```navi
let a = 42;
let b = -123;
let d = 3.14;
let e = .14;        // 前導點
let f = 3.;         // 尾隨點
let g = 314e-2;     // 3.14
```

### `string`

字串可以使用單引號或雙引號，語義完全相同：

```navi
let a = "Hello, World!";
let b = 'Hello, World!';
let full = "Hello, " + "World!";  // 用 + 連接字串
```

支援的轉義序列：

| 轉義 | 含義 |
|---|---|
| `\\` | 反斜槓 |
| `\n` | 換行 |
| `\r` | 回車 |
| `\t` | Tab |
| `\"` 或 `""` | 雙引號（在雙引號字串中） |
| `\'` 或 `''` | 單引號（在單引號字串中） |

### `color`

顏色字面量使用 `#` 的十六進制表示法：

- `#RRGGBB` — 6 位十六進制，完全不透明
- `#RRGGBBAA` — 8 位十六進制，顯式 alpha 通道

```navi
let red     = #FF0000;       // 完全不透明的紅色
let semiRed = #FF000080;     // 半透明紅色
```

命名顏色常量：`color.RED`、`color.BLUE`、`color.GREEN` 等。使用 `color.new()` 建立自訂透明度的顏色。

### `na`

`na` 表示缺失或未定義的值。它與任何類型兼容，但單獨使用時需要顯式類型注解：

```navi
let a: float = na;  // OK
let b = na;         // 錯誤：無法推斷類型

if na(myValue) {
    // 處理缺失值
}
```

## 運算子

### 算術運算
```navi
let a = 10 + 3;   // 13
let b = 10 - 3;   // 7
let c = 10 * 3;   // 30
let d = 10 / 3;   // 3.333...
let e = 10 % 3;   // 1
```

### 比較運算
```navi
close > open     // 大於
close < open     // 小於
close >= 100     // 大於等於
close <= 100     // 小於等於
close == open    // 等於
close != open    // 不等於
```

### 邏輯運算
```navi
a and b    // 邏輯與
a or b     // 邏輯或
not a      // 邏輯非
```

### 三元運算
```navi
let col = close > open ? color.GREEN : color.RED;
```

## 下一步

- [類型與變數](/zh-HK/guide/types-and-variables) — 類型限定符、var/varip、na 處理
- [歷史引用](/zh-HK/guide/history-reference) — 使用 `[]` 存取過去 K 線的值
- [集合](/zh-HK/guide/collections) — array、map、matrix
- [控制結構](/zh-HK/guide/control-structures) — if、for、while、switch
- [函數與方法](/zh-HK/guide/functions-and-methods) — 定義和調用函數
