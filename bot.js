require("dotenv").config();
const Discord = require("discord.js");

const client = new Discord.Client();

const commands = require("./scripts/commandsReader")(process.env.PREFIX);

client.on("ready", () => {
  console.log(`Logando com o bot ${client.user.tag}`);
});

client.on("message", async (msg) => {
  if (!msg.author.bot && msg.guild) {
    console.log(`${msg.author.username}: ${msg.content}`);
    // msg.reply('Disse a putinha!');

    const args = msg.content.split(" ");
    if (commands[args[0]]) {
      await commands[args[0]](client, msg);
    }
  }
});

client.on("guildMemberAdd", (member) => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find((ch) => ch.name === "member-log");
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});

client.login(process.env.TOKEN);
