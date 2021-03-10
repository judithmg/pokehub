const Pokemon = require('../models/pokemonModel');

async function getPokemonList(req, res) {
  const query = {};
  await Pokemon.find(query, (err, pokemonList) => {
    if (err) {
      res.status(404);
      res.send('There was an error and Pokemon List could not be found');
    } else {
      res.json(pokemonList);
    }
  });
}

module.exports = {
  getPokemonList,
};
