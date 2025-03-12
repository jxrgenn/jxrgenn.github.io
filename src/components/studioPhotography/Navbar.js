import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust this value based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled ? 'py-4 bg-black/80 backdrop-blur-lg' : 'py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a 
            onClick={() => scrollToSection('hero')}
            className="text-xl md:text-2xl font-light tracking-wider text-white cursor-pointer" 
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            BOKÉH
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            <a onClick={() => scrollToSection('hero')} className="text-base md:text-lg text-white hover:text-gray-300 transition-colors cursor-pointer">Home</a>
            <a onClick={() => scrollToSection('about')} className="text-base md:text-lg text-white hover:text-gray-300 transition-colors cursor-pointer">About</a>
            <a onClick={() => scrollToSection('projects')} className="text-base md:text-lg text-white hover:text-gray-300 transition-colors cursor-pointer">Projects</a>
            <a onClick={() => scrollToSection('contact')} className="text-base md:text-lg text-white hover:text-gray-300 transition-colors cursor-pointer">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : '100%' }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 bg-black z-40 md:hidden ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <a
            onClick={() => scrollToSection('hero')}
            className="text-2xl text-white hover:text-gray-300 transition-colors cursor-pointer"
          >
            Home
          </a>
          <a
            onClick={() => scrollToSection('about')}
            className="text-2xl text-white hover:text-gray-300 transition-colors cursor-pointer"
          >
            About
          </a>
          <a
            onClick={() => scrollToSection('projects')}
            className="text-2xl text-white hover:text-gray-300 transition-colors cursor-pointer"
          >
            Projects
          </a>
          <a
            onClick={() => scrollToSection('contact')}
            className="text-2xl text-white hover:text-gray-300 transition-colors cursor-pointer"
          >
            Contact
          </a>
        </div>
      </motion.div>
    </>
  );
}
export default Navbar; 