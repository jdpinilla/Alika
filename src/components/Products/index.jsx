import React, { useContext, useState, useEffect } from 'react';
import Product from '../Product';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import AppContext from '../../context/AppContext';
import '../styles/Products.css';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    padding: '10px',
  },
}));
const Products = () => {
  const { state, addToCart } = useContext(AppContext);
  const { products, cart } = state;
  const [current, setCurrent] = useState(6);

  const handleUpCurrent = () => {
    setCurrent(current + 3);
  };
  const handleAddToCart = (product) => () => {
    let numeroProductos = 1;
    const existe = cart.find((item) => item.id === product.id);
    const index = cart.findIndex((item) => item.id === product.id);
    if (existe) {
      cart[index].quantity++;
      console.log(cart[index].quantity);
    } else {
      product = { ...product, quantity: numeroProductos };
      addToCart(product);
    }
  };

  const classes = useStyles();

  return (
    <div className="Products">
      <div className={classes.root}>
        <Grid container spacing={3}>
          {products.map(
            (product, index) =>
              index < current && (
                <Grid key={product.id} item xs={12} sm={6} md={4}>
                  <Product
                    product={product}
                    handleAddToCart={handleAddToCart}
                  />{' '}
                </Grid>
              )
          )}
        </Grid>
      </div>
      {current < products.length && (
        <div className="button_Container">
          <button className="button_LoadMore" onClick={handleUpCurrent}>
            CARGAR MAS
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
