const economyJs = require('../../models/economic');
const moment = require('moment-timezone');

module.exports = {
  name: 'beg',
  alias: ['Beg'],
  usage: `${prefa}beg`,
  desc: 'Beg for some coins and receive a random amount between 1-100 coins every hour!',
  category: 'Economy',
  react: '✅',
  start: async (client, m, { yaOwn, pushName, args }) => {
    
     
    const minCoins = 1;
    const maxCoins = 100;
    const earnedCoins = Math.floor(Math.random() * (maxCoins - minCoins + 1)) + minCoins;
    const userId = m.sender;

    const economy = await economyJs.findOne({ userId });
    if (!economy) return m.reply('❌You don\'t have an economy profile.');

    const lastBegTime = economy.lastBegTime;
    const now = moment().tz('Asia/Kolkata');
    const diffInMinutes = now.diff(lastBegTime, 'minutes');

    if (diffInMinutes < 60) {
      const remainingTime = moment.duration(60 - diffInMinutes, 'minutes').humanize();
      return m.reply(`❌You can only beg once per hour. Please wait ${remainingTime} before begging again.`);
    }

    economy.wallet += earnedCoins;
    economy.lastBegTime = now;
    await economy.save();

    m.reply(`You begged🙏 and received ${earnedCoins} coins!`);
  }
}
