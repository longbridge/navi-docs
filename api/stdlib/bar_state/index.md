---
title: "bar_state"
---

# bar_state

## Properties

### is_confirmed {#is_confirmed}

**Type:** <code>series&nbsp;bool</code>

Returns `true` if the script is calculating the last (closing) update of the current bar.

The next script calculation will be on the new bar data.

---

### is_first {#is_first}

**Type:** <code>series&nbsp;bool</code>

Returns `true` if current bar is first bar in barset.

---

### is_history {#is_history}

**Type:** <code>series&nbsp;bool</code>

Returns `true` if current bar is a historical bar.

---

### is_last {#is_last}

**Type:** <code>series&nbsp;bool</code>

Returns `true` if current bar is the last bar in barset, `false` otherwise.

This condition is `true` for all real-time bars in barset.

---

### is_last_confirmed_history {#is_last_confirmed_history}

**Type:** <code>series&nbsp;bool</code>

Returns `true` if script is executing on the dataset's last bar when market is closed, or script is executing on the bar immediately preceding the real-time bar, if market is open.

---

### is_new {#is_new}

**Type:** <code>series&nbsp;bool</code>

Returns `true` if script is currently calculating on new bar.

This variable is `true` when calculating on historical bars or on first update of a newly generated real-time bar.

---

### is_realtime {#is_realtime}

**Type:** <code>series&nbsp;bool</code>

Returns `true` if the script is calculating on a real-time bar.
