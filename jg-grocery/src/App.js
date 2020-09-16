import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar />
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
      </div>
    );
  }
}

export default App;
