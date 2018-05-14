import React from 'react';

import './style.css';

const Row = ({
  className,
  ...props,
}) => (
  <div
    className={(() => [
      'Row row',
      className ? className : '',
    ].join(' '))()}
    {...props} />
);
export default Row;
