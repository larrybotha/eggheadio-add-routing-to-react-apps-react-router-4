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
      <Switch>
        <Route exact path="/" render={() => <h1>Home</h1>} />
        <Route path="/about" render={() => <h1>About</h1>} />
        <Route path="/contact" render={() => <h1>Contact</h1>} />
        {/*
          Were this rendered outside of a Switch it would be shown in addition
          to the rendered content if another route matched.

          By wrapping the routes in a Switch, this route will only be shown if
          none of the existing routes match.
          e.g. /about and /contact will render as expected, and this component
          will not render, but if there are no matches then this route will render,
          so we can render anything we want.
        */}
        <Route
          path="/:itemid"
          render={({match}) => <h1>Item: {match.params.itemid}</h1>}
        />
      </Switch>
    </div>
  </Router>
);

export default App;
