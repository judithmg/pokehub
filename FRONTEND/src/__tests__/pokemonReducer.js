import pokemonReducer from '../redux/reducers/pokemonReducer';
import actionTypes from '../redux/actions/actionTypes';
import initialState from '../redux/store/initialState';

describe('Given a pokemonReducer function', () => {
  let state;
  beforeEach(() => {
    state = [];
  });
  describe('When the default is returned', () => {
    test('Then the initialState should be returned', () => {
      state = undefined;
      expect(pokemonReducer(state, { type: 'fake' })).toEqual(initialState.pokedexReducer);
    });
  });
  describe('When it is called with an action with type LOAD_POKEMON_ABILITIES', () => {
    test('Then the state should be modified and pokemonAbilities.length should be 2', () => {
      state = {
        abilities: [{
          name: 'ability',
          learnset: [{ id: 1 }],
          id: 1,
        }],
        pokemon: {
          name: 'pichu',
          abilities: {
            0: 'ability',
          },
        },
      };
      const pokeId = 'pichu';
      const fakeAction = {
        type: actionTypes.LOAD_POKEMON_ABILITIES,
        pokeId,
      };
      const answer = pokemonReducer(state, fakeAction);
      expect(answer.pokemonAbilities.length).toBe(1);
    });
    test('Then the state should be modified and pokemonAbilities.length should be 2', () => {
      state = {
        abilities: [{
          name: 'ability',
          learnset: [{ id: 1 }],
          id: 1,
        }],
        pokemon: {
          name: 'pichu',
          abilities: {
            H: 'ability',
          },
        },
      };
      const pokeId = 'pichu';
      const fakeAction = {
        type: actionTypes.LOAD_POKEMON_ABILITIES,
        pokeId,
      };
      const answer = pokemonReducer(state, fakeAction);
      expect(answer.pokemonAbilities.length).toBe(1);
    });
    test('Then the state should be modified and pokemonAbilities.length should be 2', () => {
      state = {
        abilities: [{
          name: 'ability',
          learnset: [{ id: 1 }],
          id: 1,
        }],
        pokemon: {
          name: 'pichu',
          abilities: {
            1: 'ability',
          },
        },
      };
      const pokeId = 'pichu';
      const fakeAction = {
        type: actionTypes.LOAD_POKEMON_ABILITIES,
        pokeId,
      };
      const answer = pokemonReducer(state, fakeAction);
      expect(answer.pokemonAbilities.length).toBe(1);
    });
    test('Then the data from loadAbilities action should be returned', () => {
      state = {
        abilities: [{
          name: 'ability',
          learnset: [{ id: 1 }],
          id: 1,
        }],
        pokemon: {
          name: 'pichu',
          abilities: {
            0: 'ability',
            H: 'ability',
          },
        },
      };
      const pokeId = 'pichu';
      const fakeAction = {
        type: actionTypes.LOAD_POKEMON_ABILITIES,
        pokeId,
      };
      const answer = pokemonReducer(state, fakeAction);
      expect(answer.pokemonAbilities).toEqual([{
        name: 'ability',
        learnset: [{ id: 1 }],
        id: 1,
      }]);
    });
  });
  describe('When it is called with an action with type LOAD_POKEMON_DETAIL', () => {
    test('Then the data from loadPokemonDetail should be returned', () => {
      state = {
        pokedex: [{
          num: 1,
          name: 'pichu',
        }],
      };
      const pokeId = 'pichu';
      const fakeAction = {
        type: actionTypes.LOAD_POKEMON_DETAIL,
        pokeId,
      };
      const answer = pokemonReducer(state, fakeAction);
      expect(answer.pokemon).toEqual({
        num: 1,
        name: 'pichu',
      });
    });
  });
  test('Then the data from loadPokemonLearnset action should be returned', () => {
    state = {
      moves: [{
        name: 'pichu',
        learnset: [{ id: 1 }],
        id: 1,
      }],
      learnsets: [{
        name: 'pichu',
        learnset: [1],
      }],
    };
    const pokeId = 'pichu';
    const fakeAction = {
      type: actionTypes.LOAD_POKEMON_LEARNSET,
      pokeId,
    };
    const answer = pokemonReducer(state, fakeAction);
    expect(answer.pokemonLearnset).toEqual([[{
      name: 'pichu',
      learnset: [{ id: 1 }],
      id: 1,
    }]]);
  });
});
