import actionTypes from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function pokedexReducer(state = initialState.pokedexReducer, action = {}) {
  let pokemon;
  let pokedex;
  let pokemonsShown;
  let pokemonAbilities;
  let pokemonLearnset;
  let filteredMoves;

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
        pokemonNameFiltered: '',
      };

    case actionTypes.LOAD_POKEMON_DETAIL:
      pokemon = state.pokedex.find((poke) => poke.name.toLowerCase() === action.pokeId);
      return { ...state, pokemon };
      //       loadPokemon(...action...)
      // return { ...state, };

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

    case actionTypes.LOAD_POKEMON_FROM_TYPE:
      pokemonsShown = state.pokedex
        .filter((poke) => poke.types.includes(action.pokemonTypeFiltered));
      return {
        ...state,
        pokemonTypeFiltered: action.pokemonTypeFiltered,
        pokemonsShown,
      };

    case actionTypes.FILTER_BY_NAME:
      pokemonsShown = state.pokedex
        .filter((poke) => poke.name.toLowerCase().includes(action
          .pokemonNameFiltered.toLowerCase()));
      return {
        ...state,
        pokemonNameFiltered: action.pokemonNameFiltered,
        pokemonsShown,
      };

    default:
      return state;
  }
}
