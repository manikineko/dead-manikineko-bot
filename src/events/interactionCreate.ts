import { Interaction } from "discord.js";
import { Flashcore } from "robo.js";

export default (interaction: Interaction) => {
	Flashcore.get('powerlevel', {
		namespace: interaction.user.id,
	}).then((powerlevel) => {
	console.log(`Powerlevel: ${powerlevel} for ${interaction.user.username}(${interaction.user.id})`)
	if(interaction.isCommand()) {
		
		if(interaction.command?.type === 1) {
			console.log('Command:', interaction.commandName)
		}
		else if(interaction.command?.type === 2) {
			console.log('Context Menu:', interaction.commandName)
		}
		else if(interaction.command?.type === 3) {
			console.log('User Command:', interaction.commandName)
		}
		if(powerlevel == -1) {
			
			return interaction.reply({content: 'Access Denied!', ephemeral: true}) ;
		}

	}
});
}

