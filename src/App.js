import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Links = () => (
  <nav>
    {/*
      This query string will be added in its entirety to the location object
      we receive on Route.
      It will be on a search property of the location object:
      {..., search: '?id=123', ...}
    */}
    <Link to="/?id=123">Inline</Link>

    {/*
      When using an object for 'to' the query can be added via the saerch property
    */}
    <Link to={{pathname: '/', search: '?id=456', hash: '#some-hash'}}>
      Object
    </Link>
  </nav>
);

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
