import { EmbedBuilder } from "discord.js";
import { Flashcore } from "robo.js";
export default async function(interaction, message) {
    const user = interaction.targetUser;
    const avatar = user.displayAvatarURL({
        dynamic: true,
        size: 1024
    });
    //get powerlevel
    let powerlevel = await Flashcore.get('powerlevel', {
        namespace: user.id
    });
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
    };
    if (!powerlevel) {
        Flashcore.set('powerlevel', 0, {
            namespace: interaction.targetUser.id
        });
        powerlevel = 0;
    }
    let powerlevel_name = powerlevels ? Object.keys(powerlevels).find((key)=>powerlevels[key] === powerlevel) : 'User';
    //check if user has powerlevel if not set to 0
    if (!powerlevel) {
        Flashcore.set('powerlevel', 0, {
            namespace: interaction.targetUser.id
        });
    }
    //get guild if available
    let guild = interaction.guild;
    if (!guild) {
        guild = {
            name: `Direct Message between ${interaction.user} and ${interaction.targetUser}`,
            id: `${interaction.channelId}`
        };
    }
    const embed = new EmbedBuilder().setTitle(`${user.tag}'s Stats`).addFields({
        name: 'Powerlevel',
        value: `${powerlevel_name || 'User'} (${powerlevel || 0}) for ${user.tag} (${user.id})`
    }).addFields({
        name: 'Channel',
        value: `${interaction.channelId}`
    }).addFields({
        name: 'User',
        value: `${interaction.user.tag} (${interaction.user.id})`
    }).addFields({
        name: 'Guild',
        value: `${guild.name} (${guild.id})`
    }).setThumbnail(avatar).setColor('#0099ff').setFooter({
        text: `Requested by ${interaction.user.tag}`,
        iconURL: interaction.user.displayAvatarURL()
    }).setTimestamp();
    return {
        embeds: [
            embed
        ]
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxkaXNjb3JkXFxtYW5pa2luZWtvLWRpc2NvcmRcXGJvdHNcXG1hbmlraW5la28tYm90XFxzcmNcXGNvbnRleHRcXHVzZXJcXFVzZXIgaW5mby50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyAgRW1iZWRCdWlsZGVyLCBHdWlsZCwgdHlwZSBNZXNzYWdlLCB0eXBlIFVzZXJDb250ZXh0TWVudUNvbW1hbmRJbnRlcmFjdGlvbiB9IGZyb20gJ2Rpc2NvcmQuanMnXHJcbmltcG9ydCB7IEZsYXNoY29yZSB9IGZyb20gJ3JvYm8uanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKGludGVyYWN0aW9uOiBVc2VyQ29udGV4dE1lbnVDb21tYW5kSW50ZXJhY3Rpb24sIG1lc3NhZ2U6IE1lc3NhZ2UpIHtcclxuXHJcbiAgICBjb25zdCB1c2VyID0gaW50ZXJhY3Rpb24udGFyZ2V0VXNlcjtcclxuICAgIGNvbnN0IGF2YXRhciA9IHVzZXIuZGlzcGxheUF2YXRhclVSTCh7IGR5bmFtaWM6IHRydWUsIHNpemU6IDEwMjQgfSk7XHJcbiAgICAvL2dldCBwb3dlcmxldmVsXHJcbiAgICBsZXQgcG93ZXJsZXZlbCA9IGF3YWl0IEZsYXNoY29yZS5nZXQoJ3Bvd2VybGV2ZWwnLHtuYW1lc3BhY2U6dXNlci5pZH0pIGFzIG51bWJlcjtcclxuICAgIHR5cGUgcG93ZXJsZXZlbF9zdHJ1Y3QgID0ge3Bvd2VybGV2ZWw6MH07IFxyXG4gICAgY29uc3QgcG93ZXJsZXZlbHMgPSB7XHJcbiAgICAgICAgXCJCb3QgT3duZXJcIjogMTAwLFxyXG4gICAgICAgIFwiQm90IEdsb2JhbCBNb2RlcmF0b3JcIjogNzUsXHJcbiAgICAgICAgXCJTZXJ2ZXIgT3duZXJcIjogNTAsXHJcbiAgICAgICAgXCJTZXJ2ZXIgQWRtaW5pc3RyYXRvclwiOiA0MCxcclxuICAgICAgICBcIlNlcnZlciBNb2RlcmF0b3JcIjogMzAsXHJcbiAgICAgICAgXCJTZXJ2ZXIgSGVscGVyXCI6IDIwLFxyXG4gICAgICAgIFwiQmV0YSBUZXN0ZXJcIjogMTAsXHJcbiAgICAgICAgXCJVc2VyXCI6IDAsXHJcbiAgICAgICAgXCJCYW5uZWRcIjogLTFcclxuICAgIFxyXG4gICAgfVxyXG4gICAgaWYoIXBvd2VybGV2ZWwpe1xyXG4gICAgICAgIEZsYXNoY29yZS5zZXQoJ3Bvd2VybGV2ZWwnLDAse25hbWVzcGFjZTppbnRlcmFjdGlvbi50YXJnZXRVc2VyLmlkfSk7XHJcbiAgICAgICAgcG93ZXJsZXZlbCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHBvd2VybGV2ZWxfbmFtZSA9IHBvd2VybGV2ZWxzID8gT2JqZWN0LmtleXMocG93ZXJsZXZlbHMpLmZpbmQoa2V5ID0+IHBvd2VybGV2ZWxzW2tleV0gPT09IHBvd2VybGV2ZWwpIDogJ1VzZXInO1xyXG4gICAgLy9jaGVjayBpZiB1c2VyIGhhcyBwb3dlcmxldmVsIGlmIG5vdCBzZXQgdG8gMFxyXG4gICAgaWYoIXBvd2VybGV2ZWwpe1xyXG4gICAgICAgIEZsYXNoY29yZS5zZXQoJ3Bvd2VybGV2ZWwnLDAse25hbWVzcGFjZTppbnRlcmFjdGlvbi50YXJnZXRVc2VyLmlkfSk7XHJcbiAgICB9XHJcbiAgICAvL2dldCBndWlsZCBpZiBhdmFpbGFibGVcclxuICAgIGxldCBndWlsZCA9IGludGVyYWN0aW9uLmd1aWxkO1xyXG4gICAgaWYoIWd1aWxkKXtcclxuICAgICAgICBndWlsZCA9IHtuYW1lOmBEaXJlY3QgTWVzc2FnZSBiZXR3ZWVuICR7aW50ZXJhY3Rpb24udXNlcn0gYW5kICR7aW50ZXJhY3Rpb24udGFyZ2V0VXNlcn1gLGlkOmAke2ludGVyYWN0aW9uLmNoYW5uZWxJZH1gfSBhcyBHdWlsZDtcclxuICAgIH1cclxuICAgIGNvbnN0IGVtYmVkID0gbmV3IEVtYmVkQnVpbGRlcigpXHJcbiAgICAgICAgLnNldFRpdGxlKGAke3VzZXIudGFnfSdzIFN0YXRzYClcclxuICAgICAgICAuYWRkRmllbGRzKHtuYW1lOidQb3dlcmxldmVsJyx2YWx1ZTpgJHtwb3dlcmxldmVsX25hbWUgfHwgJ1VzZXInfSAoJHtwb3dlcmxldmVsIHx8IDB9KSBmb3IgJHt1c2VyLnRhZ30gKCR7dXNlci5pZH0pYH0pXHJcbiAgICAgICAgLmFkZEZpZWxkcyh7bmFtZTonQ2hhbm5lbCcsdmFsdWU6YCR7aW50ZXJhY3Rpb24uY2hhbm5lbElkfWB9KVxyXG4gICAgICAgIC5hZGRGaWVsZHMoe25hbWU6J1VzZXInLHZhbHVlOmAke2ludGVyYWN0aW9uLnVzZXIudGFnfSAoJHtpbnRlcmFjdGlvbi51c2VyLmlkfSlgfSlcclxuICAgICAgICAuYWRkRmllbGRzKHtuYW1lOidHdWlsZCcsdmFsdWU6YCR7Z3VpbGQubmFtZX0gKCR7Z3VpbGQuaWR9KWB9KVxyXG4gICAgICAgIC5zZXRUaHVtYm5haWwoYXZhdGFyKVxyXG4gICAgICAgIC5zZXRDb2xvcignIzAwOTlmZicpXHJcbiAgICAgICAgLnNldEZvb3Rlcih7IHRleHQ6IGBSZXF1ZXN0ZWQgYnkgJHtpbnRlcmFjdGlvbi51c2VyLnRhZ31gLCBpY29uVVJMOiBpbnRlcmFjdGlvbi51c2VyLmRpc3BsYXlBdmF0YXJVUkwoKSB9KVxyXG4gICAgICAgIC5zZXRUaW1lc3RhbXAoKTtcclxuICAgIHJldHVybiB7IGVtYmVkczogW2VtYmVkXSB9O1xyXG4gICAgICAgIFxyXG59Il0sIm5hbWVzIjpbIkVtYmVkQnVpbGRlciIsIkZsYXNoY29yZSIsImludGVyYWN0aW9uIiwibWVzc2FnZSIsInVzZXIiLCJ0YXJnZXRVc2VyIiwiYXZhdGFyIiwiZGlzcGxheUF2YXRhclVSTCIsImR5bmFtaWMiLCJzaXplIiwicG93ZXJsZXZlbCIsImdldCIsIm5hbWVzcGFjZSIsImlkIiwicG93ZXJsZXZlbHMiLCJzZXQiLCJwb3dlcmxldmVsX25hbWUiLCJPYmplY3QiLCJrZXlzIiwiZmluZCIsImtleSIsImd1aWxkIiwibmFtZSIsImNoYW5uZWxJZCIsImVtYmVkIiwic2V0VGl0bGUiLCJ0YWciLCJhZGRGaWVsZHMiLCJ2YWx1ZSIsInNldFRodW1ibmFpbCIsInNldENvbG9yIiwic2V0Rm9vdGVyIiwidGV4dCIsImljb25VUkwiLCJzZXRUaW1lc3RhbXAiLCJlbWJlZHMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBLFNBQVVBLFlBQVksUUFBcUUsYUFBWTtBQUN2RyxTQUFTQyxTQUFTLFFBQVEsVUFBVTtBQUVwQyxlQUFlLGVBQWdCQyxXQUE4QyxFQUFFQyxPQUFnQjtJQUUzRixNQUFNQyxPQUFPRixZQUFZRyxVQUFVO0lBQ25DLE1BQU1DLFNBQVNGLEtBQUtHLGdCQUFnQixDQUFDO1FBQUVDLFNBQVM7UUFBTUMsTUFBTTtJQUFLO0lBQ2pFLGdCQUFnQjtJQUNoQixJQUFJQyxhQUFhLE1BQU1ULFVBQVVVLEdBQUcsQ0FBQyxjQUFhO1FBQUNDLFdBQVVSLEtBQUtTLEVBQUU7SUFBQTtJQUVwRSxNQUFNQyxjQUFjO1FBQ2hCLGFBQWE7UUFDYix3QkFBd0I7UUFDeEIsZ0JBQWdCO1FBQ2hCLHdCQUF3QjtRQUN4QixvQkFBb0I7UUFDcEIsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixRQUFRO1FBQ1IsVUFBVSxDQUFDO0lBRWY7SUFDQSxJQUFHLENBQUNKLFlBQVc7UUFDWFQsVUFBVWMsR0FBRyxDQUFDLGNBQWEsR0FBRTtZQUFDSCxXQUFVVixZQUFZRyxVQUFVLENBQUNRLEVBQUU7UUFBQTtRQUNqRUgsYUFBYTtJQUNqQjtJQUVBLElBQUlNLGtCQUFrQkYsY0FBY0csT0FBT0MsSUFBSSxDQUFDSixhQUFhSyxJQUFJLENBQUNDLENBQUFBLE1BQU9OLFdBQVcsQ0FBQ00sSUFBSSxLQUFLVixjQUFjO0lBQzVHLDhDQUE4QztJQUM5QyxJQUFHLENBQUNBLFlBQVc7UUFDWFQsVUFBVWMsR0FBRyxDQUFDLGNBQWEsR0FBRTtZQUFDSCxXQUFVVixZQUFZRyxVQUFVLENBQUNRLEVBQUU7UUFBQTtJQUNyRTtJQUNBLHdCQUF3QjtJQUN4QixJQUFJUSxRQUFRbkIsWUFBWW1CLEtBQUs7SUFDN0IsSUFBRyxDQUFDQSxPQUFNO1FBQ05BLFFBQVE7WUFBQ0MsTUFBSyxDQUFDLHVCQUF1QixFQUFFcEIsWUFBWUUsSUFBSSxDQUFDLEtBQUssRUFBRUYsWUFBWUcsVUFBVSxDQUFDLENBQUM7WUFBQ1EsSUFBRyxDQUFDLEVBQUVYLFlBQVlxQixTQUFTLENBQUMsQ0FBQztRQUFBO0lBQzFIO0lBQ0EsTUFBTUMsUUFBUSxJQUFJeEIsZUFDYnlCLFFBQVEsQ0FBQyxDQUFDLEVBQUVyQixLQUFLc0IsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUM5QkMsU0FBUyxDQUFDO1FBQUNMLE1BQUs7UUFBYU0sT0FBTSxDQUFDLEVBQUVaLG1CQUFtQixPQUFPLEVBQUUsRUFBRU4sY0FBYyxFQUFFLE1BQU0sRUFBRU4sS0FBS3NCLEdBQUcsQ0FBQyxFQUFFLEVBQUV0QixLQUFLUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQUEsR0FDbkhjLFNBQVMsQ0FBQztRQUFDTCxNQUFLO1FBQVVNLE9BQU0sQ0FBQyxFQUFFMUIsWUFBWXFCLFNBQVMsQ0FBQyxDQUFDO0lBQUEsR0FDMURJLFNBQVMsQ0FBQztRQUFDTCxNQUFLO1FBQU9NLE9BQU0sQ0FBQyxFQUFFMUIsWUFBWUUsSUFBSSxDQUFDc0IsR0FBRyxDQUFDLEVBQUUsRUFBRXhCLFlBQVlFLElBQUksQ0FBQ1MsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUFBLEdBQy9FYyxTQUFTLENBQUM7UUFBQ0wsTUFBSztRQUFRTSxPQUFNLENBQUMsRUFBRVAsTUFBTUMsSUFBSSxDQUFDLEVBQUUsRUFBRUQsTUFBTVIsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUFBLEdBQzNEZ0IsWUFBWSxDQUFDdkIsUUFDYndCLFFBQVEsQ0FBQyxXQUNUQyxTQUFTLENBQUM7UUFBRUMsTUFBTSxDQUFDLGFBQWEsRUFBRTlCLFlBQVlFLElBQUksQ0FBQ3NCLEdBQUcsQ0FBQyxDQUFDO1FBQUVPLFNBQVMvQixZQUFZRSxJQUFJLENBQUNHLGdCQUFnQjtJQUFHLEdBQ3ZHMkIsWUFBWTtJQUNqQixPQUFPO1FBQUVDLFFBQVE7WUFBQ1g7U0FBTTtJQUFDO0FBRTdCIn0=