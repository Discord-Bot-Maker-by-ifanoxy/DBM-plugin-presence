import {Events} from "discord.js";
import {DBMClient} from "../../lib/structures/DBMClient";
const embed = require('../../embeds/events/ready.json');

export default {
    name: Events.ClientReady,
    execute(client: DBMClient<true>)
    {
        client.user.setPresence({
            status: embed.presence.title,
            activities: [{
                name: embed.presence.description,
                type: embed.presence.color
            }]
        })
    }
}