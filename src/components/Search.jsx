import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ImSearch } from 'react-icons/im';

import { getCountry } from '../redux/actions/countryActions';

const Search = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(getCountry(term));
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          placeholder='Search for any country...'
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type='submit'>
          <ImSearch />
        </button>
      </form>
    </div>
  );
};

export default Search;
