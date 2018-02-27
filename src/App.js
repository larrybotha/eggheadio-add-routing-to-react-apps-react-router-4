import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const Home = () => <h1>Home</h1>;

const App = () => (
  <Router>
    <div>
      {/*
	We need this home path to be exact, because React Router's regex engine
	evaluates / and /about to be the same
	The result is that both routes are rendered.
	'exact' is known as a qualifier. 'exact' doesn't care about trailing
	forward slashes, but there is another qualifier that does...
      */}
      <Route exact path="/" component={Home} />

      {/*
	The qualifier 'strict' requires that if the path has a trailing slash or
	not, that accessing the route via the client must be done in the same way
      */}
      {/* <Route strict path="/about/" component={Home} /> */}

      {/* render allows us to use a function to render a path */}
      {/* <Route path="/about" render={() => <h1>About</h1> } /> */}

      {/*
	children works similarly to render, except that it will render
	regardless of the route.
	We can use the match prop passed through to the child component
	to render the route only when the route matches.
	The 'match' prop is only populated when a route matches the path.
      */}
      <Route path="/about" children={({match}) => match && <h1>About</h1>} />
    </div>
  </Router>
);

export default App;
