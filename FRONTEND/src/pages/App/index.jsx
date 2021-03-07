import React from 'react';

import '../../styles/App.scss';

import {
  Route, Switch, BrowserRouter as Router,
} from 'react-router-dom';

import Dashboard from '../dashboard';
import Pokedex from '../pokedex';
import PokeDetail from '../pokedex/pokedetail';
import Teams from '../teams';
import TeamDetail from '../teams/team-detail'; import MainComponent from '../main';
import Header from '../header';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <MainComponent />
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
      </main>
    </Router>
  );
}

export default App;
