import React from 'react';
import teams from './teams';

import TeamDetailPokemonComponent from './PokeTeamDetail';

export default function TeamDetailComponent() {
  return (
    <section className="teamdetail__container">
      {teams.map((pokemon) => <TeamDetailPokemonComponent pokemon={pokemon} key={pokemon.name} />)}
      {' '}
    </section>
  );
}
