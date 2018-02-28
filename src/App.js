import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Contact = () => <h1>Contact</h1>;

const App = () => (
  <Router>
    {/*
      BrowserRouter can only have 1 child, so wrap everything in a div
      */}
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
    </div>
  </Router>
);

export default App;
