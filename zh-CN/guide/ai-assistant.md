# AI 助手

[Claude Code](https://claude.ai/code) 的 **navi-authoring** skill 为你的 AI 助手注入了 Navi 语言的深度知识——语法、执行模型、标准库和常用模式——使其无需每次会话重新学习，即可编写正确、地道的 Navi 脚本。

## 包含内容

Skill 包含四个按需加载的参考文件：

| 文件 | 用途 |
|---|---|
| `syntax.md` | 语言语法——声明、控制流、函数、struct/enum/newtype、导入 |
| `execution-model.md` | 逐 bar 执行、类型限定符（`const`/`input`/`simple`/`series`）、`var`/`varip`、`na`、历史引用、避免重绘 |
| `stdlib.md` | 内置函数——prelude、`ta`/`math`/`str`/`array`/`map`/`matrix`、绘图、`strategy` |
| `patterns.md` | 经典模式——indicator/strategy/library 框架、预热守卫、有状态累加器、交叉逻辑、常见陷阱 |

## 安装

1. 下载 skill 压缩包：

   [下载 navi-authoring-skill.zip](/navi-authoring-skill.zip)

2. 解压到项目的 `.claude/skills/` 目录：

   ```
   your-project/
   └── .claude/
       └── skills/
           └── navi-authoring/
               ├── SKILL.md
               └── references/
   ```

3. 完成。在编写或审阅 Navi 脚本时，Claude Code 会自动加载该 skill。

## 使用

安装后，Claude Code 在处理 `.nv` 文件或你询问 Navi 相关问题时会自动使用该 skill。也可以显式调用：

```
/navi-authoring 写一个带上下轨输入参数的 VWAP 指标
```
