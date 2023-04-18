module.exports = async (client, msg) => {
  const { ping } = client;
  msg.reply(`Ping esta em ${ping}ms`);
};
