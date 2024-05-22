import { translateMessage } from '../../services/translator'
import type { MessageContextMenuCommandInteraction, Message } from 'discord.js'

export default async function (interaction: MessageContextMenuCommandInteraction, message: Message) {
	const translatedContent = await translateMessage(message.content)
	return { content: translatedContent, ephemeral: true}
}