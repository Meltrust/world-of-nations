import axios from 'axios';

// Action types
const FETCH_COUNTRIES_REQUEST = 'FETCH_COUNTRIES_REQUEST';
const FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS';
const FETCH_COUNTRIES_FAILURE = 'FETCH_COUNTRIES_FAILURE';

// Initial state
const initialState = {
  loading: false,
  countries: [],
  error: '',
};

// Action creators
export const fetchCountriesRequest = () => ({
  type: FETCH_COUNTRIES_REQUEST,
});

export const fetchCountriesSuccess = (countries) => ({
  type: FETCH_COUNTRIES_SUCCESS,
  payload: countries,
});

export const fetchCountriesFailure = (error) => ({
  type: FETCH_COUNTRIES_FAILURE,
  payload: error,
});

// Fetch countries function
export const fetchCountries = () => (dispatch) => {
  console.log('init dispatch countries');
  dispatch(fetchCountriesRequest());

  axios.get('https://restcountries.com/v3.1/all')

    .then((response) => {
      // response.data is the countries
      console.log(response.data);
      const countries = (response.data).map((key) => {
        const id = key.fifa;
        const name = key.name.common;
        const { capital } = key;
        const { region, population } = key;
        const flag = key.flags.svg;

        const country = {
          id, name, capital, region, population, flag,
        };
        return country;
      });

      dispatch(fetchCountriesSuccess(countries));
    })
    .catch((error) => {
      // error.message is the error message
      dispatch(fetchCountriesFailure(error.message));
    });
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES_REQUEST:
      console.log('fetching');
      return {
        ...state,
        loading: true,
      };

    case FETCH_COUNTRIES_SUCCESS:
      console.log('success');
      return {
        loading: false,
        countries: action.payload,
        error: '',
      };

    case FETCH_COUNTRIES_FAILURE:
      console.log('error');
      return {
        loading: false,
        countries: [],
        error: action.payload,
      };

    default: return state;
  }
};

export default countriesReducer;
