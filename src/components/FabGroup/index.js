import React from 'react';
import './style.css';

const FabGroup = ({ action, open, children, ...props }) => (
  <div className='c-fabgroup-wrapper'>
    <div className='c-fabgroup-action'>
      {action}
    </div>
    <div className={`c-fabgroup-content ${open ? 'c-open' : 'c-closed'}`} >
      {children}
    </div>
  </div>
);
export default FabGroup;
