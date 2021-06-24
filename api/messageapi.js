module.exports = {
    'filter': function (client, Discord, config) {
        client.on('ready', () => { if(config.Consoleninfo === true) console.log("[messageapi - Info] > filter online") })
        client.on('message', async message => {
            const args = message.content
                .toLowerCase()
                .trim()
                .split(/ +/g)

            for (let i = 0; i < args.length; i++) {
                console.log(args[i])
                if (client.filter.get(`m_`, args[i])) {
                    return console.log("ACHTUNG")
                } else { return }
            }
        })
    },
    'filteradd': function (client, Discord, config) {
        client.on('ready', () => { if(config.Consoleninfo === true)console.log("[messageapi - Info] > filteradd online") })
        client.on('message', async message => {
            const prefix = client.mguild.get(`guild_${message.guild.id}`, `prefix`)
            const args = message.content
                .slice(prefix.length)
                .trim()
                .split(/ +/g);
            const command = args.shift().toLowerCase();
            if (command === "addfilter") {
                client.filter.add(`m_`, args[0])
                console.log(client.filter.get(`m_`))
            }
        })
    },
    'everyone': function (client, Discord, config) {
        client.on('ready', () => {if(config.Consoleninfo === true) console.log("[messageapi - Info] > @everyone online") })
        client.on('message', async message => {
            if (message.content.toLowerCase().includes(`@everyone`.toLowerCase())) {
                if (client.mguild.get(`guild_${message.guild.id}`, `everyone`) === true) {
                    message.delete()
                    let embed = new Discord.MessageEmbed()
                        .setTitle('@everyone Ping')
                        .setColor(client.mguild.get(`guild_${message.guild.id}`, `embedcolor`))
                        .setDescription(`${message.author.tag}, du darfst hier nicht @everyone Pingen!`)
                        .setFooter('Discord Message API')
                    message.channel.send(embed)
                }
            }
        })
    },
    'here': function (client, Discord, config) {
        client.on('ready', () => { if(config.Consoleninfo === true) console.log("[messageapi - Info] > @here online") })
        client.on('message', async message => {
            if (message.content.toLowerCase().includes(`@here`.toLowerCase())) {
                if (client.mguild.get(`guild_${message.guild.id}`, `here`) === true) {
                    message.delete()
                    let embed = new Discord.MessageEmbed()
                        .setTitle('@here Ping')
                        .setColor(client.mguild.get(`guild_${message.guild.id}`, `embedcolor`))
                        .setDescription(`${message.author.tag}, du darfst hier nicht @here Pingen!`)
                        .setFooter('Discord Message API')
                    message.channel.send(embed)
                }
            }
        })
    }
}