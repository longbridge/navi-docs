# Functions & Methods

## Function Definitions

All functions use brace blocks. The last expression in the body is the return value — there is no `return` keyword:

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

### Functions Returning Tuples

```navi
fn calcBands(src, length, mult) {
    let basis = ta.sma(src, length);
    let dev = mult * ta.stdev(src, length);
    (basis, basis + dev, basis - dev);
}

let (mid, upper, lower) = calcBands(close, 20, 2.0);
```

> **Note:** In Navi, tuples may only appear as function return values and must be immediately destructured on assignment. They cannot be stored in variables, passed as arguments, or used inside other expressions.

### Default Parameters

```navi
fn myPlot(src, length = 14, title = "Default") {
    let sma = ta.sma(src, length);
    plot(sma, title);
    sma;
}
```

### Named Arguments

When calling functions, you can use named arguments:

```navi
plot(close, title: "Close", color: color.BLUE, linewidth: 2);
```

## Function Overloading

Multiple functions can share the same name if they have different parameter types:

```navi
fn format(x: int) {
    String.from(x);
}
fn format(x: float) {
    String.from(x, "#.##");
}
fn format(x: String) {
    x;
}
```

## Methods

Methods are functions whose first parameter is the receiver (`self`). They support two equivalent call forms:

```navi
method double(self: int) {
    self * 2;
}

let x = 5;
x.double();    // dot-call — receiver on the left
double(x);     // free-function call — receiver as first argument (UFCS)
```

Both forms are interchangeable. Use whichever reads more naturally for your context.

Methods work with custom types:

```navi
struct Position {
    entry: float,
    size: float,
}

method pnl(self: Position, currentPrice: float) {
    (currentPrice - self.entry) * self.size;
}

method isProfit(self: Position, currentPrice: float) {
    self.pnl(currentPrice) > 0;
}

let pos = Position.new(entry: 100.0, size: 10.0);
if pos.isProfit(close) {
    label.new(bar_index, high, String.from(pos.pnl(close), "#.##"));
}
```

## No Recursive Calls

Navi **does not allow recursion**. A function cannot call itself, either directly or indirectly through other functions. The compiler rejects any call cycle at compile time:

```navi
// ERROR — direct recursion is not allowed
fn factorial(n) {
    n <= 1 ? 1 : n * factorial(n - 1);
}

// ERROR — indirect recursion is also rejected
fn isEven(n) {
    n == 0 ? true : isOdd(n - 1);
}
fn isOdd(n) {
    n == 0 ? false : isEven(n - 1);
}
```

This is a fundamental language constraint, not an implementation limitation. Use `for` or `while` loops for iterative computation instead:

```navi
fn factorial(n) {
    let result = 1;
    for i = 2 to n {
        result *= i;
    }
    result;
}
```

## Explicit Return Types

Navi supports annotating a return type before the function name for stricter type checking:

```navi
fn greet(name: String): String {
    "Hello, " + name;
}

fn average(a: float, b: float): float {
    (a + b) / 2.0;
}
```

This also works with methods:

```navi
method isPositive(self: float): bool {
    self > 0;
}
```

## Generic Functions

Navi allows type parameters declared with `<...>` after the function name:

```navi
fn identity<T>(value: T) {
    value;
}
fn first<T>(arr: Array<T>) {
    arr.get(0);
}
method contains<T>(self: Array<T>, value: T) {
    self.indexof(value) >= 0;
}
```

Generic functions allow you to write reusable code that works with multiple types.

## Variadic Parameters

Navi allows the last parameter to be variadic with `...`:

```navi
fn sum(first: int, rest: int...) {
    first + rest;
}
```

The variadic parameter must be the last one in the parameter list.

## Properties

The `property` keyword declares a function that cannot have parameters and is called without parentheses, making it look like a variable or property access:

```navi
property size() {
    42;
}

// Access as a variable — no parentheses:
let value = size; // 42

// Calling with parentheses is an ERROR:
let value = size(); // error: function `size` not defined
```

**Examples from the standard library:**

```navi
// Candlestick data (prelude/candlestick.1.nv)
export property open(): series float {
    @native.candlestick(1);
}
export property close(): series float {
    @native.candlestick(4);
}
export property hl2(): series float {
    (high + low) / 2;
}

// Constants (stdlib/math.1.nv)
export property pi(): const float {
    3.1415926535897932;
}
```

Properties allow Navi's standard library to expose built-in values like `close`, `open`, `math.pi`, and `color.RED` as properties in Navi source code.

## Static Methods on Types

The `staticmethod` keyword defines a static method associated with a specific object type. Static methods are called on the type itself, not on an instance:

```navi
struct AB {
    a: int,
}

staticmethod(AB) add(a: int, b: int): int {
    a + b;
}

// Call on the type name:
let result = AB.add(20, 5); // 25
```

Static methods can only be defined for **struct or newtype** types, not for enums or primitive types.

**Examples from the standard library:**

```navi
// Factory methods for chart.Point (stdlib/chart.1.nv)
export struct Point {
    index: int,
    time: int,
    price: float,
}

export staticmethod(Point) now(price: float = close): Point {
    Point.new(bar_index, time_now, price);
}

export staticmethod(Point) from_time(time: int, price: float): Point {
    Point.new(na, time, price);
}
```

These are called as `chart.Point.now()` and `chart.Point.from_time(time, price)`.

## Static Properties on Types

The `staticproperty` keyword is like `staticmethod`, but the accessor takes no parameters and is referenced **without parentheses** — just like a regular `property`:

```navi
struct Counter {
    value: int,
}

staticproperty(Counter) zero(): Counter {
    Counter.new();
}

// Access without ():
let c = Counter.zero;
```

`staticproperty` can only be defined for **struct or newtype** types, not for enums or primitive types.

| | `staticmethod` | `staticproperty` |
|---|---|---|
| Parameters | Yes | None |
| Call syntax | `Type.name(args)` | `Type.name` |

## Operator Overloading

The `operator` keyword defines custom behavior for arithmetic operators on user-defined types:

```navi
struct Vec2 {
    x: float,
    y: float,
}

operator+(a: Vec2, b: Vec2): Vec2 {
    Vec2.new(a.x + b.x, a.y + b.y);
}

operator-(a: Vec2, b: Vec2): Vec2 {
    Vec2.new(a.x - b.x, a.y - b.y);
}

// Now you can use the operators naturally:
let a: Vec2 = Vec2.new(1, 2);
let b: Vec2 = Vec2.new(3, 4);
let c: Vec2 = a + b; // Vec2.new(4, 6)
```

Supported operators: `+`, `-`, `*`, `/` (no space between `operator` and the symbol). Multiple overloads for different operand types are allowed.

## Built-in Functions

Navi provides many built-in functions:

```navi
// Plotting
plot(close, "Close", color.BLUE);
plot_shape(close > open, style: Shape.TriangleUp);
bg_color(close > open ? color.new(color.GREEN, 90) : na);

// Technical Analysis
let sma = ta.sma(close, 20);
let ema = ta.ema(close, 12);
let (macdLine, signal, hist) = ta.macd(close, 12, 26, 9);
let rsi = ta.rsi(close, 14);

// Math
let rounded = math.round(close, 2);
let maxVal = math.max(open, close);

// String operations
let text = String.from(close, "#.##");

// Input
let length = input.int(14, "RSI Length", minval: 1);
let src = input.source(close, "Source");
```

## Next Steps

- [Custom Types & Enums](/docs/custom-types) — user-defined types, enums, and newtype declarations
- [Standard Library](/api/stdlib/) — explore the standard library
