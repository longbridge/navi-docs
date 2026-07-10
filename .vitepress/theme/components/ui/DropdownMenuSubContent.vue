<script setup lang="ts">
import {
  DropdownMenuPortal,
  DropdownMenuSubContent,
  type DropdownMenuSubContentProps,
} from 'radix-vue'
import { cn } from '../../lib/utils'

const props = defineProps<DropdownMenuSubContentProps & { class?: string }>()
</script>

<template>
  <DropdownMenuPortal>
    <DropdownMenuSubContent
      v-bind="{ ...props, class: undefined }"
      :class="cn(
        'z-50 max-h-80 min-w-[8rem] overflow-y-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        props.class,
      )"
    >
      <slot />
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</template>
