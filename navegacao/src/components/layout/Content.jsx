import React from "react";
import { Switch, Route } from "react-router-dom";
import "./Content.css";
import Home from '../../views/exemples/Home';
import About from '../../views/exemples/About';

const Content = (props) => {
  return (
    <main className="Content">
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </main>
  );
};

export default Content;
