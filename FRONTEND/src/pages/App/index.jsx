import React from 'react';
import {
  Route, Switch, BrowserRouter as Router,
} from 'react-router-dom';

import Landing from '../landing';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/welcome" />

        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
