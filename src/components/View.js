import React, { Component } from 'react';
import Portfolio from './Portfolio';
import Home from './Home';

class View extends Component {
  state = {
    where: 'home'
  };
  windowChange() {
    if (this.state.where === 'portfolio') {
      return <Portfolio />;
    } else if (this.state.where === 'home') {
      return <Home />;
    }
  }
  render() {
    {this.windowChange()}
  }
}

export default View

