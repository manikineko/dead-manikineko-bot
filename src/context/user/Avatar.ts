import {  EmbedBuilder, type Message, type UserContextMenuCommandInteraction } from 'discord.js'

export default async function (interaction: UserContextMenuCommandInteraction, message: Message) {

    const user = interaction.targetUser;
    const avatar = user.displayAvatarURL({ dynamic: true, size: 1024 });
    const embed = new EmbedBuilder()
        .setTitle(`${user.tag}'s Avatar`)
        .setImage(avatar)
        .setColor('#0099ff')
        .setFooter({ text: `Requested by ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL() })
         .setTimestamp();
    return { embeds: [embed] };

}