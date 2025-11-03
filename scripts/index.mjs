import { j, q } from "./modules/functions.mjs"
import { character } from "./modules/variables.mjs"
function main() {
	const _ = {
		country: q("enter a country..."),
		profession: q(`What is your profession? i.e.: ${j(
			"Knight",
			["Witch", "Wizard"],
			"etc."
		)}`)
	}
	console.log(`
You are ${character.name}, a ${_.profession} from the kingdom of ${_.country}
`.trim())
}
main()