import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';

import Typography from '@material-ui/core/Typography';

import { Delete } from '@material-ui/icons';

import { actionTypes } from '../Reducers/reducer';
import { useStateValue } from '../Reducers/StateProvider';
import accounting from 'accounting';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  action: {
    marginTop: '1rem',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
}));

export default function CheckoutCard({
  product: { id, name, productType, image, priceCOP, description },
}) {
  const classes = useStyles();
  const [{ basket }, dispatch] = useStateValue();

  const removeItem = () =>
    dispatch({
      type: actionTypes.REMOVE_ITEM,
      id,
    });

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          action={
            <Typography
              className={classes.action}
              variant="h5"
              color="textSecondary"
            >
              {accounting.formatMoney(priceCOP, 'COP')}
            </Typography>
          }
          title={name}
          subheader="In Stock"
        />
        <CardMedia className={classes.media} image={image} title={name} />
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton aria-label="Delete of the cart">
            <Delete fontSize="large" onClick={removeItem} />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
}
