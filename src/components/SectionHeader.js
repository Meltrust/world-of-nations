import React from 'react';
import PropTypes from 'prop-types';

const SectionHeader = (props) => {
  const { title } = props;
  return (
    <div className="section-header col-12 d-flex flex-column justify-content-center align-items-end">
      <h1 className="fw-bold text-white text-center m-0 p-3  pb-0 section-header-text">{title}</h1>
      <div className="d-flex flex-column">
        <small className="text-white align-self-center text-center p-0 m-0">population 32432423</small>
        <small className="text-white align-self-center text-center p-0 m-0">population</small>
      </div>
    </div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionHeader;
