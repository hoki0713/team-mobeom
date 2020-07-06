import React from "react";
import {Switch, Route} from "react-router-dom";
import {SplashPageContainer, AccountContainer} from "./containers";
import {Header, NavBar, Main} from './layout';

const Page = () => (
    < Switch >
    < Route
path = "/"
exact >
< SplashPageContainer / >
< /Route>
< Route
path = "/account" >
    < AccountContainer / >
    < /Route>
    < Route >
    < Header / >
    < NavBar / >
    < Main / >
    < /Route>
    < /Switch>
)
;

export default Page;
