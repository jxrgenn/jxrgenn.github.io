import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import image1 from '../../assets/images/8.jpg';
import image2 from '../../assets/images/9.jpg';
import image3 from '../../assets/images/10.jpg';
import { motion } from 'framer-motion'; 

export const Hero = () => {
  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 0,           // No delay between transitions
    infinite: true,
    speed: 15000,               // Duration for one full scroll (adjust as needed)
    cssEase: 'linear',          // Linear easing for smooth continuous scroll
    rtl: true,                  // Images slide in from the right.
    arrows: false,
    dots: false,
    slidesToShow: 2,            // Default: 3 images on wide screens.
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,      // Laptop screens: 3 images.
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,      // Tablet screens: show 1 full slide,
          centerMode: true,     // with center mode to reveal adjacent slides (roughly 1.5 visible).
          centerPadding: '25%', // Adjust for the desired "1.5 slides" effect.
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,      // Mobile screens: show 1 slide.
          centerMode: true,
          centerPadding: '20%',
        },
      },
    ],
  };

  const images = [image1, image2, image3];

  return (
    <>
       <style>
      {`
        @media (max-width: 880px) {
          .hero-wrapper {
            height: 85vh !important;
          }
        }
      `}
      </style>
      {/* Wrapper to center the hero-container on mobile */}
      <div id="heroEvents">
      <div className="hero-wrapper" style={{ height: '90vh', transform: 'translateY(100px)' }}>
        <div 
          className="hero-container" 
          style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}
        >
          <Slider {...sliderSettings}>
            {images.map((img, index) => (
              <div key={index}>
                <img 
                  src={img} 
                  alt={`Slide ${index + 1}`} 
                  style={{ 
                    width: '100%', 
                    height: '75vh', // Images take up 60% of the container vertically
                    objectFit: 'cover', 
                    filter: 'brightness(50%)' 
                  }} 
                />
              </div>
            ))}
          </Slider>
          
          {/* Text overlay stays centered relative to the hero-container */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 3 }} 
            style={{
              position: 'absolute',
              top: '40%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: '#fff',
              textAlign: 'center',
              zIndex: 2,
              padding: '0 20px'
            }}
          >
            <h1>BlackSheep EVENTS</h1>
            <p>Focus on having fun, we will focus on creating life-lasting memories.</p>
          </motion.div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Hero;
