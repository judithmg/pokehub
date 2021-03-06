import React from 'react';
import {
  Route, Switch, BrowserRouter as Router,
} from 'react-router-dom';

import '../../styles/App.scss';

import Landing from '../landing';
import Header from '../shared/header';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/welcome" />

        <Route path="/">
          <Header />
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
