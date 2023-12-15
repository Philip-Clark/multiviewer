import './SourceInput.css';
import React, { useEffect, useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import PropTypes from 'prop-types';

/**
 * SourceInput component.
 * @param {Object} props - The component props.
 * @param {Object} props.view - The view object.
 * @param {Function} props.addView - The function to add a view.
 * @param {Function} props.deleteView - The function to delete a view.
 * @param {string} props.id - The ID of the view.
 * @returns {JSX.Element} The rendered SourceInput component.
 */
const SourceInput = ({ view, addView, deleteView, id }) => {
  const [title, setTitle] = useState(view.getTitle());
  const [iframe, setIframe] = useState(view.getIFrame());

  useEffect(() => {
    setTitle(view.getTitle());
    setIframe(view.getIFrame());
  }, [view, id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'Name') {
      view.setTitle(value);
      setTitle(value);
    } else if (name === 'IFrame') {
      view.setIFrame(value);
      setIframe(value);
    }
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    if (addView) return addView(title, iframe);
  };

  const handleDelete = (event) => {
    event.preventDefault();
    deleteView(id);
  };

  const renderAddDeleteButton = () => {
    if (addView)
      return (
        <button className="add" type="submit" onClick={handleSubmit}>
          <FaPlus color="#2f2f2f" />
        </button>
      );

    return (
      <button className="delete" type="delete" onClick={handleDelete}>
        <FaMinus color="#2f2f2f" />
      </button>
    );
  };

  return (
    <form className="sourceInput" onSubmit={handleSubmit}>
      <input
        className="name"
        type="text"
        name="Name"
        onChange={handleInputChange}
        value={title}
        placeholder="Display name"
      />
      <input
        className="iFrame"
        name="IFrame"
        type="text"
        onChange={handleInputChange}
        value={iframe}
        placeholder="<Iframe /> embed code"
      />
      <button type="submit" style={{ display: 'none' }}></button>
      {renderAddDeleteButton()}
    </form>
  );
};

SourceInput.propTypes = {
  view: PropTypes.object.isRequired,
  addView: PropTypes.func.isRequired,
  deleteView: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default SourceInput;
