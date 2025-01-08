import { ButtonStyles, MessageComponentTypes, type ButtonComponent, type Embed } from "discordeno";
import { $button } from "./component";

const VERSION = "V3.0"

export const makeReppHomePage = (): Embed => ({
    title: "Ready to be judged? <:e:1279926203616198737><:e:1279926138923253831>",
    image: { url: "https://i.imgur.com/A4t0eEu.png" },
    color: 0xA757F7,
    footer: { text: `${VERSION}` }
})

export const makeReppNewsPage = (): Embed => ({
    title: "REPP is in beta! - v0.3",
    description: ":warning: **New Language**\n> It's in typescript now!",
    color: 0xA757F7,
    footer: { text: `${VERSION}` }
})

export const makeReppCommandPage = (): Embed => ({
    title: "REPP Command List",
    description: "",
    color: 0xA757F7,
    fields: [
        { name: "Profile", value: "`/profile`\n-# View your profile", inline: false },
        { name: "Intro Channel", value: "`/config intro-channel`\n-# Set a intro channel to analyse messages to set people's profile bio", inline: false },
        { name: "Other Configuration", value: "`/config overview`\n-# Overview of all REPP configurations\n`/config ban-value` `/config kick-value` `/config timeout-value`\n-# Change how many reputation points a moderation action takes", inline: false },
    ],
    footer: { text: `${VERSION} -  REPP is in BETA, some features are experimental and can change.` }
})

export const makeReppBackButtons = (): ButtonComponent[] => [
    $button.danger("Back ⇾", "help:back"),
]

export const makeReppHomePageButtons = (): ButtonComponent[] => [
    $button.success("Introduction ⇾", "help:introduction"),
    $button.secondary("Update News ⇾", "help:news"),
    $button.secondary("Command List ⇾", "help:commandlist"),
]