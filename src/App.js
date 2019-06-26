import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import CreateProject from './components/projects/CreateProject';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={CreateProject} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
