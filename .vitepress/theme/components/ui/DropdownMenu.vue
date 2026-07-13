<script setup lang="ts">
import {
  DropdownMenuRoot,
  type DropdownMenuRootEmits,
  type DropdownMenuRootProps,
  useForwardPropsEmits,
} from 'radix-vue'

const props = defineProps<DropdownMenuRootProps>()
const emits = defineEmits<DropdownMenuRootEmits>()

// Forward only props the parent actually passed. Using `v-bind="props"` here
// would leak Vue's Boolean-prop cast (`open` becomes `false` when unset),
// which makes radix-vue treat the menu as controlled and it never opens.
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DropdownMenuRoot v-bind="forwarded">
    <slot />
  </DropdownMenuRoot>
</template>
