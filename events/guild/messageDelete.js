const config = require('../../config.json');
const Discord = require('discord.js');

module.exports = async(client, message) => {
    const logChannel = client.channels.cache.get(config.log_channel_id);
    if (!logChannel) return;
    const allLogs = await message.guild.fetchAuditLogs({ type: "MESSAGE_DELETE" });
    const fetchModerator = allLogs.entries.first();
    const embed = new Discord.MessageEmbed()
    .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
    .setDescription(`🗑 **Message sent by ${message.author} deleted in ${message.channel}.**\n${message.content}`)
    .addField('Responsible Moderator:', `<@${fetchModerator.executor.id}>`)
    .setTimestamp()
    .setFooter({ text: fetchModerator.executor.tag, iconURL: fetchModerator.executor.displayAvatarURL({ dynamic: true }) })
    return logChannel.send({ embeds: [embed] })
}