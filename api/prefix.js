module.exports = function (client, discord, prefix, config) {
    client.on('ready', () => { if(config.Consoleninfo === false) return; console.log("[prefix - Info] > prefix Online") })
    client.on('message', message => {
        const args = message.content
            .slice(prefix.length)
            .trim()
            .split(/ +/g);
        const command = args.shift().toLowerCase();

        if (command === "prefix") {
            if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('NANANA!')
            client.mguild.set(`guild_${message.guild.id}`, args[0], `prefix`)
            let e = new discord.MessageEmbed()
                .setTitle('Discord Message API')
                .setDescription('Prefix geändert zu ' + client.mguild.get(`guild_${message.guild.id}`, `prefix`))
                .setColor(client.mguild.get(`guild_${message.guild.id}`, `embedcolor`))
                .setTimestamp()
                .setFooter('Programmiert von LouiLetsPlayPro')
            return message.channel.send(e)
        }
    })
}
