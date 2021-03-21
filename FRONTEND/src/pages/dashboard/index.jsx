import React from 'react';
import { Link } from 'react-router-dom';
import Button from './DashboardButton';

export default function DashboardComponent() {
  return (
    <section data-aos="fade-in" className="dashboard__component">
      <Link to="/pokedex"><Button text="POKEDEX" /></Link>
      <Link to="/teams"><Button text="TEAMS" /></Link>
      <Link to="/team-creator"><Button text="TEAM CREATOR" /></Link>
      <Link to="/battle"><Button text="BATTLE" /></Link>
    </section>
  );
}
