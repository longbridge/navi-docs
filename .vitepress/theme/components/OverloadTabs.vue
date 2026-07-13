<script setup lang="ts">
defineProps<{
  labels: string[];
  modelValue: number;
}>();

defineEmits<{
  "update:modelValue": [value: number];
}>();
</script>

<template>
  <div class="overload-selector">
    <button
      v-for="(label, i) in labels"
      :key="i"
      :class="['overload-item', { active: modelValue === i }]"
      @click="$emit('update:modelValue', i)"
    >
      <span class="overload-label" v-html="label" />
    </button>
  </div>
</template>

<style scoped>
.overload-selector {
  display: flex;
  flex-direction: column;
  gap: 2px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 6px;
  background: var(--vp-c-bg-soft);
  margin: 16px 0;
}

.overload-item {
  display: block;
  width: 100%;
  text-align: left;
  padding: 6px 10px;
  border: 1px solid transparent;
  border-radius: 6px;
  background: transparent;
  cursor: pointer;
  color: var(--vp-c-text-2);
  transition: all 0.15s ease;
}

.overload-item:hover {
  background: var(--vp-c-bg-mute);
  color: var(--vp-c-text-1);
}

.overload-item.active {
  background: var(--vp-c-bg);
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-text-1);
}

.overload-label {
  display: block;
  font-family: var(--vp-font-family-mono);
  font-size: 13px;
  line-height: 1.5;
  word-break: break-all;
}
</style>

<!-- Non-scoped: v-html content has no scoped data attributes,
     so dark-mode Shiki color switching must be unscoped. -->
<style>
.dark .overload-label span[style] {
  color: var(--shiki-dark, inherit) !important;
}
</style>
