import React from 'react';
import teams from './teams';

import TeamDetailPokemonComponent from './PokeTeamDetail';

import keyGenerator from '../../../assets/keyGenerator';

export default function TeamDetailComponent() {
  return (
    <section className="teamdetail__container">
      {teams.map((pokemon) => (
        <TeamDetailPokemonComponent
          pokemon={pokemon}
          key={keyGenerator(5)}
        />
      ))}
      {' '}
    </section>
  );
}
