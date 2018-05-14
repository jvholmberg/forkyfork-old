import React from 'react';

import './style.css';

const Logo = ({ style }) => (
  <span className='Logo' style={style}>
    <span className='Logo-Brand'>forkyfork</span>
    <span className='Logo-Punch'>
      <i className='fas fa-code-branch Logo-Icon' />
      <span className='Logo-Message'>makes you happy</span>
    </span>
  </span>
);
export default Logo;
