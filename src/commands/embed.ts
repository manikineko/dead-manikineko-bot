import { Flashcore, type CommandConfig,type CommandOption } from 'robo.js';
import { ApplicationCommandOptionType, Attachment, CommandInteraction, CommandInteractionOptionResolver, EmbedBuilder, EmbedField, Interaction } from 'discord.js';
 
export const config: CommandConfig = {
  description: 'Make an embed message!',
  options: [
    {
        type: 'string',
        name: 'message',
        description: 'The message to embed',
        required: true,
    },
    {
      type: 'string',
      name: 'title',
      description: 'The title of the embed',
      required: false,
    },
    {
      type: 'attachment',
      name: 'thumbnail',
      description: 'Attach a thumbnail image',
      required: false,
    },
    {
      type: 'user',
      name: 'author',
      description: 'Select a user to display as the author',
      required: false,
    },
    {
      type: 'string',
      name: 'fieldname',
      description: 'The name of the field',
      required: false,
    },
    {
      type: 'string',
      name: 'fieldvalue',
      description: 'The value of the field',
      required: false,
    },
    {
      type: 'boolean',
      name: 'inline',
      description: 'Whether the field is inline',
      required: false,
    },
  ]
};

export default async (interaction: CommandInteraction) => {

  var powerlevel =  Flashcore.get('powerlevel',{
    namespace:interaction.user.id,
  }) as number;


  
  const message = interaction.options.get('message')?.value as string;
    const title = interaction.options.get('title')?.value as string;
    const thumbnailAttachment = interaction.options.resolved?.attachments?.first() as Attachment;
    const authorUser = interaction.options.get('author')?.user;
    const fieldName = interaction.options.get('fieldname')?.value as string;
    const fieldValue = interaction.options.get('fieldvalue')?.value as string;
    const fieldInline = interaction.options.get('inline')?.value as boolean;
    


  const embed = new EmbedBuilder()
    .setColor(0x0099ff)
    .setDescription(message || '(null)')
    .setTitle(title || 'Embed');

  if (thumbnailAttachment) {
    embed.setThumbnail(thumbnailAttachment.url);
  }

  if (authorUser) {
    embed.setAuthor({
      name: authorUser.username,
      iconURL: authorUser.displayAvatarURL()
    });
  }

if (fieldName && fieldValue) {
    const field: EmbedField = {
        name: fieldName,
        value: fieldValue,
        inline: !!fieldInline ?? false
    };
    embed.addFields(field);
}
  
    await interaction.reply({ embeds: [embed] }); 
  
};
