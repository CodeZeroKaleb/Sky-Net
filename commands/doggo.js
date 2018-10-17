const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

    let {body} = await superagent
    .get(`{"url":"https://random.dog/woof.json"}`);

    let dogembed = new Discord.RichEmbed()
    .setColor("#FF0000")
    .setTitle("Doggo")
    .setImage(body.url);

    message.channel.send(dogembed);

    }

    module.exports.help = {
        name: "doggo"
      }
