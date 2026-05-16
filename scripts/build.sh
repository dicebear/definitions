#!/bin/bash

# -----------------------------------------------------------------------------
# MIT License
# 
# Copyright (c) 2026 Florian Körner
# 
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
# 
# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.
# 
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.
# -----------------------------------------------------------------------------

set -euo pipefail

BASE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TARGET_DIR="$BASE_DIR/../src"
DIST_DIR="$BASE_DIR/../dist"
LICENSE_FILE="$BASE_DIR/../LICENSE.md"

echo "Minify definition files."

mkdir -p "$DIST_DIR"

PACKAGE_FILE="$BASE_DIR/../package.json"
version=$(jq -r '.version' "$PACKAGE_FILE")
exports="{}"

for f in "$TARGET_DIR"/*.json; do

  [ -f "$f" ] || continue

  name=$(basename "$f" .json)
  echo "  Minify ${name}.json"

  id="https://cdn.hopjs.net/npm/@dicebear/styles@${version}/dist/${name}.min.json"
  jq -c --arg id "$id" '{"$id": $id} + .' "$f" > "$DIST_DIR/${name}.min.json"

  exports=$(echo "$exports" | jq --arg key "./${name}.json" --arg val "./dist/${name}.min.json" '. + {($key): {types: $val, default: $val}}')

done

echo "Update exports in package.json."

jq --argjson exports "$exports" '. + {exports: $exports}' "$PACKAGE_FILE" > "$PACKAGE_FILE.tmp"
mv "$PACKAGE_FILE.tmp" "$PACKAGE_FILE"

echo "Generate LICENSE.md"

cat > "$LICENSE_FILE" << 'EOF'
# License

The avatar styles are subject to different licences. You can find the licence in
the following list or in the individual files.
EOF

for f in "$TARGET_DIR"/*.json; do

  [ -f "$f" ] || continue
  [[ "$f" == *.min.json ]] && continue

  name=$(basename "$f" .json)

  # Convert filename to title: split by -, capitalize each word
  title=$(echo "$name" | sed 's/-/ /g' | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1))substr($i,2)}1')

  license_name=$(jq -r ".meta.license.name // empty" "$f")
  license_url=$(jq -r ".meta.license.url // empty" "$f")
  creator_name=$(jq -r ".meta.creator.name // empty" "$f")
  creator_url=$(jq -r ".meta.creator.url // empty" "$f")
  source_name=$(jq -r ".meta.source.name // empty" "$f")
  source_url=$(jq -r ".meta.source.url // empty" "$f")

  # Collect rows as "label|value" pairs
  rows=()
  rows+=("File|[src/${name}.json](./src/${name}.json)")

  if [ -n "$creator_name" ]; then
    if [ -n "$creator_url" ]; then
      rows+=("Artist|[$creator_name]($creator_url)")
    else
      rows+=("Artist|$creator_name")
    fi
  fi

  if [ -n "$license_name" ] && [ -n "$license_url" ]; then
    rows+=("License|[$license_name]($license_url)")
  fi

  if [ -n "$source_name" ]; then
    if [ -n "$source_url" ]; then
      rows+=("Source|[$source_name]($source_url)")
    else
      rows+=("Source|$source_name")
    fi
  fi

  # Find max value length for column alignment
  max_len=0
  for row in "${rows[@]}"; do
    value="${row#*|}"
    len=${#value}
    [ "$len" -gt "$max_len" ] && max_len=$len
  done

  # Generate separator dashes
  separator=":$(printf '%*s' "$((max_len - 1))" '' | tr ' ' '-')"

  {
    echo ""
    echo "## $title"
    echo ""

    for i in "${!rows[@]}"; do
      label="${rows[$i]%%|*}"
      value="${rows[$i]#*|}"

      # Compensate for multibyte characters (e.g. ö = 2 bytes, 1 char)
      byte_len=$(printf '%s' "$value" | wc -c)
      char_len=${#value}
      pad_len=$((max_len + byte_len - char_len))

      printf '| %7s | %-*s |\n' "$label" "$pad_len" "$value"

      if [ "$i" -eq 0 ]; then
        printf '| %7s | %-*s |\n' "------:" "$max_len" "$separator"
      fi
    done
  } >> "$LICENSE_FILE"

done

echo "Done!"