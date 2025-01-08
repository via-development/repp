import { ApplicationCommandOptionTypes, type CreateApplicationCommand, createRestManager } from "discordeno";

const rest = createRestManager({
    token: Bun.env.BOT_TOKEN!,
})

const commands = [
    {
        name: "repp",
        description: "Getting those repps in bruv."
    },
    {
        name: "test",
        description: "..."
    },
    {
        name: "profile",
        description: "...",
        options: [{
            type: ApplicationCommandOptionTypes.Mentionable,
            name: "member",
            description: "...",
        }]
    }
] as CreateApplicationCommand[]

await rest.upsertGlobalApplicationCommands(commands)
console.log("Deployed the commands or some shit")

process.exit()