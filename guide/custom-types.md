# Custom Types & Enums

## User-Defined Types (UDTs)

Define custom types with the `struct` keyword. Fields must have explicit types and can have optional default values:

```navi
struct Order {
    int id,
    string symbol,
    float price = na,
    varip int updateCount = 0,
}
```

Fields can use:
- An explicit type (required)
- An optional default value with `=`
- An optional `varip` declaration mode (makes the field persist across intrabar updates)

### Creating Instances

Use `.new()` to create an instance:

```navi
let myOrder: Order = Order.new(id: 1, symbol: "AAPL");
```

### Accessing and Modifying Fields

```navi
let orderPrice = myOrder.price;
myOrder.price = 155.0;
myOrder.quantity = 200;
```

### Copying

```navi
let clone: Order = Order.copy(myOrder);
clone.price = 160.0;
```

### Methods on Types

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

### `varip` on Type Fields

Individual fields can use `varip` to persist across intrabar updates while other fields still roll back:

```navi
struct Counter {
    int bars = 0,
    varip int ticks = 0,
}

var counter: Counter = Counter.new();
counter.bars += 1; // subject to rollback on unconfirmed bars
counter.ticks += 1; // NOT subject to rollback
```

### Generic UDTs

UDTs can declare one or more type parameters. The parameter names stand for
any type when the UDT is instantiated:

```navi
struct Pair<A, B> {
    A first,
    B second,
}

let p: Pair<int, string> = Pair.new(first: 42, second: "hello");
```

Field types may themselves be parameterized — for example, holding a collection of `T`:

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

The compiler monomorphizes each instantiation — `Stack<float>` and `Stack<int>` produce separate, correctly-typed objects with proper GC tracking for reference fields.

## Enums

Define enumerations with the `enum` keyword. Variants are simple names (no associated data):

```navi
enum Direction {
    Long,
    Short,
    Both = "Both Directions",
}
```

### Using Enums

Access variants via the enum name:

```navi
let d: Direction = Direction.Long;

if d == Direction.Long {
    strategy.entry("L", Direction.Long);
} else if d == Direction.Short {
    strategy.entry("S", Direction.Short);
}
```

## Import and Export

### Exporting

Mark functions, types, and enums with `export` to make them visible to importing modules:

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

### Importing

```navi
indicator("My Indicator");
use MyLib as lib;

let config = lib.Config.new(length: 20, multiplier: 2.0);
let sma = lib.calcSMA(close, config.length);
plot(sma);
```

Access exported members via the module name:

```navi
use utils;
utils.add(1, 2);                     // call exported function
let obj: utils.MyType = na;          // use exported type
let value = utils.MyEnum.A;          // access exported enum variant
```

## Newtype Declarations

Navi supports the `type Name = underlying_type;` syntax to create a distinct type backed by an existing type. This allows you to define domain-specific types without creating new structures:

```navi
type MyInt = int;
let a: MyInt = 10; // accepts the underlying type's values
```

Newtypes can be layered:

```navi
type MyInt = int;
type SpecialInt = MyInt;
let x: SpecialInt = 42; // OK
```

The standard library uses newtypes extensively to create distinct types for drawing objects and plot styles:

```navi
// prelude/draw.1.nv
export type plot_style = int;
export type hline = int;
export type label = int;
export type line = int;
export type box = int;
export type table = int;
```

## Compiler-Special Types

The following types are used by Navi's standard library to implement certain advanced built-in functions. You will not normally use them in your own scripts — they appear in stdlib source and are handled transparently when you call functions like `input.source`, `request.security`, or `max_bars_back`.

### `expression`

Allows a function to receive an **unevaluated AST node** instead of a computed value. Used by `input.source()` to know which variable the user passed in, so the UI can display it by name.

```navi
let src = input.source(defval: close);
// `close` is captured as an expression, not evaluated to a number.
// The settings UI shows "Close" as the default source option.
```

### `instructions<T>`

Allows a function to receive a **compiled code block** that is re-executed in a different context. Used by `request.security()` to run expressions on a different symbol or timeframe.

```navi
// Simple series — re-evaluated in the AAPL/1D context each bar:
let aapl_close = request.security("AAPL", "1D", close);

// Compound expression — entire expression re-executed in context:
let aapl_sma = request.security("AAPL", "1D", ta.sma(close, 14));
```

### `variableref`

Allows a function to receive a **compile-time reference to a variable or series**. The compiler resolves the reference at compile time and passes metadata to the native function. Used by `max_bars_back()` to extend the history buffer for a specific series.

```navi
// Extend the history buffer for a built-in series:
max_bars_back(close, 500);

// Or for a user-defined series variable:
let myAvg: series float = ta.sma(close, 20);
max_bars_back(myAvg, 200);
```

## Next Steps

- [Functions & Methods](/guide/functions-and-methods) — function definitions, static methods, operator overloading, and more
- [Standard Library](/api/stdlib/) — explore built-in functions
