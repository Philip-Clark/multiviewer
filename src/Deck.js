const ThawedDeck = (_name = '', _views = []) => {
  let name = _name;
  let views = _views;

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

  const addView = (view) => {
    views.push(view);
    return views;
  };
  const removeView = (index) => {
    console.log(index);
    console.log(views[index]);
    views.splice(index, 1);
    return views;
  };

  const getViews = () => {
    return views;
  };

  return { setName, getName, setViews, getViews, addView, removeView };
};

const Deck = Object.freeze(ThawedDeck);

export default Deck;
