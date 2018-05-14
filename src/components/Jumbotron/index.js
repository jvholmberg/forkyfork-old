import React from 'react';

import './style.css';

const Jumbotron = ({
  fluid,
  className,
  ...props,
}) => (
  <div
    className={[
      'Jumbotron jumbotron',
      fluid ? 'jumbotron-fluid' : '',
      className ? className : '',
    ].join(' ')}
    {...props} />
);
export default Jumbotron;
