import View from './View';
import Deck from './Deck';
import Header from './components/Header/Header';
import React, { useState, useEffect } from 'react';
import './theme.css';
import './App.css';
import Embed from './components/Embed/Embed';
import SourceController from './components/sourceController/sourceController';

export const ViewContext = React.createContext(null);

const one = View(
  'christmas Jazz',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/JM-2nzSf7Q0?si=1hFQ6i7R9abz3Nwo&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
);
const two = View(
  'Synth Wave',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/UedTcufyrHc?si=tGpQdaCAUeeSyG7B&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
);
const three = View(
  'Work Jazz',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/S0zv1GMBRtE?si=STkdNHpAYJ_Xy9GO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
);
const four = View(
  'Lofi Girl',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/jfKfPfyJRdk?si=XGHUZEDUFsi8Oi_d&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
);
function App() {
  const storedDecks = JSON.parse(localStorage.getItem('decks'));

  const localDecks = () => {
    const newDecks = storedDecks.map((storedDeck) => {
      const views = storedDeck.views.map((viewData) => {
        return View(viewData.title, viewData.iframe);
      });
      return Deck(storedDeck.name, views);
    });
    return newDecks;
  };

  const [deck, setDeck] = useState(0);
  const [controllerOpen, setControllerOpen] = useState(false);
  const [decks, setDecks] = useState(
    storedDecks
      ? localDecks()
      : [Deck('Demo 1', [one, two, three, four]), Deck('Demo 2', [three, two])]
  );

  const decksData = decks.map((deck) => {
    const viewsData = deck.getViews().map((view) => {
      return {
        title: view.getTitle(),
        iframe: view.getIFrame(),
      };
    });

    return {
      name: deck.getName(),
      views: viewsData,
    };
  });
  localStorage.setItem('decks', JSON.stringify(decksData));

  const [playChanged, setPlayChanged] = useState(0);
  const [muteChanged, setMuteChanged] = useState(0);

  const playPushed = () => {
    setPlayChanged(playChanged + 1);
  };
  const mutePushed = () => {
    setMuteChanged(muteChanged + 1);
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName == 'INPUT') return;
      const key = e.key;
      if (key === '`') setControllerOpen(true);
      if (key === 'ArrowLeft' && deck > 0) setDeck(deck - 1);
      if (key === 'ArrowRight' && deck < decks.length - 1) setDeck(deck + 1);
      if (!isNaN(key) && parseInt(key) >= 0 && parseInt(key) <= decks.length) {
        let nextDeck = parseInt(key) - 1;
        if (nextDeck === -1 && decks.length >= 9) nextDeck = 9;
        setDeck(nextDeck);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [decks, deck]);
  const createNewDeck = () => {
    const newDeck = Deck(`Tab ${decks.length + 1}`, []);
    setDecks((prevDecks) => [...prevDecks, newDeck]);
    setDeck(decks.length);
    return newDeck;
  };
  const deleteDeck = () => {
    setDecks((prevDecks) => {
      const newDecks = [...prevDecks];
      newDecks.splice(deck, 1);
      return newDecks;
    });
    if (decks.length === 1) {
      setDeck(0);
      setDecks([Deck(`Tab 1`, [])]);
    } else setDeck(deck === 0 ? deck : deck - 1);
  };

  return (
    <div className="App">
      <ViewContext.Provider
        value={{
          deck,
          setDecks,
          decks,
          setDeck,
          controllerOpen,
          setControllerOpen,
          createNewDeck,
          deleteDeck,
          playPushed,
          mutePushed,
        }}
      >
        <Header />
        <div className="grid">
          {decks.length > 0 &&
            decks[deck].getViews().map((view) => {
              return (
                <Embed iframe={view.getIFrame()} key={view.getIFrame()} title={view.getTitle()} />
              );
            })}
        </div>

        <SourceController />
      </ViewContext.Provider>
    </div>
  );
}
export default App;
