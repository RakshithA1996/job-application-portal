import React, { Component } from "react";
import Slider from "react-slick";
import { browserSupportability, imageBaseUrl } from "../../utils/constant";
import RishabPic from "../../images/jobApplication/rishab.jpeg"
import NandiniPic from "../../images/jobApplication/nandini.jpeg"
import harshPic from "../../images/jobApplication/harsh.jpeg"


class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      speed: 1000,
      autoplaySpeed: 5000,
      cssEase: "linear",
      pauseOnHover: true,
    };

    const isWebpSupported = browserSupportability();
    return (
      <Slider {...settings}>

      </Slider>
    );
  }
}

export default Carousel;
