const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('echo')
    .setDescription('Replies with the same message')
    .addStringOption(option => option.setName('input')
      .setDescription('replies back!')
    ),
    async execute(interaction) {
      await interaction.reply(interaction.options.getString('input').repeat(3));
    }      
}