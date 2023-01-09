import { bold, yellow, green } from "kleur";


const makeDeployment = async (id: string | undefined, context: () => Promise<void>) => {
	console.log(yellow().bold(`\nStarting ${ id } deployment...\n`))
	await context()
	console.log("\n", green().bold(`[0] ${ id } deployment done\n`))
	console.log("-".repeat(30).padEnd(30, "-"));
}

export default makeDeployment;