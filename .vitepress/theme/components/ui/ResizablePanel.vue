<script setup lang="ts">
import { ref } from 'vue'
import { SplitterPanel, type SplitterPanelProps } from 'radix-vue'

const props = defineProps<SplitterPanelProps>()

const panelRef = ref<InstanceType<typeof SplitterPanel> | null>(null)

defineExpose({
  collapse: () => panelRef.value?.collapse(),
  expand: () => panelRef.value?.expand(),
  getSize: () => panelRef.value?.getSize(),
  resize: (size: number) => panelRef.value?.resize(size),
  get isCollapsed() { return panelRef.value?.isCollapsed },
  get isExpanded() { return panelRef.value?.isExpanded },
})
</script>

<template>
  <SplitterPanel ref="panelRef" v-bind="props">
    <slot />
  </SplitterPanel>
</template>
