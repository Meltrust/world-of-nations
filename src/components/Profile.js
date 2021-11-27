import React from 'react';
import { Container } from 'react-bootstrap';

import JoinedMissions from './JoinedMissions';
import ReservedRockets from './ReservedRockets';

const Profile = () => (
  <Container className="d-flex">
    <JoinedMissions />
    <ReservedRockets data-testid="joinedRockets" />
  </Container>
);

export default Profile;
