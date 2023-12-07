import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { ViewContext } from '../../App';
import './sourceController.css';
import SourceInput from '../sourceInput/SourceInput';
import View from '../../View';
import _ from 'lodash';
import Deck from '../../Deck';

const SourceController = () => {
  // get current deck from viewContext
  const { decks, deck, setDecks, controllerOpen, setControllerOpen, deleteDeck, createNewDeck } =
    useContext(ViewContext);
  const [changedViews, setChangedViews] = useState(0);
  const [name, setName] = useState(decks[deck].getName());

  const closeModal = () => {
    setControllerOpen(false);
  };

  const addView = (title, iframe) => {
    decks[deck].addView(View(title, iframe));
    setChangedViews(changedViews + 1);
  };

  const deleteView = (id) => {
    decks[deck].removeView(id);
    setChangedViews(changedViews + 1);
  };

  const changeName = (e) => {
    setName(e.target.value);
    decks[deck].setName(e.target.value);
  };

  return (
    <Modal
      isOpen={controllerOpen}
      onRequestClose={closeModal}
      className={'modal'}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.50)', // This is an example of a semi-transparent black color
        },
      }}
    >
      <div className="tabControls">
        <input
          type="text"
          className="modalInput"
          value={decks[deck].getName()}
          onChange={changeName}
        />
        <div className="buttons">
          <button className="cancelButton" onClick={deleteDeck}>
            Delete Tab
          </button>
          <button className="saveButton" onClick={createNewDeck}>
            New Tab
          </button>
        </div>
      </div>
      <h3>Sources</h3>
      <div className="addView">
        <div className="labels">
          <p>Name</p>
          <p>Link</p>
        </div>
        <SourceInput view={View()} addView={addView} />
      </div>
      <div className="inputs viewList">
        {decks.length > 0 &&
          decks[deck].getViews().map((view, id) => {
            return <SourceInput key={id} view={view} deleteView={deleteView} id={id} />;
          })}
      </div>
    </Modal>
  );
};

export default SourceController;
