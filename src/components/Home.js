import React, { Component } from 'react';
import logo from '../logo.svg';
import './css/Home.css';
import makeup1 from '../img/makeup1.jpg';
import makeup2 from '../img/makeup2.jpg';
import makeup3 from '../img/makeup3.jpg';
import anime from 'animejs';
import Slider from 'react-slick';

class Home extends Component {
  componentDidMount() {}

  render() {
    var settings = {
      infinite: true,
      autoplaySpeed: 5000,
      adaptiveHeight: true,
      focusOnSelect: true,
      centerMode: true,
      arrows: false,
      autoplay: true,
      pauseOnHover: false,
      centerPadding:'35px'
    };
    return (
      <div>
        <Slider className="carouselContainer" {...settings}>
          <div className="eachPicture1"></div>
          <div className="eachPicture2"></div>
          <div className="eachPicture3"></div>
          <div className="eachPicture1"></div>
          <div className="eachPicture2"></div>
          <div className="eachPicture3"></div>
          {/* <img src={makeup1} className="eachPicture" />
          <img src={makeup2} className="eachPicture" />
          <img src={makeup3} className="eachPicture" />
          <img src={makeup1} className="eachPicture" />
          <img src={makeup2} className="eachPicture" />
          <img src={makeup3} className="eachPicture" /> */}
        </Slider>
      </div>
    );
  }
}

export default Home;
