import React from 'react';
import {BrowserRouter as Router, Route, Link, Prompt} from 'react-router-dom';

const Links = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/form">Form</Link>
  </nav>
);

const Home = () => <h1>Home</h1>;
class Form extends React.Component {
  state = {dirty: false};

  handleInput = () => {
    this.setState({dirty: true});
  };

  render() {
    return (
      <div>
        <h1>Form</h1>

        <form>
          {/*
            Will show prompt if route changes and 'when' is true
          */}
          <Prompt when={this.state.dirty} message="Lose unsaved changes?" />

          <input onInput={this.handleInput} />
        </form>
      </div>
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
