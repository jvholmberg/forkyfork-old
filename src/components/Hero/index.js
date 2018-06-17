import React from 'react';
import './style.css';

const Hero = ({ backdrop, neg, children, className, ...props }) => (
  <div className='c-hero-wrapper'
    style={backdrop ? {
      backgroundImage: `url(${backdrop})`,
    } : {}}>
    <div className='c-hero-content'>
      <div className={`c-hero-children ${neg ? 'negative' : ''}`.trim()} {...props}>
        {children}
      </div>
    </div>
  </div>
);
export default Hero;
