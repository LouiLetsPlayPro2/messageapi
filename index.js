//import
const Discord = require('Discord.js')
const Enmap = require('enmap')
const config = require('./config.json')
const API = require('./api/index')

//Variablen
const client = new Discord.Client()

//API
API(client, Discord, Enmap, config)

//login
client.login(config.token)

//weiter Functionen einfügbar