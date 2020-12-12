import React from "react";
import { Switch, Route } from "react-router-dom";
import "./Content.css";
import Home from '../../views/exemples/Home';
import About from '../../views/exemples/About';
import Param from '../../views/exemples/Param';
import NotFound from '../../views/exemples/NotFound';

const Content = (props) => {
  return (
    <main className="Content">
      <Switch>
      <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/param/:id">
          <Param />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </main>
  );
};

export default Content;
