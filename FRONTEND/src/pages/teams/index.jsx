import React from 'react';
import '../../styles/teams.scss';
import teamData from './teamData';

import Team from './Team';

export default function UserTeamsComponent() {
  return (
    <>
      <section className="teams__container">
        {teamData.map((team) => <Team team={team} key={team.id} />)}
        {teamData.map((team) => <Team team={team} key={team.id} />)}
        {teamData.map((team) => <Team team={team} key={team.id} />)}
        {teamData.map((team) => <Team team={team} key={team.id} />)}
      </section>
    </>
  );
}
