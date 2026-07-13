/** Vue composable wrapping script-store with reactive state. */

import { ref, type Ref } from 'vue'
import {
  type ScriptItem,
  listScripts,
  createScript as storeCreate,
  updateScript as storeUpdate,
  deleteScript as storeDelete,
} from './script-store'

export interface UseScripts {
  scripts: Ref<ScriptItem[]>
  refresh: () => void
  createScript: (name: string, source: string) => ScriptItem
  updateScript: (id: string, patch: { name?: string; source?: string }) => ScriptItem | undefined
  deleteScript: (id: string) => boolean
}

export function useScripts(): UseScripts {
  const scripts = ref<ScriptItem[]>(listScripts())

  function refresh() {
    scripts.value = listScripts()
  }

  function create(name: string, source: string): ScriptItem {
    const item = storeCreate(name, source)
    refresh()
    return item
  }

  function update(id: string, patch: { name?: string; source?: string }): ScriptItem | undefined {
    const item = storeUpdate(id, patch)
    refresh()
    return item
  }

  function remove(id: string): boolean {
    const ok = storeDelete(id)
    refresh()
    return ok
  }

  return {
    scripts,
    refresh,
    createScript: create,
    updateScript: update,
    deleteScript: remove,
  }
}
