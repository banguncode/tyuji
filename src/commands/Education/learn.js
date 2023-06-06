module.exports = {

    name: "learn",

    alias: ["Learn"],

    usage: `${prefa}learn`,

    react: "✅",

    desc: "Displays WhatsApp group links and contact numbers for learning",

    category: "General",

    start: async (client, m, { text, ban, pushName, mentionByTag, iscreator, args, body, quoted, mime, prefix }) => {

        const n = [

            'https://telegra.ph/file/17b41e81f52736e6cf50f.mp4'

        ]

        

        let rin = n[Math.floor(Math.random() * n.length)]

        const txt =  `        *━━━❰ JUJUTSU TECH ❱━━━*

📚 *OUR PROGRAMS:*

1. WhatsApp Bot Development
2. Web Development
3. App Development
4. App Modding
More Programs..

🔗 *WhatsApp Contact Numbers:*

1. ᴾʳᵒ ᭄YUJI ITADORI乂 - WhatsApp: +265990169520

2. Empty Sama- WhatsApp: +27

🌐 Official Website: [Coming Soon](https://www.jujutsutech.com)`

        client.sendMessage(m.from, { video: { url: rin }, gifPlayback: true, caption: txt }, { quoted: m });

    }

};

