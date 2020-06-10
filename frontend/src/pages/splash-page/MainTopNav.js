import React from "react";
import { Container, Nav } from "react-bootstrap";

const MainTopNav = () => (
  <Container>
    <Nav className="justify-content-end" activeKey="/home">
      <Nav.Item>
        <Nav.Link to="/">Sign In</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="/">Sign Up</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="/">
          <img
            src="https://res.cloudinary.com/hoki0713/image/upload/v1591799423/team-mobeom/menu-24px_zoo6w7.svg"
            alt="menu"
          />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="/">
          <img
            src="https://res.cloudinary.com/hoki0713/image/upload/v1591799549/team-mobeom/question_answer-24px_ca4ypd.svg"
            alt="chatbot"
          />
        </Nav.Link>
      </Nav.Item>

    </Nav>
  </Container>
);

export default MainTopNav;
