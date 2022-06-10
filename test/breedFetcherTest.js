const { fetchBreedDescription } = require("../breedFetcher");
const { assert } = require('chai');

describe('Fetch Breed Description', () => {

  it('returns a string description for a valid breed', (next) => {

    fetchBreedDescription('Siberian', (err, description) => {

      assert.equal(err, null);

      const expDescription = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors."

      assert.equal(expDescription, description.trim());

        next();
    });

    

  });

  it('returns "Invalid Breed" for an invalid breed', (done) => {

    fetchBreedDescription('InvalidBreed', (err, description) => {

      assert.equal(description, null);

      const expError = "Invalid Breed";

      assert.equal(expError, err.trim());

        done();
    });

  });  

});