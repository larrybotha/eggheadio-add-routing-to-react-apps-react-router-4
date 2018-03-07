import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Links = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/form">Form</Link>
  </nav>
);

const LinksRoutes = () => (
  <div>
    <Links />
    <Route exact path="/" render={() => <h1>Home</h1>} />
    <Route exact path="/about" render={() => <h1>About</h1>} />
  </div>
);

export default () => {};
