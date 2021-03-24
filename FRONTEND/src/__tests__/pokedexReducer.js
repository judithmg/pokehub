import pokedexReducer from '../redux/reducers/pokedexReducer';
import actionTypes from '../redux/actions/actionTypes';
import initialState from '../redux/store/initialState';

let state;

describe('Given a pokedexReducer function', () => {
  beforeEach(() => {
    state = [];
  });
  describe('When it is called with an action with type LOAD_POKEDEX', () => {
    test('Then the state should be modified and pokedex.length should be 2', () => {
      const data = [{ num: 10 }, { num: 10 }];
      const fakeAction = {
        type: actionTypes.LOAD_POKEDEX,
        data,
      };
      const answer = pokedexReducer(state, fakeAction);
      expect(answer.pokedex.length).toBe(2);
    });
    test('Then the data from loadPokedex action should be returned', () => {
      const data = [{ num: 10 }, { num: 10 }];
      const fakeAction = {
        type: actionTypes.LOAD_POKEDEX,
        data,
      };
      const answer = pokedexReducer(state, fakeAction);
      expect(answer.pokedex).toEqual(data);
    });
  });
  describe('When it is called with an action with type LOAD_LEARNSETS', () => {
    test('Then the state should be modified and learnsets.length should be 2', () => {
      const data = [{ num: 10 }, { num: 10 }];
      const fakeAction = {
        type: actionTypes.LOAD_LEARNSETS,
        data,
      };
      const answer = pokedexReducer(state, fakeAction);
      expect(answer.learnsets.length).toBe(2);
    });
    test('Then the data from loadLearnsets action should be returned', () => {
      const data = [{ num: 10 }, { num: 10 }];
      const fakeAction = {
        type: actionTypes.LOAD_LEARNSETS,
        data,
      };
      const answer = pokedexReducer(state, fakeAction);
      expect(answer.learnsets).toEqual(data);
    });
  });
  describe('When it is called with an action with type LOAD_MOVES', () => {
    test('Then the state should be modified and moves.length should be 2', () => {
      const data = [{ num: 10 }, { num: 10 }];
      const fakeAction = {
        type: actionTypes.LOAD_MOVES,
        data,
      };
      const answer = pokedexReducer(state, fakeAction);
      expect(answer.moves.length).toBe(2);
    });
    test('Then the data from loadMoves action should be returned', () => {
      const data = [{ num: 10 }, { num: 10 }];
      const fakeAction = {
        type: actionTypes.LOAD_MOVES,
        data,
      };
      const answer = pokedexReducer(state, fakeAction);
      expect(answer.moves).toEqual(data);
    });
  });
  describe('When it is called with an action with type LOAD_ABILITIES', () => {
    test('Then the state should be modified and abilities.length should be 2', () => {
      const data = [{ num: 10 }, { num: 10 }];
      const fakeAction = {
        type: actionTypes.LOAD_ABILITIES,
        data,
      };
      const answer = pokedexReducer(state, fakeAction);
      expect(answer.abilities.length).toBe(2);
    });
    test('Then the data from loadAbilities action should be returned', () => {
      const data = [{ num: 10 }, { num: 10 }];
      const fakeAction = {
        type: actionTypes.LOAD_ABILITIES,
        data,
      };
      const answer = pokedexReducer(state, fakeAction);
      expect(answer.abilities).toEqual(data);
    });
  });
  describe('When it is called with an action with type LOAD_POKEMON_SHOWN', () => {
    test('Then the state should be modified and pokemonsShown.length should be 2', () => {
      state = {
        pokedex: [{ num: 1 }],
      };
      const data = [{ num: 10 }, { num: 10 }];
      const fakeAction = {
        type: actionTypes.LOAD_POKEMON_SHOWN,
        page: 0,
        data,
      };
      const answer = pokedexReducer(state, fakeAction);
      expect(answer.pokemonsShown.length).toBe(1);
    });
    test('Then the data from loadPokemonsShown action should be returned', () => {
      state = {
        pokedex: [{ num: 1 }],
      };
      const data = [{ num: 10 }, { num: 10 }];
      const fakeAction = {
        type: actionTypes.LOAD_POKEMON_SHOWN,
        page: 0,
        data,
      };
      const answer = pokedexReducer(state, fakeAction);
      expect(answer.pokemonsShown).toEqual([{ num: 1 }]);
    });
  });
  describe('When it is called with an action with type LOAD_POKEMON_FROM_TYPE', () => {
    test('Then the type given to the action should be added to the state', () => {
      state = {
        pokedex: [{
          num: 1,
          name: 'pichu',
          types: ['fire', 'water'],
        }],
      };
      const pokemonTypeFiltered = 'fire';
      const fakeAction = {
        type: actionTypes.LOAD_POKEMON_FROM_TYPE,
        pokemonTypeFiltered,
      };
      const answer = pokedexReducer(state, fakeAction);
      expect(answer.pokemonTypeFiltered).toBe('fire');
    });
    test('Then pokemonsShown.length should be 1', () => {
      state = {
        pokedex: [{
          num: 1,
          name: 'pichu',
          types: ['fire', 'water'],
        }],
      };
      const pokemonTypeFiltered = 'fire';
      const fakeAction = {
        type: actionTypes.LOAD_POKEMON_FROM_TYPE,
        pokemonTypeFiltered,
      };
      const answer = pokedexReducer(state, fakeAction);
      expect(answer.pokemonsShown.length).toBe(1);
    });
    test('Then pokemonsShown should equal the Pokemon found on the state', () => {
      state = {
        pokedex: [{
          num: 1,
          name: 'pichu',
          types: ['fire', 'water'],
        }],
      };
      const pokemonTypeFiltered = 'fire';
      const fakeAction = {
        type: actionTypes.LOAD_POKEMON_FROM_TYPE,
        pokemonTypeFiltered,
      };
      const answer = pokedexReducer(state, fakeAction);
      expect(answer.pokemonsShown).toEqual([{
        num: 1,
        name: 'pichu',
        types: ['fire', 'water'],
      }]);
    });
  });
  describe('When the default is returned', () => {
    test('Then the initialState should be returned', () => {
      state = undefined;
      expect(pokedexReducer(state, { type: 'fake' })).toEqual(initialState.pokedexReducer);
    });
  });
});
