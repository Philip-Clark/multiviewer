import React, { useContext, useState } from 'react';
import { FaCog } from 'react-icons/fa';
import { ViewContext } from '../../App';
import ViewSwitcher from '../ViewSwitcher/ViewSwitcher';
import './Header.css';

/**
 * Represents the header component of the application.
 *
 * @returns {JSX.Element} The rendered header component.
 */
const Header = () => {
  const { controllerOpen, setControllerOpen } = useContext(ViewContext);

  const toggleSourceController = () => setControllerOpen(!controllerOpen);

  return (
    <div className="header">
      <div className="viewControls"></div>
      <ViewSwitcher />
      <div className="settings">
        <FaCog onClick={toggleSourceController} />
      </div>
    </div>
  );
};

export default Header;
