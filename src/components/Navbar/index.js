import React from 'react';

import './style.css';

const Navbar = ({
  type = 'light',
  bg = 'light',
  sticky,
  fixed,
  className,
  ...props,
}) => (
  <nav
    className={[
      'Navbar navbar',
      `navbar-${type}`,
      `bg-${bg}`,
      sticky ? `sticky-${sticky}` : '',
      fixed ? `fixed-${fixed}` : '',
    ].join(' ')}
    {...props}>
  </nav>
);
export default Navbar;
