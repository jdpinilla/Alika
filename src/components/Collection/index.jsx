import React from 'react';
import '../styles/Collections.css';
import image from '../images/product3.jpg';
const Collection = ({ category }) => {
  return (
    <div className="Collection">
      <div className="Title">
        <h1>All Collections</h1>
      </div>

      <div className="Collection_Containers">
        <figure>
          <img src={category.image} alt="/" />
          <div className="Collection_Text">
            <h2>{category.name}</h2>
            <button type="button">{category.name}</button>
          </div>
        </figure>
      </div>
    </div>
  );
};

export default Collection;
