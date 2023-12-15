import React from 'react';
import PropTypes from 'prop-types';
import './welcome.css';

const Welcome = ({ openController }) => {
  const handleButtonClick = () => {
    openController(true);
  };

  return (
    <div className="welcomeTile">
      <h1>Welcome</h1>
      <p>Add sources to get started</p>
      <button onClick={handleButtonClick}>Add Sources</button>
    </div>
  );
};

Welcome.propTypes = {
  openController: PropTypes.func.isRequired,
};

export default Welcome;
