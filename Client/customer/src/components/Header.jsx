import { Link } from "react-router-dom";
import { assets } from "../assets/assets.js";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Header = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    swipeToSlide: true,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="header">
      <Slider {...settings}>
        <div>
          <img src={assets.banner1} alt="Slide 1" className="d-block w-100" />
        </div>
        <div>
          <img src={assets.banner2} alt="Slide 2" className="d-block w-100" />
        </div>
        <div>
          <img src={assets.banner3} alt="Slide 3" className="d-block w-100" />
        </div>
      </Slider>
    </div>
  );
};

export default Header;
