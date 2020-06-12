import React from "react";
import {
  NoticeBoard,
  Recommendation,
  SearchByTag,
  BuyLocalCurrency,
} from "../pages/board";

import { Route } from "react-router-dom";

import { Container } from "react-bootstrap";

const BoardContainer = () => (
  <Container>
    <Route path="/board" exact>
      <NoticeBoard />
    </Route>

    <Route path="/board/recommendation">
      <Recommendation />
    </Route>

    <Route path="/board/search-by-tag">
      <SearchByTag />
    </Route>

    <Route path="/board/buy-local-currency">
      <BuyLocalCurrency />
    </Route>
  </Container>
);

export default BoardContainer;
