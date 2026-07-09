# Migrating from Pine Script to Navi

## Do You Need to Migrate?

**No migration required to run existing scripts.** Pine Script V6 files (`.pine`) run directly on the Longbridge platform without any changes.

However, you may want to migrate to Navi (`.nvs`) if you want:
- **Editor support** — the VS Code extension (completions, diagnostics, hover, go-to-definition) only works with `.nvs` files
- **New scripts** — Navi is the primary language with full tooling support

If you're writing new scripts or want editor support, this guide covers every syntax change needed to convert Pine Script to Navi.

---

Navi and Pine Script V6 share the same standard library, built-ins, and execution model. The only differences are **surface syntax**.

## Key Differences at a Glance

| Concept | Pine Script | Navi |
|---|---|---|
| Blocks | indentation | `{ }` braces |
| Statement separator | newline | `;` |
| Variable declaration | `a = 1` | `let a = 1;` |
| Reassignment | `a := 1` | `a = 1;` |
| Import | `import foo/bar/1 as f` | `use foo/bar/1 as f;` |
| Function | `f(a) => expr` | `fn f(a) { expr }` |
| Parameter type | `float a` | `a: float` |
| Return type | `float f()` | `fn f(): float` |
| Tuple | `[a, b]` | `(a, b)` |
| Struct | `type T` + indented | `struct T { … }` |
| Enum | `enum E` + indented | `enum E { … }` |

## Statements and Blocks

Pine uses indentation to define blocks. Navi uses `{ }` braces, and every statement ends with `;`.

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

Newlines are insignificant in Navi — you can split or join lines freely as long as each statement ends with `;`.

## Variable Declarations and Reassignment

Pine uses `a = 1` for both declaration and reassignment (with `:=` for reassignment in some contexts). Navi requires `let` for declarations and uses `=` for reassignment.

```pine
// Pine
a = 1          // declaration
a := 2         // reassignment
int b = 3      // typed declaration
var c = 0      // persistent state
```

```navi
// Navi
let a = 1;          // declaration
a = 2;              // reassignment (no keyword)
let b: int = 3;     // typed declaration
var c = 0;          // persistent state
```

## Functions

Pine uses `=>` for function bodies. Navi uses `fn` with braces. Parameter types and return types swap order.

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

Multi-line functions:

```pine
// Pine
maFast(src, len) =>
    ema = ta.ema(src, len)
    sma = ta.sma(src, len)
    (ema + sma) / 2
```

```navi
// Navi
fn maFast(src, len) {
    let ema = ta.ema(src, len);
    let sma = ta.sma(src, len);
    (ema + sma) / 2
}
```

## Control Flow

All control flow works the same — just add braces and semicolons.

```pine
// Pine
for i = 0 to 9
    total := total + i

for v in myArray
    process(v)

while n > 0
    n := n - 1
```

```navi
// Navi
for i = 0 to 9 {
    total = total + i;
}

for v in myArray {
    process(v);
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

## Tuples

Pine uses `[a, b]` for tuples (which conflicts with array syntax). Navi uses `(a, b)`.

```pine
// Pine
[basis, upper, lower] = ta.bb(close, 20, 2.0)
[fast, slow] = compute()
```

```navi
// Navi
let (basis, upper, lower) = ta.bb(close, 20, 2.0);
let (fast, slow) = compute();
```

Tuple return types:

```pine
// Pine
[float, float] minmax(array<float> xs) =>
    [array.min(xs), array.max(xs)]
```

```navi
// Navi
fn minmax(xs: array<float>): (float, float) {
    (array.min(xs), array.max(xs))
}
```

## User-Defined Types (Structs)

Pine uses an indented block after `type`. Navi uses `struct` with braces. Field syntax is the same (`type name`), separated by commas.

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

## Enums

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

## Imports

```pine
// Pine
import author/mylib/1 as lib
```

```navi
// Navi
use author/mylib/1 as lib;
```

## Type Qualifiers

Type qualifiers (`const`, `input`, `simple`, `series`) work the same in both languages. In Navi they appear inside the type annotation:

```pine
// Pine
const int len = 14
series float src = close
```

```navi
// Navi
let len: const int = 14;
let src: series float = close;
```

## Complete Example

A simple Bollinger Bands indicator converted from Pine Script to Navi:

```pine
// Pine Script
indicator("Bollinger Bands", overlay=true)

length = input.int(20, "Length")
mult   = input.float(2.0, "Multiplier")

[basis, upper, lower] = ta.bb(close, length, mult)

plot(basis, "Basis", color.blue)
plot(upper, "Upper", color.red)
plot(lower, "Lower", color.green)
fill(upper, lower, color.new(color.blue, 90))
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
fill(upper, lower, color.new(color.BLUE, 90));
```

## What Stays the Same

Everything not listed above is identical between Pine Script and Navi:

- All built-in variables (`close`, `open`, `high`, `low`, `volume`, `bar_index`, …)
- All standard library functions (`ta.*`, `math.*`, `str.*`, `array.*`, …)
- `indicator()`, `strategy()`, `library()` declarations
- `plot()`, `plotshape()`, `bgcolor()`, `fill()`, `label.*`, `line.*`, …
- `strategy.entry()`, `strategy.exit()`, `strategy.close()`, …
- `input.*` functions
- `request.security()`, `request.currency_rate()`, …
- History references (`close[1]`, `x[n]`)
- `var` and `varip` semantics
- `na`, `nz()`, `fixnan()`
- Comments (`//`, `//@function`, …)
