import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import pages
import Home from './pages/Home';
import Brands from './pages/Brands';
import Strains from './pages/Strains';

// import components
import Navivation from './components/Navbar';
function App() {
  return (
    <Router>
      <Navivation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/brands">
          <Brands />
        </Route>
        <Route exact path="/strains">
          <Strains />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
