import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

// Import your images
import crousel1 from '../Assets/crousel2.jpeg';
import crousel2 from '../Assets/crousel1.jpeg';
import crousel3 from '../Assets/crousel3.jpeg';
import crousel4 from '../Assets/crousel4.jpeg';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Example of using FontAwesome icons

const Home = () => {
  return (
    <div>

      <Carousel
        renderArrowPrev={(clickHandler, hasPrev) =>
          hasPrev && (
            <div onClick={clickHandler} style={arrowStyle('left')}>
              <FaArrowLeft />
            </div>
          )
        }
        renderArrowNext={(clickHandler, hasNext) =>
          hasNext && (
            <div onClick={clickHandler} style={arrowStyle('right')}>
              <FaArrowRight />
            </div>
          )
        }
      >
        <div>
          <img src={crousel1} alt="Slide 1" className="carousel-image" />
          <p className="legend">Slide 1</p>
        </div>
        <div>
          <img src={crousel2} alt="Slide 2" className="carousel-image" />
          <p className="legend">Slide 2</p>
        </div>
        <div>
          <img src={crousel3} alt="Slide 3" className="carousel-image" />
          <p className="legend">Slide 3</p>
        </div>
        <div>
          <img src={crousel4} alt="Slide 4" className="carousel-image" />
        </div>
      </Carousel>
    </div>
  );
};

// Styling for the custom arrows
const arrowStyle = (direction) => ({
  position: 'absolute',
  top: '50%',
  [direction]: '15px', // Place the arrows on left or right
  zIndex: 100,
  fontSize: '30px',
  color: 'white',
  cursor: 'pointer',
  transform: 'translateY(-50%)',
  padding: '10px',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  borderRadius: '50%',
});

// CSS for ensuring images fit in the carousel
const styles = {
  '.carousel-image': {
    width: '100%',
    height: 'auto',
    objectFit: 'cover', // Ensures the image maintains its aspect ratio and covers the container
  },
};

export default Home;
