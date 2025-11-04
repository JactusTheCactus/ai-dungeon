import { outLog } from "./variables.js"
export function log(...l: Array<string>) {
	outLog.push(...l)
}
export function j(...i: Array<Array<string> | string>): string {
	return i
		.map((i: Array<string> | string) => Array.isArray(i)
			? i.join(" / ")
			: i
		)
		.join(", ")
}
export function q(i: string): string {
	return `\${${i}}`
}