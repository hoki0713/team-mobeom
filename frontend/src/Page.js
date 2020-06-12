import React from "react";
import { Switch, Route } from "react-router-dom";
import { SplashPageContainer } from "./containers";
import { Header, NavBar, Main } from './layout';

const Page = () => (
  <Switch>
    <Route path="/" exact>
      <SplashPageContainer />
    </Route>
    <Route>
        <Header />
        <NavBar />
        <Main />
    </Route>
  </Switch>
);

export default Page;
