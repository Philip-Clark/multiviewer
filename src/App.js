import View from './View';
import Deck from './Deck';
import Header from './components/Header/Header';
import React, { useState, useEffect } from 'react';
import './theme.css';
import './App.css';
import Embed from './components/Embed/Embed';
import SourceController from './components/sourceController/sourceController';

export const ViewContext = React.createContext(null);

function App() {
  const [deck, setDeck] = useState(0);
  const [controllerOpen, setControllerOpen] = useState(false);
  const [decks, setDecks] = useState([Deck('Tab 1', []), Deck('Tab 2', [])]);

  const createNewDeck = () => {
    const newDeck = Deck(`Tab ${decks.length + 1}`, []);
    setDecks((prevDecks) => [...prevDecks, newDeck]);
    setDeck(decks.length);
  };
  const deleteDeck = () => {
    setDecks((prevDecks) => {
      const newDecks = [...prevDecks];
      newDecks.splice(deck, 1);
      return newDecks;
    });
    if (deck === 0) {
      setDeck(0);
      setDecks([Deck(`Tab 1`, [])]);
    } else setDeck(deck - 1);
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
          deleteDeck, // Pass the function to context so it can be used in child components
        }}
      >
        <Header />
        <div className="grid">
          {decks.length > 0 &&
            decks[deck].getViews().map((view) => {
              return <Embed iframe={view.getIFrame()} title={view.getTitle()} />;
            })}
        </div>

        <SourceController />
      </ViewContext.Provider>
    </div>
  );
}
export default App;
