import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Links = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Header />
    <Content />
  </nav>
);

// Route is just a component, and so can be used anywhere as a descendant of
// Router
const Header = () => (
  <div className="header">
    <Route
      exact
      path="/:page"
      render={({match}) => <h1>{match.params.page} header</h1>}
    />
  </div>
);

// We can render another Route component for the same path again
const Content = () => (
  <div className="content">
    <Route
      path="/:page"
      render={({match}) => <p>{match.params.page} content</p>}
    />
  </div>
);

const App = () => (
  <Router>
    <div>
      <Links />
    </div>
  </Router>
);

export default App;
