import React, { useContext } from 'react';
import Product from '../Product';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import AppContext from '../../context/AppContext';
import '../styles/Products.css';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));
const Products = () => {
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;

  const handleAddToCart = (product) => () => {
    addToCart(product);
  };

  const classes = useStyles();
  return (
    <div className="Products">
      <div className={classes.root}>
        <Grid container spacing={1}>
          {products.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4}>
              <Product product={product} handleAddToCart={handleAddToCart} />{' '}
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Products;
