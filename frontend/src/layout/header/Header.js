import React from "react";
import "./Header.css";
import {
    Container,
    Row,
    Col,
    InputGroup,
    FormControl,
    Button,
} from "react-bootstrap";
import {Link} from "react-router-dom";

const Header = () => (
    < Container >
    < Row >
    < Col
xs
lg = "2" >
    < img
id = "header-logo"
src = "https://res.cloudinary.com/hoki0713/image/upload/v1591798057/team-mobeom/money-logo2_q9xqve.svg"
alt = "brand logo"
    / >
    < /Col>

    < Col >
    < InputGroup
className = "mt-5 w-75 mx-auto" >
    < FormControl
placeholder = "Search"
aria - label = "Recipient's username"
aria - describedby = "basic-addon2"
    / >
    < InputGroup.Append >
    < Link
to = "/map" >
    < Button
variant = "outline-secondary" > Search < /Button>
    < /Link>
    < /InputGroup.Append>
    < /InputGroup>
    < /Col>
    < Col
xs
lg = "2"
className = "mx-auto mt-5" >
    < Link
to = "/account/login" >
    < Button
variant = "btn-link btn-sm" > 로그인 < /Button>
    < /Link>
    < Link
to = "/account/term-n-condition" >
    < Button
variant = "btn-link btn-sm" > 회원가입 < /Button>
    < /Link>
    < /Col>
    < /Row>
    < /Container>
)
;

export default Header;
