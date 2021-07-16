import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

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
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de pedidos</h3> : <h3>Sin pedidos...</h3>}
        {cart.map((item, i) => (
          <div className="Checkout-item">
            <div className="Checkout-element">
              <h4>{item.name}</h4>
              <span>${item.priceCOP}</span>
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
