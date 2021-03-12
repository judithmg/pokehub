import actionTypes from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function pokedexReducer(state = initialState.pokedexReducer, action) {
  let pokedex;
  let pokemonsShown;

  switch (action.type) {
    case actionTypes.LOAD_POKEDEX:
      pokedex = action.data.sort((a, b) => a.num - b.num);
      return { ...state, pokedex };

    case actionTypes.LOAD_LEARNSETS:
      return { ...state, learnsets: action.data };

    case actionTypes.LOAD_MOVES:
      return { ...state, moves: action.data };

    case actionTypes.LOAD_ABILITIES:
      return { ...state, abilities: action.data };

    case actionTypes.LOAD_POKEMON_SHOWN:
      return {
        ...state,
        pokemonsShown: state.pokedex.slice((action.page) * 20, (action.page + 1) * 20),
      };

    case actionTypes.LOAD_POKEMON_FROM_TYPE:
      pokemonsShown = state.pokedex
        .filter((poke) => poke.types.includes(action.pokemonTypeFiltered));
      return {
        ...state,
        pokemonTypeFiltered: action.pokemonTypeFiltered,
        pokemonsShown,
      };

    default:
      return state;
  }
}
