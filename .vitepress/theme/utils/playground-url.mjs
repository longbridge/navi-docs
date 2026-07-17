const MAX_ENCODED_SOURCE_LENGTH = 512 * 1024

function bytesToBase64(bytes) {
  let binary = ''
  for (let offset = 0; offset < bytes.length; offset += 0x8000) {
    binary += String.fromCharCode(...bytes.subarray(offset, offset + 0x8000))
  }
  return btoa(binary)
}

/** Encode UTF-8 source as unpadded Base64URL for the Playground `code` query parameter. */
export function encodePlaygroundSource(source) {
  return bytesToBase64(new TextEncoder().encode(source))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/g, '')
}

/** Decode a Playground `code` query parameter. Returns null when absent or invalid. */
export function decodePlaygroundSource(search) {
  const encoded = new URLSearchParams(search).get('code')
  if (encoded === null || encoded.length > MAX_ENCODED_SOURCE_LENGTH)
    return null

  try {
    // URLSearchParams turns an unescaped `+` in standard Base64 into a space.
    const base64 = encoded
      .replace(/ /g, '+')
      .replace(/-/g, '+')
      .replace(/_/g, '/')
    const padded = base64.padEnd(base64.length + (4 - base64.length % 4) % 4, '=')
    const binary = atob(padded)
    const bytes = Uint8Array.from(binary, character => character.charCodeAt(0))
    return new TextDecoder('utf-8', { fatal: true }).decode(bytes)
  } catch {
    return null
  }
}
