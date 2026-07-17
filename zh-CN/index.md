---
layout: home

hero:
  name: Navi
  text: 指标。策略。脚本。
  tagline: 面向交易图表的脚本语言 — 简洁的语法、强类型系统，以及功能丰富的标准库。
  actions:
    - theme: brand
      text: 开始使用
      link: /zh-CN/docs/
    - theme: alt
      text: 试玩区
      link: /zh-CN/playground

features:
  - title: 指标与策略
    details: 编写逐 K 线执行的指标和回测策略。声明输入参数、绘制序列、发出订单，代码简洁直观。
  - title: AI-native
    details: 通过 Navi skill 为 AI 编码助手提供语言上下文，再使用 navi CLI 验证生成的 .nv 脚本。
  - title: 流式与实时计算
    details: 原生支持实时 K 线更新。var/varip 模型与回滚机制确保已确认 K 线和形成中 K 线的状态始终一致。
  - title: 丰富的标准库
    details: 内置 ta、math、str、array、map、matrix 等模块，常用函数开箱即用。
  - title: 高性能
    details: 脚本编译为优化字节码，在高效的逐 K 线循环中执行。关键路径支持 JIT 编译加速。
  - title: 本地 CLI 工作流
    details: 安装 navi CLI，在使用前检查每个脚本，并使用本地 OHLCV 数据运行指标或策略。
---
