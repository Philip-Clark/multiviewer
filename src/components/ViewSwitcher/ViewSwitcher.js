import React, { useContext, useState } from 'react';
import './ViewSwitcher.css';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import { ViewContext } from '../../App';

function ViewSwitcher() {
  const { decks, deck, setDeck } = useContext(ViewContext);

  const nextView = () => {
    if (deck + 1 > decks.length - 1) return setDeck(0);
    return setDeck(deck + 1);
  };
  const lastView = () => {
    if (deck - 1 < 0) return setDeck(decks.length - 1);
    return setDeck(deck - 1);
  };

  return (
    <div className="viewSwitcher">
      <FaChevronLeft onClick={nextView} />
      <p>{decks[deck].getName()}</p>
      <FaChevronRight onClick={lastView} />
    </div>
  );
}

export default ViewSwitcher;
