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

// when we don't need to support the HTML5 history API we can use the hash router
const HashRouterApp = () => (
  // when hashType is slash (default) a slash is appended to the hash.
  // when hashType is noslash, there is no slash after the hash.
  // hashbang is another option supporting old methods for SEO
  <HashRouter hashType="noslash">
    <LinksRoutes />
  </HashRouter>
);

// MemoryRouter is an entirely in-memory Router, used primarily for testing.
// Changes to routes don't show in the URL bar
const MemoryRouterApp = () => (
  // initialEntries specifices the different paths
  // initialIndex specifies the index of the entry to render
  <MemoryRouter initialEntries={['/', '/about']} initialIndex={1}>
    <LinksRoutes />
  </MemoryRouter>
);

// used for server-side rendering
const StaticRouterApp = () => (
  // as with MemoryRouter, location sets the initial path of the app.
  // context represents the URL that the server would have received
  <StaticRouter location="/about" context={{}}>
    <LinksRoutes />
  </StaticRouter>
);

export default StaticRouterApp;
