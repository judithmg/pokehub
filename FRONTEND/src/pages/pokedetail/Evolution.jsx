import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { pokemonSprites } from '../../constants/images';

export function findPokemonNumber(evo, pokedex) {
  const poke = pokedex.filter((pokemon) => pokemon.name.toLowerCase() === evo.toLowerCase());

  return poke[0];
}

export default function EvolutionChainComponent({
  evos, prevo, pokemon, pokedex,
}) {
  let pokeprevo;
  if (prevo) {
    pokeprevo = findPokemonNumber(prevo, pokedex);
  }
  return (
    <div className="abstract__evochain">
      <span className="abstract__evochain-title">EVOLUTION CHAIN</span>
      <div className="abstract__evochain-sprites">

        {
          pokeprevo?.prevo && (
          <Link to={`/pokemon/${pokeprevo?.prevo.toLowerCase()}`}>
            <img
              alt="pokemon evo"
              src={`${pokemonSprites.httpIcon}${findPokemonNumber(pokeprevo.prevo, pokedex).num}.png`}
            />
          </Link>
          )
        }

        {prevo && (
          <>
            <Link to={`/pokemon/${prevo.toLowerCase()}`}>
              <img
                alt="pokemon evo"
                src={`${pokemonSprites.httpIcon}${findPokemonNumber(prevo, pokedex).num}.png`}
              />
            </Link>
          </>
        )}
        <img
          alt="pokemon evo"
          src={`${pokemonSprites.httpIcon}${pokemon.num}.png`}
        />
        {evos && evos.map((pokeevo) => (
          <Link to={`/pokemon/${pokeevo.toLowerCase()}`} key={Math.random()}>
            <img
              alt="pokemon evo"
              src={`${pokemonSprites.httpIcon}${findPokemonNumber(pokeevo, pokedex).num}.png`}
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
