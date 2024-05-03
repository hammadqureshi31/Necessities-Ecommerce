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
              src='./images/manpaying.jpg'
              alt="Second slide"
            />
            <img
              className="hidden w-96 object-cover md:block h-96 mr-2 2xl:mr-12 2xl:h-[450px] 2xl:w-[450px]"
              src='./images/menswear.jpeg'
              alt="First slide"
            />
            <img
              className="hidden w-96 object-cover md:block h-96 2xl:mr-12 2xl:h-[450px] 2xl:w-[450px]"
              src='./images/manshopping.jpg'
              alt="Second slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item >
          <div className="carousel-item-wrapper">
            <img
              className="d-block w-96 object-cover h-96 mr-2 2xl:mr-12 2xl:h-[450px] 2xl:w-[450px]"
              src='./images/menswear.jpeg'
              alt="First slide"
            />
            <img
              className="hidden w-96 object-cover md:block h-96 mr-2 2xl:mr-12 2xl:h-[450px] 2xl:w-[450px]"
              src='./images/manshopping.jpg'
              alt="Second slide"
            />
            <img
              className="hidden w-96 object-cover md:block h-96 2xl:mr-12 2xl:h-[450px] 2xl:w-[450px]"
              src='./images/markus.jpg'
              alt="Second slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item >
          <div className="carousel-item-wrapper">
            <img
              className="d-block w-96 object-cover h-96 mr-2 2xl:mr-12 2xl:h-[450px] 2xl:w-[450px]"
              src='./images/manshopping.jpg'
              alt="Second slide"
            />
            <img
              className="hidden w-96 object-cover md:block h-96 mr-2 2xl:mr-12 2xl:h-[450px] 2xl:w-[450px]"
              src='./images/markus.jpg'
              alt="First slide"
            />
            <img
              className="hidden w-96 object-cover md:block h-96 mr-2 2xl:mr-12 2xl:h-[450px] 2xl:w-[450px]"
              src='./images/chris.jpg'
              alt="First slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item >
          <div className="carousel-item-wrapper">
            <img
              className="hidden w-96 object-cover md:block h-96 mr-2 2xl:mr-12 2xl:h-[450px] 2xl:w-[450px]"
              src='./images/markus.jpg'
              alt="Second slide"
            />
            <img
              className="d-block w-96 object-cover h-96 mr-2 2xl:mr-12 2xl:h-[450px] 2xl:w-[450px]"
              src='./images/chris.jpg'
              alt="First slide"
            />
            <img
              className="hidden w-96 object-cover md:block h-96 mr-2 2xl:mr-12 2xl:h-[450px] 2xl:w-[450px]"
              src='./images/leftbag.jpg'
              alt="First slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item >
          <div className="carousel-item-wrapper">
            <img
              className="hidden w-96 object-cover md:block h-96 mr-2 2xl:mr-12 2xl:h-[450px] 2xl:w-[450px]"
              src='./images/chris.jpg'
              alt="Second slide"
            />
            <img
              className="d-block w-96 object-cover h-96 mr-2 2xl:mr-12 2xl:h-[450px] 2xl:w-[450px]"
              src='./images/leftbag.jpg'
              alt="First slide"
            />
            <img
              className="hidden w-96 object-cover md:block h-96 mr-2 2xl:mr-12 2xl:h-[450px] 2xl:w-[450px]"
              src='./images/rightbag.jpg'
              alt="First slide"
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CategoryCard;
