import React, { Component } from 'react';
import logo from '../logo.svg';
import './css/Portfolio.css';
import bouquet from '../img/bouquet.png';
import makeup1 from '../img/makeup1.jpg';
import makeup2 from '../img/makeup2.jpg';
import makeup3 from '../img/makeup3.jpg';
import anime from 'animejs';
import { portfolioAnimation } from '../animation.js';

class Portfolio extends Component {
  componentDidMount() {
    portfolioAnimation();
  }

  render() {
    return (
      <div className="portfolioContainer">
        <div className="portColumn1">
          <div id="portPic1">1</div>
          <div id="portPic2">2</div>
          <div id="portPic3">3</div>
        </div>
        <div className="portColumn2">
          <div id="portPic4">4</div>
          <div id="portPic5">5</div>
          <div id="portPic6">6</div>
        </div>
        <div className="portColumn3">
          <div id="portPic7">7</div>
          <div id="portPic8">8</div>
          <div id="portPic9">9</div>
        </div>

        <div className="portColumn4">
          <div id="portPic10">10</div>
          <div id="portPic11">11</div>
          <div id="portPic12">12</div>
        </div>

        <div className="portColumn5">
          <div id="portPic13">13</div>
          <div id="portPic14">14</div>
          <div id="portPic15">15</div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
