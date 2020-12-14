import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/home/Home';
import Login from '../components/login/Login';
import Rating from '../components/shared/rating/rating';


const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={Home} />
            {/* <Route exact path={`${path}`} render={() => <Rating />} /> */}
        </Switch>
    )
}

export default Routes;