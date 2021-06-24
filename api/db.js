module.exports = {
    'message': function (client, Enmap, config) {
        client.on('ready', () =>{if(config.Consoleninfo === false) return; console.log('[db - Info] > message online')})
        client.message = new Enmap({ name: "message" })
    },
    'mguild': function (client, Enmap, config) {
        client.on('ready', () =>{if(config.Consoleninfo === false) return; console.log('[db - Info] > message online')})
        client.mguild = new Enmap({ name: "guild" })
        client.on('message', async message => {
            client.mguild.ensure(`guild_${message.guild.id}`, {
                prefix: `m!`,
                embedcolor: `RED`,
                everyone: false,
                here: false,
                badword: false
            })
        })
    },
    'filter': function (client, Enmap, config) {
        client.on('ready', () =>{if(config.Consoleninfo === false) return; console.log('[db - Info] > message online')})
        client.filter = new Enmap({ name: "filter" })
    }
}