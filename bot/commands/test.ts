import { prisma } from "..";
import type { Command } from "../types";

export default {
    name: "test",
    async execute(interaction) {
        const guildUser = await prisma.guildUser.findUnique({
            where: {
                userId_guildId: { userId: 402888568579686401n, guildId: 755877600550977667n }
            }
        })
        console.log(guildUser)
        return interaction.respond({
            content: "```" + JSON.stringify(guildUser, (_, v) => typeof v === 'bigint' ? v.toString() : v, 4) + "```"
        })
    },
} as Command