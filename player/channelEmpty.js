const Discord = require('discord.js');

module.exports = (client, message, queue) => {
    const emb = new Discord.MessageEmbed()
	.setColor('#E91E63')
	.setDescription(`${client.emotes.error} Ho **fermato** la musica perché non c'è **nessuno** nel canale vocale!`)
    message.channel.send(`${client.emotes.error} Ho **fermato** la musica perché non c'è **nessuno** nel canale vocale!`);
};