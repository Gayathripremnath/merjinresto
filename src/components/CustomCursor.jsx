import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target;
      if (!target) return;

      // Check tag names, standard interactive attributes, and common interactive classes
      // to avoid triggering expensive layout reflows with getComputedStyle.
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.tagName === 'INPUT' || 
        target.tagName === 'SELECT' || 
        target.tagName === 'TEXTAREA' || 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.place-card') || 
        target.closest('.service-card') || 
        target.closest('.cta-btn') || 
        target.closest('.crumb-home') || 
        target.closest('.scroll-progress-container') || 
        target.classList.contains('pointer') || 
        target.style.cursor === 'pointer';

      setIsPointer(!!isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className={`custom-cursor ${isPointer ? 'cursor-pointer' : ''}`}
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px` 
      }}
    />
  );
};

export default CustomCursor;
