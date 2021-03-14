const Discord = require('discord.js');

module.exports = (client, message, playlist) => {
    const emb = new Discord.MessageEmbed()
	.setColor('#E91E63')
	.setDescription(`${client.emotes.music} La playlist **${playlist.title}** è stata aggiunta alla **coda** (\`${playlist.items.length}\` canzoni)`)
    message.channel.send(`${client.emotes.music} La playlist **${playlist.title}** è stata aggiunta alla **coda** (\`${playlist.items.length}\` canzoni)`);
};