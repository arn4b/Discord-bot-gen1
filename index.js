const Discord= require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

const prefix = "!";

client.on("message", message =>
{
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();
  const msg = message.content;

  if (command === "ping")
  {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message had a latency of ${timeTaken}ms`);
  }

  else if(command === "wish")
  {
    if (!message.mentions.users.size)
    {
	    return message.reply('Pick a User to wish!');
    }

    const taggedUser = message.mentions.users.first();

    message.channel.send(`Hello ${taggedUser.username}! Welcome to this server!`);
  }

  else if(command === "roast")
  {
    if (!message.mentions.users.size)
    {
	    return message.reply('Pick a noob amongst us to roast');
    }

    const taggedUser = message.mentions.users.first();

    message.channel.send(`They say people get what they deserve. In your case ${taggedUser.username} , it's a participation certificate `);
  }

  else if(command === "nice")
  {
    message.channel.send(`💋`);
  }

})
client.login(config.BOT_TOKEN)
