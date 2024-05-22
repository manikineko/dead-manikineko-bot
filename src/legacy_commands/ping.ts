import { Client, Message } from 'discord.js';
import path from 'path';

export const run = async (client: Client, message: Message, args: string[]) => {
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
    aliases: ["pong"],
    guildOnly: true,
    permLevels: 'User'
};

export const help = {
    name: 'ping',
    category: 'Other',
    description: 'Will it respond with a pong?\n\nProbably yes.',
    usage: 'ping'
};
