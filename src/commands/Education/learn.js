module.exports = {
  name: "learn",

    alias: ["lrn", "jt"],

    usage: `${prefa}jt`,

    react: "💻",

    desc: "Displays Ways too learn coding",

    category: "Education",

    start: async (client,m,{text,ban,pushName,mentionByTag,iscreator,args,body,quoted,mime,prefix}) => {

        const n = [

            'https://telegra.ph/Yuji-06-03-2'

        ]

        

        let rin = n[Math.floor(Math.random() * n.length)]

        const txt =  `        *━━━❰ Jujutsu Tech ❱━━━*

⭐️Konnichiwa ${pushName} if your interested in joining  Jujutsu Tech you can follow the tips below:

〽️1.Dm Jujutsu Tech founder with your name,age,email and contact number, You will spot the number below

〽️2.Join Jujutsu Tech whatsapp group.

     *✞︎Jujutsu Tech Courses✞︎*

✔︎*.Web Development* 

✔︎*.App Development*

✔︎*.Whatsapp Bot Dev*

✔︎*.Discord Bot Dev*

✔︎*.Full Stack Web Dev (coming soon)* 

*✞︎Jujutsu Tech Support✞︎

🔗Link= https://chat.whatsapp.com/LXkoyBjdp9iLwVKHeUrRjZ 

*👑Founder:* http://wa.me/+265990169520 

*〽️Co-Founder:* http://wa.me/+27729378630 `
client.sendMessage(m.from, {video: {url: rin}, gifPlayback: true, caption:txt }, {quoted:m}

)

}

}
