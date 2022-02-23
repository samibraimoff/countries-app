import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';
import { RiGlobeLine } from 'react-icons/ri';

import '../styles/header.scss';

const Header = () => {
  return (
    <Fragment>
      <nav>
        <div className='logo-container'>
          <RiGlobeLine className='logo' />
          <span>Rest Countries</span>
        </div>
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
