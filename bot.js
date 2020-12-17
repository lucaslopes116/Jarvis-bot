require('dotenv').config();
const Discord = require('discord.js');

const client = new Discord.Client();

const commands = require('./scripts/commandsReader')(process.env.PREFIX);

client.on('ready', () => {
  console.log(`Logando com o bot ${client.user.tag}`);
});

client.on('message', (msg) => {
  if (!msg.author.bot && msg.guild) {
    console.log(`${msg.author.username}: ${msg.content}`);
    // msg.reply('Disse a putinha!');

    const args = msg.content.split(' ');
    if (commands[args[0]]) {
      commands[args[0]](client, msg);
    }
  }
});

client.login(process.env.TOKEN);
