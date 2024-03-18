import React from 'react';
import AutoImageSlider from './AutoImageSlider';

const CategoryCard = () => {
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
    './images/electronics.jpg',
  ];

  return (
    <div>
      <AutoImageSlider images={images} />
    </div>
  );
};

export default React.memo(CategoryCard);
