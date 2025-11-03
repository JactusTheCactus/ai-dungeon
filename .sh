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
for out in out/*; do
	rm -f $out
done
for mjs in scripts/*.mjs; do
	out="$mjs"
	out="out/${out#scripts/}"
	out="${out%.mjs}.md"
	node $mjs > "$out"
done