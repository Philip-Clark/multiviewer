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

function Embed({ iframe, title }) {
  const { decks, deck, columns } = useContext(ViewContext);

  return (
    <div className="view" style={{ minWidth: `calc(100% / ${columns})` }}>
      <p id="title">{title}</p>
      <iframe src={extractIframeSource(iframe)} />
    </div>
  );
}

export default Embed;
