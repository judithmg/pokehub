import axios from 'axios';
import {
  loadPokedex,
  loadPokemonsShown,
  loadPokemonDetail,
  loadMoves,
  loadLearnsets,
  loadAbilities,
  loadPokemonLearnset,
  loadPokemonAbilities,
  loadPokemonFromType,
} from '../redux/actions/pokedexActions';

import configureStore from '../redux/store/configureStore';
import actionTypes from '../redux/actions/actionTypes';

jest.mock('axios');

describe('Given pokedexActions', () => {
  let store;
  beforeEach(() => {
    store = configureStore();
  });

  describe('When loadMoves is invoked', () => {
    test('Then dispatch is called with the data return from axios', async () => {
      axios.get = jest.fn().mockImplementationOnce(() => Promise.resolve({
        data: 'falseData',
      }));

      store.dispatch = jest.fn();

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
      axios.get = jest.fn().mockImplementationOnce(() => Promise.resolve({
        data: 'falseData',
      }));

      store.dispatch = jest.fn();

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
      axios.get = jest.fn().mockImplementationOnce(() => Promise.resolve({
        data: 'falseData',
      }));

      store.dispatch = jest.fn();

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
      axios.get = jest.fn().mockImplementationOnce(() => Promise.resolve({
        data: 'falseData',
      }));

      store.dispatch = jest.fn();

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

  describe('When loadPokemonDetail is invoked', () => {
    test('Then it returns an action', () => {
      const mockReturnValue = loadPokemonDetail('fakeData');
      expect(mockReturnValue).toEqual({
        type: actionTypes.LOAD_POKEMON_DETAIL,
        pokeId: 'fakeData',
      });
    });
  });

  describe('When loadPokemonLearnset is invoked', () => {
    test('Then it returns an action', () => {
      const mockReturnValue = loadPokemonLearnset('fakeData');
      expect(mockReturnValue).toEqual({
        type: actionTypes.LOAD_POKEMON_LEARNSET,
        pokeId: 'fakeData',
      });
    });
  });

  describe('When loadPokemonAbilities is invoked', () => {
    test('Then it returns an action', () => {
      const mockReturnValue = loadPokemonAbilities('fakeData');
      expect(mockReturnValue).toEqual({
        type: actionTypes.LOAD_POKEMON_ABILITIES,
        pokeId: 'fakeData',
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
});
