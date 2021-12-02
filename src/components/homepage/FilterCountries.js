import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchCountryTyping } from '../../redux/countries/countries';

const FilterCountries = () => {
  const dispatch = useDispatch();
  const countriesData = useSelector((state) => state.countriesReducer);

  const search = (event) => {
    dispatch(searchCountryTyping(event.target.value));
  };

  return (
    <div className="row m-0 p-0 bg-dark form-container">
      <form>
        <input
          className="form-control search-bar my-2"
          placeholder="Start typing country name..."
          value={countriesData.searchBox}
          onChange={(event) => {
            search(event);
          }}
        />
      </form>
    </div>
  );
};
export default FilterCountries;
