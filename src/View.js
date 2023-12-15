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
    if (match?.[1]) {
      return match[1];
    }
    return null;
  };

  const setSourceURL = (newSourceURL) => {
    const regex = /src="([^"]+)"/;
    const match = regex.exec(iframe);
    if (match?.[1]) {
      const newIFrame = iframe.replace(match[1], newSourceURL);
      setIFrame(newIFrame);
    }
  };

  const play = () => {
    const sourceURL = getSourceURL();
    if (!sourceURL) return;
    const regex = /autoplay=([^&]+)/;
    const match = regex.exec(sourceURL);
    if (match?.[1]) {
      const newSourceURL = sourceURL.replace(regex, `autoplay=1`);
      setSourceURL(newSourceURL);
    } else {
      const newSourceURL = sourceURL + (sourceURL.includes('?') ? '&' : '?') + `autoplay=1`;
      setSourceURL(newSourceURL);
    }
  };

  const mute = () => {
    const sourceURL = getSourceURL();
    if (!sourceURL) return;

    const regex = /mute=([^&]+)/;
    const match = regex.exec(sourceURL);

    if (match?.[1]) {
      const newSourceURL = sourceURL.replace(regex, `mute=1`);
      setSourceURL(newSourceURL);
    } else {
      const newSourceURL = sourceURL + (sourceURL.includes('?') ? '&' : '?') + `mute=1`;
      setSourceURL(newSourceURL);
    }
  };

  const getIFrame = () => {
    return iframe;
  };
  play();
  mute();
  return { setTitle, getTitle, setIFrame, getIFrame, play, mute };
};

const View = Object.freeze(ThawedView);

export default View;
