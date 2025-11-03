function j(...i) {
	return i
		.map(i => Array.isArray(i)
			? i.join(" / ")
			: i
		)
		.join(", ")
}
function q(i) {
	return `\${${i}}`
}
const character = { name: q("character.name") }
function main() {
	const country = q("enter a country...")
	const profession = q(`What is your profession? i.e.: ${j(
		"Knight",
		["Witch", "Wizard"],
		"etc."
	)}`)
	const OUT = `

How does your story begin? Example: You are ${character.name}, a ${profession} from the kingdom of ${country}

`.trim()
	console.log(OUT)
}
main()