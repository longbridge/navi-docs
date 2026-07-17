<script setup lang="ts">
import { TabsTrigger, type TabsTriggerProps } from 'radix-vue'
import { cn } from '../../lib/utils'

const props = defineProps<TabsTriggerProps & { class?: string }>()
</script>

<template>
  <TabsTrigger
    v-bind="{ ...props, class: undefined }"
    :class="cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1 text-sm font-medium ring-offset-background transition-colors hover:bg-foreground/10 hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary/10 data-[state=active]:text-primary',
      props.class,
    )"
  >
    <slot />
  </TabsTrigger>
</template>
