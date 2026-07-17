#!/usr/bin/env sh
set -eu

CDN_BASE="${NAVI_CDN_BASE:-https://assets.lbkrs.com/github/release/navi/stable}"
INSTALL_DIR="${NAVI_INSTALL_DIR:-$HOME/.local/bin}"
VERSION="${NAVI_VERSION:-}"

fetch_stdout() {
    url="$1"
    if ! curl -fsSL "$url"; then
        echo "Failed to request: $url" >&2
        exit 1
    fi
}

download() {
    url="$1"
    output="$2"
    if ! curl -fsSL "$url" -o "$output"; then
        echo "Failed to download: $url" >&2
        exit 1
    fi
}

if [ -z "$VERSION" ]; then
    metadata="$(fetch_stdout "$CDN_BASE/latest.json")"
    VERSION="$(printf '%s' "$metadata" | sed -n 's/.*"version"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/p')"
    if [ -z "$VERSION" ]; then
        echo "Invalid release metadata: latest.json has no version" >&2
        exit 1
    fi
fi
VERSION="${VERSION#v}"

# Detect the Linux C library. musl systems (e.g. Alpine) get the static
# musl build; everything else defaults to the glibc build. Override with
# NAVI_LIBC=musl or NAVI_LIBC=gnu.
detect_linux_libc() {
    if [ -n "${NAVI_LIBC:-}" ]; then
        printf '%s' "$NAVI_LIBC"
    elif ldd --version 2>&1 | grep -qi musl; then
        printf 'musl'
    elif [ -f /lib/ld-musl-x86_64.so.1 ] || [ -f /lib/ld-musl-aarch64.so.1 ]; then
        printf 'musl'
    else
        printf 'gnu'
    fi
}

case "$(uname -s)-$(uname -m)" in
    Darwin-x86_64) target="x86_64-apple-darwin" ;;
    Darwin-arm64) target="aarch64-apple-darwin" ;;
    Linux-x86_64)
        if [ "$(detect_linux_libc)" = musl ]; then
            target="x86_64-unknown-linux-musl"
        else
            target="x86_64-unknown-linux-gnu"
        fi
        ;;
    Linux-aarch64 | Linux-arm64)
        # Only a static musl build is published for aarch64 Linux; it runs
        # on both glibc and musl systems.
        target="aarch64-unknown-linux-musl"
        ;;
    *) echo "Unsupported platform: $(uname -s) $(uname -m)" >&2; exit 1 ;;
esac

asset="navi-v${VERSION}-${target}.tar.gz"
tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT INT TERM

download "$CDN_BASE/$asset" "$tmp/$asset"
download "$CDN_BASE/$asset.sha256" "$tmp/$asset.sha256"
(
    cd "$tmp"
    if command -v sha256sum >/dev/null 2>&1; then
        sha256sum -c "$asset.sha256"
    else
        shasum -a 256 -c "$asset.sha256"
    fi
)
tar -xzf "$tmp/$asset" -C "$tmp"
mkdir -p "$INSTALL_DIR"
install -m 755 "$tmp/navi" "$INSTALL_DIR/navi"

echo "Installed navi v${VERSION} to $INSTALL_DIR/navi"
case ":$PATH:" in
    *":$INSTALL_DIR:"*) ;;
    *) echo "Add $INSTALL_DIR to PATH to run navi from your shell." ;;
esac
