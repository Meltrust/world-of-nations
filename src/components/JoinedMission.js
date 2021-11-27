import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'react-bootstrap';

const JoinedMission = (props) => {
  const { name } = props;
  return (
    <ListGroupItem>
      <p>{name}</p>
    </ListGroupItem>
  );
};

JoinedMission.propTypes = {
  name: PropTypes.string.isRequired,
};

export default JoinedMission;
