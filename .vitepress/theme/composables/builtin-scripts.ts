/** Built-in example scripts bundled with the app (read-only). */

// Vite glob import: eagerly load all .nv files as raw text
const indicatorModules = import.meta.glob('/example/indicators/*.nv', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

const strategyModules = import.meta.glob('/example/strategies/*.nv', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

const chartTestModules = import.meta.glob('/example/chart_tests/**/*.nv', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

export interface BuiltinScript {
  id: string
  name: string
  title: string
  shortTitle: string | null
  source: string
  category: 'indicator' | 'strategy' | 'chart-test'
  /** Sub-directory group path, e.g. "seriesgraph/plot". Only set for chart-test category. */
  group?: string
}

function nameFromPath(path: string): string {
  const file = path.split('/').pop() ?? path
  return file.replace(/\.nv$/, '')
}

/**
 * Extract the group from a chart_tests path, e.g.:
 *   /example/chart_tests/seriesgraph/plot/style_line.nv → "seriesgraph/plot"
 */
function groupFromChartTestPath(path: string): string {
  // Strip prefix up to and including "chart_tests/"
  const match = path.match(/chart_tests\/(.+)\/[^/]+\.nv$/)
  return match ? match[1] : ''
}

/**
 * Parse title and short_title from the first indicator/strategy/library call
 * in a Navi source.
 *
 * Handles both named-argument style:
 *   indicator(title: "My Title", short_title: "MT", ...)
 * and positional-argument style:
 *   indicator("My Title", "MT", ...)
 * as well as mixed/multi-line forms.
 */
function parseTitleAndShortTitle(source: string): { title: string | null; shortTitle: string | null } {
  // Find the first indicator/strategy/library call and extract its argument list.
  // The call may span multiple lines.
  const callMatch = source.match(/(?:^|\n)\s*(?:indicator|strategy|library)\s*\(([^)]*)\)/s)
  if (!callMatch) return { title: null, shortTitle: null }

  const args = callMatch[1]

  // Try Navi named arguments: title: "...", short_title: "..."
  const namedTitle = args.match(/\btitle\s*:\s*"((?:[^"\\]|\\.)*)"/s)
  const namedShortTitle = args.match(/\bshort_title\s*:\s*"((?:[^"\\]|\\.)*)"/s)

  let title: string | null = namedTitle ? namedTitle[1] : null
  let shortTitle: string | null = namedShortTitle ? namedShortTitle[1] : null

  // If no named title, try first positional string argument (not preceded by an identifier=)
  if (title === null) {
    // Split args by comma, try to find first bare string literal
    const firstPosMatch = args.match(/^\s*"((?:[^"\\]|\\.)*)"/s)
    if (firstPosMatch) {
      title = firstPosMatch[1]
      // If no named short_title, try the second positional string argument.
      if (shortTitle === null) {
        const afterFirst = args.slice(args.indexOf('"') + firstPosMatch[1].length + 2)
        const secondPosMatch = afterFirst.match(/^\s*,\s*"((?:[^"\\]|\\.)*)"/s)
        if (secondPosMatch) shortTitle = secondPosMatch[1]
      }
    }
  }

  return { title, shortTitle }
}

function buildScripts(
  modules: Record<string, string>,
  category: 'indicator' | 'strategy',
): BuiltinScript[] {
  return Object.entries(modules)
    .map(([path, source]) => {
      const name = nameFromPath(path)
      const { title, shortTitle } = parseTitleAndShortTitle(source)
      return {
        id: `builtin:${category}:${name}`,
        name,
        title: title ?? name,
        shortTitle: shortTitle !== title ? shortTitle : null,
        source,
        category,
      }
    })
    .sort((a, b) => a.title.localeCompare(b.title))
}

function buildChartTestScripts(modules: Record<string, string>): BuiltinScript[] {
  return Object.entries(modules)
    .map(([path, source]) => {
      const name = nameFromPath(path)
      const group = groupFromChartTestPath(path)
      const { title, shortTitle } = parseTitleAndShortTitle(source)
      // Use "group/name" as unique id to avoid collisions across sub-directories
      const uniqueName = group ? `${group}/${name}` : name
      return {
        id: `builtin:chart-test:${uniqueName}`,
        name: uniqueName,
        title: title ?? uniqueName,
        shortTitle: shortTitle !== title ? shortTitle : null,
        source,
        category: 'chart-test' as const,
        group,
      }
    })
    .sort((a, b) => {
      const gCmp = (a.group ?? '').localeCompare(b.group ?? '')
      return gCmp !== 0 ? gCmp : a.title.localeCompare(b.title)
    })
}

const chartTestsEnabled = typeof window !== 'undefined' &&
  new URLSearchParams(window.location.search).has('chart_tests')

export const builtinIndicators: BuiltinScript[] = buildScripts(indicatorModules, 'indicator')
export const builtinStrategies: BuiltinScript[] = buildScripts(strategyModules, 'strategy')
export const builtinChartTests: BuiltinScript[] = chartTestsEnabled
  ? buildChartTestScripts(chartTestModules)
  : []
export const builtinScripts: BuiltinScript[] = [...builtinIndicators, ...builtinStrategies, ...builtinChartTests]

export function isBuiltinId(id: string | null): boolean {
  return id != null && id.startsWith('builtin:')
}

export function getBuiltinScript(id: string): BuiltinScript | undefined {
  return builtinScripts.find((s) => s.id === id)
}
