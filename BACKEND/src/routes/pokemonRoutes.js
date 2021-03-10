const { Router } = require('express');
const pokemonController = require('../controllers/pokemonController');

function PokemonRouter() {
  const router = Router();

  router
    .route('/')
    .get(pokemonController.getPokemonList);

  return router;
}

module.exports = PokemonRouter();
