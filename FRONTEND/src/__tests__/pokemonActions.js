import {
  loadPokemonDetail,
  loadPokemonLearnset,
  loadPokemonAbilities,
} from '../redux/actions/pokemonActions';

import actionTypes from '../redux/actions/actionTypes';

describe('Given pokedexActions', () => {
  beforeEach(() => {
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
});
