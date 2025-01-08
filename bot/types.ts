import { client } from ".";

export type Command = {
    name: string,
    execute: (interaction: Interaction) => any
}

export type Component = {
    prefix: string,
    execute: (interaction: Interaction) => any
}

export type Interaction = typeof client.transformers.$inferredTypes.interaction
