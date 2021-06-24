module.exports = function (client, llist, config) {
  if(config.Consoleninfo === true){
    console.log('[status - Info] > Status Online')
  }
  setInterval(() => {
    let list = [
      'Discord Message API',
      'm!help',
      `auf ${client.guilds.cache.size} Servern`
    ];
    const index = Math.floor(Math.random() * (llist.length - 1) + 1);
    try {
      client.user.setActivity(llist[index], {
        type: 'STREAMING',
        url: "https://twitch.tv/katzeloui"
      });
    } catch (err) { }

  }, 10000);
}