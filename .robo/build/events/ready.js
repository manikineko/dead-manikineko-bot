import { ActivityType, Collection } from "discord.js";
import { Flashcore } from "robo.js";
import { commandsPath } from "./messageCreate.js";
import loadCommands from "../services/legacy_commandloader.js";
const bot_master = '983853053948080138';
const problematicOwners = [
    '1211747262888419449',
    '1223363297118654469'
]; // Add more problematic user IDs as needed
const legacy_commands = new Collection();
const aliases = new Collection();
export default (async (client)=>{
    // Set bot presence
    client.user?.setPresence({
        activities: [
            {
                name: 'manikineko.nl',
                type: ActivityType.Watching
            }
        ],
        status: 'online'
    });
    Flashcore.set('powerlevel', 100, {
        namespace: bot_master
    });
    loadCommands(client, commandsPath);
    client.legacy_commands = legacy_commands;
    client.aliases = aliases;
    // Log in message
    console.log(`Logged in as ${client.user?.tag}!`);
    // Check and leave guilds owned by problematic users
    for (const [guildId, guild] of client.guilds.cache){
        try {
            if (problematicOwners.includes(guild.ownerId)) {
                console.log(`Leaving guild "${guild.name}" as it is owned by a problematic user.`);
                await guild.leave();
            } else {
            // console.log(`Currently in guild: ${guild.name}`);
            }
        } catch (error) {
            console.error(`Failed to leave the guild "${guild.name}":`, error);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxkaXNjb3JkXFxtYW5pa2luZWtvLWRpc2NvcmRcXGJvdHNcXG1hbmlraW5la28tYm90XFxzcmNcXGV2ZW50c1xccmVhZHkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aXZpdHlUeXBlLCBDbGllbnQsIENvbGxlY3Rpb24gfSBmcm9tICdkaXNjb3JkLmpzJztcclxuaW1wb3J0IHsgRmxhc2hjb3JlIH0gZnJvbSAncm9iby5qcyc7XHJcbmltcG9ydCB7IGNvbW1hbmRzUGF0aCB9IGZyb20gJy4vbWVzc2FnZUNyZWF0ZSc7XHJcbmltcG9ydCBsb2FkQ29tbWFuZHMgZnJvbSAnLi4vc2VydmljZXMvbGVnYWN5X2NvbW1hbmRsb2FkZXInO1xyXG5cclxuY29uc3QgYm90X21hc3RlciA9ICc5ODM4NTMwNTM5NDgwODAxMzgnO1xyXG5jb25zdCBwcm9ibGVtYXRpY093bmVycyA9IFsnMTIxMTc0NzI2Mjg4ODQxOTQ0OScsJzEyMjMzNjMyOTcxMTg2NTQ0NjknXTsgLy8gQWRkIG1vcmUgcHJvYmxlbWF0aWMgdXNlciBJRHMgYXMgbmVlZGVkXHJcbmNvbnN0IGxlZ2FjeV9jb21tYW5kcyA9IG5ldyBDb2xsZWN0aW9uKCk7XHJcbmNvbnN0IGFsaWFzZXMgPSBuZXcgQ29sbGVjdGlvbigpO1xyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoY2xpZW50OiBDbGllbnQpID0+IHtcclxuICAgIC8vIFNldCBib3QgcHJlc2VuY2VcclxuICAgIGNsaWVudC51c2VyPy5zZXRQcmVzZW5jZSh7XHJcbiAgICAgICAgYWN0aXZpdGllczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnbWFuaWtpbmVrby5ubCcsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBBY3Rpdml0eVR5cGUuV2F0Y2hpbmcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzdGF0dXM6ICdvbmxpbmUnLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gU2V0IHBvd2VyIGxldmVsIGluIEZsYXNoY29yZVxyXG4gICAgaW50ZXJmYWNlIENsaWVudCB7XHJcbiAgICAgICAgbGVnYWN5X2NvbW1hbmRzOiBNYXA8YW55LCBhbnk+O1xyXG4gICAgfVxyXG5cclxuICAgIGludGVyZmFjZSBDbGllbnQge1xyXG4gICAgICAgIGFsaWFzZXM6IE1hcDxhbnksIGFueT47XHJcbiAgICAgICAgbGVnYWN5X2NvbW1hbmRzOiBNYXA8YW55LCBhbnk+OyAvLyBBZGQgJ2xlZ2FjeV9jb21tYW5kcycgcHJvcGVydHkgdG8gdGhlIGludGVyZmFjZVxyXG4gICAgfVxyXG5cclxuICAgIEZsYXNoY29yZS5zZXQoJ3Bvd2VybGV2ZWwnLCAxMDAsIHtcclxuICAgICAgICBuYW1lc3BhY2U6IGJvdF9tYXN0ZXIsXHJcbiAgICB9KTtcclxuICAgIGxvYWRDb21tYW5kcyhjbGllbnQsIGNvbW1hbmRzUGF0aCk7XHJcbiAgICBjbGllbnQubGVnYWN5X2NvbW1hbmRzID0gbGVnYWN5X2NvbW1hbmRzO1xyXG4gICAgY2xpZW50LmFsaWFzZXMgPSBhbGlhc2VzO1xyXG5cclxuICAgIC8vIExvZyBpbiBtZXNzYWdlXHJcbiAgICBjb25zb2xlLmxvZyhgTG9nZ2VkIGluIGFzICR7Y2xpZW50LnVzZXI/LnRhZ30hYCk7XHJcbiAgICBcclxuICAgIC8vIENoZWNrIGFuZCBsZWF2ZSBndWlsZHMgb3duZWQgYnkgcHJvYmxlbWF0aWMgdXNlcnNcclxuICAgIGZvciAoY29uc3QgW2d1aWxkSWQsIGd1aWxkXSBvZiBjbGllbnQuZ3VpbGRzLmNhY2hlKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHByb2JsZW1hdGljT3duZXJzLmluY2x1ZGVzKGd1aWxkLm93bmVySWQpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgTGVhdmluZyBndWlsZCBcIiR7Z3VpbGQubmFtZX1cIiBhcyBpdCBpcyBvd25lZCBieSBhIHByb2JsZW1hdGljIHVzZXIuYCk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBndWlsZC5sZWF2ZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgQ3VycmVudGx5IGluIGd1aWxkOiAke2d1aWxkLm5hbWV9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gbGVhdmUgdGhlIGd1aWxkIFwiJHtndWlsZC5uYW1lfVwiOmAsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJBY3Rpdml0eVR5cGUiLCJDb2xsZWN0aW9uIiwiRmxhc2hjb3JlIiwiY29tbWFuZHNQYXRoIiwibG9hZENvbW1hbmRzIiwiYm90X21hc3RlciIsInByb2JsZW1hdGljT3duZXJzIiwibGVnYWN5X2NvbW1hbmRzIiwiYWxpYXNlcyIsImNsaWVudCIsInVzZXIiLCJzZXRQcmVzZW5jZSIsImFjdGl2aXRpZXMiLCJuYW1lIiwidHlwZSIsIldhdGNoaW5nIiwic3RhdHVzIiwic2V0IiwibmFtZXNwYWNlIiwiY29uc29sZSIsImxvZyIsInRhZyIsImd1aWxkSWQiLCJndWlsZCIsImd1aWxkcyIsImNhY2hlIiwiaW5jbHVkZXMiLCJvd25lcklkIiwibGVhdmUiLCJlcnJvciJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxZQUFZLEVBQVVDLFVBQVUsUUFBUSxhQUFhO0FBQzlELFNBQVNDLFNBQVMsUUFBUSxVQUFVO0FBQ3BDLFNBQVNDLFlBQVksUUFBUSxxQkFBa0I7QUFDL0MsT0FBT0Msa0JBQWtCLHNDQUFtQztBQUU1RCxNQUFNQyxhQUFhO0FBQ25CLE1BQU1DLG9CQUFvQjtJQUFDO0lBQXNCO0NBQXNCLEVBQUUsMENBQTBDO0FBQ25ILE1BQU1DLGtCQUFrQixJQUFJTjtBQUM1QixNQUFNTyxVQUFVLElBQUlQO0FBQ3BCLGVBQWUsQ0FBQSxPQUFPUTtJQUNsQixtQkFBbUI7SUFDbkJBLE9BQU9DLElBQUksRUFBRUMsWUFBWTtRQUNyQkMsWUFBWTtZQUNSO2dCQUNJQyxNQUFNO2dCQUNOQyxNQUFNZCxhQUFhZSxRQUFRO1lBQy9CO1NBQ0g7UUFDREMsUUFBUTtJQUNaO0lBWUFkLFVBQVVlLEdBQUcsQ0FBQyxjQUFjLEtBQUs7UUFDN0JDLFdBQVdiO0lBQ2Y7SUFDQUQsYUFBYUssUUFBUU47SUFDckJNLE9BQU9GLGVBQWUsR0FBR0E7SUFDekJFLE9BQU9ELE9BQU8sR0FBR0E7SUFFakIsaUJBQWlCO0lBQ2pCVyxRQUFRQyxHQUFHLENBQUMsQ0FBQyxhQUFhLEVBQUVYLE9BQU9DLElBQUksRUFBRVcsSUFBSSxDQUFDLENBQUM7SUFFL0Msb0RBQW9EO0lBQ3BELEtBQUssTUFBTSxDQUFDQyxTQUFTQyxNQUFNLElBQUlkLE9BQU9lLE1BQU0sQ0FBQ0MsS0FBSyxDQUFFO1FBQ2hELElBQUk7WUFDQSxJQUFJbkIsa0JBQWtCb0IsUUFBUSxDQUFDSCxNQUFNSSxPQUFPLEdBQUc7Z0JBQzNDUixRQUFRQyxHQUFHLENBQUMsQ0FBQyxlQUFlLEVBQUVHLE1BQU1WLElBQUksQ0FBQyx1Q0FBdUMsQ0FBQztnQkFDakYsTUFBTVUsTUFBTUssS0FBSztZQUNyQixPQUFPO1lBQ0osb0RBQW9EO1lBQ3ZEO1FBQ0osRUFBRSxPQUFPQyxPQUFPO1lBQ1pWLFFBQVFVLEtBQUssQ0FBQyxDQUFDLDJCQUEyQixFQUFFTixNQUFNVixJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUVnQjtRQUNoRTtJQUNKO0FBQ0osQ0FBQSxFQUFFIn0=