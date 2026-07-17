# Navi Standard Library Reference

This file explains **how to find and use** Navi's standard library. It intentionally does not enumerate every function, method, or enum variant — those evolve and live in the authoritative docs.

## Source of Truth

Look up exact names, argument order, parameter qualifiers, and enum variants on navi-lang.org before using them:

- Everything in one file (language guide + full stdlib API): <https://navi-lang.org/llms-full.txt>
- Page index — fetch this first, then copy an exact topic URL: <https://navi-lang.org/llms.txt>
- A module page from that index, for example: <https://navi-lang.org/api/stdlib/ta/index.md>

Fetch the relevant page whenever you need a concrete function name, its argument order, or whether a length parameter must be `simple` or may be `series`.

## URL Routing

Do not infer URLs from a heading, symbol, or type name. `llms.txt` is the route manifest.

| Looking for | Exact page shape | Example |
| --- | --- | --- |
| Guide topic | `/docs/<topic>.md` | `/docs/examples.md` |
| Namespace/module | `/api/stdlib/<module>/index.md` | `/api/stdlib/request/index.md` |
| Prelude type or enum | `/api/stdlib/prelude/<Type>.md` | `/api/stdlib/prelude/Table.md` |
| Free prelude function | `/api/stdlib/prelude/index.md` | find `### bg_color` in the page |

There is no `/ai/examples/index.md`, `/api/stdlib/Table/index.md`, `/api/stdlib/PlotDisplay/index.md`, or `/api/stdlib/bgcolor/index.md`. After any 404, return to `llms.txt`; do not try another guessed variation.

## Naming Rules

Stable conventions — rely on them, but still confirm the exact spelling:

- Built-in functions and methods are snake_case: `ta.cross_over`, `ta.value_when`, `String.index_of`.
- Types and drawing objects are PascalCase: `Array<T>`, `Map<K, V>`, `Matrix<T>`, `Label`, `Line`, `Box`, `Table`, `Plot`, `HLine`.
- Enum types and their variants are PascalCase: `Direction.Long`, `PlotStyle.Histogram`, `Shape.TriangleUp`, `BarmergeLookahead.Off`.
- Color constants and functions use the PascalCase `Color` type: `Color.BLUE`, `Color.ORANGE`, `Color.new(...)`.
- Construct objects and collections with `Type.new(...)`: `Array.new<float>()`, `Label.new(...)`.
- Use named arguments (`name: value`) for declarations, inputs, plots, and drawings.

## Capability Map

Use this to decide *which* area to look up, then fetch that page for its current members. These areas live under `navi-lang.org/api/stdlib/`; the exact page list is in `llms.txt`.

- **Prelude** (no prefix): prices/volume (`close`, `high`, `hl2`, …), bar/time values, script declarations (`indicator`/`strategy`/`library`), output (`plot`, `plot_shape`, `plot_candle`, `hline`, `fill`, `bar_color`, `bg_color`, `alert`, `alert_condition`), missing-value helpers (`na`, `nz`, `fixnan`), and casts.
- **Technical analysis** (`ta`): moving averages, oscillators, bands/channels, statistics, extremes, crosses, pivots.
- **Inputs** (`input`): typed `input.*` constructors and their named arguments.
- **Strategy** (`strategy`, plus separate risk and trade-query areas): orders, position/account state, risk controls, trade lookups. Strategy scripts only.
- **Requests / multi-timeframe** (`request`): `request.security`, `request.security_lower_tf`, and other data feeds.
- **Math** (`math`): numeric constants and functions.
- **Strings**: static helpers and methods on the `String` type, such as `String.from(value)` and `text.index_of(needle)`.
- **Collections** (prelude): `Array<T>`, `Map<K, V>`, `Matrix<T>` — construction and methods.
- **Drawing objects** (prelude): `Label`, `Line`, `Box`, `Table`, `Polyline`, `LineFill` — create with `Type.new`, mutate with methods.
- **Enums** (prelude): `Direction`, `PlotStyle`, `Shape`, `Location`, `LabelStyle`, `LineStyle`, `HLineStyle`, `Size`, `Position`, `Extend`, `BarmergeGaps`, `BarmergeLookahead`, `AlertFreq`, and more — fetch the enum's page for its exact variants.
- **State namespaces**: `bar_state`, `timeframe`, `symbol_info`, `session`, `log`, `runtime`; display flags use the `PlotDisplay` enum.

Do not assume a member exists from this map alone — confirm names on the page.

`request.financial` accepts a provider-defined `financial_id` string. The API reference documents the call signature, not a universal list of metric IDs. Do not invent an ID, and do not reuse an identifier from a separate screener/filter API without provider documentation confirming that mapping. For example, screener keys such as `pettm` and `marketcap` are not evidence that the same strings are valid `request.financial` IDs.

## Call Shapes

These show the *form* of common calls; verify exact names and arguments against the docs.

Inputs and TA:

```navi
let len = input.int(14, "Length", minval: 1);
let src = input.source(close, "Source");
let ma = ta.sma(src, len);
let (basis, upper, lower) = ta.bb(close, 20, 2.0);
let up = ta.cross_over(fast, slow);
```

Multi-return `ta.*` results are tuples and must be destructured immediately (see [syntax.md](syntax.md)). Some `ta.*` length parameters require `simple int`; others accept `series int` — check the signature on navi-lang.org.

Plotting and drawing:

```navi
plot(ma, "MA", color: Color.ORANGE, line_width: 2);
plot_shape(up, title: "Up", style: Shape.TriangleUp, location: Location.BelowBar, color: Color.GREEN);
let lbl = Label.new(bar_index, high, "hi", style: LabelStyle.Down);
```

Strategy (strategy scripts only):

```navi
if ta.cross_over(fast, slow) {
    strategy.entry("Long", Direction.Long);
}
```

## When Writing Code

- Unsure a function exists or how it is spelled? Fetch `llms.txt`, then follow its exact module or prelude link.
- Need every variant of an enum? Follow the exact prelude type link from `llms.txt`; do not append `/index.md`.
- Copy argument order and qualifiers from the docs, not from the simplified shapes above.
