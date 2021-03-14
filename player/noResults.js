const Discord = require('discord.js');

module.exports = (client, message, query) => {
    const emb = new Discord.MessageEmbed()
	.setColor('#E91E63')
	.setDescription(`${client.emotes.error} Non ho trovato niente su YouTube cercando **${query}**!`)
    message.channel.send(`${client.emotes.error} Non ho trovato niente su YouTube cercando **${query}**!`);
};