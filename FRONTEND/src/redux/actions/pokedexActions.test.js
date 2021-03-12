import axios from 'axios';
import {
  loadPokedex,
  loadPokemonsShown,
  loadPokemonDetail,
  loadPokemonLearnset,
  loadPokemonAbilities,
  loadPokemonFromType,
} from './pokedexActions';

import configureStore from '../store/configureStore';
import actionTypes from './actionTypes';

jest.mock('axios');

describe('Given pokedexActions', () => {
  let store;
  beforeEach(() => {
    store = configureStore();
  });

  describe('When loadPokedex is invoked', () => {
    test('Then axios should be called', () => {
      axios.get = jest.fn();
      loadPokedex()();

      expect(axios.get).toHaveBeenCalled();
    });
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
