import { Flashcore, type CommandConfig } from 'robo.js'
import { ApplicationCommandOptionType, Attachment, CommandInteraction, CommandInteractionOptionResolver, EmbedBuilder, EmbedField, Interaction } from 'discord.js';

export const config: CommandConfig = {
	description: 'Check the bot\'s stats and ping!',
}

export default async (interaction: CommandInteraction) => {
	var powerlevel =  Flashcore.get('powerlevel',{
		namespace:interaction.user.id,
	}) as number;
	

	let embed = new EmbedBuilder()
		.setTitle('Bot Stats')
		.addFields([
			{
				name: 'Bot Ping',
				value: `${interaction.client.ws.ping}ms`,
				inline: true,
			},
			{
				name: 'Uptime',
				value: `${Math.floor(interaction.client.uptime / 1000 / 60)} minutes`,
				inline: true,
			},
			{
				name: 'Memory Usage',
				value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB`,
				inline: true,
			},
		])
		.setColor('#FF0000')
		.setTimestamp()
		.setFooter({
			text: interaction.client.user.username,
			iconURL: interaction.client.user.displayAvatarURL(),
		})
		
	
			await interaction.reply({ embeds: [embed] })

} 
