#!/usr/bin/env node
import { j, q } from "./modules/functions.js"
import { } from "./modules/variables.js"
((): void => {
	const _ = {
		c: {
			n: q("What is your name?"),
			country: q("What is your Kingdom?"),
			job: q(`What is your profession? i.e.: ${j(
				"Knight",
				["Witch", "Wizard"],
				"etc."
			)}`)
		}
	}
	console.log(`
${_.c.n}: "Hi! I'm a ${_.c.job} from the kingdom of ${_.c.country}!"
`.trim())
})()