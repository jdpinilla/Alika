import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import './styles/Checkout.css';
const CheckoutPage = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product, i) => () => {
    removeFromCart(product, i);
  };

  const handleTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.priceCOP;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };
  return (
    <div className="Checkout">
      {cart.length > 0 ? (
        <h3>Lista de pedidos</h3>
      ) : (
        <div className="No_Product">
          <p>YOUR CART IS EMPTY</p>
          <Link to="/shop">
            <button type="button">SHOP OUR PRODUCTS</button>
          </Link>
        </div>
      )}
      <div className="Checkout-content">
        {cart.map((item, i) => (
          <div className="Checkout-item">
            <div className="Checkout-element-product">
              <img src={item.image} alt={item.name} />
              <div className="Checkout-element-info">
                <h4>{item.name}</h4>
                <span>${item.priceCOP}</span>
              </div>
              <div className="Checkout element-quantity">
                <button>+</button>
                <input type="text" />
                <button>-</button>
              </div>
              <div className="Checkout-element-total"></div>
            </div>

            <button type="button" onClick={handleRemove(item, i)}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio Total: $ ${handleTotal()}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
