/** Built-in example scripts bundled with the app (read-only). */

// Vite glob import: eagerly load all .nv files as raw text
const indicatorModules = import.meta.glob('/naviscripts/indicators/*.nv', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

const strategyModules = import.meta.glob('/naviscripts/strategies/*.nv', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

export interface BuiltinScript {
  id: string
  name: string
  title: string
  shorttitle: string | null
  source: string
  category: 'indicator' | 'strategy'
}

function nameFromPath(path: string): string {
  const file = path.split('/').pop() ?? path
  return file.replace(/\.nv$/, '')
}

/**
 * Parse title and shorttitle from the first indicator/strategy/library call
 * in a Navi source.
 *
 * Handles both named-argument style:
 *   indicator(title = "My Title", shorttitle = "MT", ...)
 * and positional-argument style:
 *   indicator("My Title", "MT", ...)
 * as well as mixed/multi-line forms.
 */
function parseTitleAndShorttitle(source: string): { title: string | null; shorttitle: string | null } {
  // Find the first indicator/strategy/library call and extract its argument list.
  // The call may span multiple lines.
  const callMatch = source.match(/(?:^|\n)\s*(?:indicator|strategy|library)\s*\(([^)]*)\)/s)
  if (!callMatch) return { title: null, shorttitle: null }

  const args = callMatch[1]

  // Try named argument: title = "..."
  const namedTitle = args.match(/\btitle\s*=\s*"((?:[^"\\]|\\.)*)"/s)
  // Try named argument: shorttitle = "..."
  const namedShorttitle = args.match(/\bshorttitle\s*=\s*"((?:[^"\\]|\\.)*)"/s)

  let title: string | null = namedTitle ? namedTitle[1] : null
  let shorttitle: string | null = namedShorttitle ? namedShorttitle[1] : null

  // If no named title, try first positional string argument (not preceded by an identifier=)
  if (title === null) {
    // Split args by comma, try to find first bare string literal
    const firstPosMatch = args.match(/^\s*"((?:[^"\\]|\\.)*)"/s)
    if (firstPosMatch) {
      title = firstPosMatch[1]
      // If no named shorttitle, try second positional string argument
      if (shorttitle === null) {
        const afterFirst = args.slice(args.indexOf('"') + firstPosMatch[1].length + 2)
        const secondPosMatch = afterFirst.match(/^\s*,\s*"((?:[^"\\]|\\.)*)"/s)
        if (secondPosMatch) shorttitle = secondPosMatch[1]
      }
    }
  }

  return { title, shorttitle }
}

function buildScripts(
  modules: Record<string, string>,
  category: 'indicator' | 'strategy',
): BuiltinScript[] {
  return Object.entries(modules)
    .map(([path, source]) => {
      const name = nameFromPath(path)
      const { title, shorttitle } = parseTitleAndShorttitle(source)
      return {
        id: `builtin:${category}:${name}`,
        name,
        title: title ?? name,
        shorttitle: shorttitle !== title ? shorttitle : null,
        source,
        category,
      }
    })
    .sort((a, b) => a.title.localeCompare(b.title))
}

export const builtinIndicators: BuiltinScript[] = buildScripts(indicatorModules, 'indicator')
export const builtinStrategies: BuiltinScript[] = buildScripts(strategyModules, 'strategy')
export const builtinScripts: BuiltinScript[] = [...builtinIndicators, ...builtinStrategies]

export function isBuiltinId(id: string | null): boolean {
  return id != null && id.startsWith('builtin:')
}

export function getBuiltinScript(id: string): BuiltinScript | undefined {
  return builtinScripts.find((s) => s.id === id)
}
