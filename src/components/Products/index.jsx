import React, { useContext, useState, useEffect } from 'react';
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
  const [filtros, setFiltros] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setFiltros(products);
  }, [products]);

  const handleAddToCart = (product) => () => {
    addToCart(product);
  };

  const classes = useStyles();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    filter(e.target.value);
  };

  const filter = (search) => {
    setFiltros(products);
    var searchResult = products.filter((item) => {
      if (item.name.toString().toLowerCase().includes(search.toLowerCase())) {
        return item;
      }
    });
    setFiltros(searchResult);
  };
  return (
    <div className="Products">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <div className={classes.root}>
        <Grid container spacing={1}>
          {filtros.map((product) => (
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
