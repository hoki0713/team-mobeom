import React from "react";
import {Route} from "react-router-dom";

import {MapContainer, BoardContainer, AccountContainer} from "../containers";

const Main = () => (
    < >
    < Route
path = "/map" >
    < MapContainer / >
    < /Route>
    < Route
path = "/board" >
    < BoardContainer / >
    < /Route>
    < Route
path = "/account" >
    < AccountContainer / >
    < /Route>
    < />
)
;

export default Main;
