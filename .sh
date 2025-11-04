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
rm -rf out/*
tsc
for i in _; do
	rm -rf dist/$i.js
done
for j in dist/*.js; do
	o="$j"
	o="out/${o#dist/}"
	o="${o%.js}.md"
	node $j > "$o"
	cat $o
done