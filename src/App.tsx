import React from 'react';
import { Router, RouteComponentProps, Link } from '@reach/router';
import './App.css';

const Page: React.FC<RouteComponentProps> = () => (
  <div>
    <p>
      This is an example page which is not a root page so a crawler should be
      clever
      <br />
      enough to follow internal links and index this content
    </p>
  </div>
);

const Home: React.FC<RouteComponentProps> = () => {
  return (
    <div>
      <p>
        Simple routing using @reach/router is added to see how other routes will
        be indexed.
        <br />
      </p>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <p>
          This is a test project which will show how React applications are
          indexed by the Google engine.
          <br />
          This project has no SSR (Server Side Rendering).
          <br />
        </p>
      </header>
      <nav>
        <div>
          <Link to="/">Homepage</Link>
        </div>
        <div>
          <Link to="/page">Subpage</Link>
        </div>
      </nav>
      <main>
        <Router>
          <Home path="/" />
          <Page path="/page" />
        </Router>
      </main>
    </div>
  );
};

export default App;
