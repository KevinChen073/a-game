/**
 * Created by Kevin on 16/8/8.
 */
// require lib
import React, {Component} from "react";
import ReactDOM from 'react-dom';
// import { Router, Route, hashHistory } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './page/Home';
import Info from './page/Info';
import Login from './page/Login';

const CustomRouter = (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={Login} />
            <Route path='/home' component={Home} />
            <Route path='/info' component={Info} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(
    CustomRouter,
    document.getElementById('app-root')
);