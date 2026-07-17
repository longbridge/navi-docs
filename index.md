---
layout: home

hero:
  name: Navi
  text: Indicators. Strategies. Scripts.
  tagline: A scripting language for trading charts — clean syntax, strong typing, and a powerful standard library.
  actions:
    - theme: brand
      text: Get Started
      link: /docs/
    - theme: alt
      text: Playground
      link: /playground

features:
  - title: Indicators & Strategies
    details: Write bar-by-bar indicators and backtested strategies. Declare inputs, plot series, and emit orders with minimal boilerplate.
  - title: AI-native
    details: Give coding agents Navi language context with the Navi skill, then validate generated .nv scripts with the navi CLI.
  - title: Streaming & Realtime
    details: First-class support for realtime bar updates. The var/varip model and rollback mechanism keep state consistent across confirmed and forming bars.
  - title: Rich Standard Library
    details: Built-in ta, math, str, array, map, matrix modules with everything you need for technical analysis and data manipulation.
  - title: High Performance
    details: Scripts compile to optimized bytecode and run in a tight bar-by-bar loop. JIT compilation available for hot paths.
  - title: Local CLI Workflow
    details: Install the navi CLI, lint every script before use, and run indicators or strategies against local OHLCV data.
---
