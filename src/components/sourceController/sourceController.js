import React, { useContext, useRef, useEffect, useState } from 'react';
import { ViewContext } from '../../App';
import './sourceController.css';
import SourceInput from '../sourceInput/SourceInput';
import View from '../../View';
import _ from 'lodash';
import { FaEllipsisV, FaPen, FaPlus } from 'react-icons/fa';
import ModalComponent from '../modal/ModalComponent';

const SourceController = () => {
  // get current deck from viewContext
  const {
    decks,
    setDeck,
    deck,
    setDecks,
    controllerOpen,
    setControllerOpen,
    deleteDeck,
    createNewDeck,
  } = useContext(ViewContext);

  const [changedViews, setChangedViews] = useState(0);
  const [name, setName] = useState(decks[deck].getName());
  const refs = useRef(decks.map(() => null));
  const nameInput = useRef(null);
  const [optionsOpen, setOptionsOpen] = useState(false);

  const selectDeck = (index) => {
    setDeck(index);
    const scrollOptions = {
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    };
    refs.current[index].current.scrollIntoView(scrollOptions);
  };

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

  const closeOptions = () => {
    setOptionsOpen(false);
  };

  const openOptions = () => {
    setName(decks[deck].getName());
    setOptionsOpen(true);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Delete' && optionsOpen) {
        deleteDeck();
        closeOptions();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [deleteDeck, optionsOpen]);

  const changeName = (e) => {
    setName(e.target.value);
    decks[deck].setName(e.target.value);
  };

  return (
    <ModalComponent closeModal={closeModal} controllerOpen={controllerOpen}>
      <div className="tabsRow">
        <div className="tabs">
          {decks.map((thisDeck, index) => (
            <button
              className={`TabButton ${deck === index ? 'selected' : ''}`}
              key={index}
              onClick={() => selectDeck(index)}
              ref={refs.current[index] || (refs.current[index] = React.createRef())}
            >
              <p>{thisDeck.getName()}</p>
              <FaEllipsisV id="options" onClick={openOptions} />
            </button>
          ))}
        </div>
        <button
          style={{ background: 'transparent', border: 'none' }}
          onClick={() => {
            setName(createNewDeck().getName());
            openOptions();
          }}
        >
          <FaPlus className="Plus" color="#515151" />
        </button>
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
      <div className="buttons">
        <button className="saveButton" onClick={closeModal}>
          Save
        </button>
      </div>
      <ModalComponent
        className="optionsModal"
        id="optionsModal"
        closeModal={closeOptions}
        controllerOpen={optionsOpen}
        onAfterOpen={() => nameInput.current.focus()}
      >
        <form onSubmit={closeOptions}>
          <input
            className="tabNameInput"
            key={name}
            ref={nameInput}
            value={name}
            onChange={changeName}
            autoFocus
          />

          <section>
            <button type="submit" className="saveButton" id="optionsSave">
              Save
            </button>
            <button
              className="deleteButton"
              onClick={() => {
                deleteDeck();
                closeOptions();
              }}
            >
              Delete
            </button>
          </section>
        </form>
      </ModalComponent>
    </ModalComponent>
  );
};

export default SourceController;
