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
      accumulator + currentValue.priceCOP * currentValue.quantity;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  const handleAddOne = (i) => () => {
    cart[i].quantity++;
    console.log(cart[i].quantity);
    // window.location.reload
  };
  const handleRestOne = (i) => () => {
    cart[i].quantity--;
    console.log(cart[i].quantity);
    // window.location.reload();
  };
  return (
    <div className="Checkout" >
      {cart.length > 0 ? (
        <div className="Checkout-content">
          <h3>Lista de pedidos</h3>
          {cart.map((item, i) => (
            <div className="Checkout-element">
              <div className="Checkout-element-product">
                <div>
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="Checkout-element-info">
                  <h4>{item.name.toUpperCase()}</h4>
                  <span>${item.priceCOP}</span>
                </div>
                <div className="Checkout-element-buttonSection">
                  <div className="Checkout-element-buttonQuantity">
                    <button type="button" onClick={handleRestOne(i)}>
                      -
                    </button>
                    {item.quantity}
                    <button type="button" onClick={handleAddOne(i)}>
                      +
                    </button>
                  </div>
                  <button
                    className="Checkout-element-buttonRemove"
                    type="button"
                    onClick={handleRemove(item, i)}
                  >
                    REMOVE
                  </button>
                </div>
                <div className="Checkout-element-totalItem">
                  {item.priceCOP * item.quantity}
                </div>
              </div>
            </div>
          ))}

          {cart.length > 0 && (
            <div className="Checkout-sidebar">
              <h3>{`Precio Total: $ ${handleTotal()}`}</h3>
              <Link to="/checkout/payment">
                <button type="button">CONTINUAR PEDIDO</button>
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div className="No_Product">
          <p>YOUR CART IS EMPTY</p>
          <Link to="/shop">
            <button type="button">SHOP OUR PRODUCTS</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
