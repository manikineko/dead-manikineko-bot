import {  EmbedBuilder, Guild, type Message, type UserContextMenuCommandInteraction } from 'discord.js'
import { Flashcore } from 'robo.js';

export default async function (interaction: UserContextMenuCommandInteraction, message: Message) {

    const user = interaction.targetUser;
    const avatar = user.displayAvatarURL({ dynamic: true, size: 1024 });
    //get powerlevel
    let powerlevel = await Flashcore.get('powerlevel',{namespace:user.id}) as number;
    type powerlevel_struct  = {powerlevel:0}; 
    const powerlevels = {
        "Bot Owner": 100,
        "Bot Global Moderator": 75,
        "Server Owner": 50,
        "Server Administrator": 40,
        "Server Moderator": 30,
        "Server Helper": 20,
        "Beta Tester": 10,
        "User": 0,
        "Banned": -1
    
    }
    if(!powerlevel){
        Flashcore.set('powerlevel',0,{namespace:interaction.targetUser.id});
        powerlevel = 0;
    }

    let powerlevel_name = powerlevels ? Object.keys(powerlevels).find(key => powerlevels[key] === powerlevel) : 'User';
    //check if user has powerlevel if not set to 0
    if(!powerlevel){
        Flashcore.set('powerlevel',0,{namespace:interaction.targetUser.id});
    }
    //get guild if available
    let guild = interaction.guild;
    if(!guild){
        guild = {name:`Direct Message between ${interaction.user} and ${interaction.targetUser}`,id:`${interaction.channelId}`} as Guild;
    }
    const embed = new EmbedBuilder()
        .setTitle(`${user.tag}'s Stats`)
        .addFields({name:'Powerlevel',value:`${powerlevel_name || 'User'} (${powerlevel || 0}) for ${user.tag} (${user.id})`})
        .addFields({name:'Channel',value:`${interaction.channelId}`})
        .addFields({name:'User',value:`${interaction.user.tag} (${interaction.user.id})`})
        .addFields({name:'Guild',value:`${guild.name} (${guild.id})`})
        .setThumbnail(avatar)
        .setColor('#0099ff')
        .setFooter({ text: `Requested by ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL() })
        .setTimestamp();
    return { embeds: [embed] };
        
}