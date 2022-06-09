const request = require("request");

const userInput = process.argv.splice(2);
const breedName = userInput[0];
const urlAddress = `https://api.thecatapi.co77m/v1/breeds/search?q=${breedName}`;

request(urlAddress, (err, resp, body) => {
  if (err) {
    throw new Error(
      "There is a problem with our server at the moment, please try again later..."
    );
  }

  const bodyObject = JSON.parse(body);

  if (bodyObject.length === 0) {
    throw new Error("The cat breed does not exist! Please try another one...");
  }

  console.log(bodyObject[0].description);
});
