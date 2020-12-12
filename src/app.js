import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import { Home } from "./home";
import { Web } from "./web";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/web" component={Web} />
        <Route path="/piano" component={Home} />
        <Route path="/artist" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};
