# AI 助手

[Claude Code](https://claude.ai/code) 的 **navi-authoring** skill 為你的 AI 助手注入了 Navi 語言的深度知識——語法、執行模型、標準庫和常用模式——使其無需每次會話重新學習，即可編寫正確、地道的 Navi 腳本。

## 包含內容

Skill 包含四個按需載入的參考文件：

| 文件 | 用途 |
|---|---|
| `syntax.md` | 語言語法——聲明、控制流、函數、struct/enum/newtype、導入 |
| `execution-model.md` | 逐 bar 執行、類型限定符（`const`/`input`/`simple`/`series`）、`var`/`varip`、`na`、歷史引用、避免重繪 |
| `stdlib.md` | 內置函數——prelude、`ta`/`math`/`str`/`array`/`map`/`matrix`、繪圖、`strategy` |
| `patterns.md` | 經典模式——indicator/strategy/library 框架、預熱守衛、有狀態累加器、交叉邏輯、常見陷阱 |

## 安裝

1. 下載 skill 壓縮包：

   [下載 navi-authoring-skill.zip](/navi-authoring-skill.zip)

2. 解壓到項目的 `.claude/skills/` 目錄：

   ```
   your-project/
   └── .claude/
       └── skills/
           └── navi-authoring/
               ├── SKILL.md
               └── references/
   ```

3. 完成。在編寫或審閱 Navi 腳本時，Claude Code 會自動載入該 skill。

## 使用

安裝後，Claude Code 在處理 `.nv` 文件或你詢問 Navi 相關問題時會自動使用該 skill。也可以顯式調用：

```
/navi-authoring 寫一個帶上下軌輸入參數的 VWAP 指標
```
