import { Message } from "discord.js";

import { Flashcore } from 'robo.js'
import { ApplicationCommandOptionType, Attachment, CommandInteraction, CommandInteractionOptionResolver, EmbedBuilder, EmbedField, Interaction } from 'discord.js';
import embed from "../commands/embed";

var prefix = 'm>'
export default async (message : Message) => {
	var powerlevel =  await Flashcore.get('powerlevel',{
		namespace:message.author.id,
	}) as number;
	console.log(`${message.author.username}: ${message.content} messageurl: ${message.url}`)
	var client = message.client;
	var content = message.content;
	if(content.startsWith(prefix)){
		content = content.slice(prefix.length);
		let cmd = content.split(' ')[0].toLowerCase();
		const args = message.content.split(' ');
		if(powerlevel >= 100){
			switch(cmd){
				case 'ping':
					await message.channel.send('Pong!')
					break;
				case 'eval':
					try{
						const result = eval(args.splice(1).join(' '));
						await message.reply({
							embeds: [{
								title: 'Eval',
								description: '```js\n'+result+'```',
								color: 0x00FF00
							}]
						});
					}catch(err){
						await message.reply({embeds: [{
							title: 'Eval Failed',
							description: '```js\n'+err+'```',
							color: 0xFF0000
						}]});
						
					}
					break;
				case "delete_message": 
	
				if (args.length < 2 || args.length > 3) {
					message.channel.send('Usage: m>delete_message <message_id> [channel_id]');
					return;
				}
		
				const messageId = args[1];
				const channelId = args[2] || message.channel.id;
		
				try {
					const channel = await client.channels.fetch(channelId);
					
					
					const targetMessage = await channel.messages.fetch(messageId);
					await targetMessage.delete();
					message.channel.send(`Message with ID ${messageId} deleted.`);
				} catch (error) {
					if (error.message === 'Unknown Message') {
						message.channel.send(`Message with ID ${messageId} not found.`);
					} else if (error.message === 'Missing Permissions') {
						message.channel.send('I do not have permission to delete that message.');
					} else {
						message.channel.send(`Failed to delete message: ${error.message}`);
					}
				}
				break;
				default:
					await message.channel.send('You do not have the required powerlevel to use this command.')
					break;
			}
			
		}
	}
	
}
