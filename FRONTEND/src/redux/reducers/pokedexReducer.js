import actionTypes from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function pokedexReducer(state =
{
  pokedex: initialState.pokedex,
  pokemon: initialState.pokemon,
}, action) {
  let pokemon;
  switch (action.type) {
    case actionTypes.LOAD_POKELIST:
      return { ...state, pokedex: action.data };

    case actionTypes.LOAD_POKEMON:
      pokemon = state.pokedex.find((poke) => poke.name.toLowerCase() === action.pokeId);
      return { ...state, pokemon };

    default:
      return state;
  }
}
