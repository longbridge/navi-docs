export interface StoredScript { id: string; name: string; source: string; createdAt: number; updatedAt: number }
const KEY = 'navi-scripts';

export function listScripts(): StoredScript[] {
  try { return (JSON.parse(localStorage.getItem(KEY) ?? '[]') as StoredScript[]).sort((a, b) => b.updatedAt - a.updatedAt); }
  catch { return []; }
}

export function createScript(name: string, source: string): StoredScript {
  const now = Date.now();
  const script = { id: now.toString(36) + Math.random().toString(36).slice(2, 8), name, source, createdAt: now, updatedAt: now };
  write([...listScripts(), script]);
  return script;
}

export function updateScript(id: string, source: string): StoredScript | undefined {
  const scripts = listScripts(); const script = scripts.find((item) => item.id === id); if (!script) return;
  script.source = source; script.updatedAt = Date.now(); write(scripts); return script;
}

export function deleteScript(id: string) { write(listScripts().filter((item) => item.id !== id)); }
function write(scripts: StoredScript[]) { localStorage.setItem(KEY, JSON.stringify(scripts)); }
