import React from "react";
import {Route} from 'react-router-dom';
import {Map, MapList, FindBestRoute} from "../pages/map";

import {Container} from "react-bootstrap";

const MapContainer = () => (
    < Container >
    < Route
path = "/map"
exact > < Map / > < /Route>
< Route
path = "/map/list" > < MapList / > < /Route>
    < Route
path = "/map/route" > < FindBestRoute / > < /Route>
    < /Container>
)
;

export default MapContainer;
