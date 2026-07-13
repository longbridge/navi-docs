export interface TypeRef {
  display?: string;
  name?: string;
  module?: string;
  [key: string]: unknown;
}

export interface ParamDoc {
  name: string;
  description?: string | null;
  type?: TypeRef | string;
  required?: boolean;
  default?: string | null;
}

export interface OverloadDoc {
  signature?: string;
  description?: string | null;
  params?: ParamDoc[];
  returns?: { type?: TypeRef | string; description?: string | null };
  examples?: string[];
}

export interface FunctionDoc {
  name: string;
  description?: string | null;
  overloads?: OverloadDoc[];
}

export interface TypeDoc {
  name: string;
  description?: string | null;
  kind?: string;
  fields?: Array<{ name: string; description?: string | null; type?: TypeRef | string }>;
  variants?: Array<{ name: string; description?: string | null }>;
}

export interface ModuleDoc {
  name?: string;
  description?: string | null;
  functions?: FunctionDoc[] | Record<string, FunctionDoc>;
  types?: TypeDoc[] | Record<string, TypeDoc>;
}

export interface StdlibDocs {
  modules: Record<string, ModuleDoc>;
}

export function values<T extends { name?: string }>(source?: T[] | Record<string, T>): T[] {
  return Array.isArray(source) ? source : Object.entries(source ?? {}).map(([name, value]) => ({ ...value, name: value.name ?? name }));
}

export function displayType(type?: TypeRef | string): string {
  if (!type) return 'any';
  if (typeof type === 'string') return type;
  return type.display ?? ([type.module, type.name].filter(Boolean).join('.') || JSON.stringify(type));
}
