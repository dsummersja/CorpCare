import React, { Component } from "react";
import Slider from "react-slick";
import advantage from '../img/advantage.png'
import bcic from '../img/bcic.png'
import gustazos from '../img/gustazos.png'
import icd from '../img/icd.png'
import myf from '../img/myf.png'
import wihcon from '../img/wihcon.png'
import wihconpsl from '../img/wihconpsl.png'

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: "linear",
      speed: 3000,
      slidesToShow: 4,
      slidesToScroll: 1,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={gustazos} alt="Gustazo's Logo"/>
          </div>
          <div>
            <img src={icd} alt="ICD's Logo" />
          </div>
          <div>
             <img src={myf} alt="The MultiCare Youth Foundation's Logo" />
          </div>
          <div>
            <img src={wihcon} alt="WIHCON's Logo" />
          </div>
          <div>
          <img src={wihconpsl} alt="Wihcon Property Service's Logo" />
          </div>
          <div>
          <img src={bcic} alt="BCIC's Logo" />
          </div>
          <div>
          <img src={advantage} alt="Advantage Communication's Logo" />
          </div>
        </Slider>
      </div>
    );
  }
}