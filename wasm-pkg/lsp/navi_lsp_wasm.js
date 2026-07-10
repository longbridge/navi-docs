let wasm;

let cachedUint8ArrayMemory0 = null;

function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
    numBytesDecoded += len;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
        cachedTextDecoder.decode();
        numBytesDecoded = len;
    }
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return decodeText(ptr, len);
}

let WASM_VECTOR_LEN = 0;

const cachedTextEncoder = new TextEncoder();

if (!('encodeInto' in cachedTextEncoder)) {
    cachedTextEncoder.encodeInto = function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    }
}

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

let cachedDataViewMemory0 = null;

function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches && builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}
/**
 * Return the embedded stdlib documentation JSON for `locale`.
 *
 * Uses `serialize_maps_as_objects` so `HashMap` fields become plain JS
 * objects (iterable with `Object.entries()`) rather than JS `Map`s.
 * @param {string} locale
 * @returns {any}
 */
export function stdlib_docs(locale) {
    const ptr0 = passStringToWasm0(locale, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.stdlib_docs(ptr0, len0);
    return ret;
}

const AnalyzerFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_analyzer_free(ptr >>> 0, 1));
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

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Analyzer.prototype);
        obj.__wbg_ptr = ptr;
        AnalyzerFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        AnalyzerFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_analyzer_free(ptr, 0);
    }
    /**
     * Change the locale for diagnostic messages and hover text.
     *
     * The new locale takes effect on the next [`analyze`] call. The cached
     * result is cleared so that stale diagnostics from the old locale are not
     * returned.
     *
     * [`analyze`]: Analyzer#analyze
     * @param {string} locale
     */
    setLocale(locale) {
        const ptr0 = passStringToWasm0(locale, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.analyzer_setLocale(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Return code lens items for the entry document.
     *
     * Each lens annotates a definition with a "N references" badge that
     * triggers a find-references command.
     *
     * @param uri - The document URI (should match the URI passed to
     * `analyze`). @returns `CodeLens[]`, or `null` before `analyze` is
     * called.
     * @param {string} uri
     * @returns {any}
     */
    codeLenses(uri) {
        const ptr0 = passStringToWasm0(uri, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.analyzer_codeLenses(this.__wbg_ptr, ptr0, len0);
        return ret;
    }
    /**
     * Return the diagnostics from the last `analyze` call.
     *
     * Equivalent to capturing the return value of `analyze`, but available
     * as a separate getter for convenience.
     *
     * @returns `Diagnostic[]`, or `null` before the first `analyze` call.
     * @returns {any}
     */
    diagnostics() {
        const ret = wasm.analyzer_diagnostics(this.__wbg_ptr);
        return ret;
    }
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
     * @param {number} start_line
     * @param {number} start_character
     * @param {number} end_line
     * @param {number} end_character
     * @returns {any}
     */
    inlayHints(start_line, start_character, end_line, end_character) {
        const ret = wasm.analyzer_inlayHints(this.__wbg_ptr, start_line, start_character, end_line, end_character);
        return ret;
    }
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
     * @param {string} locale
     * @returns {Analyzer}
     */
    static withLocale(locale) {
        const ptr0 = passStringToWasm0(locale, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.analyzer_withLocale(ptr0, len0);
        return Analyzer.__wrap(ret);
    }
    /**
     * Return all source files loaded as part of the last analysis.
     *
     * The array starts with the entry script (index 0) followed by prelude
     * and stdlib modules. The array index is the `fileId` used in
     * `Diagnostic.fileId`.
     *
     * @returns `SourceFileInfo[]`, or `null` before `analyze` is called.
     * @returns {any}
     */
    sourceFiles() {
        const ret = wasm.analyzer_sourceFiles(this.__wbg_ptr);
        return ret;
    }
    /**
     * Return the definition location for the symbol at the given position.
     *
     * @param line - 0-based line number.
     * @param character - 0-based UTF-16 character offset.
     * @returns `Location | null`
     * @param {number} line
     * @param {number} character
     * @returns {any}
     */
    definitionAt(line, character) {
        const ret = wasm.analyzer_definitionAt(this.__wbg_ptr, line, character);
        return ret;
    }
    /**
     * Return document highlights for all occurrences of the symbol under the
     * cursor.
     *
     * Distinguishes read accesses (`"read"`) from write accesses (`"write"`).
     *
     * @param line - 0-based line number.
     * @param character - 0-based UTF-16 character offset.
     * @returns `DocumentHighlight[]`, or `null` before `analyze` is called.
     * @param {number} line
     * @param {number} character
     * @returns {any}
     */
    highlightsAt(line, character) {
        const ret = wasm.analyzer_highlightsAt(this.__wbg_ptr, line, character);
        return ret;
    }
    /**
     * Return all references to the symbol at the given position.
     *
     * @param line - 0-based line number.
     * @param character - 0-based UTF-16 character offset.
     * @param includeDeclaration - When `true`, the definition site is
     *   included in the result alongside uses.
     * @returns `Location[]`, or `null` before `analyze` is called.
     * @param {number} line
     * @param {number} character
     * @param {boolean} include_declaration
     * @returns {any}
     */
    referencesAt(line, character, include_declaration) {
        const ret = wasm.analyzer_referencesAt(this.__wbg_ptr, line, character, include_declaration);
        return ret;
    }
    /**
     * Return completion items at the given (line, character) position.
     *
     * Provides user-defined symbols, keywords, and type-aware member
     * completions after `.`.
     *
     * @param line - 0-based line number.
     * @param character - 0-based UTF-16 character offset.
     * @returns `CompletionItem[]`, or `null` before `analyze` is called.
     * @param {number} line
     * @param {number} character
     * @returns {any}
     */
    completionsAt(line, character) {
        const ret = wasm.analyzer_completionsAt(this.__wbg_ptr, line, character);
        return ret;
    }
    /**
     * Return folding ranges for the entry document.
     *
     * Currently covers function bodies. Editors use these to render collapse
     * arrows in the gutter.
     *
     * @returns `FoldingRange[]`, or `null` before `analyze` is called.
     * @returns {any}
     */
    foldingRanges() {
        const ret = wasm.analyzer_foldingRanges(this.__wbg_ptr);
        return ret;
    }
    /**
     * Return all inlay hints for the entry document.
     *
     * Includes both parameter-name hints (at call sites) and inferred-type
     * hints (for variable declarations without explicit annotations).
     *
     * @returns `InlayHint[]`, or `null` before `analyze` is called.
     * @returns {any}
     */
    allInlayHints() {
        const ret = wasm.analyzer_allInlayHints(this.__wbg_ptr);
        return ret;
    }
    /**
     * Return all color literals found in the entry document.
     *
     * Use this to render color swatches in the editor gutter or to open a
     * color-picker widget.
     *
     * @returns `DocumentColor[]`, or `null` before `analyze` is called.
     * @returns {any}
     */
    documentColors() {
        const ret = wasm.analyzer_documentColors(this.__wbg_ptr);
        return ret;
    }
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
     * @returns {any}
     */
    semanticTokens() {
        const ret = wasm.analyzer_semanticTokens(this.__wbg_ptr);
        return ret;
    }
    /**
     * Return the hierarchical symbol tree for the entry document.
     *
     * Suitable for populating an "Outline" panel. Includes functions, types,
     * enums, and their members as nested `DocumentSymbol` nodes.
     *
     * @returns `DocumentSymbol[]`, or `null` before `analyze` is called.
     * @returns {any}
     */
    documentSymbols() {
        const ret = wasm.analyzer_documentSymbols(this.__wbg_ptr);
        return ret;
    }
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
     * @param {string} uri
     * @returns {string | undefined}
     */
    getFileContent(uri) {
        const ptr0 = passStringToWasm0(uri, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.analyzer_getFileContent(this.__wbg_ptr, ptr0, len0);
        let v2;
        if (ret[0] !== 0) {
            v2 = getStringFromWasm0(ret[0], ret[1]).slice();
            wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        }
        return v2;
    }
    /**
     * Check whether the symbol at the given position can be renamed.
     *
     * Returns the symbol's current range and name when a rename is possible,
     * so the editor can pre-fill the rename input box.
     *
     * @param line - 0-based line number.
     * @param character - 0-based UTF-16 character offset.
     * @returns `PrepareRenameResult | null`
     * @param {number} line
     * @param {number} character
     * @returns {any}
     */
    prepareRenameAt(line, character) {
        const ret = wasm.analyzer_prepareRenameAt(this.__wbg_ptr, line, character);
        return ret;
    }
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
     * @param {number} line
     * @param {number} character
     * @returns {any}
     */
    resolveSymbolAt(line, character) {
        const ret = wasm.analyzer_resolveSymbolAt(this.__wbg_ptr, line, character);
        return ret;
    }
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
     * @param {number} line
     * @param {number} character
     * @returns {any}
     */
    signatureHelpAt(line, character) {
        const ret = wasm.analyzer_signatureHelpAt(this.__wbg_ptr, line, character);
        return ret;
    }
    /**
     * Return symbols matching `query` across all loaded files.
     *
     * An empty `query` returns all top-level symbols. Otherwise, symbols
     * whose names contain `query` (case-insensitive) are returned.
     *
     * @param query - Search string (empty → all symbols).
     * @returns `WorkspaceSymbol[]`, or `null` before `analyze` is called.
     * @param {string} query
     * @returns {any}
     */
    workspaceSymbols(query) {
        const ptr0 = passStringToWasm0(query, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.analyzer_workspaceSymbols(this.__wbg_ptr, ptr0, len0);
        return ret;
    }
    /**
     * Return all functions that call the given `CallHierarchyItem`.
     *
     * Pass the object returned by [`prepareCallHierarchyAt`] as `item`.
     *
     * @param item - A `CallHierarchyItem` from `prepareCallHierarchyAt`.
     * @returns `CallHierarchyIncomingCall[]`, or `null` on error.
     *
     * [`prepareCallHierarchyAt`]: Analyzer#prepareCallHierarchyAt
     * @param {any} item
     * @returns {any}
     */
    incomingCallsFor(item) {
        const ret = wasm.analyzer_incomingCallsFor(this.__wbg_ptr, item);
        return ret;
    }
    /**
     * Return all functions called by the given `CallHierarchyItem`.
     *
     * Pass the object returned by [`prepareCallHierarchyAt`] as `item`.
     *
     * @param item - A `CallHierarchyItem` from `prepareCallHierarchyAt`.
     * @returns `CallHierarchyOutgoingCall[]`, or `null` on error.
     *
     * [`prepareCallHierarchyAt`]: Analyzer#prepareCallHierarchyAt
     * @param {any} item
     * @returns {any}
     */
    outgoingCallsFor(item) {
        const ret = wasm.analyzer_outgoingCallsFor(this.__wbg_ptr, item);
        return ret;
    }
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
     * @param {number} line
     * @param {number} character
     * @returns {any}
     */
    typeDefinitionAt(line, character) {
        const ret = wasm.analyzer_typeDefinitionAt(this.__wbg_ptr, line, character);
        return ret;
    }
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
     * @param {number} red
     * @param {number} green
     * @param {number} blue
     * @param {number} alpha
     * @returns {any}
     */
    colorPresentations(red, green, blue, alpha) {
        const ret = wasm.analyzer_colorPresentations(this.__wbg_ptr, red, green, blue, alpha);
        return ret;
    }
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
     * @param {number} line
     * @param {number} character
     * @returns {any}
     */
    prepareCallHierarchyAt(line, character) {
        const ret = wasm.analyzer_prepareCallHierarchyAt(this.__wbg_ptr, line, character);
        return ret;
    }
    /**
     * Create a new analyzer with the default `"en"` locale.
     *
     * Loads the built-in prelude and standard library automatically.
     */
    constructor() {
        const ret = wasm.analyzer_new();
        this.__wbg_ptr = ret >>> 0;
        AnalyzerFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
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
     * @param {string} uri
     * @param {string} source
     * @returns {any}
     */
    analyze(uri, source) {
        const ptr0 = passStringToWasm0(uri, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(source, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.analyzer_analyze(this.__wbg_ptr, ptr0, len0, ptr1, len1);
        return ret;
    }
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
     * @param {number} line
     * @param {number} character
     * @param {string | null} [suffix]
     * @returns {any}
     */
    hoverAt(line, character, suffix) {
        var ptr0 = isLikeNone(suffix) ? 0 : passStringToWasm0(suffix, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        const ret = wasm.analyzer_hoverAt(this.__wbg_ptr, line, character, ptr0, len0);
        return ret;
    }
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
     * @param {number} line
     * @param {number} character
     * @param {string} new_name
     * @returns {any}
     */
    renameAt(line, character, new_name) {
        const ptr0 = passStringToWasm0(new_name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.analyzer_renameAt(this.__wbg_ptr, line, character, ptr0, len0);
        return ret;
    }
}
if (Symbol.dispose) Analyzer.prototype[Symbol.dispose] = Analyzer.prototype.free;

const EXPECTED_RESPONSE_TYPES = new Set(['basic', 'cors', 'default']);

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);

            } catch (e) {
                const validResponse = module.ok && EXPECTED_RESPONSE_TYPES.has(module.type);

                if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);

    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };

        } else {
            return instance;
        }
    }
}

function __wbg_get_imports() {
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbg_Error_e83987f665cf5504 = function(arg0, arg1) {
        const ret = Error(getStringFromWasm0(arg0, arg1));
        return ret;
    };
    imports.wbg.__wbg_Number_bb48ca12f395cd08 = function(arg0) {
        const ret = Number(arg0);
        return ret;
    };
    imports.wbg.__wbg_String_8f0eb39a4a4c2f66 = function(arg0, arg1) {
        const ret = String(arg1);
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    };
    imports.wbg.__wbg___wbindgen_boolean_get_6d5a1ee65bab5f68 = function(arg0) {
        const v = arg0;
        const ret = typeof(v) === 'boolean' ? v : undefined;
        return isLikeNone(ret) ? 0xFFFFFF : ret ? 1 : 0;
    };
    imports.wbg.__wbg___wbindgen_debug_string_df47ffb5e35e6763 = function(arg0, arg1) {
        const ret = debugString(arg1);
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    };
    imports.wbg.__wbg___wbindgen_in_bb933bd9e1b3bc0f = function(arg0, arg1) {
        const ret = arg0 in arg1;
        return ret;
    };
    imports.wbg.__wbg___wbindgen_is_object_c818261d21f283a4 = function(arg0) {
        const val = arg0;
        const ret = typeof(val) === 'object' && val !== null;
        return ret;
    };
    imports.wbg.__wbg___wbindgen_is_string_fbb76cb2940daafd = function(arg0) {
        const ret = typeof(arg0) === 'string';
        return ret;
    };
    imports.wbg.__wbg___wbindgen_is_undefined_2d472862bd29a478 = function(arg0) {
        const ret = arg0 === undefined;
        return ret;
    };
    imports.wbg.__wbg___wbindgen_jsval_loose_eq_b664b38a2f582147 = function(arg0, arg1) {
        const ret = arg0 == arg1;
        return ret;
    };
    imports.wbg.__wbg___wbindgen_number_get_a20bf9b85341449d = function(arg0, arg1) {
        const obj = arg1;
        const ret = typeof(obj) === 'number' ? obj : undefined;
        getDataViewMemory0().setFloat64(arg0 + 8 * 1, isLikeNone(ret) ? 0 : ret, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
    };
    imports.wbg.__wbg___wbindgen_string_get_e4f06c90489ad01b = function(arg0, arg1) {
        const obj = arg1;
        const ret = typeof(obj) === 'string' ? obj : undefined;
        var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    };
    imports.wbg.__wbg___wbindgen_throw_b855445ff6a94295 = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };
    imports.wbg.__wbg_entries_e171b586f8f6bdbf = function(arg0) {
        const ret = Object.entries(arg0);
        return ret;
    };
    imports.wbg.__wbg_getTime_14776bfb48a1bff9 = function(arg0) {
        const ret = arg0.getTime();
        return ret;
    };
    imports.wbg.__wbg_get_7bed016f185add81 = function(arg0, arg1) {
        const ret = arg0[arg1 >>> 0];
        return ret;
    };
    imports.wbg.__wbg_get_with_ref_key_1dc361bd10053bfe = function(arg0, arg1) {
        const ret = arg0[arg1];
        return ret;
    };
    imports.wbg.__wbg_instanceof_ArrayBuffer_70beb1189ca63b38 = function(arg0) {
        let result;
        try {
            result = arg0 instanceof ArrayBuffer;
        } catch (_) {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbg_instanceof_Uint8Array_20c8e73002f7af98 = function(arg0) {
        let result;
        try {
            result = arg0 instanceof Uint8Array;
        } catch (_) {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbg_isSafeInteger_d216eda7911dde36 = function(arg0) {
        const ret = Number.isSafeInteger(arg0);
        return ret;
    };
    imports.wbg.__wbg_length_69bca3cb64fc8748 = function(arg0) {
        const ret = arg0.length;
        return ret;
    };
    imports.wbg.__wbg_length_cdd215e10d9dd507 = function(arg0) {
        const ret = arg0.length;
        return ret;
    };
    imports.wbg.__wbg_new_0_f9740686d739025c = function() {
        const ret = new Date();
        return ret;
    };
    imports.wbg.__wbg_new_1acc0b6eea89d040 = function() {
        const ret = new Object();
        return ret;
    };
    imports.wbg.__wbg_new_5a79be3ab53b8aa5 = function(arg0) {
        const ret = new Uint8Array(arg0);
        return ret;
    };
    imports.wbg.__wbg_new_68651c719dcda04e = function() {
        const ret = new Map();
        return ret;
    };
    imports.wbg.__wbg_new_e17d9f43105b08be = function() {
        const ret = new Array();
        return ret;
    };
    imports.wbg.__wbg_prototypesetcall_2a6620b6922694b2 = function(arg0, arg1, arg2) {
        Uint8Array.prototype.set.call(getArrayU8FromWasm0(arg0, arg1), arg2);
    };
    imports.wbg.__wbg_set_3f1d0b984ed272ed = function(arg0, arg1, arg2) {
        arg0[arg1] = arg2;
    };
    imports.wbg.__wbg_set_907fb406c34a251d = function(arg0, arg1, arg2) {
        const ret = arg0.set(arg1, arg2);
        return ret;
    };
    imports.wbg.__wbg_set_c213c871859d6500 = function(arg0, arg1, arg2) {
        arg0[arg1 >>> 0] = arg2;
    };
    imports.wbg.__wbindgen_cast_2241b6af4c4b2941 = function(arg0, arg1) {
        // Cast intrinsic for `Ref(String) -> Externref`.
        const ret = getStringFromWasm0(arg0, arg1);
        return ret;
    };
    imports.wbg.__wbindgen_cast_4625c577ab2ec9ee = function(arg0) {
        // Cast intrinsic for `U64 -> Externref`.
        const ret = BigInt.asUintN(64, arg0);
        return ret;
    };
    imports.wbg.__wbindgen_cast_9ae0607507abb057 = function(arg0) {
        // Cast intrinsic for `I64 -> Externref`.
        const ret = arg0;
        return ret;
    };
    imports.wbg.__wbindgen_cast_d6cd19b81560fd6e = function(arg0) {
        // Cast intrinsic for `F64 -> Externref`.
        const ret = arg0;
        return ret;
    };
    imports.wbg.__wbindgen_init_externref_table = function() {
        const table = wasm.__wbindgen_externrefs;
        const offset = table.grow(4);
        table.set(0, undefined);
        table.set(offset + 0, undefined);
        table.set(offset + 1, null);
        table.set(offset + 2, true);
        table.set(offset + 3, false);
        ;
    };

    return imports;
}

function __wbg_finalize_init(instance, module) {
    wasm = instance.exports;
    __wbg_init.__wbindgen_wasm_module = module;
    cachedDataViewMemory0 = null;
    cachedUint8ArrayMemory0 = null;


    wasm.__wbindgen_start();
    return wasm;
}

function initSync(module) {
    if (wasm !== undefined) return wasm;


    if (typeof module !== 'undefined') {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({module} = module)
        } else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
        }
    }

    const imports = __wbg_get_imports();

    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }

    const instance = new WebAssembly.Instance(module, imports);

    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(module_or_path) {
    if (wasm !== undefined) return wasm;


    if (typeof module_or_path !== 'undefined') {
        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
            ({module_or_path} = module_or_path)
        } else {
            console.warn('using deprecated parameters for the initialization function; pass a single object instead')
        }
    }

    if (typeof module_or_path === 'undefined') {
        module_or_path = new URL('navi_lsp_wasm_bg.wasm', import.meta.url);
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync };
export default __wbg_init;
