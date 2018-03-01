import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      {/*
        by usin parens we can add regular expression to matching our route
        params.
        If the regex doesn't match the param, the route won't be shown
      */}
      <Route
        path="/:a(\d{2}-\d{2}-\d{4}):b(\.[a-z]+)"
        render={({match}) => (
          <h1>
            paramA: {match.params.a}
            <br />
            paramB: {match.params.b}
          </h1>
        )}
      />
    </div>
  </Router>
);

export default App;
