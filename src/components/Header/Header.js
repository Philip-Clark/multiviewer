import React, { useContext, useState } from 'react';
import './Header.css';
import ViewSwitcher from '../ViewSwitcher/ViewSwitcher';
import { ViewContext } from '../../App';

const Header = () => {
  const { decks, deck, setColumns } = useContext(ViewContext);
  setColumns(decks[deck].getColumns());
  const changeNumber = (e) => {
    decks[deck].setColumns(e.target.value);
  };
  return (
    <div className="header">
      <ViewSwitcher />
      <input type="number" value={decks[deck].getColumns()} onInput={changeNumber} />
    </div>
  );
};

export default Header;
