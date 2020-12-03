import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import { Home } from "./home";
import { Piano } from "./piano";
import { Web } from "./web";
import { Artist } from "./artist";
export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/web" component={Web} />
        <Route path="/piano" component={Piano} />
        <Route path="/artist" component={Artist} />
      </Switch>
    </BrowserRouter>
  );
};
