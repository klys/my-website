#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WEBSITE_DIR="$ROOT_DIR/website"
DIST_DIR="$WEBSITE_DIR/dist"
SCRIPT_NAME="$(basename "$0")"

if [[ ! -d "$WEBSITE_DIR" ]]; then
  echo "Error: website directory not found at $WEBSITE_DIR" >&2
  exit 1
fi

echo "Building React project in $WEBSITE_DIR..."
npm --prefix "$WEBSITE_DIR" run build

if [[ ! -d "$DIST_DIR" ]]; then
  echo "Error: build output directory not found at $DIST_DIR" >&2
  exit 1
fi

echo "Syncing $DIST_DIR to repository root..."
rsync -av --delete \
  --exclude ".git/" \
  --exclude "website/" \
  --exclude "CNAME" \
  --exclude "README.md" \
  --exclude "$SCRIPT_NAME" \
  "$DIST_DIR"/ "$ROOT_DIR"/

echo "Sync complete."
