# 函数与方法

## 函数定义

所有函数都使用花括号块。函数体的最后一个表达式是返回值——没有 `return` 关键字：

```navi
fn double(x) {
    x * 2;
}

fn smaCustom(src, length) {
    let sum = 0.0;
    for i = 0 to length - 1 {
        sum += src[i];
    }
    sum / length;
}
```

### 返回元组的函数

```navi
fn calcBands(src, length, mult) {
    let basis = ta.sma(src, length);
    let dev = mult * ta.stdev(src, length);
    (basis, basis + dev, basis - dev);
}

let (mid, upper, lower) = calcBands(close, 20, 2.0);
```

> **注意：** 在 Navi 中，元组只能作为函数返回值使用，且必须在赋值时立即解构。元组不能存储在变量中、作为参数传递，也不能用于其他表达式中。

### 默认参数

```navi
fn myPlot(src, length:  14, title:  "Default") {
    let sma = ta.sma(src, length);
    plot(sma, title);
    sma;
}
```

### 命名参数

调用函数时可以使用命名参数：

```navi
plot(close, title: "Close", color: color.BLUE, linewidth: 2);
```

## 函数重载

多个函数可以共享相同的名称，只要参数类型不同：

```navi
fn format(x: int) {
    str.tostring(x);
}
fn format(x: float) {
    str.tostring(x, "#.##");
}
fn format(x: string) {
    x;
}
```

## 方法

方法是第一个参数为接收者（`self`）的函数。可以使用点语法调用：

```navi
method double(self: int) {
    self * 2;
}

let x = 5;
x.double(); // 10
```

方法可以用于自定义类型：

```navi
struct Position {
    float entry,
    float size,
}

method pnl(self: Position, currentPrice: float) {
    (currentPrice - self.entry) * self.size;
}

method isProfit(self: Position, currentPrice: float) {
    self.pnl(currentPrice) > 0;
}

let pos = Position.new(entry: 100.0, size: 10.0);
if pos.isProfit(close) {
    label.new(bar_index, high, str.tostring(pos.pnl(close), "#.##"));
}
```

## 禁止递归调用

Navi **不允许递归**。函数不能直接或通过其他函数间接调用自身。编译器在编译时拒绝任何调用循环：

```navi
// 错误 — 不允许直接递归
fn factorial(n) {
    n <= 1 ? 1 : n * factorial(n - 1);
}

// 错误 — 间接递归也会被拒绝
fn isEven(n) {
    n == 0 ? true : isOdd(n - 1);
}
fn isOdd(n) {
    n == 0 ? false : isEven(n - 1);
}
```

这是语言的基本约束，不是实现限制。请使用 `for` 或 `while` 循环进行迭代计算：

```navi
fn factorial(n) {
    let result = 1;
    for i = 2 to n {
        result *= i;
    }
    result;
}
```

## 显式返回类型

Navi 支持在函数名前标注返回类型以进行更严格的类型检查：

```navi
fn greet(name: string): string {
    "Hello, " + name;
}

fn average(a: float, b: float): float {
    (a + b) / 2.0;
}
```

这也适用于方法：

```navi
method isPositive(self: float): bool {
    self > 0;
}
```

## 泛型函数

Navi 允许在函数名后用 `<...>` 声明类型参数：

```navi
fn identity<T>(value: T) {
    value;
}
fn first<T>(arr: Array<T>) {
    arr.get(0);
}
```

## 可变参数

Navi 允许最后一个参数使用 `...` 声明为可变参数：

```navi
fn sum(first: int, rest: int...) {
    first + rest;
}
```

可变参数必须是参数列表中的最后一个。

## 属性（property）

`property` 关键字声明一个不能有参数且不带括号调用的函数，使其看起来像一个属性：

```navi
property size() {
    42;
}

// 作为变量访问 — 不带括号：
let value = size; // 42

// 带括号调用会出错：
let value = size(); // error: function `size` not defined
```

**标准库中的示例：**

```navi
// 烛形数据（prelude/candlestick.1.nv）
export property open(): series float {
    @native.candlestick(1);
}
export property close(): series float {
    @native.candlestick(4);
}
export property hl2(): series float {
    (high + low) / 2;
}

// 常数（stdlib/math.1.nv）
export property pi(): const float {
    3.1415926535897932;
}
```

## 类型上的静态方法

`staticmethod` 关键字为特定对象类型定义静态方法。静态方法在类型本身上调用，而不是在实例上：

```navi
struct AB {
    int a,
}

staticmethod(AB) add(a: int, b: int): int {
    a + b;
}

// 在类型名上调用：
let result = AB.add(20, 5); // 25
```

**标准库中的示例：**

```navi
// chart.point 的工厂方法（stdlib/chart.1.nv）
export struct point {
    int index,
    int time,
    float price,
}

export staticmethod(point) now(price: float = close): point {
    point.new(bar_index, time_now, price);
}

export staticmethod(point) from_time(time: int, price: float): point {
    point.new(na, time, price);
}
```

这些被调用为 `chart.point.now()` 和 `chart.point.from_time(time, price)`。

## 类型上的静态属性

`staticproperty` 关键字与 `staticmethod` 类似，但访问器不接受参数，且引用时**不加括号**——与普通 `property` 相同：

```navi
struct Counter {
    int value,
}

staticproperty(Counter) zero(): Counter {
    Counter.new();
}

// 不带括号访问：
let c = Counter.zero;
```

`staticproperty` 只能为 **struct 或 newtype** 类型定义，不能用于枚举或原始类型。`staticmethod` 也遵循同样的规则。

| | `staticmethod` | `staticproperty` |
|---|---|---|
| 参数 | 有 | 无 |
| 调用语法 | `Type.name(args)` | `Type.name` |

## 运算符重载

`operator` 关键字为用户定义的类型定义自定义算术运算符行为：

```navi
struct Vec2 {
    float x,
    float y,
}

operator+(a: Vec2, b: Vec2): Vec2 {
    Vec2.new(a.x + b.x, a.y + b.y);
}

operator-(a: Vec2, b: Vec2): Vec2 {
    Vec2.new(a.x - b.x, a.y - b.y);
}

// 现在可以自然地使用运算符：
let a: Vec2 = Vec2.new(1, 2);
let b: Vec2 = Vec2.new(3, 4);
let c: Vec2 = a + b; // Vec2.new(4, 6)
```

支持的运算符：`+`、`-`、`*`、`/`（`operator` 和符号之间没有空格）。允许为不同的操作数类型进行多个重载。

## 内置函数

Navi 提供了许多内置函数：

```navi
// 绘图
plot(close, "Close", color.BLUE);
plot_shape(close > open, style:  Shape.TriangleUp);
bg_color(close > open ? color.new(color.GREEN, 90) : na);

// 技术分析
sma = ta.sma(close, 20);
ema = ta.ema(close, 12);
[macdLine, signal, hist] = ta.macd(close, 12, 26, 9);
rsi = ta.rsi(close, 14);

// 数学
rounded = math.round(close, 2);
maxVal = math.max(open, close);

// 字符串操作
text = str.tostring(close, "#.##");

// 输入
length = input.int(14, "RSI Length", minval:  1);
src = input.source(close, "Source");
```

## 下一步

- [自定义类型与枚举](/zh-CN/guide/custom-types) — 用户定义类型、枚举和新类型声明
- [标准库](/zh-CN/api/stdlib/) — 探索标准库
