const Pokemon = require('../models/pokemonModel');
const Abilities = require('../models/abilitiesModel');
const Moves = require('../models/movesModel');
const Learnsets = require('../models/learnsetsModel');

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

function getAbilitiesList(req, res) {
  const query = {};
  Abilities.find(query, (err, abilitiesList) => {
    if (err) {
      res.status(404);
      res.send('There was an error and Abilities List could not be found');
    } else {
      res.json(abilitiesList);
    }
  });
}

function getMoveList(req, res) {
  const query = {};
  Moves.find(query, (err, moveList) => {
    if (err) {
      res.status(404);
      res.send('There was an error and Moves List could not be found');
    } else {
      res.json(moveList);
    }
  });
}

function getLearnsetList(req, res) {
  const query = {};
  Learnsets.find(query, (err, learnsetList) => {
    if (err) {
      res.status(404);
      res.send('There was an error and Learnsets List could not be found');
    } else {
      res.json(learnsetList);
    }
  });
}

module.exports = {
  getPokemonList,
  getAbilitiesList,
  getMoveList,
  getLearnsetList,
};
