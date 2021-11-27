import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ReservedRocket from './ReservedRocket';

const ReservedRockets = () => {
  const rocketData = useSelector((state) => state.rocketsReducer);
  const reservedRockets = rocketData.rockets.filter((rocket) => rocket.rocketReserved === true);

  return (
    <Container data-testid="joinedRockets">
      <ListGroup>
        <h2>My Rockets</h2>
        {reservedRockets.map((rocket) => (
          <ReservedRocket
            key={rocket.id}
            name={rocket.rocketName}
          />
        ))}
      </ListGroup>
    </Container>

  );
};

export default ReservedRockets;
