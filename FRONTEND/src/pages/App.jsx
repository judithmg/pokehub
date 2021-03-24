import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Route, Switch, BrowserRouter as Router,
} from 'react-router-dom';
import { PropTypes } from 'prop-types';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { AuthProvider } from '../context/AuthContext';

import {
  loadPokedex,
  loadMoves,
  loadLearnsets,
  loadAbilities,
  loadPokemonsShown,
} from '../redux/actions/pokedexActions';

import PrivateRoute from './PrivateRoute';

import Dashboard from './Dashboard';
import Footer from './Footer';
import Header from './Header';
import Login from './Login';
import Pokedex from './Pokedex';
import PokeDetail from './Pokedetail';
import SignUp from './SignUp';
import Teams from './Teams';
import TeamDetail from './TeamDetail';
import MainComponent from './Main';
import TeamCreator from './TeamCreator';
import Battle from './Battle';

import '../styles/App.scss';

AOS.init();
function App({
  actions,
  pokedex,
  moves,
  abilities,
  learnsets,
}) {
  useEffect(() => {
    if (!pokedex?.length) {
      actions.loadPokedex();
    }
  }, [pokedex?.length]);

  useEffect(() => {
    if (!abilities?.length) {
      actions.loadAbilities();
    }
  }, [abilities?.length]);
  useEffect(() => {
    if (!moves.length) {
      actions.loadMoves();
    }
  }, [moves?.length]);
  useEffect(() => {
    if (!learnsets?.length) {
      actions.loadLearnsets();
    }
  }, [learnsets?.length]);
  return (
    <AuthProvider>
      <Router>
        <Header />
        <main>
          <MainComponent />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/pokemon/:pokeId" component={PokeDetail} />
            <Route path="/pokedex" component={Pokedex} />
            <Route path="/signup" component={SignUp} />
            <PrivateRoute path="/battle" component={Battle} />
            <PrivateRoute path="/team-creator" component={TeamCreator} />
            <PrivateRoute path="/team-detail/:teamId" component={TeamDetail} />
            <PrivateRoute path="/teams" component={Teams} />
            <Route exact path="/" component={Dashboard} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </AuthProvider>

  );
}

App.propTypes = {
  pokedex: PropTypes.arrayOf(PropTypes.object).isRequired,

  abilities: PropTypes.arrayOf(PropTypes.object).isRequired,
  moves: PropTypes.arrayOf(PropTypes.object).isRequired,
  learnsets: PropTypes.arrayOf(PropTypes.object).isRequired,
  actions: PropTypes.shape({
    loadPokedex: PropTypes.func.isRequired,
    loadMoves: PropTypes.func.isRequired,
    loadLearnsets: PropTypes.func.isRequired,
    loadAbilities: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    pokedex: state.pokedexReducer.pokedex,
    pokemonsShown: state.pokedexReducer.pokemonsShown,

    moves: state.pokedexReducer.moves,
    abilities: state.pokedexReducer.abilities,
    learnsets: state.pokedexReducer.learnsets,
    page: state.pokedexReducer.page,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      loadPokedex,
      loadMoves,
      loadLearnsets,
      loadAbilities,
      loadPokemonsShown,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
