import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ViewContext } from '../../App';
import './Embed.css';

function extractIframeSource(iframe) {
  const regex = /src="(.*?)"/;
  const match = regex.exec(iframe);
  if (match && match.length > 1) return match[1];
  return null;
}

/**
 * Renders an embedded view.
 *
 * @param {Object} props.view - The view object to be embedded.
 * @returns {JSX.Element} The rendered embedded view.
 */
function Embed({ view }) {
  const { decks, deck } = useContext(ViewContext);
  const viewCount = decks[deck].getViews().length;
  const columnMap = [0, 1, 2, 2, 2, 3, 3, 4, 4, 3, 5, 4, 4, 5, 5, 5, 4, 8, 8];
  const columns = viewCount > columnMap.length ? 10000 : columnMap[decks[deck].getViews().length];

  return (
    <div className="view" style={{ minWidth: `calc(100% / ${columns})` }}>
      <p id="title">{view.getTitle()}</p>
      <iframe title={view.getTitle()} src={extractIframeSource(view.getIFrame())} />
    </div>
  );
}

Embed.propTypes = {
  view: PropTypes.object.isRequired,
};

export default Embed;
