# 简介

**Navi** 是一种用于编写技术分析指标和交易策略的脚本语言，兼容 PineScript v6 语法，通过 Longbridge 平台的 `longbridge` CLI 运行。

## 你可以构建什么

- **指标** — 在图表上绘制序列、形状、标签、线条和表格
- **策略** — 定义进出场规则，对历史数据进行回测
- **库** — 编写可复用的函数和类型，供其他脚本导入

## 语言设计

Navi 是静态类型的编译型语言。类型错误在脚本运行前就会被发现。编译器在生成字节码之前会执行多轮优化——常量折叠、死代码消除和代数简化，运行时只需处理已经优化过的指令序列。对于要求更高吞吐量的场景，可选的 JIT 编译器（基于 Cranelift）会在运行时将字节码编译为本机机器码。

Navi 采用**流式计算模型**：行情数据逐根 K 线流入，引擎对每根 K 线进行增量计算——从最早的历史 K 线到最新 K 线，并在实时行情到来时持续处理。同一份脚本在历史数据和实时数据上的行为完全一致，代码无需区分两种场景。所有行情数据——`close`、`open`、`high`、`low`、`volume`——都是 *series*（序列），自动维护完整的历史记录。通过 `close[1]` 访问上一根 K 线的值，或 `close[N]` 访问 N 根 K 线前的值。流式设计使内存占用保持在低水位，指标逻辑也得以保持简洁：只需编写当前 K 线的计算，历史管理由引擎自动完成。

## PineScript v6 语法兼容性 <Badge type="warning" text="experimental" />

`navi` CLI 兼容 PineScript v6 语法。将源码保存为 `.pine` 文件并传入 `--pine`，即可直接编译或运行。具体命令请参阅[快速开始](/zh-CN/docs/quick-start#运行-pinescript-文件)，Navi 语法请参阅[语言基础](/zh-CN/docs/language-basics)。

## 下一步

- [安装](/zh-CN/docs/install) — 选择 Longbridge App、桌面端、Longbridge CLI 或本地开发 CLI
- [快速开始](/zh-CN/docs/quick-start) — 编写并验证第一个指标
- [语言基础](/zh-CN/docs/language-basics) — 学习 Navi 语法
- [示例](/zh-CN/docs/examples) — 阅读完整指标和策略
