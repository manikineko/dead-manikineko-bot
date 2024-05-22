import { Flashcore } from "robo.js";
import { OpenAI } from "../services/openai.js";
export const config = {
    description: 'Chat with GPT-4!',
    options: [
        {
            type: 'string',
            name: 'message',
            description: 'Message to send to GPT-4',
            required: true
        }
    ]
};
export default (async (interaction)=>{
    var powerlevel = Flashcore.get('powerlevel', {
        namespace: interaction.user.id
    });
    var powerlevel = await Flashcore.get('powerlevel', {
        namespace: interaction.user.id
    });
    console.log(`Powerlevel: ${powerlevel} for ${interaction.user.id}`);
    if (powerlevel >= 10) {
        const openAI = new OpenAI(process.env.OPENAI_API_KEY);
        const message = interaction.options.get('message', true).value;
        try {
            const result = await openAI.chat([
                message
            ]);
            return {
                files: [
                    {
                        attachment: Buffer.from(result.choices[0].message.content),
                        name: 'chat.txt'
                    }
                ]
            };
        } catch (error) {
            console.log('Failed to get response from OpenAI: ' + error.message);
            return {
                content: 'Failed to get response from OpenAI: ' + error.message
            };
        }
    } else {
        await interaction.reply({
            content: 'You do not have the required powerlevel to use this command.',
            ephemeral: true
        });
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxkaXNjb3JkXFxtYW5pa2luZWtvLWRpc2NvcmRcXGJvdHNcXG1hbmlraW5la28tYm90XFxzcmNcXGNvbW1hbmRzXFxjaGF0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZsYXNoY29yZSwgdHlwZSBDb21tYW5kQ29uZmlnLHR5cGUgQ29tbWFuZE9wdGlvbiB9IGZyb20gJ3JvYm8uanMnO1xyXG5pbXBvcnQgeyBPcGVuQUkgfSBmcm9tICcuLi9zZXJ2aWNlcy9vcGVuYWknO1xyXG5pbXBvcnQgeyBDb21tYW5kSW50ZXJhY3Rpb24gfSBmcm9tICdkaXNjb3JkLmpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWc6IENvbW1hbmRDb25maWcgPSB7XHJcbiAgZGVzY3JpcHRpb246ICdDaGF0IHdpdGggR1BULTQhJyxcclxuICBvcHRpb25zOiBbe1xyXG4gICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICBuYW1lOiAnbWVzc2FnZScsXHJcbiAgICBkZXNjcmlwdGlvbjogJ01lc3NhZ2UgdG8gc2VuZCB0byBHUFQtNCcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICB9XVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKGludGVyYWN0aW9uOiBDb21tYW5kSW50ZXJhY3Rpb24pID0+IHtcclxuICAgIHZhciBwb3dlcmxldmVsID0gIEZsYXNoY29yZS5nZXQoJ3Bvd2VybGV2ZWwnLHtcclxuICAgICAgICBuYW1lc3BhY2U6aW50ZXJhY3Rpb24udXNlci5pZCxcclxuICAgIH0pIGFzIG51bWJlcjtcclxuICAgIFxyXG5cclxuICAgIHZhciBwb3dlcmxldmVsID0gYXdhaXQgRmxhc2hjb3JlLmdldCgncG93ZXJsZXZlbCcse1xyXG4gICAgICAgIG5hbWVzcGFjZTppbnRlcmFjdGlvbi51c2VyLmlkLFxyXG4gICAgfSkgYXMgbnVtYmVyO1xyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyhgUG93ZXJsZXZlbDogJHtwb3dlcmxldmVsfSBmb3IgJHtpbnRlcmFjdGlvbi51c2VyLmlkfWApXHJcbiAgICBpZihwb3dlcmxldmVsID49IDEwKXtcclxuICAgICAgICBjb25zdCBvcGVuQUkgPSBuZXcgT3BlbkFJKHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZIGFzIHN0cmluZyk7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGludGVyYWN0aW9uLm9wdGlvbnMuZ2V0KCdtZXNzYWdlJywgdHJ1ZSkudmFsdWUgYXMgc3RyaW5nO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG9wZW5BSS5jaGF0KFttZXNzYWdlXSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7ZmlsZXM6W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dGFjaG1lbnQ6IEJ1ZmZlci5mcm9tKHJlc3VsdC5jaG9pY2VzWzBdLm1lc3NhZ2UuY29udGVudCksXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NoYXQudHh0J1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXX07XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZhaWxlZCB0byBnZXQgcmVzcG9uc2UgZnJvbSBPcGVuQUk6ICcgKyBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtjb250ZW50OidGYWlsZWQgdG8gZ2V0IHJlc3BvbnNlIGZyb20gT3BlbkFJOiAnICsgZXJyb3IubWVzc2FnZX1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIH1cclxuICAgIGVsc2V7XHJcblx0XHRhd2FpdCBpbnRlcmFjdGlvbi5yZXBseSh7IGNvbnRlbnQ6ICdZb3UgZG8gbm90IGhhdmUgdGhlIHJlcXVpcmVkIHBvd2VybGV2ZWwgdG8gdXNlIHRoaXMgY29tbWFuZC4nLCBlcGhlbWVyYWw6IHRydWUgfSlcclxuXHR9XHJcblxyXG59O1xyXG4iXSwibmFtZXMiOlsiRmxhc2hjb3JlIiwiT3BlbkFJIiwiY29uZmlnIiwiZGVzY3JpcHRpb24iLCJvcHRpb25zIiwidHlwZSIsIm5hbWUiLCJyZXF1aXJlZCIsImludGVyYWN0aW9uIiwicG93ZXJsZXZlbCIsImdldCIsIm5hbWVzcGFjZSIsInVzZXIiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJvcGVuQUkiLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0FQSV9LRVkiLCJtZXNzYWdlIiwidmFsdWUiLCJyZXN1bHQiLCJjaGF0IiwiZmlsZXMiLCJhdHRhY2htZW50IiwiQnVmZmVyIiwiZnJvbSIsImNob2ljZXMiLCJjb250ZW50IiwiZXJyb3IiLCJyZXBseSIsImVwaGVtZXJhbCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLFNBQVMsUUFBK0MsVUFBVTtBQUMzRSxTQUFTQyxNQUFNLFFBQVEsd0JBQXFCO0FBRzVDLE9BQU8sTUFBTUMsU0FBd0I7SUFDbkNDLGFBQWE7SUFDYkMsU0FBUztRQUFDO1lBQ1JDLE1BQU07WUFDTkMsTUFBTTtZQUNOSCxhQUFhO1lBQ2JJLFVBQVU7UUFDWjtLQUFFO0FBQ0osRUFBRTtBQUVGLGVBQWUsQ0FBQSxPQUFPQztJQUNsQixJQUFJQyxhQUFjVCxVQUFVVSxHQUFHLENBQUMsY0FBYTtRQUN6Q0MsV0FBVUgsWUFBWUksSUFBSSxDQUFDQyxFQUFFO0lBQ2pDO0lBR0EsSUFBSUosYUFBYSxNQUFNVCxVQUFVVSxHQUFHLENBQUMsY0FBYTtRQUM5Q0MsV0FBVUgsWUFBWUksSUFBSSxDQUFDQyxFQUFFO0lBQ2pDO0lBRUFDLFFBQVFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksRUFBRU4sV0FBVyxLQUFLLEVBQUVELFlBQVlJLElBQUksQ0FBQ0MsRUFBRSxDQUFDLENBQUM7SUFDbEUsSUFBR0osY0FBYyxJQUFHO1FBQ2hCLE1BQU1PLFNBQVMsSUFBSWYsT0FBT2dCLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYztRQUNwRCxNQUFNQyxVQUFVWixZQUFZSixPQUFPLENBQUNNLEdBQUcsQ0FBQyxXQUFXLE1BQU1XLEtBQUs7UUFDOUQsSUFBSTtZQUNBLE1BQU1DLFNBQVMsTUFBTU4sT0FBT08sSUFBSSxDQUFDO2dCQUFDSDthQUFRO1lBQzFDLE9BQU87Z0JBQUNJLE9BQU07b0JBQ1Y7d0JBQ0lDLFlBQVlDLE9BQU9DLElBQUksQ0FBQ0wsT0FBT00sT0FBTyxDQUFDLEVBQUUsQ0FBQ1IsT0FBTyxDQUFDUyxPQUFPO3dCQUN6RHZCLE1BQU07b0JBQ1Y7aUJBRUg7WUFBQTtRQUNMLEVBQUUsT0FBT3dCLE9BQU87WUFDWmhCLFFBQVFDLEdBQUcsQ0FBQyx5Q0FBeUNlLE1BQU1WLE9BQU87WUFDbEUsT0FBTztnQkFBQ1MsU0FBUSx5Q0FBeUNDLE1BQU1WLE9BQU87WUFBQTtRQUMxRTtJQUVKLE9BQ0k7UUFDTixNQUFNWixZQUFZdUIsS0FBSyxDQUFDO1lBQUVGLFNBQVM7WUFBZ0VHLFdBQVc7UUFBSztJQUNwSDtBQUVELENBQUEsRUFBRSJ9