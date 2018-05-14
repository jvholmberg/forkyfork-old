import React from 'react';

import './style.css';

const Alert = ({
  type = 'primary',
  dismissible,
  onClick,
  className,
  children,
  ...props,
}) => (
  <div
    className={[
      `Alert alert alert-${type}`,
      dismissible ? 'alert-dismissible fade show' : '',
      className ? className : '',
    ].join(' ')}>
      {children}
      {dismissible ? (
        <button className='close' aria-label='Close' onClick={onClick}>
          <span aria-hidden='true'>&times;</span>
        </button>
      ) : (null)}
  </div>
);
export default Alert;
