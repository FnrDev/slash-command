module.exports = {
    name: "lock",
    description: "🔒 Disables @everyone from sending messages in specific channel",
    options: [
        {
            name: "channel",
            description: "Channel to lock.",
            type: 7,
        }
    ],
    timeout: 3000,
    run: async(interaction) => {
        if (!interaction.member.permissions.has('MANAGE_CHANNELS')) {
            return interaction.reply({ content: "You dont have permission to do this command!", ephemeral: true })
        }
        const channel = interaction.options.getChannel('channel') || interaction.channel;
        await channel.permissionOverwrites.edit(interaction.guild.id, { SEND_MESSAGES: false });
        interaction.reply({ content: `**🔒 ${channel} has been locked.**` })
    }
}