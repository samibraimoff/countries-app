import axios from 'axios';
import {
  GET_COUNTRIES_FAILURE,
  GET_COUNTRIES_REQUEST,
  GET_COUNTRIES_SUCCESS,
} from '../types';

const URL = 'https://restcountries.com/v3.1/all';

export const getCountries = () => async (dispatch) => {
  dispatch({
    type: GET_COUNTRIES_REQUEST,
  });
  try {
    const response = await axios.get(URL);

    dispatch({
      type: GET_COUNTRIES_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_COUNTRIES_FAILURE,
      payload: error,
    });
  }
};
