import countriesReducer, { FETCH_COUNTRIES_SUCCESS } from '../redux/countries/countries';

describe('Countries Reducer: ', () => {
  test('Countries reducer initial state test', () => {
    expect(countriesReducer(undefined, {})).toEqual({
      loading: false,
      countriesDisplay: [],
      error: '',
    });
  });

  test('Countries Fetching', () => {
    const action = {
      type: FETCH_COUNTRIES_SUCCESS,
      payload: [{ name: 'mock' }],
    };
    expect(countriesReducer({ countriesDisplay: [], countries: [] }, action)).toEqual({
      countriesDisplay: [{
        name: 'mock',
      }],
      error: '',
      loading: false,
      searchBox: '',
      countries: [{
        name: 'mock',
      }],
    });
  });
});
