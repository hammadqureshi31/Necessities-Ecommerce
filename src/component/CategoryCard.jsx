import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CategoryCard() {

  return (
    <div className="desktop-carousel-container">
      <Carousel>
        <Carousel.Item >
          <div className="carousel-item-wrapper">
            <img
              className="w-96 object-cover md:block h-96 mr-2 2xl:mr-12 2xl:h-[450px] 2xl:w-[450px]"
              src='/images/manpaying.webp'
              alt="Second slide"
            />
            <img
              className="hidden w-96 object-cover md:block h-96 mr-2 2xl:mr-12 2xl:h-[450px] 2xl:w-[450px]"
              src='/images/menswear.webp'
              alt="First slide"
            />
            <img
              className="hidden w-96 object-cover md:block h-96 2xl:mr-12 2xl:h-[450px] 2xl:w-[450px]"
              src='/images/manshopping.webp'
              alt="Second slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item >
          <div className="carousel-item-wrapper">
            <img
              className="d-block w-96 object-cover h-96 mr-2 2xl:mr-12 2xl:h-[450px] 2xl:w-[450px]"
              src='/images/menswear.webp'
              alt="First slide"
            />
            <img
              className="hidden w-96 object-cover md:block h-96 mr-2 2xl:mr-12 2xl:h-[450px] 2xl:w-[450px]"
              src='/images/manshopping.webp'
              alt="Second slide"
            />
            <img
              className="hidden w-96 object-cover md:block h-96 2xl:mr-12 2xl:h-[450px] 2xl:w-[450px]"
              src='/images/markus.webp'
              alt="Second slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item >
          <div className="carousel-item-wrapper">
            <img
              className="d-block w-96 object-cover h-96 mr-2 2xl:mr-12 2xl:h-[450px] 2xl:w-[450px]"
              src='/images/manshopping.webp'
              alt="Second slide"
            />
            <img
              className="hidden w-96 object-cover md:block h-96 mr-2 2xl:mr-12 2xl:h-[450px] 2xl:w-[450px]"
              src='/images/markus.webp'
              alt="First slide"
            />
            <img
              className="hidden w-96 object-cover md:block h-96 mr-2 2xl:mr-12 2xl:h-[450px] 2xl:w-[450px]"
              src='/images/chris.webp'
              alt="First slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item >
          <div className="carousel-item-wrapper">
            <img
              className="hidden w-96 object-cover md:block h-96 mr-2 2xl:mr-12 2xl:h-[450px] 2xl:w-[450px]"
              src='/images/markus.webp'
              alt="Second slide"
            />
            <img
              className="d-block w-96 object-cover h-96 mr-2 2xl:mr-12 2xl:h-[450px] 2xl:w-[450px]"
              src='/images/chris.webp'
              alt="First slide"
            />
            <img
              className="hidden w-96 object-cover md:block h-96 mr-2 2xl:mr-12 2xl:h-[450px] 2xl:w-[450px]"
              src='/images/leftbag.webp'
              alt="First slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item >
          <div className="carousel-item-wrapper">
            <img
              className="hidden w-96 object-cover md:block h-96 mr-2 2xl:mr-12 2xl:h-[450px] 2xl:w-[450px]"
              src='/images/chris.webp'
              alt="Second slide"
            />
            <img
              className="d-block w-96 object-cover h-96 mr-2 2xl:mr-12 2xl:h-[450px] 2xl:w-[450px]"
              src='/images/leftbag.webp'
              alt="First slide"
            />
            <img
              className="hidden w-96 object-cover md:block h-96 mr-2 2xl:mr-12 2xl:h-[450px] 2xl:w-[450px]"
              src='/images/rightbag.webp'
              alt="First slide"
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CategoryCard;
