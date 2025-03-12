import React from "react";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";
import image1 from "../../assets/images/wedding1.jpg";
import image2 from "../../assets/images/birthday.webp";
import image3 from "../../assets/images/conference.jpeg";
import image4 from "../../assets/images/Untitleddesign.png";
import image5 from "../../assets/images/podcast.webp";




const services = [
  { title: "Weddings", description: "Cinematic storytelling to capture every emotion and detail of your special day.", image: image1 },
  { title: "Birthdays", description: "Dynamic coverage that turns milestone moments into unforgettable memories.", image: image2 },
  { title: "Conferences", description: "High-production-value recordings to amplify your event’s impact and professionalism.", image: image3 },
  { title: "Live Streams", description: "Seamless, high-quality live broadcasting to keep your audience engaged in real time.", image: image4 },
  { title: "Podcasts", description: "Visually compelling podcast production to enhance your brand’s voice and authority.", image: image5 },
];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 0 }, items: 2 },
  mobile: { breakpoint: { max: 600, min: 0 }, items: 1 },
};

export const ServicesCarousel = () => {

const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 600);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);



  return (
    <div id="services">
    <motion.div
      className="container text-center py-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className="mb-4 text-uppercase fw-bold"
        style={{ letterSpacing: "2px", color: "#fef" }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Services
      </motion.h2>

      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        slidesToScroll={1}
      >
        {services.map((service, index) => (
        
          <motion.div 
            key={index} 
            className="p-3"
            // Animation only for first 2 (desktop) or first 1 (mobile)
            initial={(isMobile && index === 0) || (!isMobile && index < 2) ? 
              { opacity: 0, scale: 0.95 } : undefined}
            whileInView={(isMobile && index === 0) || (!isMobile && index < 2) ? 
              { opacity: 1, scale: 1 } : undefined}
            transition={(isMobile && index === 0) || (!isMobile && index < 2) ? 
              { type: "tween", ease: "easeOut", duration: 0.6 } : undefined}
            viewport={(isMobile && index === 0) || (!isMobile && index < 2) ? 
              { once: true, amount: 0.5 } : undefined}
          >
            <div
              className="card shadow-lg border-0"
              style={{
                borderRadius: "15px",
                overflow: "hidden",
                transform: "translateZ(0)", // Hardware acceleration
                backfaceVisibility: "hidden" // Prevent flickering
              }}
            >
              <motion.img
                src={service.image}
                alt={service.title}
                className="card-img-top"
                style={{ 
                  height: "300px",
                  objectFit: "cover",
                  filter: "brightness(0.8)",
                  transform: "translateZ(0.1px)",
                  backfaceVisibility: "hidden"
                }}
                // Only animate images for first 2/1 items
                // initial={(isMobile && index === 0) || (!isMobile && index < 2) ? 
                //   { opacity: 0 } : { opacity: 1 }}
                // whileInView={(isMobile && index === 0) || (!isMobile && index < 2) ? 
                //   { opacity: 1 } : undefined}
                // transition={(isMobile && index === 0) || (!isMobile && index < 2) ? 
                //   { duration: 0.5 } : undefined}
                // viewport={{ once: true }}
              />
              <motion.div
                className="card-body text-white text-center"
                style={{
                  background: "linear-gradient(135deg, #6d6d6d, #4a4a4a)",
                  padding: "10px",
                  willChange: "transform, opacity"
                }}
                // initial={{ y: 10, opacity: 0 }}
                // whileInView={{ y: 0, opacity: 1 }}
                // transition={{
                //   type: "tween",
                //   ease: "easeOut",
                //   duration: 0.4
                // }}
                // viewport={{ once: true }}
              >
                <h5 className="card-title fw-bold" style={{ fontSize: "1.3rem" }}>{service.title}</h5>
                <p className="card-text small" style={{ fontStyle: "italic", opacity: "0.9" }}>{service.description}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </Carousel>
    </motion.div>
    </div>
  );
};

export default ServicesCarousel;