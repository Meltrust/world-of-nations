import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import JoinedMission from './JoinedMission';

const JoinedMissions = () => {
  const missionList = useSelector((state) => state.missionsReducer);
  const reservedMissions = missionList.filter((mission) => mission.reserved === true);

  return (
    <Container data-testid="joinedMissions">
      <ListGroup>
        <h2>My missions</h2>
        {reservedMissions.map((mission) => (
          <JoinedMission
            key={mission.missionId}
            name={mission.missionName}
          />
        ))}
      </ListGroup>
    </Container>

  );
};

export default JoinedMissions;
