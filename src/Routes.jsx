import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Create from './components/Create';

export default () => (
  <Switch>
    <Route path="/:contactId/edit">
      <Create />
    </Route>
    <Route path="/create">
      <Create />
    </Route>
    <Route path="/">
      <Dashboard />
    </Route>
  </Switch>
);