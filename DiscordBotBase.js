// Config the client
const Discord = require('discord.js'); // Imports the module into an object called “Discord”
const client = new Discord.Client(); // Initialize the client object

// Will fire when the bot starts up
client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 }); 

 // Will fire everytime a new message is posted to any channel
client.on('message', msg => {
 if (msg.content === 'ping') {
 msg.reply('pong');
 }
 });


client.login('Nzk4NjExMTIxNTI3MzI0Njky.X_3ikA.0PbLyw5QOcDpxuF9Fb3CgVGRYrc');