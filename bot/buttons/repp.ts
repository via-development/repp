import type { Component } from "../types";
import { type Embed } from "discordeno";
import { makeReppHomePage, makeReppIntroPage ,makeReppNewsPage,makeReppCommandPage, makeReppHomePageButtons, makeReppBackButtons } from "../utils/info";
export default {
    prefix: "help:",
    execute(interaction) {
        const id = interaction.data!.customId!.slice("help:".length) as "introduction" | "news" | "commandlist" | "back"
        var embed: Embed
        var buttons = makeReppBackButtons()

        switch (id) {
            case "introduction":
                embed = makeReppIntroPage()
                
                break;
            case "news":
                embed = makeReppNewsPage()
                break;
            case "commandlist":
                embed = makeReppCommandPage()
                break;
            case "back":
                embed = makeReppHomePage()
                buttons = makeReppHomePageButtons()
        }


        return interaction.edit({
            embeds: [embed as any],
            components: [{
                type: 1, components: buttons as any
            }]
        })
    },
} as Component