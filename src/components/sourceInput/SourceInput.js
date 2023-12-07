import './SourceInput.css';
import React, { useEffect, useState } from 'react';
import './SourceInput.css';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';

const SourceInput = ({ view, addView, deleteView, id }) => {
  const [title, setTitle] = useState(view.getTitle());
  const [IFrame, setIFrame] = useState(view.getIFrame());
  useEffect(() => {
    setTitle(view.getTitle());
    setIFrame(view.getIFrame());
  }, [view, id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'Name') {
      view.setTitle(value);
      setTitle(value);
    } else if (name === 'IFrame') {
      view.setIFrame(value);
      setIFrame(value);
    }
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    if (addView) return addView(title, IFrame);
  };

  const handleDelete = (event) => {
    event.preventDefault();
    deleteView(id);
  };

  return (
    <form className="sourceInput" onSubmit={handleSubmit}>
      <input className="name" type="text" name="Name" onChange={handleInputChange} value={title} />
      <input
        className="iFrame"
        name="IFrame"
        type="text"
        onChange={handleInputChange}
        value={IFrame}
      />
      <button type="submit" style={{ display: 'none' }}></button>

      {addView ? (
        <button className="add" type="submit" onClick={handleSubmit}>
          <FaPlus color="#2f2f2f" />
        </button>
      ) : (
        <button className="delete" type="delete" onClick={handleDelete}>
          <FaMinus color="#2f2f2f" />
        </button>
      )}
    </form>
  );
};

export default SourceInput;
