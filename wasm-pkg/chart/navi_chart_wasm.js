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

function addToExternrefTable0(obj) {
    const idx = wasm.__externref_table_alloc();
    wasm.__wbindgen_externrefs.set(idx, obj);
    return idx;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        const idx = addToExternrefTable0(e);
        wasm.__wbindgen_exn_store(idx);
    }
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

const CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(state => state.dtor(state.a, state.b));

function makeMutClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {

        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            state.a = a;
            real._wbg_cb_unref();
        }
    };
    real._wbg_cb_unref = () => {
        if (--state.cnt === 0) {
            state.dtor(state.a, state.b);
            state.a = 0;
            CLOSURE_DTORS.unregister(state);
        }
    };
    CLOSURE_DTORS.register(real, state, state);
    return real;
}
/**
 * Returns a JS object representing the built-in dark theme.
 *
 * Use this as the `theme` argument to `new Chart(...)` or `chart.setTheme()`.
 * @returns {any}
 */
export function darkTheme() {
    const ret = wasm.darkTheme();
    return ret;
}

/**
 * Returns a JS object representing the built-in light theme.
 *
 * Use this as the `theme` argument to `new Chart(...)` or `chart.setTheme()`.
 * @returns {any}
 */
export function lightTheme() {
    const ret = wasm.lightTheme();
    return ret;
}

let cachedFloat64ArrayMemory0 = null;

function getFloat64ArrayMemory0() {
    if (cachedFloat64ArrayMemory0 === null || cachedFloat64ArrayMemory0.byteLength === 0) {
        cachedFloat64ArrayMemory0 = new Float64Array(wasm.memory.buffer);
    }
    return cachedFloat64ArrayMemory0;
}

function getArrayF64FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getFloat64ArrayMemory0().subarray(ptr / 8, ptr / 8 + len);
}

function takeFromExternrefTable0(idx) {
    const value = wasm.__wbindgen_externrefs.get(idx);
    wasm.__externref_table_dealloc(idx);
    return value;
}
function wasm_bindgen__convert__closures_____invoke__h1c3b971bf5230278(arg0, arg1, arg2) {
    wasm.wasm_bindgen__convert__closures_____invoke__h1c3b971bf5230278(arg0, arg1, arg2);
}

function wasm_bindgen__convert__closures_____invoke__hdad8e08980442495(arg0, arg1) {
    wasm.wasm_bindgen__convert__closures_____invoke__hdad8e08980442495(arg0, arg1);
}

function wasm_bindgen__convert__closures_____invoke__h09e1f75621400211(arg0, arg1, arg2, arg3) {
    wasm.wasm_bindgen__convert__closures_____invoke__h09e1f75621400211(arg0, arg1, arg2, arg3);
}

const __wbindgen_enum_ReadableStreamType = ["bytes"];

const ChartFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_chart_free(ptr >>> 0, 1));
/**
 * Chart widget backed by a [`JsChartProvider`].
 *
 * Pass any JS object with a `chartStream()` method as the provider.
 * With the `local` feature, use [`LocalChartProvider`] for in-process VM
 * execution — construct it with a `JsDataProvider` and pass it here.
 */
export class Chart {

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ChartFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_chart_free(ptr, 0);
    }
    /**
     * Kebab-case identifier of the currently active drawing tool.
     * @returns {string}
     */
    activeTool() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.chart_activeTool(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Canvas pixel position `[x, y]` of the text-editor caret, or `null`
     * when no text editor is active.
     * @returns {Float64Array | undefined}
     */
    caretPixel() {
        const ret = wasm.chart_caretPixel(this.__wbg_ptr);
        let v1;
        if (ret[0] !== 0) {
            v1 = getArrayF64FromWasm0(ret[0], ret[1]).slice();
            wasm.__wbindgen_free(ret[0], ret[1] * 8, 8);
        }
        return v1;
    }
    /**
     * Return whether the chip-distribution band is currently shown.
     * @returns {boolean}
     */
    cyqVisible() {
        const ret = wasm.chart_cyqVisible(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
     * Sub-pane height ratios as a `number[]` that sums to `1.0`.
     *
     * Index 0 is the main chart pane; subsequent indices are indicator
     * sub-panes in order from top to bottom.
     * @returns {any}
     */
    paneRatios() {
        const ret = wasm.chart_paneRatios(this.__wbg_ptr);
        return ret;
    }
    /**
     * Replace all scripts with a single stream restart.
     *
     * `scripts` must be a JS array of `{ script, tag }` objects matching the
     * shapes accepted by `addScript`. Returns a `Promise<void>` that resolves
     * when the initial historical replay finishes, or rejects on the first
     * script error.
     * @param {any} scripts
     * @returns {Promise<any>}
     */
    setScripts(scripts) {
        const ret = wasm.chart_setScripts(this.__wbg_ptr, scripts);
        return ret;
    }
    /**
     * Return the current UI chrome font size.
     * @returns {number}
     */
    uiFontSize() {
        const ret = wasm.chart_uiFontSize(this.__wbg_ptr);
        return ret;
    }
    /**
     * Forward a pointer-up; fires click / double-click / drag-end / pinch-end
     * as recognized internally.
     * @param {number} id
     * @param {number} x
     * @param {number} y
     */
    onPointerUp(id, x, y) {
        wasm.chart_onPointerUp(this.__wbg_ptr, id, x, y);
    }
    /**
     * Current `ScriptError` for the script with `tag` if it is in an error
     * state, otherwise `null`.
     * @param {any} tag
     * @returns {any}
     */
    scriptError(tag) {
        const ret = wasm.chart_scriptError(this.__wbg_ptr, tag);
        return ret;
    }
    /**
     * Center the viewport on bar `idx` and briefly highlight it.
     * @param {number} idx
     */
    scrollToBar(idx) {
        wasm.chart_scrollToBar(this.__wbg_ptr, idx);
    }
    /**
     * Set the chip-distribution band width in pixels (default 270).
     * @param {number} width
     */
    setCyqWidth(width) {
        wasm.chart_setCyqWidth(this.__wbg_ptr, width);
    }
    /**
     * Pin the visible range to the bar indices `[start, end)`.
     * @param {number} start
     * @param {number} end
     */
    setViewport(start, end) {
        wasm.chart_setViewport(this.__wbg_ptr, start, end);
    }
    /**
     * Per-series `SeriesGraphConfig` array (`[{key, value}]`) for `tag`, or
     * `null`.
     * @param {any} tag
     * @returns {any}
     */
    graphConfigs(tag) {
        const ret = wasm.chart_graphConfigs(this.__wbg_ptr, tag);
        return ret;
    }
    /**
     * `true` if a script with `tag` is currently loaded.
     * @param {any} tag
     * @returns {boolean}
     */
    hasScriptTag(tag) {
        const ret = wasm.chart_hasScriptTag(this.__wbg_ptr, tag);
        return ret !== 0;
    }
    /**
     * Current sticky-tool setting.
     * @returns {boolean}
     */
    isStickyTool() {
        const ret = wasm.chart_isStickyTool(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
     * Restore chart state from a snapshot synchronously.
     * @param {any} json
     */
    loadSnapshot(json) {
        wasm.chart_loadSnapshot(this.__wbg_ptr, json);
    }
    /**
     * Remove the script identified by `tag`.
     * @param {any} tag
     */
    removeScript(tag) {
        wasm.chart_removeScript(this.__wbg_ptr, tag);
    }
    /**
     * Serialize the current chart state to a snapshot object.
     * @returns {any}
     */
    saveSnapshot() {
        const ret = wasm.chart_saveSnapshot(this.__wbg_ptr);
        return ret;
    }
    /**
     * Current `ScriptConfig` for the script with `tag`, or `null`.
     * @param {any} tag
     * @returns {any}
     */
    scriptConfig(tag) {
        const ret = wasm.chart_scriptConfig(this.__wbg_ptr, tag);
        return ret;
    }
    /**
     * `InputInfo[]` describing the declared inputs of the script with `tag`,
     * or `null` if the script is not found.
     * @param {any} tag
     * @returns {any}
     */
    scriptInputs(tag) {
        const ret = wasm.chart_scriptInputs(this.__wbg_ptr, tag);
        return ret;
    }
    /**
     * Current horizontal scroll offset (bars from the right edge).
     * @returns {number}
     */
    scrollOffset() {
        const ret = wasm.chart_scrollOffset(this.__wbg_ptr);
        return ret;
    }
    /**
     * Switch to a new timeframe, keeping the current symbol.
     * @param {string} tf
     */
    setTimeframe(tf) {
        const ptr0 = passStringToWasm0(tf, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.chart_setTimeframe(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Set which Y axes are visible.
     *
     * `mode` is a bitflags integer: `0b01` = right, `0b10` = left,
     * `0b11` = both (default), `0b00` = none.
     * @param {number} mode
     */
    setYAxisMode(mode) {
        wasm.chart_setYAxisMode(this.__wbg_ptr, mode);
    }
    /**
     * Add an annotation from an `AnnotationSpec` object.
     *
     * Returns the new `AnnotationId` as a string, or `""` if the spec was
     * invalid.
     * @param {any} spec
     * @returns {string}
     */
    addAnnotation(spec) {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.chart_addAnnotation(this.__wbg_ptr, spec);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Cancel the drawing currently in progress and discard it.
     */
    cancelDrawing() {
        wasm.chart_cancelDrawing(this.__wbg_ptr);
    }
    /**
     * Returns the `Annotation` object for `id`, or `null` if not found.
     * @param {string} id
     * @returns {any}
     */
    getAnnotation(id) {
        const ptr0 = passStringToWasm0(id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.chart_getAnnotation(this.__wbg_ptr, ptr0, len0);
        return ret;
    }
    /**
     * Return the chart's image registry — the `u32` → `HtmlImageElement` map
     * resolving the handles carried by [`AnnotationKind::Image`] annotations.
     *
     * Register bitmaps with `registry.add(id, img)` (typically from an image's
     * `onload`) and drop them with `registry.remove(id)`; neither repaints —
     * the change is picked up on the next render. Add the annotations
     * themselves with [`Self::addSystemAnnotation`], passing an
     * `AnnotationSpec` whose `kind` is `{ image: { imageId, anchor,
     * intrinsicSize, scale, opacity } }`.
     * @returns {ImageRegistry}
     */
    imageRegistry() {
        const ret = wasm.chart_imageRegistry(this.__wbg_ptr);
        return ImageRegistry.__wrap(ret);
    }
    /**
     * Forward a pointer-down. `id` distinguishes concurrent pointers (a second
     * pointer begins a pinch); `kind` is `0=Mouse, 1=Touch, 2=Pen`; `button`
     * is `0=Primary, 1=Middle, 2=Secondary, 3=Back, 4=Forward, 5=Eraser`;
     * `mods` is a bitfield `CTRL=1, SHIFT=2, ALT=4, META=8`. Returns `true` if
     * the chart consumed the event (host should suppress its default
     * handling).
     * @param {number} id
     * @param {number} kind
     * @param {number} button
     * @param {number} x
     * @param {number} y
     * @param {number} mods
     * @returns {boolean}
     */
    onPointerDown(id, kind, button, x, y, mods) {
        const ret = wasm.chart_onPointerDown(this.__wbg_ptr, id, kind, button, x, y, mods);
        return ret !== 0;
    }
    /**
     * Forward a pointer-move (hover, drag, or pinch).
     * @param {number} id
     * @param {number} x
     * @param {number} y
     * @param {number} mods
     */
    onPointerMove(id, x, y, mods) {
        wasm.chart_onPointerMove(this.__wbg_ptr, id, x, y, mods);
    }
    /**
     * Show or hide the chip-distribution (CYQ) band. Defaults to `false`.
     * @param {boolean} visible
     */
    setCyqVisible(visible) {
        wasm.chart_setCyqVisible(this.__wbg_ptr, visible);
    }
    /**
     * Override the sub-pane height distribution.
     *
     * `ratios` must be a `number[]` with the same length as `paneRatios()`
     * and values that sum to `1.0`.
     * @param {any} ratios
     */
    setPaneRatios(ratios) {
        wasm.chart_setPaneRatios(this.__wbg_ptr, ratios);
    }
    /**
     * When `true`, keep the active tool selected after each drawing is
     * placed ("lock drawing" mode).
     * @param {boolean} sticky
     */
    setStickyTool(sticky) {
        wasm.chart_setStickyTool(this.__wbg_ptr, sticky);
    }
    /**
     * Set the font size for all UI chrome (axis ticks, legend, crosshair,
     * price-line labels). Defaults to 12.0.
     * @param {number} size
     */
    setUiFontSize(size) {
        wasm.chart_setUiFontSize(this.__wbg_ptr, size);
    }
    /**
     * Cut the selected text from the active text editor, or `null`.
     * @returns {string | undefined}
     */
    textEditorCut() {
        const ret = wasm.chart_textEditorCut(this.__wbg_ptr);
        let v1;
        if (ret[0] !== 0) {
            v1 = getStringFromWasm0(ret[0], ret[1]).slice();
            wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        }
        return v1;
    }
    /**
     * Convert a bar index to its open timestamp in epoch milliseconds, or
     * `null` when the index is out of range.
     * @param {number} idx
     * @returns {any}
     */
    barIndexToTime(idx) {
        const ret = wasm.chart_barIndexToTime(this.__wbg_ptr, idx);
        return ret;
    }
    /**
     * Forward `compositionend` with the final committed `text`.
     * @param {string} text
     */
    compositionEnd(text) {
        const ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.chart_compositionEnd(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Returns all annotations as an `Annotation[]`.
     * @returns {any}
     */
    getAnnotations() {
        const ret = wasm.chart_getAnnotations(this.__wbg_ptr);
        return ret;
    }
    /**
     * Handle the pointer entering the canvas.
     */
    onPointerEnter() {
        wasm.chart_onPointerEnter(this.__wbg_ptr);
    }
    /**
     * Handle the pointer (mouse) leaving the canvas — hides the crosshair.
     */
    onPointerLeave() {
        wasm.chart_onPointerLeave(this.__wbg_ptr);
    }
    /**
     * Numeric script ID for the script with `tag`, or `null`.
     * @param {any} tag
     * @returns {any}
     */
    scriptIdForTag(tag) {
        const ret = wasm.chart_scriptIdForTag(this.__wbg_ptr, tag);
        return ret;
    }
    /**
     * `StrategyReport` for the script with `tag` if it is a strategy,
     * otherwise `null`.
     * @param {any} tag
     * @returns {any}
     */
    strategyReport(tag) {
        const ret = wasm.chart_strategyReport(this.__wbg_ptr, tag);
        return ret;
    }
    /**
     * Convert an epoch-millisecond timestamp to the nearest bar index, or
     * `null` when no bar matches.
     * @param {number} time_ms
     * @returns {any}
     */
    timeToBarIndex(time_ms) {
        const ret = wasm.chart_timeToBarIndex(this.__wbg_ptr, time_ms);
        return ret;
    }
    /**
     * Forward a pointer-cancel (OS captured the gesture / touch interrupted).
     * @param {number} id
     */
    onPointerCancel(id) {
        wasm.chart_onPointerCancel(this.__wbg_ptr, id);
    }
    /**
     * Paste the annotation from the internal clipboard.
     */
    pasteAnnotation() {
        wasm.chart_pasteAnnotation(this.__wbg_ptr);
    }
    /**
     * Request inline text editing for annotation `id`.
     *
     * Returns `true` if the annotation exists and supports text editing, in
     * which case subsequent key and composition events are routed to the
     * annotation's text field.
     * @param {string} id
     * @returns {boolean}
     */
    requestTextEdit(id) {
        const ptr0 = passStringToWasm0(id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.chart_requestTextEdit(this.__wbg_ptr, ptr0, len0);
        return ret !== 0;
    }
    /**
     * Per-series visual overrides array (`[{key, value}]`) for `tag`, or
     * `null`.
     * @param {any} tag
     * @returns {any}
     */
    scriptOverrides(tag) {
        const ret = wasm.chart_scriptOverrides(this.__wbg_ptr, tag);
        return ret;
    }
    /**
     * Override visual properties and/or input values for the script with
     * `tag`. `json` is a `ScriptConfig` object.
     * @param {any} tag
     * @param {any} json
     */
    setScriptConfig(tag, json) {
        wasm.chart_setScriptConfig(this.__wbg_ptr, tag, json);
    }
    /**
     * Set the horizontal scroll position in bars from the right edge.
     * @param {number} offset
     */
    setScrollOffset(offset) {
        wasm.chart_setScrollOffset(this.__wbg_ptr, offset);
    }
    /**
     * Return the currently active candlestick rendering style as a string.
     * @returns {any}
     */
    candlestickStyle() {
        const ret = wasm.chart_candlestickStyle(this.__wbg_ptr);
        return ret;
    }
    /**
     * `true` while a text-editing tool is active and needs keyboard input.
     *
     * When this returns `true`, forward all key events to
     * [`keyDown`](Self::keyDown) and [`textInput`](Self::textInput)
     * instead of handling them yourself.
     * @returns {boolean}
     */
    capturesKeyboard() {
        const ret = wasm.chart_capturesKeyboard(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
     * Remove all annotations from the chart.
     */
    clearAnnotations() {
        wasm.chart_clearAnnotations(this.__wbg_ptr);
    }
    /**
     * Forward `compositionstart` (IME session begins).
     */
    compositionStart() {
        wasm.chart_compositionStart(this.__wbg_ptr);
    }
    /**
     * Return the context-menu items for the element at canvas coordinates
     * `(x, y)`, or `null` if nothing hittable is there.
     *
     * Call this from the `contextmenu` DOM event (after `e.preventDefault()`).
     * The element is also selected internally as a side effect; drain
     * `pollEvent()` as usual afterward to receive any `selectionChanged`
     * event.
     * @param {number} x
     * @param {number} y
     * @returns {any}
     */
    contextMenuItems(x, y) {
        const ret = wasm.chart_contextMenuItems(this.__wbg_ptr, x, y);
        return ret;
    }
    /**
     * Remove all active scripts and clear their visual outputs.
     */
    removeAllScripts() {
        wasm.chart_removeAllScripts(this.__wbg_ptr);
    }
    /**
     * Remove the annotation with `id`.
     * @param {string} id
     */
    removeAnnotation(id) {
        const ptr0 = passStringToWasm0(id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.chart_removeAnnotation(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Replace the spec of an existing annotation in place.
     * @param {string} id
     * @param {any} spec
     */
    updateAnnotation(id, spec) {
        const ptr0 = passStringToWasm0(id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.chart_updateAnnotation(this.__wbg_ptr, ptr0, len0, spec);
    }
    /**
     * Forward `compositionupdate` with the current composition `text` and
     * cursor byte offset within that text.
     * @param {string} text
     * @param {number} cursor
     */
    compositionUpdate(text, cursor) {
        const ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.chart_compositionUpdate(this.__wbg_ptr, ptr0, len0, cursor);
    }
    /**
     * Current default emoji character for the emoji drawing tool.
     * @returns {string}
     */
    defaultEmojiGlyph() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.chart_defaultEmojiGlyph(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Restore chart state from a snapshot and re-execute all scripts.
     *
     * Returns a `Promise<void>` that resolves once every script has completed
     * its first execution attempt.
     * @param {any} json
     * @returns {Promise<any>}
     */
    loadSnapshotAsync(json) {
        const ret = wasm.chart_loadSnapshotAsync(this.__wbg_ptr, json);
        return ret;
    }
    /**
     * Add a system annotation. Returns its ID as a string.
     *
     * System annotations render below user-drawn annotations and are excluded
     * from undo/redo. `spec` is a JSON-serialised `AnnotationSpec`.
     * @param {any} spec
     * @returns {string}
     */
    addSystemAnnotation(spec) {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.chart_addSystemAnnotation(this.__wbg_ptr, spec);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Set the candlestick rendering style (e.g. `"candlestick"`, `"line"`,
     * `"heikinAshi"`). Accepts a JS string; re-renders on success.
     * @param {any} style
     */
    setCandlestickStyle(style) {
        wasm.chart_setCandlestickStyle(this.__wbg_ptr, style);
    }
    /**
     * Read (copy) the selected text from the active text editor, or `null`.
     * @returns {string | undefined}
     */
    textEditorSelection() {
        const ret = wasm.chart_textEditorSelection(this.__wbg_ptr);
        let v1;
        if (ret[0] !== 0) {
            v1 = getStringFromWasm0(ret[0], ret[1]).slice();
            wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        }
        return v1;
    }
    /**
     * Returns the editable `PropertyDescriptor[]` for annotation `id`, or
     * `null` if not found.
     * @param {string} id
     * @returns {any}
     */
    annotationProperties(id) {
        const ptr0 = passStringToWasm0(id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.chart_annotationProperties(this.__wbg_ptr, ptr0, len0);
        return ret;
    }
    /**
     * Return the current candlestick config as a `CandlestickConfig` object.
     * @returns {any}
     */
    getCandlestickConfig() {
        const ret = wasm.chart_getCandlestickConfig(this.__wbg_ptr);
        return ret;
    }
    /**
     * Return whether the latest-close price line is currently shown.
     * @returns {boolean}
     */
    lastPriceLineVisible() {
        const ret = wasm.chart_lastPriceLineVisible(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
     * Set the default style for a drawing tool.
     *
     * `toolId` is the kebab-case tool identifier (e.g. `"trendline"`).
     * `json` is an `AnnotationKind` object that will be used as the template
     * for new annotations created with that tool.
     * @param {string} tool_id
     * @param {any} json
     * @returns {boolean}
     */
    setAnnotationDefault(tool_id, json) {
        const ptr0 = passStringToWasm0(tool_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.chart_setAnnotationDefault(this.__wbg_ptr, ptr0, len0, json);
        return ret !== 0;
    }
    /**
     * Replace the entire candlestick config. `config` is the serialised
     * `CandlestickConfig` object; re-renders on success.
     * @param {any} config
     */
    setCandlestickConfig(config) {
        wasm.chart_setCandlestickConfig(this.__wbg_ptr, config);
    }
    /**
     * Set the default emoji character for the emoji drawing tool.
     * @param {string} glyph
     */
    setDefaultEmojiGlyph(glyph) {
        const ptr0 = passStringToWasm0(glyph, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.chart_setDefaultEmojiGlyph(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Cut the selected annotation: copy to clipboard then delete it.
     */
    cutSelectedAnnotation() {
        wasm.chart_cutSelectedAnnotation(this.__wbg_ptr);
    }
    /**
     * Returns the current `PropertyValueResult` for a named property of
     * annotation `id`, or `null` if not found.
     * @param {string} id
     * @param {string} name
     * @returns {any}
     */
    getAnnotationProperty(id, name) {
        const ptr0 = passStringToWasm0(id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.chart_getAnnotationProperty(this.__wbg_ptr, ptr0, len0, ptr1, len1);
        return ret;
    }
    /**
     * `InputInfo[]` with current effective values (defaults merged with user
     * overrides), or `null` if the script is not found.
     * @param {any} tag
     * @returns {any}
     */
    scriptInputsEffective(tag) {
        const ret = wasm.chart_scriptInputsEffective(this.__wbg_ptr, tag);
        return ret;
    }
    /**
     * Set a named property of annotation `id` to the given `PropertyValue`.
     *
     * Returns `true` on success, `false` if the annotation or property was
     * not found or the value type was invalid.
     * @param {string} id
     * @param {string} name
     * @param {any} value
     * @returns {boolean}
     */
    setAnnotationProperty(id, name, value) {
        const ptr0 = passStringToWasm0(id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.chart_setAnnotationProperty(this.__wbg_ptr, ptr0, len0, ptr1, len1, value);
        return ret !== 0;
    }
    /**
     * Remove all system annotations.
     */
    clearSystemAnnotations() {
        wasm.chart_clearSystemAnnotations(this.__wbg_ptr);
    }
    /**
     * Copy the selected annotation to the internal clipboard.
     */
    copySelectedAnnotation() {
        wasm.chart_copySelectedAnnotation(this.__wbg_ptr);
    }
    /**
     * Finalise a multi-point drawing (e.g. commit a polyline after placing
     * all vertices).
     */
    finalizePendingDrawing() {
        wasm.chart_finalizePendingDrawing(this.__wbg_ptr);
    }
    /**
     * Read one candlestick property by name, as a `PropertyValueResult`.
     * @param {string} name
     * @returns {any}
     */
    getCandlestickProperty(name) {
        const ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.chart_getCandlestickProperty(this.__wbg_ptr, ptr0, len0);
        return ret;
    }
    /**
     * `true` if the internal clipboard currently holds an annotation.
     * @returns {boolean}
     */
    hasClipboardAnnotation() {
        const ret = wasm.chart_hasClipboardAnnotation(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
     * Remove a system annotation by ID. Returns `true` if found.
     * @param {string} id
     * @returns {boolean}
     */
    removeSystemAnnotation(id) {
        const ptr0 = passStringToWasm0(id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.chart_removeSystemAnnotation(this.__wbg_ptr, ptr0, len0);
        return ret !== 0;
    }
    /**
     * Reset all per-style candlestick config to defaults, keeping the active
     * style.
     */
    resetCandlestickConfig() {
        wasm.chart_resetCandlestickConfig(this.__wbg_ptr);
    }
    /**
     * Set one candlestick property to a `PropertyValue`; returns `true` on
     * success and re-renders.
     * @param {string} name
     * @param {any} value
     * @returns {boolean}
     */
    setCandlestickProperty(name, value) {
        const ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.chart_setCandlestickProperty(this.__wbg_ptr, ptr0, len0, value);
        return ret !== 0;
    }
    /**
     * Update a system annotation's spec. Returns `true` on success.
     * @param {string} id
     * @param {any} spec
     * @returns {boolean}
     */
    updateSystemAnnotation(id, spec) {
        const ptr0 = passStringToWasm0(id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.chart_updateSystemAnnotation(this.__wbg_ptr, ptr0, len0, spec);
        return ret !== 0;
    }
    /**
     * Show or hide the latest-close horizontal price line and its right-axis
     * label. Defaults to `true`.
     * @param {boolean} visible
     */
    setLastPriceLineVisible(visible) {
        wasm.chart_setLastPriceLineVisible(this.__wbg_ptr, visible);
    }
    /**
     * Delete the currently selected annotation.
     */
    deleteSelectedAnnotation() {
        wasm.chart_deleteSelectedAnnotation(this.__wbg_ptr);
    }
    /**
     * Localised `PropertyDescriptor` list for the active candlestick style.
     * @returns {any}
     */
    getCandlestickProperties() {
        const ret = wasm.chart_getCandlestickProperties(this.__wbg_ptr);
        return ret;
    }
    /**
     * Reset annotation `id` to the default style of its drawing tool.
     *
     * Returns `true` if the annotation was found.
     * @param {string} id
     * @returns {boolean}
     */
    resetAnnotationToDefault(id) {
        const ptr0 = passStringToWasm0(id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.chart_resetAnnotationToDefault(this.__wbg_ptr, ptr0, len0);
        return ret !== 0;
    }
    /**
     * Bounding `Rect` of the selected annotation in canvas CSS pixels, or
     * `null` if nothing is selected.
     * @returns {any}
     */
    selectedAnnotationBounds() {
        const ret = wasm.chart_selectedAnnotationBounds(this.__wbg_ptr);
        return ret;
    }
    /**
     * Execute a context-menu action by its `actionId`.
     *
     * The `actionId` values are provided in the `contextMenuRequested`
     * event emitted by [`pollEvent`](Self::pollEvent).
     * @param {string} action_id
     */
    dispatchContextMenuAction(action_id) {
        const ptr0 = passStringToWasm0(action_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.chart_dispatchContextMenuAction(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Returns the `ControlPointFlags` bitmask (as `number[]`) for each
     * control point of annotation `id`, or `null` if not found.
     * @param {string} id
     * @returns {any}
     */
    annotationControlPointFlags(id) {
        const ptr0 = passStringToWasm0(id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.chart_annotationControlPointFlags(this.__wbg_ptr, ptr0, len0);
        return ret;
    }
    /**
     * Move the selected annotation to the bottom of the Z-order.
     */
    sendSelectedAnnotationToBack() {
        wasm.chart_sendSelectedAnnotationToBack(this.__wbg_ptr);
    }
    /**
     * Toggle the lock state of the selected annotation.
     *
     * Locked annotations cannot be moved or resized by the user.
     */
    toggleSelectedAnnotationLock() {
        wasm.chart_toggleSelectedAnnotationLock(this.__wbg_ptr);
    }
    /**
     * Move the selected annotation to the top of the Z-order.
     */
    bringSelectedAnnotationToFront() {
        wasm.chart_bringSelectedAnnotationToFront(this.__wbg_ptr);
    }
    /**
     * `true` if the selected annotation is a highlighter brush stroke.
     * @returns {boolean}
     */
    selectedAnnotationIsHighlighter() {
        const ret = wasm.chart_selectedAnnotationIsHighlighter(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
     * Create an empty chart attached to a `<canvas>` element.
     *
     * - `locale` — BCP-47 locale for axis labels and tooltips, e.g. `"en"`.
     * - `theme`  — a `Theme` object (use `darkTheme()` / `lightTheme()` or a
     *   custom object matching the `Theme` shape).
     *
     * The chart is initially blank.  Call `setSymbol` / `setTimeframe` to
     * begin loading data.
     * @param {HTMLCanvasElement} canvas
     * @param {any} provider
     * @param {string} locale
     * @param {any} theme
     */
    constructor(canvas, provider, locale, theme) {
        const ptr0 = passStringToWasm0(locale, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.chart_new(canvas, provider, ptr0, len0, theme);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        this.__wbg_ptr = ret[0] >>> 0;
        ChartFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * Redo the last undone action; returns `true` if something was redone.
     * @returns {boolean}
     */
    redo() {
        const ret = wasm.chart_redo(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
     * Undo the last annotation action; returns `true` if something was undone.
     * @returns {boolean}
     */
    undo() {
        const ret = wasm.chart_undo(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
     * Current locale string.
     * @returns {string}
     */
    locale() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.chart_locale(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Advance inertia physics for one animation frame. Call this
     * unconditionally on every `requestAnimationFrame` tick — it is a no-op
     * when there is no active pan or zoom inertia, so a persistent loop costs
     * nothing at rest.
     */
    onTick() {
        wasm.chart_onTick(this.__wbg_ptr);
    }
    /**
     * Programmatically set the selected chart element. Pass `null` to clear
     * the selection. Emits a `selectionChanged` event and re-renders.
     * @param {any} element
     */
    select(element) {
        wasm.chart_select(this.__wbg_ptr, element);
    }
    /**
     * Current symbol string, e.g. `"NASDAQ:AAPL"`.
     * @returns {string}
     */
    symbol() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.chart_symbol(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Tag string for the script with string ID `id`, or `null`.
     * @param {string} id
     * @returns {any}
     */
    tagFor(id) {
        const ptr0 = passStringToWasm0(id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.chart_tagFor(this.__wbg_ptr, ptr0, len0);
        return ret;
    }
    /**
     * `true` if the redo stack is non-empty.
     * @returns {boolean}
     */
    canRedo() {
        const ret = wasm.chart_canRedo(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
     * `true` if the undo stack is non-empty.
     * @returns {boolean}
     */
    canUndo() {
        const ret = wasm.chart_canUndo(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
     * Hit-test the canvas position `(x, y)`.
     *
     * Returns a `HitTarget`: `{ type: "chart" }`, `{ type: "divider", index:
     * number }`, or `{ type: "none" }`.
     * @param {number} x
     * @param {number} y
     * @returns {any}
     */
    hitTest(x, y) {
        const ret = wasm.chart_hitTest(this.__wbg_ptr, x, y);
        return ret;
    }
    /**
     * Forward a key-down event using the `KeyboardEvent.key` string.
     *
     * Only a subset of keys are handled: `ArrowLeft/Right/Up/Down`,
     * `Escape`, `Delete`, `Backspace`, `Enter`, `Home`, `End`.
     * Returns `true` if the chart consumed the event.
     * @param {string} key
     * @param {number} mods
     * @returns {boolean}
     */
    keyDown(key, mods) {
        const ptr0 = passStringToWasm0(key, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.chart_keyDown(this.__wbg_ptr, ptr0, len0, mods);
        return ret !== 0;
    }
    /**
     * Forward an OS-recognized pinch zoom. `scale` is the multiplicative
     * factor (`>1` = zoom in); `(cx, cy)` is the canvas-relative pinch centre.
     * @param {number} scale
     * @param {number} cx
     * @param {number} cy
     */
    onPinch(scale, cx, cy) {
        wasm.chart_onPinch(this.__wbg_ptr, scale, cx, cy);
    }
    /**
     * Forward a wheel / vertical-scroll zoom event.
     *
     * `delta` is the (pixel-normalised) wheel step; `anchorX` is the
     * canvas-relative X coordinate used as the zoom anchor. Applied with
     * inertia.
     * @param {number} delta
     * @param {number} anchor_x
     */
    onWheel(delta, anchor_x) {
        wasm.chart_onWheel(this.__wbg_ptr, delta, anchor_x);
    }
    /**
     * Returns all active scripts as an array of `[tag, id]` pairs.
     * @returns {any}
     */
    scripts() {
        const ret = wasm.chart_scripts(this.__wbg_ptr);
        return ret;
    }
    /**
     * Activate a drawing tool by its kebab-case identifier.
     *
     * Returns `true` if the id was recognised. Falls back to `"pointer"` for
     * unknown ids. Example ids: `"pointer"`, `"trendline"`, `"rect"`,
     * `"text"`, `"fib-retracement"`.
     * @param {string} id
     * @returns {boolean}
     */
    setTool(id) {
        const ptr0 = passStringToWasm0(id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.chart_setTool(this.__wbg_ptr, ptr0, len0);
        return ret !== 0;
    }
    /**
     * Number of bars currently visible in the viewport.
     * @returns {number}
     */
    barCount() {
        const ret = wasm.chart_barCount(this.__wbg_ptr);
        return ret;
    }
    /**
     * CSS cursor string appropriate for the canvas position `(x, y)`.
     *
     * Apply the returned value to the canvas element's `style.cursor`.
     * @param {number} x
     * @param {number} y
     * @returns {string}
     */
    cursorAt(x, y) {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.chart_cursorAt(this.__wbg_ptr, x, y);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Return the current chip-distribution band width in pixels.
     * @returns {number}
     */
    cyqWidth() {
        const ret = wasm.chart_cyqWidth(this.__wbg_ptr);
        return ret;
    }
    /**
     * Notify the chart that the canvas CSS size has changed to `(w, h)`.
     *
     * Call this from a `ResizeObserver` callback whenever the container
     * element is resized. The chart re-scales the backing buffer and
     * re-renders automatically.
     * @param {number} w
     * @param {number} h
     */
    onResize(w, h) {
        wasm.chart_onResize(this.__wbg_ptr, w, h);
    }
    /**
     * Forward a trackpad two-finger scroll (pan, no inertia). `dx` positive =
     * content scrolled right (swipe left) = advance toward newer bars.
     * @param {number} dx
     * @param {number} dy
     */
    onScroll(dx, dy) {
        wasm.chart_onScroll(this.__wbg_ptr, dx, dy);
    }
    /**
     * Apply a theme.  Pass a `Theme` object (use `darkTheme()` /
     * `lightTheme()` or a custom object matching the `Theme` shape).
     * No-op if `theme` cannot be deserialized.
     * @param {any} theme
     */
    setTheme(theme) {
        wasm.chart_setTheme(this.__wbg_ptr, theme);
    }
    /**
     * Add a script to the chart, streaming its events from the provider.
     *
     * `script` is an opaque handle understood by the JS provider — any
     * JSON-serializable value (source string, hash, server-side cache UUID,
     * …). It is forwarded verbatim to the provider's `scriptEvents(script,
     * …)` method, which streams the pre-computed `ScriptEvent`s rendered by
     * the chart. `tag` is an arbitrary string identifier used to reference
     * the script in subsequent calls.
     *
     * Returns a `Promise<void>` that:
     * - **resolves** when the initial event stream finishes.
     * - **rejects** with a [`ScriptError`](crate::types) on failure.
     * @param {any} script
     * @param {any} tag
     * @returns {Promise<any>}
     */
    addScript(script, tag) {
        const ret = wasm.chart_addScript(this.__wbg_ptr, script, tag);
        return ret;
    }
    /**
     * Call when the canvas (or its ancestor) loses keyboard focus.
     *
     * Commits any in-progress IME composition and exits text-editing mode.
     */
    focusLost() {
        wasm.chart_focusLost(this.__wbg_ptr);
    }
    /**
     * Current magnet (snap-to-OHLC) configuration as a `MagnetConfig`
     * object.
     * @returns {any}
     */
    getMagnet() {
        const ret = wasm.chart_getMagnet(this.__wbg_ptr);
        return ret;
    }
    /**
     * Drain one pending `ChartEvent`, or return `null` if the queue is empty.
     *
     * Call this after every interaction method to process events such as
     * `annotationCreated`, `toolChanged`, `contextMenuRequested`, etc.
     *
     * ```js
     * let ev;
     * while ((ev = chart.pollEvent()) !== null) handleEvent(ev);
     * ```
     * @returns {any}
     */
    pollEvent() {
        const ret = wasm.chart_pollEvent(this.__wbg_ptr);
        return ret;
    }
    /**
     * Currently selected chart element (`ChartElement`), or `null`.
     * @returns {any}
     */
    selection() {
        const ret = wasm.chart_selection(this.__wbg_ptr);
        return ret;
    }
    /**
     * Update the locale used for axis labels and tooltips.
     *
     * Accepts a BCP-47 locale string such as `"en"`, `"zh-CN"`, `"ja"`.
     * @param {string} locale
     */
    setLocale(locale) {
        const ptr0 = passStringToWasm0(locale, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.chart_setLocale(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Update the magnet configuration from a `MagnetConfig` object.
     * @param {any} json
     */
    setMagnet(json) {
        wasm.chart_setMagnet(this.__wbg_ptr, json);
    }
    /**
     * Switch to a new symbol, keeping the current timeframe.
     * @param {string} symbol
     */
    setSymbol(symbol) {
        const ptr0 = passStringToWasm0(symbol, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.chart_setSymbol(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Insert text at the cursor position in the active text editor.
     *
     * Forward the string from a `keypress` or `input` event.
     * @param {string} text
     */
    textInput(text) {
        const ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.chart_textInput(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Current timeframe string, e.g. `"D"` or `"60"`.
     * @returns {string}
     */
    timeframe() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.chart_timeframe(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Total number of bars in the loaded dataset.
     * @returns {number}
     */
    totalBars() {
        const ret = wasm.chart_totalBars(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * Return the current Y-axis mode as a bitflags integer.
     * @returns {number}
     */
    yAxisMode() {
        const ret = wasm.chart_yAxisMode(this.__wbg_ptr);
        return ret;
    }
}
if (Symbol.dispose) Chart.prototype[Symbol.dispose] = Chart.prototype.free;

const ImageRegistryFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_imageregistry_free(ptr >>> 0, 1));
/**
 * Registry mapping `u32` image handles (carried by
 * [`AnnotationImage`](navi_chart::annotation::AnnotationImage)) to loaded
 * `HtmlImageElement`s.
 *
 * Cloning is cheap (shared, reference-counted): the `CanvasContext` that draws
 * the images and any JS holder obtained via `Chart::imageRegistry` all point
 * at the same underlying map. Mutating it with `add` / `remove` does not
 * repaint — the new state is picked up on the next render.
 */
export class ImageRegistry {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(ImageRegistry.prototype);
        obj.__wbg_ptr = ptr;
        ImageRegistryFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ImageRegistryFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_imageregistry_free(ptr, 0);
    }
    /**
     * Register (or replace) the bitmap for handle `id`.
     * @param {number} id
     * @param {HTMLImageElement} img
     */
    add(id, img) {
        wasm.imageregistry_add(this.__wbg_ptr, id, img);
    }
    /**
     * Remove the bitmap for handle `id`. Annotations referencing it draw
     * nothing until a bitmap is registered again.
     * @param {number} id
     */
    remove(id) {
        wasm.imageregistry_remove(this.__wbg_ptr, id);
    }
}
if (Symbol.dispose) ImageRegistry.prototype[Symbol.dispose] = ImageRegistry.prototype.free;

const IntoUnderlyingByteSourceFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_intounderlyingbytesource_free(ptr >>> 0, 1));

export class IntoUnderlyingByteSource {

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        IntoUnderlyingByteSourceFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_intounderlyingbytesource_free(ptr, 0);
    }
    /**
     * @returns {number}
     */
    get autoAllocateChunkSize() {
        const ret = wasm.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @param {ReadableByteStreamController} controller
     * @returns {Promise<any>}
     */
    pull(controller) {
        const ret = wasm.intounderlyingbytesource_pull(this.__wbg_ptr, controller);
        return ret;
    }
    /**
     * @param {ReadableByteStreamController} controller
     */
    start(controller) {
        wasm.intounderlyingbytesource_start(this.__wbg_ptr, controller);
    }
    /**
     * @returns {ReadableStreamType}
     */
    get type() {
        const ret = wasm.intounderlyingbytesource_type(this.__wbg_ptr);
        return __wbindgen_enum_ReadableStreamType[ret];
    }
    cancel() {
        const ptr = this.__destroy_into_raw();
        wasm.intounderlyingbytesource_cancel(ptr);
    }
}
if (Symbol.dispose) IntoUnderlyingByteSource.prototype[Symbol.dispose] = IntoUnderlyingByteSource.prototype.free;

const IntoUnderlyingSinkFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_intounderlyingsink_free(ptr >>> 0, 1));

export class IntoUnderlyingSink {

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        IntoUnderlyingSinkFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_intounderlyingsink_free(ptr, 0);
    }
    /**
     * @param {any} reason
     * @returns {Promise<any>}
     */
    abort(reason) {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.intounderlyingsink_abort(ptr, reason);
        return ret;
    }
    /**
     * @returns {Promise<any>}
     */
    close() {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.intounderlyingsink_close(ptr);
        return ret;
    }
    /**
     * @param {any} chunk
     * @returns {Promise<any>}
     */
    write(chunk) {
        const ret = wasm.intounderlyingsink_write(this.__wbg_ptr, chunk);
        return ret;
    }
}
if (Symbol.dispose) IntoUnderlyingSink.prototype[Symbol.dispose] = IntoUnderlyingSink.prototype.free;

const IntoUnderlyingSourceFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_intounderlyingsource_free(ptr >>> 0, 1));

export class IntoUnderlyingSource {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(IntoUnderlyingSource.prototype);
        obj.__wbg_ptr = ptr;
        IntoUnderlyingSourceFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        IntoUnderlyingSourceFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_intounderlyingsource_free(ptr, 0);
    }
    /**
     * @param {ReadableStreamDefaultController} controller
     * @returns {Promise<any>}
     */
    pull(controller) {
        const ret = wasm.intounderlyingsource_pull(this.__wbg_ptr, controller);
        return ret;
    }
    cancel() {
        const ptr = this.__destroy_into_raw();
        wasm.intounderlyingsource_cancel(ptr);
    }
}
if (Symbol.dispose) IntoUnderlyingSource.prototype[Symbol.dispose] = IntoUnderlyingSource.prototype.free;

const LocalChartHandleFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_localcharthandle_free(ptr >>> 0, 1));
/**
 * Session handle for a [`LocalChartProvider`] stream.
 *
 * JS must keep this object alive for the duration of the session.
 * Call its methods to extend history or dynamically add/remove scripts.
 */
export class LocalChartHandle {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(LocalChartHandle.prototype);
        obj.__wbg_ptr = ptr;
        LocalChartHandleFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        LocalChartHandleFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_localcharthandle_free(ptr, 0);
    }
    /**
     * Add a script to the live session.
     *
     * Returns the `script_id` (as `f64` / JS number) that will tag subsequent
     * events for this script.  The caller must pass a serialised
     * `ScriptDescriptor` JSON value.
     * @param {any} descriptor
     * @returns {number}
     */
    addScript(descriptor) {
        const ret = wasm.localcharthandle_addScript(this.__wbg_ptr, descriptor);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return ret[0];
    }
    /**
     * Remove a script from the live session.
     * @param {number} script_id
     */
    removeScript(script_id) {
        wasm.localcharthandle_removeScript(this.__wbg_ptr, script_id);
    }
    /**
     * Extend the history window without restarting the stream.
     *
     * Returns `true` if the extension was accepted (cached programs
     * available), `false` if a full restart is needed.
     * @param {number} bars_back
     * @returns {boolean}
     */
    extendHistory(bars_back) {
        const ret = wasm.localcharthandle_extendHistory(this.__wbg_ptr, bars_back);
        return ret !== 0;
    }
}
if (Symbol.dispose) LocalChartHandle.prototype[Symbol.dispose] = LocalChartHandle.prototype.free;

const LocalChartProviderFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_localchartprovider_free(ptr >>> 0, 1));
/**
 * In-process chart provider backed by the Navi VM.
 *
 * ```typescript
 * const provider = new LocalChartProvider(dataProvider);
 * const chart = new Chart(canvas, provider, symbol, tf, locale, isDark);
 * ```
 */
export class LocalChartProvider {

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        LocalChartProviderFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_localchartprovider_free(ptr, 0);
    }
    /**
     * Implements the `ChartProvider.chartStream()` interface.
     *
     * Returns a JS object `{ stream: ReadableStream, handle: LocalChartHandle
     * }`. JS must retain `handle` for the session lifetime to enable
     * dynamic `extendHistory` / `addScript` / `removeScript` without a
     * full restart.
     * @param {string} symbol
     * @param {string} tf
     * @param {any} request
     * @returns {any}
     */
    chartStream(symbol, tf, request) {
        const ptr0 = passStringToWasm0(symbol, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(tf, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.localchartprovider_chartStream(this.__wbg_ptr, ptr0, len0, ptr1, len1, request);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return takeFromExternrefTable0(ret[0]);
    }
    /**
     * Create a new `LocalChartProvider` backed by `data_provider`.
     * @param {any} data_provider
     */
    constructor(data_provider) {
        const ret = wasm.localchartprovider_new(data_provider);
        this.__wbg_ptr = ret >>> 0;
        LocalChartProviderFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
}
if (Symbol.dispose) LocalChartProvider.prototype[Symbol.dispose] = LocalChartProvider.prototype.free;

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
    imports.wbg.__wbg___wbindgen_bigint_get_as_i64_f3ebc5a755000afd = function(arg0, arg1) {
        const v = arg1;
        const ret = typeof(v) === 'bigint' ? v : undefined;
        getDataViewMemory0().setBigInt64(arg0 + 8 * 1, isLikeNone(ret) ? BigInt(0) : ret, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
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
    imports.wbg.__wbg___wbindgen_is_bigint_cb320707dcd35f0b = function(arg0) {
        const ret = typeof(arg0) === 'bigint';
        return ret;
    };
    imports.wbg.__wbg___wbindgen_is_falsy_46b8d2f2aba49112 = function(arg0) {
        const ret = !arg0;
        return ret;
    };
    imports.wbg.__wbg___wbindgen_is_function_ee8a6c5833c90377 = function(arg0) {
        const ret = typeof(arg0) === 'function';
        return ret;
    };
    imports.wbg.__wbg___wbindgen_is_null_5e69f72e906cc57c = function(arg0) {
        const ret = arg0 === null;
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
    imports.wbg.__wbg___wbindgen_jsval_eq_6b13ab83478b1c50 = function(arg0, arg1) {
        const ret = arg0 === arg1;
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
    imports.wbg.__wbg__wbg_cb_unref_2454a539ea5790d9 = function(arg0) {
        arg0._wbg_cb_unref();
    };
    imports.wbg.__wbg_addColorStop_01bc91dc3b784328 = function() { return handleError(function (arg0, arg1, arg2, arg3) {
        arg0.addColorStop(arg1, getStringFromWasm0(arg2, arg3));
    }, arguments) };
    imports.wbg.__wbg_arcTo_c40da4e2b1607eef = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
        arg0.arcTo(arg1, arg2, arg3, arg4, arg5);
    }, arguments) };
    imports.wbg.__wbg_arc_118b8c012e3e1f2c = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
        arg0.arc(arg1, arg2, arg3, arg4, arg5, arg6 !== 0);
    }, arguments) };
    imports.wbg.__wbg_asyncIterator_9f821a9caebfa811 = function() {
        const ret = Symbol.asyncIterator;
        return ret;
    };
    imports.wbg.__wbg_beginPath_ae4169e263573dcd = function(arg0) {
        arg0.beginPath();
    };
    imports.wbg.__wbg_bezierCurveTo_3ad512ab3d4a1424 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
        arg0.bezierCurveTo(arg1, arg2, arg3, arg4, arg5, arg6);
    };
    imports.wbg.__wbg_bind_cbccb5ef8521a9ce = function(arg0, arg1) {
        const ret = arg0.bind(arg1);
        return ret;
    };
    imports.wbg.__wbg_buffer_ccc4520b36d3ccf4 = function(arg0) {
        const ret = arg0.buffer;
        return ret;
    };
    imports.wbg.__wbg_byobRequest_2344e6975f27456e = function(arg0) {
        const ret = arg0.byobRequest;
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    };
    imports.wbg.__wbg_byteLength_bcd42e4025299788 = function(arg0) {
        const ret = arg0.byteLength;
        return ret;
    };
    imports.wbg.__wbg_byteOffset_ca3a6cf7944b364b = function(arg0) {
        const ret = arg0.byteOffset;
        return ret;
    };
    imports.wbg.__wbg_call_525440f72fbfc0ea = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = arg0.call(arg1, arg2);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_call_e762c39fa8ea36bf = function() { return handleError(function (arg0, arg1) {
        const ret = arg0.call(arg1);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_candlesticks_f17bf8d436f3ae20 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
        const ret = arg0.candlesticks(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4), arg5, arg6);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_canvas_2e1c9769eb5260f2 = function(arg0) {
        const ret = arg0.canvas;
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    };
    imports.wbg.__wbg_chartStream_a420cf2d0681eb8f = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
        const ret = arg0.chartStream(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4), arg5);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_clearInterval_0675249bbe52da7b = function(arg0, arg1) {
        arg0.clearInterval(arg1);
    };
    imports.wbg.__wbg_clearRect_155b2e12f737565e = function(arg0, arg1, arg2, arg3, arg4) {
        arg0.clearRect(arg1, arg2, arg3, arg4);
    };
    imports.wbg.__wbg_clientHeight_03b616d39b2ab49d = function(arg0) {
        const ret = arg0.clientHeight;
        return ret;
    };
    imports.wbg.__wbg_clientWidth_8379f04ef4ca9040 = function(arg0) {
        const ret = arg0.clientWidth;
        return ret;
    };
    imports.wbg.__wbg_clip_7858b458fb895725 = function(arg0) {
        arg0.clip();
    };
    imports.wbg.__wbg_clipboard_83c63b95503bfec1 = function(arg0) {
        const ret = arg0.clipboard;
        return ret;
    };
    imports.wbg.__wbg_closePath_bc64fd4702f5fc60 = function(arg0) {
        arg0.closePath();
    };
    imports.wbg.__wbg_close_5a6caed3231b68cd = function() { return handleError(function (arg0) {
        arg0.close();
    }, arguments) };
    imports.wbg.__wbg_close_6956df845478561a = function() { return handleError(function (arg0) {
        arg0.close();
    }, arguments) };
    imports.wbg.__wbg_codePointAt_01a186303396f7ad = function(arg0, arg1) {
        const ret = arg0.codePointAt(arg1 >>> 0);
        return ret;
    };
    imports.wbg.__wbg_createLinearGradient_65f1563949a5922e = function(arg0, arg1, arg2, arg3, arg4) {
        const ret = arg0.createLinearGradient(arg1, arg2, arg3, arg4);
        return ret;
    };
    imports.wbg.__wbg_currencyRate_cb96611ed7bac947 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
        const ret = arg0.currencyRate(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4), arg5);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_data_b914addaed422fc9 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
        const ret = arg0.data(getStringFromWasm0(arg1, arg2), arg3, arg4);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_devicePixelRatio_495c092455fdf6b1 = function(arg0) {
        const ret = arg0.devicePixelRatio;
        return ret;
    };
    imports.wbg.__wbg_dividends_a775a1b486d6dbbd = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
        const ret = arg0.dividends(getStringFromWasm0(arg1, arg2), arg3, arg4, arg5);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_done_2042aa2670fb1db1 = function(arg0) {
        const ret = arg0.done;
        return ret;
    };
    imports.wbg.__wbg_drawImage_fd72d17e2c1a11b2 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
        arg0.drawImage(arg1, arg2, arg3, arg4, arg5);
    }, arguments) };
    imports.wbg.__wbg_earnings_9b2d1c1a328a0b4e = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
        const ret = arg0.earnings(getStringFromWasm0(arg1, arg2), arg3, arg4, arg5);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_economic_72807e66dff7cb85 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
        const ret = arg0.economic(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4), arg5);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_enqueue_7b18a650aec77898 = function() { return handleError(function (arg0, arg1) {
        arg0.enqueue(arg1);
    }, arguments) };
    imports.wbg.__wbg_entries_e171b586f8f6bdbf = function(arg0) {
        const ret = Object.entries(arg0);
        return ret;
    };
    imports.wbg.__wbg_fillRect_726041755e54e83d = function(arg0, arg1, arg2, arg3, arg4) {
        arg0.fillRect(arg1, arg2, arg3, arg4);
    };
    imports.wbg.__wbg_fillText_c2ae7e4487ec82dd = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.fillText(getStringFromWasm0(arg1, arg2), arg3, arg4);
    }, arguments) };
    imports.wbg.__wbg_fill_c1b94332a3f5eecc = function(arg0) {
        arg0.fill();
    };
    imports.wbg.__wbg_financial_e546331e26231fe7 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
        const ret = arg0.financial(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4), getStringFromWasm0(arg5, arg6), arg7, arg8);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_fontBoundingBoxAscent_7c61ff1e65fe9106 = function(arg0) {
        const ret = arg0.fontBoundingBoxAscent;
        return ret;
    };
    imports.wbg.__wbg_fontBoundingBoxDescent_c88cfa4848b49a1e = function(arg0) {
        const ret = arg0.fontBoundingBoxDescent;
        return ret;
    };
    imports.wbg.__wbg_fromCodePoint_a1c5bb992dc05846 = function() { return handleError(function (arg0) {
        const ret = String.fromCodePoint(arg0 >>> 0);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_getContext_0b80ccb9547db509 = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = arg0.getContext(getStringFromWasm0(arg1, arg2));
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_getTime_14776bfb48a1bff9 = function(arg0) {
        const ret = arg0.getTime();
        return ret;
    };
    imports.wbg.__wbg_get_7bed016f185add81 = function(arg0, arg1) {
        const ret = arg0[arg1 >>> 0];
        return ret;
    };
    imports.wbg.__wbg_get_efcb449f58ec27c2 = function() { return handleError(function (arg0, arg1) {
        const ret = Reflect.get(arg0, arg1);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_get_with_ref_key_1dc361bd10053bfe = function(arg0, arg1) {
        const ret = arg0[arg1];
        return ret;
    };
    imports.wbg.__wbg_height_119077665279308c = function(arg0) {
        const ret = arg0.height;
        return ret;
    };
    imports.wbg.__wbg_historyBarsBefore_5c011308cce66669 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
        const ret = arg0.historyBarsBefore(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4), arg5, arg6);
        return ret;
    }, arguments) };
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
    imports.wbg.__wbg_instanceof_CanvasRenderingContext2d_c0728747cf1e699c = function(arg0) {
        let result;
        try {
            result = arg0 instanceof CanvasRenderingContext2D;
        } catch (_) {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbg_instanceof_Map_8579b5e2ab5437c7 = function(arg0) {
        let result;
        try {
            result = arg0 instanceof Map;
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
    imports.wbg.__wbg_instanceof_Window_4846dbb3de56c84c = function(arg0) {
        let result;
        try {
            result = arg0 instanceof Window;
        } catch (_) {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbg_isArray_96e0af9891d0945d = function(arg0) {
        const ret = Array.isArray(arg0);
        return ret;
    };
    imports.wbg.__wbg_isSafeInteger_d216eda7911dde36 = function(arg0) {
        const ret = Number.isSafeInteger(arg0);
        return ret;
    };
    imports.wbg.__wbg_iterator_e5822695327a3c39 = function() {
        const ret = Symbol.iterator;
        return ret;
    };
    imports.wbg.__wbg_length_69bca3cb64fc8748 = function(arg0) {
        const ret = arg0.length;
        return ret;
    };
    imports.wbg.__wbg_length_a95b69f903b746c4 = function(arg0) {
        const ret = arg0.length;
        return ret;
    };
    imports.wbg.__wbg_length_cdd215e10d9dd507 = function(arg0) {
        const ret = arg0.length;
        return ret;
    };
    imports.wbg.__wbg_lineTo_1e83b5f2f38f15f9 = function(arg0, arg1, arg2) {
        arg0.lineTo(arg1, arg2);
    };
    imports.wbg.__wbg_localcharthandle_new = function(arg0) {
        const ret = LocalChartHandle.__wrap(arg0);
        return ret;
    };
    imports.wbg.__wbg_measureText_d63127eb84829830 = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = arg0.measureText(getStringFromWasm0(arg1, arg2));
        return ret;
    }, arguments) };
    imports.wbg.__wbg_moveTo_8064f6a508217dcd = function(arg0, arg1, arg2) {
        arg0.moveTo(arg1, arg2);
    };
    imports.wbg.__wbg_navigator_971384882e8ea23a = function(arg0) {
        const ret = arg0.navigator;
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
    imports.wbg.__wbg_new_3c3d849046688a66 = function(arg0, arg1) {
        try {
            var state0 = {a: arg0, b: arg1};
            var cb0 = (arg0, arg1) => {
                const a = state0.a;
                state0.a = 0;
                try {
                    return wasm_bindgen__convert__closures_____invoke__h09e1f75621400211(a, state0.b, arg0, arg1);
                } finally {
                    state0.a = a;
                }
            };
            const ret = new Promise(cb0);
            return ret;
        } finally {
            state0.a = state0.b = 0;
        }
    };
    imports.wbg.__wbg_new_5a79be3ab53b8aa5 = function(arg0) {
        const ret = new Uint8Array(arg0);
        return ret;
    };
    imports.wbg.__wbg_new_68651c719dcda04e = function() {
        const ret = new Map();
        return ret;
    };
    imports.wbg.__wbg_new_a7442b4b19c1a356 = function(arg0, arg1) {
        const ret = new Error(getStringFromWasm0(arg0, arg1));
        return ret;
    };
    imports.wbg.__wbg_new_e17d9f43105b08be = function() {
        const ret = new Array();
        return ret;
    };
    imports.wbg.__wbg_new_no_args_ee98eee5275000a4 = function(arg0, arg1) {
        const ret = new Function(getStringFromWasm0(arg0, arg1));
        return ret;
    };
    imports.wbg.__wbg_new_with_byte_offset_and_length_46e3e6a5e9f9e89b = function(arg0, arg1, arg2) {
        const ret = new Uint8Array(arg0, arg1 >>> 0, arg2 >>> 0);
        return ret;
    };
    imports.wbg.__wbg_new_with_into_underlying_source_b47f6a6a596a7f24 = function(arg0, arg1) {
        const ret = new ReadableStream(IntoUnderlyingSource.__wrap(arg0), arg1);
        return ret;
    };
    imports.wbg.__wbg_next_020810e0ae8ebcb0 = function() { return handleError(function (arg0) {
        const ret = arg0.next();
        return ret;
    }, arguments) };
    imports.wbg.__wbg_next_2c826fe5dfec6b6a = function(arg0) {
        const ret = arg0.next;
        return ret;
    };
    imports.wbg.__wbg_now_793306c526e2e3b6 = function() {
        const ret = Date.now();
        return ret;
    };
    imports.wbg.__wbg_prototypesetcall_2a6620b6922694b2 = function(arg0, arg1, arg2) {
        Uint8Array.prototype.set.call(getArrayU8FromWasm0(arg0, arg1), arg2);
    };
    imports.wbg.__wbg_push_df81a39d04db858c = function(arg0, arg1) {
        const ret = arg0.push(arg1);
        return ret;
    };
    imports.wbg.__wbg_quadraticCurveTo_fc736a90d9e7a806 = function(arg0, arg1, arg2, arg3, arg4) {
        arg0.quadraticCurveTo(arg1, arg2, arg3, arg4);
    };
    imports.wbg.__wbg_queueMicrotask_34d692c25c47d05b = function(arg0) {
        const ret = arg0.queueMicrotask;
        return ret;
    };
    imports.wbg.__wbg_queueMicrotask_9d76cacb20c84d58 = function(arg0) {
        queueMicrotask(arg0);
    };
    imports.wbg.__wbg_readText_9f2fda3ca7a307d8 = function(arg0) {
        const ret = arg0.readText();
        return ret;
    };
    imports.wbg.__wbg_rect_d2677b1857072f26 = function(arg0, arg1, arg2, arg3, arg4) {
        arg0.rect(arg1, arg2, arg3, arg4);
    };
    imports.wbg.__wbg_resolve_caf97c30b83f7053 = function(arg0) {
        const ret = Promise.resolve(arg0);
        return ret;
    };
    imports.wbg.__wbg_respond_0f4dbf5386f5c73e = function() { return handleError(function (arg0, arg1) {
        arg0.respond(arg1 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_restore_9e6a0f2c35799ecd = function(arg0) {
        arg0.restore();
    };
    imports.wbg.__wbg_save_62f4925fcc246f6c = function(arg0) {
        arg0.save();
    };
    imports.wbg.__wbg_setInterval_6714a9bec1e91fa3 = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = arg0.setInterval(arg1, arg2);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_setLineDash_6e29ac9fc9f5947f = function() { return handleError(function (arg0, arg1) {
        arg0.setLineDash(arg1);
    }, arguments) };
    imports.wbg.__wbg_setTransform_e4c30e2f7ea8856b = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
        arg0.setTransform(arg1, arg2, arg3, arg4, arg5, arg6);
    }, arguments) };
    imports.wbg.__wbg_set_3f1d0b984ed272ed = function(arg0, arg1, arg2) {
        arg0[arg1] = arg2;
    };
    imports.wbg.__wbg_set_907fb406c34a251d = function(arg0, arg1, arg2) {
        const ret = arg0.set(arg1, arg2);
        return ret;
    };
    imports.wbg.__wbg_set_9e6516df7b7d0f19 = function(arg0, arg1, arg2) {
        arg0.set(getArrayU8FromWasm0(arg1, arg2));
    };
    imports.wbg.__wbg_set_c213c871859d6500 = function(arg0, arg1, arg2) {
        arg0[arg1 >>> 0] = arg2;
    };
    imports.wbg.__wbg_set_c2abbebe8b9ebee1 = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = Reflect.set(arg0, arg1, arg2);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_set_fillStyle_09ee3f808766cffd = function(arg0, arg1) {
        arg0.fillStyle = arg1;
    };
    imports.wbg.__wbg_set_fillStyle_c41ec913f9f22a0c = function(arg0, arg1, arg2) {
        arg0.fillStyle = getStringFromWasm0(arg1, arg2);
    };
    imports.wbg.__wbg_set_font_bd9a29cab7b9db0c = function(arg0, arg1, arg2) {
        arg0.font = getStringFromWasm0(arg1, arg2);
    };
    imports.wbg.__wbg_set_globalAlpha_35c4e27c8e566368 = function(arg0, arg1) {
        arg0.globalAlpha = arg1;
    };
    imports.wbg.__wbg_set_height_89110f48f7fd0817 = function(arg0, arg1) {
        arg0.height = arg1 >>> 0;
    };
    imports.wbg.__wbg_set_high_water_mark_5142ac1d2fb46365 = function(arg0, arg1) {
        arg0.highWaterMark = arg1;
    };
    imports.wbg.__wbg_set_lineCap_db733800cda798fc = function(arg0, arg1, arg2) {
        arg0.lineCap = getStringFromWasm0(arg1, arg2);
    };
    imports.wbg.__wbg_set_lineJoin_ea17f429b111ef34 = function(arg0, arg1, arg2) {
        arg0.lineJoin = getStringFromWasm0(arg1, arg2);
    };
    imports.wbg.__wbg_set_lineWidth_4059ac6bb1d807f8 = function(arg0, arg1) {
        arg0.lineWidth = arg1;
    };
    imports.wbg.__wbg_set_strokeStyle_2c57fc5e26224a64 = function(arg0, arg1) {
        arg0.strokeStyle = arg1;
    };
    imports.wbg.__wbg_set_strokeStyle_475a0c2a522e1c7e = function(arg0, arg1, arg2) {
        arg0.strokeStyle = getStringFromWasm0(arg1, arg2);
    };
    imports.wbg.__wbg_set_textAlign_e2202d9a7471d2d0 = function(arg0, arg1, arg2) {
        arg0.textAlign = getStringFromWasm0(arg1, arg2);
    };
    imports.wbg.__wbg_set_textBaseline_73dbeaf15e2bb1bf = function(arg0, arg1, arg2) {
        arg0.textBaseline = getStringFromWasm0(arg1, arg2);
    };
    imports.wbg.__wbg_set_width_dcc02c61dd01cff6 = function(arg0, arg1) {
        arg0.width = arg1 >>> 0;
    };
    imports.wbg.__wbg_splits_202fd0d52857a0d3 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
        const ret = arg0.splits(getStringFromWasm0(arg1, arg2), arg3, arg4);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_static_accessor_GLOBAL_89e1d9ac6a1b250e = function() {
        const ret = typeof global === 'undefined' ? null : global;
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    };
    imports.wbg.__wbg_static_accessor_GLOBAL_THIS_8b530f326a9e48ac = function() {
        const ret = typeof globalThis === 'undefined' ? null : globalThis;
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    };
    imports.wbg.__wbg_static_accessor_SELF_6fdf4b64710cc91b = function() {
        const ret = typeof self === 'undefined' ? null : self;
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    };
    imports.wbg.__wbg_static_accessor_WINDOW_b45bfc5a37f6cfa2 = function() {
        const ret = typeof window === 'undefined' ? null : window;
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    };
    imports.wbg.__wbg_strokeRect_788876bb2e67b691 = function(arg0, arg1, arg2, arg3, arg4) {
        arg0.strokeRect(arg1, arg2, arg3, arg4);
    };
    imports.wbg.__wbg_stroke_2d2420886d092225 = function(arg0) {
        arg0.stroke();
    };
    imports.wbg.__wbg_symbolInfo_2ad9f852cc5c367c = function() { return handleError(function (arg0, arg1, arg2, arg3) {
        const ret = arg0.symbolInfo(getStringFromWasm0(arg1, arg2), arg3);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_then_4f46f6544e6b4a28 = function(arg0, arg1) {
        const ret = arg0.then(arg1);
        return ret;
    };
    imports.wbg.__wbg_then_70d05cf780a18d77 = function(arg0, arg1, arg2) {
        const ret = arg0.then(arg1, arg2);
        return ret;
    };
    imports.wbg.__wbg_ticks_da874f285d2b469e = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
        const ret = arg0.ticks(getStringFromWasm0(arg1, arg2), arg3, arg4);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_value_692627309814bb8c = function(arg0) {
        const ret = arg0.value;
        return ret;
    };
    imports.wbg.__wbg_view_f6c15ac9fed63bbd = function(arg0) {
        const ret = arg0.view;
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    };
    imports.wbg.__wbg_width_619a651232e6844f = function(arg0) {
        const ret = arg0.width;
        return ret;
    };
    imports.wbg.__wbg_width_9ea2df52b5d2c909 = function(arg0) {
        const ret = arg0.width;
        return ret;
    };
    imports.wbg.__wbg_writeText_0337219b13348e84 = function(arg0, arg1, arg2) {
        const ret = arg0.writeText(getStringFromWasm0(arg1, arg2));
        return ret;
    };
    imports.wbg.__wbindgen_cast_2241b6af4c4b2941 = function(arg0, arg1) {
        // Cast intrinsic for `Ref(String) -> Externref`.
        const ret = getStringFromWasm0(arg0, arg1);
        return ret;
    };
    imports.wbg.__wbindgen_cast_41da98cb2e39d25b = function(arg0, arg1) {
        // Cast intrinsic for `Closure(Closure { dtor_idx: 645, function: Function { arguments: [], shim_idx: 646, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
        const ret = makeMutClosure(arg0, arg1, wasm.wasm_bindgen__closure__destroy__hb26f619182e21929, wasm_bindgen__convert__closures_____invoke__hdad8e08980442495);
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
    imports.wbg.__wbindgen_cast_baf27aeb54898c60 = function(arg0, arg1) {
        // Cast intrinsic for `Closure(Closure { dtor_idx: 1802, function: Function { arguments: [Externref], shim_idx: 1803, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
        const ret = makeMutClosure(arg0, arg1, wasm.wasm_bindgen__closure__destroy__h19febeda49f66582, wasm_bindgen__convert__closures_____invoke__h1c3b971bf5230278);
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
    cachedFloat64ArrayMemory0 = null;
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
        module_or_path = new URL('navi_chart_wasm_bg.wasm', import.meta.url);
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
