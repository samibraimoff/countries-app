import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Fragment>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Header;
