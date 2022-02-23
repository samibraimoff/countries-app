import axios from 'axios';
import {
  GET_COUNTRIES_FAILURE,
  GET_COUNTRIES_REQUEST,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRY_FAILURE,
  GET_COUNTRY_REQUEST,
  GET_COUNTRY_SUCCESS,
} from '../types';

const allCountriesURL = 'https://restcountries.com/v3.1/all';

export const getCountries = () => async (dispatch) => {
  dispatch({
    type: GET_COUNTRIES_REQUEST,
  });
  try {
    const response = await axios.get(allCountriesURL);

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

const countryNameURL = 'https://restcountries.com/v3.1/name/';

export const getCountry = (name) => async (dispatch) => {
  dispatch({
    type: GET_COUNTRY_REQUEST,
  });
  try {
    const response = await axios.get(countryNameURL + name);
    dispatch({
      type: GET_COUNTRY_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_COUNTRY_FAILURE,
      payload: error,
    });
  }
};
