const Discord = require('discord.js');
const { token } = require('./config.json');

const client = new Discord.Client();
const prefix = '!';

const commands = require('./scripts/commandsReader')(prefix);

client.on('ready', () => {
  console.log(`Logando com o bot ${client.user.tag}`);
});

client.on('message', (msg) => {
  if (!msg.author.bot) {
    console.log(`${msg.author.username}: ${msg.content}`);
    msg.reply('Fala viado!');

    const args = msg.content.split(' ');
    console.log('=>', commands[args[0]]);
    if (commands[args[0]]) {
      commands[args[0]](client, msg);
    }
  }
});

client.login(token);
