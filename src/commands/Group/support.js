module.exports = {
	name: "support",
	alias: ["support-group"],
	desc: "Send you official support group link.",
  usage: `${prefa}support`,
	category: "Group",
    react:"✅",
    start:async(client,m,{command,prefix,pushName})=>{
        let yup = ['https://telegra.ph/file/f0c24da2961de0bede5e1.mp4',
                   'https://telegra.ph/file/f7d87038dc8c486c1a094.mp4',
                   'https://telegra.ph/file/672375c8205e1f126f200.mp4'
                  ]
let rae = yup[Math.floor(Math.random() * yup.length)]

  
const Arilogogg = "https://images.app.goo.gl/8kz77zKAZYeV19dL9"
        
                         
const lemo = `
*━『 Support Group Links 』━*



* [ ${process.env.NAME} 's Support ] :*
https://chat.whatsapp.com/I1H76MHGmHILv2LQxiMWn1

* [ ${process.env.NAME} 's Learn Group ] :*

https://chat.whatsapp.com/G4vO6btGU8TGmCFq3RVO2i
`
  await client.sendMessage(m.from,{video:{url:rae}, gifPlayback:true, caption: `*${pushName}* , ⭐️I have successfully dropped a party bomb in ur Dm🎋`},{quoted:m})
  await  client.sendMessage(m.sender,{image:{url:Arilogogg},caption:lemo},{quoted:m})  
    }
}
