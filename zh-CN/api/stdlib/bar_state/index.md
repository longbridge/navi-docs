---
title: "bar_state"
---

# bar_state

## 属性

### is_confirmed {#is_confirmed}

**类型:** <code>series&nbsp;bool</code>

如果脚本正在计算当前 bar 的最后（结束）更新，则返回 `true`。下一个脚本计算将基于新的 bar 数据。

---

### is_first {#is_first}

**类型:** <code>series&nbsp;bool</code>

如果当前 bar 是 barset 中的第一个 bar，则返回 `true`。

---

### is_history {#is_history}

**类型:** <code>series&nbsp;bool</code>

如果当前 bar 是历史 bar，则返回 `true`。

---

### is_last {#is_last}

**类型:** <code>series&nbsp;bool</code>

如果当前 bar 是 barset 中的最后一个 bar，则返回 `true`，否则返回 `false`。对于 barset 中的所有实时 bars，此条件是 `true`。

---

### is_last_confirmed_history {#is_last_confirmed_history}

**类型:** <code>series&nbsp;bool</code>

如果脚本在市场休市时在数据集的最后一个 bar 上执行，则返回 `true`；或者如果脚本在实时 bar 之前的 bar 上执行（如果市场开市），则返回 `true`。

---

### is_new {#is_new}

**类型:** <code>series&nbsp;bool</code>

如果脚本当前正在计算新的 bar，则返回 `true`。当计算历史 bars 或首次更新新生成的实时 bar 时，此变量为 `true`。

---

### is_realtime {#is_realtime}

**类型:** <code>series&nbsp;bool</code>

如果脚本正在实时 bar 上计算，则返回 `true`。
