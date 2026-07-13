---
title: "AI 助手"
---

# AI 助手

**navi** skill 为 AI 编码助手提供 Navi 语言的专用知识——语法、执行模型、标准库和常用模式——使其无需每次会话重新学习，即可编写正确、地道的 `.nv` 指标和策略脚本。

## 包含内容

Skill 包含四个按需加载的参考文件：

| 文件 | 用途 |
|---|---|
| `syntax.md` | 语言语法——声明、控制流、函数、struct/enum/newtype、导入 |
| `execution-model.md` | 逐 bar 执行、类型限定符（`const`/`input`/`simple`/`series`）、`var`/`varip`、`na`、历史引用、避免重绘 |
| `stdlib.md` | 内置函数——prelude、`ta`/`math`/`str`、`Array`/`Map`/`Matrix`、绘图、`strategy` |
| `patterns.md` | 经典模式——indicator/strategy/library 框架、预热守卫、有状态累加器、交叉逻辑、常见陷阱 |

## 安装

使用 Skills CLI 从 `longbridge/navi` 仓库安装：

```bash
npx skills add longbridge/navi
```

如需先查看仓库中可安装的 skill：

```bash
npx skills add longbridge/navi --list
```

如果安装器要求选择 skill，请选择 `navi`。也可以显式安装：

```bash
npx skills add longbridge/navi --skill navi
```

## 使用

安装后，兼容的 AI 编码助手在处理 `.nv` 文件或你询问 Navi 相关问题时即可使用该 skill。

```
用 Navi 写一个带上下轨输入参数的 VWAP 指标。
```
