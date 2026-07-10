---
title: "AlertFreq"
---

# AlertFreq

alert() 的觸發頻率常量。

**種類:** enum

**成員**

| 名稱 | 說明 |
| --- | --- |
| `All` | 每次呼叫都觸發。 |
| `OncePerBar` | 每根 K 線最多觸發一次（先呼叫者獲勝）。 |
| `OncePerBarClose` | K 線收盤時觸發一次（即時確認後）。 |
