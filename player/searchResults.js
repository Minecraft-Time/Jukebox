const Discord = require('discord.js');

module.exports = (client, message, query, tracks) => {
    const emb = new Discord.MessageEmbed()
	.setColor('#E91E63')
	.setDescription(`Inviami la **canzone** che vuoi **ascoltare** utilizzando i seguenti **numeri**:\n\n${tracks.map((t, i) => `\`${i + 1}.\` ${t.title}`).join('\n')}`)
    message.channel.send(`Inviami la **canzone** che vuoi **ascoltare** utilizzando i seguenti **numeri**:\n\n${tracks.map((t, i) => `\`${i + 1}.\` ${t.title}`).join('\n')}`);
};