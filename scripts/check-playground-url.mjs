import assert from 'node:assert/strict'
import { decodePlaygroundSource, encodePlaygroundSource } from '../.vitepress/theme/utils/playground-url.mjs'

const sources = [
  'indicator("SMA", overlay: true);\nplot(ta.sma(close, 14));\n',
  'indicator("价格 🚀");\nplot(close);\n',
  '',
]

for (const source of sources) {
  const encoded = encodePlaygroundSource(source)
  assert.match(encoded, /^[A-Za-z0-9_-]*$/)
  assert.equal(decodePlaygroundSource(`?code=${encoded}`), source)
}

const standardBase64 = btoa('plot(close);')
assert.equal(
  decodePlaygroundSource(`?code=${encodeURIComponent(standardBase64)}`),
  'plot(close);',
)
assert.equal(decodePlaygroundSource('?code=%%%'), null)
assert.equal(decodePlaygroundSource('?other=value'), null)
assert.equal(decodePlaygroundSource(`?code=${'a'.repeat(512 * 1024 + 1)}`), null)

console.log('Checked Playground Base64URL source links')
