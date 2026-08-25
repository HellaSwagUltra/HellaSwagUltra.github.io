#!/usr/bin/env bash
set -euo pipefail

project_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
output_dir="$project_dir/out"

if [[ ! -f "$output_dir/index.html" ]]; then
  echo "Static export not found. Run npm run build:pages first." >&2
  exit 1
fi

if [[ "$project_dir" == "/" || ! -f "$project_dir/package.json" ]]; then
  echo "Refusing to sync outside the project directory." >&2
  exit 1
fi

cp "$output_dir/index.html" "$project_dir/index.html"
cp "$output_dir/404.html" "$project_dir/404.html"
cp "$output_dir/og.png" "$project_dir/og.png"
cp "$output_dir/hellaswagultra-paper.pdf" "$project_dir/hellaswagultra-paper.pdf"

for text_file in "$output_dir"/*.txt; do
  cp "$text_file" "$project_dir/"
done

mkdir -p "$project_dir/_next" "$project_dir/_not-found" "$project_dir/figures"
rsync -a --delete "$output_dir/_next/" "$project_dir/_next/"
rsync -a --delete "$output_dir/_not-found/" "$project_dir/_not-found/"
rsync -a --delete "$output_dir/figures/" "$project_dir/figures/"

echo "GitHub Pages export synced to the repository root."
