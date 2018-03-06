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
    </div>
  </Router>
);

export default App;
