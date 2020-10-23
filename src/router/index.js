import React from 'react';
import {  Route, Switch } from 'react-router-dom';
import Home from '../components/home/Home';
import Login from '../components/login/Login';


const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
        </Switch>
    )
}

export default Routes;