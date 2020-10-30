import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Create from './components/Create';
import Update from './components/Update';

export default function Routes(props) {
  return (
    <Switch>
      <Route path="/:contactId/edit">
        <Update {...props}/>
      </Route>
      <Route path="/create">
        <Create />
      </Route>
      <Route path="/">
        <Dashboard />
      </Route>
    </Switch>
  )
};