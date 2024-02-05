const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('addtag')
		.setDescription('Adds a new tag into database!'),
	async execute(interaction) {
		await interaction.reply('This! is add tag command skeleton!');
	},
};