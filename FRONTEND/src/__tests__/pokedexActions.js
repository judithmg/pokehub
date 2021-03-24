import axios from 'axios';
import {
  loadPokedex,
  loadPokemonsShown,
  loadMoves,
  loadLearnsets,
  loadAbilities,
  loadPokemonFromType,
  filterByName,
} from '../redux/actions/pokedexActions';

import configureStore from '../redux/store/configureStore';
import actionTypes from '../redux/actions/actionTypes';

jest.mock('axios');

describe('Given pokedexActions', () => {
  let store;
  beforeEach(() => {
    store = configureStore();
    axios.get = jest.fn().mockImplementationOnce(() => Promise.resolve({
      data: 'falseData',
    }));

    store.dispatch = jest.fn();
  });

  describe('When loadMoves is invoked', () => {
    test('Then dispatch is called with the data return from axios', async () => {
      const dispatchFunction = loadMoves();
      await dispatchFunction(store.dispatch);

      expect(store.dispatch).toHaveBeenCalledWith({
        type: actionTypes.LOAD_MOVES,
        data: 'falseData',
      });
    });
  });

  describe('When loadLearnsets is invoked', () => {
    test('Then dispatch is called with the data return from axios', async () => {
      const dispatchFunction = loadLearnsets();
      await dispatchFunction(store.dispatch);

      expect(store.dispatch).toHaveBeenCalledWith({
        type: actionTypes.LOAD_LEARNSETS,
        data: 'falseData',
      });
    });
  });

  describe('When loadAbilities is invoked', () => {
    test('Then dispatch is called with the data return from axios', async () => {
      const dispatchFunction = loadAbilities();
      await dispatchFunction(store.dispatch);

      expect(store.dispatch).toHaveBeenCalledWith({
        type: actionTypes.LOAD_ABILITIES,
        data: 'falseData',
      });
    });
  });

  describe('When loadPokedex is invoked', () => {
    test('Then dispatch is called with the data return from axios', async () => {
      const dispatchFunction = loadPokedex();
      await dispatchFunction(store.dispatch);

      expect(store.dispatch).toHaveBeenCalledWith({
        type: actionTypes.LOAD_POKEDEX,
        data: 'falseData',
      });
    });
  });

  describe('When loadPokemonsShown is invoked', () => {
    test('Then it returns an action', () => {
      const mockReturnValue = loadPokemonsShown('fakeData');
      expect(mockReturnValue).toEqual({
        type: actionTypes.LOAD_POKEMON_SHOWN,
        page: 'fakeData',
      });
    });
  });

  describe('When loadPokemonFromType is invoked', () => {
    test('Then it returns an action', () => {
      const mockReturnValue = loadPokemonFromType('fakeData');
      expect(mockReturnValue).toEqual({
        type: actionTypes.LOAD_POKEMON_FROM_TYPE,
        pokemonTypeFiltered: 'fakeData',
      });
    });
  });
  describe('When filterByName is invoked', () => {
    test('Then it returns an action', () => {
      const mockReturnValue = filterByName('fakeData');
      expect(mockReturnValue).toEqual({
        type: actionTypes.FILTER_BY_NAME,
        pokemonNameFiltered: 'fakeData',
      });
    });
  });
});
