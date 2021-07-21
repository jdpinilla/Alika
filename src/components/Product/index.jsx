import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    paddingBottom: '5%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

const Product = ({ product, handleAddToCart }) => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <Link to={`/shop/${product.id}`}>
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={product.name}
            subheader={
              product.cantidad > 0 ? <p>Disponible</p> : <p> No Disponible</p>
            }
          />
          <CardMedia
            className={classes.media}
            image={product.image}
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {product.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <AiOutlineShoppingCart onClick={handleAddToCart(product)} />
            </IconButton>
          </CardActions>
        </Link>
      </Card>
    </>
  );
};
// import React from 'react';
// import { AiOutlinePlus } from 'react-icons/ai';

// const Product = ({ product, handleAddToCart }) => {
//   return (
//     <div className="Product">
//       <div className="Products-item">
//         <img src={product.image} alt={product.name} />
//         <div className="Product-Info">
//           <h2>
//             {product.name}
//             <span> ${product.priceCOP}</span>
//           </h2>
//         </div>
//         <button type="button" onClick={handleAddToCart(product)}>
//           <AiOutlinePlus /> Añadir al carrito
//         </button>
//       </div>
//     </div>
//   );
// };

export default Product;
