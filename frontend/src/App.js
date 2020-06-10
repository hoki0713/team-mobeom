import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Page from './Page';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => (
  <BrowserRouter>
    <Page />
  </BrowserRouter>
);


export default App;
