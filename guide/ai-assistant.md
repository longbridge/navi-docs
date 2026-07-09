# AI Assistant

The **navi-authoring** skill for [Claude Code](https://claude.ai/code) gives your AI assistant deep knowledge of the Navi language — syntax, execution model, standard library, and common patterns — so it can write correct, idiomatic Navi scripts without needing to learn from scratch each session.

## What's included

The skill contains four reference files loaded on demand:

| File | Purpose |
|---|---|
| `syntax.md` | Surface syntax — declarations, control flow, functions, struct/enum/newtype, imports |
| `execution-model.md` | Bar-by-bar execution, type qualifiers (`const`/`input`/`simple`/`series`), `var`/`varip`, `na`, history references, avoiding repainting |
| `stdlib.md` | Built-in functions — prelude, `ta`/`math`/`str`/`array`/`map`/`matrix`, drawing, `strategy` |
| `patterns.md` | Proven idioms — indicator/strategy/library skeletons, warmup guards, stateful accumulators, cross logic, pitfalls |

## Installation

1. Download the skill archive:

   [Download navi-authoring-skill.zip](/navi-authoring-skill.zip)

2. Extract it into your project's `.claude/skills/` directory:

   ```
   your-project/
   └── .claude/
       └── skills/
           └── navi-authoring/
               ├── SKILL.md
               └── references/
   ```

3. That's it. Claude Code will automatically load the skill when you ask it to write or review Navi scripts.

## Usage

Once installed, Claude Code uses the skill automatically when working with `.nv` files or when you ask about Navi. You can also invoke it explicitly:

```
/navi-authoring Write a VWAP indicator with upper/lower band inputs
```
