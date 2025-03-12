import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import logo from '../../logo.svg';
// import '../../App.css';
import './prodCss.css';
import { LandingPage } from '../LandingPage';
import { NavBar} from './NavBar';
import { Banner } from './Banner';
import { Skills} from './Skills';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { VimeoEmbed } from './VimeoEmbed';
import { Footer } from './Footer';
import { Footer4 } from './Footer4';
import { FormPage } from './FormPage';
import { Tools2 } from './tools2';
import { GoToTop } from '../studioPhotography/GoToTop';
import { FooterComponent } from './FooterComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

export const VidProduction = () => {
  return (
    <div className="vidProduction">
      <NavBar />
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
      <Tools2 />
      <FormPage></FormPage>
      <Footer4></Footer4>
      <GoToTop/>
    </div> 
  );
}

export default VidProduction;