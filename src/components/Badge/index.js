import React from 'react';

import './style.css';

const Badge = ({
  type = 'primary',
  pill,
  className,
  ...props,
}) => (
  <span
    className={[
      `Badge badge badge-${type}`,
      pill ? 'badge-pill' : '',
      className ? className : '',
    ].join(' ')}
  {...props} />
);
export default Badge;
