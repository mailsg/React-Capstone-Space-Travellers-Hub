import PropTypes from 'prop-types';
import React from 'react';

const RocketData = ({ name, description, image }) => (
  <div className="container">
    <div>
      <img src={image[0]} className="img-style" alt="" />
    </div>
    <div className="details">
      <h2>{name}</h2>
      <p>{description}</p>
      <button type="button">Reserve Rocket</button>
    </div>
  </div>
);

export default RocketData;

RocketData.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.arrayOf(PropTypes.string).isRequired,
};
