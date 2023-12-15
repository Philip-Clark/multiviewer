import React, { useEffect, useState } from 'react';
import './App.css';
import Deck from './Deck';
import View from './View';
import Embed from './components/Embed/Embed';
import Header from './components/Header/Header';
import SourceController from './components/sourceController/sourceController';
import Welcome from './components/welcomeTile/Welcome';
import './theme.css';
import FeedBackModal from './components/FeedBackModal/FeedBackModal';

export const ViewContext = React.createContext(null);

const localDecks = (storedDecks) => {
  const newDecks = storedDecks.map((storedDeck) => {
    const views = storedDeck.views.map((viewData) => {
      return View(viewData.title, viewData.iframe);
    });
    return Deck(storedDeck.name, views);
  });
  return newDecks;
};

function App() {
  const storedDecks = JSON.parse(localStorage.getItem('decks'));
  const savedDeck = JSON.parse(localStorage.getItem('deck'));
  const [deck, setDeck] = useState(savedDeck ? savedDeck : 0);
  const [controllerOpen, setControllerOpen] = useState(false);
  const [feedBackOpen, setFeedBackOpen] = useState(false);
  const [decks, setDecks] = useState(storedDecks ? localDecks(storedDecks) : [Deck('Welcome', [])]);

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

  useEffect(() => {
    const handleKeyDown = (e) => {
      const isInputFocused = e.target.tagName === 'INPUT';
      if (isInputFocused) return;

      const key = e.key;
      const openOptionsHotKey = '`';
      const keyNumber = parseInt(key);
      const canGoToPreviousDeck = deck > 0;
      const canGoToNextDeck = deck + 1 < decks.length;

      if (!isNaN(key) && keyNumber >= 0 && keyNumber <= decks.length) setDeck(keyNumber - 1);
      if (key === 'ArrowLeft' && canGoToPreviousDeck) setDeck(deck - 1);
      if (key === 'ArrowRight' && canGoToNextDeck) setDeck(deck + 1);
      if (key === openOptionsHotKey) setControllerOpen(true);
    };

    localStorage.setItem('deck', JSON.stringify(deck));

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
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
          feedBackOpen,
          setFeedBackOpen,
          createNewDeck,
          deleteDeck,
        }}
      >
        <Header />
        <div className="grid">
          {decks[deck].getViews().length > 0 ? (
            decks[deck].getViews().map((view, index) => {
              return <Embed view={view} key={`deck${deck}-view${index}`} />;
            })
          ) : (
            <Welcome openController={setControllerOpen} />
          )}
        </div>

        <SourceController />
        <FeedBackModal />
      </ViewContext.Provider>
    </div>
  );
}
export default App;
