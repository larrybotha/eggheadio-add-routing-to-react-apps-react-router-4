import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

import './App.css';

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Contact = () => <h1>Contact</h1>;

const isActive = (match, location) => {
  console.log(match, location);

  // if the route matches, our match argument will have a value
  return match;
};

const Links = () => (
  <nav>
    {/*
      We need exact here to prevent the home NavLink being set as active whenever
      children are active. Useful when you want a parent active, but disabled with
      exact in the same way that a Route is disabled from matching when it has the
      'exact' prop
    */}
    <NavLink exact activeClassName="active" to="/">
      Home
    </NavLink>{' '}
    {/*
      activeStyle prop can be used instead of activeClassName
    */}
    <NavLink activeStyle={{color: 'green'}} to="/about">
      About
    </NavLink>{' '}
    {/*
      If more flexibility is required then we can use the isActive prop which
      expects a predicate function.

      The function accepts (match, location)
    */}
    <NavLink isActive={isActive} to="/contact">
      Contact
    </NavLink>
  </nav>
);

const App = () => (
  <Router>
    <div>
      <Links />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
    </div>
  </Router>
);

export default App;
