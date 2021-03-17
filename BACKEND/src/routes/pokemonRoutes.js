const { Router } = require('express');
const pokemonController = require('../controllers/pokemonController');

function PokemonRouter() {
  const router = Router();

  router.route('/moves').get(pokemonController.getMoveList);
  router.route('/learnsets').get(pokemonController.getLearnsetList);
  router.route('/abilities').get(pokemonController.getAbilitiesList);
  router.route('/').get(pokemonController.getPokemonList);

  return router;
}

module.exports = PokemonRouter();
