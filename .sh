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
for js in scripts/*; do
	out="$js"
	out="out/${out#scripts/}"
	out="${out%.js}.md"
	node $js > "$out"
done