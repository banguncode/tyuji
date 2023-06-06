const guess = require("axios")
module.exports = {
  name:"guess",
  alias:["g"],
  useage:`${prefa}guess character name`,
  react:"🧧",
  desc:"anime character game"
// Assuming you already have the required dependencies and setup for your WhatsApp bot

const characters = [

  { name: "Naruto Uzumaki", image: "https://wallpapercave.com/w/wp11902405" },
  { name: "Roronoa Zoro", image: "https://wallpapercave.com/w/wp8650098" },
  {name : "Ash Ketchum", image: "https://wallpapercave.com/w/wp2351206"},

  // Add more anime characters with their names and image URLs

];

const userGallery = [];

// Command for playing the game

bot.command("animegame", (message) => {

  const randomCharacter = getRandomCharacter();

  const imageUrl = randomCharacter.image;

  // Send the image to the user

  message.sendImage(imageUrl).then((sentMessage) => {

    // Wait for the user's response

    message

      .waitForReply()

      .then((response) => {

        const guessedName = response.content;

        if (guessedName.toLowerCase() === randomCharacter.name.toLowerCase()) {

          // Add the character to the user's gallery

          userGallery.push(randomCharacter);

          message.reply(`Congratulations! You guessed it right. ${randomCharacter.name} has been added to your gallery.`);

        } else {

          message.reply(`Sorry, the correct answer was ${randomCharacter.name}. You can try again later.`);

        }

      })

      .catch((error) => {

        console.error("Error occurred during game:", error);

        message.reply("Sorry, an error occurred during the game. Please try again later.");

      });

  });

});

// Function to get a random character from the array

function getRandomCharacter() {

  const randomIndex = Math.floor(Math.random() * characters.length);

  return characters[randomIndex];

}

