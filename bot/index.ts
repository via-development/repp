import { ActivityTypes, createBot, Intents } from "discordeno";
import { PrismaClient } from '@prisma/client'
import { importFolder } from "./utils";
import path from "path"
import type { Event } from "./types";

const prisma = new PrismaClient()

const client = createBot({
    token: Bun.env.BOT_TOKEN!,
    desiredProperties: {
        interaction: {
            type: true,
            data: true,
            token: true,
            id: true,
            guildId: true,
            user: true,
            member: true
        },
        user: {
            id: true,
            avatar: true,
            globalName: true,
            username: true,
            toggles: true
        },
        message: {
            guildId: true,
            author: true,
            content: true,
            channelId: true,
            id: true
        }
    },
    intents: Intents.MessageContent | Intents.GuildMessages | Intents.Guilds,
    gateway: {
        makePresence: async () => ({
            status: "online",
            activities: [{
                type: ActivityTypes.Custom,
                name: "/repp • 🧑‍⚖️ Judging you."
            }],
            since: 0
        })
    },
})

{
    const events = await importFolder<Event>(path.resolve(__dirname, "events"))
    for (const event of events) {
        // @ts-ignore
        client.events[event.name] = event.execute
    }
}

client.start()

export { client, prisma }