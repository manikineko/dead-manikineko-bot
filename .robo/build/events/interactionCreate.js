import { Flashcore } from "robo.js";
export default ((interaction)=>{
    Flashcore.get('powerlevel', {
        namespace: interaction.user.id
    }).then((powerlevel)=>{
        console.log(`Powerlevel: ${powerlevel} for ${interaction.user.username}(${interaction.user.id})`);
        if (interaction.isCommand()) {
            if (interaction.command?.type === 1) {
                console.log('Command:', interaction.commandName);
            } else if (interaction.command?.type === 2) {
                console.log('Context Menu:', interaction.commandName);
            } else if (interaction.command?.type === 3) {
                console.log('User Command:', interaction.commandName);
            }
            if (powerlevel == -1) {
                return interaction.reply({
                    content: 'Access Denied!',
                    ephemeral: true
                });
            }
        }
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxkaXNjb3JkXFxtYW5pa2luZWtvLWRpc2NvcmRcXGJvdHNcXG1hbmlraW5la28tYm90XFxzcmNcXGV2ZW50c1xcaW50ZXJhY3Rpb25DcmVhdGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW50ZXJhY3Rpb24gfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xuaW1wb3J0IHsgRmxhc2hjb3JlIH0gZnJvbSBcInJvYm8uanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgKGludGVyYWN0aW9uOiBJbnRlcmFjdGlvbikgPT4ge1xuXHRGbGFzaGNvcmUuZ2V0KCdwb3dlcmxldmVsJywge1xuXHRcdG5hbWVzcGFjZTogaW50ZXJhY3Rpb24udXNlci5pZCxcblx0fSkudGhlbigocG93ZXJsZXZlbCkgPT4ge1xuXHRjb25zb2xlLmxvZyhgUG93ZXJsZXZlbDogJHtwb3dlcmxldmVsfSBmb3IgJHtpbnRlcmFjdGlvbi51c2VyLnVzZXJuYW1lfSgke2ludGVyYWN0aW9uLnVzZXIuaWR9KWApXG5cdGlmKGludGVyYWN0aW9uLmlzQ29tbWFuZCgpKSB7XG5cdFx0XG5cdFx0aWYoaW50ZXJhY3Rpb24uY29tbWFuZD8udHlwZSA9PT0gMSkge1xuXHRcdFx0Y29uc29sZS5sb2coJ0NvbW1hbmQ6JywgaW50ZXJhY3Rpb24uY29tbWFuZE5hbWUpXG5cdFx0fVxuXHRcdGVsc2UgaWYoaW50ZXJhY3Rpb24uY29tbWFuZD8udHlwZSA9PT0gMikge1xuXHRcdFx0Y29uc29sZS5sb2coJ0NvbnRleHQgTWVudTonLCBpbnRlcmFjdGlvbi5jb21tYW5kTmFtZSlcblx0XHR9XG5cdFx0ZWxzZSBpZihpbnRlcmFjdGlvbi5jb21tYW5kPy50eXBlID09PSAzKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnVXNlciBDb21tYW5kOicsIGludGVyYWN0aW9uLmNvbW1hbmROYW1lKVxuXHRcdH1cblx0XHRpZihwb3dlcmxldmVsID09IC0xKSB7XG5cdFx0XHRcblx0XHRcdHJldHVybiBpbnRlcmFjdGlvbi5yZXBseSh7Y29udGVudDogJ0FjY2VzcyBEZW5pZWQhJywgZXBoZW1lcmFsOiB0cnVlfSkgO1xuXHRcdH1cblxuXHR9XG59KTtcbn1cblxuIl0sIm5hbWVzIjpbIkZsYXNoY29yZSIsImludGVyYWN0aW9uIiwiZ2V0IiwibmFtZXNwYWNlIiwidXNlciIsImlkIiwidGhlbiIsInBvd2VybGV2ZWwiLCJjb25zb2xlIiwibG9nIiwidXNlcm5hbWUiLCJpc0NvbW1hbmQiLCJjb21tYW5kIiwidHlwZSIsImNvbW1hbmROYW1lIiwicmVwbHkiLCJjb250ZW50IiwiZXBoZW1lcmFsIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUNBLFNBQVNBLFNBQVMsUUFBUSxVQUFVO0FBRXBDLGVBQWUsQ0FBQSxDQUFDQztJQUNmRCxVQUFVRSxHQUFHLENBQUMsY0FBYztRQUMzQkMsV0FBV0YsWUFBWUcsSUFBSSxDQUFDQyxFQUFFO0lBQy9CLEdBQUdDLElBQUksQ0FBQyxDQUFDQztRQUNUQyxRQUFRQyxHQUFHLENBQUMsQ0FBQyxZQUFZLEVBQUVGLFdBQVcsS0FBSyxFQUFFTixZQUFZRyxJQUFJLENBQUNNLFFBQVEsQ0FBQyxDQUFDLEVBQUVULFlBQVlHLElBQUksQ0FBQ0MsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNoRyxJQUFHSixZQUFZVSxTQUFTLElBQUk7WUFFM0IsSUFBR1YsWUFBWVcsT0FBTyxFQUFFQyxTQUFTLEdBQUc7Z0JBQ25DTCxRQUFRQyxHQUFHLENBQUMsWUFBWVIsWUFBWWEsV0FBVztZQUNoRCxPQUNLLElBQUdiLFlBQVlXLE9BQU8sRUFBRUMsU0FBUyxHQUFHO2dCQUN4Q0wsUUFBUUMsR0FBRyxDQUFDLGlCQUFpQlIsWUFBWWEsV0FBVztZQUNyRCxPQUNLLElBQUdiLFlBQVlXLE9BQU8sRUFBRUMsU0FBUyxHQUFHO2dCQUN4Q0wsUUFBUUMsR0FBRyxDQUFDLGlCQUFpQlIsWUFBWWEsV0FBVztZQUNyRDtZQUNBLElBQUdQLGNBQWMsQ0FBQyxHQUFHO2dCQUVwQixPQUFPTixZQUFZYyxLQUFLLENBQUM7b0JBQUNDLFNBQVM7b0JBQWtCQyxXQUFXO2dCQUFJO1lBQ3JFO1FBRUQ7SUFDRDtBQUNBLENBQUEsRUFBQyJ9