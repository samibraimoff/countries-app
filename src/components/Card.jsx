import React from 'react';
import '../styles/card.scss';

const Card = ({ data }) => {
  const { flags, name, capital, population, region } = data;

  const populationNumber = population
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <div className='card'>
      <img src={flags.svg} alt='flag' />
      <h2>Coountry: {name.common}</h2>
      <h3>Capital: {capital}</h3>
      <h3>Population: {populationNumber} </h3>
      <h3>{region}</h3>
    </div>
  );
};

export default Card;
