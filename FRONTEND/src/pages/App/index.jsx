import React from 'react';
import {
  Route, Switch, BrowserRouter as Router,
} from 'react-router-dom';

import '../../styles/App.scss';

import MainComponent from '../main';
import Header from '../shared/header';

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/">
          <Header />
          <MainComponent />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
