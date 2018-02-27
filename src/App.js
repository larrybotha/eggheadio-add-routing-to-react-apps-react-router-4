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


export default App;
