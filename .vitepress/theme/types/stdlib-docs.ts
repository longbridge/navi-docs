/** TypeScript interfaces mirroring the Rust `navi_docgen::schema` types. */

export interface StdlibDocs {
  modules: Record<string, ModuleDoc>
}

export interface ModuleDoc {
  functions: FunctionEntry[]
  types: TypeDefEntry[]
}

export interface FunctionEntry {
  name: string
  overloads: Overload[]
}

export interface Overload {
  kind: string
  receiverType?: TypeRef
  returnType?: TypeRef
  params: ParamDoc[]
  description?: string
  returnsDescription?: string
  examples?: string[]
}

export interface ParamDoc {
  name: string
  type: TypeRef
  description?: string
  is_variadic?: boolean
  defaultValue?: unknown
  defaultExpr?: string
}

export interface TypeRef {
  qualifier?: string
  valueType: ValueTypeRef
}

export interface ValueTypeRef {
  module?: string
  name: string
  genericArgs?: TypeRef[]
  genericParam?: boolean
}

export interface TypeDefEntry {
  name: string
  genericParams?: string[]
  kind: string
  underlyingType?: TypeRef
  fields?: FieldDoc[]
  variants?: EnumVariantDoc[]
  description?: string
  examples?: string[]
  methods?: FunctionEntry[]
  staticMethods?: FunctionEntry[]
  staticProperties?: FunctionEntry[]
}

export interface FieldDoc {
  name: string
  type: TypeRef
  description?: string
}

export interface EnumVariantDoc {
  name: string
  title?: string
  description?: string
}
