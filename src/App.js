import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Home = () => <h1>Home</h1>;
const Menu = () => (
  <div>
    <h1>Menu</h1>

    <Link to="/menu/food">Food</Link>
    <Link to="/menu/drinks">Drinks</Link>
    <Link to="/menu/sides">Sides</Link>

    {/*
      Nest a route inside this component that will match the above
    */}
    <Route
      path="/menu/:section"
      render={({match}) => <h2>{match.params.section}</h2>}
    />
  </div>
);

const App = () => (
  <Router>
    <div>
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Route exact path="/" component={Home} />
      <Route path="/menu" component={Menu} />
    </div>
  </Router>
);

export default App;
