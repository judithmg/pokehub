import React from 'react';

import PropTypes from 'prop-types';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';

import pokemon from './pokemon';

export default function PokeDetailComponent() {
  return (
    <>
      <section>
        <div className="pokemon__abstract" />
        <div className="pokemon__detailed">
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
      {pokemon.name}
      <RadarChart
        captions={{
          // columns
          hp: 'ksdjdd',
          atk: 'kskd',
          'sp-atk': 'ksdjdd',
          def: 'ksdjdd',
          'sp-def': 'ksdjdd',
          speed: 'ksdjdd',
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
