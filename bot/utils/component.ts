import { ButtonStyles, MessageComponentTypes } from "discordeno"

export const $button = {
    link: (label: string | undefined, url: string, emoji?: string | undefined, disabled?: boolean) => ({
        type: MessageComponentTypes.Button as MessageComponentTypes.Button,
        style: ButtonStyles.Link,
        label, url, disabled,
        emoji: emoji ? fixEmoji(emoji) : undefined
    }),
    primary: (label: string | undefined, customId: string, emoji?: string | undefined, disabled?: boolean) => ({
        type: MessageComponentTypes.Button as MessageComponentTypes.Button,
        style: ButtonStyles.Primary,
        label, customId, disabled,
        emoji: emoji ? fixEmoji(emoji) : undefined
    }),
    secondary: (label: string | undefined, customId: string, emoji?: string | undefined, disabled?: boolean) => ({
        type: MessageComponentTypes.Button as MessageComponentTypes.Button,
        style: ButtonStyles.Secondary,
        label, customId, disabled,
        emoji: emoji ? fixEmoji(emoji) : undefined
    }),
    success: (label: string | undefined, customId: string, emoji?: string | undefined, disabled?: boolean) => ({
        type: MessageComponentTypes.Button as MessageComponentTypes.Button,
        style: ButtonStyles.Success,
        label, customId, disabled,
        emoji: emoji ? fixEmoji(emoji) : undefined
    }),
    danger: (label: string | undefined, customId: string, emoji?: string | undefined, disabled?: boolean) => ({
        type: MessageComponentTypes.Button as MessageComponentTypes.Button,
        style: ButtonStyles.Danger,
        label, customId, disabled,
        emoji: emoji ? fixEmoji(emoji) : undefined
    })
}

export const $select = {
    string: (customId: string, options: { name: string, value: string }[], placeholder?: string, minValues: number = 1, maxValues: number = 1) => ({
        type: MessageComponentTypes.SelectMenu,
        customId, options, placeholder, maxValues, minValues
    })
}

export const $input = {
    short: (label: string, customId: string, options?: {
        required?: boolean,
        minLength?: number,
        maxLength?: number
        placeholder?: string
        value?: string
    }) => ({
        type: MessageComponentTypes.InputText,
        label, customId,
        style: 0,
        required: options?.required ?? false,
        minLength: options?.minLength,
        maxLength: options?.maxLength,
        placeholder: options?.placeholder,
        value: options?.value
    }),
    long: (label: string, customId: string, options?: {
        required?: boolean,
        minLength?: number,
        maxLength?: number
        placeholder?: string
        value?: string
    }) => ({
        type: MessageComponentTypes.InputText,
        label, customId,
        style: 1,
        required: options?.required ?? false,
        minLength: options?.minLength,
        maxLength: options?.maxLength,
        placeholder: options?.placeholder,
        value: options?.value
    }),
}

export const isUnicodeEmoji = (emoji: string) => "🇦🇧🇨🇩🇪🇫🇬🇭🇮🇯🇰🇱🇲🇳🇴🇵🇶🇷🇸🇹🇺🇻🇼🇽🇾🇿".includes(emoji) || (emoji.match(
    "(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c[\ude32-\ude3a]|[\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])"
)?.[0].length && true) || false

export const fixEmoji = (emoji: string) => {
    if (isUnicodeEmoji(emoji))
        return { name: emoji };

    const parts = emoji.replace("<", "").replace(">", "").split(":").slice(1);
    return {
        name: parts[0],
        id: parts[1] ? BigInt(parts[1]) : undefined,
    };
}