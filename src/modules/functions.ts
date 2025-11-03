export function j(...i: Array<Array<string> | string>) {
	return i
		.map((i: Array<string> | string) => Array.isArray(i)
			? i.join(" / ")
			: i
		)
		.join(", ")
}
export function q(i: string) {
	return `\${${i}}`
}