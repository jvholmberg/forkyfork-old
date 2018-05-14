import React, { Component } from 'react';

import './reset.css';
import './style.css';

import Landing from '../Landing';
import { Navbar } from '../../components';

class App extends Component {
  render() {
    return (
      <div className="App app">
        <Landing />
      </div>
    );
  }
}

export default App;
