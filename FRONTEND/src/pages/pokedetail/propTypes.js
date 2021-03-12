import PropTypes from 'prop-types';

export default {
  pokedex: PropTypes.arrayOf(PropTypes.object).isRequired,
  abilities: PropTypes.arrayOf(PropTypes.object).isRequired,
  moves: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
    desc: PropTypes.string,
    shortDesc: PropTypes.string,
    pp: PropTypes.number,
    basePower: PropTypes.number,
    type: PropTypes.string,
    accuracy: PropTypes.arrayOf(PropTypes.number),
  }))).isRequired,
  learnsets: PropTypes.arrayOf(PropTypes.object).isRequired,

  pokemonAbilities: PropTypes.arrayOf(PropTypes.object).isRequired,
  abilitiesLoadingBool: PropTypes.bool.isRequired,
  pokemonLearnset: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
    desc: PropTypes.string,
    shortDesc: PropTypes.string,
    pp: PropTypes.number,
    basePower: PropTypes.number,
    type: PropTypes.string,
    accuracy: PropTypes.arrayOf(PropTypes.number),
  }))).isRequired,
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,

  actions: PropTypes.shape({
    loadPokedex: PropTypes.func.isRequired,
    loadMoves: PropTypes.func.isRequired,
    loadLearnsets: PropTypes.func.isRequired,
    loadAbilities: PropTypes.func.isRequired,

    loadPokemonLearnset: PropTypes.func.isRequired,
    loadPokemonDetail: PropTypes.func.isRequired,
    loadPokemonAbilities: PropTypes.func.isRequired,

    abilitiesLoading: PropTypes.func.isRequired,
  }).isRequired,
};
