---
layout: home

hero:
  name: Navi Skill
  text: Write idiomatic scripts with AI.
  tagline: Install the Navi skill so AI coding agents can use the current Navi syntax, execution model, standard library, and script patterns directly.
  actions:
    - theme: brand
      text: Install Skill
      link: /guide/ai-assistant
    - theme: alt
      text: Read Navi Docs
      link: /guide/

features:
  - title: One command install
    details: Add the skill from longbridge/navi with npx skills add longbridge/navi --skill navi.
  - title: Navi-first guidance
    details: The skill focuses on .nv indicators, strategies, libraries, execution semantics, and APIs without Rust implementation details.
  - title: Ready-to-use references
    details: Syntax, execution model, standard library, and writing patterns are split into focused reference files for AI agents.
---

## Install

Add the `navi` skill to your AI coding agent with the [Skills CLI](https://github.com/vercel-labs/skills):

```bash
npx skills add longbridge/navi
```

## Update

Pull the latest version of the skill whenever the docs change:

```bash
npx skills update navi
```

See the [AI Assistant guide](/guide/ai-assistant) for agent-specific options and usage.
