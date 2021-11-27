import React, { } from 'react';
// import { Outlet } from 'react-router-dom';
import SectionHeader from '../SectionHeader';

import Country from '../Country';
import FilterCountries from './FilterCountries';

const countrySpecs = {
  id: 1,
  name: 'United States',
};

const HomePage = () => (
  <div className="col-12 row m-0 mt-5">
    <SectionHeader title="Whole World" />
    <FilterCountries />
    <Country key={countrySpecs.id} countrySpecs={countrySpecs} />
    {/* <Outlet /> */}
  </div>
);

export default HomePage;
