import React from "react";

import Home from "../Home/Home";
import Saved from "../Saved/Saved";

import { Switch, Route } from "react-router-dom";
const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/saved">
          <Saved />
        </Route>
      </Switch>
    </>
  );
};
export default Routes;
