import React from 'react';
import './style.css';

const NavStrip = ({
  action,
  open,
  position,
  children,
  className,
  ...props,
}) => (
  <div className={`c-navstrip-wrapper c-${position || 'top'} ${className || ''}`.trim()} {...props}>
    <div className='c-navstrip-action'>
      {action}
    </div>
    <div className={`c-navstrip-content ${open ? 'c-open' : 'c-closed'}`} >
      {children}
    </div>
  </div>
);
export default NavStrip;
