# 从 Pine Script V6 迁移到 Navi

## 需要迁移吗？

**现有脚本无需迁移即可运行。** Pine Script V6 文件（`.pine`）可直接在 Longbridge 平台运行，无需任何修改。

但如果你有以下需求，则值得迁移到 Navi（`.nv`）：
- **编辑器支持** — VS Code 扩展（补全、诊断、悬停、跳转定义）仅支持 `.nv` 文件
- **编写新脚本** — Navi 是主要语言，拥有完整的工具链支持

---

Navi 与 Pine Script V6 共享相同的标准库、内置函数和执行模型，唯一的区别在于**语法表面**。

## 核心差异一览

| 概念 | Pine Script | Navi |
|---|---|---|
| 代码块 | 缩进 | `{ }` 花括号 |
| 语句分隔符 | 换行 | `;` |
| 变量声明 | `a = 1` | `let a = 1;` |
| 重新赋值 | `a := 1` | `a = 1;` |
| 导入 | `import foo/bar/1 as f` | `use foo/bar/1 as f;` |
| 函数 | `f(a) => expr` | `fn f(a) { expr }` |
| 参数类型 | `float a` | `a: float` |
| 返回类型 | `float f()` | `fn f(): float` |
| 元组 | `[a, b]` | `(a, b)` |
| 结构体 | `type T` + 缩进 | `struct T { … }` |
| 枚举 | `enum E` + 缩进 | `enum E { … }` |
| 命名参数 | `f(length=14)` | `f(length: 14)` |
| 枚举常量 | `strategy.long` | `Direction.Long` |
| 颜色常量 | `color.blue` | `color.BLUE` |
| 脚本版本头 | `// @version=6`（必需） | 不需要 |

## 语句与代码块

Pine 用缩进定义代码块，Navi 使用 `{ }` 花括号，每条语句以 `;` 结尾。

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

## 变量声明与赋值

Pine 用 `a = 1` 声明，用 `:=` 重新赋值。Navi 声明必须带 `let`，重新赋值直接用 `=`。

```pine
// Pine
a = 1          // 声明
a := 2         // 重新赋值
int b = 3      // 带类型声明
var c = 0      // 持久状态
```

```navi
// Navi
let a = 1;          // 声明
a = 2;              // 重新赋值（无关键字）
let b: int = 3;     // 带类型声明
var c = 0;          // 持久状态
```

## 函数

Pine 用 `=>` 定义函数体，Navi 用 `fn` 加花括号。参数类型和返回类型的顺序互换。

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

控制流逻辑相同，只需加花括号和分号。

```pine
// Pine
for i = 0 to 9
    total := total + i

while n > 0
    n := n - 1
```

```navi
// Navi
for i = 0 to 9 {
    total = total + i;
}

while n > 0 {
    n = n - 1;
}
```

### Switch

```pine
// Pine
result = switch x
    1 => "one"
    2 => "two"
    => "other"
```

```navi
// Navi
let result = switch x {
    1 => "one";
    2 => "two";
    => "other";
};
```

## 元组

Pine 用 `[a, b]` 表示元组，与数组语法冲突。Navi 用 `(a, b)`。

```pine
// Pine
[basis, upper, lower] = ta.bb(close, 20, 2.0)
```

```navi
// Navi
let (basis, upper, lower) = ta.bb(close, 20, 2.0);
```

## 用户自定义类型（结构体）

Pine 用缩进块跟在 `type` 后面，Navi 用 `struct` 加花括号。

```pine
// Pine
type Point
    int x = 0
    float y = 0.0
```

```navi
// Navi
struct Point {
    int x = 0,
    float y = 0.0,
}
```

## 枚举

```pine
// Pine
enum Direction
    up
    down
```

```navi
// Navi
enum Direction {
    up,
    down,
}
```

## 命名参数（关键字参数）

Pine Script 使用 `=` 传递命名参数，Navi 使用 `:`。

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

这影响所有使用命名参数的内置函数调用：`indicator()`、`strategy()`、`input.*`、`plot()`、`plot_shape()`、`strategy.entry()` 等。

## 枚举常量

Pine Script 使用小写点号表示内置常量，Navi 使用 PascalCase 枚举类型。

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

## 颜色常量

Pine Script 颜色常量使用小写（`color.blue`），Navi 使用大写（`color.BLUE`）。

```pine
// Pine
color.blue, color.red, color.green, color.orange
```

```navi
// Navi
color.BLUE, color.RED, color.GREEN, color.ORANGE
```

`color.new(color.BLUE, 80)` 的用法两者相同（透明度 0–100）。

## 内置函数名称

部分 Pine Script 函数名使用驼峰命名或无下划线，Navi 统一使用 `snake_case`。

| Pine Script | Navi |
|---|---|
| `plotshape(...)` | `plot_shape(...)` |
| `plotchar(...)` | `plot_char(...)` |
| `bgcolor(...)` | `bg_color(...)` |
| `barcolor(...)` | `bar_color(...)` |
| `alertcondition(...)` | `alert_condition(...)` |

## 脚本版本头

Pine Script 文件需要在顶部写 `// @version=6`，Navi 不需要版本头。

```pine
// Pine — 必须有版本头
// @version=6
indicator("My Script")
```

```navi
// Navi — 不需要版本头
indicator("My Script");
```

## 完整示例

以布林带指标为例，展示 Pine Script → Navi 的完整转换：

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

## 不变的部分

以下内容在 Pine Script 和 Navi 之间完全相同：

- 所有内置变量（`close`、`open`、`high`、`low`、`volume`、`bar_index` 等）
- 所有标准库函数（`ta.*`、`math.*`、`str.*`、`array.*` 等）
- `indicator()`、`strategy()`、`library()` 声明
- `plot()`、`plotshape()`、`bgcolor()`、`fill()`、标签、线条等
- 策略函数（`strategy.entry()`、`strategy.exit()` 等）
- 所有 `input.*` 函数
- `request.security()`、历史引用（`close[1]`）、`var`/`varip`、`na`/`nz()` 等
