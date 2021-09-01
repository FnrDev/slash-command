const config = require('../../config.json');
const Discord = require('discord.js');

module.exports = async(client, emoji) => {
    const logChannel = client.channels.cache.get(config.log_channel_id);
    if (!logChannel) return;
    const allLogs = await emoji.guild.fetchAuditLogs({ type: "MEMBER_BAN_ADD" });
    const fetchModerator = allLogs.entries.first();
    const fetchEmojiAuthor = await emoji.fetchAuthor();
    const embed = new Discord.MessageEmbed()
    .setAuthor(emoji.guild.name, emoji.guild.iconURL({ dynamic: true }))
    .setTitle('🥳 Emoji Created')
    .setDescription(`**${fetchEmojiAuthor} has created <:${emoji.name}:${emoji.id}> emoji!**`)
    .setThumbnail(emoji.url)
    .setFooter(fetchEmojiAuthor.tag, fetchEmojiAuthor.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    .addFields(
        {
            name: "Responsible Moderator:",
            value: `<@${fetchEmojiAuthor.id}>`
        },
    )
    return logChannel.send({ embeds: [embed] })
}