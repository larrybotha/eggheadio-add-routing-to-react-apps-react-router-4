import React from 'react';
import {
  BrowserRouter,
  HashRouter,
  MemoryRouter,
  StaticRouter,
  Route,
  Link,
} from 'react-router-dom';

const Links = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </nav>
);

const LinksRoutes = () => (
  <div>
    <Links />
    <Route exact path="/" render={() => <h1>Home</h1>} />
    <Route exact path="/about" render={() => <h1>About</h1>} />
  </div>
);

const forceRefresh = () => {
  console.log(new Date());

  return false;
};

// meant to be used with HTML5 history API
const BrowserRouterApp = () => (
  // forceRefresh accepts a boolean. When true, the entire app will rerender
  <BrowserRouter forceRefresh={forceRefresh()}>
    <LinksRoutes />
  </BrowserRouter>
);
