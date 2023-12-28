import React, { useContext, useState } from 'react';
import { FaCog, FaQuestion, FaQuestionCircle } from 'react-icons/fa';
import { MdFeedback } from 'react-icons/md';
import { ViewContext } from '../../App';
import ViewSwitcher from '../ViewSwitcher/ViewSwitcher';
import './Header.css';

/**
 * Represents the header component of the application.
 *
 * @returns {JSX.Element} The rendered header component.
 */
const Header = () => {
  const {
    controllerOpen,
    setControllerOpen,
    setFeedBackOpen,
    FeedBackOpen,
    gettingStartedModalOpen,
    setGettingStartedModalOpen,
  } = useContext(ViewContext);

  const toggleSourceController = () => setControllerOpen(!controllerOpen);
  const toggleFeedBackOpen = () => setFeedBackOpen(!FeedBackOpen);
  const toggleHelpOpen = () => setGettingStartedModalOpen(!gettingStartedModalOpen);

  return (
    <div className="header">
      <div className="viewControls">
        <MdFeedback onClick={toggleFeedBackOpen} />
        <FaQuestionCircle onClick={toggleHelpOpen} />
      </div>
      <ViewSwitcher />
      <div className="settings">
        <FaCog onClick={toggleSourceController} />
      </div>
    </div>
  );
};

export default Header;
