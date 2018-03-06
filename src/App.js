import React from 'react';
import {BrowserRouter as Redirect, Router, Route, Link} from 'react-router-dom';

const Links = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/old">Old</Link>
    <Link to="/new">New</Link>
  </nav>
);

const App = () => (
  <Router>
    <div>
      <Links />
      <Route path="/" render={() => <h1>Home</h1>} />
      <Route path="/new" render={() => <h1>New</h1>} />
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
    </div>
  </Router>
);

export default App;
