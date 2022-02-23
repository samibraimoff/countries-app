import React from 'react';

import '../styles/countrycard.scss';

const CountryCard = ({ data }) => {
  const { name, flags, population, capital, area, region } = data;
  return (
    <div className='card-container'>
      <img src={flags.svg} alt={name.common} />
      <div className='country-info'>
        <h3>{name.common}</h3>
        <h4>Capital: {capital}</h4>
        <h4>Population: {population}</h4>
        <h4>Area: {area}</h4>
        <h4>Region: {region}</h4>
      </div>
    </div>
  );
};

export default CountryCard;
