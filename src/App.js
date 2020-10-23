import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Routes from './router';
import Home from './components/home/Home';
import Login from './components/login/Login';

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Header />
        <Routes />
        {/* <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
        </Switch> */}


      </div>
    </BrowserRouter>

  );
}

export default App;
