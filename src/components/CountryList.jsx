import React, { Fragment } from 'react';

import { useSelector } from 'react-redux';
import CountryCard from './CountryCard';

const CountryList = () => {
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
      {list?.map((data, index) => (
        <CountryCard key={index} data={data} />
      ))}
    </Fragment>
  );

  return <div>{renderCountries}</div>;
};

export default CountryList;
