import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Contact = () => <h1>Contact</h1>;

const Links = () => (
  <nav>
    <Link to="/">Home</Link>

    {/*
      we can pass an object through to 'to'
    */}
    <Link to={{pathname: '/about'}}>About</Link>

    {/*
      We can also add a replace prop onto a Link. When doing so, the previous
      URL will be replaced in history, and navigating back will skip the previous
      URL.
    */}
    <Link replace to="/contact">
      Contact
    </Link>
  </nav>
);

const App = () => (
  <Router>
    {/*
      BrowserRouter can only have 1 child, so wrap everything in a div
      */}
    <div>
      <Links />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
    </div>
  </Router>
);

export default App;
