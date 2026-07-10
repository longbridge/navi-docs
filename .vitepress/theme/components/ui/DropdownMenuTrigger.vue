<script setup lang="ts">
import { DropdownMenuTrigger, type DropdownMenuTriggerProps } from 'radix-vue'
import { cn } from '../../lib/utils'

const props = defineProps<DropdownMenuTriggerProps & { class?: string }>()
</script>

<template>
  <DropdownMenuTrigger
    v-bind="{ ...props, class: undefined }"
    :class="cn(
      'flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
      props.class,
    )"
  >
    <slot />
  </DropdownMenuTrigger>
</template>
