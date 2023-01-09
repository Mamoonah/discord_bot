require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const { CronJob } = require('cron');
const { playBarka } = require('./commands/playBarka')

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates] });

client.once('ready', async (interaction) => {
    //TODO bot joins to channel with most users
	console.log('Ready!');
    const cronJob = new CronJob("37 21 * * *", () => {
        playBarka(client);
    }, null, 'Europe/Warsaw')
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

    if (commandName === 'cytacik') {
      await interaction.reply('hej');
    }
});

client.login(process.env.DISCORD_TOKEN);