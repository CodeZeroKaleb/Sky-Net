const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    //+clear 15
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No can do pal!");
    if(!args[0]) return message.channel.send("oof");
    message.channel.bulkDelete(args[0]).then(()=> {
        message.channel.send(`Terminated ${args[0]} messages.`).then(msg => msg.delete(1000));
    });
}

module.exports.help = {
    name: "clear"
    }