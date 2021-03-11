const { Router } = require('express');
const pokemonController = require('../controllers/pokemonController');

function PokemonRouter() {
  const router = Router();

  router.route('/').get(pokemonController.getPokemonList);
  router.route('/moves').get(pokemonController.getMoveList);
  router.route('/learnsets').get(pokemonController.getLearnsetList);
  router.route('/abilities').get(pokemonController.getAbilitiesList);

  return router;
}

module.exports = PokemonRouter();
