import React from 'react';
import PropTypes from 'prop-types';
import truncateBigNumbers from '../modules/helperFunctions';

const Country = (props) => {
  const {
    id,
    name,
    population,
  } = props;

  return (
    <li
      id={id}
      className="border border-white light-pink text-center collection-item d-flex flex-column justify-content-center"
    >
      <h2>
        {name}
      </h2>
      <span className="align-bottom">
        <small className="m-0">
          Population:
          {' '}
          {truncateBigNumbers(population)}

        </small>
      </span>
    </li>
  );
};

Country.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
};

export default Country;
