import React from 'react';
import PropTypes from 'prop-types';

const SectionHeader = (props) => {
  const { name, population } = props;
  return (
    <div className="section-header col-12 d-flex flex-column justify-content-center align-items-end">
      <h1 className="fw-bold text-white text-center m-0 p-3 px-0  pb-0 section-header-text">{name}</h1>
      <div className="d-flex flex-column">
        <small className="text-white align-self-center text-center p-0 m-0">
          population:

          { `    ${population}` }
        </small>
      </div>
    </div>
  );
};

SectionHeader.propTypes = {
  name: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
};

export default SectionHeader;
