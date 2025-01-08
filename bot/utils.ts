import { InteractionResponseTypes, type Camelize, type DiscordInteractionCallbackResponse, type InteractionCallbackData, type InteractionResponse } from "discordeno"
import fs from "fs"
import path from "path"
import type { Interaction } from "./types"
export const importFolder = async <T>(fullPath: string): Promise<T[]> => {
    const collect: T[] = []
    const dirFiles = fs.readdirSync(fullPath)
    for (const file of dirFiles) {
        if (!file.includes(".ts")) continue
        const raw = await import(path.resolve(fullPath, file)).catch(() => null)
        if (raw === null || raw.default == undefined) continue
        const data = raw.default as T
        collect.push(data)
    }
    return collect
}