import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCountries } from '../redux/actions/countryActions';
import Card from './Card';

import '../styles/listing.scss';

const Listing = () => {
  const dispatch = useDispatch();
  const { list, isLoading, error } = useSelector((state) => state.countries);

  console.log(list);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <Fragment>
      <section className='listing'>
        <div className='loading'>
          {isLoading && <h2>Loading countries... Please wait.</h2>}
        </div>

        <div className='error'>
          {error && <h2>Something went wrong, please try again later.</h2>}
        </div>

        <div>
          {list?.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Listing;
