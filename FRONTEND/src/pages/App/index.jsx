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
import Footer from '../footer';

import pruebas from './pruebas';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <MainComponent />
        <Switch>
          <Route path="/pokemon/:pokeId" component={PokeDetail} />
        </Switch>
        <Switch>
          <Route path="/pruebas" component={pruebas} />
        </Switch>
        <Switch>
          <Route path="/pokedex" component={Pokedex} />
        </Switch>
        <Switch>
          <Route path="/teamdetail/:teamId" component={TeamDetail} />
        </Switch>
        <Switch>
          <Route path="/teams" component={Teams} />
        </Switch>
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
