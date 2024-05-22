export const run = async (client, message, args)=>{
    const language = client.getSettings(message.guild?.id).language;
    const lang = await import(`../modules/languages/${language}.json`);
    const msgs = [
        "Checking my connection to Discord...",
        "Waiting for you to pong...",
        "Sending pong...",
        "Searching for a ping...",
        "Editing with a pong...",
        "Waiting for Discord to ping...",
        "Creating a ping-pong party...",
        "Inviting player: ping...",
        "Discord is about to pong...",
        "Waiting for my teammate to pong...",
        "Pinging the pong...",
        "There isn't any easter egg awaiting...",
        "Making a ping flag...",
        "Waiting for you to play with the pong game with me..."
    ];
    const random = Math.floor(Math.random() * msgs.length);
    const msg = await message.channel.send(`<:slowmode:712734033205002292> ${msgs[random]}`);
    const msg2 = [
        "🏓 Received Pong!",
        "🏓 I have found a pong friend!",
        "🏓 Ping-pong!"
    ];
    const random2 = Math.floor(Math.random() * msg2.length);
    msg.edit(`${msg2[random2]}\nMessage roundtrip: \`${msg.createdTimestamp - message.createdTimestamp}ms\`\nAPI heartbeat: \`${Math.round(client.ws.ping)}ms\``);
};
export const conf = {
    enabled: true,
    aliases: [
        "pong"
    ],
    guildOnly: true,
    permLevels: 'User'
};
export const help = {
    name: 'ping',
    category: 'Other',
    description: 'Will it respond with a pong?\n\nProbably yes.',
    usage: 'ping'
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxkaXNjb3JkXFxtYW5pa2luZWtvLWRpc2NvcmRcXGJvdHNcXG1hbmlraW5la28tYm90XFxzcmNcXGxlZ2FjeV9jb21tYW5kc1xccGluZy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnQsIE1lc3NhZ2UgfSBmcm9tICdkaXNjb3JkLmpzJztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcblxyXG5leHBvcnQgY29uc3QgcnVuID0gYXN5bmMgKGNsaWVudDogQ2xpZW50LCBtZXNzYWdlOiBNZXNzYWdlLCBhcmdzOiBzdHJpbmdbXSkgPT4ge1xyXG4gICAgY29uc3QgbGFuZ3VhZ2UgPSBjbGllbnQuZ2V0U2V0dGluZ3MobWVzc2FnZS5ndWlsZD8uaWQpLmxhbmd1YWdlO1xyXG4gICAgY29uc3QgbGFuZyA9IGF3YWl0IGltcG9ydChgLi4vbW9kdWxlcy9sYW5ndWFnZXMvJHtsYW5ndWFnZX0uanNvbmApO1xyXG5cclxuICAgIGNvbnN0IG1zZ3MgPSBbXHJcbiAgICAgICAgXCJDaGVja2luZyBteSBjb25uZWN0aW9uIHRvIERpc2NvcmQuLi5cIixcclxuICAgICAgICBcIldhaXRpbmcgZm9yIHlvdSB0byBwb25nLi4uXCIsXHJcbiAgICAgICAgXCJTZW5kaW5nIHBvbmcuLi5cIixcclxuICAgICAgICBcIlNlYXJjaGluZyBmb3IgYSBwaW5nLi4uXCIsXHJcbiAgICAgICAgXCJFZGl0aW5nIHdpdGggYSBwb25nLi4uXCIsXHJcbiAgICAgICAgXCJXYWl0aW5nIGZvciBEaXNjb3JkIHRvIHBpbmcuLi5cIixcclxuICAgICAgICBcIkNyZWF0aW5nIGEgcGluZy1wb25nIHBhcnR5Li4uXCIsXHJcbiAgICAgICAgXCJJbnZpdGluZyBwbGF5ZXI6IHBpbmcuLi5cIixcclxuICAgICAgICBcIkRpc2NvcmQgaXMgYWJvdXQgdG8gcG9uZy4uLlwiLFxyXG4gICAgICAgIFwiV2FpdGluZyBmb3IgbXkgdGVhbW1hdGUgdG8gcG9uZy4uLlwiLFxyXG4gICAgICAgIFwiUGluZ2luZyB0aGUgcG9uZy4uLlwiLFxyXG4gICAgICAgIFwiVGhlcmUgaXNuJ3QgYW55IGVhc3RlciBlZ2cgYXdhaXRpbmcuLi5cIixcclxuICAgICAgICBcIk1ha2luZyBhIHBpbmcgZmxhZy4uLlwiLFxyXG4gICAgICAgIFwiV2FpdGluZyBmb3IgeW91IHRvIHBsYXkgd2l0aCB0aGUgcG9uZyBnYW1lIHdpdGggbWUuLi5cIlxyXG4gICAgXTtcclxuICAgIGNvbnN0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1zZ3MubGVuZ3RoKTtcclxuICAgIGNvbnN0IG1zZyA9IGF3YWl0IG1lc3NhZ2UuY2hhbm5lbC5zZW5kKGA8OnNsb3dtb2RlOjcxMjczNDAzMzIwNTAwMjI5Mj4gJHttc2dzW3JhbmRvbV19YCk7XHJcblxyXG4gICAgY29uc3QgbXNnMiA9IFtcclxuICAgICAgICBcIvCfj5MgUmVjZWl2ZWQgUG9uZyFcIixcclxuICAgICAgICBcIvCfj5MgSSBoYXZlIGZvdW5kIGEgcG9uZyBmcmllbmQhXCIsXHJcbiAgICAgICAgXCLwn4+TIFBpbmctcG9uZyFcIlxyXG4gICAgXTtcclxuICAgIGNvbnN0IHJhbmRvbTIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtc2cyLmxlbmd0aCk7XHJcblxyXG4gICAgbXNnLmVkaXQoYCR7bXNnMltyYW5kb20yXX1cXG5NZXNzYWdlIHJvdW5kdHJpcDogXFxgJHttc2cuY3JlYXRlZFRpbWVzdGFtcCAtIG1lc3NhZ2UuY3JlYXRlZFRpbWVzdGFtcH1tc1xcYFxcbkFQSSBoZWFydGJlYXQ6IFxcYCR7TWF0aC5yb3VuZChjbGllbnQud3MucGluZyl9bXNcXGBgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb25mID0ge1xyXG4gICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgIGFsaWFzZXM6IFtcInBvbmdcIl0sXHJcbiAgICBndWlsZE9ubHk6IHRydWUsXHJcbiAgICBwZXJtTGV2ZWxzOiAnVXNlcidcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBoZWxwID0ge1xyXG4gICAgbmFtZTogJ3BpbmcnLFxyXG4gICAgY2F0ZWdvcnk6ICdPdGhlcicsXHJcbiAgICBkZXNjcmlwdGlvbjogJ1dpbGwgaXQgcmVzcG9uZCB3aXRoIGEgcG9uZz9cXG5cXG5Qcm9iYWJseSB5ZXMuJyxcclxuICAgIHVzYWdlOiAncGluZydcclxufTtcclxuIl0sIm5hbWVzIjpbInJ1biIsImNsaWVudCIsIm1lc3NhZ2UiLCJhcmdzIiwibGFuZ3VhZ2UiLCJnZXRTZXR0aW5ncyIsImd1aWxkIiwiaWQiLCJsYW5nIiwibXNncyIsInJhbmRvbSIsIk1hdGgiLCJmbG9vciIsImxlbmd0aCIsIm1zZyIsImNoYW5uZWwiLCJzZW5kIiwibXNnMiIsInJhbmRvbTIiLCJlZGl0IiwiY3JlYXRlZFRpbWVzdGFtcCIsInJvdW5kIiwid3MiLCJwaW5nIiwiY29uZiIsImVuYWJsZWQiLCJhbGlhc2VzIiwiZ3VpbGRPbmx5IiwicGVybUxldmVscyIsImhlbHAiLCJuYW1lIiwiY2F0ZWdvcnkiLCJkZXNjcmlwdGlvbiIsInVzYWdlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBR0EsT0FBTyxNQUFNQSxNQUFNLE9BQU9DLFFBQWdCQyxTQUFrQkM7SUFDeEQsTUFBTUMsV0FBV0gsT0FBT0ksV0FBVyxDQUFDSCxRQUFRSSxLQUFLLEVBQUVDLElBQUlILFFBQVE7SUFDL0QsTUFBTUksT0FBTyxNQUFNLE1BQU0sQ0FBQyxDQUFDLHFCQUFxQixFQUFFSixTQUFTLEtBQUssQ0FBQztJQUVqRSxNQUFNSyxPQUFPO1FBQ1Q7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtLQUNIO0lBQ0QsTUFBTUMsU0FBU0MsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRCxNQUFNLEtBQUtELEtBQUtJLE1BQU07SUFDckQsTUFBTUMsTUFBTSxNQUFNWixRQUFRYSxPQUFPLENBQUNDLElBQUksQ0FBQyxDQUFDLCtCQUErQixFQUFFUCxJQUFJLENBQUNDLE9BQU8sQ0FBQyxDQUFDO0lBRXZGLE1BQU1PLE9BQU87UUFDVDtRQUNBO1FBQ0E7S0FDSDtJQUNELE1BQU1DLFVBQVVQLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0QsTUFBTSxLQUFLTyxLQUFLSixNQUFNO0lBRXREQyxJQUFJSyxJQUFJLENBQUMsQ0FBQyxFQUFFRixJQUFJLENBQUNDLFFBQVEsQ0FBQyx1QkFBdUIsRUFBRUosSUFBSU0sZ0JBQWdCLEdBQUdsQixRQUFRa0IsZ0JBQWdCLENBQUMsdUJBQXVCLEVBQUVULEtBQUtVLEtBQUssQ0FBQ3BCLE9BQU9xQixFQUFFLENBQUNDLElBQUksRUFBRSxJQUFJLENBQUM7QUFDaEssRUFBRTtBQUVGLE9BQU8sTUFBTUMsT0FBTztJQUNoQkMsU0FBUztJQUNUQyxTQUFTO1FBQUM7S0FBTztJQUNqQkMsV0FBVztJQUNYQyxZQUFZO0FBQ2hCLEVBQUU7QUFFRixPQUFPLE1BQU1DLE9BQU87SUFDaEJDLE1BQU07SUFDTkMsVUFBVTtJQUNWQyxhQUFhO0lBQ2JDLE9BQU87QUFDWCxFQUFFIn0=