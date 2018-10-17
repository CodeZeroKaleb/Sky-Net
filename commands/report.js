const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        let rUser = message.mentions.members.first() //changed this to code in the pins
        if(!ruser) return message.channel.send("Couldn't find user.");
        let rreason = args.slice(1).join(" ");   //changed this to code in the pins
        
        let reportEmbed = new Discord.RichEmbed()
        .setDescription("Reports")
        .setColor("#15f153")
        .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
        .addField("Reported By", `${message.author} with ID ${message.author.id}`)
        .addField("Channel", message.channel)
        .addField("Time", message.createdAt)
        .addField("Reason", reason);
        let reportschannel = message.guild.channels.find(c => c.name == "reports")  //changed this to code in the pins
        if(!reportschannel) return message.channel.send("Couldn't find reports channel")
        //u put if(+reportschannel)  // Thats Wrong!! its ! to determine if something doesn't exist
        message.delete().catch(O_o=>{});
        reportschannel.send(reportEmbed);
        
        return;
          }
    
module.exports.help = {
    name: "report"
}
