import React from 'react';

import './style.css';

const Container = ({
  fluid,
  className,
  ...props,
}) => (
  <div
    className={[
      'Container',
      fluid ? 'container-fluid' : 'container',
      className ? className : '',
    ].join(' ')}
  {...props} />
);
export default Container;
