import type { Component } from "../types";
import { makeReppHomePage, makeReppNewsPage, makeReppHomePageButtons, makeReppBackButtons } from "../utils/info";
export default {
    prefix: "help:",
    execute(interaction) {
        const id = interaction.data!.customId!.slice("help:".length) as "introduction" | "news" | "commandlist" | "back"
        var embed


        if (id == "news") {
            embed = makeReppNewsPage()
        } else if (id == "introduction") {

        }

        return interaction.edit({
            embeds: [embed as any],
            components: [{
                type: 1, components: makeReppBackButtons() as any
            }]
        })
    },
} as Component