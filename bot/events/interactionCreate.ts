import { InteractionTypes, MessageComponentTypes } from "discordeno";
import type { Command, Component, Event, Interaction } from "../types";
import fs from "fs"
import path from "path";
import { importFolder } from "../utils";

export default {
    name: "interactionCreate",
    execute(interaction: Interaction): any {
        if (!interaction.data || !interaction.guildId) return
        switch (interaction.type) {
            case InteractionTypes.ApplicationCommand:
                return handleCommand(interaction)
            case InteractionTypes.MessageComponent:
                switch (interaction.data!.componentType) {
                    case MessageComponentTypes.Button:
                        return handleButton(interaction)
                }
        }
    }
} as Event



const commands = new Map<string, Command>()

{
    const commandDir = fs.readdirSync(path.resolve(__dirname, "../commands"))
    for (const commandFile of commandDir) {
        if (!commandFile.includes(".ts")) continue
        const raw = await import(path.resolve(__dirname, "../commands", commandFile)).catch(() => null)
        if (raw === null || raw.default == undefined) continue
        const command = raw.default as Command
        commands.set(command.name, command)
    }
}

const handleCommand = (interaction: Interaction): any => {
    const commandName = interaction.data!.name
    if (!commandName) return
    const command = commands.get(commandName)
    command?.execute(interaction)
}

const buttons = await importFolder<Component>(path.resolve(__dirname, "../buttons"))

const handleButton = (interaction: Interaction): any => {
    const customId = interaction.data!.customId
    if (!customId) return
    const button = buttons.find(b => customId.startsWith(b.prefix))
    button?.execute(interaction)
}
