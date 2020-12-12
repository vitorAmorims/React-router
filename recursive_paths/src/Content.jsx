import React from "react";
import { Switch, Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import Person from "./component/Person";

export default function RecursiveExample() {
  return (
    <Router>
      <Switch>
        <Route path="/:id">
          <Person />
        </Route>
        <Route path="/">
          <Redirect to="/0" />
        </Route>
      </Switch>
    </Router>
  );
}
