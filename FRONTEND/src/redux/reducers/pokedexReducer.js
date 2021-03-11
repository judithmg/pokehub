import actionTypes from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function pokedexReducer(state =
{
  pokedex: initialState.pokedex,
  pokedexPage: initialState.pokedexPage,
  pokemon: initialState.pokemon,

  moves: initialState.moves,
  abilities: initialState.abilities,
  learnsets: initialState.learnsets,

  pokemonsShown: initialState.pokemonsShown,
  pokemonLearnset: initialState.pokemonLearnset,
  pokemonAbilities: initialState.pokemonAbilities,

  pokemonTypeFiltered: initialState.pokemonTypeFiltered,
}, action) {
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
      };

    case actionTypes.LOAD_POKEMON_DETAIL:
      pokemon = state.pokedex.find((poke) => poke.name.toLowerCase() === action.pokeId);
      return { ...state, pokemon };

    case actionTypes.LOAD_POKEMON_LEARNSET:

      pokemonLearnset = state.learnsets?.find((poke) => poke.name === pokemon);
      filteredMoves = pokemonLearnset && pokemonLearnset
        .learnset.map((pokemove) => state.moves.map(
          (move) => console.log(move.name, pokemove),
        ));
      console.log(filteredMoves);
      return { ...state, pokemonLearnset };

    case actionTypes.LOAD_POKEMON_ABILITIES:
      pokemonAbilities = state.abilities
        .filter((ability) => ability.name === state.pokemon.abilities[0]
      || ability.name === state.pokemon.abilities[1]
      || ability.name === state.pokemon.abilities.H);
      return { ...state, pokemonAbilities };

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
