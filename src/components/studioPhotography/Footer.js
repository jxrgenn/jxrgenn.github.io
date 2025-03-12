import React from 'react';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-black text-white py-40">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-32">
          {/* Brand */}
          <div className="space-y-8">
            <h3 className="text-4xl md:text-5xl font-light tracking-wider" style={{ fontFamily: 'Cormorant Garamond, serif' }}>BOKÉH</h3>
            <p className="text-xl md:text-2xl text-gray-400">
              Capturing life's precious moments with artistry and passion.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-2xl md:text-3xl font-medium mb-8">Quick Links</h4>
            <ul className="space-y-6">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')} 
                  className="text-xl md:text-2xl text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-xl md:text-2xl text-gray-400 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')} 
                  className="text-xl md:text-2xl text-gray-400 hover:text-white transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-xl md:text-2xl text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-8">
            <h4 className="text-2xl md:text-3xl font-medium mb-8">Services</h4>
            <ul className="space-y-6">
              <li className="text-xl md:text-2xl text-gray-400">Wedding Photography</li>
              <li className="text-xl md:text-2xl text-gray-400">Event Coverage</li>
              <li className="text-xl md:text-2xl text-gray-400">Portrait Sessions</li>
              <li className="text-xl md:text-2xl text-gray-400">Cinematography</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <h4 className="text-2xl md:text-3xl font-medium mb-8">Contact</h4>
            <p className="text-xl md:text-2xl text-gray-400">123 Photography Lane</p>
            <p className="text-xl md:text-2xl text-gray-400">New York, NY 10001</p>
            <p className="text-xl md:text-2xl text-gray-400">hello@bokeh.com</p>
            <div className="flex space-x-8 mt-12">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={36} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={36} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={36} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={36} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-16">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xl text-gray-400">
              © {new Date().getFullYear()} Bokéh. All rights reserved.
            </p>
            <div className="flex space-x-12 mt-8 md:mt-0">
              <a href="#" className="text-xl text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-xl text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;  