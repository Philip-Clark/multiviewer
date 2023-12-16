import React, { useContext, useEffect, useRef, useState } from 'react';
import { FaEllipsisV, FaPlus } from 'react-icons/fa';
import { ViewContext } from '../../App';
import View from '../../View';
import ModalComponent from '../modal/ModalComponent';
import SourceInput from '../sourceInput/SourceInput';
import './sourceController.css';

/**
 * SourceController modal component.
 *
 * @component
 * @returns {JSX.Element} SourceController component.
 */
const SourceController = () => {
  const { decks, setDeck, deck, controllerOpen, setControllerOpen, deleteDeck, createNewDeck } =
    useContext(ViewContext);

  const [changedViews, setChangedViews] = useState(0);
  const [name, setName] = useState(decks[deck].getName());
  const [optionsOpen, setOptionsOpen] = useState(false);

  const refs = useRef(decks.map(() => null));
  const nameInput = useRef(null);

  const closeModal = () => setControllerOpen(false);
  const closeOptions = () => setOptionsOpen(false);
  const selectDeck = (index) => {
    setDeck(index);
    const scrollOptions = {
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    };
    refs.current[index].current.scrollIntoView(scrollOptions);
  };
  const addView = (title, iframe) => {
    decks[deck].addView(View(title, iframe));
    setChangedViews(changedViews + 1);
  };
  const deleteView = (id) => {
    decks[deck].removeView(id);
    setChangedViews(changedViews + 1);
  };
  const openOptions = () => {
    setName(decks[deck].getName());
    setOptionsOpen(true);
  };
  const changeName = (e) => {
    setName(e.target.value);
    decks[deck].setName(e.target.value);
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

  const renderTabButton = (thisDeck, index) => {
    const isTabSelected = deck === index ? 'selected' : '';
    const ref = refs.current[index] || (refs.current[index] = React.createRef());

    return (
      <button
        className={`TabButton ${isTabSelected}`}
        key={index}
        onClick={() => selectDeck(index)}
        ref={ref}
      >
        <p>{thisDeck.getName()}</p>
        <FaEllipsisV id="options" onClick={openOptions} />
      </button>
    );
  };

  const renderInput = (view, id) => {
    const key = `deck-${deck}-view-${id}`;
    return <SourceInput key={key} view={view} deleteView={deleteView} id={id} />;
  };

  const onClickNewDeck = () => {
    setName(createNewDeck().getName());
    openOptions();
  };

  return (
    <ModalComponent closeModal={closeModal} controllerOpen={controllerOpen}>
      <div className="tabsRow">
        <div className="tabs">
          {decks.map((thisDeck, index) => renderTabButton(thisDeck, index))}
        </div>
        <button
          style={{ background: 'transparent', border: 'none' }}
          onClick={() => onClickNewDeck()}
        >
          <FaPlus className="Plus" color="#515151" />
        </button>
      </div>
      <div className="sources">
        <h2>Sources</h2>
      </div>

      <div className="inputs viewList">
        {decks[deck].getViews().map((view, id) => renderInput(view, id))}
      </div>
      <button className="add saveButton" onClick={() => addView('', '')}>
        Add Source
      </button>
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
