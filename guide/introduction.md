# Introduction

**Navi** is a scripting language for writing technical analysis indicators and trading strategies. It is compatible with Pine Script V6 and runs on the Longbridge platform via the `longbridge` CLI.

## What You Can Build

- **Indicators** — plot series, shapes, labels, lines, and tables on charts
- **Strategies** — define entry/exit rules and run backtests against historical data
- **Libraries** — write reusable functions and types that other scripts can import

## Execution Model

Scripts run **bar-by-bar**: the engine executes your script once for each candlestick, from the oldest bar to the newest. This is the same model as Pine Script — `close`, `open`, `high`, `low`, and all series values represent the current bar.

Use `close[1]` to look back one bar, `var` to persist state across bars, and `barstate.is_last` to run logic only on the final bar.

## Pine Script Compatibility

Navi supports Pine Script V6 syntax. If you have existing Pine Script indicators, they run on Navi with minimal changes. See [Language Basics](/guide/language-basics) and [Examples](/guide/examples) for the supported syntax and common script patterns.

## Next Steps

- [Quick Start](/guide/quick-start) — write and run your first indicator with the CLI
- [Language Basics](/guide/language-basics) — learn Navi syntax
- [Examples](/guide/examples) — study complete indicators and strategies
