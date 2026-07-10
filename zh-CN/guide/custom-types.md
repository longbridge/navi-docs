# 自定义类型与枚举

## 用户定义类型（UDT）

使用 `struct` 关键字定义自定义类型。字段必须有显式类型，可以有可选的默认值：

```navi
struct Order {
    int id,
    string symbol,
    float price = na,
    varip int updateCount = 0,
}
```

字段可以使用：
- 显式类型（必需）
- 可选的默认值，使用 `=`
- 可选的 `varip` 声明模式（使字段在 K 线内更新间持久化）

### 创建实例

使用 `.new()` 创建实例：

```navi
let myOrder: Order = Order.new(id: 1, symbol: "AAPL");
```

### 访问和修改字段

```navi
let orderPrice = myOrder.price;
myOrder.price = 155.0;
myOrder.quantity = 200;
```

### 复制

```navi
let clone: Order = Order.copy(myOrder);
clone.price = 160.0;
```

### 类型上的方法

```navi
struct Position {
    float entry,
    float size,
    bool isLong = true,
}

method pnl(self: Position, currentPrice: float) {
    let diff = currentPrice - self.entry;
    self.isLong ? diff * self.size : -diff * self.size;
}

method isProfit(self: Position, currentPrice: float) {
    self.pnl(currentPrice) > 0;
}

let pos = Position.new(entry: 100.0, size: 10.0);
if pos.isProfit(close) {
    label.new(bar_index, high, str.tostring(pos.pnl(close), "#.##"));
}
```

### `varip` 用于类型字段

单个字段可以使用 `varip` 在 K 线内更新间持久化，而其他字段仍然会回滚：

```navi
struct Counter {
    int bars = 0,
    varip int ticks = 0,
}

var counter: Counter = Counter.new();
counter.bars += 1; // 在未确认 K 线上会回滚
counter.ticks += 1; // 不会回滚
```

### 泛型 UDT

UDT 可以声明一个或多个类型参数。实例化时，参数名代表任意具体类型：

```navi
struct Pair<A, B> {
    A first,
    B second,
}

let p: Pair<int, string> = Pair.new(first: 42, second: "hello");
```

字段类型本身也可以含有类型参数，例如持有 `T` 的集合：

```navi
struct Stack<T> {
    Array<T> items,
    int count = 0,
}

method push<T>(self: Stack<T>, value: T) {
    self.items.push(value);
    self.count += 1;
}

method pop<T>(self: Stack<T>): T {
    self.count -= 1;
    self.items.pop();
}

var s: Stack<float> = Stack.new();
s.push(close);
s.push(open);
```

编译器会对每种实例化进行单态化处理——`Stack<float>` 和 `Stack<int>` 会生成独立的、类型正确的对象，引用类型字段的 GC 追踪也会自动设置。

## 枚举

使用 `enum` 关键字定义枚举。枚举变体是简单的名称（没有关联数据）：

```navi
enum Direction {
    Long,
    Short,
    Both = "Both Directions",
}
```

### 使用枚举

通过枚举名称访问变体：

```navi
let d: Direction = Direction.Long;

if d == Direction.Long {
    strategy.entry("L", Direction.Long);
} else if d == Direction.Short {
    strategy.entry("S", Direction.Short);
}
```

## 导入和导出

### 导出

使用 `export` 标记函数、类型和枚举，使它们对导入模块可见：

```navi
library("MyLib");

export struct Config {
    int length,
    float multiplier,
}

export fn calcSMA(src: series float, length: simple int) {
    ta.sma(src, length);
}

export enum Side {
    Left,
    Right,
}
```

### 导入

```navi
indicator("My Indicator");
use MyLib as lib;

let config = lib.Config.new(length: 20, multiplier: 2.0);
let sma = lib.calcSMA(close, config.length);
plot(sma);
```

通过模块名称访问导出的成员：

```navi
use utils;
utils.add(1, 2);                     // 调用导出的函数
let obj: utils.MyType = na;          // 使用导出的类型
let value = utils.MyEnum.A;          // 访问导出的枚举变体
```

## 新类型声明

Navi 支持 `type Name = underlying_type;` 语法来创建由现有类型支持的不同类型。这允许在不创建新结构的情况下定义特定领域的类型：

```navi
type MyInt = int;
let a: MyInt = 10; // 接受底层类型的值
```

新类型可以分层：

```navi
type MyInt = int;
type SpecialInt = MyInt;
let x: SpecialInt = 42; // OK
```

## 编译器特殊类型

以下类型由 Navi 标准库用于实现某些高级内置函数。通常情况下，你不会在自己的脚本中直接使用它们——它们出现在标准库源码中，当你调用 `input.source`、`request.security` 或 `max_bars_back` 等函数时会被透明处理。

### `expression`

允许函数接收**未求值的 AST 节点**而非计算后的值。`input.source()` 用它来获知用户传入的是哪个变量，从而在 UI 中以变量名显示。

```navi
let src = input.source(defval: close);
// `close` 被捕获为表达式，不会被求值为数字。
// 设置 UI 会将"Close"显示为默认来源选项。
```

### `instructions<T>`

允许函数接收**已编译的代码块**，并在不同上下文中重新执行。`request.security()` 用它在不同标的或时间周期中运行表达式。

```navi
// 简单序列——每根 bar 在 AAPL/1D 上下文中重新求值：
let aapl_close = request.security("AAPL", "1D", close);

// 复合表达式——整个表达式在上下文中重新执行：
let aapl_sma = request.security("AAPL", "1D", ta.sma(close, 14));
```

### `variableref`

允许函数接收**变量或序列的编译期引用**。编译器在编译时解析该引用，并将变量的元数据传递给原生函数。`max_bars_back()` 用它为特定序列扩展历史缓冲区。

```navi
// 为内置序列扩展历史缓冲区：
max_bars_back(close, 500);

// 或为用户自定义序列变量：
let myAvg: series float = ta.sma(close, 20);
max_bars_back(myAvg, 200);
```

## 下一步

- [函数与方法](/zh-CN/guide/functions-and-methods) — 函数定义、静态方法、运算符重载等
- [标准库](/zh-CN/api/stdlib/) — 探索内置函数
