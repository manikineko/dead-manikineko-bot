import { Flashcore } from "robo.js";
import { OpenAI } from "../services/openai.js";
export const config = {
    description: 'Generate an image with DALL-E-3!',
    options: [
        {
            type: 'string',
            name: 'prompt',
            description: 'Prompt to generate an image from',
            required: true
        },
        {
            type: 'boolean',
            name: 'enhance_prompt',
            description: 'Enhance the prompt Using GPT4 for better results'
        }
    ]
};
export default (async (interaction)=>{
    var powerlevel = await Flashcore.get('powerlevel', {
        namespace: interaction.user.id
    });
    console.log(`Powerlevel: ${powerlevel} for ${interaction.user.id}`);
    if (powerlevel >= 10) {
        const openAI = new OpenAI(process.env.OPENAI_API_KEY);
        let prompt = interaction.options.get('prompt', true).value;
        const enhance_prompt = interaction.options.get('enhance_prompt', false)?.value;
        if (enhance_prompt) {
            try {
                const result = await openAI.chat([
                    `Enchance this Dall-E-3 prompt: ${prompt} give back only the prompt`
                ]);
                prompt = result.choices[0].message.content;
            } catch (error) {
                console.log('Failed to get response from OpenAI: ' + error.message);
                return {
                    content: 'Failed to get response from OpenAI: ' + error.message
                };
            }
        }
        try {
            const result = await openAI.createImage(prompt);
            const image = result.data[0].url;
            return {
                content: `Image`,
                files: [
                    {
                        attachment: image,
                        name: 'image.png'
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxkaXNjb3JkXFxtYW5pa2luZWtvLWRpc2NvcmRcXGJvdHNcXG1hbmlraW5la28tYm90XFxzcmNcXGNvbW1hbmRzXFxpbWFnaW5lLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZsYXNoY29yZSwgdHlwZSBDb21tYW5kQ29uZmlnLHR5cGUgQ29tbWFuZE9wdGlvbiB9IGZyb20gJ3JvYm8uanMnO1xyXG5pbXBvcnQgeyBPcGVuQUkgfSBmcm9tICcuLi9zZXJ2aWNlcy9vcGVuYWknO1xyXG5pbXBvcnQgeyBDb21tYW5kSW50ZXJhY3Rpb24gfSBmcm9tICdkaXNjb3JkLmpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWc6IENvbW1hbmRDb25maWcgPSB7XHJcbiAgZGVzY3JpcHRpb246ICdHZW5lcmF0ZSBhbiBpbWFnZSB3aXRoIERBTEwtRS0zIScsXHJcbiAgICBvcHRpb25zOiBbe1xyXG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgICAgIG5hbWU6ICdwcm9tcHQnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnUHJvbXB0IHRvIGdlbmVyYXRlIGFuIGltYWdlIGZyb20nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0eXBlOiAnYm9vbGVhbicsXHJcbiAgICAgICAgbmFtZTogJ2VuaGFuY2VfcHJvbXB0JyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0VuaGFuY2UgdGhlIHByb21wdCBVc2luZyBHUFQ0IGZvciBiZXR0ZXIgcmVzdWx0cycsXHJcbn1dXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoaW50ZXJhY3Rpb246IENvbW1hbmRJbnRlcmFjdGlvbikgPT4ge1xyXG4gICAgdmFyIHBvd2VybGV2ZWwgPSBhd2FpdCBGbGFzaGNvcmUuZ2V0KCdwb3dlcmxldmVsJyx7XHJcbiAgICAgICAgbmFtZXNwYWNlOmludGVyYWN0aW9uLnVzZXIuaWQsXHJcbiAgICB9KSBhcyBudW1iZXI7XHJcbiAgIFxyXG4gICAgY29uc29sZS5sb2coYFBvd2VybGV2ZWw6ICR7cG93ZXJsZXZlbH0gZm9yICR7aW50ZXJhY3Rpb24udXNlci5pZH1gKVxyXG4gICAgaWYocG93ZXJsZXZlbCA+PSAxMCl7XHJcbiAgICAgICAgY29uc3Qgb3BlbkFJID0gbmV3IE9wZW5BSShwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWSBhcyBzdHJpbmcpO1xyXG4gICAgICAgIGxldCBwcm9tcHQgPSBpbnRlcmFjdGlvbi5vcHRpb25zLmdldCgncHJvbXB0JywgdHJ1ZSkudmFsdWUgYXMgc3RyaW5nO1xyXG4gICAgICAgIGNvbnN0IGVuaGFuY2VfcHJvbXB0ID0gaW50ZXJhY3Rpb24ub3B0aW9ucy5nZXQoJ2VuaGFuY2VfcHJvbXB0JywgZmFsc2UpPy52YWx1ZSBhcyBib29sZWFuO1xyXG4gICAgICAgXHJcbiAgICAgICAgaWYoZW5oYW5jZV9wcm9tcHQpe1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgb3BlbkFJLmNoYXQoW2BFbmNoYW5jZSB0aGlzIERhbGwtRS0zIHByb21wdDogJHtwcm9tcHR9IGdpdmUgYmFjayBvbmx5IHRoZSBwcm9tcHRgXSk7XHJcbiAgICAgICAgICAgICAgICBwcm9tcHQgPSByZXN1bHQuY2hvaWNlc1swXS5tZXNzYWdlLmNvbnRlbnQ7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRmFpbGVkIHRvIGdldCByZXNwb25zZSBmcm9tIE9wZW5BSTogJyArIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtjb250ZW50OidGYWlsZWQgdG8gZ2V0IHJlc3BvbnNlIGZyb20gT3BlbkFJOiAnICsgZXJyb3IubWVzc2FnZX1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBvcGVuQUkuY3JlYXRlSW1hZ2UocHJvbXB0KTtcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSByZXN1bHQuZGF0YVswXS51cmw7XHJcbiAgICAgICAgICAgIHJldHVybiB7Y29udGVudDogYEltYWdlYCwgZmlsZXM6IFt7XHJcbiAgICAgICAgICAgICAgICBhdHRhY2htZW50OiBpbWFnZSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdpbWFnZS5wbmcnXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XX1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRmFpbGVkIHRvIGdldCByZXNwb25zZSBmcm9tIE9wZW5BSTogJyArIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICByZXR1cm4ge2NvbnRlbnQ6J0ZhaWxlZCB0byBnZXQgcmVzcG9uc2UgZnJvbSBPcGVuQUk6ICcgKyBlcnJvci5tZXNzYWdlfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuXHRcdGF3YWl0IGludGVyYWN0aW9uLnJlcGx5KHsgY29udGVudDogJ1lvdSBkbyBub3QgaGF2ZSB0aGUgcmVxdWlyZWQgcG93ZXJsZXZlbCB0byB1c2UgdGhpcyBjb21tYW5kLicsIGVwaGVtZXJhbDogdHJ1ZSB9KVxyXG5cdH1cclxuXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJGbGFzaGNvcmUiLCJPcGVuQUkiLCJjb25maWciLCJkZXNjcmlwdGlvbiIsIm9wdGlvbnMiLCJ0eXBlIiwibmFtZSIsInJlcXVpcmVkIiwiaW50ZXJhY3Rpb24iLCJwb3dlcmxldmVsIiwiZ2V0IiwibmFtZXNwYWNlIiwidXNlciIsImlkIiwiY29uc29sZSIsImxvZyIsIm9wZW5BSSIsInByb2Nlc3MiLCJlbnYiLCJPUEVOQUlfQVBJX0tFWSIsInByb21wdCIsInZhbHVlIiwiZW5oYW5jZV9wcm9tcHQiLCJyZXN1bHQiLCJjaGF0IiwiY2hvaWNlcyIsIm1lc3NhZ2UiLCJjb250ZW50IiwiZXJyb3IiLCJjcmVhdGVJbWFnZSIsImltYWdlIiwiZGF0YSIsInVybCIsImZpbGVzIiwiYXR0YWNobWVudCIsInJlcGx5IiwiZXBoZW1lcmFsIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLFNBQVMsUUFBK0MsVUFBVTtBQUMzRSxTQUFTQyxNQUFNLFFBQVEsd0JBQXFCO0FBRzVDLE9BQU8sTUFBTUMsU0FBd0I7SUFDbkNDLGFBQWE7SUFDWEMsU0FBUztRQUFDO1lBQ05DLE1BQU07WUFDTkMsTUFBTTtZQUNOSCxhQUFhO1lBQ2JJLFVBQVU7UUFDZDtRQUNBO1lBQ0lGLE1BQU07WUFDTkMsTUFBTTtZQUNOSCxhQUFhO1FBQ3JCO0tBQUU7QUFDRixFQUFFO0FBRUYsZUFBZSxDQUFBLE9BQU9LO0lBQ2xCLElBQUlDLGFBQWEsTUFBTVQsVUFBVVUsR0FBRyxDQUFDLGNBQWE7UUFDOUNDLFdBQVVILFlBQVlJLElBQUksQ0FBQ0MsRUFBRTtJQUNqQztJQUVBQyxRQUFRQyxHQUFHLENBQUMsQ0FBQyxZQUFZLEVBQUVOLFdBQVcsS0FBSyxFQUFFRCxZQUFZSSxJQUFJLENBQUNDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xFLElBQUdKLGNBQWMsSUFBRztRQUNoQixNQUFNTyxTQUFTLElBQUlmLE9BQU9nQixRQUFRQyxHQUFHLENBQUNDLGNBQWM7UUFDcEQsSUFBSUMsU0FBU1osWUFBWUosT0FBTyxDQUFDTSxHQUFHLENBQUMsVUFBVSxNQUFNVyxLQUFLO1FBQzFELE1BQU1DLGlCQUFpQmQsWUFBWUosT0FBTyxDQUFDTSxHQUFHLENBQUMsa0JBQWtCLFFBQVFXO1FBRXpFLElBQUdDLGdCQUFlO1lBQ2QsSUFBSTtnQkFDQSxNQUFNQyxTQUFTLE1BQU1QLE9BQU9RLElBQUksQ0FBQztvQkFBQyxDQUFDLCtCQUErQixFQUFFSixPQUFPLDBCQUEwQixDQUFDO2lCQUFDO2dCQUN2R0EsU0FBU0csT0FBT0UsT0FBTyxDQUFDLEVBQUUsQ0FBQ0MsT0FBTyxDQUFDQyxPQUFPO1lBQzlDLEVBQUUsT0FBT0MsT0FBTztnQkFDWmQsUUFBUUMsR0FBRyxDQUFDLHlDQUF5Q2EsTUFBTUYsT0FBTztnQkFDbEUsT0FBTztvQkFBQ0MsU0FBUSx5Q0FBeUNDLE1BQU1GLE9BQU87Z0JBQUE7WUFDMUU7UUFDSjtRQUNBLElBQUk7WUFDQSxNQUFNSCxTQUFTLE1BQU1QLE9BQU9hLFdBQVcsQ0FBQ1Q7WUFDeEMsTUFBTVUsUUFBUVAsT0FBT1EsSUFBSSxDQUFDLEVBQUUsQ0FBQ0MsR0FBRztZQUNoQyxPQUFPO2dCQUFDTCxTQUFTLENBQUMsS0FBSyxDQUFDO2dCQUFFTSxPQUFPO29CQUFDO3dCQUM5QkMsWUFBWUo7d0JBQ1p4QixNQUFNO29CQUVWO2lCQUFFO1lBQUE7UUFDTixFQUFFLE9BQU9zQixPQUFPO1lBQ1pkLFFBQVFDLEdBQUcsQ0FBQyx5Q0FBeUNhLE1BQU1GLE9BQU87WUFDbEUsT0FBTztnQkFBQ0MsU0FBUSx5Q0FBeUNDLE1BQU1GLE9BQU87WUFBQTtRQUMxRTtJQUVKLE9BQ0k7UUFDTixNQUFNbEIsWUFBWTJCLEtBQUssQ0FBQztZQUFFUixTQUFTO1lBQWdFUyxXQUFXO1FBQUs7SUFDcEg7QUFFRCxDQUFBLEVBQUUifQ==