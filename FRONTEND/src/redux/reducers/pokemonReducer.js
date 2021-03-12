import actionTypes from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function pokedexReducer(state = initialState.pokedexReducer, action) {
  let pokemon;
  let pokemonAbilities;
  let pokemonLearnset;
  let filteredMoves;

  switch (action.type) {
    case actionTypes.LOAD_POKEMON_DETAIL:
      pokemon = state.pokedex.find((poke) => poke.name.toLowerCase() === action.pokeId);
      return { ...state, pokemon };

    case actionTypes.LOAD_POKEMON_LEARNSET:

      pokemonLearnset = state?.learnsets
        ?.find((poke) => poke.name === action.pokeId);

      filteredMoves = pokemonLearnset && pokemonLearnset
        .learnset.map((pokemove) => state.moves.filter(
          (move) => move.id === pokemove,
        ));
      return { ...state, pokemonLearnset: filteredMoves };

    case actionTypes.LOAD_POKEMON_ABILITIES:
      pokemonAbilities = state?.abilities
        ?.filter((ability) => ability.name === state.pokemon?.abilities[0]
      || ability.name === state.pokemon?.abilities[1]
      || ability.name === state.pokemon?.abilities.H);
      return { ...state, pokemonAbilities };

    default:
      return state;
  }
}
