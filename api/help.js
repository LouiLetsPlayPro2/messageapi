module.exports = function (client, discord, config) {
    client.on('ready', () => {if(config.Consoleninfo === true) console.log("[help - Info] > help Online")})
    client.on('message', message =>{        
        const prefix = client.mguild.get(`guild_${message.guild.id}`, `prefix`)
        const args = message.content
        .slice(prefix.length)
        .trim()
        .split(/ +/g);
      const command = args.shift().toLowerCase();

        if(command === "help"){
            let e = new discord.MessageEmbed()
            .setTitle('Discord Message API')
            .setDescription('Help Embed')
            .addField(prefix + "prefix", "Änder den Prefix")
            .addField(prefix + 'aktivieren {pingeveryone, pinghere, badword}', 'Aktiviere die Funktion!')
            .addField(prefix + 'deaktivieren {pingeveryone, pinghere, badword}', 'Aktiviere die Funktion!')
            .setColor(client.mguild.get(`guild_${message.guild.id}`, `embedcolor`))
            .setTimestamp()
            .setFooter('Programmiert von LouiLetsPlayPro')
            return message.channel.send(e)
        }
    })
}