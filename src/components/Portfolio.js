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
          <img className="eachPortfolioPicture" id="portPic1" src={makeup1} />
          <img className="eachPortfolioPicture" id="portPic2" src={makeup2} />
          <img className="eachPortfolioPicture" id="portPic3" src={makeup3} />
        </div>
        <div className="portColumn2">
          <img className="eachPortfolioPicture" id="portPic4" src={makeup2} />
          <img className="eachPortfolioPicture" id="portPic5" src={makeup1} />
          <img className="eachPortfolioPicture" id="portPic6" src={makeup3} />
        </div>
        <div className="portColumn3">
          <img className="eachPortfolioPicture" id="portPic7" src={makeup3} />
          <img className="eachPortfolioPicture" id="portPic8" src={makeup2} />
          <img className="eachPortfolioPicture" id="portPic9" src={makeup1} />
        </div>

        <div className="portColumn4">
          <img className="eachPortfolioPicture" id="portPic10" src={makeup3} />
          <img className="eachPortfolioPicture" id="portPic11" src={makeup2} />
          <img className="eachPortfolioPicture" id="portPic12" src={makeup1} />
        </div>

        <div className="portColumn5">
          <img className="eachPortfolioPicture" id="portPic13" src={makeup3} />
          <img className="eachPortfolioPicture" id="portPic14" src={makeup2} />
          <img className="eachPortfolioPicture" id="portPic15" src={makeup1} />
        </div>
      </div>
    );
  }
}

export default Portfolio;
