const { joinVoiceChannel } = require('@discordjs/voice');
const { createAudioPlayer, createAudioResource, AudioPlayerStatus } = require('@discordjs/voice');

exports.playBarka = async (client) => {
    const channelId = '';
    const channel = await client.channels.fetch(channelId);
    const connection = joinVoiceChannel({
        channelId: channel.id,
        guildId: channel.guild.id,
        adapterCreator: channel.guild.voiceAdapterCreator,
    });

    const player = createAudioPlayer();
    const resource = createAudioResource('../assets/barkaShort.mp3', { inlineVolume: true });
    resource.volume.setVolume(0.2);
    player.play(resource);
    connection.subscribe(player);

    player.on(AudioPlayerStatus.Idle, () => {
        connection.destroy();
    })
}