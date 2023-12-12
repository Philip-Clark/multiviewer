import { useContext, useEffect, useState } from 'react';
import './Embed.css';
import { ViewContext } from '../../App';

function extractIframeSource(iframe) {
  var regex = /src="(.*?)"/;
  var match = regex.exec(iframe);
  if (match && match.length > 1) {
    return match[1];
  }
  return null;
}

function Embed({ view }) {
  const { decks, deck } = useContext(ViewContext);
  const coloumnMap = [0, 1, 2, 2, 2, 3, 3, 4, 4, 3, 5, 4, 4, 5, 5, 5, 4, 8, 8];
  const viewCount = decks[deck].getViews().length;
  const columns = viewCount > coloumnMap.length ? 10000 : coloumnMap[decks[deck].getViews().length];
  return (
    <div className="view" style={{ minWidth: `calc(100% / ${columns})` }}>
      <p id="title">{view.getTitle()}</p>
      <iframe src={extractIframeSource(view.getIFrame())} />
    </div>
  );
}

export default Embed;
