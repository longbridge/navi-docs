# Install and Use Navi

Navi can be used in several environments. Choose the one that matches your workflow:

| Environment | Best for |
| --- | --- |
| Longbridge App or desktop client | Using indicators and strategies directly on trading charts |
| Longbridge CLI | Running scripts with Longbridge market data, automation, screening, and backtests |
| `navi` CLI | Local authoring, formatting, type checking, debugging, and CI |

For regular use, prefer the Longbridge App, desktop client, or Longbridge CLI. The standalone `navi` CLI is primarily a developer tool and does not replace the Longbridge product experience.

## Longbridge App and Desktop

Use Navi inside the Longbridge App or desktop client when working interactively with charts. The Navi runtime is integrated into the product, so there is no separate Navi CLI to install.

[Download Longbridge](https://longbridge.com/download)

## Longbridge CLI

Use the Longbridge CLI for command-line workflows backed by Longbridge services and market data.

Install it by following the [Longbridge CLI installation guide](https://open.longbridge.com/docs/cli/install), then authenticate:

```bash
longbridge auth login
```

Continue to [Quick Start](/docs/quick-start) to write a script and run it with Longbridge market data. See the [`longbridge quant run` documentation](https://open.longbridge.com/docs/cli/quant) for all command options.

## Navi CLI for Development

Install the standalone `navi` CLI when developing or debugging `.nv` files locally, or when validating scripts in CI.

macOS or Linux:

```bash
curl -fsSL https://navi-lang.org/install.sh | sh
```

Windows PowerShell:

```powershell
irm https://navi-lang.org/install.ps1 | iex
```

Verify the installation:

```bash
navi --version
```

The standalone CLI contains no market data; it provides basic compile, lint, format, and run capabilities so developers and AI agents can verify script correctness. `navi run` therefore requires a caller-provided OHLCV CSV through `--data`. The Quick Start shows how to build synthetic validation data and where to obtain real candles when needed.

## Next Steps

- [Quick Start](/docs/quick-start) — write and validate your first Navi script
- [Language Basics](/docs/language-basics) — learn Navi syntax and naming conventions
- [AI Assistant](/docs/ai) — install the Navi authoring skill
