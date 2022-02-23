import React from 'react';

const CountryCard = ({ data }) => {
  const { name } = data;
  return <div>{name.official}</div>;
};

export default CountryCard;
