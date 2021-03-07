import React from 'react';

import Button from './DashboardButton';

export default function DashboardComponent() {
  return (
    <section className="dashboard__component">
      <Button text="POKEDEX" />
      <Button text="TEAMS" />
      <Button text="BATTLE" />
    </section>
  );
}
