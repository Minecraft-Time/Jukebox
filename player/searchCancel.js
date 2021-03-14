const Discord = require('discord.js');

module.exports = (client, message, query, tracks) => {
    const emb = new Discord.MessageEmbed()
	.setColor('#E91E63')
	.setDescription(`${client.emotes.error} Tempo scaduto, azione **annullata**.`)
    message.channel.send(`${client.emotes.error} Tempo scaduto, azione **annullata**.`);
};