import { ActivityTypes, createBot } from "discordeno";
import { interactionCreate } from "./events/interactionCreate";
import { PrismaClient } from '@prisma/client'

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
        }
    },
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

client.events.interactionCreate = interactionCreate

client.start()

export { client, prisma }