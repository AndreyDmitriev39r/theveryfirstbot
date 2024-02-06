const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply({content: 'Pong!', ephemeral: true});
		// waiting before initial reply for more than 3 seconds will cause trouble, before editReply - will not
		// for time-consuming commands use
		// deferReply() - it is alternate initial response
		await wait(5500); 
		// if initial reply is ephemeral, so does edit reply
		await interaction.editReply('Again!');
	},
};