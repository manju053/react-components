import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Routes from './router/router';


function App() {
  return (
    // <BrowserRouter>

      <div className="App">
        <Header />
        <Routes />

      </div>
    // </BrowserRouter>

  );
}

export default App;
