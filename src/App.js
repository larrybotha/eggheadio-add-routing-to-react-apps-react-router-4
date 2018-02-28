import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <Route path="/page" render={() => <h1>Page</h1>} />
    </div>
  </Router>
);

export default App;
