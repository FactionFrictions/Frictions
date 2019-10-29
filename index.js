
//------------------- Configuration du Bot -------------------

const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "!";
client.on("message", message =>{
    if(!message.guild) return
});


//------------------- Statut su Bot -------------------

client.on("ready", function(){
    client.user.setActivity("être le Bot de la faction")
});


//------------------- Connecter le Bot au serveur Discord -------------------

client.login("NjM4NDI4ODY2MTc1ODI3OTg4.XbcvOg.RZx6WCDsmn4AHdDVaCOYB28fIdY");


//------------------- Messages de bienvenue et d'au revoir -------------------

client.on("guildMemberAdd", user => {
    let nouveauxEmbed = new Discord.RichEmbed()
        .setColor("#0fba23")
        .setAuthor("Arrivée | " + user.user.username, user.user.displayAvatarURL)
        .setDescription("Bienvenue " + user + " sur le serveur **Test Discord !**")
        .setThumbnail("https://cdn.discordapp.com/attachments/638464072064565269/638653673345646592/Logo.png")
        .addBlankField()
        .addField("Frictions", "Le serveur est le serveur officiel de la faction *Frictions* du serveur **Paladium**.")
        .addBlankField()
        .setFooter("Test Discord | #nouveaux")
    user.guild.channels.get("638464072064565269").send(nouveauxEmbed)
});

client.on("guildMemberRemove", user => {
    let partisEmbed = new Discord.RichEmbed()
    .setColor("#dd0000")
    .setAuthor("Départ | " + user.user.username, user.user.displayAvatarURL)
    .setDescription(user + " a quitté le serveur. __Raison :__ ")
    .setThumbnail("https://cdn.discordapp.com/attachments/638464072064565269/638653673345646592/Logo.png")
    .addBlankField()
    .setFooter("Test Discord | #nouveaux")
user.guild.channels.get("638464072064565269").send(partisEmbed)
});


//------------------- ... -------------------
