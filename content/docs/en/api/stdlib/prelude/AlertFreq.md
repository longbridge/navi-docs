---
title: "AlertFreq"
---

# AlertFreq

Alert frequency constant for <a class="stdlib-ref" data-key="prelude::alert" href="/api/stdlib/prelude/#alert">alert</a>.

**Kind:** enum

**Variants**

| Name | Description |
| --- | --- |
| `All` | Trigger on every call. |
| `OncePerBar` | Trigger at most once per bar (first call wins). |
| `OncePerBarClose` | Trigger once when the bar closes (realtime confirmed). |
