import React, { useState, Fragment } from 'react';

import { useSelector } from 'react-redux';
import CountryCard from './CountryCard';

import '../styles/countrylist.scss';

const CountryList = () => {
  const [term, setTerm] = useState('');

  const { list, isLoading, error } = useSelector((state) => state.countries);
  console.log(list);

  const renderCountries = isLoading ? (
    <Fragment>
      <h3>Loading...</h3>
    </Fragment>
  ) : error ? (
    <Fragment>
      <h3>Something went wrong, please try again later...</h3>
    </Fragment>
  ) : (
    <Fragment>
      {list
        ?.filter((country) => {
          if (term === '') {
            return country;
          } else if (
            country.name.common.toLowerCase().includes(term.toLowerCase())
          ) {
            return country;
          }
        })
        .map((data, index) => (
          <CountryCard key={index} data={data} />
        ))}
    </Fragment>
  );

  return (
    <div className='list-container'>
      <div className='search'>
        <input
          type='text'
          placeholder='Search for favourite country...'
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
      <div className='list'>{renderCountries}</div>
    </div>
  );
};

export default CountryList;
