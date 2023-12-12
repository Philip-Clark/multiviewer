import React from 'react';
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

export default Welcome;
