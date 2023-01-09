require('dotenv').config();
const { REST, SlashCommandBuilder, Routes } = require('discord.js');

const token = process.env.DISCORD_TOKEN;
const clientId = process.env.DISCORD_CLIENT_ID;
const guildId = process.env.DISCORD_GUILD_ID;


const commands = [
	new SlashCommandBuilder().setName('cytacik').setDescription('Losowy cytacik'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(token);

try {
    const response = rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
    console.log(response)
} catch (error) {
    console.log(error)
}