---
name: navi
description: Write, refactor, debug, and review Navi `.nv` indicator, strategy, and library scripts. Use when working with Navi syntax, script declarations (`indicator`, `strategy`, `library`), bar-by-bar series logic, `const`/`input`/`simple`/`series` qualifiers, `var`/`varip`, `na`, history references (`x[1]`), non-repainting behavior, inputs, plots/drawings, `request.security`, collections (`Array`/`Map`/`Matrix`), or standard-library APIs such as `ta`, `math`, `str`, `input`, `strategy`, `Label`, `Line`, `Box`, and `Table`.
---

Write valid Navi code for chart indicators, strategies, and reusable libraries. Keep every answer focused on Navi authoring: syntax, execution semantics, standard-library calls, and practical script patterns.

## Reference Map

Load only the reference needed for the task:

| Read this | When you need to... |
| --- | --- |
| [references/syntax.md](references/syntax.md) | Check Navi source syntax: statements, blocks, declarations, types, collections, functions, methods, structs, enums, imports, and exports. |
| [references/execution-model.md](references/execution-model.md) | Reason about bar-by-bar execution, series values, qualifiers, `var`/`varip`, rollback, `na`, history references, and repainting. |
| [references/stdlib.md](references/stdlib.md) | Choose built-ins and exact API names for `ta`, `input`, plots, drawing objects, `request`, `strategy`, colors, strings, collections, enums, and state namespaces. |
| [references/patterns.md](references/patterns.md) | Start from complete indicator/strategy/library templates or reuse idioms for warmup guards, crosses, state, arrays, MTF data, divergence, debugging, and output polish. |

## Authoring Workflow

1. Identify the script kind: `indicator()` for visual studies, `strategy()` for orders/backtests, or `library()` for exported helpers.
2. Put configuration first with `input.*()` calls. Prefer typed inputs (`input.int`, `input.float`, `input.source`, `input.string`, `input.bool`) and use stable titles.
3. Model time correctly. Treat `close`, `high`, `ta.*` outputs, conditions, and plots as per-bar `series` values. Use `x[1]` for prior bars.
4. Use `let` for per-bar calculations, `var` for state that must persist across bars, and `varip` only for intentional intrabar state.
5. Guard warmup and missing values with `na()`, `nz()`, or `fixnan()`; never assume `na` is zero.
6. Prefer current standard-library API names from `references/stdlib.md` and `api/stdlib`. In particular, use snake_case names such as `ta.cross_over`, `ta.cross_under`, `ta.value_when`, `ta.bars_since`, `ta.highest_bars`, and `ta.lowest_bars`.
7. Make outputs deterministic and readable: stable plot order, clear titles, explicit colors, and `na` or `display.NONE` when hiding output.
8. When returning code, return complete `.nv` source unless the user asked for only a fragment.

## Navi Essentials

- Every script begins with `indicator(...)`, `strategy(...)`, or `library(...)`.
- Statements end with `;`. Block declarations such as `fn`, `if`, `for`, `while`, `switch`, `struct`, and `enum` end with `}` when used standalone.
- Type annotations use `name: type`, with qualifiers before the type: `let ma: series float = close;`.
- Collections are PascalCase: `Array<T>`, `Map<K, V>`, `Matrix<T>`. Construct with `Array.new<T>()`, `Map.new<K, V>()`, and `Matrix.new<T>()`.
- Tuples use parentheses and must be immediately destructured: `let (basis, upper, lower) = ta.bb(close, 20, 2.0);`.
- Navi has no `return` keyword. A function or expression block yields its last statement.
- Use PascalCase enums: `Shape.TriangleUp`, `Location.BelowBar`, `PlotStyle.Histogram`, `Direction.Long`, `BarmergeLookahead.Off`.

## Starter Templates

Minimal indicator:

```navi
indicator("My Indicator", overlay: true);

let len = input.int(14, "Length", minval: 1);
let src = input.source(close, "Source");

let ma = ta.sma(src, len);
plot(ma, "SMA", color: color.ORANGE);
```

Minimal strategy:

```navi
strategy("MA Cross", overlay: true);

let fastLen = input.int(10, "Fast Length", minval: 1);
let slowLen = input.int(20, "Slow Length", minval: 1);

let fast = ta.ema(close, fastLen);
let slow = ta.ema(close, slowLen);

let longSignal = ta.cross_over(fast, slow);
let shortSignal = ta.cross_under(fast, slow);

if longSignal {
    strategy.entry("Long", Direction.Long);
}
if shortSignal {
    strategy.entry("Short", Direction.Short);
}

plot(fast, "Fast EMA", color: color.GREEN);
plot(slow, "Slow EMA", color: color.RED);
```

Reusable library:

```navi
//@description Shared moving-average helpers.
library("MaLib");

//@function Calculates an exponential moving average.
//@param src Source series.
//@param length EMA length.
//@returns EMA series.
export fn ema_of(src: series float, length: simple int): series float {
    ta.ema(src, length);
}
```
