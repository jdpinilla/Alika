import React from 'react';
import '../styles/Collections.css';
const Collection = ({ category }) => {
  return (
    <div className="Collection_Containers">
      <figure>
        <img src={category.image} alt={category.name} />
        <div className="Collection_Text">
          <h2>{category.name}</h2>
          <button type="button">{category.name}</button>
        </div>
      </figure>
    </div>
  );
};

export default Collection;
