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
  const wikiConsultLink = `https://www.wikipedia.org/wiki/${country.name.split(' ').join('_')}`;
  return (

    <div className="col-12 row m-0 mt-5 country-info-container text-center">
      {countriesData && countriesData.countriesDisplay
        && (
        <SectionHeader
          name={country.name}
          population={truncateBigNumbers(country.population)}
        />
        )}

      <div className="min-vh100 d-flex flex-column p-0">
        <div className="row p-0 d-flex flag-container bg-dark justify-content-center">
          <img className="d-flex py-md-2 flag" src={country.flag} alt="" />
        </div>

        <div className="  p-5 p-md-3 info-container row">
          {' '}
          <h2 className="mt-2">Country info</h2>
          <div className="d-flex flex-column info-data-box">
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
            <div className="d-flex justify-content-center flex-column flex-lg-row info-link-buttons">
              <button type="button" className="btn btn-dark align-self-center mt-4 mt-lg-3 me-lg-4">
                <a href={country.map} target="_blank" rel="noreferrer">
                  Open map
                  {' '}
                  {' '}
                </a>
              </button>
              <button type="button" className="btn btn-dark align-self-center mt-3">
                <a href={wikiConsultLink} target="_blank" rel="noreferrer">
                  Visit wiki
                  {' '}
                  {' '}
                </a>
              </button>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};

export default CountryView;
