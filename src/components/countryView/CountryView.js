import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../../redux/countries/countries';
import SectionHeader from '../SectionHeader';
import truncateBigNumbers from '../../modules/helperFunctions';

const CountryView = () => {
  const dispatch = useDispatch();
  const countriesData = useSelector((state) => state.countriesReducer);

  async function start() {
    if (countriesData.countriesDisplay === []) {
      await dispatch(fetchCountries());
    }
  }
  useEffect(() => {
    start();
    window.scrollTo(0, 0);
  }, []);

  const params = useParams();
  const country = countriesData.countriesDisplay.find(
    (country) => country.id === params.countryId,
  );

  return (

    <div className="col-12 row m-0 mt-5 list-links text-center">
      {countriesData && countriesData.countriesDisplay
        && (
        <SectionHeader
          name={country.name}
          population={truncateBigNumbers(country.population)}
        />
        )}

      <div className="min-vh-100 d-flex flex-column p-0">
        <div className="row p-0 p-lg-5 ">
          <img className="col flag" src={country.flag} alt="" />
        </div>
        <div className="mb-5 mt-5 mt-lg-0 p-3">
          {' '}
          <h2>Country info</h2>
          <div d-flex flex-columnn>
            <div>
              Official name:
              {' '}
              {country.officialName}
              {' '}
            </div>
            <div>
              Region:
              {' '}
              {country.region}
              {' '}
            </div>
            <div>
              Capital:
              {' '}
              {country.capital}
              {' '}
            </div>
            <div>
              Area:
              {' '}
              {country.land}
              {' '}
            </div>

            <div>
              Population:
              {' '}
              {country.population}
              {' '}
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};

export default CountryView;