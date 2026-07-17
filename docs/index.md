# Introduction

**Navi** is a scripting language for writing technical analysis indicators and trading strategies. It is compatible with PineScript v6 syntax and runs on the Longbridge platform via the `longbridge` CLI.

## What You Can Build

- **Indicators** — plot series, shapes, labels, lines, and tables on charts
- **Strategies** — define entry/exit rules and run backtests against historical data
- **Libraries** — write reusable functions and types that other scripts can import

## Language Design

Navi is a statically typed, compiled language. Type errors are caught before the script ever runs. The compiler performs multiple optimization passes — constant folding, dead code elimination, and algebraic simplification — before generating bytecode, so the runtime only processes already-optimized instructions. For workloads that demand even higher throughput, an optional JIT compiler (powered by Cranelift) translates bytecode to native machine code at runtime.

Navi uses a **streaming computation model**: market data flows in bar by bar, and the engine processes each candlestick incrementally — from the oldest historical bar to the most recent, and continuously as new real-time bars arrive. The same script runs identically over history and live data, with no distinction in code. All market data — `close`, `open`, `high`, `low`, `volume` — is a *series* that automatically tracks its full history. Reference any past value with `close[1]` (one bar back) or `close[N]` (N bars back). This streaming design keeps memory usage low and indicator logic concise: write the calculation for the current bar, and history takes care of itself.

## PineScript v6 Syntax Compatibility <Badge type="warning" text="experimental" />

The `navi` CLI is compatible with PineScript v6 syntax. Save the source as a `.pine` file and pass `--pine` to compile or run it directly. See [Quick Start](/docs/quick-start#running-pinescript-files) for the command and [Language Basics](/docs/language-basics) for Navi syntax.

## Next Steps

- [Install](/docs/install) — choose Longbridge App, desktop, Longbridge CLI, or the local development CLI
- [Quick Start](/docs/quick-start) — write and validate your first indicator
- [Language Basics](/docs/language-basics) — learn Navi syntax
- [Examples](/docs/examples) — study complete indicators and strategies
