import React, { Component } from 'react';
import {Route, withRouter } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Signin from './auth/Login.js';
// import Users from './auth/Users.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Authentication</h1>
        </header>
        <div>
          <Route path="/login" component={Signin} />
          {/*<Route path="/login" component={Jokes} />*/}
          <Route />
        </div>
      </div>
    );
  }
}

export default withRouter (App);
