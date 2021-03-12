import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

export default function EvolutionChainComponent({ evos, prevo, pokemon }) {
  return (
    <div className="abstract__evochain">
      <span className="abstract__evochain-title">EVOLUTION CHAIN</span>
      <div className="abstract__evochain-sprites">

        {prevo && (
        <Link to={`/pokemon/${prevo.toLowerCase()}`}>
          <img
            alt="pokemon evo"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${pokemon.num - 1}.png`}
          />
        </Link>
        )}
        <img
          alt="pokemon evo"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${pokemon.num}.png`}
        />
        {evos && evos.map((poke) => (
          <Link to={`/pokemon/${poke.toLowerCase()}`} key={Math.random()}>
            <img
              alt="pokemon evo"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${pokemon.num + 1}.png`}
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
  evos: PropTypes.arrayOf(PropTypes.string),
  prevo: PropTypes.string,
  pokemon: PropTypes.shape({
    num: PropTypes.number,
    evos: PropTypes.arrayOf(PropTypes.string),
    prevo: PropTypes.string,
  }).isRequired,
};
