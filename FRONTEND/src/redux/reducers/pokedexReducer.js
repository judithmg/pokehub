import actionTypes from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function pokedexReducer(state =
{
  pokedex: initialState.pokedex,
  pokemonShown: initialState.pokemonShown,
  pokedexPage: initialState.pokedexPage,
  pokemon: initialState.pokemon,

  moves: initialState.moves,
  abilities: initialState.abilities,
  learnset: initialState.learnset,

  pokemonLearnset: initialState.pokemonLearnset,
  pokemonAbilities: initialState.pokemonAbilities,
}, action) {
  let pokemon;
  let pokemonLearnset;
  let pokemonAbilities;
  switch (action.type) {
    case actionTypes.LOAD_POKEDEX:
      return { ...state, pokedex: action.data };

    case actionTypes.LOAD_LEARNSET:
      return { ...state, learnset: action.data };

    case actionTypes.LOAD_MOVES:
      return { ...state, moves: action.data };

    case actionTypes.LOAD_ABILITIES:
      console.log(state);
      return { ...state, abilities: action.data };

    case actionTypes.LOAD_POKEMON_SHOWN:
      return {
        ...state,
        pokemonShown: state.pokedex.slice((action.page) * 20, (action.page + 1) * 20),
      };

    case actionTypes.LOAD_POKEMON_DETAIL:
      pokemon = state.pokedex.find((poke) => poke.name.toLowerCase() === action.pokeId);
      return { ...state, pokemon };

    case actionTypes.LOAD_POKEMON_LEARNSET:

      pokemonLearnset = state.learnset.find((poke) => poke.name === action.pokeId);
      pokemonLearnset.learnset.map((pokemove) => state.moves.filter(((move) => move.name.replace(/[^a-zA-Z ]/g, '') === pokemove)));
      return { ...state, pokemonLearnset };

    case actionTypes.LOAD_POKEMON_ABILITIES:
      pokemonAbilities = state.abilities
        .filter((ability) => ability.name === state.pokemon.abilities[0]
      || ability.name === state.pokemon.abilities[1]
      || ability.name === state.pokemon.abilities.H);
      return { ...state, pokemonAbilities };

    default:
      return state;
  }
}
