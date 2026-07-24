/**
 * Navi syntax highlighting for Monaco Editor (Monarch tokenizer).
 */

import type { languages } from 'monaco-editor'

const naviKeywords = [
  'if', 'else', 'for', 'by', 'while', 'in', 'to', 'and', 'or', 'not',
  'switch', 'type', 'continue', 'break', 'export', 'enum', 'as',
  'method', 'property', 'staticmethod', 'staticproperty', 'void', 'varip', 'var',
  'series', 'input', 'simple', 'const',
  'let', 'fn', 'struct', 'use', 'operator',
]

const booleans = ['true', 'false']
const constants = ['na']

const types = [
  'int', 'float', 'bool', 'string', 'color', 'line', 'linefill', 'box',
  'polyline', 'label', 'table', 'tablecell', 'array', 'matrix', 'map',
  'chart', 'hline', 'location', 'size', 'textalign', 'textstyle', 'font',
  'shape', 'xloc', 'yloc', 'syminfo', 'timeframe', 'request', 'order',
  'position', 'direction',
]

// Public stdlib modules from navi-script. Only these receive the built-in
// namespace color; ordinary user values followed by `.` remain identifiers.
const builtinNamespaces = [
  'bar_state', 'chart', 'input', 'log', 'math', 'request', 'runtime', 'session',
  'strategy', 'symbol_info', 'ta', 'timeframe',
]

const baseTokenizerRules: languages.IMonarchLanguageRule[] = [
  [/\/\/\s*@\w+.*$/, 'comment.doc'],
  [/\/\/#(region|endregion)\b/, 'comment.doc'],
  [/\/\/.*$/, 'comment'],
  [/@[a-zA-Z_][a-zA-Z0-9_]*/, 'annotation'],
  [/"([^"\\]|\\.)*"/, 'string'],
  [/'([^'\\]|\\.)*'/, 'string'],
  [/#[0-9a-fA-F]{6,8}\b/, 'number.hex'],
  [/\b\d+\.\d+\b/, 'number.float'],
  [/\b\d+\b/, 'number'],
  [/=>|:=|\.\.\./, 'operator'],
  [/[=<>]=?|!=/, 'operator'],
  [/[+\-*\/%]/, 'operator'],
  [/\b([a-zA-Z_][a-zA-Z0-9_]*)(\s*)(:)(?!=)/, ['property', '', 'delimiter']],
  [/\b[A-Z][a-zA-Z0-9_]*(?=\s*\.)/, 'type'],
  [
    /\b([a-zA-Z_][a-zA-Z0-9_]*)(?=\s*\.)/,
    {
      cases: {
        '@builtinNamespaces': 'support.class',
        '@default': 'identifier',
      },
    },
  ],
  [/(\.)([A-Z][a-zA-Z0-9_]*)\b/, ['delimiter', 'constant']],
  [/[\[\](){}.,:;?]/, 'delimiter'],
  [/\./, 'delimiter'],
  [/\b([a-zA-Z_][a-zA-Z0-9_]*)(?=\s*\()/, 'function'],
  [/\b[A-Z][A-Z0-9_]*\b/, 'constant'],
  [/\b[A-Z][a-zA-Z0-9_]*\b/, 'type'],
  [
    /\b([a-zA-Z_][a-zA-Z0-9_]*)\b/,
    {
      cases: {
        '@keywords': 'keyword',
        '@booleans': 'boolean',
        '@constants': 'constant',
        '@types': 'type',
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
export const NAVI_LIGHT_THEME = 'navi-macos-classic-light'
export const NAVI_DARK_THEME = 'navi-macos-classic-dark'

const naviMonarchLanguage: languages.IMonarchLanguage = {
  defaultToken: '',
  ignoreCase: false,
  keywords: naviKeywords,
  booleans,
  constants,
  types,
  builtinNamespaces,
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
  monaco.editor.defineTheme(NAVI_DARK_THEME, {
    base: 'vs-dark',
    inherit: true,
    semanticHighlighting: true,
    rules: [
      { token: '', foreground: 'DFDFD6', background: '13182A' },
      { token: 'identifier', foreground: 'DFDFD6' },
      { token: 'keyword', foreground: '00D4B0' },
      { token: 'function', foreground: '82AAFF' },
      { token: 'type', foreground: 'B39DDB' },
      { token: 'support.class', foreground: 'DFDFD6' },
      { token: 'boolean', foreground: 'FF9728' },
      { token: 'constant', foreground: 'FF9728' },
      { token: 'number', foreground: '82B1FF' },
      { token: 'number.float', foreground: '82B1FF' },
      { token: 'number.hex', foreground: '82B1FF' },
      { token: 'string', foreground: '7ECA9C' },
      { token: 'comment', foreground: '5A8FA8' },
      { token: 'comment.doc', foreground: '5A8FA8' },
      { token: 'annotation', foreground: 'FFCB6B' },
      { token: 'constant.other.reference.link', foreground: '8892B0', fontStyle: 'italic' },
      { token: 'operator', foreground: 'A0A8B8' },
      { token: 'delimiter', foreground: 'A0A8B8' },
      { token: 'namespace', foreground: 'DFDFD6' },
      { token: 'enum', foreground: 'B39DDB' },
      { token: 'struct', foreground: 'B39DDB' },
      { token: 'typeParameter', foreground: 'B39DDB' },
      { token: 'parameter', foreground: 'DFDFD6' },
      { token: 'variable', foreground: 'DFDFD6' },
      { token: 'property', foreground: 'FFCB6B' },
      { token: 'enumMember', foreground: 'FF9728' },
      { token: 'method', foreground: '82AAFF' },
      { token: 'variable.readonly', foreground: 'FF9728' },
    ],
    colors: {
      'editor.background': '#13182A',
      'editor.foreground': '#DFDFD6',
      'editor.lineHighlightBackground': '#1A2035',
      'editor.lineHighlightBorder': '#00000000',
      'editorLineNumber.foreground': '#4A5272',
      'editorLineNumber.activeForeground': '#8892B0',
      'editorCursor.foreground': '#00F0C4',
      'editor.selectionBackground': '#2D4A6A',
      'editor.inactiveSelectionBackground': '#1E3050',
    },
  })
  monaco.editor.defineTheme(NAVI_LIGHT_THEME, {
    base: 'vs',
    inherit: true,
    semanticHighlighting: true,
    rules: [
      { token: '', foreground: '000000', background: 'FFFFFF' },
      { token: 'identifier', foreground: '000000' },
      { token: 'keyword', foreground: '0433FF' },
      { token: 'function', foreground: '0000A2' },
      { token: 'type', foreground: '6F42C1' },
      { token: 'support.class', foreground: '000000' },
      { token: 'boolean', foreground: 'C5060B' },
      { token: 'constant', foreground: 'C5060B' },
      { token: 'number', foreground: '0433FF' },
      { token: 'number.float', foreground: '0433FF' },
      { token: 'number.hex', foreground: '0433FF' },
      { token: 'string', foreground: '036A07' },
      { token: 'comment', foreground: '007FFF' },
      { token: 'comment.doc', foreground: '007FFF' },
      { token: 'annotation', foreground: '957931' },
      { token: 'constant.other.reference.link', foreground: '6A7293', fontStyle: 'italic' },
      { token: 'operator', foreground: '000000' },
      { token: 'delimiter', foreground: '000000' },
      { token: 'namespace', foreground: '000000' },
      { token: 'enum', foreground: '6F42C1' },
      { token: 'struct', foreground: '6F42C1' },
      { token: 'typeParameter', foreground: '6F42C1' },
      { token: 'parameter', foreground: '000000' },
      { token: 'variable', foreground: '000000' },
      { token: 'property', foreground: '957931' },
      { token: 'enumMember', foreground: 'C5060B' },
      { token: 'method', foreground: '0000A2' },
      { token: 'variable.readonly', foreground: 'C5060B' },
    ],
    colors: {
      'editor.background': '#FFFFFF',
      'editor.foreground': '#000000',
      'editor.lineHighlightBackground': '#F5F5F5',
      'editor.lineHighlightBorder': '#00000000',
      'editorLineNumber.foreground': '#929292',
      'editorLineNumber.activeForeground': '#000000',
      'editorCursor.foreground': '#0060DE',
      'editor.selectionBackground': '#9DDDFF',
      'editor.inactiveSelectionBackground': '#DFEDFF',
    },
  })
}
