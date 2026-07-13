'use client';

import { useEffect, useRef } from 'react';
import type { PlaygroundEngine } from '@/lib/playground-engine';
import { NAVI_LANGUAGE_ID, registerNaviLanguage } from '@/lib/navi-language';

export interface EditorDiagnostic {
  severity: string;
  message: string;
  range: { start: { line: number; character: number }; end?: { line: number; character: number } };
  filePath?: string;
}

export function NaviEditor({ source, diagnostics, engine, onChange }: { source: string; diagnostics: EditorDiagnostic[]; engine: PlaygroundEngine | null; onChange(value: string): void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<import('monaco-editor').editor.IStandaloneCodeEditor | null>(null);
  const monacoRef = useRef<typeof import('monaco-editor') | null>(null);
  const engineRef = useRef(engine);
  const changeRef = useRef(onChange);
  useEffect(() => { engineRef.current = engine; }, [engine]);
  useEffect(() => { changeRef.current = onChange; }, [onChange]);

  useEffect(() => {
    let disposed = false;
    const subscriptions: import('monaco-editor').IDisposable[] = [];
    let themeObserver: MutationObserver | undefined;
    async function mount() {
      const monaco = await import('monaco-editor');
      if (disposed || !containerRef.current) return;
      monacoRef.current = monaco;
      self.MonacoEnvironment = { getWorker: () => new Worker(new URL('monaco-editor/esm/vs/editor/editor.worker.js', import.meta.url), { type: 'module' }) };
      registerNaviLanguage(monaco);
      const editor = monaco.editor.create(containerRef.current, {
        value: source, language: NAVI_LANGUAGE_ID,
        theme: document.documentElement.classList.contains('dark') ? 'vs-dark' : 'vs',
        minimap: { enabled: false }, automaticLayout: true, fontSize: 13, lineHeight: 22,
        wordWrap: 'on', scrollBeyondLastLine: false, fixedOverflowWidgets: true,
        padding: { top: 8 }, renderValidationDecorations: 'on', tabSize: 4,
      });
      editorRef.current = editor;
      themeObserver = new MutationObserver(() => monaco.editor.setTheme(document.documentElement.classList.contains('dark') ? 'vs-dark' : 'vs'));
      themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
      subscriptions.push(editor.onDidChangeModelContent(() => changeRef.current(editor.getValue())));

      const sync = (model: import('monaco-editor').editor.ITextModel) => engineRef.current?.analyzer.analyze('script.nv', model.getValue());
      subscriptions.push(monaco.languages.registerCompletionItemProvider(NAVI_LANGUAGE_ID, {
        triggerCharacters: ['.'],
        provideCompletionItems(model, position) {
          const analyzer = engineRef.current?.analyzer; if (!analyzer) return { suggestions: [] };
          sync(model);
          const items = analyzer.completionsAt(position.lineNumber - 1, position.column - 1) as any[] | null;
          const word = model.getWordUntilPosition(position);
          return { suggestions: (items ?? []).map((item) => ({ label: item.label, kind: completionKind(monaco, item.kind), detail: item.detail, insertText: item.insertText ?? item.label, sortText: item.sortText, range: { startLineNumber: position.lineNumber, endLineNumber: position.lineNumber, startColumn: word.startColumn, endColumn: word.endColumn } })) };
        },
      }));
      subscriptions.push(monaco.languages.registerHoverProvider(NAVI_LANGUAGE_ID, {
        provideHover(model, position) {
          const analyzer = engineRef.current?.analyzer; if (!analyzer) return null; sync(model);
          const result = analyzer.hoverAt(position.lineNumber - 1, position.column - 1, 'Open definition for details') as any;
          return result ? { contents: [{ value: result.contents, isTrusted: true }] } : null;
        },
      }));
      subscriptions.push(monaco.languages.registerSignatureHelpProvider(NAVI_LANGUAGE_ID, {
        signatureHelpTriggerCharacters: ['(', ','],
        provideSignatureHelp(model, position) {
          const analyzer = engineRef.current?.analyzer; if (!analyzer) return null; sync(model);
          const result = analyzer.signatureHelpAt(position.lineNumber - 1, position.column - 1) as any[] | null;
          if (!result?.length) return null;
          return { value: { signatures: result.map((signature) => ({ label: signature.label, documentation: signature.documentation, parameters: signature.parameters.map((parameter: any) => ({ label: parameter.labelOffsets ?? parameter.label, documentation: parameter.documentation })) })), activeSignature: 0, activeParameter: result[0].activeParameter }, dispose() {} };
        },
      }));
    }
    void mount();
    return () => { disposed = true; themeObserver?.disconnect(); subscriptions.forEach((item) => item.dispose()); editorRef.current?.dispose(); editorRef.current = null; };
  }, []);

  useEffect(() => {
    const editor = editorRef.current;
    if (editor && editor.getValue() !== source) editor.setValue(source);
  }, [source]);

  useEffect(() => {
    const monaco = monacoRef.current; const model = editorRef.current?.getModel(); if (!monaco || !model) return;
    monaco.editor.setModelMarkers(model, 'navi', diagnostics.filter((item) => !item.filePath || item.filePath === 'script.nv').map((item) => ({
      severity: item.severity === 'error' ? monaco.MarkerSeverity.Error : item.severity === 'warning' ? monaco.MarkerSeverity.Warning : monaco.MarkerSeverity.Info,
      message: item.message, startLineNumber: item.range.start.line + 1, startColumn: item.range.start.character + 1,
      endLineNumber: (item.range.end?.line ?? item.range.start.line) + 1, endColumn: (item.range.end?.character ?? item.range.start.character + 1) + 1,
    })));
  }, [diagnostics]);

  return <div className="size-full" ref={containerRef} />;
}

function completionKind(monaco: typeof import('monaco-editor'), kind: string) {
  const map: Record<string, import('monaco-editor').languages.CompletionItemKind> = { function: monaco.languages.CompletionItemKind.Function, method: monaco.languages.CompletionItemKind.Method, variable: monaco.languages.CompletionItemKind.Variable, field: monaco.languages.CompletionItemKind.Field, property: monaco.languages.CompletionItemKind.Property, constant: monaco.languages.CompletionItemKind.Constant, module: monaco.languages.CompletionItemKind.Module, keyword: monaco.languages.CompletionItemKind.Keyword, enum: monaco.languages.CompletionItemKind.Enum, enumMember: monaco.languages.CompletionItemKind.EnumMember, struct: monaco.languages.CompletionItemKind.Struct };
  return map[kind] ?? monaco.languages.CompletionItemKind.Text;
}
