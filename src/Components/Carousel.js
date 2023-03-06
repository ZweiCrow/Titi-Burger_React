import React from "react";
import Slider from "react-slick";


const Carousel = () => {
  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    row: 1,
    slidesPerRow: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      }
    ]
  }

  return (
    <>
      <Slider {...settings}>
        <img src="./image/Darko.png" alt="" />
        <img src="./image/Tropica.png" alt="" />
        <img src="./image/Sheriff.png" alt="" />
        <img src="./image/Tropica.png" alt="" />
        <img src="./image/Sheriff.png" alt="" />
        <img src="./image/Darko.png" alt="" />
        <img src="./image/Tropica.png" alt="" />
        <img src="./image/Darko.png" alt="" />
        <img src="./image/Sheriff.png" alt="" />
      </Slider>
    </>
  );
};

export default Carousel;