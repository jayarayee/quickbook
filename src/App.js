import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route } from 'react-router-dom'
import Nav from './Component/Nav'
import Login from'./Component/Login'
import Home from './Component/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Route exact path="/" render={({ history }) => (
        <Login/>
      )}/>
      </div>
    );
  }
}

export default App;
