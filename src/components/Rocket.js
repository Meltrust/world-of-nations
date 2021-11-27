import React from 'react';
import PropTypes from 'prop-types';
import {
  Col, Image, ListGroup, Row, Badge, Button,
} from 'react-bootstrap';

const Rocket = (
  {
    id, name, description, flickrImage, reserved, toggleRocketBooking,
  },
) => (
  <ListGroup.Item className="bg-light  mb-1 main-rockets-items">
    <Row>
      <Col xs={2} style={{ width: 'fit-content' }}>
        <Image width="300" height="180" src={flickrImage} rounded />
      </Col>
      <Col>
        <h3>{name}</h3>

        {reserved && (
          <span>
            <Badge bg="info" pill>
              Reserved
            </Badge>
            {' '}
          </span>
        )}

        {description}
        <br />
        <br />
        <Button
          className="reserve-button rounded"
          variant={reserved ? 'secondary' : 'primary'}
          onClick={() => toggleRocketBooking(id)}
          reserved={reserved}
        >
          {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </Button>
      </Col>
    </Row>
  </ListGroup.Item>
);

Rocket.defaultProps = {
  reserved: false,
};
Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImage: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
  id: PropTypes.number.isRequired,
  toggleRocketBooking: PropTypes.func.isRequired,
};

export default Rocket;
