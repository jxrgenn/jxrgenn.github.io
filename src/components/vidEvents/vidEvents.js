import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import logo from '../../logo.svg';

import '../../App.css';
// import './index.css';
// import './nicepage.css';
import { NavBar} from '../vidProduction/NavBar';
import { Footer } from '../vidProduction/Footer';
import { FormPage } from '../vidProduction/FormPage';
import { Hero } from './Hero';
import { ExpertiseGrid } from './ExpertiseGrid';
import { ServicesCarousel }  from './ServicesCarousel';
import { Footer4 } from './Footer4';
import { BeDifferent } from './BeDifferent';
import { BackgroundImage } from './BackgroundImage';
import { Projects } from './Projects';
import { GoToTop } from '../studioPhotography/GoToTop';
// import 'bootstrap/dist/css/bootstrap.min.css';

export const VidEvents = () => {
  return (
    <div className="vidEvents">
      <NavBar />
      <Hero />
      <ExpertiseGrid />
      <BeDifferent />
      <ServicesCarousel /> 

      <BackgroundImage />
      <Projects />
      <FormPage />
      <Footer4></Footer4>
      <GoToTop />

    </div> 
  );
}

export default VidEvents;