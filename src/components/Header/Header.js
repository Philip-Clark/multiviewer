import React, { useContext, useState } from 'react';
import { FaCog, FaPauseCircle, FaPlayCircle, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import { ViewContext } from '../../App';
import ViewSwitcher from '../ViewSwitcher/ViewSwitcher';
import './Header.css';

/**
 * Represents the header component of the application.
 *
 * @returns {JSX.Element} The rendered header component.
 */
const Header = () => {
  const { controllerOpen, setControllerOpen, decks, deck, playPushed, mutePushed } =
    useContext(ViewContext);
  const [isMuteToggled, setIsMuteToggled] = useState(false);
  const [isPlayToggled, setIsPlayToggled] = useState(false);

  const toggleSourceController = () => setControllerOpen(!controllerOpen);

  const togglePlay = () => {
    const views = decks[deck].getViews();
    setIsPlayToggled(!isPlayToggled);
    views.forEach((view) => view.play(isPlayToggled ? 0 : 1));
    playPushed();
  };

  const toggleMute = () => {
    const views = decks[deck].getViews();
    setIsMuteToggled(!isMuteToggled);
    views.forEach((view) => view.mute(isMuteToggled ? 0 : 1));
    mutePushed();
  };

  /**
   * @returns {JSX.Element} The rendered play button.
   */
  const playButton = () => {
    if (isPlayToggled) return <FaPauseCircle onClick={togglePlay} />;
    return <FaPlayCircle onClick={togglePlay} />;
  };

  /**
   * @returns {JSX.Element} The rendered mute button.
   */
  const muteButton = () => {
    if (isMuteToggled) return <FaVolumeMute onClick={toggleMute} />;
    return <FaVolumeUp onClick={toggleMute} />;
  };

  return (
    <div className="header">
      <div className="viewControls">
        {playButton()}
        {muteButton()}
      </div>
      <ViewSwitcher />
      <div className="settings">
        <FaCog onClick={toggleSourceController} />
      </div>
    </div>
  );
};

export default Header;
