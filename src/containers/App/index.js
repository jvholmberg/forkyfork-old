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
          <p>makes you happy</p>
        </Hero>
        <NavStrip
          position='left'
          open={this.state.open}
          action={(
            <Fab
              icon='fas fa-bars'
              bgColor='#fff'
              color='#33333d'
              onClick={this.toggleNav} />
          )}>
          <Fab
            icon='far fa-comment-alt'
            bgColor='#fff'
            color='#33333d'
            title='Contact me' />
          <Fab
            icon='fas fa-code-branch'
            bgColor='#fff'
            color='#33333d'
            title='Work' />
          <Fab
            icon='fas fa-chart-pie'
            bgColor='#fff'
            color='#33333d'
            title='Skills' />
          <Fab
            icon='fas fa-ellipsis-h'
            bgColor='#fff'
            color='#33333d'
            title='More' />
        </NavStrip>
        <Hero>
          <h3>Who am i?</h3>
          <p>
            My name is Johan Holmberg and I live in Gothenburg where I'm working
            at Sigma ITC as an Frontend developer. I specializes mainly in React
            but as a fast learner who loves challenges I often venture outside
            of the React ecosystem.
          </p>

        </Hero>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}
export default App;
