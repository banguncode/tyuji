module.exports = {

    name: "addmoney",

    aliases: ["am"],

    category: "dev",

    exp: 5,

    cool: 15,

    react: "✅",

    description: "Adds money to mentioned user's wallet",

    async execute(client, arg, M) {

      if (M.quoted?.participant) M.mentions.push(M.quoted.participant)

      const mentionedUser = M.mentions[0];

      const args = arg.split(" ");

      const amountToAdd = parseInt(args[1]);

  

      if (!mentionedUser || !amountToAdd || amountToAdd <= 0) {

        return M.reply("Invalid usage. Please use the command like this:\n\n`!addmoney [mention] [amount]`");

      }

      

      if (isNaN(amountToAdd)) {

        return M.reply("Invalid amount. Please use a valid number.");

      }

      

      const economy = await client.econ.findOne({ userId: mentionedUser });

  

      const currentBalance =economy.wallet;

      const newBalance = currentBalance + amountToAdd;

  

      economy.wallet = newBalance; // Update the wallet property

      await economy.save();

  

      M.reply(`${(await client.contact.getContact(mentionedUser, client)).username}'s wallet has been updated. New balance: ${newBalance}`);

    }

  };
