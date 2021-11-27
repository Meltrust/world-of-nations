import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'react-bootstrap';

const ReservedRocket = ({ name }) => (
  <ListGroupItem>
    <p>{name}</p>
  </ListGroupItem>
);

ReservedRocket.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ReservedRocket;
