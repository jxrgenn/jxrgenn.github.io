import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/studioPhotography/styles.css';
import { VidProduction } from './components/vidProduction/vidProduction';
import { VidEvents } from './components/vidEvents/vidEvents';
import { StudioPhotography } from './components/studioPhotography/StudioPhotography';

import { LandingPage } from './components/LandingPage';

function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/video-production" element={<VidProduction />} />
        <Route path="/video-events" element={<VidEvents />} />
        <Route path="/studio-photography" element={<StudioPhotography />} />

        {/* Add other routes for your services */}
      </Routes>
    </Router>
  );
}

export default App;
