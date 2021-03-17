import React from 'react';
import {
  Route, Switch, BrowserRouter as Router,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { AuthProvider } from '../context/AuthContext';
import PrivateRoute from './PrivateRoute';
import store from '../redux/store/configureStore';

import Dashboard from './dashboard';
import Footer from './footer';
import ForgotPassword from './Login/ForgotPassword';
import Header from './header';
import Login from './Login';
import Pokedex from './pokedex';
import PokeDetail from './pokedetail';
import Profile from './Profile';
import SignUp from './SignUp';
import Teams from './teams';
import TeamDetail from './team-detail'; import MainComponent from './main';
import TeamCreator from './team-creator';
import UpdateProfile from './Profile/UpdateProfile';

import '../styles/App.scss';

import pruebas from '../bin/pruebas';

function App() {
  return (
    <AuthProvider>
      <Provider store={store()}>
        <Router>
          <Header />
          <main>
            <MainComponent />
            <Switch>
              <Route path="/login/forgot-password" component={ForgotPassword} />
              <Route path="/login" component={Login} />
              <Route path="/pokemon/:pokeId" component={PokeDetail} />
              <Route path="/pokedex" component={Pokedex} />
              <Route path="/pruebas" component={pruebas} />
              <Route path="/signup" component={SignUp} />
              <PrivateRoute path="/profile/update" component={UpdateProfile} />
              <PrivateRoute path="/profile" component={Profile} />
              <PrivateRoute path="/team-builder" component={TeamCreator} />
              <PrivateRoute path="/team-detail/:teamId" component={TeamDetail} />
              <PrivateRoute path="/teams" component={Teams} />
              <Route exact path="/" component={Dashboard} />
            </Switch>
          </main>
          <Footer />
        </Router>
      </Provider>
    </AuthProvider>

  );
}

export default App;
