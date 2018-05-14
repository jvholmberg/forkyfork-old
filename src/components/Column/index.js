import React from 'react';

import './style.css';

const Column = ({
  col,
  sm,
  md,
  lg,
  xl,
  className,
  ...props,
}) => (
  <div
    className={[
      'Column col',
      col ? col : '',
      sm ? sm : '',
      md ? md : '',
      lg ? lg : '',
      xl ? xl : '',
      className ? className : '',
    ].join(' ')}
    {...props} />
);
export default Column;
