import actionTypes from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function pokedexReducer(state =
{
  pokedex: initialState.pokedex,

  pokemon: initialState.pokemon,

  moves: initialState.moves,
  abilities: initialState.abilities,
  learnsets: initialState.learnsets,

  pokemonLearnset: initialState.pokemonLearnset,
  pokemonAbilities: initialState.pokemonAbilities,

}, action) {
  let pokemon;
  let pokemonLearnset;
  let pokemonAbilities;
  switch (action.type) {
    case actionTypes.LOAD_POKEMON_DETAIL:
      pokemon = state.pokedex.find((poke) => poke.name.toLowerCase() === action.pokeId);
      return { ...state, pokemon };

    case actionTypes.LOAD_POKEMON_LEARNSET:

      pokemonLearnset = state.learnsets.find((poke) => poke.name === action.pokeId);
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
