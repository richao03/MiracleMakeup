import React, { Component } from 'react';
import './css/About.css';
import makeup1 from '../img/makeup1.jpg';
import makeup2 from '../img/makeup2.jpg';
import makeup4 from '../img/makeup4.jpg';
import anime from 'animejs';
import { topAnimation } from '../animation.js';
import Slider from 'react-slick';

class About extends Component {
  componentDidMount() {
    console.log('About on');
  }

  render() {
    var settings = {
      infinite: true,
      speed: 500,
      adaptiveHeight: true,
      focusOnSelect: true,
      centerMode: true,
      arrows: false,
      autoplay: true
      // centerPadding:'100px'
    };
    return (
      <div className="centered">
        <img src={makeup4} className="aboutPicture" />
        <div className="aboutParagraph">
          <h2 align="center">
            This is the story all about how my life got twist turned upside down{' '}
          </h2>
          <h4 align="center">
            And I'd like to take a minute, just sit right there I'll tell you
            how I became the prince of a town called Bel-Air In West
            Philadelphia, born and raised On the playground is where I spent
            most of my days Chillin' out, maxin', relaxin' all cool
          </h4>
        </div>
      </div>
    );
  }
}

export default About;
