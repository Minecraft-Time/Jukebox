const Discord = require('discord.js');

module.exports = (client, message, query, tracks, content, collector) => {
    const emb = new Discord.MessageEmbed()
	.setColor('#E91E63')
	.setDescription(`${client.emotes.error} Devi specificare un numero da **1** a **${tracks.length}**!`)
    message.channel.send(`${client.emotes.error} Devi specificare un numero da **1** a **${tracks.length}**!`);
};