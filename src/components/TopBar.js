import React, { Component } from 'react';
import '../App.css';
import bouquet from '../img/bouquet.png';
import anime from 'animejs';
import { topAnimation } from '../animation.js';

class TopBar extends Component {
  componentDidMount() {
    topAnimation();
  }

  render() {
    console.log(this.props)
    return (
      <div className="canvas">
        <div className="firstStripe">
          <div className="ml5">
            <span className="text-wrapper titleText">
              <span className="line line1" />
              <span className="letters letters-left">Miracle</span>
              <span className="letters ampersand">
                <img className="bouquet" src={bouquet} />
              </span>
              <span className="letters letters-right">Makeup</span>
              <span className="line line2" />
            </span>
          </div>
        </div>

        <div className="navBarContainer">
          <div className="navBar">
            <div className="navButton" onClick={()=>{this.props.chooseView("home")}}>home</div>
            <div className="navButton" onClick={()=>{this.props.chooseView("portfolio")}}>portfolio</div>
            <div className="navButton" onClick={()=>{this.props.chooseView("about")}}>about me</div>
            <div className="navButton" onClick={()=>{this.props.chooseView("contact")}}>contact me</div>
            <div className="navButton" onClick={()=>{this.props.chooseView("entry")}}>sweepstakes entry</div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopBar;
