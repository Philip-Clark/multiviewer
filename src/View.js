const ThawedView = (_title = '', _iframe = '') => {
  let title = _title;
  let iframe = _iframe;

  const setTitle = (newTitle) => {
    title = newTitle;
    return title;
  };

  const getTitle = () => {
    return title;
  };

  const setIFrame = (newIFrame) => {
    iframe = newIFrame;
    return iframe;
  };

  const getSourceURL = () => {
    const regex = /src="([^"]+)"/;
    const match = regex.exec(iframe);
    if (match && match[1]) {
      return match[1];
    }
    return null;
  };

  const setSourceURL = (newSourceURL) => {
    const regex = /src="([^"]+)"/;
    const match = regex.exec(iframe);
    if (match && match[1]) {
      const newIFrame = iframe.replace(match[1], newSourceURL);
      setIFrame(newIFrame);
    }
  };

  const play = (value) => {
    const sourceURL = getSourceURL();
    if (!sourceURL) return;
    const regex = /autoplay=([^&]+)/;
    const match = regex.exec(sourceURL);
    if (match && match[1]) {
      const autoplayValue = value === undefined ? (match[1] === '1' ? '0' : '1') : value.toString();
      const newSourceURL = sourceURL.replace(regex, `autoplay=${autoplayValue}`);
      setSourceURL(newSourceURL);
    } else {
      const autoplayValue = value === undefined ? '1' : value.toString();
      const newSourceURL =
        sourceURL + (sourceURL.includes('?') ? '&' : '?') + `autoplay=${autoplayValue}`;
      setSourceURL(newSourceURL);
    }
  };

  const mute = (value) => {
    const sourceURL = getSourceURL();
    if (!sourceURL) return;
    const regex = /mute=([^&]+)/;
    const match = regex.exec(sourceURL);
    if (match && match[1]) {
      const muteValue = value === undefined ? (match[1] === '1' ? '0' : '1') : value.toString();
      const newSourceURL = sourceURL.replace(regex, `mute=${muteValue}`);
      setSourceURL(newSourceURL);
    } else {
      const muteValue = value === undefined ? '1' : value.toString();
      const newSourceURL = sourceURL + (sourceURL.includes('?') ? '&' : '?') + `mute=${muteValue}`;
      setSourceURL(newSourceURL);
    }
  };

  const getIFrame = () => {
    return iframe;
  };
  mute(1);
  return { setTitle, getTitle, setIFrame, getIFrame, play, mute };
};

const View = Object.freeze(ThawedView);

export default View;
