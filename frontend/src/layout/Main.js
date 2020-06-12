import React from "react";
import { Route } from "react-router-dom";

import { MapContainer, BoardContainer } from "../containers";

const Main = () => (
  <>
    <Route path="/map">
      <MapContainer />
    </Route>
    <Route path="/board">
      <BoardContainer />
    </Route>
  </>
);

export default Main;
