import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Link} from 'react-router-dom';

const Links = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/form">Form</Link>
  </nav>
);

const Home = () => <h1>Home</h1>;
class Form extends React.Component {
  state = {};

  render() {
    return (
      <form>
        <input />
      </form>
    );
  }
}

const App = () => (
  <Router>
    <div>
      <Links />
      <Route exact path="/" component={Home} />
      <Route exact path="/form" component={Form} />
    </div>
  </Router>
);

export default App;
