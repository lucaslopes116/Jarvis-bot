const Discord = require('discord.js');

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

client.login('Nzg5MDk4NDQ1NDE1NjQ1MTk0.X9tHMg.VBmRgOSGP7SHxrR0-4F34Iczn1E');
