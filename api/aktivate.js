module.exports = {
    'enable': {
        'everyone': function (client, Discord, config) {
            client.on('ready', () => {if(config.Consoleninfo === true) console.log("[aktivate - Info] > aktivieren@everyone Online")})
            client.on('message', async message => {
                const prefix = client.mguild.get(`guild_${message.guild.id}`, `prefix`)
                const args = message.content
                    .slice(prefix.length)
                    .trim()
                    .split(/ +/g);
                const command = args.shift().toLowerCase();
                if (command === "aktivieren") {
                    if (args[0] === "pingeveryone") {
                        client.mguild.set(`guild_${message.guild.id}`, true, `everyone`)
                        let embed = new Discord.MessageEmbed()
                            .setTitle('@everyone Ping')
                            .setColor(client.mguild.get(`guild_${message.guild.id}`, `embedcolor`))
                            .setDescription('Everyone Pings werden nun entfernt')
                            .setFooter('Discord Message API')
                            return message.channel.send(embed)
                    }
                }
            })
        },
        'here': function (client, Discord, config) {
            client.on('ready', () => {if(config.Consoleninfo === true)console.log("[aktivate - Info] > aktivieren@here Online")})
            client.on('message', async message => {
                const prefix = client.mguild.get(`guild_${message.guild.id}`, `prefix`)
                const args = message.content
                    .slice(prefix.length)
                    .trim()
                    .split(/ +/g);
                const command = args.shift().toLowerCase();
                if (command === "aktivieren") {
                    if (args[0] === "pinghere") {
                        client.mguild.set(`guild_${message.guild.id}`, true, `here`)
                        let embed = new Discord.MessageEmbed()
                            .setTitle('@here Ping')
                            .setColor(client.mguild.get(`guild_${message.guild.id}`, `embedcolor`))
                            .setDescription('Here Pings werden nun entfernt')
                            .setFooter('Discord Message API')
                        return message.channel.send(embed)
                    }
                }
            })
        },
        'badword': function (client, Discord, config) {
            client.on('ready', () => {if(config.Consoleninfo === true)console.log("[aktivate - Info] > aktivieren@badword Online")})
            client.on('message', async message => {
                const prefix = client.mguild.get(`guild_${message.guild.id}`, `prefix`)
                const args = message.content
                    .slice(prefix.length)
                    .trim()
                    .split(/ +/g);
                const command = args.shift().toLowerCase();
                if (command === "aktivieren") {
                    if (args[0] === "badword") {
                        client.mguild.set(`guild_${message.guild.id}`, true, `badword`)
                        let embed = new Discord.MessageEmbed()
                            .setTitle('Nichterlaubte Wörter')
                            .setColor(client.mguild.get(`guild_${message.guild.id}`, `embedcolor`))
                            .setDescription('Nichterlaubte Wörter werden nun entfernt')
                            .setFooter('Discord Message API')
                            return message.channel.send(embed)
                    }
                }
            })
        }
    },
    'disasable': {
        'everyone': function (client, Discord, config) {
            client.on('ready', () =>{if(config.Consoleninfo === true) console.log("[aktivate - Info] > deaktivieren@everyone Online")})
            client.on('message', async message => {
                const prefix = client.mguild.get(`guild_${message.guild.id}`, `prefix`)
                const args = message.content
                    .slice(prefix.length)
                    .trim()
                    .split(/ +/g);
                const command = args.shift().toLowerCase();
                if (command === "deaktivieren") {
                    if (args[0] === "pingeveryone") {
                        client.mguild.set(`guild_${message.guild.id}`, false, `everyone`)
                        let embed = new Discord.MessageEmbed()
                            .setTitle('@everyone Ping')
                            .setColor(client.mguild.get(`guild_${message.guild.id}`, `embedcolor`))
                            .setDescription('Everyone Pings werden nun nicht mehr entfernt')
                            .setFooter('Discord Message API')
                            return message.channel.send(embed)
                    }
                }
            })
        },
        'here': function (client, Discord, config) {
            client.on('ready', () =>{if(config.Consoleninfo === true) console.log("[aktivate - Info] > deaktivieren@here Online")})
            client.on('message', async message => {
                const prefix = client.mguild.get(`guild_${message.guild.id}`, `prefix`)
                const args = message.content
                    .slice(prefix.length)
                    .trim()
                    .split(/ +/g);
                const command = args.shift().toLowerCase();
                if (command === "deaktivieren") {
                    if (args[0] === "pinghere") {
                        client.mguild.set(`guild_${message.guild.id}`, false, `here`)
                        let embed = new Discord.MessageEmbed()
                            .setTitle('@here Ping')
                            .setColor(client.mguild.get(`guild_${message.guild.id}`, `embedcolor`))
                            .setDescription('Here Pings werden nun nicht mehr entfernt')
                            .setFooter('Discord Message API')
                            return message.channel.send(embed)
                    }
                }
            })
        },
        'badword': function (client, Discord, config) {
            client.on('ready', () =>{if(config.Consoleninfo === true) console.log("[aktivate - Info] > deaktivieren@badword Online")})
            client.on('message', async message => {
                const prefix = client.mguild.get(`guild_${message.guild.id}`, `prefix`)
                const args = message.content
                    .slice(prefix.length)
                    .trim()
                    .split(/ +/g);
                const command = args.shift().toLowerCase();
                if (command === "deaktivieren") {
                    if (args[0] === "badword") {
                        client.mguild.set(`guild_${message.guild.id}`, false, `badword`)
                        let embed = new Discord.MessageEmbed()
                            .setTitle('Nichterlaubte Wörter')
                            .setColor(client.mguild.get(`guild_${message.guild.id}`, `embedcolor`))
                            .setDescription('Nichterlaubte Wörter werden nicht mehr nun nicht mehr entfernt')
                            .setFooter('Discord Message API')
                            return message.channel.send(embed)
                    }
                }
            })
        }
    }
}