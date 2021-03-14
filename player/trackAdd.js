const Discord = require('discord.js');

module.exports = (client, message, queue, track) => {
    const emb = new Discord.MessageEmbed()
	.setColor('#E91E63')
	.setDescription(`${client.emotes.music} Traccia **${track.title}**  aggiunta alla coda!`)
    message.channel.send(`${client.emotes.music} Traccia **${track.title}**  aggiunta alla coda!`);
};