const Discord = require('discord.js');

module.exports = (client, message, queue) => {
    const emb = new Discord.MessageEmbed()
	.setColor('#E91E63')
	.setDescription(`${client.emotes.error} **Non** ci sono più **canzoni** nella **coda**!`)
    message.channel.send(`${client.emotes.error} **Non** ci sono più **canzoni** nella **coda**!`);
};