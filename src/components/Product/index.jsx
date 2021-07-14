import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const Product = ({ product, handleAddToCart }) => {
  return (
    <div className="Products-item">
      <img src={product.image} alt={product.name} />
      <div className="Product-item-info">
        <h2>
          {product.name}
          <span>$ {product.priceCOP}</span>
        </h2>
        <button type="button" onClick={handleAddToCart(product)}>
          <AiOutlinePlus /> Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default Product;
