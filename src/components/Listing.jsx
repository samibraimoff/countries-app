import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Card from './Card';

import '../styles/listing.scss';

const Listing = () => {
  const { list, isLoading, error } = useSelector((state) => state.countries);

  const renderCountries = isLoading ? (
    <h2>Loading... </h2>
  ) : error ? (
    <h2>Something went wrong, please try again later.</h2>
  ) : (
    <Fragment>
      {list?.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </Fragment>
  );

  return <section>{renderCountries}</section>;
};

export default Listing;
