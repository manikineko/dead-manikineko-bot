import { Flashcore } from "robo.js";
import { EmbedBuilder } from "discord.js";
export const config = {
    description: 'Check the bot\'s stats and ping!'
};
export default (async (interaction)=>{
    var powerlevel = Flashcore.get('powerlevel', {
        namespace: interaction.user.id
    });
    let embed = new EmbedBuilder().setTitle('Bot Stats').addFields([
        {
            name: 'Bot Ping',
            value: `${interaction.client.ws.ping}ms`,
            inline: true
        },
        {
            name: 'Uptime',
            value: `${Math.floor(interaction.client.uptime / 1000 / 60)} minutes`,
            inline: true
        },
        {
            name: 'Memory Usage',
            value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB`,
            inline: true
        }
    ]).setColor('#FF0000').setTimestamp().setFooter({
        text: interaction.client.user.username,
        iconURL: interaction.client.user.displayAvatarURL()
    });
    await interaction.reply({
        embeds: [
            embed
        ]
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxkaXNjb3JkXFxtYW5pa2luZWtvLWRpc2NvcmRcXGJvdHNcXG1hbmlraW5la28tYm90XFxzcmNcXGNvbW1hbmRzXFxwaW5nLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZsYXNoY29yZSwgdHlwZSBDb21tYW5kQ29uZmlnIH0gZnJvbSAncm9iby5qcydcbmltcG9ydCB7IEFwcGxpY2F0aW9uQ29tbWFuZE9wdGlvblR5cGUsIEF0dGFjaG1lbnQsIENvbW1hbmRJbnRlcmFjdGlvbiwgQ29tbWFuZEludGVyYWN0aW9uT3B0aW9uUmVzb2x2ZXIsIEVtYmVkQnVpbGRlciwgRW1iZWRGaWVsZCwgSW50ZXJhY3Rpb24gfSBmcm9tICdkaXNjb3JkLmpzJztcblxuZXhwb3J0IGNvbnN0IGNvbmZpZzogQ29tbWFuZENvbmZpZyA9IHtcblx0ZGVzY3JpcHRpb246ICdDaGVjayB0aGUgYm90XFwncyBzdGF0cyBhbmQgcGluZyEnLFxufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoaW50ZXJhY3Rpb246IENvbW1hbmRJbnRlcmFjdGlvbikgPT4ge1xuXHR2YXIgcG93ZXJsZXZlbCA9ICBGbGFzaGNvcmUuZ2V0KCdwb3dlcmxldmVsJyx7XG5cdFx0bmFtZXNwYWNlOmludGVyYWN0aW9uLnVzZXIuaWQsXG5cdH0pIGFzIG51bWJlcjtcblx0XG5cblx0bGV0IGVtYmVkID0gbmV3IEVtYmVkQnVpbGRlcigpXG5cdFx0LnNldFRpdGxlKCdCb3QgU3RhdHMnKVxuXHRcdC5hZGRGaWVsZHMoW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnQm90IFBpbmcnLFxuXHRcdFx0XHR2YWx1ZTogYCR7aW50ZXJhY3Rpb24uY2xpZW50LndzLnBpbmd9bXNgLFxuXHRcdFx0XHRpbmxpbmU6IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnVXB0aW1lJyxcblx0XHRcdFx0dmFsdWU6IGAke01hdGguZmxvb3IoaW50ZXJhY3Rpb24uY2xpZW50LnVwdGltZSAvIDEwMDAgLyA2MCl9IG1pbnV0ZXNgLFxuXHRcdFx0XHRpbmxpbmU6IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnTWVtb3J5IFVzYWdlJyxcblx0XHRcdFx0dmFsdWU6IGAkeyhwcm9jZXNzLm1lbW9yeVVzYWdlKCkuaGVhcFVzZWQgLyAxMDI0IC8gMTAyNCkudG9GaXhlZCgyKX1NQmAsXG5cdFx0XHRcdGlubGluZTogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XSlcblx0XHQuc2V0Q29sb3IoJyNGRjAwMDAnKVxuXHRcdC5zZXRUaW1lc3RhbXAoKVxuXHRcdC5zZXRGb290ZXIoe1xuXHRcdFx0dGV4dDogaW50ZXJhY3Rpb24uY2xpZW50LnVzZXIudXNlcm5hbWUsXG5cdFx0XHRpY29uVVJMOiBpbnRlcmFjdGlvbi5jbGllbnQudXNlci5kaXNwbGF5QXZhdGFyVVJMKCksXG5cdFx0fSlcblx0XHRcblx0XG5cdFx0XHRhd2FpdCBpbnRlcmFjdGlvbi5yZXBseSh7IGVtYmVkczogW2VtYmVkXSB9KVxuXG59IFxuIl0sIm5hbWVzIjpbIkZsYXNoY29yZSIsIkVtYmVkQnVpbGRlciIsImNvbmZpZyIsImRlc2NyaXB0aW9uIiwiaW50ZXJhY3Rpb24iLCJwb3dlcmxldmVsIiwiZ2V0IiwibmFtZXNwYWNlIiwidXNlciIsImlkIiwiZW1iZWQiLCJzZXRUaXRsZSIsImFkZEZpZWxkcyIsIm5hbWUiLCJ2YWx1ZSIsImNsaWVudCIsIndzIiwicGluZyIsImlubGluZSIsIk1hdGgiLCJmbG9vciIsInVwdGltZSIsInByb2Nlc3MiLCJtZW1vcnlVc2FnZSIsImhlYXBVc2VkIiwidG9GaXhlZCIsInNldENvbG9yIiwic2V0VGltZXN0YW1wIiwic2V0Rm9vdGVyIiwidGV4dCIsInVzZXJuYW1lIiwiaWNvblVSTCIsImRpc3BsYXlBdmF0YXJVUkwiLCJyZXBseSIsImVtYmVkcyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxTQUFTLFFBQTRCLFVBQVM7QUFDdkQsU0FBeUdDLFlBQVksUUFBaUMsYUFBYTtBQUVuSyxPQUFPLE1BQU1DLFNBQXdCO0lBQ3BDQyxhQUFhO0FBQ2QsRUFBQztBQUVELGVBQWUsQ0FBQSxPQUFPQztJQUNyQixJQUFJQyxhQUFjTCxVQUFVTSxHQUFHLENBQUMsY0FBYTtRQUM1Q0MsV0FBVUgsWUFBWUksSUFBSSxDQUFDQyxFQUFFO0lBQzlCO0lBR0EsSUFBSUMsUUFBUSxJQUFJVCxlQUNkVSxRQUFRLENBQUMsYUFDVEMsU0FBUyxDQUFDO1FBQ1Y7WUFDQ0MsTUFBTTtZQUNOQyxPQUFPLENBQUMsRUFBRVYsWUFBWVcsTUFBTSxDQUFDQyxFQUFFLENBQUNDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDeENDLFFBQVE7UUFDVDtRQUNBO1lBQ0NMLE1BQU07WUFDTkMsT0FBTyxDQUFDLEVBQUVLLEtBQUtDLEtBQUssQ0FBQ2hCLFlBQVlXLE1BQU0sQ0FBQ00sTUFBTSxHQUFHLE9BQU8sSUFBSSxRQUFRLENBQUM7WUFDckVILFFBQVE7UUFDVDtRQUNBO1lBQ0NMLE1BQU07WUFDTkMsT0FBTyxDQUFDLEVBQUUsQUFBQ1EsQ0FBQUEsUUFBUUMsV0FBVyxHQUFHQyxRQUFRLEdBQUcsT0FBTyxJQUFHLEVBQUdDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUN2RVAsUUFBUTtRQUNUO0tBQ0EsRUFDQVEsUUFBUSxDQUFDLFdBQ1RDLFlBQVksR0FDWkMsU0FBUyxDQUFDO1FBQ1ZDLE1BQU16QixZQUFZVyxNQUFNLENBQUNQLElBQUksQ0FBQ3NCLFFBQVE7UUFDdENDLFNBQVMzQixZQUFZVyxNQUFNLENBQUNQLElBQUksQ0FBQ3dCLGdCQUFnQjtJQUNsRDtJQUdDLE1BQU01QixZQUFZNkIsS0FBSyxDQUFDO1FBQUVDLFFBQVE7WUFBQ3hCO1NBQU07SUFBQztBQUU3QyxDQUFBLEVBQUMifQ==