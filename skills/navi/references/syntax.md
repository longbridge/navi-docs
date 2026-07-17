# Navi Syntax Reference

Use this file to write `.nv` source code. It describes Navi syntax only; API names live in [stdlib.md](stdlib.md), and bar-by-bar behavior lives in [execution-model.md](execution-model.md).

Navi syntax is stable, but if a detail here ever seems to conflict with working code, treat navi-lang.org as authoritative — the language guide at <https://navi-lang.org/docs/> (full text: <https://navi-lang.org/llms-full.txt>).

## Table of Contents

- [Program Shape](#program-shape)
- [Statements and Blocks](#statements-and-blocks)
- [Comments and Documentation Tags](#comments-and-documentation-tags)
- [Types](#types)
- [Variables and Reassignment](#variables-and-reassignment)
- [Operators](#operators)
- [Control Flow](#control-flow)
- [Functions and Methods](#functions-and-methods)
- [Structs, Enums, and Newtypes](#structs-enums-and-newtypes)
- [Imports and Exports](#imports-and-exports)
- [Syntax Checklist](#syntax-checklist)

## Program Shape

Every executable script starts with exactly one declaration:

```navi
indicator("My Indicator", overlay: true);

let len = input.int(14, "Length", minval: 1);
plot(ta.sma(close, len), "SMA");
```

Use:

- `indicator(...)` for visual studies and alerts.
- `strategy(...)` for order logic and backtests.
- `library(...)` for reusable exported functions/types/enums.

## Statements and Blocks

End statements with `;`. Newlines do not end statements.

```navi
let a = 1; let b = 2;
let c = a
    + b;
```

Declarations or control-flow forms with a trailing block do not need an extra `;` when used as standalone statements:

```navi
let close_when_up = close > open ? close : na;
plot(close_when_up, "Up Close");

fn double(x: float): float {
    x * 2.0;
}
```

Blocks return their last statement. When a block is used inside a larger declaration, the outer declaration still ends with `;`:

```navi
let body = if close > open {
    high;
} else {
    low;
};
```

## Comments and Documentation Tags

Line comments use `//`. Documentation tags accept both `//@tag` and `// @tag` and attach to the following declaration. Prefer the spaced form in new code.

```navi
// @function Calculates a smoothed value.
// @param src Source series.
// @param length Smoothing length.
// @returns Smoothed series.
export fn smooth(src: series float, length: simple int): series float {
    ta.ema(src, length);
}
```

Common tags: `@description`, `@function`, `@param`, `@returns`, `@type`, `@enum`, `@field`, `@variable`.

## Types

Primitive types:

| Type | Examples |
| --- | --- |
| `int` | `42`, `-5`, `+3` |
| `float` | `3.14`, `.5`, `3.`, `1e-3` |
| `bool` | `true`, `false` |
| `String` | `"hello"`, `'hello'` |
| `color` | `#FF0000`, `#FF000080`, `Color.BLUE` |

String escapes include `\\`, `\n`, `\r`, `\t`, `\"`/`""`, and `\'`/`''`.

`na` is a missing value. Annotate the type when Navi cannot infer it:

```navi
let maybe_price: float = na;
// let bad = na; // cannot infer type
```

Collection types are PascalCase:

```navi
let values: Array<float> = Array.new<float>(3, 0.0);
let counts: Map<String, int> = {"up": 1, "down": 2};
let grid: Matrix<float> = Matrix.new<float>(2, 3, 0.0);
```

Array and map literals:

```navi
let xs: Array<int> = [1, 2, 3];
let empty_xs: Array<float> = [];
let labels: Map<String, int> = {"fast": 9, "slow": 21};
let empty_labels: Map<String, int> = {};
```

Map keys must be primitive values or enums.

Tuples use parentheses and are for multiple return values. They must be immediately destructured:

```navi
let (basis, upper, lower) = ta.bb(close, 20, 2.0);
let (_, signal, hist) = ta.macd(close, 12, 26, 9);
```

Do not store a tuple in a variable, pass a tuple as an argument, or nest a tuple inside another expression.

## Variables and Reassignment

Declare with `let`, `var`, or `varip`:

```navi
let len = input.int(14, "Length");
let src: series float = close;
var peak: float = na;
varip updates: int = 0;
```

Type annotations are `name: type`. Type qualifiers go before the type:

```navi
let a: const int = 2;
let b: input int = input.int(10);
let c: simple int = a + b;
let d: series float = close;
```

Use bare `=` to reassign an existing variable. Compound assignments are supported.

```navi
var count = 0;
count = count + 1;
count += 1;
count -= 1;
count *= 2;
count /= 2;
count %= 3;
```

## Operators

- Arithmetic: `+`, `-`, `*`, `/`, `%`
- Comparison: `<`, `<=`, `>`, `>=`, `==`, `!=`
- Logical: `and`, `or`, `not`
- Ternary: `condition ? whenTrue : whenFalse`
- History reference: `seriesValue[1]`, `expr[n]`
- Member/namespace access: `ta.sma`, `order.price`, `labelId.set_text(...)`
- Named arguments: `plot(close, title: "Close", color: Color.BLUE)`

## Control Flow

All control-flow forms are expressions and can produce a value.

### `if`

```navi
let body = if close > open {
    high;
} else {
    low;
};

let is_up = close > open;
let is_down = close < open;
plot_shape(is_up, title: "Up", style: Shape.TriangleUp);
plot_shape(is_down, title: "Down", style: Shape.TriangleDown);
```

If an `if` expression omits `else`, the false branch yields `na` for most types, `false` for bool, or `""` for String.

### `for`

Numeric ranges:

```navi
let sum = 0.0;
for i = 0 to 9 {
    sum += close[i];
}

for i = 0 to 20 by 2 {
    log.info(String.from(i));
}
```

Collection iteration:

```navi
for value in values {
    log.info(String.from(value));
}

for (index, value) in values {
    log.info("{0}: {1}".format(index, value));
}
```

A loop expression returns the last statement evaluated in its final iteration, or `na` if no iteration runs.

### `while`

```navi
let i = 0;
let total = 0.0;
while i < 10 {
    total += close[i];
    i += 1;
}
```

Use `break;` and `continue;` inside loops.

### `switch`

Inline arms end with `,`. Block arms end with `}` and omit the comma.

```navi
let ma = switch maType {
    "EMA" => ta.ema(close, len),
    "SMA" => ta.sma(close, len),
    "RMA" => ta.rma(close, len),
    => ta.wma(close, len),
};
```

Condition-based `switch` omits the subject:

```navi
let direction = switch {
    close > open => 1,
    close < open => -1,
    => 0,
};
```

Multi-statement arm:

```navi
let label_text = switch day_of_week {
    DayOfWeek.Monday => "Mon",
    DayOfWeek.Tuesday => {
        let s = "Tue";
        s;
    }
    => "Other",
};
```

## Functions and Methods

Functions use `fn`. There is no `return` keyword; the final statement is the return value.

```navi
fn weighted(a: float, b: float, w: float): float {
    a * w + b * (1.0 - w);
}
```

Parameters are `name: type`. Types may be omitted when inference is enough, but prefer explicit types in reusable helpers.

Default parameters:

```navi
fn ma(src: series float, length: simple int = 20): series float {
    ta.sma(src, length);
}
```

Generics:

```navi
fn first<T>(xs: Array<T>): T {
    xs.get(0);
}
```

Variadic parameters must be last:

```navi
fn sum(first: int, rest: int...): int {
    first + rest.sum();
}
```

Multiple functions may share a name when parameter types differ. Recursive calls are not allowed; use loops.

Methods take the receiver as the first parameter and can be called with dot syntax or free-function syntax:

```navi
struct Position {
    entry: float,
    size: float,
}

method pnl(self: Position, current_price: float): float {
    (current_price - self.entry) * self.size;
}

let pos = Position.new(entry: close, size: 10.0);
let p = pos.pnl(close);
```

Properties are zero-argument accessors referenced without parentheses:

```navi
property midPrice(): series float {
    hl2;
}

let x = midPrice;
```

Static methods and static properties attach to `struct` or `type` names:

```navi
struct Pair {
    a: float,
    b: float,
}

staticmethod(Pair) zero(): Pair {
    Pair.new(a: 0.0, b: 0.0);
}

staticproperty(Pair) unit(): Pair {
    Pair.new(a: 1.0, b: 1.0);
}

let z = Pair.zero();
let u = Pair.unit;
```

Operator overloads use `operator+`, `operator-`, `operator*`, or `operator/` with no space between `operator` and the symbol.

## Structs, Enums, and Newtypes

Struct fields use `name: type`, comma-separated. Fields can have default values; `varip` is allowed on fields that should persist intrabar.

```navi
struct Order {
    id: int,
    symbol: String,
    price: float = na,
    varip updates: int = 0,
}

let order = Order.new(id: 1, symbol: "AAPL");
order.price = close;
let copy = Order.copy(order);
```

Generic structs:

```navi
struct Stack<T> {
    items: Array<T>,
    count: int = 0,
}
```

Enums contain simple variants, optionally with display titles:

```navi
enum Side {
    Long,
    Short,
    Both = "Both Directions",
}

let side: Side = Side.Long;
```

Newtypes use `type Name = Underlying;`:

```navi
type Price = float;
type PriceArray = Array<Price>;
```

## Imports and Exports

Libraries export declarations. Scripts import libraries with `use`.

```navi
library("TrendLib");

export fn slope(src: series float, length: simple int): series float {
    ta.linreg(src, length, 0) - ta.linreg(src, length, 1);
}

export enum Trend {
    Up,
    Down,
}
```

```navi
indicator("Use TrendLib");
use TrendLib as trend;

plot(trend.slope(close, 20));
```

## Syntax Checklist

- Start with `indicator`, `strategy`, or `library`.
- Use `;` after statements.
- Use `name: type`, not `type name`.
- Use `Array<T>`, `Map<K, V>`, and `Matrix<T>`, not lowercase collection type names.
- Use tuple destructuring immediately for multi-return functions.
- Use `x[1]` only to look backward in bar history.
- Use named arguments with `name: value`.
- Use PascalCase enum variants such as `Direction.Long` and `PlotStyle.Histogram`.
