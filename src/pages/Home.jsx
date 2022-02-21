import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Listing from '../components/Listing';
import Search from '../components/Search';
import { getCountries } from '../redux/actions/countryActions';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div>
      <Search />
      {/* <Listing /> */}
    </div>
  );
};

export default Home;
