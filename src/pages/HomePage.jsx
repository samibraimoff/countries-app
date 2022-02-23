import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CountryList from '../components/CountryList';
import { getCountries } from '../redux/actions/countryActions';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div>
      <CountryList />
    </div>
  );
};

export default Home;
