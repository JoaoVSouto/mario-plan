import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';

import 'materialize-css/dist/css/materialize.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
