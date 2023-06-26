import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RocketData from './RocketData';
import { fetchRockets } from '../redux/rockets/rocketSlice';

const Rockets = () => {
  const { rockets } = useSelector((store) => store.rockets);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <div>
      {rockets.map((item) => (
        <RocketData
          key={item.id}
          name={item.name}
          description={item.description}
          image={item.flickr_images}
        />
      ))}
    </div>
  );
};

export default Rockets;
