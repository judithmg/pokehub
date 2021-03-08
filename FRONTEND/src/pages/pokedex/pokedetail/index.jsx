import React from 'react';

import PropTypes from 'prop-types';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';

import pokemon from './pokemon';

import '../../../styles/pokedetail.scss';

export default function PokeDetailComponent() {
  return (
    <>
      <section>
        <div className="pokemon__abstract">
          <div className="pokemon__abstract-main">
            <div className="abstract__sprite">
              <img src={pokemon.sprite} alt="pokemon sprite" />

            </div>
            <div className="abstract__data">
              <div className="abstract__name">
                <div className="abstract__name--eng">{pokemon.name}</div>
                <div className="abstract__name--jap">{pokemon['name-jap']}</div>
              </div>
              <div className="abstract__id">
                #
                {' '}
                {pokemon.id}
              </div>
              <div className="abstract__size">
                <div className="abract__weight">
                  {pokemon.kg}
                  {' '}
                  kg
                </div>
                <div className="abstract__height">
                  {pokemon.m}
                  {' '}
                  m
                </div>
              </div>
            </div>
          </div>
          <div className="pokemon__abstract-visual">
            <div className="abstract__stats">
              <RadarChart
                captions={{
                  // columns
                  hp: 'HP',
                  atk: 'ATK',
                  'sp-atk': 'SP ATK',
                  def: 'DEF',
                  'sp-def': 'SP DEF',
                  speed: 'SPEED',
                }}
                data={[
                  {
                    data: {
                      hp: +(pokemon.stats.hp / 255).toFixed(2),
                      atk: +(pokemon.stats.atk / 255).toFixed(2),
                      'sp-atk': +(pokemon.stats['sp-atk'] / 255).toFixed(2),
                      def: +(pokemon.stats.def / 255).toFixed(2),
                      'sp-def': +(pokemon.stats['sp-def'] / 255).toFixed(2),
                      speed: +(pokemon.stats.speed / 255).toFixed(2),
                    },
                    meta: { color: '#58FCEC' },
                  },
                ]}
                size={100}
              />
            </div>
            <div className="abstract__evochain">{pokemon.evo.map((evo) => (<img src={evo} alt={evo} />))}</div>
          </div>
        </div>
        <div className="pokemon__details">
          <div className="pokemon__ability" />
          <div className="pokemon__moves">
            <div className="pokemon__moves-lvl" />
            <div className="pokemon__moves-egg" />
          </div>
        </div>
      </section>

      {pokemon.name}
      {pokemon.name}
      {pokemon.name}
      {pokemon.name}
      {pokemon.name}

    </>
  );
}

PokeDetailComponent.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    stats: PropTypes.objectOf(PropTypes.number),
    type: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
