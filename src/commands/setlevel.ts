import { Flashcore, type CommandConfig } from 'robo.js'
import { ApplicationCommandOptionType, Attachment, CommandInteraction, CommandInteractionOptionResolver, EmbedBuilder, EmbedField, Interaction } from 'discord.js';
import { userInfo } from 'os';

export const config: CommandConfig = {
	description: 'Bot master only command!',
    options: [
        {type: 'integer',name: 'powerlevel',description: 'The powerlevel to set',required: true},
        {type: 'user',name: 'user',description: 'The user to set the powerlevel for',required: true}
    ]
}

export default async (interaction: CommandInteraction) => {
    const userId = interaction.user.id
    const powerlevel = interaction.options.get('powerlevel')?.value as number;
    const executor_powerlevel = await Flashcore.get('powerlevel',{namespace:userId}) as number;
    const user = interaction.options.get('user')?.user;
    if(executor_powerlevel >= 100){
        Flashcore.set('powerlevel',powerlevel,{namespace:user?.id});
        return {content:`Set powerlevel to ${powerlevel} for ${user?.username}`}
    }
    else{
		await interaction.reply({ content: 'You do not have the required powerlevel to use this command.', ephemeral: true })
	}

} 
