/**
 * Generate localized VitePress markdown pages from locale-specific StdlibDocs JSON.
 *
 * Usage:
 *   node scripts/generate-stdlib-docs.mjs
 *
 * Reads stdlib-docs.{locale}.json from the website directory and emits
 * localized api/stdlib/ pages for en, zh-CN, and zh-HK.
 */

import { readFileSync, writeFileSync, mkdirSync, rmSync } from "fs";
import { dirname, join, resolve } from "path";
import { fileURLToPath } from "url";
import { createHighlighter } from "shiki";

const __dirname = dirname(fileURLToPath(import.meta.url));
const websiteDir = resolve(__dirname, "..");

const LOCALE_CONFIGS = {
  en: {
    jsonPath: resolve(websiteDir, "stdlib-docs.en.json"),
    outDir: resolve(websiteDir, "api", "stdlib"),
    linkPrefix: "",
    strings: {
      title: "Standard Library",
      indexTitle: "Navi Standard Library Reference",
      indexDescription: "Complete API reference for all built-in modules in the Navi standard library.",
      prelude: "Prelude",
      preludeDescription: "Global functions and types available without a namespace prefix.",
      modules: "Modules",
      submodules: "Sub-modules",
      module: "Module",
      description: "Description",
      name: "Name",
      type: "Type",
      default: "Default",
      parameters: "Parameters",
      returns: "Returns",
      examples: "Examples",
      kind: "Kind",
      fields: "Fields",
      variants: "Variants",
      types: "Types",
      properties: "Properties",
      functions: "Functions",
      methods: "Methods",
      preludeTip:
        "The prelude is loaded automatically into every script. Its types and functions are referenced directly by name — do **not** use a namespace prefix (e.g. write `close`, not `prelude.close`).",
      functionsSuffix: "functions",
      staticMethods: "Static Methods",
      staticProperties: "Static Properties",
    },
  },
  "zh-CN": {
    jsonPath: resolve(websiteDir, "stdlib-docs.zh-CN.json"),
    outDir: resolve(websiteDir, "zh-CN", "api", "stdlib"),
    linkPrefix: "/zh-CN",
    strings: {
      title: "标准库",
      indexTitle: "Navi 标准库参考",
      indexDescription: "Navi 标准库内置模块完整 API 参考。",
      prelude: "Prelude",
      preludeDescription: "无需命名空间前缀即可直接使用的全局函数和类型。",
      modules: "模块",
      submodules: "子模块",
      module: "模块",
      description: "说明",
      name: "名称",
      type: "类型",
      default: "默认值",
      parameters: "参数",
      returns: "返回",
      examples: "示例",
      kind: "种类",
      fields: "字段",
      variants: "成员",
      types: "类型",
      properties: "属性",
      functions: "函数",
      methods: "方法",
      preludeTip:
        "Prelude 会自动加载到每个脚本中。它的类型和函数都应直接用名称引用——**不要**添加命名空间前缀（例如写 `close`，而不是 `prelude.close`）。",
      functionsSuffix: "函数",
      staticMethods: "静态方法",
      staticProperties: "静态属性",
    },
  },
  "zh-HK": {
    jsonPath: resolve(websiteDir, "stdlib-docs.zh-HK.json"),
    outDir: resolve(websiteDir, "zh-HK", "api", "stdlib"),
    linkPrefix: "/zh-HK",
    strings: {
      title: "標準庫",
      indexTitle: "Navi 標準庫參考",
      indexDescription: "Navi 標準庫內建模組完整 API 參考。",
      prelude: "Prelude",
      preludeDescription: "可直接使用、無需命名空間前綴的全域函數與類型。",
      modules: "模組",
      submodules: "子模組",
      module: "模組",
      description: "說明",
      name: "名稱",
      type: "類型",
      default: "預設值",
      parameters: "參數",
      returns: "返回",
      examples: "示例",
      kind: "種類",
      fields: "欄位",
      variants: "成員",
      types: "類型",
      properties: "屬性",
      functions: "函數",
      methods: "方法",
      preludeTip:
        "Prelude 會自動載入到每個腳本中。它的類型和函數都應直接以名稱引用——**不要**加上命名空間前綴（例如寫 `close`，不要寫 `prelude.close`）。",
      functionsSuffix: "函數",
      staticMethods: "靜態方法",
      staticProperties: "靜態屬性",
    },
  },
};

let docs;
let symbolIndex;
let enumVariantIndex;
let currentLocaleConfig = LOCALE_CONFIGS.en;

function tr(key) {
  return currentLocaleConfig.strings[key];
}

function modulePageUrl(moduleName) {
  return `${currentLocaleConfig.linkPrefix}/api/stdlib/${moduleName.replace(/\./g, "_")}/`;
}

function typePageUrl(moduleName, typeName) {
  return `${currentLocaleConfig.linkPrefix}/api/stdlib/${moduleName.replace(/\./g, "_")}/${typeName}`;
}

// Load the same Navi grammar that VitePress uses for ```navi blocks
const naviGrammar = {
  ...JSON.parse(
    readFileSync(
      resolve(__dirname, "..", "..", "crates", "lsp", "editors", "vscode", "syntaxes", "navi.tmLanguage.json"),
      "utf-8",
    ),
  ),
  name: "navi",
};

// Create a Shiki highlighter with both light and dark themes matching VitePress defaults
const highlighter = await createHighlighter({
  themes: ["github-light", "github-dark"],
  langs: [naviGrammar],
});

/**
 * Highlight a Navi code string into an inline HTML fragment (no wrapping
 * <pre>/<code> blocks — just the token spans).
 */
function highlightInline(code) {
  const html = highlighter.codeToHtml(code, {
    lang: "navi",
    themes: { light: "github-light", dark: "github-dark" },
  });
  // Shiki outputs <pre ...><code><span class="line">...tokens...</span></code></pre>
  // Extract the inner HTML of the .line span (which contains nested token spans).
  const lineMatch = html.match(/<span class="line">(.*)<\/span><\/code>/s);
  return lineMatch ? lineMatch[1] : code;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function typeRefToString(tr) {
  if (!tr) return "void";
  const qual = tr.qualifier ? `${tr.qualifier} ` : "";
  const vt = tr.valueType;
  const mod = vt.module ? `${vt.module}.` : "";
  const args = vt.genericArgs
    ? `<${vt.genericArgs.map(typeRefToString).join(", ")}>`
    : "";
  return `${qual}${mod}${vt.name}${args}`;
}

/**
 * Convert a TypeRef to an HTML fragment, making the core type name a clickable
 * <a class="stdlib-ref"> link when the type is resolvable in the symbol index.
 * Wrap the result in <code>…</code> at the call site.
 */
function typeRefToHtml(tr, moduleName) {
  if (!tr) return "void";
  const qual = tr.qualifier ? `${escapeHtml(tr.qualifier)}&nbsp;` : "";
  const vt = tr.valueType;
  const displayName = vt.module ? `${vt.module}.${vt.name}` : vt.name;

  // Resolve: dotted name → direct lookup; bare name → current mod → prelude → global
  let url = null;
  if (vt.module) {
    const r = symbolIndex.get(`${vt.module}::${vt.name}::type`);
    url = r ? r.url : null;
  } else {
    const searchOrder = [...new Set([moduleName, "prelude", ...Object.keys(docs.modules)].filter(Boolean))];
    for (const mod of searchOrder) {
      const r = symbolIndex.get(`${mod}::${vt.name}::type`);
      if (r) { url = r.url; break; }
    }
  }

  const genericSuffix = (vt.genericArgs && vt.genericArgs.length > 0)
    ? `&lt;${vt.genericArgs.map(a => typeRefToHtml(a, moduleName)).join(", ")}&gt;`
    : "";

  // Keep generic args outside the <a> to avoid nested <a> elements when args
  // are themselves linked types (e.g. Map<String, any>).
  const nameHtml = url
    ? `<a class="stdlib-ref" href="${url}">${escapeHtml(displayName)}</a>${genericSuffix}`
    : `${escapeHtml(displayName)}${genericSuffix}`;

  return qual + nameHtml;
}

function jsonValueToShort(v) {
  if (v === null || v === undefined) return "na";
  if (typeof v === "boolean") return String(v);
  if (typeof v === "number") return String(v);
  if (typeof v === "string") return `"${v}"`;
  return JSON.stringify(v);
}

function escapeHtml(s) {
  return s.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// ---------------------------------------------------------------------------
// Cross-reference resolution
// ---------------------------------------------------------------------------

/**
 * Build a global symbol index for resolving [`ref`] cross-references.
 * Maps "${module}::${name}::func" and "${module}::${name}::type" to VitePress page URLs.
 * Mirrors the `h3(name, prefix)` anchor logic in generateModulePage.
 */
function buildSymbolIndex(docs) {
  // Maps "${module}::${name}::func|type" → { key: "${module}::${name}", url }
  const index = new Map();
  // Maps "EnumTypeName.VariantName" → { key, url } pointing at the enum type.
  const enumVariantIndex = new Map();
  for (const [modName, mod] of Object.entries(docs.modules)) {
    const pageUrl = modulePageUrl(modName);

    // Count names for collision detection among module-level functions.
    const nameCounts = new Map();
    for (const f of mod.functions)
      nameCounts.set(f.name, (nameCounts.get(f.name) || 0) + 1);

    for (const f of mod.functions) {
      const isProperty = f.overloads.every((ov) => ov.kind === "property" || ov.kind === "staticproperty");
      const isMethod = f.overloads.every((ov) => ov.kind === "method" || ov.kind === "staticmethod");
      const idPrefix = isProperty ? "prop" : isMethod ? "method" : "fn";
      const anchor = nameCounts.get(f.name) > 1 ? `${idPrefix}-${f.name}` : f.name;
      index.set(`${modName}::${f.name}::func`, {
        key: `${modName}::${f.name}`,
        url: `${pageUrl}#${anchor}`,
      });
    }

    for (const t of mod.types) {
      const typeEntry = { key: `${modName}::${t.name}`, url: typePageUrl(modName, t.name) };
      index.set(`${modName}::${t.name}::type`, typeEntry);

      // Index type members (methods / static methods / static properties)
      for (const f of [...(t.methods ?? []), ...(t.staticMethods ?? []), ...(t.staticProperties ?? [])]) {
        index.set(`${modName}::${f.name}::func`, {
          key: `${modName}::${f.name}`,
          url: `${typePageUrl(modName, t.name)}#${f.name}`,
        });
      }

      // Index enum variants so "EnumName.VariantName" refs resolve to the enum type.
      if (t.kind === "enum" && t.variants) {
        for (const variant of t.variants) {
          enumVariantIndex.set(`${t.name}.${variant.name}`, typeEntry);
        }
      }
    }
  }
  return { index, enumVariantIndex };
}

/**
 * Resolve a cross-reference string (e.g. "fill", "func:plot", "plot.style_line")
 * to a VitePress page URL, or null if not found.
 * Supports qualifier prefixes: func / type / enum.
 */
function resolveRef(ref, currentModule) {
  let qualifier;
  let name = ref;
  if (ref.includes(":")) {
    const ci = ref.indexOf(":");
    qualifier = ref.slice(0, ci);
    name = ref.slice(ci + 1);
  }

  // Returns { key, url } if typeName.variantName matches a known enum variant.
  function lookupEnumVariant(typeName, variantName) {
    return enumVariantIndex.get(`${typeName}.${variantName}`) ?? null;
  }

  // Returns { key, url } or undefined.
  function lookup(mod, sym) {
    if (!qualifier || qualifier === "func") {
      const r = symbolIndex.get(`${mod}::${sym}::func`);
      if (r) return r;
    }
    if (!qualifier || qualifier === "type" || qualifier === "enum") {
      const r = symbolIndex.get(`${mod}::${sym}::type`);
      if (r) return r;
    }
    return undefined;
  }

  if (name.includes(".")) {
    const di = name.indexOf(".");
    const mod = name.slice(0, di);
    const sym = name.slice(di + 1);
    // `variant:TypeName.VariantName` — explicit enum variant qualifier.
    if (qualifier === "variant") {
      return lookupEnumVariant(mod, sym);
    }
    // First try as a module member (e.g. "barmerge.gaps_off").
    const r = lookup(mod, sym);
    if (r) return r;
    // Fall back: check if `mod` is an enum type name with a variant `sym`.
    // In that case, resolve to the enum type itself (linking to its type section).
    const enumResult = lookupEnumVariant(mod, sym);
    if (enumResult) return enumResult;
    return null;
  }
  // Bare name: current module → prelude → global search
  if (currentModule) {
    const r = lookup(currentModule, name);
    if (r) return r;
  }
  const pr = lookup("prelude", name);
  if (pr) return pr;
  for (const modName of Object.keys(docs.modules)) {
    const r = lookup(modName, name);
    if (r) return r;
  }
  return null;
}

/**
 * Process a description string: convert [`ref`] / [`qualifier:ref`] cross-references
 * to <a class="stdlib-ref"> links that trigger the dialog, then HTML-escape the rest.
 * Non-link text segments are HTML-escaped; generated HTML links are not double-escaped.
 */
function processDesc(text, currentModule) {
  if (!text) return "";
  const parts = [];
  let lastIndex = 0;
  const re = /\[`((?:\w+:)?[\w.]+)`\]/g;
  let match;
  while ((match = re.exec(text)) !== null) {
    if (match.index > lastIndex)
      parts.push(escapeHtml(text.slice(lastIndex, match.index)));
    const ref = match[1];
    const displayName = escapeHtml(ref.includes(":") ? ref.slice(ref.indexOf(":") + 1) : ref);
    const result = resolveRef(ref, currentModule);
    if (!result) {
      parts.push(`<code>${displayName}</code>`);
    } else {
      parts.push(
        `<a class="stdlib-ref" data-key="${result.key}" href="${result.url}">${displayName}</a>`
      );
    }
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length)
    parts.push(escapeHtml(text.slice(lastIndex)));
  return parts.join("");
}

// ---------------------------------------------------------------------------
// Signature formatting
// ---------------------------------------------------------------------------

function formatSignature(moduleName, funcName, ov, { singleLine = false } = {}) {
  if (ov.kind === "property") {
    const ret = ov.returnType ? `: ${typeRefToString(ov.returnType)}` : "";
    const prefix = moduleName !== "prelude" ? `${moduleName}.` : "";
    return `${prefix}${funcName}${ret}`;
  }

  if (ov.kind === "staticproperty") {
    const ret = ov.returnType ? `: ${typeRefToString(ov.returnType)}` : "";
    const prefix = ov.receiverType ? `${ov.receiverType.valueType.name}.` : "";
    return `${prefix}${funcName}${ret}`;
  }

  const prefix =
    (ov.kind === "method" || ov.kind === "staticmethod") && ov.receiverType
      ? `${ov.receiverType.valueType.name}.`
      : ov.kind === "operator"
        ? ""
        : moduleName !== "prelude"
          ? `${moduleName}.`
          : "";

  const paramParts = ov.params.map((p) => {
    let s = `${p.name}: ${typeRefToString(p.type)}`;
    if (p.defaultValue !== undefined) {
      s += ` = ${jsonValueToShort(p.defaultValue)}`;
    } else if (p.defaultExpr) {
      s += ` = ${p.defaultExpr}`;
    }
    return s;
  });

  const ret = ov.returnType ? `: ${typeRefToString(ov.returnType)}` : "";

  // Single-line attempt (always used for tab labels)
  const oneLine = `${prefix}${funcName}(${paramParts.join(", ")})${ret}`;
  if (singleLine || oneLine.length <= 80 || paramParts.length === 0) {
    return oneLine;
  }

  // Multi-line: one parameter per line, indented by 4 spaces
  const indent = "    ";
  const joined = paramParts.map((p, i) =>
    i < paramParts.length - 1 ? `${indent}${p},` : `${indent}${p}`
  ).join("\n");
  return `${prefix}${funcName}(\n${joined}\n  )${ret}`;
}

// ---------------------------------------------------------------------------
// Page generators
// ---------------------------------------------------------------------------

function generateParamsTable(params, moduleName) {
  const lines = [];
  lines.push(`| ${tr("name")} | ${tr("type")} | ${tr("default")} | ${tr("description")} |`);
  lines.push("| --- | --- | --- | --- |");
  for (const p of params) {
    const type = `<code>${typeRefToHtml(p.type, moduleName)}</code>`;
    const def =
      p.defaultValue !== undefined
        ? `\`${jsonValueToShort(p.defaultValue)}\``
        : p.defaultExpr
          ? `\`${p.defaultExpr}\``
          : "";
    const desc = processDesc(p.description || "", moduleName);
    lines.push(`| \`${p.name}\` | ${type} | ${def} | ${desc} |`);
  }
  return lines.join("\n");
}

function generateSingleOverload(moduleName, funcName, ov) {
  const lines = [];

  // Signature code block
  lines.push("```navi");
  lines.push(formatSignature(moduleName, funcName, ov));
  lines.push("```");
  lines.push("");

  // Description
  if (ov.description) {
    lines.push(processDesc(ov.description, moduleName));
    lines.push("");
  }

  // Parameters table
  if (ov.params.length > 0) {
    lines.push(`**${tr("parameters")}**`);
    lines.push("");
    lines.push(generateParamsTable(ov.params, moduleName));
    lines.push("");
  }

  // Returns
  if (ov.returnType) {
    const retDesc = ov.returnsDescription ? ` — ${processDesc(ov.returnsDescription, moduleName)}` : "";
    lines.push(`**${tr("returns")}:** <code>${typeRefToHtml(ov.returnType, moduleName)}</code>${retDesc}`);
    lines.push("");
  } else if (ov.returnsDescription) {
    lines.push(`**${tr("returns")}:** ${processDesc(ov.returnsDescription, moduleName)}`);
    lines.push("");
  }

  // Examples
  if (ov.examples && ov.examples.length > 0) {
    lines.push(`**${tr("examples")}**`);
    lines.push("");
    for (const ex of ov.examples) {
      lines.push("```navi");
      lines.push(ex);
      lines.push("```");
      lines.push("");
    }
  }

  return lines.join("\n");
}

/**
 * Build a full-signature label for an overload tab, highlighted as HTML.
 */
function overloadLabel(moduleName, funcName, ov) {
  return highlightInline(formatSignature(moduleName, funcName, ov, { singleLine: true }));
}

/** Type display name with HTML-safe angle brackets (for use inside rendered content). */
function typeDisplayName(t) {
  const g = t.genericParams?.length ? `&lt;${t.genericParams.join(", ")}&gt;` : "";
  return `${t.name}${g}`;
}

/** Type display name with plain angle brackets (for frontmatter / URLs / link text). */
function typeDisplayNamePlain(t) {
  const g = t.genericParams?.length ? `<${t.genericParams.join(", ")}>` : "";
  return `${t.name}${g}`;
}

function generateTypeDefWithId(t, h3, moduleName) {
  const lines = [];
  lines.push(h3(typeDisplayName(t), "type"));
  return generateTypeDefBody(t, lines, moduleName);
}

function generateTypeDef(t, moduleName) {
  const lines = [];
  lines.push(`### ${typeDisplayName(t)}`);
  return generateTypeDefBody(t, lines, moduleName);
}

function generateTypeDefBody(t, lines, moduleName) {
  lines.push("");

  if (t.description) {
    lines.push(processDesc(t.description, moduleName));
    lines.push("");
  }

  if (t.kind !== "newtype" && t.kind !== "primitive") {
    lines.push(`**${currentLocaleConfig.strings.kind}:** ${t.kind}`);
    lines.push("");
  }

  if (t.fields && t.fields.length > 0) {
    lines.push(`**${currentLocaleConfig.strings.fields}**`);
    lines.push("");
    lines.push(`| ${tr("name")} | ${tr("type")} | ${tr("description")} |`);
    lines.push("| --- | --- | --- |");
    for (const f of t.fields) {
      const desc = f.description ? processDesc(f.description, moduleName) : "";
      lines.push(`| \`${f.name}\` | <code>${typeRefToHtml(f.type, moduleName)}</code> | ${desc} |`);
    }
    lines.push("");
  }

  if (t.variants && t.variants.length > 0) {
    lines.push(`**${currentLocaleConfig.strings.variants}**`);
    lines.push("");
    lines.push(`| ${tr("name")} | ${tr("description")} |`);
    lines.push("| --- | --- |");
    for (const v of t.variants) {
      const parts = [];
      if (v.title) parts.push(v.title);
      if (v.description) parts.push(processDesc(v.description, moduleName));
      const desc = parts.join(" — ");
      lines.push(`| \`${v.name}\` | ${desc} |`);
    }
    lines.push("");
  }

  if (t.examples && t.examples.length > 0) {
    lines.push(`**${tr("examples")}**`);
    lines.push("");
    for (const ex of t.examples) {
      lines.push("```navi");
      lines.push(ex);
      lines.push("```");
      lines.push("");
    }
  }

  return lines.join("\n");
}


/**
 * Generate a dedicated page for a single type, including its definition and
 * any associated methods / static methods / static properties.
 */
function generateTypePage(typeName, typeDef, moduleName) {
  const lines = [];

  const isPrelude = moduleName === "prelude";
  const baseTitle = isPrelude ? typeName : `${moduleName}.${typeName}`;
  // Append generic params if present, e.g. "Array<T>" or "Map<K, V>".
  // Use HTML entities in headings — Vue/VitePress parses <T> as an HTML tag.
  const genericSuffix = typeDef.genericParams?.length
    ? `&lt;${typeDef.genericParams.join(", ")}&gt;`
    : "";
  const displayTitle = baseTitle + genericSuffix;
  // Plain text version for frontmatter (no HTML entities needed).
  const displayTitlePlain = baseTitle + (typeDef.genericParams?.length
    ? `<${typeDef.genericParams.join(", ")}>`
    : "");

  // Methods/staticMethods/staticProperties are now directly on the typeDef.
  const regularMethods = typeDef.methods ?? [];
  const staticMethods  = typeDef.staticMethods ?? [];
  const staticProps    = typeDef.staticProperties ?? [];

  // Collect vue refs for multi-overload methods
  const multiOverloads = [];
  let ovIdx = 0;
  for (const f of [...staticMethods, ...regularMethods]) {
    if (f.overloads.length > 1)
      multiOverloads.push({ refName: `_s${ovIdx++}`, funcName: f.name });
  }

  lines.push("---");
  lines.push(`title: "${displayTitlePlain}"`);
  lines.push("---");

  if (multiOverloads.length > 0) {
    lines.push("");
    lines.push("<script setup>");
    lines.push("import { ref } from 'vue'");
    for (const { refName } of multiOverloads)
      lines.push(`const ${refName} = ref(0)`);
    lines.push("</script>");
  }

  lines.push("");
  lines.push(`# ${displayTitle}`);
  lines.push("");

  // Type definition body
  if (typeDef.description) {
    lines.push(processDesc(typeDef.description, moduleName));
    lines.push("");
  }
  if (typeDef.kind !== "newtype" && typeDef.kind !== "primitive") {
    lines.push(`**${tr("kind")}:** ${typeDef.kind}`);
    lines.push("");
  }
  if (typeDef.fields && typeDef.fields.length > 0) {
    lines.push(`**${tr("fields")}**`);
    lines.push("");
    lines.push(`| ${tr("name")} | ${tr("type")} | ${tr("description")} |`);
    lines.push("| --- | --- | --- |");
    for (const f of typeDef.fields) {
      const desc = f.description ? processDesc(f.description, moduleName) : "";
      lines.push(`| \`${f.name}\` | <code>${typeRefToHtml(f.type, moduleName)}</code> | ${desc} |`);
    }
    lines.push("");
  }
  if (typeDef.variants && typeDef.variants.length > 0) {
    lines.push(`**${tr("variants")}**`);
    lines.push("");
    lines.push(`| ${tr("name")} | ${tr("description")} |`);
    lines.push("| --- | --- |");
    for (const v of typeDef.variants) {
      const parts = [];
      if (v.title) parts.push(v.title);
      if (v.description) parts.push(processDesc(v.description, moduleName));
      lines.push(`| \`${v.name}\` | ${parts.join(" — ")} |`);
    }
    lines.push("");
  }
  if (typeDef.examples && typeDef.examples.length > 0) {
    lines.push(`**${tr("examples")}**`);
    lines.push("");
    for (const ex of typeDef.examples) {
      lines.push("```navi");
      lines.push(ex);
      lines.push("```");
      lines.push("");
    }
  }

  const refByFunc = new Map(multiOverloads.map(mo => [mo.funcName, mo.refName]));

  function emitMethodList(list, sectionTitle) {
    if (list.length === 0) return;
    lines.push(`## ${sectionTitle}`);
    lines.push("");
    for (let i = 0; i < list.length; i++) {
      const f = list[i];
      if (i > 0) { lines.push("---"); lines.push(""); }
      lines.push(`### ${f.name} {#${f.name}}`);
      lines.push("");
      if (f.overloads.length === 1) {
        lines.push(generateSingleOverload(moduleName, f.name, f.overloads[0]));
      } else {
        lines.push(generateMultiOverload(moduleName, f.name, f.overloads, refByFunc.get(f.name)));
      }
    }
  }

  // Order: staticmethod → staticproperty → method → property
  emitMethodList(staticMethods, tr("staticMethods"));

  // Static properties
  if (staticProps.length > 0) {
    lines.push(`## ${tr("staticProperties")}`);
    lines.push("");
    for (let i = 0; i < staticProps.length; i++) {
      const f = staticProps[i];
      if (i > 0) { lines.push("---"); lines.push(""); }
      lines.push(`### ${f.name} {#${f.name}}`);
      lines.push("");
      for (const ov of f.overloads) {
        const retHtml = ov.returnType ? typeRefToHtml(ov.returnType, moduleName) : "void";
        lines.push(`**${tr("type")}:** <code>${retHtml}</code>`);
        lines.push("");
        if (ov.description) {
          lines.push(processDesc(ov.description, moduleName));
          lines.push("");
        }
      }
    }
  }

  emitMethodList(regularMethods, tr("methods"));

  return lines.join("\n");
}

/**
 * Generate the content for a single overload *without* the signature code
 * block (used inside multi-overload tabs where the signature is already
 * shown in the tab label).
 */
function generateOverloadBody(ov, moduleName) {
  const lines = [];

  if (ov.description) {
    lines.push(processDesc(ov.description, moduleName));
    lines.push("");
  }

  if (ov.params.length > 0) {
    lines.push(`**${tr("parameters")}**`);
    lines.push("");
    lines.push(generateParamsTable(ov.params, moduleName));
    lines.push("");
  }

  if (ov.returnType) {
    const retDesc = ov.returnsDescription ? ` — ${processDesc(ov.returnsDescription, moduleName)}` : "";
    lines.push(`**${tr("returns")}:** <code>${typeRefToHtml(ov.returnType, moduleName)}</code>${retDesc}`);
    lines.push("");
  } else if (ov.returnsDescription) {
    lines.push(`**${tr("returns")}:** ${processDesc(ov.returnsDescription, moduleName)}`);
    lines.push("");
  }

  // Examples
  if (ov.examples && ov.examples.length > 0) {
    lines.push(`**${tr("examples")}**`);
    lines.push("");
    for (const ex of ov.examples) {
      lines.push("```navi");
      lines.push(ex);
      lines.push("```");
      lines.push("");
    }
  }

  return lines.join("\n");
}

/**
 * Generate the markdown content for a multi-overload function, using
 * <OverloadTabs v-model> + <div v-show> blocks. The tab labels show the
 * full signature with syntax highlighting; tab bodies show only the
 * description, parameter table, and return info.
 */
function generateMultiOverload(moduleName, funcName, overloads, refName) {
  const lines = [];

  // Plain-text labels with full signatures
  const labels = overloads.map((ov) => overloadLabel(moduleName, funcName, ov));
  const labelsJson = JSON.stringify(labels).replace(/'/g, "&#39;");
  lines.push(`<OverloadTabs v-model="${refName}" :labels='${labelsJson}' />`);
  lines.push("");

  for (let i = 0; i < overloads.length; i++) {
    const ov = overloads[i];
    lines.push(`<div v-show="${refName} === ${i}">`);
    lines.push("");
    lines.push(generateOverloadBody(ov, moduleName));
    lines.push("</div>");
    lines.push("");
  }

  return lines.join("\n");
}

function generateModulePage(moduleName, module) {
  const lines = [];

  // Separate properties / functions / methods.
  // Type-associated members are no longer in module.functions (moved to type entries by docgen).
  const properties = [];
  const funcs = [];
  const methods = [];
  for (const f of module.functions) {
    const isProperty = f.overloads.every((ov) => ov.kind === "property" || ov.kind === "staticproperty");
    const isMethod = f.overloads.every((ov) => ov.kind === "method" || ov.kind === "staticmethod" || ov.kind === "operator");
    if (isProperty) {
      properties.push(f);
    } else if (isMethod) {
      methods.push(f);
    } else {
      funcs.push(f);
    }
  }

  // Collect refs for multi-overload functions and methods
  const multiOverloads = [];
  let ovIdx = 0;
  for (const f of [...funcs, ...methods]) {
    if (f.overloads.length > 1) {
      multiOverloads.push({ refName: `_s${ovIdx++}`, funcName: f.name });
    }
  }

  lines.push("---");
  lines.push(`title: "${moduleName}"`);
  lines.push("---");

  if (multiOverloads.length > 0) {
    lines.push("");
    lines.push("<script setup>");
    lines.push("import { ref } from 'vue'");
    for (const { refName } of multiOverloads) {
      lines.push(`const ${refName} = ref(0)`);
    }
    lines.push("</script>");
  }
  lines.push("");
  lines.push(`# ${moduleName}`);
  lines.push("");

  if (moduleName === "prelude") {
    lines.push(
      "::: tip",
      currentLocaleConfig.strings.preludeTip,
      ":::",
    );
    lines.push("");
  }

  const refByFunc = new Map(multiOverloads.map((mo) => [mo.funcName, mo.refName]));

  // Collision detection only among entries rendered on this page
  const nameCounts = new Map();
  for (const f of properties) nameCounts.set(f.name, (nameCounts.get(f.name) || 0) + 1);
  for (const f of funcs)      nameCounts.set(f.name, (nameCounts.get(f.name) || 0) + 1);
  for (const f of methods)    nameCounts.set(f.name, (nameCounts.get(f.name) || 0) + 1);

  function h3(name, prefix) {
    if (nameCounts.get(name) > 1) {
      return `### ${name} {#${prefix}-${name}}`;
    }
    return `### ${name} {#${name}}`;
  }

  function emitFuncList(list, sectionTitle, idPrefix) {
    if (list.length === 0) return;
    lines.push(`## ${sectionTitle}`);
    lines.push("");
    for (let i = 0; i < list.length; i++) {
      const f = list[i];
      if (i > 0) {
        lines.push("---");
        lines.push("");
      }
      lines.push(h3(f.name, idPrefix));
      lines.push("");
      if (f.overloads.length === 1) {
        lines.push(generateSingleOverload(moduleName, f.name, f.overloads[0]));
      } else {
        const refName = refByFunc.get(f.name);
        lines.push(generateMultiOverload(moduleName, f.name, f.overloads, refName));
      }
    }
  }

  // Types section — link table pointing to individual type pages
  if (module.types.length > 0) {
    lines.push(`## ${currentLocaleConfig.strings.types}`);
    lines.push("");
    lines.push(`| ${tr("name")} | ${tr("description")} |`);
    lines.push("| --- | --- |");
    for (const t of module.types) {
      const firstSentence = t.description
        ? processDesc(t.description.split(/(?<=[.。])\s/)[0], moduleName)
        : "";
      const tGeneric = t.genericParams?.length ? `<${t.genericParams.join(", ")}>` : "";
      lines.push(`| [\`${t.name}${tGeneric}\`](${typePageUrl(moduleName, t.name)}) | ${firstSentence} |`);
    }
    lines.push("");
  }

  // Properties
  if (properties.length > 0) {
    lines.push(`## ${currentLocaleConfig.strings.properties}`);
    lines.push("");
    for (let i = 0; i < properties.length; i++) {
      const f = properties[i];
      if (i > 0) {
        lines.push("---");
        lines.push("");
      }
      lines.push(h3(f.name, "prop"));
      lines.push("");
      for (const ov of f.overloads) {
        const retHtml = ov.returnType ? typeRefToHtml(ov.returnType, moduleName) : "void";
        lines.push(`**${tr("type")}:** <code>${retHtml}</code>`);
        lines.push("");
        if (ov.description) {
          lines.push(processDesc(ov.description, moduleName));
          lines.push("");
        }
      }
    }
  }

  emitFuncList(funcs, currentLocaleConfig.strings.functions, "fn");
  emitFuncList(methods, currentLocaleConfig.strings.methods, "method");

  return lines.join("\n");
}

function generateIndexPage(moduleNames) {
  const lines = [];

  lines.push("---");
  lines.push(`title: "${currentLocaleConfig.strings.title}"`);
  lines.push("---");
  lines.push("");
  lines.push(`# ${currentLocaleConfig.strings.indexTitle}`);
  lines.push("");
  lines.push(currentLocaleConfig.strings.indexDescription);
  lines.push("");

  // Group modules: prelude first, then namespaced (ta, math, ...), then sub-namespaced (strategy.*)
  const prelude = moduleNames.includes("prelude") ? ["prelude"] : [];
  const sub = moduleNames.filter((n) => n.includes(".")).sort();
  const top = moduleNames
    .filter((n) => n !== "prelude" && !n.includes("."))
    .sort();

  if (prelude.length > 0) {
    lines.push(`## ${currentLocaleConfig.strings.prelude}`);
    lines.push("");
    lines.push(currentLocaleConfig.strings.preludeDescription);
    lines.push("");
    lines.push(`- [prelude](${modulePageUrl("prelude")})`);
    lines.push("");
  }

  lines.push(`## ${currentLocaleConfig.strings.modules}`);
  lines.push("");
  lines.push(`| ${currentLocaleConfig.strings.module} | ${currentLocaleConfig.strings.description} |`);
  lines.push("| --- | --- |");
  for (const name of top) {
    lines.push(`| [${name}](${modulePageUrl(name)}) | \`${name}.*\` ${currentLocaleConfig.strings.functionsSuffix} |`);
  }
  lines.push("");

  if (sub.length > 0) {
    lines.push(`## ${currentLocaleConfig.strings.submodules}`);
    lines.push("");
    lines.push(`| ${currentLocaleConfig.strings.module} | ${currentLocaleConfig.strings.description} |`);
    lines.push("| --- | --- |");
    for (const name of sub) {
      lines.push(`| [${name}](${modulePageUrl(name)}) | \`${name}.*\` ${currentLocaleConfig.strings.functionsSuffix} |`);
    }
    lines.push("");
  }

  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

for (const [locale, config] of Object.entries(LOCALE_CONFIGS)) {
  currentLocaleConfig = config;
  const raw = readFileSync(config.jsonPath, "utf-8");
  docs = JSON.parse(raw);

  // Build symbol index for cross-reference resolution
  ({ index: symbolIndex, enumVariantIndex } = buildSymbolIndex(docs));

  // Clean output directory
  rmSync(config.outDir, { recursive: true, force: true });
  mkdirSync(config.outDir, { recursive: true });

  const moduleNames = Object.keys(docs.modules).sort();

  // Generate index page
  writeFileSync(join(config.outDir, "index.md"), generateIndexPage(moduleNames));

  // Generate per-module pages (each module → module/index.md + module/TypeName.md)
  let typePageCount = 0;
  for (const name of moduleNames) {
    const moduleDoc = docs.modules[name];
    const moduleDir = join(config.outDir, name.replace(/\./g, "_"));
    mkdirSync(moduleDir, { recursive: true });

    writeFileSync(join(moduleDir, "index.md"), generateModulePage(name, moduleDoc));

    // Generate a dedicated page for each type in this module
    for (const typeDef of moduleDoc.types) {
      writeFileSync(
        join(moduleDir, `${typeDef.name}.md`),
        generateTypePage(typeDef.name, typeDef, name),
      );
      typePageCount++;
    }
  }

  console.log(
    `Generated ${moduleNames.length} module pages + ${typePageCount} type pages + index for ${locale} in ${config.outDir}`
  );
}

// ---------------------------------------------------------------------------
// Generate stdlib-sidebar.json — compact sidebar data for api-sidebar.ts
// ---------------------------------------------------------------------------

const sidebarData = {};

for (const [locale, config] of Object.entries(LOCALE_CONFIGS)) {
  const raw = readFileSync(config.jsonPath, "utf-8");
  const localeDocs = JSON.parse(raw);

  const prelude = localeDocs.modules["prelude"] ?? { types: [], functions: [] };
  const typeNames = new Set(prelude.types.map((t) => t.name));

  const functions = [];
  const properties = [];
  for (const f of prelude.functions) {
    const receiverName = f.overloads[0]?.receiverType?.valueType?.name;
    const isTypeAssociated =
      receiverName &&
      typeNames.has(receiverName) &&
      f.overloads.some((ov) =>
        ["method", "staticmethod", "staticproperty", "operator"].includes(ov.kind),
      );
    if (isTypeAssociated) continue;
    if (f.overloads.some((ov) => ov.kind === "property")) properties.push(f.name);
    if (f.overloads.some((ov) => ov.kind !== "property")) functions.push(f.name);
  }

  sidebarData[locale] = {
    prelude: {
      types: prelude.types.map((t) => ({
        name: t.name,
        genericParams: t.genericParams ?? [],
      })),
      functions: functions.sort(),
      properties: properties.sort(),
    },
    modules: Object.keys(localeDocs.modules)
      .filter((n) => n !== "prelude")
      .sort(),
  };
}

writeFileSync(
  resolve(websiteDir, "stdlib-sidebar.json"),
  JSON.stringify(sidebarData, null, 2),
);
console.log("Generated stdlib-sidebar.json");
