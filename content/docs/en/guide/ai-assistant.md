---
title: "AI Assistant"
---

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

## Usage

Once installed, compatible AI coding agents can use the skill automatically when working with `.nv` files or when you ask about Navi.

```
Write a VWAP indicator with upper/lower band inputs in Navi.
```
