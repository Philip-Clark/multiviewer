import React, { useContext, useState } from 'react';
import './Header.css';
import ViewSwitcher from '../ViewSwitcher/ViewSwitcher';
import { ViewContext } from '../../App';
import { FaCog } from 'react-icons/fa';
const Header = () => {
  const { controllerOpen, setControllerOpen } = useContext(ViewContext);

  const toggleSourceController = () => {
    setControllerOpen(!controllerOpen);
    console.log(controllerOpen);
  };

  return (
    <div className="header">
      <ViewSwitcher />

      <FaCog onClick={toggleSourceController} />
    </div>
  );
};

export default Header;
