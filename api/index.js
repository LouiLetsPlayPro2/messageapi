module.exports = function (client, Discord, Enmap, config) {
    //ready
    client.on('ready', () => {
        if(config.Consoleninfo === false) return;
        console.log('[index - Info] > Bot eingelogt als ' + client.user.tag)
    })

    //imports
    const datenbank = require('./db')
    const aktivate = require('./aktivate')
    const help = require('./help')
    const messageapi = require('./messageapi')
    const prefix = require('./prefix')
    const status = require('./status')
    //const guildcount = client.guilds.cache.size

    //db
    datenbank.filter(client, Enmap, config)
    datenbank.message(client, Enmap, config)
    datenbank.mguild(client, Enmap, config)

    //prefix loader
    client.on('message', message => { const prefix = client.mguild.get(`guild_${message.guild.id}`, `prefix`) })

    //commands
    help(client, Discord, prefix, config)
    prefix(client, Discord, prefix, config)
    aktivate.enable.everyone(client, Discord, prefix, config)
    aktivate.enable.here(client, Discord, prefix, config)
    aktivate.enable.badword(client, Discord, prefix, config)
    aktivate.disasable.everyone(client, Discord, prefix, config)
    aktivate.disasable.here(client, Discord, prefix, config)
    aktivate.disasable.badword(client, Discord, prefix, config)

    //events
    client.on('ready', () =>{
        const guildcount = client.guilds.cache.size
        status(client, ['Discord Message API', 'm!help', `auf ${guildcount} Servern`], config)
    })
    

    //messageapi
    messageapi.everyone(client, Discord, prefix, config)
    messageapi.here(client, Discord, prefix, config)
    client.on('message', message =>{
        if(message.content === "db"){
        }
    })
}