const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
    name: "badges",
    description: "Get list of members with badges",
    options: [
        {
            name: "badge",
            description: "Badge you want to get list of members for",
            type: 3,
            required: true,
            choices: [
                {
                    name: "Discord Staff",
                    value: "staff"
                },
                {
                    name: "Discord Partnerd",
                    value: "partnerd"
                },
                {
                    name: "Hypesquad Events",
                    value: "HYPESQUAD_EVENTS"
                },
                {
                    name: "Bug Hunter Level 1",
                    value: "BUGHUNTER_LEVEL_1"
                },
                {
                    name: "House Bravery",
                    value: "HOUSE_BRAVERY"
                },
                {
                    name: "Early Supporter",
                    value: "EARLY_SUPPORTER"
                },
                {
                    name: "Bug Hunter Level 2",
                    value: "BUGHUNTER_LEVEL_2"
                },
                {
                    name: "Verified Bot",
                    value: "VERIFIED_BOT"
                },
                {
                    name: "Early Verified Bot Developer",
                    value: "EARLY_VERIFIED_BOT_DEVELOPER"
                },
                {
                    name: "Discord Certified Moderator",
                    value: "DISCORD_CERTIFIED_MODERATOR"
                }
            ]
        }
    ],
    run: async(interaction, client) => {
        const badges = interaction.options.getString('badge');
        if (badges === 'staff') {
            const staffBadges = interaction.guild.members.cache.filter(r => r.user.flags?.has('DISCORD_EMPLOYEE'))
            if (staffBadges.size === 0) {
                return interaction.reply({ content: ":x: No one in this server has \`Discord Staff\`" })
            }
            if (staffBadges) {
                const filterBadges = staffBadges.map(r => r.user).join("\n");
                interaction.reply({ content: `There are **${staffBadges.size}** members with this badge\n\n${filterBadges}` })
            }
        }
        if (badges === 'partnerd') {
            const partnerdBadge = interaction.guild.members.cache.filter(r => r.user.flags?.has('PARTNERED_SERVER_OWNER'))
            if (partnerdBadge.size === 0) {
                return interaction.reply({ content: ":x: No one in this server has \`Partnerd Badge\`" })
            }
            if (partnerdBadge) {
                const filterBadges = partnerdBadge.map(r => r.user).join("\n");
                interaction.reply({ content: `There are **${partnerdBadge.size}** members with this badge\n\n${filterBadges}` })
            }
        }
        if (badges === 'HYPESQUAD_EVENTS') {
            const hypeSquadBadge = interaction.guild.members.cache.filter(r => r.user.flags?.has('HYPESQUAD_EVENTS'))
            if (hypeSquadBadge.size === 0) {
                return interaction.reply({ content: ":x: No one in this server has \`HypeSquad Events\`" })
            }
            if (hypeSquadBadge) {
                const filterBadges = hypeSquadBadge.map(r => r.user).join("\n");
                interaction.reply({ content: `There are **${hypeSquadBadge.size}** members with this badge\n\n${filterBadges}` })
            }
        }
        if (badges === 'BUGHUNTER_LEVEL_1') {
            const bughunter1 = interaction.guild.members.cache.filter(r => r.user.flags?.has('BUGHUNTER_LEVEL_1'))
            if (bughunter1.size === 0) {
                return interaction.reply({ content: ":x: No one in this server has \`Bug Hunter Level 1\`" })
            }
            if (bughunter1) {
                const filterBadges = bughunter1.map(r => r.user).join("\n");
                interaction.reply({ content: `There are **${bughunter1.size}** members with this badge\n\n${filterBadges}` })
            }
        }
        if (badges === 'HOUSE_BRAVERY') {
            const houseBravery = interaction.guild.members.cache.filter(r => r.user.flags?.has('HOUSE_BRAVERY'))
            if (houseBravery.size === 0) {
                return interaction.reply({ content: ":x: No one in this server has \`House Bravery\`" })
            }
            if (houseBravery) {
                const filterBadges = houseBravery.map(r => r.user).join("\n");
                interaction.reply({ content: `There are **${hypeSquadBadge.size}** members with this badge\n\n${filterBadges}` })
            }
        }
        if (badges === 'EARLY_SUPPORTER') {
            const earlyBadge = interaction.guild.members.cache.filter(r => r.user.flags?.has('EARLY_SUPPORTER'))
            if (earlyBadge.size === 0) {
                return interaction.reply({ content: ":x: No one in this server has \`Early Supporter\`" })
            }
            if (earlyBadge) {
                const filterBadges = earlyBadge.map(r => r.user).join("\n");
                interaction.reply({ content: `There are **${earlyBadge.size}** members with this badge\n\n${filterBadges}` })
            }
        }
        if (badges === 'BUGHUNTER_LEVEL_2') {
            const bughunter2 = interaction.guild.members.cache.filter(r => r.user.flags?.has('BUGHUNTER_LEVEL_2'))
            if (bughunter2.size === 0) {
                return interaction.reply({ content: ":x: No one in this server has \`Bug Hunter Level 2\`" })
            }
            if (bughunter2) {
                const filterBadges = interaction.guild.members.cache.filter(r => r.user.flags?.has('BUGHUNTER_LEVEL_2')).map(r => r.user).join("\n");
                interaction.reply({ content: `There are **${bughunter2.size}** members with this badge\n\n${filterBadges}` })
            }
        }
        if (badges === 'VERIFIED_BOT') {
            const verifiedBotBadge = interaction.guild.members.cache.filter(r => r.user.flags?.has('VERIFIED_BOT'));
            if (verifiedBotBadge.size === 0) {
                return interaction.reply({ content: ":x: No one in this server has \`Verified Bot\`" })
            }
            if (verifiedBotBadge) {
                const filterBadges = verifiedBotBadge.map(r => r.user).join("\n");
                interaction.reply({ content: `There are **${verifiedBotBadge.size}** members with this badge\n\n${filterBadges}` })
            }
        }
        if (badges === 'EARLY_VERIFIED_BOT_DEVELOPER') {
            const devsBadges = interaction.guild.members.cache.filter(r => r.user.flags?.has('EARLY_VERIFIED_BOT_DEVELOPER'));
            if (devsBadges.size === 0) {
                return interaction.reply({ content: ":x: No one in this server has \`Early Verified Bot Developer\`" })
            }
            if (devsBadges) {
                const filterBadges = devsBadges.map(r => r.user).join("\n");
                interaction.reply({ content: `There are **${devsBadges.size}** members with this badge\n\n${filterBadges}` })
            }
        }
        if (badges === 'DISCORD_CERTIFIED_MODERATOR') {
            const moderatorBadge = interaction.guild.members.cache.filter(r => r.user.flags?.has('DISCORD_CERTIFIED_MODERATOR'));
            if (moderatorBadge.size === 0) {
                return interaction.reply({ content: ":x: No one in this server has \`Discord Certified Moderator\`" })
            }
            if (moderatorBadge) {
                const filterBadges = moderatorBadge.map(r => r.user).join("\n");
                interaction.reply({ content: `There are **${moderatorBadge.size}** members with this badge\n\n${filterBadges}` })
            }
        }
    }
}