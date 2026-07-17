# Language Basics

Every Navi script begins with a declaration statement: `indicator()`, `strategy()`, or `library()`.

## Script Structure

```navi
indicator("My Indicator");

// Your code here
plot(close);
```

Navi uses **brace blocks** `{ }` and **semicolons** `;` to terminate statements. Newlines are insignificant — you can split or join lines freely.

## Comments

```navi
// Single-line comment
let a: float = 10; // End-of-line comment
```

There are no multi-line comments. Special comments starting with `//@` are documentation tags: `//@function`, `//@param`, `//@returns`, `//@type`, `//@enum`, `//@field`, `//@variable`, `//@description`.

## Statements

Every statement ends with `;`. Newlines are insignificant — multiple statements can appear on one line, and a single statement can span multiple lines:

```navi
let a = 1; let b = 2; let c = a + b;   // multiple on one line

let result = long_variable_name         // split across lines
    + another_long_variable
    - some_other_value;
```

Statements that end with a closing brace `}` (functions, if/for/while, etc.) do not take a trailing `;`.

## Naming Conventions

Use consistent names in Navi source code:

- Variables, parameters, functions, methods, and properties use `snake_case`: `fast_length`, `long_signal`, `calculate_average`.
- Structs, enums, newtypes, and enum variants use `PascalCase`: `TradeState`, `Direction.Long`.
- Compile-time constants use `SCREAMING_SNAKE_CASE`: `MAX_LOOKBACK`.
- New `.nv` filenames use `snake_case`: `relative_strength_index.nv`.

The files under `example/indicators/` follow this filename convention.

## Basic Types

### Primitive Types

| Type | Description | Examples |
|---|---|---|
| `int` | Integer | `42`, `-123`, `+5` |
| `float` | Floating-point number | `3.14`, `.5`, `3.`, `1e-3` |
| `bool` | Boolean | `true`, `false` |
| `String` | Text | `"hello"`, `'world'` |
| `color` | RGBA color | `#FF0000`, `#FF000080` |
| `na` | Missing/undefined value | `na` |

### `int` and `float`

```navi
let a = 42;
let b = -123;
let d = 3.14;
let e = .14;        // leading dot
let f = 3.;         // trailing dot
let g = 314e-2;     // 3.14
```

### `String`

Strings can use single or double quotes with identical semantics:

```navi
let a = "Hello, World!";
let b = 'Hello, World!';
let full = "Hello, " + "World!";  // concatenation with +
```

Supported escape sequences:

| Escape | Meaning |
|---|---|
| `\\` | Backslash |
| `\n` | Newline |
| `\r` | Carriage return |
| `\t` | Tab |
| `\"` or `""` | Double quote (in double-quoted strings) |
| `\'` or `''` | Single quote (in single-quoted strings) |

### `color`

Color literals use hex notation with `#`:

- `#RRGGBB` — 6 hex digits, fully opaque
- `#RRGGBBAA` — 8 hex digits, explicit alpha

```navi
let red     = #FF0000;       // fully opaque red
let semiRed = #FF000080;     // semi-transparent red
```

Named color constants: `color.RED`, `color.BLUE`, `color.GREEN`, etc. Use `color.new()` for custom transparency.

### `na`

`na` represents a missing or undefined value. It is compatible with any type but requires an explicit type annotation when used alone:

```navi
let a: float = na;  // OK
let b = na;         // ERROR: cannot infer type

if na(myValue) {
    // handle missing value
}
```

## Operators

### Arithmetic
```navi
let a = 10 + 3;   // 13
let b = 10 - 3;   // 7
let c = 10 * 3;   // 30
let d = 10 / 3;   // 3.333...
let e = 10 % 3;   // 1
```

### Comparison
```navi
close > open;     // greater than
close < open;     // less than
close >= 100;     // greater or equal
close <= 100;     // less or equal
close == open;    // equal
close != open;    // not equal
```

### Logical
```navi
a and b;    // AND
a or b;     // OR
not a;      // NOT
```

### Ternary
```navi
let col = close > open ? color.GREEN : color.RED;
```

## Next Steps

- [Variables & Qualifiers](/docs/types-and-variables) — type qualifiers, var/varip, na handling
- [History Reference](/docs/history-reference) — accessing past bar values with `[]`
- [Collections](/docs/collections) — array, map, matrix
- [Control Structures](/docs/control-structures) — if, for, while, switch
- [Functions & Methods](/docs/functions-and-methods) — defining and calling functions
