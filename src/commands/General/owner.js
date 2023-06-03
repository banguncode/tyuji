module.exports = {

    name: 'owner',

    aliases: ['own'],

    category: 'general',

    exp: 0,

    cool: 30,

    react: "✅",

    description: 'Get information bot information',

    async execute(client, arg, M) {

        let number = '265990169520@s.whatsapp.net'

        const owner = number

        let text = `Only @${owner.split('@')[0]} made this bot { ${client.name} }!`

        await client.sendMessage(M.from , {text , mentions: [owner]} , {quoted: M})

    }

}

