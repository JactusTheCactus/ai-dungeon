#!/usr/bin/env node
import { j, q } from "./modules/functions.js"
import { } from "./modules/variables.js"
function main() {
	const _ = {
		character: {
			name: q("What is your name?"),
			country: q("What is your Kingdom?"),
			profession: q(`What is your profession? i.e.: ${j(
				"Knight",
				["Witch", "Wizard"],
				"etc."
			)}`)
		}
	}
	console.log(`
You are ${_.character.name}, a ${_.character.profession} from the kingdom of ${_.character.country}
`.trim())
}
main()