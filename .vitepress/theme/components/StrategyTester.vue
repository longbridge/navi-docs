<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import { useVirtualizer } from '@tanstack/vue-virtual'
import type { StrategyReport, PerformanceMetrics } from '../types/strategy-report'

const { t } = useI18n()

const props = defineProps<{
  report: StrategyReport
}>()

const emit = defineEmits<{
  (e: 'scrollToBar', barIndex: number): void
}>()

type Tab = 'overview' | 'performance' | 'trades' | 'monthly' | 'maemfe'
const activeTab = ref<Tab>('overview')

function fmtCurrency(v: number): string {
  const abs = Math.abs(v)
  const str = abs >= 1000
    ? abs.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    : abs.toFixed(2)
  return v < 0 ? `-${str}` : str
}

function fmtPct(v: number): string {
  return `${v < 0 ? '-' : ''}${Math.abs(v).toFixed(2)}%`
}

function fmtOpt(v: number | null, fmt: (n: number) => string): string {
  return v != null ? fmt(v) : '\u2014'
}

function fmtInt(v: number): string {
  return String(Math.round(v))
}

function fmtRatio(v: number): string {
  return v.toFixed(3)
}

function plClass(v: number): string {
  if (v > 0.005) return 'profit'
  if (v < -0.005) return 'loss'
  return ''
}

function fmtDate(ms: number): string {
  const d = new Date(ms)
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function arrayMinMax(data: number[]): [number, number] {
  let min = data[0]
  let max = data[0]
  for (let i = 1; i < data.length; i++) {
    if (data[i] < min) min = data[i]
    if (data[i] > max) max = data[i]
  }
  return [min, max]
}

const overviewMetrics = computed(() => {
  const p = props.report.performanceAll
  const d = (k: string) => t(`strategy.desc.${k}`)
  return [
    { label: t('strategy.netProfit'), value: fmtCurrency(p.netProfit), sub: fmtPct(p.netProfitPercent), pl: plClass(p.netProfit), desc: d('netProfit') },
    { label: t('strategy.totalTrades'), value: fmtInt(p.totalClosedTrades), sub: null, pl: '', desc: d('totalClosed') },
    { label: t('strategy.percentProfitable'), value: fmtOpt(p.percentProfitable, fmtPct), sub: null, pl: '', desc: d('percentProfitable') },
    { label: t('strategy.profitFactor'), value: fmtOpt(p.profitFactor, fmtRatio), sub: null, pl: '', desc: d('profitFactor') },
    { label: t('strategy.maxDrawdown'), value: fmtCurrency(p.maxDrawdown), sub: fmtPct(p.maxDrawdownPercent), pl: 'loss', desc: d('maxDrawdown') },
    { label: t('strategy.sharpeRatio'), value: fmtOpt(p.sharpeRatio, fmtRatio), sub: null, pl: '', desc: d('sharpeRatio') },
  ]
})

const overviewCanvas = ref<HTMLCanvasElement | null>(null)
let ovW = 0
let ovH = 0
let ovMx = -1
let ovMy = -1

watch(overviewCanvas, (canvas, _old, onCleanup) => {
  if (!canvas) return
  const parent = canvas.parentElement!
  const ro = new ResizeObserver(() => { ovResize(); ovRender() })
  ro.observe(parent)
  ovResize()
  ovRender()
  onCleanup(() => ro.disconnect())
})

watch(() => props.report, () => nextTick(ovRender))

function ovResize() {
  const canvas = overviewCanvas.value
  if (!canvas) return
  const parent = canvas.parentElement!
  const dpr = window.devicePixelRatio || 1
  ovW = parent.clientWidth
  ovH = parent.clientHeight
  canvas.width = Math.round(ovW * dpr)
  canvas.height = Math.round(ovH * dpr)
  const ctx = canvas.getContext('2d')!
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
}

function ovOnMove(e: MouseEvent) {
  const rect = overviewCanvas.value?.getBoundingClientRect()
  if (!rect) return
  ovMx = e.clientX - rect.left
  ovMy = e.clientY - rect.top
  ovRender()
}

function ovOnLeave() {
  ovMx = -1
  ovMy = -1
  ovRender()
}

function ovRender() {
  const canvas = overviewCanvas.value
  if (!canvas || ovW === 0 || ovH === 0) return
  const ctx = canvas.getContext('2d')!
  const w = ovW
  const h = ovH

  ctx.clearRect(0, 0, w, h)

  const eqData = props.report.equityCurve
  const ddData = props.report.drawdownCurve
  const bhData = props.report.buyHoldCurve ?? []
  if (eqData.length < 2) return

  const len = eqData.length
  const initCap = props.report.config.initialCapital

  // Theme colors from CSS custom properties
  const cs = getComputedStyle(canvas)
  const mv = cs.getPropertyValue('--muted-foreground').trim()
  const mutedColor = mv ? `hsl(${mv})` : '#6c7086'
  const bv = cs.getPropertyValue('--border').trim()
  const borderColor = bv ? `hsl(${bv})` : 'rgba(128,128,128,0.2)'

  const GREEN = '#22c55e'
  const GREEN_AREA = 'rgba(34,197,94,0.08)'
  const RED = '#ef4444'
  const RED_AREA = 'rgba(239,68,68,0.12)'
  const BLUE = '#3b82f6'

  // Layout
  const LH = 14
  const G = 3
  const S = 8
  const available = h - LH * 2 - G * 2 - S
  const eqH = Math.floor(available * 0.65)
  const ddH = available - eqH

  const eqLY = 0
  const eqT = LH + G
  const eqB = eqT + eqH
  const sepY = eqB + S / 2
  const ddLY = eqB + S
  const ddT = ddLY + LH + G
  const ddB = ddT + ddH

  // X mapping
  const xOf = (i: number) => (i / (len - 1)) * w
  const iOf = (x: number) => Math.max(0, Math.min(Math.round((x / w) * (len - 1)), len - 1))

  // Equity Y mapping — include B&H data in the range
  const [eqDataMin, eqDataMax] = arrayMinMax(eqData)
  let eqMin0 = Math.min(eqDataMin, initCap)
  let eqMax0 = Math.max(eqDataMax, initCap)
  if (bhData.length >= 2) {
    const [bhMin, bhMax] = arrayMinMax(bhData)
    eqMin0 = Math.min(eqMin0, bhMin)
    eqMax0 = Math.max(eqMax0, bhMax)
  }
  const eqPad = (eqMax0 - eqMin0) * 0.05 || 1
  const eqMin = eqMin0 - eqPad
  const eqMax = eqMax0 + eqPad
  const eqY = (v: number) => eqT + eqH * (1 - (v - eqMin) / (eqMax - eqMin))

  // Drawdown Y mapping (0 at top, max at bottom)
  const ddMaxVal = arrayMinMax(ddData)[1] || 1
  const ddY = (v: number) => ddT + (v / ddMaxVal) * ddH * 0.9

  ctx.beginPath()
  ctx.moveTo(xOf(0), eqY(eqData[0]))
  for (let i = 1; i < len; i++) ctx.lineTo(xOf(i), eqY(eqData[i]))
  ctx.lineTo(xOf(len - 1), eqB)
  ctx.lineTo(0, eqB)
  ctx.closePath()
  ctx.fillStyle = GREEN_AREA
  ctx.fill()

  ctx.beginPath()
  ctx.moveTo(xOf(0), eqY(eqData[0]))
  for (let i = 1; i < len; i++) ctx.lineTo(xOf(i), eqY(eqData[i]))
  ctx.strokeStyle = GREEN
  ctx.lineWidth = 1.5
  ctx.setLineDash([])
  ctx.stroke()

  // Buy & Hold curve overlay
  if (bhData.length >= 2) {
    ctx.beginPath()
    ctx.moveTo(xOf(0), eqY(bhData[0]))
    for (let i = 1; i < len && i < bhData.length; i++) ctx.lineTo(xOf(i), eqY(bhData[i]))
    ctx.strokeStyle = BLUE
    ctx.lineWidth = 1
    ctx.setLineDash([4, 4])
    ctx.stroke()
    ctx.setLineDash([])
  }

  // Initial capital baseline
  ctx.beginPath()
  ctx.moveTo(0, eqY(initCap))
  ctx.lineTo(w, eqY(initCap))
  ctx.strokeStyle = 'rgba(128,128,128,0.15)'
  ctx.lineWidth = 1
  ctx.setLineDash([])
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(0, ddT)
  for (let i = 0; i < len; i++) ctx.lineTo(xOf(i), ddY(ddData[i]))
  ctx.lineTo(xOf(len - 1), ddT)
  ctx.closePath()
  ctx.fillStyle = RED_AREA
  ctx.fill()

  ctx.beginPath()
  ctx.moveTo(xOf(0), ddY(ddData[0]))
  for (let i = 1; i < len; i++) ctx.lineTo(xOf(i), ddY(ddData[i]))
  ctx.strokeStyle = RED
  ctx.lineWidth = 1
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(0, sepY)
  ctx.lineTo(w, sepY)
  ctx.strokeStyle = borderColor
  ctx.lineWidth = 1
  ctx.stroke()

  const FONT_UI = '10px system-ui, -apple-system, sans-serif'
  const FONT_MONO = 'bold 10px ui-monospace, monospace'
  ctx.textBaseline = 'top'

  const hovering = ovMx >= 0 && ovMy >= 0
  const idx = hovering ? iOf(ovMx) : -1

  // Crosshair
  if (hovering) {
    const cx = xOf(idx)
    ctx.setLineDash([3, 2])
    ctx.strokeStyle = 'rgba(128,128,128,0.35)'
    ctx.lineWidth = 1
    ctx.beginPath(); ctx.moveTo(cx, eqT); ctx.lineTo(cx, ddB); ctx.stroke()
    if (ovMy >= eqT && ovMy <= eqB) {
      ctx.beginPath(); ctx.moveTo(0, ovMy); ctx.lineTo(w, ovMy); ctx.stroke()
    } else if (ovMy >= ddT && ovMy <= ddB) {
      ctx.beginPath(); ctx.moveTo(0, ovMy); ctx.lineTo(w, ovMy); ctx.stroke()
    }
    ctx.setLineDash([])

    // Dots
    const ey = eqY(eqData[idx])
    ctx.beginPath(); ctx.arc(cx, ey, 3, 0, Math.PI * 2); ctx.fillStyle = GREEN; ctx.fill()
    if (bhData.length > idx) {
      ctx.beginPath(); ctx.arc(cx, eqY(bhData[idx]), 3, 0, Math.PI * 2); ctx.fillStyle = BLUE; ctx.fill()
    }
    ctx.beginPath(); ctx.arc(cx, ddY(ddData[idx]), 3, 0, Math.PI * 2); ctx.fillStyle = RED; ctx.fill()
  }

  // ── Equity legend row: swatch · label [· value] · B&H swatch · label [· value] ──
  let lx = 4
  ctx.lineWidth = 2; ctx.strokeStyle = GREEN; ctx.setLineDash([])
  ctx.beginPath(); ctx.moveTo(lx, eqLY + 7); ctx.lineTo(lx + 12, eqLY + 7); ctx.stroke()
  lx += 16
  ctx.font = FONT_UI; ctx.fillStyle = mutedColor
  const eqLabel = t('strategy.equityCurve')
  ctx.fillText(eqLabel, lx, eqLY + 2); lx += ctx.measureText(eqLabel).width + 3
  if (hovering) {
    ctx.font = FONT_MONO; ctx.fillStyle = GREEN
    const ev = fmtCurrency(eqData[idx])
    ctx.fillText(ev, lx, eqLY + 2); lx += ctx.measureText(ev).width
    ctx.font = FONT_UI
  }
  lx += 10

  if (bhData.length >= 2) {
    ctx.lineWidth = 1; ctx.strokeStyle = BLUE; ctx.setLineDash([4, 4])
    ctx.beginPath(); ctx.moveTo(lx, eqLY + 7); ctx.lineTo(lx + 12, eqLY + 7); ctx.stroke()
    ctx.setLineDash([])
    lx += 16
    ctx.font = FONT_UI; ctx.fillStyle = mutedColor
    const bhLabel = t('strategy.buyHold')
    ctx.fillText(bhLabel, lx, eqLY + 2); lx += ctx.measureText(bhLabel).width + 3
    if (hovering && bhData.length > idx) {
      ctx.font = FONT_MONO; ctx.fillStyle = BLUE
      const bv = fmtCurrency(bhData[idx])
      ctx.fillText(bv, lx, eqLY + 2)
      ctx.font = FONT_UI
    }
  }

  // Initial capital legend (right-aligned)
  ctx.font = FONT_UI
  const icLabel = t('strategy.initialCapital')
  const icLabelW = ctx.measureText(icLabel).width
  const icLabelX = w - 4 - icLabelW
  ctx.lineWidth = 1; ctx.strokeStyle = 'rgba(128,128,128,0.4)'; ctx.setLineDash([])
  ctx.beginPath(); ctx.moveTo(icLabelX - 16, eqLY + 7); ctx.lineTo(icLabelX - 4, eqLY + 7); ctx.stroke()
  ctx.fillStyle = mutedColor; ctx.fillText(icLabel, icLabelX, eqLY + 2)

  // ── Drawdown legend row: swatch · label [· value] ──
  let dlx = 4
  ctx.fillStyle = RED_AREA; ctx.fillRect(dlx, ddLY + 3, 10, 8)
  ctx.lineWidth = 1; ctx.strokeStyle = RED; ctx.strokeRect(dlx, ddLY + 3, 10, 8)
  dlx += 14
  ctx.font = FONT_UI; ctx.fillStyle = mutedColor
  const ddLabel = t('strategy.drawdown')
  ctx.fillText(ddLabel, dlx, ddLY + 2); dlx += ctx.measureText(ddLabel).width + 3
  if (hovering) {
    ctx.font = FONT_MONO; ctx.fillStyle = RED
    ctx.fillText(fmtCurrency(ddData[idx]), dlx, ddLY + 2)
  }
}

// ── Monthly heatmap ──

interface MonthlyData {
  year: number
  months: (number | null)[]  // index 0-11, null = no data
  yearTotal: number | null
}

const monthlyHeatmap = computed((): MonthlyData[] => {
  const daily = props.report.dailyReturns
  if (!daily || daily.length === 0) return []

  // Group by year-month
  const grouped = new Map<string, number[]>()
  for (const d of daily) {
    const key = d.date.slice(0, 7) // YYYY-MM
    if (!grouped.has(key)) grouped.set(key, [])
    grouped.get(key)!.push(d.returnPercent)
  }

  // Compound returns per month
  const monthlyMap = new Map<string, number>()
  for (const [key, returns] of grouped) {
    const compound = returns.reduce((acc, r) => acc * (1 + r / 100), 1) - 1
    monthlyMap.set(key, compound * 100)
  }

  // Collect years
  const years = [...new Set([...monthlyMap.keys()].map(k => parseInt(k.slice(0, 4))))].sort()

  return years.map(year => {
    const months: (number | null)[] = Array(12).fill(null)
    for (let m = 0; m < 12; m++) {
      const key = `${year}-${String(m + 1).padStart(2, '0')}`
      if (monthlyMap.has(key)) months[m] = monthlyMap.get(key)!
    }
    const validMonths = months.filter(v => v !== null) as number[]
    const yearTotal = validMonths.length > 0
      ? (validMonths.reduce((acc, r) => acc * (1 + r / 100), 1) - 1) * 100
      : null
    return { year, months, yearTotal }
  })
})

function heatmapColor(v: number | null): string {
  if (v === null) return 'transparent'
  if (v >= 0) {
    const intensity = Math.min(v / 10, 1)
    return `rgba(34,197,94,${0.15 + intensity * 0.6})`
  } else {
    const intensity = Math.min(-v / 10, 1)
    return `rgba(239,68,68,${0.15 + intensity * 0.6})`
  }
}

function heatmapTextClass(v: number | null): string {
  if (v === null) return 'hm-na'
  return v >= 0 ? 'hm-profit' : 'hm-loss'
}

function fmtHeatmapPct(v: number | null): string {
  if (v === null) return '—'
  return `${v >= 0 ? '+' : ''}${v.toFixed(1)}%`
}

const MONTH_LABELS = computed(() => [
  t('strategy.heatmap.months.jan'), t('strategy.heatmap.months.feb'), t('strategy.heatmap.months.mar'),
  t('strategy.heatmap.months.apr'), t('strategy.heatmap.months.may'), t('strategy.heatmap.months.jun'),
  t('strategy.heatmap.months.jul'), t('strategy.heatmap.months.aug'), t('strategy.heatmap.months.sep'),
  t('strategy.heatmap.months.oct'), t('strategy.heatmap.months.nov'), t('strategy.heatmap.months.dec'),
])

// ── MAE/MFE scatter plot ──

const mfeMaeCanvas = ref<HTMLCanvasElement | null>(null)
let mfW = 0
let mfH = 0
let mfMx = -1
let mfMy = -1
let mfHoverIdx = -1
const mfIsPointer = ref(false)

watch(mfeMaeCanvas, (canvas, _old, onCleanup) => {
  if (!canvas) return
  const parent = canvas.parentElement!
  const ro = new ResizeObserver(() => { mfResize(); mfRender() })
  ro.observe(parent)
  mfResize()
  mfRender()
  onCleanup(() => ro.disconnect())
})

watch(() => [props.report, activeTab.value], () => {
  if (activeTab.value === 'maemfe') nextTick(mfRender)
})

function mfResize() {
  const canvas = mfeMaeCanvas.value
  if (!canvas) return
  const parent = canvas.parentElement!
  const dpr = window.devicePixelRatio || 1
  mfW = parent.clientWidth
  mfH = parent.clientHeight
  canvas.width = Math.round(mfW * dpr)
  canvas.height = Math.round(mfH * dpr)
  const ctx = canvas.getContext('2d')!
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
}

function mfOnMove(e: MouseEvent) {
  const rect = mfeMaeCanvas.value?.getBoundingClientRect()
  if (!rect) return
  mfMx = e.clientX - rect.left
  mfMy = e.clientY - rect.top
  mfRender()
}

function mfOnLeave() {
  mfMx = -1
  mfMy = -1
  mfHoverIdx = -1
  mfIsPointer.value = false
  mfRender()
}

function mfOnClick() {
  if (mfHoverIdx < 0) return
  pendingTradeScroll.value = mfHoverIdx
  // Reset first so the flash animation re-triggers if the same trade is clicked again.
  highlightedTradeIdx.value = -1
  nextTick(() => { highlightedTradeIdx.value = mfHoverIdx })
  activeTab.value = 'trades'
}

function mfRender() {
  const canvas = mfeMaeCanvas.value
  if (!canvas || mfW === 0 || mfH === 0) return
  const ctx = canvas.getContext('2d')!
  const w = mfW
  const h = mfH

  ctx.clearRect(0, 0, w, h)

  const trades = props.report.closedTrades
  if (trades.length === 0) return

  const cs = getComputedStyle(canvas)
  const mv = cs.getPropertyValue('--muted-foreground').trim()
  const mutedColor = mv ? `hsl(${mv})` : '#6c7086'
  const bv = cs.getPropertyValue('--border').trim()
  const borderColor = bv ? `hsl(${bv})` : 'rgba(128,128,128,0.2)'

  // Padding for axes
  const PAD_L = 48
  const PAD_B = 32
  const PAD_T = 16
  const PAD_R = 16

  const plotW = w - PAD_L - PAD_R
  const plotH = h - PAD_T - PAD_B

  // Data ranges
  const maeVals = trades.map(t => t.maxDrawdownPercent)
  const mfeVals = trades.map(t => t.maxRunupPercent)
  const maxMAE = Math.max(...maeVals, 1)
  const maxMFE = Math.max(...mfeVals, 1)

  const toX = (mae: number) => PAD_L + (mae / maxMAE) * plotW
  const toY = (mfe: number) => PAD_T + plotH - (mfe / maxMFE) * plotH

  // Grid lines
  ctx.strokeStyle = borderColor
  ctx.lineWidth = 1
  const TICKS = 5
  for (let i = 0; i <= TICKS; i++) {
    const xv = (i / TICKS) * maxMAE
    const yv = (i / TICKS) * maxMFE
    const px = toX(xv)
    const py = toY(yv)

    ctx.beginPath()
    ctx.moveTo(px, PAD_T)
    ctx.lineTo(px, PAD_T + plotH)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(PAD_L, py)
    ctx.lineTo(PAD_L + plotW, py)
    ctx.stroke()

    ctx.font = '9px system-ui, -apple-system, sans-serif'
    ctx.fillStyle = mutedColor
    ctx.textAlign = 'center'
    ctx.textBaseline = 'top'
    ctx.fillText(`${xv.toFixed(1)}%`, px, PAD_T + plotH + 4)

    ctx.textAlign = 'right'
    ctx.textBaseline = 'middle'
    ctx.fillText(`${yv.toFixed(1)}%`, PAD_L - 4, py)
  }

  // Axis labels
  ctx.font = '10px system-ui, -apple-system, sans-serif'
  ctx.fillStyle = mutedColor
  ctx.textAlign = 'center'
  ctx.textBaseline = 'bottom'
  ctx.fillText('MAE %', PAD_L + plotW / 2, h)

  ctx.save()
  ctx.translate(10, PAD_T + plotH / 2)
  ctx.rotate(-Math.PI / 2)
  ctx.textBaseline = 'top'
  ctx.fillText('MFE %', 0, 0)
  ctx.restore()

  // Dots — find nearest within hit radius
  mfHoverIdx = -1
  const RADIUS = 4
  const HOVER_RADIUS = 6
  const HIT_RADIUS = HOVER_RADIUS + 4

  if (mfMx >= 0) {
    let bestDist = HIT_RADIUS + 1
    for (let i = 0; i < trades.length; i++) {
      const t = trades[i]
      const px = toX(t.maxDrawdownPercent)
      const py = toY(t.maxRunupPercent)
      const dist = Math.sqrt((mfMx - px) ** 2 + (mfMy - py) ** 2)
      if (dist < bestDist) {
        bestDist = dist
        mfHoverIdx = i
      }
    }
  }
  mfIsPointer.value = mfHoverIdx >= 0

  for (let i = 0; i < trades.length; i++) {
    const t = trades[i]
    const px = toX(t.maxDrawdownPercent)
    const py = toY(t.maxRunupPercent)
    const isHover = i === mfHoverIdx
    const r = isHover ? HOVER_RADIUS : RADIUS

    ctx.beginPath()
    ctx.arc(px, py, r, 0, Math.PI * 2)
    ctx.fillStyle = t.profitPercent >= 0
      ? `rgba(34,197,94,${isHover ? 0.95 : 0.7})`
      : `rgba(239,68,68,${isHover ? 0.95 : 0.7})`
    ctx.fill()
    if (isHover) {
      ctx.strokeStyle = t.profitPercent >= 0 ? '#22c55e' : '#ef4444'
      ctx.lineWidth = 1.5
      ctx.stroke()
    }
  }

  // Hover tooltip
  if (mfHoverIdx >= 0) {
    const t = trades[mfHoverIdx]
    const px = toX(t.maxDrawdownPercent)
    const py = toY(t.maxRunupPercent)

    const lines = [
      `#${t.tradeNum + 1}  ${t.entrySide}`,
      `P/L: ${fmtPct(t.profitPercent)}`,
      `MAE: ${fmtPct(t.maxDrawdownPercent)}`,
      `MFE: ${fmtPct(t.maxRunupPercent)}`,
    ]
    const TPad = 5
    const TLineH = 14
    const TW = 120
    const TH = lines.length * TLineH + TPad * 2

    let tx = px + 10
    let ty = py - TH / 2
    if (tx + TW > w) tx = px - TW - 10
    if (ty < 0) ty = 0
    if (ty + TH > h) ty = h - TH

    ctx.fillStyle = 'rgba(0,0,0,0.75)'
    ctx.beginPath()
    ctx.roundRect(tx, ty, TW, TH, 4)
    ctx.fill()

    ctx.font = '10px ui-monospace, monospace'
    ctx.fillStyle = '#fff'
    ctx.textAlign = 'left'
    ctx.textBaseline = 'top'
    for (let li = 0; li < lines.length; li++) {
      ctx.fillText(lines[li], tx + TPad, ty + TPad + li * TLineH)
    }
  }
}

interface PerfRow {
  label: string
  getValue: (m: PerformanceMetrics) => string
  getClass?: (m: PerformanceMetrics) => string
  allOnly?: boolean
  section?: string
  desc?: string
}

// ── Tooltip ──
interface TooltipState { text: string; x: number; y: number }
const tooltip = ref<TooltipState | null>(null)

function onInfoEnter(e: MouseEvent, text: string) {
  const r = (e.currentTarget as HTMLElement).getBoundingClientRect()
  const TW = 240  // max-width of tooltip
  const pad = 8
  const cx = r.left + r.width / 2
  const x = Math.max(TW / 2 + pad, Math.min(cx, window.innerWidth - TW / 2 - pad))
  tooltip.value = { text, x, y: r.top }
}
function onInfoLeave() {
  tooltip.value = null
}

// ── Trades virtual list ──
const tradesContainerRef = ref<HTMLElement | null>(null)

const allTradeItems = computed(() => [
  ...props.report.closedTrades.map(t => ({ kind: 'closed' as const, trade: t })),
  ...props.report.openTrades.map(t => ({ kind: 'open' as const, trade: t })),
])

// Row heights: 11px font * ~1.6 line-height ≈ 18px + 6px padding + 1px border ≈ 25px per row
const CLOSED_ROW_H = 50 // entry row (25px) + exit row (25px)
const OPEN_ROW_H = 25

const tradesVirtualizer = useVirtualizer(computed(() => ({
  count: allTradeItems.value.length,
  getScrollElement: () => tradesContainerRef.value,
  estimateSize: (i) => allTradeItems.value[i].kind === 'closed' ? CLOSED_ROW_H : OPEN_ROW_H,
  overscan: 8,
})))

const virtualTradeItems = computed(() => tradesVirtualizer.value.getVirtualItems())
const virtualTotalSize = computed(() => tradesVirtualizer.value.getTotalSize())
const virtualOffsetTop = computed(() => virtualTradeItems.value[0]?.start ?? 0)
const virtualOffsetBottom = computed(() => {
  const last = virtualTradeItems.value.at(-1)
  return last ? virtualTotalSize.value - last.end : 0
})

// Index of trade to scroll to after switching to the trades tab (-1 = none).
const pendingTradeScroll = ref(-1)
// Index in allTradeItems of the highlighted trade row (-1 = none).
const highlightedTradeIdx = ref(-1)

// When switching to the trades tab, the container transitions from
// display:none (v-show) to visible. Force the virtualizer to
// re-measure so it picks up the correct scroll container dimensions.
// scrollToIndex must run after the browser's ResizeObserver has fired
// (which notifies the virtualizer of the real container height) — that
// happens on the next paint, so we wait two rAF frames.
watch(activeTab, async (tab) => {
  if (tab === 'trades') {
    await nextTick()
    tradesVirtualizer.value.measure()
    if (pendingTradeScroll.value >= 0) {
      const idx = pendingTradeScroll.value
      pendingTradeScroll.value = -1
      await new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve())))
      tradesVirtualizer.value.scrollToIndex(idx, { align: 'center' })
    }
  }
  if (tab === 'maemfe') {
    nextTick(() => { mfResize(); mfRender() })
  }
})

const perfRows = computed<PerfRow[]>(() => {
  const cp = (m: PerformanceMetrics, f: keyof PerformanceMetrics, pf: keyof PerformanceMetrics) => {
    return `${fmtCurrency(m[f] as number)} (${fmtPct(m[pf] as number)})`
  }
  const d = (k: string) => t(`strategy.desc.${k}`)
  return [
    // Profit & Loss
    { section: t('strategy.sections.profitLoss'), label: t('strategy.netProfit'), getValue: m => cp(m, 'netProfit', 'netProfitPercent'), getClass: m => plClass(m.netProfit), desc: d('netProfit') },
    { label: t('strategy.grossProfit'), getValue: m => cp(m, 'grossProfit', 'grossProfitPercent'), getClass: m => plClass(m.grossProfit), desc: d('grossProfit') },
    { label: t('strategy.grossLoss'), getValue: m => cp(m, 'grossLoss', 'grossLossPercent'), getClass: m => plClass(-Math.abs(m.grossLoss)), desc: d('grossLoss') },
    // Equity extremes
    { section: t('strategy.sections.equity'), label: t('strategy.maxDrawdown'), getValue: m => cp(m, 'maxDrawdown', 'maxDrawdownPercent'), getClass: () => 'loss', allOnly: true, desc: d('maxDrawdown') },
    { label: t('strategy.maxRunup'), getValue: m => cp(m, 'maxRunup', 'maxRunupPercent'), allOnly: true, desc: d('maxRunup') },
    { label: t('strategy.buyHoldReturn'), getValue: m => fmtOpt(m.buyHoldReturn, v => `${fmtCurrency(v)} (${fmtOpt(m.buyHoldReturnPercent, fmtPct)})`), allOnly: true, desc: d('buyHoldReturn') },
    // Risk metrics
    { section: t('strategy.sections.risk'), label: t('strategy.sharpeRatio'), getValue: m => fmtOpt(m.sharpeRatio, fmtRatio), allOnly: true, desc: d('sharpeRatio') },
    { label: t('strategy.sortinoRatio'), getValue: m => fmtOpt(m.sortinoRatio, fmtRatio), allOnly: true, desc: d('sortinoRatio') },
    { label: t('strategy.profitFactor'), getValue: m => fmtOpt(m.profitFactor, fmtRatio), desc: d('profitFactor') },
    // Trade counts
    { section: t('strategy.sections.counts'), label: t('strategy.totalClosed'), getValue: m => fmtInt(m.totalClosedTrades), desc: d('totalClosed') },
    { label: t('strategy.totalOpen'), getValue: m => fmtInt(m.totalOpenTrades), desc: d('totalOpen') },
    { label: t('strategy.numWinning'), getValue: m => fmtInt(m.numWinningTrades), desc: d('numWinning') },
    { label: t('strategy.numLosing'), getValue: m => fmtInt(m.numLosingTrades), desc: d('numLosing') },
    { label: t('strategy.percentProfitable'), getValue: m => fmtOpt(m.percentProfitable, fmtPct), desc: d('percentProfitable') },
    // Average trade
    { section: t('strategy.sections.avgTrade'), label: t('strategy.avgTrade'), getValue: m => cp(m, 'avgTrade', 'avgTradePercent'), getClass: m => plClass(m.avgTrade), desc: d('avgTrade') },
    { label: t('strategy.avgWinning'), getValue: m => cp(m, 'avgWinningTrade', 'avgWinningTradePercent'), desc: d('avgWinning') },
    { label: t('strategy.avgLosing'), getValue: m => cp(m, 'avgLosingTrade', 'avgLosingTradePercent'), desc: d('avgLosing') },
    { label: t('strategy.ratioWinLoss'), getValue: m => fmtOpt(m.ratioAvgWinLoss, fmtRatio), desc: d('ratioWinLoss') },
    // Largest trades
    { section: t('strategy.sections.largest'), label: t('strategy.largestWin'), getValue: m => cp(m, 'largestWinningTrade', 'largestWinningTradePercent'), desc: d('largestWin') },
    { label: t('strategy.largestLoss'), getValue: m => cp(m, 'largestLosingTrade', 'largestLosingTradePercent'), desc: d('largestLoss') },
    // Duration
    { section: t('strategy.sections.duration'), label: t('strategy.avgBarsAll'), getValue: m => fmtInt(m.avgBarsInTrades), desc: d('avgBarsAll') },
    { label: t('strategy.avgBarsWin'), getValue: m => fmtInt(m.avgBarsInWinningTrades), desc: d('avgBarsWin') },
    { label: t('strategy.avgBarsLoss'), getValue: m => fmtInt(m.avgBarsInLosingTrades), desc: d('avgBarsLoss') },
    // Costs
    { section: t('strategy.sections.costs'), label: t('strategy.commissionPaid'), getValue: m => fmtCurrency(m.commissionPaid), desc: d('commissionPaid') },
    { label: t('strategy.maxContracts'), getValue: m => m.maxContractsHeld.toFixed(2), desc: d('maxContracts') },
    { label: t('strategy.marginCalls'), getValue: m => fmtInt(m.marginCalls), desc: d('marginCalls') },
  ]
})

// ── CSV Export ──
function exportCsv() {
  const trades = props.report.closedTrades
  const headers = [
    '#', 'Side', 'Entry Signal', 'Entry Date', 'Entry Price',
    'Exit Signal', 'Exit Date', 'Exit Price', 'Qty',
    'Profit', 'Profit%', 'Cum. Profit', 'Max Run-up%', 'Max Drawdown%', 'Commission',
  ]
  const rows = trades.map(t => [
    t.tradeNum + 1,
    t.entrySide,
    t.entryId,
    fmtDate(t.entryTime),
    t.entryPrice.toFixed(2),
    t.exitId,
    fmtDate(t.exitTime),
    t.exitPrice.toFixed(2),
    t.quantity.toFixed(2),
    t.profit.toFixed(2),
    t.profitPercent.toFixed(2),
    t.cumulativeProfit.toFixed(2),
    t.maxRunupPercent.toFixed(2),
    t.maxDrawdownPercent.toFixed(2),
    t.commission.toFixed(2),
  ])
  const csvContent = [headers, ...rows].map(r => r.join(',')).join('\n')
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'trades.csv'
  a.click()
  URL.revokeObjectURL(url)
}


</script>

<template>
  <div class="strategy-tester">
    <!-- Tab bar -->
    <div class="st-tabs">
      <button
        v-for="tab in (['overview', 'performance', 'trades', 'monthly', 'maemfe'] as Tab[])"
        :key="tab"
        :class="['st-tab', { active: activeTab === tab }]"
        @click="activeTab = tab"
      >
        <template v-if="tab === 'maemfe'">
          <span>MAE / MFE</span>
          <span class="st-info" @mouseenter.stop="onInfoEnter($event, t('strategy.maeMfeDesc'))" @mouseleave.stop="onInfoLeave" @click.stop>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
          </span>
        </template>
        <template v-else>{{ t(`strategy.tabs.${tab}`) }}</template>
      </button>
    </div>

    <!-- Tab content -->
    <div class="st-body">
      <!-- ── Overview ── -->
      <div v-show="activeTab === 'overview'" class="st-overview">
        <div class="st-metrics">
          <div v-for="m in overviewMetrics" :key="m.label" class="st-metric">
            <div class="st-metric-label">
              {{ m.label }}
              <span v-if="m.desc" class="st-info" @mouseenter="onInfoEnter($event, m.desc)" @mouseleave="onInfoLeave">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
              </span>
            </div>
            <div :class="['st-metric-value', m.pl]">
              {{ m.value }}
              <span v-if="m.sub" class="st-metric-sub">{{ m.sub }}</span>
            </div>
          </div>
        </div>

        <div v-if="report.equityCurve.length >= 2" class="st-chart-wrap">
          <canvas
            ref="overviewCanvas"
            @mousemove="ovOnMove"
            @mouseleave="ovOnLeave"
          />
        </div>
      </div>

      <!-- ── Performance Summary ── -->
      <div v-show="activeTab === 'performance'" class="st-performance">
        <table>
          <thead>
            <tr>
              <th class="st-label-col"></th>
              <th>{{ t('strategy.col.all') }}</th>
              <th>{{ t('strategy.col.long') }}</th>
              <th>{{ t('strategy.col.short') }}</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(row, i) in perfRows" :key="i">
              <tr v-if="row.section" class="st-section-row">
                <td colspan="4">{{ row.section }}</td>
              </tr>
              <tr>
                <td class="st-label-col">
                  {{ row.label }}
                  <span v-if="row.desc" class="st-info" @mouseenter="onInfoEnter($event, row.desc)" @mouseleave="onInfoLeave">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                  </span>
                </td>
                <td :class="row.getClass?.(report.performanceAll)">
                  {{ row.getValue(report.performanceAll) }}
                </td>
                <td :class="row.allOnly ? 'st-dim' : row.getClass?.(report.performanceLong)">
                  {{ row.allOnly ? '\u2014' : row.getValue(report.performanceLong) }}
                </td>
                <td :class="row.allOnly ? 'st-dim' : row.getClass?.(report.performanceShort)">
                  {{ row.allOnly ? '\u2014' : row.getValue(report.performanceShort) }}
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>

      <!-- ── List of Trades ── -->
      <div v-show="activeTab === 'trades'" ref="tradesContainerRef" class="st-trades">
        <div v-if="allTradeItems.length === 0" class="st-no-trades">
          {{ t('strategy.noTrades') }}
        </div>
        <table v-else>
          <colgroup>
            <col style="width: 36px" /><!-- # -->
            <col style="width: 80px" /><!-- Type -->
            <col style="width: 100px" /><!-- Signal -->
            <col style="width: 84px" /><!-- Date -->
            <col style="width: 72px" /><!-- Price -->
            <col style="width: 56px" /><!-- Qty -->
            <col style="width: 80px" /><!-- Profit -->
            <col style="width: 72px" /><!-- Profit% -->
            <col style="width: 86px" /><!-- Cum.Profit -->
            <col style="width: 80px" /><!-- Run-up -->
            <col style="width: 80px" /><!-- Drawdown -->
            <col style="width: 36px" /><!-- Export -->
          </colgroup>
          <thead>
            <tr>
              <th>#</th>
              <th>{{ t('strategy.trade.type') }}</th>
              <th>{{ t('strategy.trade.signal') }}</th>
              <th>{{ t('strategy.trade.date') }}</th>
              <th>{{ t('strategy.trade.price') }}</th>
              <th>{{ t('strategy.trade.qty') }}</th>
              <th>{{ t('strategy.trade.profit') }}</th>
              <th>{{ t('strategy.trade.profitPct') }}</th>
              <th>{{ t('strategy.trade.cumProfit') }}</th>
              <th>{{ t('strategy.trade.runup') }}</th>
              <th>{{ t('strategy.trade.drawdown') }}</th>
              <th class="st-export-th">
                <button class="st-export-btn" :title="t('strategy.exportCsv')" @click="exportCsv">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 1a.5.5 0 0 1 .5.5v9.793l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 11.293V1.5A.5.5 0 0 1 8 1M2.5 14a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1z"/>
                  </svg>
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <!-- Top spacer -->
            <tr v-if="virtualOffsetTop > 0" :style="{ height: `${virtualOffsetTop}px` }">
              <td colspan="12" class="st-spacer" />
            </tr>

            <template v-for="vItem in virtualTradeItems" :key="vItem.key">
              <!-- Closed trade: entry row + exit row -->
              <template v-if="vItem.index < allTradeItems.length && allTradeItems[vItem.index].kind === 'closed'">
                <tr :class="['st-entry-row', allTradeItems[vItem.index].trade.tradeNum % 2 === 0 ? 'st-group-even' : 'st-group-odd', vItem.index === highlightedTradeIdx ? 'st-highlighted' : '']">
                  <td class="st-center" rowspan="2">{{ allTradeItems[vItem.index].trade.tradeNum + 1 }}</td>
                  <td class="st-left">
                    {{ allTradeItems[vItem.index].trade.entrySide === 'long' ? t('strategy.trade.longEntry') : t('strategy.trade.shortEntry') }}
                  </td>
                  <td class="st-left">
                    <a class="st-signal-link" @click="emit('scrollToBar', allTradeItems[vItem.index].trade.entryBar)">{{ allTradeItems[vItem.index].trade.entryId }}</a>
                  </td>
                  <td>{{ fmtDate(allTradeItems[vItem.index].trade.entryTime) }}</td>
                  <td>{{ allTradeItems[vItem.index].trade.entryPrice.toFixed(2) }}</td>
                  <td>{{ allTradeItems[vItem.index].trade.quantity.toFixed(2) }}</td>
                  <td rowspan="2" :class="plClass(allTradeItems[vItem.index].trade.profit)" class="st-span-cell">{{ fmtCurrency(allTradeItems[vItem.index].trade.profit) }}</td>
                  <td rowspan="2" :class="plClass(allTradeItems[vItem.index].trade.profitPercent)" class="st-span-cell">{{ fmtPct(allTradeItems[vItem.index].trade.profitPercent) }}</td>
                  <td rowspan="2" :class="plClass(allTradeItems[vItem.index].trade.cumulativeProfit)" class="st-span-cell">{{ fmtCurrency(allTradeItems[vItem.index].trade.cumulativeProfit) }}</td>
                  <td rowspan="2" class="st-span-cell">{{ fmtCurrency(allTradeItems[vItem.index].trade.maxRunup) }}</td>
                  <td rowspan="2" class="st-span-cell">{{ fmtCurrency(allTradeItems[vItem.index].trade.maxDrawdown) }}</td>
                  <td rowspan="2" class="st-span-cell"></td>
                </tr>
                <tr :class="['st-exit-row', allTradeItems[vItem.index].trade.tradeNum % 2 === 0 ? 'st-group-even' : 'st-group-odd', vItem.index === highlightedTradeIdx ? 'st-highlighted' : '']">
                  <td class="st-left">
                    {{ allTradeItems[vItem.index].trade.entrySide === 'long' ? t('strategy.trade.longExit') : t('strategy.trade.shortExit') }}
                  </td>
                  <td class="st-left">
                    <a class="st-signal-link" @click="emit('scrollToBar', allTradeItems[vItem.index].trade.exitBar)">{{ allTradeItems[vItem.index].trade.exitId }}</a>
                  </td>
                  <td>{{ fmtDate(allTradeItems[vItem.index].trade.exitTime) }}</td>
                  <td>{{ allTradeItems[vItem.index].trade.exitPrice.toFixed(2) }}</td>
                  <td>{{ allTradeItems[vItem.index].trade.quantity.toFixed(2) }}</td>
                </tr>
              </template>

              <!-- Open trade: entry row only -->
              <template v-else-if="vItem.index < allTradeItems.length && allTradeItems[vItem.index].kind === 'open'">
                <tr class="st-entry-row st-open-row">
                  <td class="st-center">{{ allTradeItems[vItem.index].trade.tradeNum + 1 }}</td>
                  <td class="st-left">
                    {{ allTradeItems[vItem.index].trade.entrySide === 'long' ? t('strategy.trade.longEntry') : t('strategy.trade.shortEntry') }}
                  </td>
                  <td class="st-left">
                    <a class="st-signal-link" @click="emit('scrollToBar', allTradeItems[vItem.index].trade.entryBar)">{{ allTradeItems[vItem.index].trade.entryId }}</a>
                  </td>
                  <td>{{ fmtDate(allTradeItems[vItem.index].trade.entryTime) }}</td>
                  <td>{{ allTradeItems[vItem.index].trade.entryPrice.toFixed(2) }}</td>
                  <td>{{ allTradeItems[vItem.index].trade.quantity.toFixed(2) }}</td>
                  <td :class="plClass(allTradeItems[vItem.index].trade.profit)" class="st-dim">{{ fmtCurrency(allTradeItems[vItem.index].trade.profit) }}</td>
                  <td :class="plClass(allTradeItems[vItem.index].trade.profitPercent)" class="st-dim">{{ fmtPct(allTradeItems[vItem.index].trade.profitPercent) }}</td>
                  <td class="st-dim">&mdash;</td>
                  <td class="st-dim">{{ fmtCurrency(allTradeItems[vItem.index].trade.maxRunup) }}</td>
                  <td class="st-dim">{{ fmtCurrency(allTradeItems[vItem.index].trade.maxDrawdown) }}</td>
                  <td></td>
                </tr>
              </template>
            </template>

            <!-- Bottom spacer -->
            <tr v-if="virtualOffsetBottom > 0" :style="{ height: `${virtualOffsetBottom}px` }">
              <td colspan="12" class="st-spacer" />
            </tr>
          </tbody>
        </table>
      </div>

      <!-- ── Monthly Returns ── -->
      <div v-show="activeTab === 'monthly'" class="st-tab-scroll">
        <div v-if="monthlyHeatmap.length === 0" class="st-no-trades">
          {{ t('strategy.noTrades') }}
        </div>
        <div v-else class="hm-wrap">
          <table class="hm-table">
            <thead>
              <tr>
                <th class="hm-year-col"></th>
                <th v-for="m in MONTH_LABELS" :key="m">{{ m }}</th>
                <th>{{ t('strategy.heatmap.year') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in monthlyHeatmap" :key="row.year">
                <td class="hm-year-col">{{ row.year }}</td>
                <td
                  v-for="(v, mi) in row.months"
                  :key="mi"
                  :style="{ background: heatmapColor(v) }"
                  :class="heatmapTextClass(v)"
                >{{ fmtHeatmapPct(v) }}</td>
                <td
                  :style="{ background: heatmapColor(row.yearTotal) }"
                  :class="[heatmapTextClass(row.yearTotal), 'hm-year-total']"
                >{{ fmtHeatmapPct(row.yearTotal) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- ── MAE / MFE ── -->
      <div v-show="activeTab === 'maemfe'" class="st-tab-fill">
        <div v-if="report.closedTrades.length === 0" class="st-no-trades">
          {{ t('strategy.noTrades') }}
        </div>
        <div v-else class="st-mf-wrap" :style="{ cursor: mfIsPointer ? 'pointer' : 'crosshair' }">
          <canvas
            ref="mfeMaeCanvas"
            @mousemove="mfOnMove"
            @mouseleave="mfOnLeave"
            @click="mfOnClick"
          />
        </div>
      </div>
    </div>
  </div>

  <teleport to="body">
    <div
      v-if="tooltip"
      class="st-tooltip-portal"
      :style="{ left: `${tooltip.x}px`, top: `${tooltip.y}px` }"
    >{{ tooltip.text }}</div>
  </teleport>
</template>

<style scoped>
.strategy-tester {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: hsl(var(--background));
  font-size: 12px;
  flex-shrink: 0;
}

/* ── Tabs ── */
.st-tabs {
  display: flex;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid hsl(var(--border));
  padding: 0 12px;
  flex-shrink: 0;
}
.st-tab {
  display: flex;
  align-items: center;
  gap: 2px;
  height: 36px;
  padding: 0 2px;
  cursor: pointer;
  color: hsl(var(--muted-foreground));
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  border-radius: 0;
  font-size: 12px;
  font-weight: 500;
  transition: color 0.15s, border-color 0.15s;
}
.st-tab:hover {
  color: hsl(var(--foreground));
}
.st-tab.active {
  color: hsl(var(--foreground));
  border-bottom-color: hsl(var(--foreground));
}

/* ── Body ── */
.st-body {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
}
.st-performance,
.st-trades,
.st-charts {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
}

/* ── Overview ── */
.st-overview {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 12px;
  height: 100%;
  box-sizing: border-box;
}
.st-metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 6px;
  flex-shrink: 0;
}
.st-metric {
  padding: 8px 10px;
  border: 1px solid hsl(var(--border));
  border-radius: 8px;
  background: hsl(var(--card));
}
.st-metric-label {
  font-size: 10px;
  color: hsl(var(--muted-foreground));
  margin-bottom: 1px;
}
.st-metric-value {
  font-size: 13px;
  font-weight: 600;
  font-family: ui-monospace, monospace;
}
.st-metric-sub {
  font-size: 10px;
  font-weight: 400;
  margin-left: 3px;
  opacity: 0.8;
}
.st-chart-wrap {
  flex: 1;
  min-height: 60px;
  cursor: crosshair;
}
.st-chart-wrap canvas {
  display: block;
  width: 100%;
  height: 100%;
}

/* ── Profit / Loss colors ── */
.profit { color: #22c55e; }
.loss { color: #ef4444; }
.st-dim { color: hsl(var(--muted-foreground)); }

/* ── Performance table ── */
.st-performance table,
.st-trades table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-family: ui-monospace, monospace;
  font-size: 11px;
}
.st-performance th,
.st-trades th {
  position: sticky;
  top: 0;
  z-index: 1;
  background: hsl(var(--background));
  text-align: right;
  padding: 4px 8px;
  color: hsl(var(--muted-foreground));
  font-weight: 500;
  border-bottom: 1px solid hsl(var(--border));
  white-space: nowrap;
}
.st-label-col {
  text-align: left !important;
  color: hsl(var(--foreground));
  font-family: system-ui, -apple-system, sans-serif;
}
.st-performance td,
.st-trades td {
  padding: 3px 8px;
  text-align: right;
  white-space: nowrap;
  border-bottom: 1px solid hsl(var(--border) / 0.25);
}
.st-section-row td {
  text-align: left !important;
  font-weight: 600;
  font-size: 14px;
  font-family: system-ui, -apple-system, sans-serif !important;
  color: hsl(var(--foreground));
  padding-top: 8px;
  padding-bottom: 4px;
  border-bottom: 1px solid hsl(var(--border));
}

/* ── Trades table ── */
.st-trades { overflow-x: auto; }
.st-trades table { min-width: 860px; table-layout: fixed; }
.st-center { text-align: center !important; }
.st-left { text-align: left !important; }
.st-group-odd td { background: hsl(var(--muted) / 0.35); }
.st-entry-row td { border-bottom: none; }
.st-span-cell { vertical-align: middle; border-bottom: 1px solid hsl(var(--border) / 0.4); }
.st-exit-row td { border-bottom: 1px solid hsl(var(--border) / 0.4); }
.st-open-row { opacity: 0.65; font-style: italic; }
.st-open-row td { border-bottom: 1px solid hsl(var(--border) / 0.4); }
/* Flash animation — box-shadow value is set per cell type via --flash-bs */
.st-entry-row.st-highlighted td,
.st-exit-row.st-highlighted td {
  animation: st-flash 1s steps(1) forwards;
}
/* Top line — all entry-row cells */
.st-entry-row.st-highlighted td              { --flash-bs: inset 0 1px 0 0 hsl(var(--foreground)); }
/* Top + left + bottom — first cell has rowspan=2, spans both rows */
.st-entry-row.st-highlighted td:first-child  { --flash-bs: inset 0 1px 0 0 hsl(var(--foreground)), inset 1px 0 0 0 hsl(var(--foreground)), inset 0 -1px 0 0 hsl(var(--foreground)); }
/* Top + bottom — span cells have rowspan=2 */
.st-entry-row.st-highlighted td.st-span-cell { --flash-bs: inset 0 1px 0 0 hsl(var(--foreground)), inset 0 -1px 0 0 hsl(var(--foreground)); }
/* Top + right + bottom — last cell has rowspan=2 */
.st-entry-row.st-highlighted td:last-child   { --flash-bs: inset 0 1px 0 0 hsl(var(--foreground)), inset -1px 0 0 0 hsl(var(--foreground)), inset 0 -1px 0 0 hsl(var(--foreground)); }
/* Bottom line — exit-row cells (cols 2-6, between the rowspan cells) */
.st-exit-row.st-highlighted td               { --flash-bs: inset 0 -1px 0 0 hsl(var(--foreground)); }
@keyframes st-flash {
  0%, 34%, 67% { box-shadow: var(--flash-bs); }
  17%, 50%, 84%, 100% { box-shadow: none; }
}
.st-signal-link {
  cursor: pointer;
  text-decoration: underline;
  text-decoration-style: dotted;
  text-underline-offset: 2px;
  color: hsl(var(--foreground));
  transition: color 0.15s;
}
.st-signal-link:hover {
  color: hsl(var(--primary));
}
.st-no-trades {
  text-align: center;
  padding: 24px;
  color: hsl(var(--muted-foreground));
}
.st-spacer {
  padding: 0 !important;
  border: none !important;
}

/* Export button */
.st-export-th {
  text-align: center !important;
  padding: 2px 4px !important;
}
.st-export-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 1px solid hsl(var(--border));
  border-radius: 3px;
  padding: 2px 4px;
  cursor: pointer;
  color: hsl(var(--muted-foreground));
  transition: color 0.15s, border-color 0.15s;
}
.st-export-btn:hover {
  color: hsl(var(--foreground));
  border-color: hsl(var(--foreground) / 0.5);
}

/* ── Monthly / MAE/MFE tabs ── */
.st-tab-scroll {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: auto;
  padding: 10px 12px;
}
.st-tab-fill {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  padding: 10px 12px;
}

/* Monthly heatmap */
.hm-wrap {
  overflow-x: auto;
}
.hm-table {
  border-collapse: separate;
  border-spacing: 2px;
  font-size: 10px;
  font-family: ui-monospace, monospace;
  min-width: 600px;
}
.hm-table th {
  text-align: center;
  padding: 2px 4px;
  color: hsl(var(--muted-foreground));
  font-weight: 500;
  white-space: nowrap;
  min-width: 44px;
}
.hm-table td {
  text-align: center;
  padding: 3px 4px;
  border-radius: 3px;
  white-space: nowrap;
  min-width: 44px;
}
.hm-year-col {
  text-align: left !important;
  padding-right: 8px !important;
  color: hsl(var(--muted-foreground));
  font-weight: 600;
  min-width: 36px !important;
}
.hm-profit { color: #16a34a; }
.hm-loss { color: #dc2626; }
.hm-na { color: hsl(var(--muted-foreground)); }
.hm-year-total { font-weight: 600; }

/* MAE/MFE scatter */
.st-mf-wrap {
  flex: 1;
  min-height: 0;
  cursor: crosshair;
}
.st-mf-wrap canvas {
  display: block;
  width: 100%;
  height: 100%;
}

/* ── Info icon & tooltip ── */
.st-info {
  display: inline-flex;
  align-items: center;
  margin-left: 3px;
  color: hsl(var(--muted-foreground));
  cursor: help;
  vertical-align: middle;
  line-height: 1;
  user-select: none;
}
.st-info svg {
  width: 12px;
  height: 12px;
}
.st-info:hover { color: hsl(var(--foreground)); }
</style>

<style>
/* Tooltip lives outside scoped — rendered via Teleport to body */
.st-tooltip-portal {
  position: fixed;
  transform: translate(-50%, calc(-100% - 8px));
  z-index: 9999;
  max-width: 240px;
  padding: 7px 10px;
  background: hsl(var(--popover, 0 0% 100%));
  color: hsl(var(--popover-foreground, 0 0% 10%));
  border: 1px solid hsl(var(--border, 0 0% 80%));
  border-radius: 5px;
  font-size: 11px;
  font-family: system-ui, -apple-system, sans-serif;
  line-height: 1.45;
  white-space: normal;
  pointer-events: none;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);
}
</style>
