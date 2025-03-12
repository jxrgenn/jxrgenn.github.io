import { motion } from "framer-motion";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Hero = () => {
  return (
    <section 
    id="hero" 
    className="hero-section vw-100 overflow-hidden"
  >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="container h-100 d-flex flex-column align-items-center justify-content-center text-center"      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="fs-5 fs-md-3 text-secondary text-uppercase fw-light text-center w-100"
          style={{ 
            letterSpacing: '0.4em',
            transform: 'translateY(-10vh)'
          }}
        >
          Where Vision Meets Artistry
        </motion.p>

        <motion.h1 
          className="display-1 fw-bold text-white text-center w-100"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{
            textShadow: '0 0 120px rgba(255,255,255,0.15)',
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '20vw',
            lineHeight: 0.8
          }}
        >
          Bokéh
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="d-flex flex-column align-items-center text-center w-100"
          style={{ transform: 'translateY(10vh)', gap: '1.5rem' }}
        >
          <p 
            className="fs-5 fs-md-3 fs-lg-2 text-light fw-light"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Creative Photography Studio
          </p>
          <p 
            className="fs-6 fs-md-5 fs-lg-4 text-secondary text-uppercase"
            style={{ letterSpacing: '0.1em' }}
          >
            Events • Portraits • Fashion • Commercial • Weddings
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;