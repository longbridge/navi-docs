/**
 * Navi syntax highlighting for Monaco Editor (Monarch tokenizer).
 */

import type { languages } from 'monaco-editor'

const naviKeywords = [
  'if', 'else', 'for', 'by', 'while', 'in', 'to', 'and', 'or', 'not',
  'switch', 'type', 'continue', 'break', 'export', 'enum', 'as',
  'method', 'property', 'staticmethod', 'staticproperty', 'void', 'true', 'false', 'varip', 'var',
  'series', 'input', 'simple', 'const', 'na',
  'let', 'fn', 'struct', 'use', 'operator',
]

const declaration = ['indicator', 'strategy', 'library']

const types = [
  'int', 'float', 'bool', 'string', 'color', 'line', 'linefill', 'box',
  'polyline', 'label', 'table', 'tablecell', 'array', 'matrix', 'map',
  'chart', 'hline', 'location', 'size', 'textalign', 'textstyle', 'font',
  'shape', 'xloc', 'yloc', 'syminfo', 'timeframe', 'request', 'order',
  'position', 'direction',
]

const namespaces = [
  'ta', 'math', 'str', 'array', 'matrix', 'map', 'plot', 'color', 'input',
  'barstate', 'syminfo', 'timeframe', 'strategy', 'request', 'runtime',
  'chart', 'hline', 'label', 'line', 'linefill', 'box', 'polyline', 'table',
  'display', 'session', 'time', 'dayofweek', 'format', 'font', 'text',
  'location', 'size', 'shape', 'extend', 'xloc', 'yloc', 'barmerge',
]

const baseTokenizerRules: languages.IMonarchLanguageRule[] = [
  [/\/\/@\w+/, 'comment.doc'],
  [/\/\/#(region|endregion)\b/, 'comment.doc'],
  [/\/\/.*$/, 'comment'],
  [/"([^"\\]|\\.)*"/, 'string'],
  [/'([^'\\]|\\.)*'/, 'string'],
  [/#[0-9a-fA-F]{6,8}\b/, 'number.hex'],
  [/\b\d+\.\d+\b/, 'number.float'],
  [/\b\d+\b/, 'number'],
  [/=>|:=|\.\.\./, 'operator'],
  [/[=<>]=?|!=/, 'operator'],
  [/[+\-*\/%]/, 'operator'],
  [/[\[\](){}.,:;?]/, 'delimiter'],
  [/\./, 'delimiter'],
  [
    /\b([a-zA-Z_][a-zA-Z0-9_]*)\b/,
    {
      cases: {
        '@keywords': 'keyword',
        '@types': 'type',
        '@namespaces': 'support.class',
        '@default': 'identifier',
      },
    },
  ],
]

export const naviLanguageConfiguration: languages.LanguageConfiguration = {
  comments: {
    lineComment: '//',
  },
  brackets: [
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
  ],
  autoClosingPairs: [
    { open: '(', close: ')' },
    { open: '[', close: ']' },
    { open: '{', close: '}' },
    { open: '"', close: '"' },
    { open: "'", close: "'" },
  ],
  surroundingPairs: [
    { open: '(', close: ')' },
    { open: '[', close: ']' },
    { open: '{', close: '}' },
    { open: '"', close: '"' },
    { open: "'", close: "'" },
  ],
  folding: {
    markers: {
      start: /^\s*\/\/#region\b/,
      end: /^\s*\/\/#endregion\b/,
    },
  },
  indentationRules: {
    increaseIndentPattern: /^\s*(if|else|for|while|switch|=>)\b/,
    decreaseIndentPattern: /^\s*[}\]]/,
  },
}

export const NAVI_LANG_ID = 'navi'

const naviMonarchLanguage: languages.IMonarchLanguage = {
  defaultToken: '',
  ignoreCase: false,
  keywords: [...naviKeywords, ...declaration],
  types,
  namespaces,
  tokenizer: {
    root: [
      // use line: `use foo/bar/1 as f;`
      [/^(\s*use\s+)([^;]+)/, ['keyword', 'constant.other.reference.link']],
      ...baseTokenizerRules,
    ],
  },
}

export function registerNaviLanguage(monaco: typeof import('monaco-editor')) {
  monaco.languages.register({ id: NAVI_LANG_ID, extensions: ['.nv'] })
  monaco.languages.setMonarchTokensProvider(NAVI_LANG_ID, naviMonarchLanguage)
  monaco.languages.setLanguageConfiguration(NAVI_LANG_ID, naviLanguageConfiguration)
}
