import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CategoryCard() {
  const images = [
    './images/menswear.jpeg',
    './images/womenswear.jpg',
    './images/electronics.jpg',
    './images/jewelery.jpg',
    './images/menswear.jpeg',
    './images/womenswear.jpg',
    './images/electronics.jpg',
    './images/jewelery.jpg',
    './images/menswear.jpeg',
    './images/womenswear.jpg',
  ];


  return (
    <div className="desktop-carousel-container">
      <Carousel>
        <Carousel.Item >
          <div className="carousel-item-wrapper">
            <img
              className="d-block w-96 object-cover h-96 mr-2"
              src='./images/menswear.jpeg'
              alt="First slide"
            />
            <img
              className="hidden  w-96 object-cover md:block h-96 mr-2"
              src='./images/womenswear.jpg'
              alt="Second slide"
            />
            <img
              className="hidden  w-96 object-cover md:block h-96 "
              src='./images/electronics.jpg'
              alt="Second slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item >
          <div className="carousel-item-wrapper">
            <img
              className="d-block w-96 object-cover h-96 mr-2"
              src='./images/womenswear.jpg'
              alt="First slide"
            />
            <img
              className="hidden w-96 object-cover md:block h-96 mr-2"
              src='./images/electronics.jpg'
              alt="Second slide"
            />
            <img
              className="hidden w-96 object-cover md:block h-96"
              src='./images/jewelery.jpg'
              alt="Second slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item >
          <div className="carousel-item-wrapper">
            <img
              className="d-block w-96 object-cover h-96 mr-2"
              src='./images/electronics.jpg'
              alt="Second slide"
            />
            <img
              className="hidden w-96 object-cover md:block h-96 mr-2"
              src='./images/womenswear.jpg'
              alt="First slide"
            />
            <img
              className="hidden w-96 object-cover md:block h-96 mr-2"
              src='./images/menswear.jpeg'
              alt="First slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item >
          <div className="carousel-item-wrapper">
            <img
              className="hidden w-96 object-cover md:block h-96 mr-2"
              src='./images/jewelery.jpg'
              alt="Second slide"
            />
            <img
              className="d-block w-96 object-cover h-96 mr-2"
              src='./images/menswear.jpeg'
              alt="First slide"
            />
            <img
              className="hidden w-96 object-cover md:block h-96 mr-2"
              src='./images/womenswear.jpg'
              alt="First slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item >
          <div className="carousel-item-wrapper">
            <img
              className="hidden w-96 object-cover md:block h-96 mr-2 "
              src='./images/electronics.jpg'
              alt="Second slide"
            />
            <img
              className="d-block w-96 object-cover h-96 mr-2"
              src='./images/jewelery.jpg'
              alt="First slide"
            />
            <img
              className="hidden w-96 object-cover md:block h-96 mr-2 "
              src='./images/menswear.jpeg'
              alt="First slide"
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CategoryCard;
