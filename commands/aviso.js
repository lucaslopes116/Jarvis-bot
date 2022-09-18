require("dotenv").config();

module.exports = async (client, msg) => {
  const avisoChannel = await msg.guild.channels.find(
    (channel) => channel.id === process.env.AVISOCHANNELID
  );
  let message = msg.content.split(" ");
  message.splice(0, 1);
  message = message.join(" ");

  await avisoChannel.send(`@everyone ${message}`);
  msg.reply(`Avisado no canal ${avisoChannel}`);
};
