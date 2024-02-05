const { Events } = require("discord.js");
const { Tags } = require("../db.js");

module.exports = {
	name: Events.ClientReady,
	once: true,
	async execute(client) {
		await Tags.sync();
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};