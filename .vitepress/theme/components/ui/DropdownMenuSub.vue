<script setup lang="ts">
import { DropdownMenuSub, type DropdownMenuSubProps } from 'radix-vue'

const props = defineProps<DropdownMenuSubProps>()
const emit = defineEmits<{ 'update:open': [value: boolean] }>()
</script>

<template>
  <DropdownMenuSub v-bind="props" @update:open="emit('update:open', $event)">
    <slot />
  </DropdownMenuSub>
</template>
