import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import RocketData from './RocketData';

const Rockets = () => {
  const { rockets } = useSelector((store) => store.rockets);

  return (
    <div>
      {rockets && rockets.length > 0
        ? rockets.map((item) => (
          <RocketData
            key={uuidv4()}
            id={item.id}
            name={item.name}
            description={item.description}
            image={item.flickr_images}
            reserved={item.reserved}
          />
        ))
        : 'loading'}
    </div>
  );
};

export default Rockets;
