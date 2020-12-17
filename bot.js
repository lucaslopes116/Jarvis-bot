const Discord = require('discord.js');
const { token } = require('./config.json');

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logando com o bot ${client.user.tag}`);
});

client.on('message', (msg) => {
  console.log(`${msg.author.username}: ${msg.content}`);

  if (msg.content === 'ola' && msg.author.username !== client.user.username) {
    msg.reply('Fala viado!');
  }
});

client.login(token);
