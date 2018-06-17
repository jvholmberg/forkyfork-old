import React from 'react';
import './style.css';

const Tooltip = ({ position, className, children, ...props }) => (
  <div className={`c-tooltip-wrapper c-${position}`} {...props}>
    <div className='c-tooltip-arrow' />
    <div className='c-tooltip-text'>
      {children}
    </div>
  </div>
);
export default Tooltip;



{/* <div className='c-hero-wrapper'
  style={backdrop ? {
    backgroundImage: `url(${backdrop})`,
  } : {}}>
  <div className='c-hero-content'>
    <div className={`c-hero-children ${neg ? 'negative' : ''}`.trim()} {...props}>
      {children}
    </div>
  </div>
</div> */}
