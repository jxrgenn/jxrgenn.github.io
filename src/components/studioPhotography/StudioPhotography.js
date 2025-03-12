import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import './styles.css';
import { NavBar } from '../vidProduction/NavBar';
import { Footer4 } from './Footer4';
import { Hero } from './Hero';
import { AboutUs } from './AboutUs';
import { Projects } from './Projects';
import { FormPage } from '../vidProduction/FormPage';
import { GoToTop } from './GoToTop';


export const StudioPhotography = () => {
  return (
    <div className="StudioPhotography">
    
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <NavBar />
          <Hero />
          <AboutUs />
          <Projects />
          <FormPage />
          <Footer4></Footer4>
          <GoToTop />
        </motion.main>
      </AnimatePresence>

    </div>
  );
}

export default StudioPhotography;