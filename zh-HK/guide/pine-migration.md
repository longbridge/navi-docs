# 從 Pine Script V6 遷移到 Navi

## 需要遷移嗎？

**現有腳本無需遷移即可執行。** Pine Script V6 文件（`.pine`）可直接在 Longbridge 平台執行，無需任何修改。

但如果你有以下需求，則值得遷移到 Navi（`.nv`）：
- **編輯器支援** — VS Code 擴展（補全、診斷、懸停、跳轉定義）僅支援 `.nv` 文件
- **編寫新腳本** — Navi 是主要語言，擁有完整的工具鏈支援

---

Navi 與 Pine Script V6 共享相同的標準庫、內置函數和執行模型，唯一的區別在於**語法表面**。

## 核心差異一覽

| 概念 | Pine Script | Navi |
|---|---|---|
| 代碼塊 | 縮進 | `{ }` 花括號 |
| 語句分隔符 | 換行 | `;` |
| 變量聲明 | `a = 1` | `let a = 1;` |
| 重新賦值 | `a := 1` | `a = 1;` |
| 導入 | `import foo/bar/1 as f` | `use foo/bar/1 as f;` |
| 函數 | `f(a) => expr` | `fn f(a) { expr }` |
| 參數類型 | `float a` | `a: float` |
| 返回類型 | `float f()` | `fn f(): float` |
| 元組 | `[a, b]` | `(a, b)` |
| 結構體 | `type T` + 縮進 | `struct T { … }` |
| 枚舉 | `enum E` + 縮進 | `enum E { … }` |
| 命名參數 | `f(length=14)` | `f(length: 14)` |
| 枚舉常量 | `strategy.long` | `Direction.Long` |
| 顏色常量 | `color.blue` | `color.BLUE` |
| 腳本版本頭 | `// @version=6`（必需） | 不需要 |

## 語句與代碼塊

Pine 用縮進定義代碼塊，Navi 使用 `{ }` 花括號，每條語句以 `;` 結尾。

```pine
// Pine
if close > open
    plot(close)
else
    plot(open)
```

```navi
// Navi
if close > open {
    plot(close);
} else {
    plot(open);
}
```

## 變量聲明與賦值

```pine
// Pine
a = 1          // 聲明
a := 2         // 重新賦值
int b = 3      // 帶類型聲明
var c = 0      // 持久狀態
```

```navi
// Navi
let a = 1;          // 聲明
a = 2;              // 重新賦值（無關鍵字）
let b: int = 3;     // 帶類型聲明
var c = 0;          // 持久狀態
```

## 函數

```pine
// Pine
f(a, b) => a + b
float add(float a, float b) => a + b
```

```navi
// Navi
fn f(a, b) { a + b }
fn add(a: float, b: float): float { a + b }
```

## 控制流

```pine
// Pine
for i = 0 to 9
    total := total + i
```

```navi
// Navi
for i = 0 to 9 {
    total = total + i;
}
```

### Switch

```pine
// Pine
result = switch x
    1 => "one"
    => "other"
```

```navi
// Navi
let result = switch x {
    1 => "one",
    => "other",
};
```

## 元組

```pine
// Pine
[basis, upper, lower] = ta.bb(close, 20, 2.0)
```

```navi
// Navi
let (basis, upper, lower) = ta.bb(close, 20, 2.0);
```

## 結構體與枚舉

```pine
// Pine
type Point
    int x = 0
    float y = 0.0

enum Direction
    up
    down
```

```navi
// Navi
struct Point {
    int x = 0,
    float y = 0.0,
}

enum Direction {
    up,
    down,
}
```

## 命名參數（關鍵字參數）

Pine Script 使用 `=` 傳遞命名參數，Navi 使用 `:`。

```pine
// Pine
indicator("My Script", overlay=true, format=format.price)
plot(fast, title="Fast", color=color.blue, linewidth=2)
```

```navi
// Navi
indicator("My Script", overlay: true, format: Format.Price);
plot(fast, title: "Fast", color: color.BLUE, linewidth: 2);
```

這影響所有使用命名參數的內置函數調用：`indicator()`、`strategy()`、`input.*`、`plot()`、`plot_shape()`、`strategy.entry()` 等。

## 枚舉常量

Pine Script 使用小寫點號表示內置常量，Navi 使用 PascalCase 枚舉類型。

| Pine Script | Navi |
|---|---|
| `strategy.long` | `Direction.Long` |
| `strategy.short` | `Direction.Short` |
| `strategy.fixed` | `DefaultQtyType.Fixed` |
| `strategy.percent_of_equity` | `DefaultQtyType.PercentOfEquity` |
| `shape.triangleup` | `Shape.TriangleUp` |
| `shape.triangledown` | `Shape.TriangleDown` |
| `location.belowbar` | `Location.BelowBar` |
| `location.abovebar` | `Location.AboveBar` |
| `size.small` | `Size.Small` |
| `size.normal` | `Size.Normal` |
| `format.price` | `Format.Price` |
| `format.volume` | `Format.Volume` |
| `display.none` | `display.NONE` |

## 顏色常量

Pine Script 顏色常量使用小寫（`color.blue`），Navi 使用大寫（`color.BLUE`）。

```pine
// Pine
color.blue, color.red, color.green, color.orange
```

```navi
// Navi
color.BLUE, color.RED, color.GREEN, color.ORANGE
```

`color.new(color.BLUE, 80)` 的用法兩者相同（透明度 0–100）。

## 內置函數名稱

部分 Pine Script 函數名使用駝峰命名或無下劃線，Navi 統一使用 `snake_case`。

| Pine Script | Navi |
|---|---|
| `plotshape(...)` | `plot_shape(...)` |
| `plotchar(...)` | `plot_char(...)` |
| `bgcolor(...)` | `bg_color(...)` |
| `barcolor(...)` | `bar_color(...)` |
| `alertcondition(...)` | `alert_condition(...)` |

## 腳本版本頭

Pine Script 文件需要在頂部寫 `// @version=6`，Navi 不需要版本頭。

```pine
// Pine — 必須有版本頭
// @version=6
indicator("My Script")
```

```navi
// Navi — 不需要版本頭
indicator("My Script");
```

## 完整示例

```pine
// Pine Script
indicator("Bollinger Bands", overlay=true)
length = input.int(20, "Length")
mult   = input.float(2.0, "Multiplier")
[basis, upper, lower] = ta.bb(close, length, mult)
plot(basis, "Basis", color.blue)
plot(upper, "Upper", color.red)
plot(lower, "Lower", color.green)
```

```navi
// Navi
indicator("Bollinger Bands", overlay: true);
let length = input.int(20, "Length");
let mult   = input.float(2.0, "Multiplier");
let (basis, upper, lower) = ta.bb(close, length, mult);
plot(basis, "Basis", color.BLUE);
plot(upper, "Upper", color.RED);
plot(lower, "Lower", color.GREEN);
```

## 不變的部分

- 所有內置變量（`close`、`open`、`high`、`low`、`volume`、`bar_index` 等）
- 所有標準庫函數（`ta.*`、`math.*`、`str.*`、`array.*` 等）
- `indicator()`、`strategy()`、`library()` 聲明及所有輸出函數
- 策略函數、`input.*`、`request.security()`、歷史引用、`var`/`varip`、`na`/`nz()` 等
