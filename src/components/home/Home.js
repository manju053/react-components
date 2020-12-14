import React from 'react'
import Routes from '../../router/router2'
import SideNav from '../sidenav/SideNav';
import { BrowserRouter as Router, useRouteMatch, withRouter } from 'react-router-dom';
import './Home.scss';

function Home() {
    let { path, url } = useRouteMatch();
    console.log("path, url", path, url);
    return (

        <Router>


        <div className="home-wrapper">
            <div className="sidenav-wrapper">
                <SideNav url={url} />

            </div>

                <div className="main-wrapper">
                    <Routes path={path} />
                </div>

        </div>
        </Router>


    )
}

export default withRouter(Home)
