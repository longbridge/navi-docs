import { readFile } from 'node:fs/promises'
import vm from 'node:vm'
import ts from 'typescript'

const source = await readFile('.vitepress/theme/monarch.ts', 'utf8')
const { outputText } = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES2022,
  },
  fileName: 'monarch.ts',
})

vm.runInNewContext(outputText, { exports: {} }, { filename: 'monarch.js' })
console.log('Checked Monaco tokenizer module initialization')
