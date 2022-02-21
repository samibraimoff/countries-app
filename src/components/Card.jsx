import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/card.scss';

const Card = ({ data }) => {
  const { flags, name, capital, population, region } = data;

  return (
    <div className='card'>
      <Link>
        <img src={flags.svg} alt='flag' className='image' />
      </Link>
    </div>
  );
};

export default Card;
