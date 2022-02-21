import {
  GET_COUNTRIES_FAILURE,
  GET_COUNTRIES_REQUEST,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRY_FAILURE,
  GET_COUNTRY_REQUEST,
  GET_COUNTRY_SUCCESS,
} from '../types';

const initialState = {
  list: [],
  item: {},
  isLoading: false,
  errors: null,
};

export const countryReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_COUNTRIES_REQUEST:
    case GET_COUNTRY_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: payload,
      };

    case GET_COUNTRY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        item: payload,
      };

    case GET_COUNTRIES_FAILURE:
    case GET_COUNTRY_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: payload,
      };

    default:
      return state;
  }
};
