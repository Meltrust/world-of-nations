import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Container } from 'react-bootstrap';

import { fetchData } from '../redux/missions/missions';
import Mission from './Mission';

const Missions = () => {
  const missionList = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (missionList.length === 0) {
      dispatch(fetchData());
    }
  }, []);

  return (
    <Container>
      <Table className="mx-auto" data-testid="missionsTable" striped bordered>
        <thead>
          <tr>
            <th><h3>Mission</h3></th>
            <th><h3>Description</h3></th>
            <th><h3>Status</h3></th>
            <th> </th>
          </tr>
        </thead>
        <tbody className="">
          {missionList.map((mission) => (
            <Mission
              key={mission.missionId}
              id={mission.missionId}
              name={mission.missionName}
              description={mission.description}
              reserved={mission.reserved}
            />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Missions;
