import React from 'react';
import '../../styles/team-creator.scss';
import PokemonListTeamComponent from './PokemonListTeam';
import CreateTeamComponent from './CreateTeam';

export default function TeamCreatorComponent() {
  return (
    <section className="team-creator__container">
      <CreateTeamComponent />
      <PokemonListTeamComponent />
    </section>
  );
}
