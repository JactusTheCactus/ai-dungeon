export function j(...i) {
	return i
		.map(i => Array.isArray(i)
			? i.join(" / ")
			: i
		)
		.join(", ")
}
export function q(i) {
	return `\${${i}}`
}