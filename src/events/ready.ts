import { ActivityType, Client, Collection } from 'discord.js';
import { Flashcore } from 'robo.js';
import { commandsPath } from './messageCreate';
import loadCommands from '../services/legacy_commandloader';

const bot_master = '983853053948080138';
const problematicOwners = ['1211747262888419449','1223363297118654469']; // Add more problematic user IDs as needed
const legacy_commands = new Collection();
const aliases = new Collection();
export default async (client: Client) => {
    // Set bot presence
    client.user?.setPresence({
        activities: [
            {
                name: 'manikineko.nl',
                type: ActivityType.Watching,
            },
        ],
        status: 'online',
    });

    // Set power level in Flashcore
    interface Client {
        legacy_commands: Map<any, any>;
    }

    interface Client {
        aliases: Map<any, any>;
        legacy_commands: Map<any, any>; // Add 'legacy_commands' property to the interface
    }

    Flashcore.set('powerlevel', 100, {
        namespace: bot_master,
    });
    loadCommands(client, commandsPath);
    client.legacy_commands = legacy_commands;
    client.aliases = aliases;

    // Log in message
    console.log(`Logged in as ${client.user?.tag}!`);
    
    // Check and leave guilds owned by problematic users
    for (const [guildId, guild] of client.guilds.cache) {
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
};
