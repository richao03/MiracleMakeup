import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import bouquet from './img/bouquet.png';
import anime from 'animejs';
import { topAnimation } from './animation.js';
import Portfolio from './components/Portfolio';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Entry from './components/Entry';
import TopBar from './components/TopBar';

class App extends Component {
  state = {
    where: 'home'
  };
  componentDidMount() {}

  chooseView(text) {
    this.setState({ where: text });
    console.log(this.state);
  }
  windowChange() {
    if (this.state.where === 'portfolio') {
      return (
        <div className="centered">
          <Portfolio />
        </div>
      );
    } else if (this.state.where === 'home') {
      return <Home />;
    } else if (this.state.where === 'about') {
      return <About />;
    } else if (this.state.where === 'contact') {
      return <Contact />;
    } else if (this.state.where === 'entry') {
      return <Entry />;
    }
  }
  render() {
    return (
      <div>
        <TopBar chooseView={this.chooseView.bind(this)} />
        <div className="viewOfComponent">{this.windowChange()}</div>
      </div>
    );
  }
}

export default App;
