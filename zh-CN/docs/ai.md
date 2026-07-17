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

也可以[下载打包后的 skill](/navi-skill.zip)，并将它解压到 AI 编码助手的 skills 目录。

同时安装独立的 `navi` CLI，让 AI 编码助手可以编译并运行它编写的脚本。

macOS 或 Linux：

```bash
curl -fsSL https://navi-lang.org/install.sh | sh
```

Windows PowerShell：

```powershell
irm https://navi-lang.org/install.ps1 | iex
```

确认 CLI 可用：

```bash
navi --version
```

Navi 文档或 API 更新后，可更新已安装的 skill：

```bash
npx skills update navi
```

CLI 不包含行情数据。下方验证流程会通过 `--data` 使用调用方提供的模拟或真实 OHLCV 数据。

## 使用

安装后，兼容的 AI 编码助手在处理 `.nv` 文件或你询问 Navi 相关问题时即可使用该 skill。

```text
用 Navi 编写一个完整的 VWAP 指标，支持配置上下轨。
保存为 vwap_bands.nv，并使用 navi CLI 完成验证。
```

为了获得更准确的结果，建议说明：

- 脚本类型：指标、策略或库
- 输入参数，以及预期的绘图、信号或订单
- 标的和周期假设
- 是否允许重绘，以及预热要求
- 目标 `.nv` 文件名

## 推荐工作流

1. 要求 AI 返回完整的 `.nv` 文件，而不是孤立代码片段。
2. 文件名、变量、参数和函数统一使用 `snake_case`。
3. 要求 AI 使用独立的 `navi` CLI 验证文件：

   ```bash
   navi lint path/to/script.nv
   ```

4. 如果只存在格式问题，先运行 `navi fmt`，然后重新 lint。
5. 需要验证运行行为时，先构造一份较小的模拟 OHLCV CSV，数据量应覆盖脚本最长回看周期，然后实际执行脚本：

   ```bash
   navi run path/to/script.nv \
     --data bars.csv \
     --symbol NASDAQ:AAPL \
     --timeframe 1D
   ```

6. 将验证后的脚本用于 Longbridge CLI、App 或桌面端。独立的 `navi` CLI 主要用于开发和调试。

只有 AI 成功运行 CLI 才能称为“已验证”；仅返回代码块不代表完成验证。

### 运行数据

独立的 `navi` CLI 仅提供基础编译和本地运行能力，不包含也不会下载行情数据，因此 `navi run` 必须通过 `--data` 接收调用方提供的数据。AI 验证默认应使用模拟数据：时间戳按 Unix 毫秒递增，OHLC 价格关系合理，并根据脚本需要覆盖预热、上涨、下跌、横盘和触发信号等场景。

需要真实数据时，按可用环境优先选择：

- 已安装并登录的 Longbridge CLI：运行 `longbridge kline history SYMBOL --start YYYY-MM-DD --end YYYY-MM-DD --format json`，再将返回的 K 线转换为 `navi run` 所需的 CSV；也可以使用 `longbridge quant run` 直接基于 Longbridge 历史数据运行脚本。
- AI 环境中的 Longbridge MCP：通过其行情工具请求历史 K 线，再将返回的 OHLCV 转换为 CSV。
- 两者均不可用时，可使用可靠的公开数据源，但要核对授权、复权方式、时区、数据顺序及缺失 K 线处理方式。

真实数据是对模拟场景的补充，不能代替专门构造、用于触发关键分支的数据。

## 提问示例

```text
检查 momentum_strategy.nv 是否存在重绘或 series 状态错误。
修复文件并保持原有行为，完成后运行 navi lint。
```

```text
创建一个 Navi 库，导出 EMA 和交叉判断辅助函数。
遵循 Navi 命名规范，保存为 moving_average_helpers.nv，
并返回实际的 navi lint 结果。
```

Skill 将 [navi-lang.org](/zh-CN/docs/) 及其标准库文档作为当前 API 的权威来源。
