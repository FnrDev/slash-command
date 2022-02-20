const { Embed } = require('discord.js');

module.exports = async(client, member, role) => {
    const logChannel = await client.channels.cache.get(process.env.LOG_CHANNEL);
    if (!logChannel) return;
    const embed = new Embed()
    .setAuthor({ name: member.user.tag, iconURL: member.user.displayAvatarURL({ dynamic: true }) })
    .setDescription(`**:writing_hand: ${member} roles has been updated.**`)
    .addField({ name: "Role:", value: `✅ ${role.name}` })
    .setTimestamp()
    .setFooter(member.guild.name, member.guild.iconURL({ dynamic: true }))
    return logChannel.send({ embeds: [embed] })
}