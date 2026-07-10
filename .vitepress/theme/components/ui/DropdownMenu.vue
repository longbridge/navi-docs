<script setup lang="ts">
import { DropdownMenuRoot, type DropdownMenuRootProps } from 'radix-vue'

const props = defineProps<DropdownMenuRootProps>()
const emit = defineEmits<{ 'update:open': [value: boolean] }>()
</script>

<template>
  <DropdownMenuRoot v-bind="props" @update:open="emit('update:open', $event)">
    <slot />
  </DropdownMenuRoot>
</template>
