import countriesReducer, { FETCH_COUNTRIES_SUCCESS } from '../redux/countries/countries';

describe('Countries Reducer: ', () => {
  test('Countries reducer initial state test', () => {
    expect(countriesReducer(undefined, {})).toEqual({
      loading: false,
      countriesDisplay: [],
      error: '',
    });
  });

  test('Countries Fetch', () => {
    const action = {
      type: FETCH_COUNTRIES_SUCCESS,
      payload: [{ id: 'test' }],
    };
    expect(countriesReducer({ countriesDisplay: [], countries: [] }, action)).toEqual({
      countriesDisplay: [{
        id: 'test',
      }],
      error: '',
      loading: false,
      searchBox: '',
      countries: [{
        id: 'test',
      }],
    });
  });
});
