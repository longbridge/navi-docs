---
layout: page
title: Playground
footer: false
pageClass: playground-layout
---

<script setup>
import { onMounted, shallowRef } from 'vue'

const Playground = shallowRef(null)

onMounted(async () => {
  const mod = await import('./.vitepress/theme/components/Playground.vue')
  Playground.value = mod.default
})
</script>

<component :is="Playground" v-if="Playground" />
<div v-else style="display:flex;align-items:center;justify-content:center;height:80vh;color:var(--vp-c-text-2)">
  Loading playground...
</div>
