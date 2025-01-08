import type { Command } from "../types";
import { makeReppHomePage, makeReppHomePageButtons } from "../utils/info";

export default {
    name: "repp",
    execute(interaction) {
        return interaction.respond({
            embeds: [makeReppHomePage() as any],
            components: [{
                type: 1, components: makeReppHomePageButtons() as any
            }]
        })
    },
} as Command 