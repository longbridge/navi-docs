import type { languages } from 'monaco-editor';

export const NAVI_LANGUAGE_ID = 'navi';

const keywords = ['if','else','for','by','while','in','to','and','or','not','switch','type','continue','break','export','enum','as','method','property','staticmethod','staticproperty','void','true','false','varip','var','series','input','simple','const','na','let','fn','struct','use','operator','indicator','strategy','library'];
const types = ['int','float','bool','string','color','line','linefill','box','polyline','label','table','tablecell','array','matrix','map','chart','hline','location','size','textalign','textstyle','font','shape','xloc','yloc','order','position','direction'];
const namespaces = ['ta','math','str','array','matrix','map','plot','color','input','barstate','syminfo','timeframe','strategy','request','runtime','chart','hline','label','line','linefill','box','polyline','table','display','session','time','dayofweek','format','font','text','location','size','shape','extend','xloc','yloc','barmerge'];

export function registerNaviLanguage(monaco: typeof import('monaco-editor')) {
  if (monaco.languages.getLanguages().some((language) => language.id === NAVI_LANGUAGE_ID)) return;
  monaco.languages.register({ id: NAVI_LANGUAGE_ID, extensions: ['.nv', '.pine'] });
  monaco.languages.setMonarchTokensProvider(NAVI_LANGUAGE_ID, {
    keywords, types, namespaces,
    tokenizer: { root: [
      [/^([ \t]*use\s+)([^;]+)/, ['keyword', 'constant.other.reference.link']],
      [/\/\/@\w+|\/\/#(?:region|endregion)\b/, 'comment.doc'], [/\/\/.*$/, 'comment'],
      [/"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/, 'string'], [/#[0-9a-fA-F]{6,8}\b/, 'number.hex'],
      [/\b\d+\.\d+\b/, 'number.float'], [/\b\d+\b/, 'number'], [/=>|:=|\.\.\.|[=<>]=?|!=|[+\-*\/%]/, 'operator'],
      [/[\[\](){}.,:;?]/, 'delimiter'], [/\b([a-zA-Z_][a-zA-Z0-9_]*)\b/, { cases: { '@keywords': 'keyword', '@types': 'type', '@namespaces': 'support.class', '@default': 'identifier' } }],
    ] },
  });
  monaco.languages.setLanguageConfiguration(NAVI_LANGUAGE_ID, {
    comments: { lineComment: '//' }, brackets: [['(',')'],['[',']'],['{','}']],
    autoClosingPairs: [{open:'(',close:')'},{open:'[',close:']'},{open:'{',close:'}'},{open:'"',close:'"'},{open:"'",close:"'"}],
    folding: { markers: { start: /^\s*\/\/#region\b/, end: /^\s*\/\/#endregion\b/ } },
  } satisfies languages.LanguageConfiguration);
}
