import { Flashcore } from "robo.js";
import { EmbedBuilder } from "discord.js";
export const config = {
    description: 'Make an embed message!',
    options: [
        {
            type: 'string',
            name: 'message',
            description: 'The message to embed',
            required: true
        },
        {
            type: 'string',
            name: 'title',
            description: 'The title of the embed',
            required: false
        },
        {
            type: 'attachment',
            name: 'thumbnail',
            description: 'Attach a thumbnail image',
            required: false
        },
        {
            type: 'user',
            name: 'author',
            description: 'Select a user to display as the author',
            required: false
        },
        {
            type: 'string',
            name: 'fieldname',
            description: 'The name of the field',
            required: false
        },
        {
            type: 'string',
            name: 'fieldvalue',
            description: 'The value of the field',
            required: false
        },
        {
            type: 'boolean',
            name: 'inline',
            description: 'Whether the field is inline',
            required: false
        }
    ]
};
export default (async (interaction)=>{
    var powerlevel = Flashcore.get('powerlevel', {
        namespace: interaction.user.id
    });
    const message = interaction.options.get('message')?.value;
    const title = interaction.options.get('title')?.value;
    const thumbnailAttachment = interaction.options.resolved?.attachments?.first();
    const authorUser = interaction.options.get('author')?.user;
    const fieldName = interaction.options.get('fieldname')?.value;
    const fieldValue = interaction.options.get('fieldvalue')?.value;
    const fieldInline = interaction.options.get('inline')?.value;
    const embed = new EmbedBuilder().setColor(0x0099ff).setDescription(message || '(null)').setTitle(title || 'Embed');
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
        const field = {
            name: fieldName,
            value: fieldValue,
            inline: !!fieldInline ?? false
        };
        embed.addFields(field);
    }
    await interaction.reply({
        embeds: [
            embed
        ]
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxkaXNjb3JkXFxtYW5pa2luZWtvLWRpc2NvcmRcXGJvdHNcXG1hbmlraW5la28tYm90XFxzcmNcXGNvbW1hbmRzXFxlbWJlZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbGFzaGNvcmUsIHR5cGUgQ29tbWFuZENvbmZpZyx0eXBlIENvbW1hbmRPcHRpb24gfSBmcm9tICdyb2JvLmpzJztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25Db21tYW5kT3B0aW9uVHlwZSwgQXR0YWNobWVudCwgQ29tbWFuZEludGVyYWN0aW9uLCBDb21tYW5kSW50ZXJhY3Rpb25PcHRpb25SZXNvbHZlciwgRW1iZWRCdWlsZGVyLCBFbWJlZEZpZWxkLCBJbnRlcmFjdGlvbiB9IGZyb20gJ2Rpc2NvcmQuanMnO1xyXG4gXHJcbmV4cG9ydCBjb25zdCBjb25maWc6IENvbW1hbmRDb25maWcgPSB7XHJcbiAgZGVzY3JpcHRpb246ICdNYWtlIGFuIGVtYmVkIG1lc3NhZ2UhJyxcclxuICBvcHRpb25zOiBbXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgICAgbmFtZTogJ21lc3NhZ2UnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIG1lc3NhZ2UgdG8gZW1iZWQnLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgIG5hbWU6ICd0aXRsZScsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIHRpdGxlIG9mIHRoZSBlbWJlZCcsXHJcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHR5cGU6ICdhdHRhY2htZW50JyxcclxuICAgICAgbmFtZTogJ3RodW1ibmFpbCcsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXR0YWNoIGEgdGh1bWJuYWlsIGltYWdlJyxcclxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdHlwZTogJ3VzZXInLFxyXG4gICAgICBuYW1lOiAnYXV0aG9yJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdTZWxlY3QgYSB1c2VyIHRvIGRpc3BsYXkgYXMgdGhlIGF1dGhvcicsXHJcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgICBuYW1lOiAnZmllbGRuYW1lJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdUaGUgbmFtZSBvZiB0aGUgZmllbGQnLFxyXG4gICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgICAgbmFtZTogJ2ZpZWxkdmFsdWUnLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ1RoZSB2YWx1ZSBvZiB0aGUgZmllbGQnLFxyXG4gICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0eXBlOiAnYm9vbGVhbicsXHJcbiAgICAgIG5hbWU6ICdpbmxpbmUnLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ1doZXRoZXIgdGhlIGZpZWxkIGlzIGlubGluZScsXHJcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgXVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKGludGVyYWN0aW9uOiBDb21tYW5kSW50ZXJhY3Rpb24pID0+IHtcclxuXHJcbiAgdmFyIHBvd2VybGV2ZWwgPSAgRmxhc2hjb3JlLmdldCgncG93ZXJsZXZlbCcse1xyXG4gICAgbmFtZXNwYWNlOmludGVyYWN0aW9uLnVzZXIuaWQsXHJcbiAgfSkgYXMgbnVtYmVyO1xyXG5cclxuXHJcbiAgXHJcbiAgY29uc3QgbWVzc2FnZSA9IGludGVyYWN0aW9uLm9wdGlvbnMuZ2V0KCdtZXNzYWdlJyk/LnZhbHVlIGFzIHN0cmluZztcclxuICAgIGNvbnN0IHRpdGxlID0gaW50ZXJhY3Rpb24ub3B0aW9ucy5nZXQoJ3RpdGxlJyk/LnZhbHVlIGFzIHN0cmluZztcclxuICAgIGNvbnN0IHRodW1ibmFpbEF0dGFjaG1lbnQgPSBpbnRlcmFjdGlvbi5vcHRpb25zLnJlc29sdmVkPy5hdHRhY2htZW50cz8uZmlyc3QoKSBhcyBBdHRhY2htZW50O1xyXG4gICAgY29uc3QgYXV0aG9yVXNlciA9IGludGVyYWN0aW9uLm9wdGlvbnMuZ2V0KCdhdXRob3InKT8udXNlcjtcclxuICAgIGNvbnN0IGZpZWxkTmFtZSA9IGludGVyYWN0aW9uLm9wdGlvbnMuZ2V0KCdmaWVsZG5hbWUnKT8udmFsdWUgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgZmllbGRWYWx1ZSA9IGludGVyYWN0aW9uLm9wdGlvbnMuZ2V0KCdmaWVsZHZhbHVlJyk/LnZhbHVlIGFzIHN0cmluZztcclxuICAgIGNvbnN0IGZpZWxkSW5saW5lID0gaW50ZXJhY3Rpb24ub3B0aW9ucy5nZXQoJ2lubGluZScpPy52YWx1ZSBhcyBib29sZWFuO1xyXG4gICAgXHJcblxyXG5cclxuICBjb25zdCBlbWJlZCA9IG5ldyBFbWJlZEJ1aWxkZXIoKVxyXG4gICAgLnNldENvbG9yKDB4MDA5OWZmKVxyXG4gICAgLnNldERlc2NyaXB0aW9uKG1lc3NhZ2UgfHwgJyhudWxsKScpXHJcbiAgICAuc2V0VGl0bGUodGl0bGUgfHwgJ0VtYmVkJyk7XHJcblxyXG4gIGlmICh0aHVtYm5haWxBdHRhY2htZW50KSB7XHJcbiAgICBlbWJlZC5zZXRUaHVtYm5haWwodGh1bWJuYWlsQXR0YWNobWVudC51cmwpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGF1dGhvclVzZXIpIHtcclxuICAgIGVtYmVkLnNldEF1dGhvcih7XHJcbiAgICAgIG5hbWU6IGF1dGhvclVzZXIudXNlcm5hbWUsXHJcbiAgICAgIGljb25VUkw6IGF1dGhvclVzZXIuZGlzcGxheUF2YXRhclVSTCgpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5pZiAoZmllbGROYW1lICYmIGZpZWxkVmFsdWUpIHtcclxuICAgIGNvbnN0IGZpZWxkOiBFbWJlZEZpZWxkID0ge1xyXG4gICAgICAgIG5hbWU6IGZpZWxkTmFtZSxcclxuICAgICAgICB2YWx1ZTogZmllbGRWYWx1ZSxcclxuICAgICAgICBpbmxpbmU6ICEhZmllbGRJbmxpbmUgPz8gZmFsc2VcclxuICAgIH07XHJcbiAgICBlbWJlZC5hZGRGaWVsZHMoZmllbGQpO1xyXG59XHJcbiAgXHJcbiAgICBhd2FpdCBpbnRlcmFjdGlvbi5yZXBseSh7IGVtYmVkczogW2VtYmVkXSB9KTsgXHJcbiAgXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJGbGFzaGNvcmUiLCJFbWJlZEJ1aWxkZXIiLCJjb25maWciLCJkZXNjcmlwdGlvbiIsIm9wdGlvbnMiLCJ0eXBlIiwibmFtZSIsInJlcXVpcmVkIiwiaW50ZXJhY3Rpb24iLCJwb3dlcmxldmVsIiwiZ2V0IiwibmFtZXNwYWNlIiwidXNlciIsImlkIiwibWVzc2FnZSIsInZhbHVlIiwidGl0bGUiLCJ0aHVtYm5haWxBdHRhY2htZW50IiwicmVzb2x2ZWQiLCJhdHRhY2htZW50cyIsImZpcnN0IiwiYXV0aG9yVXNlciIsImZpZWxkTmFtZSIsImZpZWxkVmFsdWUiLCJmaWVsZElubGluZSIsImVtYmVkIiwic2V0Q29sb3IiLCJzZXREZXNjcmlwdGlvbiIsInNldFRpdGxlIiwic2V0VGh1bWJuYWlsIiwidXJsIiwic2V0QXV0aG9yIiwidXNlcm5hbWUiLCJpY29uVVJMIiwiZGlzcGxheUF2YXRhclVSTCIsImZpZWxkIiwiaW5saW5lIiwiYWRkRmllbGRzIiwicmVwbHkiLCJlbWJlZHMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLFNBQVMsUUFBK0MsVUFBVTtBQUMzRSxTQUF5R0MsWUFBWSxRQUFpQyxhQUFhO0FBRW5LLE9BQU8sTUFBTUMsU0FBd0I7SUFDbkNDLGFBQWE7SUFDYkMsU0FBUztRQUNQO1lBQ0lDLE1BQU07WUFDTkMsTUFBTTtZQUNOSCxhQUFhO1lBQ2JJLFVBQVU7UUFDZDtRQUNBO1lBQ0VGLE1BQU07WUFDTkMsTUFBTTtZQUNOSCxhQUFhO1lBQ2JJLFVBQVU7UUFDWjtRQUNBO1lBQ0VGLE1BQU07WUFDTkMsTUFBTTtZQUNOSCxhQUFhO1lBQ2JJLFVBQVU7UUFDWjtRQUNBO1lBQ0VGLE1BQU07WUFDTkMsTUFBTTtZQUNOSCxhQUFhO1lBQ2JJLFVBQVU7UUFDWjtRQUNBO1lBQ0VGLE1BQU07WUFDTkMsTUFBTTtZQUNOSCxhQUFhO1lBQ2JJLFVBQVU7UUFDWjtRQUNBO1lBQ0VGLE1BQU07WUFDTkMsTUFBTTtZQUNOSCxhQUFhO1lBQ2JJLFVBQVU7UUFDWjtRQUNBO1lBQ0VGLE1BQU07WUFDTkMsTUFBTTtZQUNOSCxhQUFhO1lBQ2JJLFVBQVU7UUFDWjtLQUNEO0FBQ0gsRUFBRTtBQUVGLGVBQWUsQ0FBQSxPQUFPQztJQUVwQixJQUFJQyxhQUFjVCxVQUFVVSxHQUFHLENBQUMsY0FBYTtRQUMzQ0MsV0FBVUgsWUFBWUksSUFBSSxDQUFDQyxFQUFFO0lBQy9CO0lBSUEsTUFBTUMsVUFBVU4sWUFBWUosT0FBTyxDQUFDTSxHQUFHLENBQUMsWUFBWUs7SUFDbEQsTUFBTUMsUUFBUVIsWUFBWUosT0FBTyxDQUFDTSxHQUFHLENBQUMsVUFBVUs7SUFDaEQsTUFBTUUsc0JBQXNCVCxZQUFZSixPQUFPLENBQUNjLFFBQVEsRUFBRUMsYUFBYUM7SUFDdkUsTUFBTUMsYUFBYWIsWUFBWUosT0FBTyxDQUFDTSxHQUFHLENBQUMsV0FBV0U7SUFDdEQsTUFBTVUsWUFBWWQsWUFBWUosT0FBTyxDQUFDTSxHQUFHLENBQUMsY0FBY0s7SUFDeEQsTUFBTVEsYUFBYWYsWUFBWUosT0FBTyxDQUFDTSxHQUFHLENBQUMsZUFBZUs7SUFDMUQsTUFBTVMsY0FBY2hCLFlBQVlKLE9BQU8sQ0FBQ00sR0FBRyxDQUFDLFdBQVdLO0lBSXpELE1BQU1VLFFBQVEsSUFBSXhCLGVBQ2Z5QixRQUFRLENBQUMsVUFDVEMsY0FBYyxDQUFDYixXQUFXLFVBQzFCYyxRQUFRLENBQUNaLFNBQVM7SUFFckIsSUFBSUMscUJBQXFCO1FBQ3ZCUSxNQUFNSSxZQUFZLENBQUNaLG9CQUFvQmEsR0FBRztJQUM1QztJQUVBLElBQUlULFlBQVk7UUFDZEksTUFBTU0sU0FBUyxDQUFDO1lBQ2R6QixNQUFNZSxXQUFXVyxRQUFRO1lBQ3pCQyxTQUFTWixXQUFXYSxnQkFBZ0I7UUFDdEM7SUFDRjtJQUVGLElBQUlaLGFBQWFDLFlBQVk7UUFDekIsTUFBTVksUUFBb0I7WUFDdEI3QixNQUFNZ0I7WUFDTlAsT0FBT1E7WUFDUGEsUUFBUSxDQUFDLENBQUNaLGVBQWU7UUFDN0I7UUFDQUMsTUFBTVksU0FBUyxDQUFDRjtJQUNwQjtJQUVJLE1BQU0zQixZQUFZOEIsS0FBSyxDQUFDO1FBQUVDLFFBQVE7WUFBQ2Q7U0FBTTtJQUFDO0FBRTlDLENBQUEsRUFBRSJ9