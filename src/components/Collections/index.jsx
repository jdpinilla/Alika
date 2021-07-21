import React, { useContext, useState } from 'react';
import Collection from '../Collection';
import AppContext from '../../context/AppContext';
import '../styles/Collections.css';
import Slider from 'react-slick';
import Banner from '../Banner';

const settings = {
  dots: true,
  focusOnSelect: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 3000,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
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
const Collections = () => {
  const { state } = useContext(AppContext);
  const { categories } = state;

  return (
    <div className="Collection">
      <div className="transition">
        <Banner />
      </div>
      <div className="Carousel">
        <Slider {...settings}>
          {categories.map((category) => (
            <Collection key={category.id} category={category} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Collections;
