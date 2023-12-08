import React, { useContext, useState } from 'react';
import './Header.css';
import ViewSwitcher from '../ViewSwitcher/ViewSwitcher';
import { ViewContext } from '../../App';
import {
  FaCog,
  FaPauseCircle,
  FaPlayCircle,
  FaSpeakerDeck,
  FaVolumeMute,
  FaVolumeOff,
  FaVolumeUp,
} from 'react-icons/fa';
const Header = () => {
  const { controllerOpen, setControllerOpen, decks, deck, playPushed, mutePushed } =
    useContext(ViewContext);

  const toggleSourceController = () => {
    setControllerOpen(!controllerOpen);
  };

  const [isPlayToggled, setIsPlayToggled] = useState(false);

  const togglePlay = () => {
    // Get all views of the current deck
    const views = decks[deck].getViews();
    setIsPlayToggled(!isPlayToggled);

    // Call view.play() for each view
    views.forEach((view) => {
      view.play(isPlayToggled ? 0 : 1);
    });

    playPushed();
  };

  const [isMuteToggled, setIsMuteToggled] = useState(false);

  const toggleMute = () => {
    // Get all views of the current deck
    const views = decks[deck].getViews();
    setIsMuteToggled(!isMuteToggled);

    // Call view.mute() for each view
    views.forEach((view) => {
      view.mute(isMuteToggled ? 0 : 1);
    });

    mutePushed();
  };

  return (
    <div className="header">
      <div className="viewControls">
        {isPlayToggled ? (
          <FaPauseCircle onClick={togglePlay} />
        ) : (
          <FaPlayCircle onClick={togglePlay} />
        )}
        {isMuteToggled ? (
          <FaVolumeUp onClick={toggleMute} />
        ) : (
          <FaVolumeMute onClick={toggleMute} />
        )}
      </div>
      <ViewSwitcher />

      <div className="settings">
        <FaCog onClick={toggleSourceController} />
      </div>
    </div>
  );
};

export default Header;
