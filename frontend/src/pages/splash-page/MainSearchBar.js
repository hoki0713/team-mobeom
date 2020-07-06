import React from "react";
import {Link} from "react-router-dom";
import {Container, InputGroup, FormControl, Button} from "react-bootstrap";

const MainSearchBar = () => (
    < Container >
    < InputGroup
className = "mb-5 w-50 mx-auto" >
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
    < /Container>
)
;

export default MainSearchBar;
