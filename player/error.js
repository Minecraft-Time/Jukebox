module.exports = (client, error, message) => {
    const emb = new Discord.MessageEmbed()
    emb.setColor('#fa9c1e')
    switch (error) {
        case 'NotPlaying':
            emb.setDescription(`${client.emotes.error} **Non** sto riproducendo **niente**!`)
            message.channel.send(`${client.emotes.error} **Non** sto riproducendo **niente**!`);
            break;
        case 'NotConnected':
            emb.setDescription(`${client.emotes.error} **Non** sei connesso a nessun **canale vocale**!`)
            message.channel.send(`${client.emotes.error} **Non** sei connesso a nessun **canale vocale**!`);
            break;
        case 'UnableToJoin':
            emb.setDescription(`${client.emotes.error} **Non** ho abbastanza **permessi** per entrare nel tuo **canale**!`)
            message.channel.send(`${client.emotes.error} **Non** ho abbastanza **permessi** per entrare nel tuo **canale**!`);
            break;
        default:
            emb.setDescription(`${client.emotes.error} Qualcosa è andato **storto**, Errore: \`\`\`js\n${error}\n\`\`\`!`)
            message.channel.send(`${client.emotes.error} Qualcosa è andato **storto**, Errore: \`\`\`js\n${error}\n\`\`\`!`);
    };
};
