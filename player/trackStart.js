const Discord = require('discord.js');

module.exports = (client, message, track) => {
    const emb = new Discord.MessageEmbed()
	.setColor('#E91E63')
	.setDescription(`${client.emotes.music} Riproduco **${track.title}**`)
    message.channel.send(`${client.emotes.music} Riproduco **${track.title}**`);
};