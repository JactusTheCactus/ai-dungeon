#!/usr/bin/env bash
set -euo pipefail
flag() {
	for f in "$@"; do
		[[ -e ".flags/$f" ]] || return 1
	done
}
if flag local; then
	:
else
	:
fi
rm -rf dist
tsc
rm -rf out/*
for js in dist/*.js; do
	out="$js"
	out="out/${out#dist/}"
	out="${out%.js}.md"
	chmod +x $js
	./$js > "$out"
done