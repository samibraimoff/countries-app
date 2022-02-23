import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CountryList from '../components/CountryList';
import { getCountries } from '../redux/actions/countryActions';

import '../styles/home.scss';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div className='container'>
      <CountryList />
    </div>
  );
};

export default Home;
