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
      <Links />
      <Route
        path="/"
        render={({match, location}) => (
          <div>
            <p>root</p>
            {/*
              React Router doesn't provide a mechanism for parsing query strings
            */}
            <p>{JSON.stringify(match)}</p>
            <p>{JSON.stringify(location)}</p>
          </div>
        )}
      />
    </div>
  </Router>
);

export default App;
