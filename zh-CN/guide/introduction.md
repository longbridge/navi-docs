# 简介

**Navi** 是一种用于编写技术分析指标和交易策略的脚本语言，兼容 Pine Script V6，通过 Longbridge 平台的 `lb` CLI 运行。

## 你可以构建什么

- **指标** — 在图表上绘制序列、形状、标签、线条和表格
- **策略** — 定义进出场规则，对历史数据进行回测
- **库** — 编写可复用的函数和类型，供其他脚本导入

## 执行模型

脚本**逐 K 线**执行：引擎对每根 K 线执行一次脚本，从最早的历史 K 线到最新的 K 线。这与 Pine Script 的执行模型相同——`close`、`open`、`high`、`low` 等所有序列值均代表当前 K 线。

使用 `close[1]` 回溯上一根 K 线的值，用 `var` 跨 K 线保持状态，用 `barstate.is_last` 在最后一根 K 线执行逻辑。

## Pine Script 兼容性

Navi 支持 Pine Script V6 语法。如果你有现成的 Pine Script 指标，只需少量修改即可在 Navi 上运行。详见[从 Pine Script 迁移](/zh-CN/guide/pine-migration)。

## 下一步

- [快速开始](/zh-CN/guide/quick-start) — 使用 CLI 编写并运行第一个指标
- [语言基础](/zh-CN/guide/language-basics) — 学习 Navi 语法
- [从 Pine Script 迁移](/zh-CN/guide/pine-migration) — 转换现有脚本
