import { React, useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../../assets/img/black-sheep-blackbg.png';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';

export const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  // Set active link based on current path when component mounts
  useEffect(() => {
    const path = location.pathname.substring(1); // Remove leading slash
    if (path === 'video-production') setActiveLink('video-production');
    else if (path === 'video-events') setActiveLink('video-events');
    else if (path === 'studio-photography') setActiveLink('studio-photography');
    else setActiveLink('');
  }, [location]);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setExpanded(false); // Close mobile menu after selection
  }

  const scrollToContactForm = () => {
    const formPage = document.getElementById('FormPage');
    if (formPage) {
      formPage.scrollIntoView({ behavior: 'smooth' });
    }
    setExpanded(false); // Close mobile menu after clicking connect
  }

  const instagramLinks = {
    "/video-production": "https://www.instagram.com/black_sheep.al/",
    "/video-events": "https://instagram.com/black_sheep.al/",
    "/studio-photography": "https://www.instagram.com/bokeh.photostudio/",
  };

  const currentInstagramLink = instagramLinks[location.pathname] || "https://www.instagram.com/black_sheep.al/";

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`${scrolled ? "scrolled" : ""} mobile-navbar`}
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link 
              as={Link} 
              to="/video-production" 
              className={activeLink === 'video-production' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('video-production')}
            >
              Video Production
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/video-events" 
              className={activeLink === 'video-events' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('video-events')}
            >
              Video Events
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/studio-photography" 
              className={activeLink === 'studio-photography' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('studio-photography')}
            >
              Studio Photography
            </Nav.Link>
          </Nav>
          <div className="navbar-text">
            <div className="social-icon">
              <a href="https://www.facebook.com/black.sheep.al/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon2} alt="Facebook" />
              </a>
              <a href={currentInstagramLink} target="_blank" rel="noopener noreferrer">
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
            <button className="vvd connect-btn" onClick={scrollToContactForm}>
              <span>Let's connect!</span>
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}