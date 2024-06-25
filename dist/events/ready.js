"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const embed = require('../../embeds/events/ready.json');
exports.default = {
    name: discord_js_1.Events.ClientReady,
    execute(client) {
        client.user.setPresence({
            status: embed.presence.title,
            activities: [{
                    name: embed.presence.description,
                    type: embed.presence.color
                }]
        });
    }
};
