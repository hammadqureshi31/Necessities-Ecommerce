import React, { useState, useEffect } from 'react';

const AutoImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="image-slider-container">
      <div className="image-slider">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className={index === currentIndex ? 'active' : ''}
            style={{
              maxHeight: '300px', 
              width: 'auto',
              margin: 'auto'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoImageSlider;
