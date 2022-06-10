const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  const urlAddress = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(urlAddress, (err, resp, body) => {
    if (err) {
      return callback(err, null);
    }

    const desobj = JSON.parse(body);

    if (!desobj.length) {
      return callback("Invalid Breed", null);
    }

    const desc = desobj[0].description;

    callback(err, desc);
  });
};

module.exports = {
  fetchBreedDescription,
};
