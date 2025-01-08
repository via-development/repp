import type { Embed } from "discordeno";
import { prisma } from "..";
import type { Command } from "../types";

export default {
    name: "profile",
    async execute(interaction) {
        const guildUser = await prisma.guildUser.findUnique({
            where: {
                userId_guildId: { userId: interaction.user.id, guildId: interaction.guildId! }
            }
        })
        if (!guildUser) return
        console.log(guildUser, `https://ava.viadev.xyz/${interaction.user.id}`)
        const embed: Embed = {
            title: interaction.user.globalName,
            thumbnail: { url: `https://ava.viadev.xyz/${interaction.user.id}` },
            description: `\`\`\`${guildUser.bio}\`\`\``,
            footer: { text: `@${interaction.user.username} • 👍 ${guildUser.upvotes.length} 👎 ${guildUser.downvotes.length}` }
        }
        return interaction.respond({
            embeds: [embed as any]
        })
    },
} as Command