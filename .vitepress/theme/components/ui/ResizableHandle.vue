<script setup lang="ts">
import { SplitterResizeHandle, type SplitterResizeHandleProps } from 'radix-vue'
import { cn } from '../../lib/utils'

const props = defineProps<SplitterResizeHandleProps & { class?: string }>()
</script>

<template>
  <SplitterResizeHandle
    v-bind="{ ...props, class: undefined }"
    :class="cn(
       'relative flex w-px items-center justify-center bg-border data-[orientation=vertical]:h-px data-[orientation=vertical]:w-full [&[data-orientation=vertical]>div]:rotate-90',
      props.class,
    )"
  >
    <slot />
  </SplitterResizeHandle>
</template>
