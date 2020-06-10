import React from 'react';
import { Route } from 'react-router-dom';

import { MapContainer } from '../containers';

const Main = () => (
    <Route path="/map"><MapContainer /></Route>
)

export default Main;