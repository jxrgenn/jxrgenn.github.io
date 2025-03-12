import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="position-fixed bottom-0 end-0 mb-3 me-3" style={{ zIndex: 1000 }}>
      {isVisible && (
        <button 
          onClick={scrollToTop}
          className="btn btn-primary btn-lg rounded-circle shadow"
          style={{
            width: '3.5rem',
            height: '3.5rem',
            padding: '0.75rem'
          }}
          aria-label="Go to top"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            fill="currentColor" 
            className="bi bi-arrow-up" 
            viewBox="0 0 16 16"
          >
            <path 
              fillRule="evenodd" 
              d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default GoToTop;