import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import '../App.css';
import { reserveRocket, cancelReserveRocket } from '../redux/rockets/rocketSlice';

const RocketData = ({
  name, description, id, image, reserved,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div>
        <img src={image[0]} className="img-style" alt="" />
      </div>
      <div className="details">
        <h2>{name}</h2>
        <p>
          {reserved && <span>Reserved</span>}
          {description}
        </p>
        {reserved ? (
          <button
            className="cancel-rocket"
            type="button"
            onClick={() => dispatch(cancelReserveRocket(id))}
          >
            Cancel Reservation
          </button>
        ) : (
          <button
            className="reserve-rocket"
            type="button"
            onClick={() => dispatch(reserveRocket(id))}
          >
            Reserve Rocket
          </button>
        )}
      </div>
    </div>
  );
};

export default RocketData;

RocketData.propTypes = PropTypes.shape({
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.string,
  reserved: PropTypes.bool,
}).isRequired;
