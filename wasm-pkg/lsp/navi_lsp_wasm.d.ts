/* tslint:disable */
/* eslint-disable */
/**
 * Return the embedded stdlib documentation JSON for `locale`.
 *
 * Uses `serialize_maps_as_objects` so `HashMap` fields become plain JS
 * objects (iterable with `Object.entries()`) rather than JS `Map`s.
 */
export function stdlib_docs(locale: string): any;

/** The kind of a completion item, used to select an icon in the editor UI. */
export type CompletionItemKind =
  | "variable" | "function" | "property" | "method" | "field"
  | "keyword" | "constant" | "enum" | "enumMember"
  | "struct" | "module" | "snippet";

/** A single entry in a completion list. */
export interface CompletionItem {
  /** Text displayed in the completion menu. */
  label: string;
  /** Visual kind / icon selector. */
  kind: CompletionItemKind;
  /** Short detail shown next to the label (e.g. a type or signature). */
  detail?: string;
  /** Markdown documentation shown in the completion tooltip. */
  documentation?: string;
  /** Text inserted on commit; defaults to `label` when absent. */
  insertText?: string;
  /**
   * Format of `insertText`. `"Snippet"` means it contains `$0` /
   * `${1:placeholder}` tab-stops the editor should expand (rather than insert
   * literally). Defaults to plain text when absent.
   */
  insertTextFormat?: "PlainText" | "Snippet";
  /**
   * Editor command id to run right after this item is inserted, e.g.
   * `"editor.action.triggerParameterHints"` to pop up signature help after a
   * callable snippet.
   */
  command?: string;
  /** Sort key; defaults to `label`. */
  sortText?: string;
  /** Filter key used while typing; defaults to `label`. */
  filterText?: string;
}



/**
 * A code lens — an inline action badge rendered above a symbol definition.
 *
 * Typically displays "N references" and triggers a find-references command
 * when clicked.
 */
export interface CodeLens {
  /** Range of the definition that this lens annotates. */
  range: Range;
  /** Display text, e.g. `"3 references"`. */
  title: string;
  /** URI passed to the find-references command. */
  uri: string;
  /** Position passed to the find-references command. */
  position: Position;
}



/** Severity level of a diagnostic message. */
export type DiagnosticSeverity = "error" | "warning" | "information" | "hint";

/**
 * A diagnostic message (error, warning, or hint) attached to a range in the
 * source document.
 */
export interface Diagnostic {
  /** The range to which this diagnostic applies. */
  range: Range;
  /** Severity level. */
  severity: DiagnosticSeverity;
  /** Human-readable description of the problem. */
  message: string;
  /**
   * Source-file index (into `sourceFiles[]`) when the diagnostic originates
   * from a file other than the entry script (e.g. a stdlib module).
   * Omitted when the file is the entry script or unknown.
   */
  fileId?: number;
}



/** Distinguishes parameter-name hints from type-inference hints. */
export type InlayHintKind = "parameter" | "type";

/** An inline hint to display inside the editor (Monaco `IInlayHint`). */
export interface InlayHint {
  /** Position where the hint should be rendered (before the token). */
  position: Position;
  /** Label text, e.g. `"source:"` or `": float"`. */
  label: string;
  /** Hint kind. */
  kind: InlayHintKind;
}



/** A source file loaded as part of the analysis (entry script, prelude, or stdlib). */
export interface SourceFileInfo {
  /**
   * File path / URI.
   *
   * - Entry script: the URI passed to `analyze(uri, source)`.
   * - Prelude files: `"navi:///prelude/<name>.pine"`.
   * - Stdlib files: `"navi:///stdlib/<name>.<order>.pine"`.
   */
  path: string;
  /** Full source text of the file. */
  source: string;
}



/** The syntactic role of a symbol definition. */
export type DefinitionKind =
  | "variable"
  | "function"
  | "property"
  | "method"
  | "staticMethod"
  | "parameter"
  | "object"
  | "enum"
  | "enumVariant"
  | "objectField"
  | "import";

/**
 * Resolved identity of a symbol at the cursor position.
 *
 * Use `module` to distinguish stdlib/prelude symbols (open docs) from
 * user-defined symbols (jump to source).
 */
export interface ResolvedSymbol {
  /** Symbol name, e.g. `"sma"`, `"plot"`, `"myVar"`. */
  name: string;
  /** Syntactic role of the symbol. */
  kind: DefinitionKind;
  /**
   * Module name for stdlib/prelude symbols (`"ta"`, `"math"`, `"str"`, …),
   * or `null` for user-defined symbols.
   */
  module: string | null;
  /**
   * Parent symbol name. Set for `enumVariant` (the enum type name) and
   * `objectField` (the struct/object type name). `null` otherwise.
   */
  parent: string | null;
  /** Location of the symbol's definition. */
  location: Location;
}

/** LSP symbol kind used in document and workspace symbol lists. */
export type SymbolKind =
  | "file" | "module" | "namespace" | "package" | "class"
  | "method" | "property" | "field" | "constructor"
  | "enum" | "interface" | "function" | "variable" | "constant"
  | "string" | "number" | "boolean" | "array" | "object"
  | "key" | "null" | "enumMember" | "struct" | "event"
  | "operator" | "typeParameter";

/** A symbol entry in a hierarchical document-symbol tree. */
export interface DocumentSymbol {
  /** Symbol name. */
  name: string;
  /** Extra detail, e.g. a function signature. */
  detail?: string;
  /** LSP symbol kind. */
  kind: SymbolKind;
  /** Full range of the symbol including its body. */
  range: Range;
  /** Narrow range that should be selected when navigating to this symbol. */
  selectionRange: Range;
  /** Nested symbols (e.g. methods inside a type declaration). */
  children: DocumentSymbol[];
}

/** A symbol entry returned by a workspace-wide symbol search. */
export interface WorkspaceSymbol {
  /** Symbol name. */
  name: string;
  /** LSP symbol kind. */
  kind: SymbolKind;
  /** URI of the file that defines this symbol. */
  uri: string;
  /** Range of the definition. */
  range: Range;
}



/** A 0-based position within a text document. */
export interface Position {
  /** 0-based line number. */
  line: number;
  /**
   * 0-based character offset within the line, counted in UTF-16 code units
   * (matching the Monaco Editor / LSP convention).
   */
  character: number;
}

/** A half-open `[start, end)` range within a text document. */
export interface Range {
  /** Start position (inclusive). */
  start: Position;
  /** End position (exclusive). */
  end: Position;
}

/** A location (URI + range) within a text document. */
export interface Location {
  /** Document URI, e.g. `"file:///path/to/script.pine"`. */
  uri: string;
  /** The range within the document. */
  range: Range;
}



/** Documentation for a single function parameter. */
export interface ParameterInfo {
  /** Parameter name (e.g. `"source"`). */
  label: string;
  /** Type name, if known (e.g. `"series float"`). */
  typeName?: string;
  /** Parameter-level documentation. */
  documentation?: string;
  /**
   * `[start, end)` byte offsets within the parent `SignatureInfo.label` string
   * for precise parameter highlighting in the editor.
   */
  labelOffsets?: [number, number];
}

/** Signature information for one overload of a function call. */
export interface SignatureInfo {
  /** Full signature text, e.g. `"sma(series float source, int length) → series float"`. */
  label: string;
  /** Parameter list in the same order as they appear in the signature. */
  parameters: ParameterInfo[];
  /** 0-based index of the parameter the cursor is currently editing. */
  activeParameter: number;
  /** Markdown documentation for this overload. */
  documentation?: string;
}



/** Hover card content returned for the symbol under the cursor. */
export interface HoverResult {
  /** Markdown-formatted hover text. */
  contents: string;
  /** Range of the hovered token, if known. */
  range?: Range;
}



/** An RGBA color with components in the range `[0.0, 1.0]`. */
export interface Color {
  red: number;
  green: number;
  blue: number;
  alpha: number;
}

/** A color literal found in the document, with its source range. */
export interface DocumentColor {
  /** Range of the color literal in the source (e.g. `#FF0000`). */
  range: Range;
  /** The parsed color value. */
  color: Color;
}



/** A collapsible region in the document (e.g. a function body). */
export interface FoldingRange {
  /** 0-based start line. */
  startLine: number;
  /** 0-based end line. */
  endLine: number;
}



/** A callable symbol node in the call hierarchy tree. */
export interface CallHierarchyItem {
  /** Symbol name. */
  name: string;
  /** LSP symbol kind. */
  kind: SymbolKind;
  /** URI of the file containing this symbol. */
  uri: string;
  /** Full range of the symbol (including its body). */
  range: Range;
  /** Narrow range to select (typically just the name). */
  selectionRange: Range;
  /** Optional detail (e.g. function signature). */
  detail?: string;
}

/** An incoming call: a function that calls the query symbol. */
export interface CallHierarchyIncomingCall {
  /** The calling function. */
  from: CallHierarchyItem;
  /**
   * Ranges within `from` where the query symbol is called.
   * Multiple entries when the same caller calls the symbol more than once.
   */
  fromRanges: Range[];
}

/** An outgoing call: a function that the query symbol calls. */
export interface CallHierarchyOutgoingCall {
  /** The called function. */
  to: CallHierarchyItem;
  /**
   * Ranges within the query symbol where `to` is called.
   * Multiple entries when `to` is called more than once.
   */
  fromRanges: Range[];
}



/** Whether the highlighted occurrence is a read or a write. */
export type DocumentHighlightKind = "read" | "write";

/** A highlighted range for one occurrence of the symbol under the cursor. */
export interface DocumentHighlight {
  /** Range to highlight. */
  range: Range;
  /** Occurrence kind. */
  kind: DocumentHighlightKind;
}



/** Result of a prepare-rename check — confirms the symbol is renameable. */
export interface PrepareRenameResult {
  /** The range of the symbol that will be renamed. */
  range: Range;
  /** Current name of the symbol (suggested placeholder in the rename box). */
  placeholder: string;
}

/** A single text replacement that must be applied as part of a rename. */
export interface RenameEdit {
  /** URI of the file containing the edit. */
  uri: string;
  /** Range to replace. */
  range: Range;
  /** Replacement text (the new name). */
  newText: string;
}



/**
 * Semantic token type names, in legend order (index = type ID used in the
 * encoded token stream).
 *
 * Matches the LSP `SemanticTokensLegend.tokenTypes` array.
 */
export type SemanticTokenType =
  | "namespace" | "type" | "enum" | "struct" | "typeParameter"
  | "parameter" | "variable" | "property" | "enumMember"
  | "function" | "method" | "keyword" | "comment"
  | "string" | "number" | "operator";

/**
 * Semantic token modifier names, in legend order (bit index = modifier ID).
 *
 * Matches the LSP `SemanticTokensLegend.tokenModifiers` array.
 */
export type SemanticTokenModifier =
  | "declaration" | "definition" | "readonly" | "static"
  | "deprecated" | "defaultLibrary";


/**
 * Navi LSP analyzer exposed to JavaScript.
 *
 * Create an instance with `new Analyzer()`, call [`analyze`] on every source
 * change, then query capabilities such as [`completionsAt`], [`hoverAt`],
 * [`definitionAt`], and so on.
 *
 * All capability methods return `null` before the first [`analyze`] call.
 *
 * # Example
 *
 * ```js
 * import init, { Analyzer } from "navi-lsp-wasm";
 * await init();
 *
 * const lsp = new Analyzer();
 * const diagnostics = lsp.analyze("script.pine", source);
 * const hover = lsp.hoverAt(3, 10, null);
 * ```
 *
 * [`analyze`]: Analyzer#analyze
 * [`completionsAt`]: Analyzer#completionsAt
 * [`hoverAt`]: Analyzer#hoverAt
 * [`definitionAt`]: Analyzer#definitionAt
 */
export class Analyzer {
  free(): void;
  [Symbol.dispose](): void;
  /**
   * Change the locale for diagnostic messages and hover text.
   *
   * The new locale takes effect on the next [`analyze`] call. The cached
   * result is cleared so that stale diagnostics from the old locale are not
   * returned.
   *
   * [`analyze`]: Analyzer#analyze
   */
  setLocale(locale: string): void;
  /**
   * Return code lens items for the entry document.
   *
   * Each lens annotates a definition with a "N references" badge that
   * triggers a find-references command.
   *
   * @param uri - The document URI (should match the URI passed to
   * `analyze`). @returns `CodeLens[]`, or `null` before `analyze` is
   * called.
   */
  codeLenses(uri: string): any;
  /**
   * Return the diagnostics from the last `analyze` call.
   *
   * Equivalent to capturing the return value of `analyze`, but available
   * as a separate getter for convenience.
   *
   * @returns `Diagnostic[]`, or `null` before the first `analyze` call.
   */
  diagnostics(): any;
  /**
   * Return inlay hints within the given range.
   *
   * Use this to request hints for the visible viewport only, reducing
   * the work done on each editor scroll.
   *
   * @param startLine - 0-based start line (inclusive).
   * @param startCharacter - 0-based start character (inclusive).
   * @param endLine - 0-based end line (exclusive).
   * @param endCharacter - 0-based end character (exclusive).
   * @returns `InlayHint[]`, or `null` before `analyze` is called.
   */
  inlayHints(start_line: number, start_character: number, end_line: number, end_character: number): any;
  /**
   * Create a new analyzer with the specified locale.
   *
   * The locale controls the language of diagnostic messages and hover text.
   * Supported values: `"en"` (default), `"zh-CN"`, `"zh-HK"`.
   *
   * # Example
   * ```js
   * const lsp = Analyzer.withLocale("zh-CN");
   * ```
   */
  static withLocale(locale: string): Analyzer;
  /**
   * Return all source files loaded as part of the last analysis.
   *
   * The array starts with the entry script (index 0) followed by prelude
   * and stdlib modules. The array index is the `fileId` used in
   * `Diagnostic.fileId`.
   *
   * @returns `SourceFileInfo[]`, or `null` before `analyze` is called.
   */
  sourceFiles(): any;
  /**
   * Return the definition location for the symbol at the given position.
   *
   * @param line - 0-based line number.
   * @param character - 0-based UTF-16 character offset.
   * @returns `Location | null`
   */
  definitionAt(line: number, character: number): any;
  /**
   * Return document highlights for all occurrences of the symbol under the
   * cursor.
   *
   * Distinguishes read accesses (`"read"`) from write accesses (`"write"`).
   *
   * @param line - 0-based line number.
   * @param character - 0-based UTF-16 character offset.
   * @returns `DocumentHighlight[]`, or `null` before `analyze` is called.
   */
  highlightsAt(line: number, character: number): any;
  /**
   * Return all references to the symbol at the given position.
   *
   * @param line - 0-based line number.
   * @param character - 0-based UTF-16 character offset.
   * @param includeDeclaration - When `true`, the definition site is
   *   included in the result alongside uses.
   * @returns `Location[]`, or `null` before `analyze` is called.
   */
  referencesAt(line: number, character: number, include_declaration: boolean): any;
  /**
   * Return completion items at the given (line, character) position.
   *
   * Provides user-defined symbols, keywords, and type-aware member
   * completions after `.`.
   *
   * @param line - 0-based line number.
   * @param character - 0-based UTF-16 character offset.
   * @returns `CompletionItem[]`, or `null` before `analyze` is called.
   */
  completionsAt(line: number, character: number): any;
  /**
   * Return folding ranges for the entry document.
   *
   * Currently covers function bodies. Editors use these to render collapse
   * arrows in the gutter.
   *
   * @returns `FoldingRange[]`, or `null` before `analyze` is called.
   */
  foldingRanges(): any;
  /**
   * Return all inlay hints for the entry document.
   *
   * Includes both parameter-name hints (at call sites) and inferred-type
   * hints (for variable declarations without explicit annotations).
   *
   * @returns `InlayHint[]`, or `null` before `analyze` is called.
   */
  allInlayHints(): any;
  /**
   * Return all color literals found in the entry document.
   *
   * Use this to render color swatches in the editor gutter or to open a
   * color-picker widget.
   *
   * @returns `DocumentColor[]`, or `null` before `analyze` is called.
   */
  documentColors(): any;
  /**
   * Return the encoded semantic token stream for the entry document.
   *
   * The result is a flat array of `u32` values where every consecutive
   * group of 5 encodes one token:
   * `[deltaLine, deltaStartChar, length, tokenType, tokenModifiers]`.
   *
   * This is the format expected by the LSP
   * `textDocument/semanticTokens/full` response and by Monaco Editor's
   * `DocumentSemanticTokensProvider`.
   *
   * Token type and modifier indices correspond to the legend arrays
   * `SemanticTokenType` and `SemanticTokenModifier` defined in this module.
   *
   * @returns `number[]` — empty array before `analyze` is called.
   */
  semanticTokens(): any;
  /**
   * Return the hierarchical symbol tree for the entry document.
   *
   * Suitable for populating an "Outline" panel. Includes functions, types,
   * enums, and their members as nested `DocumentSymbol` nodes.
   *
   * @returns `DocumentSymbol[]`, or `null` before `analyze` is called.
   */
  documentSymbols(): any;
  /**
   * Return the source content of a builtin file (stdlib or prelude).
   *
   * Pass a `navi:///stdlib/...` or `navi:///prelude/...` URI as returned by
   * [`definitionAt`]. Used by the playground to populate Monaco models for
   * peek-definition of stdlib symbols.
   *
   * @param uri - A canonical `navi:///` URI.
   * @returns The file source as a string, or `null` if the URI is unknown.
   *
   * [`definitionAt`]: Analyzer#definitionAt
   */
  getFileContent(uri: string): string | undefined;
  /**
   * Check whether the symbol at the given position can be renamed.
   *
   * Returns the symbol's current range and name when a rename is possible,
   * so the editor can pre-fill the rename input box.
   *
   * @param line - 0-based line number.
   * @param character - 0-based UTF-16 character offset.
   * @returns `PrepareRenameResult | null`
   */
  prepareRenameAt(line: number, character: number): any;
  /**
   * Resolve the symbol at the given position, returning its name, kind, and
   * origin module.
   *
   * Use the `module` field to distinguish stdlib symbols (show docs) from
   * user-defined symbols (jump to source).
   *
   * @param line - 0-based line number.
   * @param character - 0-based UTF-16 character offset.
   * @returns `ResolvedSymbol | null`
   */
  resolveSymbolAt(line: number, character: number): any;
  /**
   * Return signature help for the function call at the given position.
   *
   * Only returns a non-null value when the cursor is inside a
   * function-call's argument list.
   *
   * @param line - 0-based line number.
   * @param character - 0-based UTF-16 character offset.
   * @returns `SignatureInfo[]` (one entry per overload), or `null` when
   *   the cursor is not in a call argument list.
   */
  signatureHelpAt(line: number, character: number): any;
  /**
   * Return symbols matching `query` across all loaded files.
   *
   * An empty `query` returns all top-level symbols. Otherwise, symbols
   * whose names contain `query` (case-insensitive) are returned.
   *
   * @param query - Search string (empty → all symbols).
   * @returns `WorkspaceSymbol[]`, or `null` before `analyze` is called.
   */
  workspaceSymbols(query: string): any;
  /**
   * Return all functions that call the given `CallHierarchyItem`.
   *
   * Pass the object returned by [`prepareCallHierarchyAt`] as `item`.
   *
   * @param item - A `CallHierarchyItem` from `prepareCallHierarchyAt`.
   * @returns `CallHierarchyIncomingCall[]`, or `null` on error.
   *
   * [`prepareCallHierarchyAt`]: Analyzer#prepareCallHierarchyAt
   */
  incomingCallsFor(item: any): any;
  /**
   * Return all functions called by the given `CallHierarchyItem`.
   *
   * Pass the object returned by [`prepareCallHierarchyAt`] as `item`.
   *
   * @param item - A `CallHierarchyItem` from `prepareCallHierarchyAt`.
   * @returns `CallHierarchyOutgoingCall[]`, or `null` on error.
   *
   * [`prepareCallHierarchyAt`]: Analyzer#prepareCallHierarchyAt
   */
  outgoingCallsFor(item: any): any;
  /**
   * Return the type definition location for the symbol at the given
   * position.
   *
   * For a variable of a user-defined type, navigates to the `type`
   * declaration rather than the variable declaration itself.
   *
   * @param line - 0-based line number.
   * @param character - 0-based UTF-16 character offset.
   * @returns `Location | null`
   */
  typeDefinitionAt(line: number, character: number): any;
  /**
   * Return string representations for a color, for use in a color-picker.
   *
   * Provides both `"#RRGGBB"` (when alpha is 1.0) and `"#RRGGBBAA"` forms.
   *
   * @param red - Red component (0.0 – 1.0).
   * @param green - Green component (0.0 – 1.0).
   * @param blue - Blue component (0.0 – 1.0).
   * @param alpha - Alpha component (0.0 – 1.0).
   * @returns `string[]`, or `null` before `analyze` is called.
   */
  colorPresentations(red: number, green: number, blue: number, alpha: number): any;
  /**
   * Prepare a call hierarchy item for the callable symbol at the given
   * position.
   *
   * Returns a `CallHierarchyItem` that can be passed to
   * [`incomingCallsFor`] or [`outgoingCallsFor`] to traverse the call graph.
   *
   * @param line - 0-based line number.
   * @param character - 0-based UTF-16 character offset.
   * @returns `CallHierarchyItem | null`
   *
   * [`incomingCallsFor`]: Analyzer#incomingCallsFor
   * [`outgoingCallsFor`]: Analyzer#outgoingCallsFor
   */
  prepareCallHierarchyAt(line: number, character: number): any;
  /**
   * Create a new analyzer with the default `"en"` locale.
   *
   * Loads the built-in prelude and standard library automatically.
   */
  constructor();
  /**
   * Analyze the given source and update the cached result.
   *
   * Runs the full analysis pipeline:
   * 1. Parse the source and load prelude/stdlib.
   * 2. Run the index visitor to collect definitions and references.
   * 3. Collect color literals.
   * 4. Generate encoded semantic tokens.
   * 5. Extract script-info diagnostics from the VM compiler.
   *
   * Returns `Diagnostic[]` for the analyzed document. All subsequent
   * capability methods query this result until `analyze` is called again.
   *
   * @param uri - Document identifier, e.g. `"script.pine"`.
   * @param source - Full source text.
   * @returns `Diagnostic[]`
   */
  analyze(uri: string, source: string): any;
  /**
   * Return hover information at the given position.
   *
   * The hover card shows a Markdown description of the symbol under the
   * cursor, including its signature, parameter docs, and examples.
   *
   * @param line - 0-based line number.
   * @param character - 0-based UTF-16 character offset.
   * @param suffix - Optional Markdown text appended at the bottom of the
   *   hover card (e.g. an "Open in docs" link). Pass `null` to omit.
   * @returns `HoverResult | null`
   */
  hoverAt(line: number, character: number, suffix?: string | null): any;
  /**
   * Compute all text edits needed to rename the symbol at the given
   * position.
   *
   * Returns one edit per occurrence across all loaded files (entry script,
   * user imports). Apply all edits atomically to complete the rename.
   *
   * @param line - 0-based line number.
   * @param character - 0-based UTF-16 character offset.
   * @param newName - The replacement name.
   * @returns `RenameEdit[]`, or `null` before `analyze` is called.
   */
  renameAt(line: number, character: number, new_name: string): any;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_analyzer_free: (a: number, b: number) => void;
  readonly analyzer_allInlayHints: (a: number) => any;
  readonly analyzer_analyze: (a: number, b: number, c: number, d: number, e: number) => any;
  readonly analyzer_codeLenses: (a: number, b: number, c: number) => any;
  readonly analyzer_colorPresentations: (a: number, b: number, c: number, d: number, e: number) => any;
  readonly analyzer_completionsAt: (a: number, b: number, c: number) => any;
  readonly analyzer_definitionAt: (a: number, b: number, c: number) => any;
  readonly analyzer_diagnostics: (a: number) => any;
  readonly analyzer_documentColors: (a: number) => any;
  readonly analyzer_documentSymbols: (a: number) => any;
  readonly analyzer_foldingRanges: (a: number) => any;
  readonly analyzer_getFileContent: (a: number, b: number, c: number) => [number, number];
  readonly analyzer_highlightsAt: (a: number, b: number, c: number) => any;
  readonly analyzer_hoverAt: (a: number, b: number, c: number, d: number, e: number) => any;
  readonly analyzer_incomingCallsFor: (a: number, b: any) => any;
  readonly analyzer_inlayHints: (a: number, b: number, c: number, d: number, e: number) => any;
  readonly analyzer_new: () => number;
  readonly analyzer_outgoingCallsFor: (a: number, b: any) => any;
  readonly analyzer_prepareCallHierarchyAt: (a: number, b: number, c: number) => any;
  readonly analyzer_prepareRenameAt: (a: number, b: number, c: number) => any;
  readonly analyzer_referencesAt: (a: number, b: number, c: number, d: number) => any;
  readonly analyzer_renameAt: (a: number, b: number, c: number, d: number, e: number) => any;
  readonly analyzer_resolveSymbolAt: (a: number, b: number, c: number) => any;
  readonly analyzer_semanticTokens: (a: number) => any;
  readonly analyzer_setLocale: (a: number, b: number, c: number) => void;
  readonly analyzer_signatureHelpAt: (a: number, b: number, c: number) => any;
  readonly analyzer_sourceFiles: (a: number) => any;
  readonly analyzer_typeDefinitionAt: (a: number, b: number, c: number) => any;
  readonly analyzer_withLocale: (a: number, b: number) => number;
  readonly analyzer_workspaceSymbols: (a: number, b: number, c: number) => any;
  readonly stdlib_docs: (a: number, b: number) => any;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_externrefs: WebAssembly.Table;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
