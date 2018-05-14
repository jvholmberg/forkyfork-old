import React from 'react';

import './style.css';

const Button = ({
  type = 'primary',
  size,
  className,
  ...props,
}) => (
  <button
    className={[
      `Button btn btn-${type}`,
      size ? `btn-${size}` : '',
      className ? className : '',
    ].join(' ')}
    {...props} />
);
export default Button;
