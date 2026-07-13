/** localStorage-backed script CRUD. */

export interface ScriptItem {
  id: string
  name: string
  source: string
  createdAt: number
  updatedAt: number
}

const STORAGE_KEY = 'navi-scripts'

function readAll(): ScriptItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    return JSON.parse(raw) as ScriptItem[]
  } catch {
    return []
  }
}

function writeAll(items: ScriptItem[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
}

function uid(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
}

export function listScripts(): ScriptItem[] {
  return readAll().sort((a, b) => b.updatedAt - a.updatedAt)
}

export function getScript(id: string): ScriptItem | undefined {
  return readAll().find((s) => s.id === id)
}

export function createScript(name: string, source: string): ScriptItem {
  const now = Date.now()
  const item: ScriptItem = { id: uid(), name, source, createdAt: now, updatedAt: now }
  const all = readAll()
  all.push(item)
  writeAll(all)
  return item
}

export function updateScript(
  id: string,
  patch: { name?: string; source?: string },
): ScriptItem | undefined {
  const all = readAll()
  const idx = all.findIndex((s) => s.id === id)
  if (idx === -1) return undefined
  const item = all[idx]
  if (patch.name !== undefined) item.name = patch.name
  if (patch.source !== undefined) item.source = patch.source
  item.updatedAt = Date.now()
  writeAll(all)
  return item
}

export function deleteScript(id: string): boolean {
  const all = readAll()
  const filtered = all.filter((s) => s.id !== id)
  if (filtered.length === all.length) return false
  writeAll(filtered)
  return true
}
