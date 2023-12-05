import View from './View';
import Deck from './Deck';
import Header from './components/Header/Header';
import React, { useState, useEffect } from 'react';
import './theme.css';
import './App.css';
import Embed from './components/Embed/Embed';
export const ViewContext = React.createContext(null);

const testView1 = View(
  'First View',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/SY5pK3lCl4A?si=Z9v-h8QMLYx5k1EZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
);
const testView2 = View(
  'Second View',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/4xDzrJKXOOY?si=2Vz_JpPrQn5--DMf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
);

function App() {
  const [deck, setDeck] = useState(0);
  const [columns, setColumns] = useState(2);
  const [decks, setDecks] = useState([
    Deck('Deck 1', [
      testView1,
      testView2,
      testView1,
      testView2,
      testView2,
      testView1,
      testView2,
      testView1,
      testView1,
      testView1,
      testView1,
      testView1,
      testView1,
      testView1,
      testView1,
      testView1,
    ]),
    Deck('Deck 2', [testView1, testView2, testView1, testView2]),
  ]);
  return (
    <div className="App">
      <ViewContext.Provider
        value={{
          deck,
          setDecks,
          decks,
          setDeck,
          columns,
          setColumns,
        }}
      >
        <Header />
        <div className="grid">
          {decks[deck].getViews().map((view) => {
            return <Embed iframe={view.getIFrame()} title={view.getTitle()} />;
          })}
        </div>
      </ViewContext.Provider>
    </div>
  );
}
export default App;
