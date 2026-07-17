# 安装与使用 Navi

Navi 可以在多种环境中使用，请根据实际工作流选择：

| 使用环境 | 适用场景 |
| --- | --- |
| Longbridge App 或桌面端 | 直接在交易图表中使用指标和策略 |
| Longbridge CLI | 使用 Longbridge 行情数据运行脚本、自动化、选股和回测 |
| `navi` CLI | 本地编写、格式化、类型检查、调试和 CI 验证 |

日常和正式使用时，建议选择 Longbridge App、桌面端或 Longbridge CLI。独立的 `navi` CLI 主要是开发工具，不能替代 Longbridge 产品中的完整使用体验。

## Longbridge App 和桌面端

需要在图表中交互式使用 Navi 时，请使用 Longbridge App 或桌面端。Navi 运行时已经集成在产品中，无需另行安装 Navi CLI。

[下载 Longbridge](https://longbridge.com/download)

## Longbridge CLI

需要通过命令行使用 Longbridge 服务和行情数据时，请安装 Longbridge CLI。

按照 [Longbridge CLI 安装指南](https://open.longbridge.com/docs/cli/install)完成安装，然后登录：

```bash
longbridge auth login
```

接下来可前往[快速开始](/zh-CN/docs/quick-start)，编写脚本并使用 Longbridge 行情数据运行。完整命令选项请参阅 [`longbridge quant run` 文档](https://open.longbridge.com/docs/cli/quant)。

## 用于开发的 Navi CLI

在本地开发或调试 `.nv` 文件，或者在 CI 中验证脚本时，可以安装独立的 `navi` CLI。

macOS 或 Linux：

```bash
curl -fsSL https://navi-lang.org/install.sh | sh
```

Windows PowerShell：

```powershell
irm https://navi-lang.org/install.ps1 | iex
```

确认安装：

```bash
navi --version
```

快速开始会继续介绍如何验证脚本，以及如何使用本地 OHLCV CSV 运行脚本。

## 下一步

- [快速开始](/zh-CN/docs/quick-start) — 编写并验证第一个 Navi 脚本
- [语言基础](/zh-CN/docs/language-basics) — 学习 Navi 语法和命名规范
- [AI 助手](/zh-CN/docs/ai) — 安装 Navi 编写 skill
