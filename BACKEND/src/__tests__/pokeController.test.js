const {
  getPokemonList,
  getAbilitiesList,
  getMoveList,
  getLearnsetList,
} = require('../controllers/pokemonController');

const Abilities = require('../models/abilitiesModel');
const Moves = require('../models/movesModel');
const Learnsets = require('../models/learnsetsModel');
const Pokemon = require('../models/pokemonModel');

jest.mock('../models/movesModel');
jest.mock('../models/abilitiesModel');
jest.mock('../models/learnsetsModel');
jest.mock('../models/pokemonModel');

describe('Given a pokemonController', () => {
  let req;
  let res;

  beforeEach(() => {
    req = {
      body: {
        _id: 9,
      },
    };
    res = {
      status: jest.fn(),
      send: jest.fn(),
      json: jest.fn(),

    };
  });
  describe('When getPokemonList is called', () => {
    test('Then res.json should be called if the result is found', () => {
      Pokemon.find.mockImplementationOnce((query, callback) => callback(false));
      getPokemonList(req, res);
      expect(res.json).toHaveBeenCalled();
    });
    test('Then res.status should be called if result is not found', () => {
      Pokemon.find.mockImplementationOnce((query, callback) => callback(true));
      getPokemonList(req, res);
      expect(res.status).toHaveBeenCalled();
    });
  });
  describe('When getAbilitiesList is called', () => {
    test('Then res.status should be called if result is not found', () => {
      Abilities.find.mockImplementationOnce((query, callback) => callback(true));
      getAbilitiesList(req, res);
      expect(res.status).toHaveBeenCalled();
    });
    test('Then res.json should be called if the result is found', () => {
      Abilities.find.mockImplementationOnce((query, callback) => callback(false));
      getAbilitiesList(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('When getMoveList is called', () => {
    test('Then res.status should be called if result is not foundd', () => {
      Moves.find.mockImplementationOnce((query, callback) => callback(true));
      getMoveList(req, res);
      expect(res.status).toHaveBeenCalled();
    });
    test('Then res.json should be called if the result is found', () => {
      Moves.find.mockImplementationOnce((query, callback) => callback(false));
      getMoveList(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('When getLearnsetList is called', () => {
    test('Then res.status should be called if result is not found', () => {
      Learnsets.find.mockImplementationOnce((query, callback) => callback(true));
      getLearnsetList(req, res);
      expect(res.status).toHaveBeenCalled();
    });
    test('Then res.json should be called if the result is found', () => {
      Learnsets.find.mockImplementationOnce((query, callback) => callback(false));
      getLearnsetList(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
});
