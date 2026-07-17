<script setup lang="ts">
import { computed, ref, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  PopoverRoot, PopoverTrigger, PopoverPortal, PopoverContent,
} from 'radix-vue'
import { Plus, Save, CopyPlus, Pencil, Trash2, ChevronDown, Search, Check, ChartLine } from 'lucide-vue-next'
import type { ScriptItem } from '../composables/script-store'
import { isBuiltinId, getBuiltinScript, builtinIndicators, builtinStrategies } from '../composables/builtin-scripts'

const { t } = useI18n()

const props = defineProps<{
  activeScriptId: string | null
  /** The effective chart tag for the current script (may be '__unsaved__'). */
  scriptTag: string
  dirty: boolean
  scripts: ScriptItem[]
  /** Set of script IDs (tags) currently added to the chart. */
  scriptsOnChart: Set<string>
}>()

const emit = defineEmits<{
  load: [id: string]
  new: []
  save: []
  'save-as': []
  rename: []
  delete: []
  'add-to-chart': []
}>()

const isBuiltin = computed(() => isBuiltinId(props.activeScriptId))

const activeScriptName = computed(() => {
  if (!props.activeScriptId) return t('toolbar.selectScript')
  const builtin = getBuiltinScript(props.activeScriptId)
  if (builtin) return builtin.shortTitle ? `${builtin.title} (${builtin.shortTitle})` : builtin.title
  const user = props.scripts.find(s => s.id === props.activeScriptId)
  if (user) return user.name
  return t('toolbar.selectScript')
})

const scriptMenuOpen = ref(false)
const searchQuery = ref('')
const searchInputRef = ref<HTMLInputElement | null>(null)
const scrollContainerRef = ref<HTMLDivElement | null>(null)

function openMenu() {
  scriptMenuOpen.value = true
  searchQuery.value = ''
  nextTick(() => searchInputRef.value?.focus())
  setTimeout(() => {
    // Scroll to the currently-editing script (activeScriptId).
    const active = scrollContainerRef.value?.querySelector<HTMLElement>('[data-active="true"]')
    active?.scrollIntoView({ block: 'center' })
  }, 0)
}

function selectScript(id: string) {
  scriptMenuOpen.value = false
  emit('load', id)
}

const query = computed(() => searchQuery.value.trim().toLowerCase())

const filteredUserScripts = computed(() =>
  query.value
    ? props.scripts.filter(s => s.name.toLowerCase().includes(query.value))
    : props.scripts,
)

const filteredIndicators = computed(() =>
  query.value
    ? builtinIndicators.filter(s =>
        s.title.toLowerCase().includes(query.value) ||
        (s.shortTitle?.toLowerCase().includes(query.value) ?? false),
      )
    : builtinIndicators,
)

const filteredStrategies = computed(() =>
  query.value
    ? builtinStrategies.filter(s =>
        s.title.toLowerCase().includes(query.value) ||
        (s.shortTitle?.toLowerCase().includes(query.value) ?? false),
      )
    : builtinStrategies,
)
</script>

<template>
  <div class="flex items-center gap-1 border-b border-border bg-muted/50 px-2 py-1 shrink-0">
    <!-- Script selector -->
    <div class="flex items-center gap-1 flex-1 min-w-0">
      <PopoverRoot v-model:open="scriptMenuOpen">
        <PopoverTrigger
          class="flex h-7 flex-1 min-w-0 items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-xs shadow-sm ring-offset-background focus:outline-none focus:ring-1 focus:ring-ring"
          @click="openMenu"
        >
          <span class="truncate">{{ activeScriptName }}</span>
          <ChevronDown class="ml-1 h-4 w-4 shrink-0 opacity-50" />
        </PopoverTrigger>
        <PopoverPortal>
          <PopoverContent
            :side-offset="4"
            align="start"
            :avoid-collisions="true"
            class="z-50 w-[var(--radix-popover-trigger-width)] min-w-[320px] rounded-md border bg-popover text-popover-foreground shadow-md outline-none"
            @open-auto-focus.prevent
          >
            <!-- Search -->
            <div class="flex items-center border-b px-3 py-2 gap-2">
              <Search class="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
              <input
                ref="searchInputRef"
                v-model="searchQuery"
                :placeholder="t('toolbar.search')"
                class="flex-1 bg-transparent text-xs outline-none placeholder:text-muted-foreground"
              />
            </div>

            <div ref="scrollContainerRef" class="max-h-96 overflow-y-auto p-1">
              <!-- My Scripts -->
              <template v-if="filteredUserScripts.length > 0">
                <div class="px-2 py-1.5 text-xs font-semibold text-muted-foreground">{{ t('toolbar.myScripts') }}</div>
                <button
                  v-for="s in filteredUserScripts"
                  :key="s.id"
                  :data-active="s.id === activeScriptId"
                  class="w-full text-left flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                  :class="s.id === activeScriptId ? 'text-primary font-medium' : ''"
                  @click="selectScript(s.id)"
                >
                  {{ s.name }}
                  <Check v-if="scriptsOnChart.has(s.id)" class="ml-auto h-3.5 w-3.5 shrink-0" />
                  <span v-else class="ml-auto w-3.5 shrink-0" />
                </button>
                <div class="-mx-1 my-1 h-px bg-border" />
              </template>

              <!-- Built-in examples -->
              <template v-if="filteredIndicators.length > 0 || filteredStrategies.length > 0">
                <div class="px-2 py-1.5 text-xs font-semibold text-muted-foreground">{{ t('toolbar.builtinExamples') }}</div>

                <!-- Indicators -->
                <template v-if="filteredIndicators.length > 0">
                  <div class="px-2 py-1 text-xs text-muted-foreground/70">{{ t('toolbar.indicators') }}</div>
                  <button
                    v-for="s in filteredIndicators"
                    :key="s.id"
                    :data-active="s.id === activeScriptId"
                    class="w-full text-left flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                    :class="s.id === activeScriptId ? 'text-primary font-medium' : ''"
                    @click="selectScript(s.id)"
                  >
                    <span class="flex-1 min-w-0 truncate">{{ s.title }}</span>
                    <span v-if="s.shortTitle" class="shrink-0 text-xs text-muted-foreground">{{ s.shortTitle }}</span>
                    <Check v-if="scriptsOnChart.has(s.id)" class="h-3.5 w-3.5 shrink-0" />
                    <span v-else class="w-3.5 shrink-0" />
                  </button>
                </template>

                <!-- Strategies -->
                <template v-if="filteredStrategies.length > 0">
                  <div class="px-2 py-1 text-xs text-muted-foreground/70 mt-1">{{ t('toolbar.strategies') }}</div>
                  <button
                    v-for="s in filteredStrategies"
                    :key="s.id"
                    :data-active="s.id === activeScriptId"
                    class="w-full text-left flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                    :class="s.id === activeScriptId ? 'text-primary font-medium' : ''"
                    @click="selectScript(s.id)"
                  >
                    <span class="flex-1 min-w-0 truncate">{{ s.title }}</span>
                    <span v-if="s.shortTitle" class="shrink-0 text-xs text-muted-foreground">{{ s.shortTitle }}</span>
                    <Check v-if="scriptsOnChart.has(s.id)" class="h-3.5 w-3.5 shrink-0" />
                    <span v-else class="w-3.5 shrink-0" />
                  </button>
                </template>
              </template>

              <!-- No results -->
              <div
                v-if="filteredUserScripts.length === 0 && filteredIndicators.length === 0 && filteredStrategies.length === 0"
                class="px-2 py-4 text-center text-sm text-muted-foreground"
              >
                {{ t('toolbar.noResults') }}
              </div>
            </div>
          </PopoverContent>
        </PopoverPortal>
      </PopoverRoot>
      <span v-if="dirty" class="inline-block w-1.5 h-1.5 rounded-full bg-primary shrink-0" :title="t('toolbar.unsaved')" />
    </div>

    <!-- Script actions -->
    <div class="flex items-center gap-0.5">
      <!-- Add to chart: shown when current script is NOT yet on chart -->
      <button
        v-if="!scriptsOnChart.has(scriptTag)"
        class="inline-flex items-center justify-center h-7 px-2 gap-1 rounded-md text-xs font-medium text-primary hover:bg-primary/10 transition-colors"
        :title="t('toolbar.addToChart')"
        @click="emit('add-to-chart')"
      >
        <ChartLine :size="13" />
        {{ t('toolbar.addToChart') }}
      </button>
      <button
        class="inline-flex items-center justify-center h-7 w-7 rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
        :title="t('toolbar.newScript')"
        @click="emit('new')"
      >
        <Plus :size="14" />
      </button>
      <button
        class="inline-flex items-center justify-center h-7 w-7 rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors disabled:opacity-40 disabled:pointer-events-none"
        :title="t('toolbar.save')"
        :disabled="!dirty"
        @click="emit('save')"
      >
        <Save :size="14" />
      </button>
      <button
        class="inline-flex items-center justify-center h-7 w-7 rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
        :title="t('toolbar.saveAs')"
        @click="emit('save-as')"
      >
        <CopyPlus :size="14" />
      </button>
      <button
        class="inline-flex items-center justify-center h-7 w-7 rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors disabled:opacity-40 disabled:pointer-events-none"
        :title="t('toolbar.rename')"
        :disabled="!activeScriptId || isBuiltin"
        @click="emit('rename')"
      >
        <Pencil :size="14" />
      </button>
      <button
        class="inline-flex items-center justify-center h-7 w-7 rounded-md text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors disabled:opacity-40 disabled:pointer-events-none"
        :title="t('toolbar.delete')"
        :disabled="!activeScriptId || isBuiltin"
        @click="emit('delete')"
      >
        <Trash2 :size="14" />
      </button>
    </div>
  </div>
</template>
