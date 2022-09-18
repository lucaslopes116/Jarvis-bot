module.exports = async (client, msg) => {
  const ping = client.pings;
  msg.reply(`Ping esta em ${ping}ms`);
};
