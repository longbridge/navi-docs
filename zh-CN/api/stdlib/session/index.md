---
title: "session"
---

# session

## 属性

### is_first_bar {#is_first_bar}

**类型:** <code>series&nbsp;bool</code>

若当前 K 线是当日交易时段的第一根，则返回 `true`，否则返回 `false`。

---

### is_first_bar_regular {#is_first_bar_regular}

**类型:** <code>series&nbsp;bool</code>

若当前 K 线是当日常规交易时段的第一根，则返回 `true`，否则返回 `false`。

---

### is_last_bar {#is_last_bar}

**类型:** <code>series&nbsp;bool</code>

若当前 K 线是当日交易时段的最后一根，则返回 `true`，否则返回 `false`。

---

### is_last_bar_regular {#is_last_bar_regular}

**类型:** <code>series&nbsp;bool</code>

若当前 K 线是当日常规交易时段的最后一根，则返回 `true`，否则返回 `false`。

---

### is_market {#is_market}

**类型:** <code>series&nbsp;bool</code>

若当前 K 线处于常规交易时段（市场时间），则返回 `true`，否则返回 `false`。

---

### is_postmarket {#is_postmarket}

**类型:** <code>series&nbsp;bool</code>

若当前 K 线处于盘后交易时段，则返回 `true`，否则返回 `false`。

---

### is_premarket {#is_premarket}

**类型:** <code>series&nbsp;bool</code>

若当前 K 线处于盘前交易时段，则返回 `true`，否则返回 `false`。
