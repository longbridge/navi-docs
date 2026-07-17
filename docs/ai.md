# AI Assistant

The **navi** skill gives your AI coding agent focused knowledge of the Navi language — syntax, execution model, standard library, and common patterns — so it can write correct, idiomatic `.nv` indicator and strategy scripts without needing to learn from scratch each session.

## What's included

The skill contains four reference files loaded on demand:

| File | Purpose |
|---|---|
| `syntax.md` | Surface syntax — declarations, control flow, functions, struct/enum/newtype, imports |
| `execution-model.md` | Bar-by-bar execution, type qualifiers (`const`/`input`/`simple`/`series`), `var`/`varip`, `na`, history references, avoiding repainting |
| `stdlib.md` | Built-in functions — prelude, `ta`/`math`/`str`, `Array`/`Map`/`Matrix`, drawing, `strategy` |
| `patterns.md` | Proven idioms — indicator/strategy/library skeletons, warmup guards, stateful accumulators, cross logic, pitfalls |

## Installation

Install from the `longbridge/navi` repository with the Skills CLI:

```bash
npx skills add longbridge/navi
```

To inspect the repository's available skills before installing:

```bash
npx skills add longbridge/navi --list
```

If your installer asks which skill to add, choose `navi`. You can also install it explicitly:

```bash
npx skills add longbridge/navi --skill navi
```

Alternatively, [download the packaged skill](/navi-skill.zip) and extract it into your agent's skills directory.

## Usage

Once installed, compatible AI coding agents can use the skill automatically when working with `.nv` files or when you ask about Navi.

```text
Write a complete Navi VWAP indicator with configurable upper and lower bands.
Save it as vwap_bands.nv and validate it with the navi CLI.
```

For better results, include:

- The script kind: indicator, strategy, or library
- Inputs and expected plots, signals, or orders
- Symbol or timeframe assumptions
- Repainting and warmup requirements
- The target `.nv` filename

## Recommended Workflow

1. Ask the agent for a complete `.nv` file, not an isolated fragment.
2. Use `snake_case` for filenames, variables, parameters, and functions.
3. Require the agent to validate the file with the standalone `navi` CLI:

   ```bash
   navi lint path/to/script.nv
   ```

4. If formatting fails, run `navi fmt`, then lint again.
5. When runtime behavior matters and OHLCV CSV data is available, execute the script:

   ```bash
   navi run path/to/script.nv \
     --data bars.csv \
     --symbol NASDAQ:AAPL \
     --timeframe 1D
   ```

6. Use the validated script with the Longbridge CLI, App, or desktop client. The standalone `navi` CLI is primarily a development and debugging tool.

Do not accept a claim that a script was validated unless the agent ran the CLI successfully. A code block alone is not validation.

## Example Requests

```text
Review momentum_strategy.nv for repainting and series-state errors.
Fix the file, preserve its behavior, and run navi lint when finished.
```

```text
Create a Navi library that exports EMA and crossover helpers.
Use Navi naming conventions, save it as moving_average_helpers.nv,
and return the exact navi lint result.
```

## Update

Update the installed skill when Navi documentation or APIs change:

```bash
npx skills update navi
```

The skill treats [navi-lang.org](/docs/) and its standard-library reference as the source of truth for current APIs.
