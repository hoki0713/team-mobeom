import React from 'react';
import {Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';

import {Login, TermAndCondition} from '../pages/account';


const AccountContainer = () => (
    < Container >
    < Route
path = "/account/login" >
    < Login / >
    < /Route>
    < Route
path = "/account/term-n-condition" >
    < TermAndCondition / >
    < /Route>

    < /Container>
)
;

export default AccountContainer;