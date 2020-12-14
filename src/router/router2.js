import React from 'react';
import {  Route, Switch } from 'react-router-dom';
import RatingDemo from '../components/rating-container/RatingDemo';
import Carousel from '../components/shared/carousel/Carousel';





const Routes = ({ path }) => {
    console.log("path", path);
    return (
            <Switch>
                {/* <Route   path="/home" render={() => <Rating />} /> */}
                <Route exact path='/home/rating' component={RatingDemo} />
                <Route exact path='/home/carousel' component={Carousel} />
            </Switch>


    )
}

export default Routes;