import React from "react";
import { Container, Row } from "react-bootstrap";

import "./MainMap.css";

const MainMap = () => (
  <Container>
    <Row className="justify-content-md-center">
       <img
        id="gyeonggi-map"
        src="https://res.cloudinary.com/hoki0713/image/upload/v1591798040/team-mobeom/gyeonggi-map_kxok4a.png"
        alt="Gyeonggi map"
      />
    </Row>
  </Container>
);

export default MainMap;
