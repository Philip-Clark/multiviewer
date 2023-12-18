import React from 'react';
import PropTypes from 'prop-types';
import './welcome.css';

/**
 * Renders a welcome tile component.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.openController - The function to open the controller.
 * @returns {JSX.Element} The rendered welcome tile component.
 */
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
