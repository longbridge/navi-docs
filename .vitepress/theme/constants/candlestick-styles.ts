/** Candlestick style definitions: key, display name, group, and SVG icon. */

export type CandlestickStyleKey =
  | 'candlestick'
  | 'hollowCandle'
  | 'volumeCandle'
  | 'heikinAshi'
  | 'bars'
  | 'highLow'
  | 'columns'
  | 'line'
  | 'lineWithMarkers'
  | 'stepLine'
  | 'area'
  | 'hlcArea'
  | 'baseline'

export type CandlestickStyleGroup = 'Candles' | 'Bars' | 'Lines' | 'Areas'

export interface CandlestickStyleDef {
  key: CandlestickStyleKey
  label: string
  group: CandlestickStyleGroup
  /** Inline SVG <path> elements (no wrapping <svg>). viewBox="0 0 16 16". */
  icon: string
}

export const CANDLESTICK_STYLES: CandlestickStyleDef[] = [
  // ── Candles ─────────────────────────────────────────────────────────────
  {
    key: 'candlestick',
    label: 'Candles',
    group: 'Candles',
    icon: `
      <line x1="4" y1="1" x2="4" y2="3" stroke="currentColor" stroke-width="1"/>
      <rect x="2" y="3" width="4" height="6" fill="currentColor"/>
      <line x1="4" y1="9" x2="4" y2="12" stroke="currentColor" stroke-width="1"/>
      <line x1="11" y1="3" x2="11" y2="5" stroke="currentColor" stroke-width="1"/>
      <rect x="9" y="5" width="4" height="5" fill="none" stroke="currentColor" stroke-width="1"/>
      <line x1="11" y1="10" x2="11" y2="13" stroke="currentColor" stroke-width="1"/>
    `,
  },
  {
    key: 'hollowCandle',
    label: 'Hollow candles',
    group: 'Candles',
    icon: `
      <line x1="4" y1="1" x2="4" y2="3" stroke="currentColor" stroke-width="1"/>
      <rect x="2" y="3" width="4" height="6" fill="none" stroke="currentColor" stroke-width="1"/>
      <line x1="4" y1="9" x2="4" y2="12" stroke="currentColor" stroke-width="1"/>
      <line x1="11" y1="3" x2="11" y2="5" stroke="currentColor" stroke-width="1"/>
      <rect x="9" y="5" width="4" height="5" fill="currentColor"/>
      <line x1="11" y1="10" x2="11" y2="13" stroke="currentColor" stroke-width="1"/>
    `,
  },
  {
    key: 'volumeCandle',
    label: 'Volume candles',
    group: 'Candles',
    icon: `
      <line x1="3" y1="1" x2="3" y2="3" stroke="currentColor" stroke-width="1"/>
      <rect x="1" y="3" width="4" height="6" fill="currentColor"/>
      <line x1="3" y1="9" x2="3" y2="12" stroke="currentColor" stroke-width="1"/>
      <line x1="12" y1="4" x2="12" y2="6" stroke="currentColor" stroke-width="1"/>
      <rect x="10" y="6" width="4" height="4" fill="currentColor"/>
      <line x1="12" y1="10" x2="12" y2="13" stroke="currentColor" stroke-width="1"/>
    `,
  },
  {
    key: 'heikinAshi',
    label: 'Heikin Ashi',
    group: 'Candles',
    icon: `
      <line x1="4" y1="2" x2="4" y2="4" stroke="currentColor" stroke-width="1"/>
      <rect x="2" y="4" width="4" height="5" fill="currentColor" rx="0.5"/>
      <line x1="4" y1="9" x2="4" y2="11" stroke="currentColor" stroke-width="1"/>
      <line x1="11" y1="4" x2="11" y2="6" stroke="currentColor" stroke-width="1"/>
      <rect x="9" y="6" width="4" height="4" fill="none" stroke="currentColor" stroke-width="1" rx="0.5"/>
      <line x1="11" y1="10" x2="11" y2="12" stroke="currentColor" stroke-width="1"/>
    `,
  },
  // ── Bars ─────────────────────────────────────────────────────────────────
  {
    key: 'bars',
    label: 'Bars',
    group: 'Bars',
    icon: `
      <line x1="4" y1="2" x2="4" y2="11" stroke="currentColor" stroke-width="1.5"/>
      <line x1="4" y1="5" x2="2" y2="5" stroke="currentColor" stroke-width="1.5"/>
      <line x1="4" y1="8" x2="6" y2="8" stroke="currentColor" stroke-width="1.5"/>
      <line x1="11" y1="4" x2="11" y2="13" stroke="currentColor" stroke-width="1.5"/>
      <line x1="11" y1="7" x2="9" y2="7" stroke="currentColor" stroke-width="1.5"/>
      <line x1="11" y1="10" x2="13" y2="10" stroke="currentColor" stroke-width="1.5"/>
    `,
  },
  {
    key: 'highLow',
    label: 'High-low',
    group: 'Bars',
    icon: `
      <line x1="4" y1="2" x2="4" y2="13" stroke="currentColor" stroke-width="1.5"/>
      <line x1="11" y1="4" x2="11" y2="14" stroke="currentColor" stroke-width="1.5"/>
    `,
  },
  {
    key: 'columns',
    label: 'Columns',
    group: 'Bars',
    icon: `
      <rect x="1" y="5" width="4" height="10" fill="currentColor" rx="0.5"/>
      <rect x="6" y="8" width="4" height="7" fill="currentColor" rx="0.5"/>
      <rect x="11" y="3" width="4" height="12" fill="currentColor" rx="0.5"/>
    `,
  },
  // ── Lines ────────────────────────────────────────────────────────────────
  {
    key: 'line',
    label: 'Line',
    group: 'Lines',
    icon: `
      <polyline points="1,12 5,8 9,10 13,4 15,6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"/>
    `,
  },
  {
    key: 'lineWithMarkers',
    label: 'Line with markers',
    group: 'Lines',
    icon: `
      <polyline points="1,12 5,8 9,10 13,4 15,6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"/>
      <circle cx="5" cy="8" r="1.5" fill="currentColor"/>
      <circle cx="9" cy="10" r="1.5" fill="currentColor"/>
      <circle cx="13" cy="4" r="1.5" fill="currentColor"/>
    `,
  },
  {
    key: 'stepLine',
    label: 'Step line',
    group: 'Lines',
    icon: `
      <polyline points="1,12 5,12 5,8 9,8 9,10 13,10 13,4 15,4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"/>
    `,
  },
  // ── Areas ────────────────────────────────────────────────────────────────
  {
    key: 'area',
    label: 'Area',
    group: 'Areas',
    icon: `
      <polyline points="1,12 5,8 9,10 13,4 15,6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"/>
      <polygon points="1,12 5,8 9,10 13,4 15,6 15,15 1,15" fill="currentColor" opacity="0.3"/>
    `,
  },
  {
    key: 'hlcArea',
    label: 'HLC area',
    group: 'Areas',
    icon: `
      <polyline points="1,5 5,3 9,6 13,2 15,4" fill="none" stroke="currentColor" stroke-width="1" stroke-linejoin="round"/>
      <polyline points="1,10 5,8 9,11 13,7 15,9" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
      <polyline points="1,13 5,11 9,14 13,10 15,12" fill="none" stroke="currentColor" stroke-width="1" stroke-linejoin="round"/>
      <polygon points="1,5 5,3 9,6 13,2 15,4 15,12 13,10 9,14 5,11 1,13" fill="currentColor" opacity="0.2"/>
    `,
  },
  {
    key: 'baseline',
    label: 'Baseline',
    group: 'Areas',
    icon: `
      <line x1="1" y1="8" x2="15" y2="8" stroke="currentColor" stroke-width="1" stroke-dasharray="2,2"/>
      <polyline points="1,12 5,9 9,6 13,10 15,7" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"/>
      <polygon points="1,8 5,8 5,9 1,12" fill="currentColor" opacity="0.3"/>
      <polygon points="5,8 9,8 9,6 5,9" fill="currentColor" opacity="0.15"/>
      <polygon points="9,8 13,8 13,10 9,8" fill="currentColor" opacity="0.3"/>
      <polygon points="13,8 15,8 15,7 13,8" fill="currentColor" opacity="0.15"/>
    `,
  },
]

export const CANDLESTICK_STYLE_GROUPS: CandlestickStyleGroup[] = [
  'Candles',
  'Bars',
  'Lines',
  'Areas',
]

export const CANDLESTICK_STYLE_MAP = Object.fromEntries(
  CANDLESTICK_STYLES.map((s) => [s.key, s]),
) as Record<CandlestickStyleKey, CandlestickStyleDef>
