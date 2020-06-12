import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavBar = () => (
  <Container>
    <Navbar bg="light" variant="light">
      <Nav className="mr-auto">
        <NavDropdown title="가맹점 찾기" className="ml-5 nav-link mr-5">
          <NavDropdown.Item>
            <Link className="nav-link" to="/map">
              지도에서 찾아보기
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link className="nav-link" to="/map/list">
              리스트로 찾아보기
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link className="nav-link" to="/map/route">
              최적경로 찾아보기
            </Link>
          </NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="맞춤추천" className="nav-link mr-5">
          <NavDropdown.Item>
            <Link className="nav-link mr-5" to="/board/recommendation">
              추천가맹점 보기
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link className="nav-link mr-5" to="/board/search-by-tag">
              태그로 검색하기
            </Link>
          </NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="공지사항" className="nav-link mr-5">
          <NavDropdown.Item>
            <Link to="/board" className="nav-link mr-5">
              공지사항
            </Link>
          </NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="지역화폐" className="nav-link mr-5">
          <NavDropdown.Item>
            <Link className="nav-link mr-5" to="/board/buy-local-currency">
              지역화폐 구매하기
            </Link>
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  </Container>
);

export default NavBar;
