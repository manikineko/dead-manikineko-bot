import { Flashcore, type CommandConfig,type CommandOption } from 'robo.js';
import { OpenAI } from '../services/openai';
import { CommandInteraction } from 'discord.js';

export const config: CommandConfig = {
  description: 'Chat with GPT-4!',
  options: [{
    type: 'string',
    name: 'message',
    description: 'Message to send to GPT-4',
    required: true,
  }]
};

export default async (interaction: CommandInteraction) => {
    var powerlevel =  Flashcore.get('powerlevel',{
        namespace:interaction.user.id,
    }) as number;
    

    var powerlevel = await Flashcore.get('powerlevel',{
        namespace:interaction.user.id,
    }) as number;
    
    console.log(`Powerlevel: ${powerlevel} for ${interaction.user.id}`)
    if(powerlevel >= 10){
        const openAI = new OpenAI(process.env.OPENAI_API_KEY as string);
        const message = interaction.options.get('message', true).value as string;
        try {
            const result = await openAI.chat([message]);
            return {files:[
                {
                    attachment: Buffer.from(result.choices[0].message.content),
                    name: 'chat.txt'
                }
            
            ]};
        } catch (error) {
            console.log('Failed to get response from OpenAI: ' + error.message);
            return {content:'Failed to get response from OpenAI: ' + error.message}
        }
    
    }
    else{
		await interaction.reply({ content: 'You do not have the required powerlevel to use this command.', ephemeral: true })
	}

};
