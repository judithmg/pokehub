const Pokemon = require('../models/pokemonModel');

function getPokemonList(req, res) {
  const query = {};
  Pokemon.find(query, (err, pokemonList) => {
    if (err) {
      res.status(404);
      res.send('There was an error and Pokemon List could not be found');
    } else {
      res.json(pokemonList);
    }
  });
}

function createPokemon(req, res) {
  const newProduct = new Pokemon(req.body);
  newProduct.save();
  res.json(newProduct);
}

module.exports = {
  getPokemonList,
  createPokemon,
};
