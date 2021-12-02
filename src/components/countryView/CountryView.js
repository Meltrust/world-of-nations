import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../../redux/countries/countries';
import SectionHeader from '../SectionHeader';
import truncateBigNumbers from '../../modules/helperFunctions';

const CountryView = () => {
  const dispatch = useDispatch();
  const countriesData = useSelector((state) => state.countriesReducer);

  async function start() {
    if (countriesData.countriesDisplay !== []) {
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
  if (!country) {
    return <Navigate to="/" />;
  }
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
        <div className="row p-0 d-flex flag-container bg-dark justify-content-center">
          <img className="d-flex  flag" src={country.flag} alt="" />
        </div>

        <div className="mb-4 mt-4 p-3 info-container row">
          {' '}
          <h2 className="mb-3">Country info</h2>
          <div className="d-flex flex-column">
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
