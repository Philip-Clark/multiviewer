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

  const getIFrame = () => {
    return iframe;
  };

  return { setTitle, getTitle, setIFrame, getIFrame };
};

const View = Object.freeze(ThawedView);

export default View;
