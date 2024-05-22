import { Flashcore, type CommandConfig,type CommandOption } from 'robo.js';
import { OpenAI } from '../services/openai';
import { CommandInteraction } from 'discord.js';

export const config: CommandConfig = {
  description: 'Generate an image with DALL-E-3!',
    options: [{
        type: 'string',
        name: 'prompt',
        description: 'Prompt to generate an image from',
        required: true,
    },
    {
        type: 'boolean',
        name: 'enhance_prompt',
        description: 'Enhance the prompt Using GPT4 for better results',
}]
};

export default async (interaction: CommandInteraction) => {
    var powerlevel = await Flashcore.get('powerlevel',{
        namespace:interaction.user.id,
    }) as number;
   
    console.log(`Powerlevel: ${powerlevel} for ${interaction.user.id}`)
    if(powerlevel >= 10){
        const openAI = new OpenAI(process.env.OPENAI_API_KEY as string);
        let prompt = interaction.options.get('prompt', true).value as string;
        const enhance_prompt = interaction.options.get('enhance_prompt', false)?.value as boolean;
       
        if(enhance_prompt){
            try {
                const result = await openAI.chat([`Enchance this Dall-E-3 prompt: ${prompt} give back only the prompt`]);
                prompt = result.choices[0].message.content;
            } catch (error) {
                console.log('Failed to get response from OpenAI: ' + error.message);
                return {content:'Failed to get response from OpenAI: ' + error.message}
            }
        }
        try {
            const result = await openAI.createImage(prompt);
            const image = result.data[0].url;
            return {content: `Image`, files: [{
                attachment: image,
                name: 'image.png'
            
            }]}
        } catch (error) {
            console.log('Failed to get response from OpenAI: ' + error.message);
            return {content:'Failed to get response from OpenAI: ' + error.message}
        }
    
    }
    else{
		await interaction.reply({ content: 'You do not have the required powerlevel to use this command.', ephemeral: true })
	}

};
