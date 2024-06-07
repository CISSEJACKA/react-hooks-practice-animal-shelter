// Filters.js
import React from 'react';

function Filters({ onChangeType, onFindPetsClick }) {
  const handleChange = (event) => {
    onChangeType(event.target.value);
  };

  return (
    <div className="filters">
      <select onChange={handleChange}>
        <option value="all">All</option>
        <option value="cat">Cats</option>
        <option value="dog">Dogs</option>
        <option value="micropig">Micropigs</option>
      </select>
      <button onClick={onFindPetsClick}>Find pets</button>
    </div>
  );
}

export default Filters;
