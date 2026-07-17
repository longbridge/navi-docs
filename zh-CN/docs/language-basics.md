# 语言基础

每个 Navi 脚本都以声明语句开头：`indicator()`、`strategy()` 或 `library()`。

## 脚本结构

```navi
indicator("My Indicator");

// 你的代码
plot(close);
```

Navi 使用**花括号块** `{ }` 和**分号** `;` 来终止语句。换行符不影响语法——你可以自由地拆分或合并行。

## 注释

```navi
// 单行注释
let a: float = 10; // 行尾注释
```

Navi 没有多行注释。以 `//@` 开头的特殊注释是文档标签：`//@function`、`//@param`、`//@returns`、`//@type`、`//@enum`、`//@field`、`//@variable`、`//@description`。

## 语句

每条语句以 `;` 结尾。换行符不影响语法——多条语句可以写在同一行，一条语句也可以跨越多行：

```navi
let a = 1; let b = 2; let c = a + b;   // 同一行多条语句

let result = long_variable_name         // 跨行书写
    + another_long_variable
    - some_other_value;
```

以右花括号 `}` 结尾的语句（函数、if/for/while 等）不需要加尾部 `;`。

## 命名规范

Navi 源码应使用一致的命名方式：

- 变量、参数、函数、方法和属性使用 `snake_case`：`fast_length`、`long_signal`、`calculate_average`。
- struct、enum、newtype 及枚举值使用 `PascalCase`：`TradeState`、`Direction.Long`。
- 编译期常量使用 `SCREAMING_SNAKE_CASE`：`MAX_LOOKBACK`。
- 新建 `.nv` 文件使用 `snake_case`：`relative_strength_index.nv`。

`example/indicators/` 目录中的文件遵循这一文件名规范。

## 基本类型

### 原始类型

| 类型 | 描述 | 示例 |
|---|---|---|
| `int` | 整数 | `42`, `-123`, `+5` |
| `float` | 浮点数 | `3.14`, `.5`, `3.`, `1e-3` |
| `bool` | 布尔值 | `true`, `false` |
| `string` | 文本 | `"hello"`, `'world'` |
| `color` | RGBA 颜色 | `#FF0000`, `#FF000080` |
| `na` | 缺失/未定义值 | `na` |

### `int` 和 `float`

```navi
let a = 42;
let b = -123;
let d = 3.14;
let e = .14;        // 前导点
let f = 3.;         // 尾随点
let g = 314e-2;     // 3.14
```

### `string`

字符串可以使用单引号或双引号，语义完全相同：

```navi
let a = "Hello, World!";
let b = 'Hello, World!';
let full = "Hello, " + "World!";  // 用 + 连接字符串
```

支持的转义序列：

| 转义 | 含义 |
|---|---|
| `\\` | 反斜杠 |
| `\n` | 换行 |
| `\r` | 回车 |
| `\t` | Tab |
| `\"` 或 `""` | 双引号（在双引号字符串中） |
| `\'` 或 `''` | 单引号（在单引号字符串中） |

### `color`

颜色字面量使用 `#` 的十六进制表示法：

- `#RRGGBB` — 6 位十六进制，完全不透明
- `#RRGGBBAA` — 8 位十六进制，显式 alpha 通道

```navi
let red     = #FF0000;       // 完全不透明的红色
let semiRed = #FF000080;     // 半透明红色
```

命名颜色常量：`color.RED`、`color.BLUE`、`color.GREEN` 等。使用 `color.new()` 创建自定义透明度的颜色。

### `na`

`na` 表示缺失或未定义的值。它与任何类型兼容，但单独使用时需要显式类型注解：

```navi
let a: float = na;  // OK
let b = na;         // 错误：无法推断类型

if na(myValue) {
    // 处理缺失值
}
```

## 运算符

### 算术运算
```navi
let a = 10 + 3;   // 13
let b = 10 - 3;   // 7
let c = 10 * 3;   // 30
let d = 10 / 3;   // 3.333...
let e = 10 % 3;   // 1
```

### 比较运算
```navi
close > open     // 大于
close < open     // 小于
close >= 100     // 大于等于
close <= 100     // 小于等于
close == open    // 等于
close != open    // 不等于
```

### 逻辑运算
```navi
a and b    // 逻辑与
a or b     // 逻辑或
not a      // 逻辑非
```

### 三元运算
```navi
let col = close > open ? color.GREEN : color.RED;
```

## 下一步

- [变量与限定符](/zh-CN/docs/types-and-variables) — 类型限定符、var/varip、na 处理
- [历史引用](/zh-CN/docs/history-reference) — 用 `[]` 访问过去 K 线的值
- [集合类型](/zh-CN/docs/collections) — array、map、matrix
- [控制结构](/zh-CN/docs/control-structures) — if、for、while、switch
- [函数与方法](/zh-CN/docs/functions-and-methods) — 定义和调用函数
