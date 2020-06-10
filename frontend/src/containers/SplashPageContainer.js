import React from "react";
import { Container, Row } from "react-bootstrap";

import { MainLogo, MainSearchBar, MainMap, MainTopNav } from "../pages/splash-page";

const SplashPageContainer = () => (
  <Container fluid>
    <Row>
      <MainTopNav />
    </Row>
    <Row>
      <MainLogo />
    </Row>
    <Row>
      <MainSearchBar />
    </Row>
    <Row>
      <MainMap />
    </Row>
  </Container>
);

export default SplashPageContainer;
