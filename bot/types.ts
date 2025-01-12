import { client } from ".";

export type Event = {
    name: string,
    execute: (...data: any[]) => any
}

export type Command = {
    name: string,
    execute: (interaction: Interaction) => any
}

export type Component = {
    prefix: string,
    execute: (interaction: Interaction) => any
}

export type Interaction = typeof client.transformers.$inferredTypes.interaction
export type Message = typeof client.transformers.$inferredTypes.message