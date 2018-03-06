import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Link} from 'react-router-dom';

const Links = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/old/123">Old</Link>
    <Link to="/new/456">New</Link>
    <Link to="/protected">Protected</Link>
  </nav>
);

const loggedIn = false;

const App = () => (
  <Router>
    <div>
      <Links />
      <Route exact path="/" render={() => <h1>Home</h1>} />
      <Route
        path="/new/:str"
        render={({match}) => <h1>New: {match.params.str}</h1>}
      />

      {/*
          This needs to be inside a Switch when it is being rendered alongside
          other Route components so that only 1 route is rendered.
          It also rewrites history so that going back will not attempt to
          access this route again.
          <Redirect from="/old" to="new" />

          Alternative to using the Switch statement, we can render the Redirect
          inside a Route. We can remove the Switch statement in this case.

          We can also pass query params through to th redirect.
        */}
      <Route
        path="/old/:str"
        render={({match}) => <Redirect to={`/new/${match.params.str}`} />}
      />

      {/*
      We can also redirect based on other data
    */}
      <Route
        path="/protected"
        render={() =>
          loggedIn ? <h1>Welcome!</h1> : <Redirect to="/new/login" />
        }
      />
    </div>
  </Router>
);

export default App;
