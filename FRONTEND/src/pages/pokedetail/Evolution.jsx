import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { pokemonSprites } from '../../constants/images';

function findPokemonNumber(evo, pokedex) {
  const poke = pokedex.filter((pokemon) => pokemon.name.toLowerCase() === evo.toLowerCase());

  return poke[0].num;
}
export default function EvolutionChainComponent({
  evos, prevo, pokemon, pokedex,
}) {
  return (
    <div className="abstract__evochain">
      <span className="abstract__evochain-title">EVOLUTION CHAIN</span>
      <div className="abstract__evochain-sprites">

        {prevo && (
        <Link to={`/pokemon/${prevo.toLowerCase()}`}>
          <img
            alt="pokemon evo"
            src={`${pokemonSprites.httpIcon}${findPokemonNumber(prevo, pokedex)}.png`}
          />
        </Link>
        )}
        <img
          alt="pokemon evo"
          src={`${pokemonSprites.httpIcon}${pokemon.num}.png`}
        />
        {evos && evos.map((pokeevo) => (
          <Link to={`/pokemon/${pokeevo.toLowerCase()}`} key={Math.random()}>
            <img
              alt="pokemon evo"
              src={`${pokemonSprites.httpIcon}${findPokemonNumber(pokeevo, pokedex)}.png`}
            />
          </Link>
        ))}
      </div>

    </div>
  );
}

EvolutionChainComponent.defaultProps = {
  evos: [],
  prevo: '',
};
EvolutionChainComponent.propTypes = {
  pokedex: PropTypes.arrayOf(PropTypes.object).isRequired,
  evos: PropTypes.arrayOf(PropTypes.string),
  prevo: PropTypes.string,
  pokemon: PropTypes.shape({
    num: PropTypes.number,
    evos: PropTypes.arrayOf(PropTypes.string),
    prevo: PropTypes.string,
  }).isRequired,
};
