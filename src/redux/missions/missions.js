import axios from 'axios';

import * as Camel from '../modules/camelConverter';

const FETCH_DATA = 'FETCH_MISSIONS_DATA';
const JOIN_MISSION = 'JOIN_MISSION';
const LEAVE_MISSION = 'LEAVE_MISSION';

const initialState = [];

export const fetchData = () => async (dispatch) => {
  const response = await axios.get('https://api.spacexdata.com/v3/missions');
  const payload = Camel.keysToCamel(response.data).map((e) => {
    const { missionId, missionName, description } = e;
    const element = { missionId, missionName, description };
    return element;
  });
  dispatch({
    type: FETCH_DATA,
    payload,
  });
};

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  id,
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  id,
});

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    case JOIN_MISSION: {
      const newState = state.map((mission) => {
        if (mission.missionId === action.id) {
          return { ...mission, reserved: true };
        }
        return mission;
      });
      return newState;
    }
    case LEAVE_MISSION: {
      const newState = state.map((mission) => {
        if (mission.missionId === action.id) {
          return { ...mission, reserved: false };
        }
        return mission;
      });
      return newState;
    }
    default:
      return state;
  }
};

export default missionsReducer;
