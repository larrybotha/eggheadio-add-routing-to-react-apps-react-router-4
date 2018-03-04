import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

const Links = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
  </nav>
);

const App = () => (
  <Router>
    <div>
      <Links />
      {/*
        Switch will only render the first route that matches
      */}
      <Switch>
        <Route exact path="/" render={() => <h1>Home</h1>} />
        <Route path="/about" render={() => <h1>About</h1>} />
        <Route
          render={() => (
            <h1>Will only render inside Switch if no other routes match</h1>
          )}
        />
      </Switch>

      <Route
        render={() => <h1>Route without a 'path' prop always renders</h1>}
      />
    </div>
  </Router>
);

export default App;
