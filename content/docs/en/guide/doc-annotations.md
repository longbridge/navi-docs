---
title: "Documentation Annotations"
---

# Documentation Annotations

Navi supports special comment tags that attach documentation to declarations. These annotations are used by the LSP (for hover and completions) and by the documentation generator.

Both `//@tag` and `// @tag` (with a space after `//`) formats are supported.

## Available Tags

| Tag | Placement | Description |
|-----|-----------|-------------|
| `@description` | File header (before any declarations) | Adds a top-level description for the library |
| `@function` | Above a function declaration | Adds a custom description for the function |
| `@param` | Above a function declaration | Adds a description for a parameter. Specify the parameter name, then its description |
| `@returns` | Above a function declaration | Adds a description for the return value |
| `@type` | Above a type or newtype declaration | Adds a custom description for the type |
| `@enum` | Above an enum declaration | Adds a custom description for the enum |
| `@field` | Above a type or enum declaration | Adds a description for a field or variant. Specify the field name, then its description |
| `@variable` | Above a variable declaration | Adds a custom description for the variable |
| `@example` | Above a function or type declaration | Opens a code example block (closed by `@endexample`) |
| `@endexample` | Closes an `@example` block | — |

All tags support **multi-line continuation**: lines starting with `//` (without a `@` tag) immediately after a tag line are appended to that tag's text.

## Documenting Functions

Use `@function`, `@param`, and `@returns` to document function declarations:

```navi
//@function Outputs a label with `labelText` on the bar's high.
//@param labelText (series String) The text to display on the label.
//@returns The drawn label ID.
export fn drawLabel(labelText: String) {
    label.new(bar_index, high, text:  labelText);
}
```

`@param` and `@returns` can appear either before or after the `@function` tag:

```navi
//@param series Series of values to process.
//@param length Number of bars (length).
//@function Arnaud Legoux Moving Average.
//
// It uses Gaussian distribution as weights for moving average.
export fn alma(series: series float, length: simple int): series float {
    _
}
// ...
```

### Multi-line Descriptions

Continuation lines (starting with `//` but without `@`) extend the previous tag's description:

```navi
//@function Calculates the percentage difference
// from the base price to the target price.
//@param basePrice The start price
// used as the reference point.
//@param price The end price.
//@returns The signed deviation percentage.
export fn calcDeviation(basePrice: float, price: float) {
    100 * (price - basePrice) / basePrice;
}
```

## Documenting Types

Use `@type` and `@field` to document type declarations:

```navi
//@type A point on a chart.
//@field index The index of the bar where the point is located, i.e., its `x`
//             coordinate.
//@field price The price where the point is located, i.e., its `y` coordinate.
struct Point {
    index: int,
    price: float,
}
```

The `@type` tag also works for newtype declarations:

```navi
//@type Handle for a label drawing object.
export type label = int;
```

## Documenting Enums

Use `@enum` and `@field` to document enum declarations and their variants:

```navi
//@enum Represents a trading direction.
//@field Long  A long (buy) direction.
//@field Short A short (sell) direction.
//@field Both  Both directions.
export enum Direction {
    Long,
    Short,
    Both,
}
```

## Documenting Variables

Use `@variable` to document variable declarations:

```navi
//@variable The highest price over the last 20 bars.
let highest20: float = ta.highest(high, 20);

//@variable Tracks cumulative volume since the session started.
var cumVol: float = 0.0;
```

## Code Examples

Use `@example` / `@endexample` pairs to attach runnable code examples to a function or type. Each line inside the block is a plain `//` comment; the `// ` prefix (with the space) is stripped automatically. Multiple blocks are allowed — each becomes a separate example.

```navi
//@function Calculates the percentage difference between two prices.
//@param base  The reference price.
//@param price The target price.
//@returns The signed deviation as a percentage.
//@example
// // Compare today's close to yesterday's close
// let deviation = calcDeviation(close[1], close);
// plot(deviation, title: "Deviation %");
//@endexample
export fn calcDeviation(base: float, price: float) {
    100 * (price - base) / base;
}
```

Multiple examples are each wrapped in their own block:

```navi
//@function Returns the simple moving average of `src` over `length` bars.
//@example
// // Basic 20-bar SMA
// plot(ta.sma(close, 20));
//@endexample
//@example
// // Crossover signal using two SMAs
// let fast = ta.sma(close, 9);
// let slow = ta.sma(close, 21);
// plot_shape(ta.crossover(fast, slow), style: Shape.LabelUp);
//@endexample
export fn sma(src: series float, length: simple int): series float {
    _
}
```

Examples are shown in the **LSP hover** tooltip in VS Code.

## Cross-Reference Links

Inside any description text, you can write `` [`name`] `` to create a cross-reference link to another symbol. In the API reference dialog and the generated documentation pages, these render as clickable links that navigate to the target symbol.

```navi
//@type Handle for a plot created by [`func:plot`].
export type plot = int;
//@function Fills the area between two [`func:plot`] handles.
//@param hline1 The first horizontal line handle (from [`func:hline`]).
//@returns An hline handle that can be used with [`fill`].
```

**Syntax:**

| Syntax | Resolves to |
|--------|-------------|
| `` [`fill`] `` | Current module's `fill`, or prelude's `fill`, or global search |
| `` [`BarmergeGaps.Off`] `` | `BarmergeGaps.Off` (enum variant) |
| `` [`LineStyle.Solid`] `` | The `Solid` variant of the `LineStyle` enum (links to the enum type) |
| `` [`variant:LineStyle.Solid`] `` | Explicitly an enum variant (same target, clearer intent) |
| `` [`func:plot`] `` | The `plot` **function** (excludes the `plot` type) |
| `` [`type:hline`] `` | The `hline` **type** (excludes the `hline` function) |
| `` [`enum:LineStyle`] `` | An enum named `LineStyle` |

Qualifier prefixes (`func`, `type`, `enum`) disambiguate names that exist as both a function and a type in the same module.

For dotted references, the resolver first checks if the left side is a **module** with the right side as a member. If not found, it checks if the left side is an **enum type** with the right side as a variant name — in which case the link navigates to the enum type. This means both `` [`BarmergeGaps.Off`] `` （enum variant) and `` [`LineStyle.Solid`] `` (enum variant) work as expected.

## Editor Support

When documentation annotations are present, the Navi LSP uses them to provide:

- **Hover information** — shows the description, parameters, return value, and field docs when hovering over a symbol
- **Completion details** — shows the summary in autocomplete suggestions
- **Document symbols** — includes the summary in the outline view

## Library Documentation

For exported libraries, documentation annotations are especially important. The documentation generator (`navi-docgen`) extracts these annotations to produce API reference pages.

Use `@description` in the file header to add a top-level description for the library itself. It must appear before any declarations:

```navi
//@description Provides utilities for calculating volatility bands.
//
// Includes customizable Bollinger Bands and Keltner Channels.
library("MyLib")
```

Full example:

```navi
library("MyLib");

//@type Configuration for a custom indicator.
//@field length     The lookback period.
//@field multiplier The standard deviation multiplier.
export struct Config {
    length: int = 14,
    multiplier: float = 2.0,
}

//@function Calculates a custom band around a moving average.
//@param src    The source series.
//@param config The indicator configuration.
//@returns The upper band value.
export fn upperBand(src: series float, config: Config) {
    let basis = ta.sma(src, config.length);
    basis + config.multiplier * ta.stdev(src, config.length)
}
```
