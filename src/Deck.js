const ThawedDeck = (_name = '', _views = []) => {
  let name = _name;
  let views = _views;
  let columns = 2;

  const setName = (newName) => {
    name = newName;
    return name;
  };

  const getName = () => {
    return name;
  };

  const setViews = (newViews) => {
    views = newViews;
    return views;
  };

  const getViews = () => {
    return views;
  };

  const setColumns = (_columns) => {
    columns = _columns;
    return columns;
  };
  const getColumns = () => {
    return columns;
  };

  return { setName, getName, setViews, getViews, getColumns, setColumns };
};

const Deck = Object.freeze(ThawedDeck);

export default Deck;
