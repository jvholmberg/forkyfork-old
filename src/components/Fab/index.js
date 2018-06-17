import React from 'react';
import { Tooltip } from '../';
import './style.css';

const Fab = ({
  icon,
  bgColor,
  color,
  title,
  ...props,
}) => (
  <button
    className='c-fab-wrapper'
    style={{
      backgroundColor: bgColor || '#33333d',
      color: color || '#fff'
    }} {...props}>
      <i className={`c-fab-button ${icon}`} />
      <Tooltip position='right'>
        {title}
      </Tooltip>

  </button>
);

export default Fab;
