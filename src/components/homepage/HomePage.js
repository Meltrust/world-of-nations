import React, { useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SectionHeader from '../SectionHeader';

import Country from '../Country';
import { fetchCountries } from '../../redux/countries/countries';
import FilterCountries from './FilterCountries';

const HomePage = () => {
  const dispatch = useDispatch();
  const countriesData = useSelector((state) => state.countriesReducer);

  useEffect(() => {
    if (countriesData.countriesDisplay.length === 0) {
      console.log('useeffect');
      dispatch(fetchCountries());
    }
  }, []);

  console.log(countriesData.countriesDisplay[0]);
  if (countriesData.loading) {
    return <h2 className="text-white">Loading...</h2>;
  }
  if (countriesData.error) {
    return <h2 className="text-white">{countriesData.error}</h2>;
  }

  return (
    <div className="col-12 row m-0 mt-5">
      <SectionHeader title="Whole World" />
      <FilterCountries />
      {countriesData // conditional
           && countriesData.countriesDisplay // conditional
               && countriesData.countriesDisplay.map(
                 (country) => (
                   <Link
                     to={`/target/${country.id}`}
                     key={country.name}
                     className="p-0 col-6 col-md-4 col-lg-3 col-xl-2 list-links "
                   >
                     <Country
                       key={country.id}
                       id={country.id}
                       name={country.name}
                       population={country.population}
                     />
                   </Link>
                 ),
               )}
      <Outlet />
    </div>
  );
};

export default HomePage;
