import React from 'react';
import './style.css';

export const Section = ({className = '', ...props}) =>
  <div className={`c-layout-section ${className}`.trim()} {...props} />
