import { client } from "..";
import type { Event, Message } from "../types";

export default {
    name: "messageCreate",
    execute(message: Message) {
        if (!message.guildId || message.isCrosspost || message.author.toggles?.bot !== false) return
    },
} as Event