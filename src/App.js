import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      {/*
        ? makes params optional

        We aren't only restricted to subpaths - we could delimit the params
        using some other delimeter, such as a hyphen:
        /:page?-:subpage?
      */}
      <Route
        path="/:page?/:subpage?"
        render={({match}) => (
          <h1>
            Page: {match.params.page || 'Home'}
            <br />
            SubPage: {match.params.subpage}
          </h1>
        )}
      />
    </div>
  </Router>
);

export default App;
