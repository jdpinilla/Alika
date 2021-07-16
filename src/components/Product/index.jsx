import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const Product = ({ product, handleAddToCart }) => {
  return (
    <div className="Product">
      <div className="Products-item">
        <img src={product.image} alt={product.name} />
        <div className="Product-item-info">
          <div className="Product-Info">
            <h2>
              {product.name}
              <span> ${product.priceCOP}</span>
            </h2>
          </div>

          <button type="button" onClick={handleAddToCart(product)}>
            <AiOutlinePlus /> Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
