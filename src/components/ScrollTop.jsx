import React, { useState, useEffect } from 'react';
import './ScrollTop.css';

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    visible && (
      <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
        ↑
      </button>
    )
  );
};

export default ScrollTop;
