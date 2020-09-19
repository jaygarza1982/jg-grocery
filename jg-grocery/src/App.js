import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import NavBar from './components/NavBar';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
            <NavBar />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/home" component={Home} />
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
