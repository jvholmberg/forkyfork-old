import React, { Component } from 'react';

import { Hero, Fab, FabGroup, Section, NavStrip } from '../../components';

import './reset.css';
import './style.css';

class App extends Component {
  constructor() {
    super();
      this.state = {
        open: false,
      };
      this.toggleNav = this.toggleNav.bind(this);
  }
  toggleNav() {
    this.setState({open: !this.state.open});
  }
  render() {
    return (
      <div className="App app">
        <Hero>
          <h1>forkyfork</h1>
          <p>enables your happiness</p>
        </Hero>
      </div>
    );
  }
}
export default App;
