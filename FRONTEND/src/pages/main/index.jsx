import React from 'react';
import '../../styles/main.scss';

import {
  Route, Switch, BrowserRouter as Router,
} from 'react-router-dom';

import Dashboard from '../dashboard';
import Pokedex from '../pokedex';
import PokeDetail from '../pokedex/pokedetail';
import Teams from '../teams';
import TeamDetail from '../teams/team-detail';

export default function MainComponent() {
  return (
    <main>
      <img
        className="main__logo --desktop"
        src="https://trello-attachments.s3.amazonaws.com/6041f83090af1242e84592ce/922x400/955ef6e7ad86fde9fc7ef8772a7f7596/pokeshelfdrib.png"
        alt="Header logo"
      />
      <Router>
        <Switch>
          <Route path="/pokedex/:pokeId" component={PokeDetail} />
        </Switch>
        <Switch>
          <Route path="/pokedex" component={Pokedex} />
        </Switch>
        <Switch>
          <Route path="/teams/:teamId" component={TeamDetail} />
        </Switch>
        <Switch>
          <Route path="/teams" component={Teams} />
        </Switch>
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </Router>
    </main>
  );
}
