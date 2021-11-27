import React from 'react';
import PropTypes from 'prop-types';

const Country = (props) => {
  const { countrySpecs } = props;
  const {
    id,
    name,
  } = countrySpecs;

  return (
    <div
      id={id}
      className="border border-white light-pink text-center collection-item d-flex flex-column justify-content-center"
    >
      <h1>
        {name}
      </h1>
      <span className="align-bottom">
        <p className="m-0">
          Population: 300 million

        </p>
      </span>
    </div>
  );
};

Country.propTypes = {
  countrySpecs: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Country;
