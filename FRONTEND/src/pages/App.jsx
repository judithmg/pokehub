import React from 'react';
import {
  Route, Switch, BrowserRouter as Router,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store/configureStore';

import Dashboard from './dashboard';
import Pokedex from './pokedex';
import PokeDetail from './pokedetail';
import Teams from './teams';
import TeamDetail from './team-detail'; import MainComponent from './main';
import Header from './header';
import Footer from './footer';

import '../styles/App.scss';
import pruebas from '../bin/pruebas';

function App() {
  return (
    <Provider store={store()}>
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
            <Route path="/team-detail/:teamId" component={TeamDetail} />
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
    </Provider>
  );
}

export default App;
