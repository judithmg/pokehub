import React from 'react';
import '../../styles/teams.scss';
import teamData from './teamData';

import Team from './Team';
import keyGenerator from '../../assets/keyGenerator';

export default function UserTeamsComponent() {
  return (
    <>
      <section className="teams__container">
        {teamData.map((team) => <Team team={team} key={keyGenerator(5)} />)}
        {teamData.map((team) => <Team team={team} key={keyGenerator(5)} />)}
        {teamData.map((team) => <Team team={team} key={keyGenerator(5)} />)}
        {teamData.map((team) => <Team team={team} key={keyGenerator(5)} />)}
      </section>
    </>
  );
}
