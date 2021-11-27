import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rocket from './Rocket';
import { fetchRockets, toggleReserveRocket } from '../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const rocketData = useSelector((state) => state.rocketsReducer);

  useEffect(() => {
    if (rocketData.rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, []);

  if (rocketData.loading) {
    return <h2>Loading</h2>;
  }
  if (rocketData.error) {
    return <h2>{rocketData.error}</h2>;
  }

  const toggleRocketBooking = (id) => {
    dispatch(toggleReserveRocket(id));
  };

  return (

    <div className="mb-5 col" data-testid="rocketsList">
      {rocketData // conditional
           && rocketData.rockets // conditional
               && rocketData.rockets.map(
                 (rocket) => (
                   <Rocket
                     key={rocket.id}
                     id={rocket.id}
                     name={rocket.rocketName}
                     description={rocket.description}
                     flickrImage={rocket.flickrImage}
                     toggleRocketBooking={toggleRocketBooking}
                     className="row"
                     reserved={rocket.rocketReserved}
                   />
                 ),
               )}
    </div>

  );
};

export default Rockets;
