/**
 * Created by Kevin on 16/8/8.
 */
// require lib
import React, {Component} from "react";
import ReactDOM from 'react-dom';
// import { Router, Route, hashHistory } from 'react-router';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from './page/Home';
import Info from './page/Info';
import Login from './page/Login';
import Detail from './page/Detail';
import Decorator from './page/Decorator';

const CustomRouter = (
    <HashRouter>
        <Switch>
            <Route path='/login' component={Login} />
            <Route path='/home' component={Home} />
            <Route path='/info' component={Info} />
            <Route path='/person-info' component={Detail} />
            <Route path='/decorator' component={Decorator} />
        </Switch>
    </HashRouter>
);

ReactDOM.render(
    CustomRouter,
    document.getElementById('app-root')
);